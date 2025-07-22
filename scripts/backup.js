#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para criar backup completo do projeto
 * Uso: npm run backup
 */

async function createBackup() {
  try {
    console.log('🚀 Iniciando backup completo...');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(__dirname, '../backups/complete');
    const backupName = `backup-${timestamp}`;
    const backupPath = path.join(backupDir, backupName);
    
    // Cria diretório de backup
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }
    
    console.log(`📁 Criando backup em: ${backupPath}`);
    
    // Lista de arquivos/diretórios importantes para backup
    const itemsToBackup = [
      'src/',
      'public/',
      'package.json',
      'package-lock.json',
      'next.config.js',
      'tailwind.config.js',
      'tsconfig.json',
      'vercel.json',
      '.env.example',
      'README.md'
    ];
    
    // Copia cada item
    for (const item of itemsToBackup) {
      const sourcePath = path.join(__dirname, '..', item);
      const destPath = path.join(backupPath, item);
      
      if (fs.existsSync(sourcePath)) {
        const stat = fs.statSync(sourcePath);
        
        if (stat.isDirectory()) {
          // Copia diretório recursivamente
          execSync(`cp -r "${sourcePath}" "${destPath}"`, { stdio: 'inherit' });
          console.log(`📂 Copiado diretório: ${item}`);
        } else {
          // Copia arquivo
          fs.copyFileSync(sourcePath, destPath);
          console.log(`📄 Copiado arquivo: ${item}`);
        }
      } else {
        console.log(`⚠️  Item não encontrado: ${item}`);
      }
    }
    
    // Cria arquivo de metadados do backup
    const metadata = {
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      node_version: process.version,
      git_branch: process.env.GITHUB_REF_NAME || 'unknown',
      git_commit: process.env.GITHUB_SHA || 'unknown',
      backup_items: itemsToBackup,
      backup_size: calculateDirectorySize(backupPath)
    };
    
    fs.writeFileSync(
      path.join(backupPath, 'backup-metadata.json'),
      JSON.stringify(metadata, null, 2),
      'utf8'
    );
    
    // Comprime o backup (opcional)
    if (process.argv.includes('--compress')) {
      console.log('🗜️  Comprimindo backup...');
      execSync(`cd "${backupDir}" && tar -czf "${backupName}.tar.gz" "${backupName}"`, { stdio: 'inherit' });
      console.log(`📦 Backup comprimido: ${backupName}.tar.gz`);
    }
    
    console.log('✅ Backup criado com sucesso!');
    console.log(`📊 Tamanho: ${formatBytes(metadata.backup_size)}`);
    console.log(`📅 Data: ${metadata.timestamp}`);
    console.log(`📁 Local: ${backupPath}`);
    
  } catch (error) {
    console.error('❌ Erro ao criar backup:', error.message);
    process.exit(1);
  }
}

function calculateDirectorySize(dirPath) {
  let totalSize = 0;
  
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      totalSize += calculateDirectorySize(filePath);
    } else {
      totalSize += stat.size;
    }
  }
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

createBackup();