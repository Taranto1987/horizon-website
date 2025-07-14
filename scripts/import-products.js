#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script para importar produtos de arquivo JSON
 * Uso: npm run import:products [arquivo.json]
 */

async function importProducts() {
  try {
    console.log('🚀 Iniciando importação de produtos...');
    
    // Verifica se foi fornecido um arquivo
    const inputFile = process.argv[2];
    if (!inputFile) {
      console.log('❌ Especifique o arquivo JSON para importar:');
      console.log('   npm run import:products backup/produtos-2024-01-01.json');
      process.exit(1);
    }
    
    // Verifica se o arquivo existe
    const importPath = path.resolve(inputFile);
    if (!fs.existsSync(importPath)) {
      throw new Error(`Arquivo não encontrado: ${importPath}`);
    }
    
    // Lê o arquivo JSON
    const importData = fs.readFileSync(importPath, 'utf8');
    console.log(`📁 Lendo arquivo: ${importPath}`);
    
    // Lê o arquivo atual de produtos
    const productsPath = path.join(__dirname, '../src/components/BiotipoCalculator/calculatorData.ts');
    const currentContent = fs.readFileSync(productsPath, 'utf8');
    
    // Cria backup do arquivo atual antes de alterar
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(__dirname, '../backups/calculator-data');
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const backupFile = path.join(backupDir, `calculatorData-backup-${timestamp}.ts`);
    fs.writeFileSync(backupFile, currentContent, 'utf8');
    console.log(`💾 Backup criado: ${backupFile}`);
    
    // Substitui os produtos no arquivo atual (implementação simplificada)
    const newContent = currentContent.replace(
      /export const castorProducts.*?=\s*\[[\s\S]*?\];/,
      `export const castorProducts: Product[] = ${importData};`
    );
    
    // Escreve o novo conteúdo
    fs.writeFileSync(productsPath, newContent, 'utf8');
    
    console.log('✅ Produtos importados com sucesso!');
    console.log('🔄 Reinicie o servidor de desenvolvimento para ver as mudanças');
    
  } catch (error) {
    console.error('❌ Erro ao importar produtos:', error.message);
    process.exit(1);
  }
}

importProducts();