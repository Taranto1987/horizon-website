#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para restaurar backup
 * Uso: npm run restore [caminho-do-backup]
 */

async function restoreBackup() {
  try {
    console.log('🚀 Iniciando restauração de backup...');
    
    const backupPath = process.argv[2];
    if (!backupPath) {
      console.log('❌ Especifique o caminho do backup:');
      console.log('   npm run restore backups/complete/backup-2024-01-01T10-00-00-000Z');
      console.log('   npm run restore backups/complete/backup-2024-01-01T10-00-00-000Z.tar.gz');
      process.exit(1);
    }
    
    const fullBackupPath = path.resolve(backupPath);
    
    // Verifica se é arquivo comprimido
    if (backupPath.endsWith('.tar.gz')) {
      console.log('📦 Descomprimindo backup...');
      const extractDir = path.dirname(fullBackupPath);
      execSync(`cd "${extractDir}" && tar -xzf "${path.basename(fullBackupPath)}"`, { stdio: 'inherit' });
      
      // Atualiza o caminho para o diretório extraído
      const backupName = path.basename(fullBackupPath, '.tar.gz');
      fullBackupPath = path.join(extractDir, backupName);
    }
    
    if (!fs.existsSync(fullBackupPath)) {
      throw new Error(`Backup não encontrado: ${fullBackupPath}`);
    }
    
    // Verifica se é um backup válido
    const metadataPath = path.join(fullBackupPath, 'backup-metadata.json');
    if (!fs.existsSync(metadataPath)) {
      throw new Error('Arquivo de metadados não encontrado. Backup pode estar corrompido.');
    }
    
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    console.log('📋 Informações do backup:');
    console.log(`   Data: ${metadata.timestamp}`);
    console.log(`   Versão: ${metadata.version}`);
    console.log(`   Tamanho: ${formatBytes(metadata.backup_size)}`);
    
    // Confirmação de segurança
    if (!process.argv.includes('--force')) {
      console.log('');
      console.log('⚠️  ATENÇÃO: Esta operação irá sobrescrever os arquivos atuais!');
      console.log('   Para confirmar, execute com --force:');
      console.log(`   npm run restore "${backupPath}" -- --force`);
      process.exit(0);
    }
    
    // Cria backup do estado atual antes de restaurar
    console.log('💾 Criando backup do estado atual...');
    const currentBackupScript = path.join(__dirname, 'backup.js');
    execSync(`node "${currentBackupScript}"`, { stdio: 'inherit' });
    
    // Restaura cada item do backup
    console.log('🔄 Restaurando arquivos...');
    
    for (const item of metadata.backup_items) {
      const sourcePath = path.join(fullBackupPath, item);
      const destPath = path.join(__dirname, '..', item);
      
      if (fs.existsSync(sourcePath)) {
        const stat = fs.statSync(sourcePath);
        
        // Remove o item atual se existir
        if (fs.existsSync(destPath)) {
          if (stat.isDirectory()) {
            fs.rmSync(destPath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(destPath);
          }
        }
        
        if (stat.isDirectory()) {
          // Copia diretório recursivamente
          execSync(`cp -r "${sourcePath}" "${destPath}"`, { stdio: 'inherit' });
          console.log(`📂 Restaurado diretório: ${item}`);
        } else {
          // Copia arquivo
          fs.copyFileSync(sourcePath, destPath);
          console.log(`📄 Restaurado arquivo: ${item}`);
        }
      } else {
        console.log(`⚠️  Item não encontrado no backup: ${item}`);
      }
    }
    
    console.log('✅ Backup restaurado com sucesso!');
    console.log('🔄 Execute "npm install" para restaurar dependências');
    console.log('🚀 Execute "npm run dev" para iniciar o servidor');
    
  } catch (error) {
    console.error('❌ Erro ao restaurar backup:', error.message);
    process.exit(1);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

restoreBackup();