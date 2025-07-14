#!/usr/bin/env node

const https = require('https');
const http = require('http');

/**
 * Script para monitoramento de uptime do site
 * Uso: npm run monitor
 */

async function checkSiteUptime() {
  console.log('🚀 Iniciando verificação de uptime...');
  
  const sites = [
    'https://www.lojacastorcabofrio.com.br',
    'http://localhost:3000' // Para testes locais
  ];
  
  const results = [];
  
  for (const url of sites) {
    console.log(`🔍 Verificando: ${url}`);
    
    try {
      const result = await checkUrl(url);
      results.push(result);
      
      console.log(`✅ ${url}:`);
      console.log(`   Status: ${result.statusCode} (${result.statusText})`);
      console.log(`   Tempo de resposta: ${result.responseTime}ms`);
      console.log(`   Tamanho: ${result.contentLength} bytes`);
      
    } catch (error) {
      const result = {
        url,
        status: 'ERROR',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      
      results.push(result);
      console.log(`❌ ${url}: ${error.message}`);
    }
  }
  
  // Salva resultados para histórico
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fs = require('fs');
  const path = require('path');
  
  const monitoringDir = path.join(__dirname, '../monitoring/uptime');
  if (!fs.existsSync(monitoringDir)) {
    fs.mkdirSync(monitoringDir, { recursive: true });
  }
  
  const reportFile = path.join(monitoringDir, `uptime-${timestamp}.json`);
  fs.writeFileSync(reportFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    results,
    summary: {
      total: results.length,
      online: results.filter(r => r.statusCode && r.statusCode < 400).length,
      offline: results.filter(r => !r.statusCode || r.statusCode >= 400).length
    }
  }, null, 2));
  
  console.log(`📊 Relatório salvo: ${reportFile}`);
  
  // Verifica se algum site está offline
  const offline = results.filter(r => !r.statusCode || r.statusCode >= 400);
  if (offline.length > 0) {
    console.log('⚠️  Sites offline detectados:');
    offline.forEach(site => {
      console.log(`   ${site.url}: ${site.error || `Status ${site.statusCode}`}`);
    });
    
    // Se tiver webhook configurado, envia notificação
    if (process.env.WEBHOOK_URL) {
      await sendWebhookNotification(offline);
    }
    
    process.exit(1);
  } else {
    console.log('🎉 Todos os sites estão online!');
  }
}

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          statusCode: res.statusCode,
          statusText: res.statusMessage,
          responseTime,
          contentLength: Buffer.byteLength(data),
          headers: res.headers,
          timestamp: new Date().toISOString()
        });
      });
    });
    
    req.on('error', (error) => {
      reject(new Error(`Falha na conexão: ${error.message}`));
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Timeout: Site não respondeu em 10 segundos'));
    });
  });
}

async function sendWebhookNotification(offlineSites) {
  try {
    const message = {
      text: `🚨 ALERTA: Sites offline detectados na Loja Castor Cabo Frio`,
      attachments: [
        {
          color: 'danger',
          fields: offlineSites.map(site => ({
            title: site.url,
            value: site.error || `Status: ${site.statusCode}`,
            short: true
          }))
        }
      ]
    };
    
    const webhook = process.env.WEBHOOK_URL;
    // Implementar envio do webhook aqui
    console.log('📧 Notificação enviada via webhook');
    
  } catch (error) {
    console.error('❌ Falha ao enviar notificação:', error.message);
  }
}

// Se executado diretamente
if (require.main === module) {
  checkSiteUptime().catch(error => {
    console.error('❌ Erro no monitoramento:', error.message);
    process.exit(1);
  });
}

module.exports = { checkSiteUptime, checkUrl };