#!/usr/bin/env node

const { checkUrl } = require('./monitor');

/**
 * Script para checklist pós-deploy
 * Uso: npm run post-deploy
 */

async function postDeployCheck() {
  console.log('🚀 Iniciando checklist pós-deploy...');
  console.log('📋 Verificando todos os componentes críticos\n');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lojacastorcabofrio.com.br';
  const checks = [];
  
  try {
    // 1. Teste de conectividade básica
    console.log('1️⃣ Testando conectividade básica...');
    const mainSite = await checkUrl(baseUrl);
    checks.push({
      test: 'Conectividade Principal',
      status: mainSite.statusCode === 200 ? 'PASS' : 'FAIL',
      details: `Status: ${mainSite.statusCode}, Tempo: ${mainSite.responseTime}ms`
    });
    
    // 2. Teste do sitemap
    console.log('2️⃣ Verificando sitemap...');
    try {
      const sitemap = await checkUrl(`${baseUrl}/api/sitemap`);
      checks.push({
        test: 'Sitemap XML',
        status: sitemap.statusCode === 200 ? 'PASS' : 'FAIL',
        details: `Status: ${sitemap.statusCode}`
      });
    } catch (error) {
      checks.push({
        test: 'Sitemap XML',
        status: 'FAIL',
        details: error.message
      });
    }
    
    // 3. Teste do robots.txt
    console.log('3️⃣ Verificando robots.txt...');
    try {
      const robots = await checkUrl(`${baseUrl}/robots.txt`);
      checks.push({
        test: 'Robots.txt',
        status: robots.statusCode === 200 ? 'PASS' : 'FAIL',
        details: `Status: ${robots.statusCode}`
      });
    } catch (error) {
      checks.push({
        test: 'Robots.txt',
        status: 'FAIL',
        details: error.message
      });
    }
    
    // 4. Teste de SSL
    console.log('4️⃣ Verificando SSL...');
    checks.push({
      test: 'SSL/HTTPS',
      status: baseUrl.startsWith('https') ? 'PASS' : 'FAIL',
      details: baseUrl.startsWith('https') ? 'HTTPS configurado' : 'HTTP apenas - SSL necessário'
    });
    
    // 5. Verificação de performance básica
    console.log('5️⃣ Testando performance básica...');
    const performanceCheck = mainSite.responseTime < 3000;
    checks.push({
      test: 'Performance Básica',
      status: performanceCheck ? 'PASS' : 'WARN',
      details: `Tempo de resposta: ${mainSite.responseTime}ms (ideal: < 3000ms)`
    });
    
    // 6. Verificação de tamanho da página
    console.log('6️⃣ Verificando tamanho da página...');
    const sizeCheck = mainSite.contentLength < 2000000; // 2MB
    checks.push({
      test: 'Tamanho da Página',
      status: sizeCheck ? 'PASS' : 'WARN',
      details: `Tamanho: ${(mainSite.contentLength / 1024).toFixed(2)}KB`
    });
    
    // 7. Verificação de headers de segurança
    console.log('7️⃣ Verificando headers de segurança...');
    const securityHeaders = ['x-frame-options', 'x-content-type-options', 'x-xss-protection'];
    const missingHeaders = securityHeaders.filter(header => !mainSite.headers[header]);
    checks.push({
      test: 'Headers de Segurança',
      status: missingHeaders.length === 0 ? 'PASS' : 'WARN',
      details: missingHeaders.length === 0 ? 'Todos os headers presentes' : `Faltando: ${missingHeaders.join(', ')}`
    });
    
  } catch (error) {
    console.error('❌ Erro durante os testes:', error.message);
  }
  
  // Exibe resultados
  console.log('\n📊 RESULTADOS DO CHECKLIST PÓS-DEPLOY\n');
  console.log('=' .repeat(60));
  
  let passCount = 0;
  let warnCount = 0;
  let failCount = 0;
  
  checks.forEach((check, index) => {
    const icon = check.status === 'PASS' ? '✅' : check.status === 'WARN' ? '⚠️' : '❌';
    console.log(`${icon} ${check.test}: ${check.status}`);
    console.log(`   ${check.details}\n`);
    
    if (check.status === 'PASS') passCount++;
    else if (check.status === 'WARN') warnCount++;
    else failCount++;
  });
  
  console.log('=' .repeat(60));
  console.log(`📈 RESUMO: ${passCount} PASSOU | ${warnCount} AVISOS | ${failCount} FALHAS\n`);
  
  // Checklist manual adicional
  console.log('📋 CHECKLIST MANUAL ADICIONAL:');
  console.log('');
  console.log('□ Funcionalidades:');
  console.log('  □ Produtos são exibidos corretamente');
  console.log('  □ Bot de atendimento abre e funciona');
  console.log('  □ Calculadora de biotipo funciona end-to-end');
  console.log('  □ Links do WhatsApp abrem corretamente');
  console.log('  □ Formulários funcionam (se houver)');
  console.log('');
  console.log('□ SEO & Analytics:');
  console.log('  □ Google Analytics está rastreando');
  console.log('  □ Search Console está configurado');
  console.log('  □ Meta tags estão corretas');
  console.log('  □ Structured data está presente');
  console.log('');
  console.log('□ Mobile & Acessibilidade:');
  console.log('  □ Site responsivo em dispositivos móveis');
  console.log('  □ Navegação por teclado funciona');
  console.log('  □ Contraste de cores adequado');
  console.log('  □ Textos alternativos em imagens');
  console.log('');
  console.log('□ Performance:');
  console.log('  □ Lighthouse score > 90 (performance)');
  console.log('  □ Imagens otimizadas');
  console.log('  □ Cache funcionando');
  console.log('  □ CDN configurado (se aplicável)');
  console.log('');
  
  // Salva relatório
  const fs = require('fs');
  const path = require('path');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  const reportsDir = path.join(__dirname, '../reports/post-deploy');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const reportFile = path.join(reportsDir, `post-deploy-${timestamp}.json`);
  fs.writeFileSync(reportFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    baseUrl,
    checks,
    summary: {
      total: checks.length,
      passed: passCount,
      warnings: warnCount,
      failed: failCount
    }
  }, null, 2));
  
  console.log(`💾 Relatório salvo: ${reportFile}`);
  
  // Determina código de saída
  if (failCount > 0) {
    console.log('\n❌ Deploy com falhas críticas detectadas!');
    process.exit(1);
  } else if (warnCount > 0) {
    console.log('\n⚠️  Deploy concluído com avisos - revisar itens marcados');
    process.exit(0);
  } else {
    console.log('\n🎉 Deploy concluído com sucesso - todos os testes passaram!');
    process.exit(0);
  }
}

postDeployCheck().catch(error => {
  console.error('❌ Erro no checklist pós-deploy:', error.message);
  process.exit(1);
});