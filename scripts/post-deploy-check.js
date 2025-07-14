#!/usr/bin/env node

/**
 * Script para checklist pós-deploy
 * Uso: npm run post-deploy
 * 
 * ⚠️ Nota: Verificações de rede foram desabilitadas devido a limitações de firewall
 * Para testes completos, execute manualmente após o deploy
 */

async function postDeployCheck() {
  console.log('🚀 Iniciando checklist pós-deploy...');
  console.log('📋 Verificando componentes locais\n');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lojacastorcabofrio.com.br';
  const checks = [];
  
  try {
    // 1. Verificar arquivos essenciais
    console.log('1️⃣ Verificando arquivos essenciais...');
    const fs = require('fs');
    const path = require('path');
    
    const essentialFiles = [
      '.next/BUILD_ID',
      'public/robots.txt',
      'vercel.json',
      'package.json'
    ];
    
    for (const file of essentialFiles) {
      const exists = fs.existsSync(path.join(process.cwd(), file));
      checks.push({
        test: `Arquivo ${file}`,
        status: exists ? 'PASS' : 'FAIL',
        details: exists ? 'Encontrado' : 'Não encontrado'
      });
    }
    
    // 2. Verificar estrutura da build
    console.log('2️⃣ Verificando build Next.js...');
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      const buildId = fs.readFileSync(path.join(nextDir, 'BUILD_ID'), 'utf8').trim();
      checks.push({
        test: 'Build Next.js',
        status: 'PASS',
        details: `Build ID: ${buildId}`
      });
    } else {
      checks.push({
        test: 'Build Next.js',
        status: 'FAIL',
        details: 'Diretório .next não encontrado'
      });
    }
    
    // 3. Verificar variáveis de ambiente
    console.log('3️⃣ Verificando variáveis de ambiente...');
    const requiredEnvs = ['NEXT_PUBLIC_SITE_URL'];
    
    for (const env of requiredEnvs) {
      const exists = !!process.env[env];
      checks.push({
        test: `Env ${env}`,
        status: exists ? 'PASS' : 'WARN',
        details: exists ? 'Configurada' : 'Não configurada'
      });
    }
    
    // 4. Verificar package.json
    console.log('4️⃣ Verificando configuração do projeto...');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    checks.push({
      test: 'Scripts npm',
      status: packageJson.scripts && packageJson.scripts.build ? 'PASS' : 'FAIL',
      details: `Scripts disponíveis: ${Object.keys(packageJson.scripts || {}).length}`
    });
    
    checks.push({
      test: 'Dependências',
      status: packageJson.dependencies && packageJson.dependencies.next ? 'PASS' : 'FAIL',
      details: `Next.js: ${packageJson.dependencies?.next || 'Não encontrado'}`
    });
    
  } catch (error) {
    console.error('❌ Erro durante checklist:', error.message);
    checks.push({
      test: 'Checklist Execution',
      status: 'FAIL',
      details: error.message
    });
  }
  
  // Relatório final
  console.log('\n📊 RELATÓRIO FINAL:');
  console.log('='.repeat(50));
  
  let passed = 0;
  let failed = 0;
  let warnings = 0;
  
  checks.forEach(check => {
    const icon = check.status === 'PASS' ? '✅' : check.status === 'WARN' ? '⚠️' : '❌';
    console.log(`${icon} ${check.test}: ${check.status}`);
    if (check.details) {
      console.log(`   ${check.details}`);
    }
    
    if (check.status === 'PASS') passed++;
    else if (check.status === 'WARN') warnings++;
    else failed++;
  });
  
  console.log('\n📈 RESUMO:');
  console.log(`✅ Passou: ${passed}`);
  console.log(`⚠️ Avisos: ${warnings}`);
  console.log(`❌ Falhou: ${failed}`);
  
  // Instruções manuais para verificação externa
  console.log('\n🌐 VERIFICAÇÕES MANUAIS NECESSÁRIAS:');
  console.log('1. Acesse:', baseUrl);
  console.log('2. Teste WhatsApp links nos produtos');
  console.log('3. Teste calculadora de biotipo');
  console.log('4. Verifique sitemap:', `${baseUrl}/sitemap.xml`);
  console.log('5. Teste responsividade mobile');
  console.log('6. Verifique Analytics (pode levar algumas horas)');
  
  // Status de saída
  if (failed > 0) {
    console.log('\n🚨 AÇÃO NECESSÁRIA: Corrija os erros listados acima');
    process.exit(1);
  } else {
    console.log('\n🎉 CHECKLIST CONCLUÍDO: Projeto pronto para produção!');
    process.exit(0);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  postDeployCheck().catch(error => {
    console.error('❌ Erro fatal:', error);
    process.exit(1);
  });
}

module.exports = { postDeployCheck };