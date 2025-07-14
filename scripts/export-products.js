#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script para exportar produtos em formato JSON
 * Uso: npm run export:products
 */

async function exportProducts() {
  try {
    console.log('🚀 Iniciando exportação de produtos...');
    
    // Lê os dados dos produtos
    const productsPath = path.join(__dirname, '../src/components/BiotipoCalculator/calculatorData.ts');
    const productsContent = fs.readFileSync(productsPath, 'utf8');
    
    // Extrai apenas os produtos (regex simples para demonstração)
    const match = productsContent.match(/export const castorProducts.*?=\s*(\[[\s\S]*?\]);/);
    
    if (!match) {
      throw new Error('Não foi possível encontrar os produtos no arquivo');
    }
    
    // Cria arquivo de backup
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(__dirname, '../backups/products');
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const backupFile = path.join(backupDir, `produtos-${timestamp}.json`);
    
    // Converte para JSON limpo (simplificado)
    const productsData = match[1];
    fs.writeFileSync(backupFile, productsData, 'utf8');
    
    console.log(`✅ Produtos exportados com sucesso!`);
    console.log(`📁 Arquivo: ${backupFile}`);
    console.log(`📊 Timestamp: ${timestamp}`);
    
  } catch (error) {
    console.error('❌ Erro ao exportar produtos:', error.message);
    process.exit(1);
  }
}

exportProducts();