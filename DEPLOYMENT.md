# Guia de Deploy - Horizon Website

Este documento fornece instruções para fazer o deploy da aplicação Horizon Website (Loja Castor Cabo Frio).

## Pré-requisitos

### 1. Configuração de Chave SSH

Para realizar o deploy via SSH, primeiro você precisa gerar uma chave SSH ed25519:

```bash
ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
```

**Importante:** Substitua `seu_email@exemplo.com` pelo seu email real.

Após executar o comando:
1. Quando solicitado o local para salvar a chave, pressione Enter para usar o local padrão
2. Digite uma senha segura quando solicitado (recomendado)
3. A chave será salva em `~/.ssh/id_ed25519` (privada) e `~/.ssh/id_ed25519.pub` (pública)

### 2. Configuração do Servidor

1. Copie a chave pública para o servidor:
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor.com
```

2. Ou adicione manualmente ao arquivo `~/.ssh/authorized_keys` no servidor

## Deploy Manual

### Preparação
```bash
# Instalar dependências
npm install

# Executar build de produção
npm run build
```

### Upload dos Arquivos
```bash
# Sincronizar arquivos via rsync
rsync -avz --delete dist/ usuario@servidor.com:/caminho/para/webroot/
```

## Deploy Automatizado (GitHub Actions)

Para configurar deploy automatizado, adicione sua chave SSH privada como secret no GitHub:

1. Acesse as configurações do repositório
2. Vá em `Settings` > `Secrets and variables` > `Actions`
3. Adicione um novo secret chamado `DEPLOY_SSH_KEY` com o conteúdo da sua chave privada

## Estrutura dos Arquivos

- `dist/` - Arquivos buildados para produção
- `src/` - Código fonte da aplicação
- `public/` - Arquivos estáticos públicos

## Verificação do Deploy

Após o deploy, verifique:
1. Site acessível na URL de produção
2. Calculadora de biotipo funcionando
3. Links do WhatsApp direcionando corretamente
4. Imagens e assets carregando

## Troubleshooting

### Erro de Permissão SSH
```bash
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

### Erro de Build
Verifique se todas as dependências estão instaladas:
```bash
npm ci
```

### Problemas com Assets
Certifique-se que todas as imagens referenciadas existem no diretório `public/` ou `src/assets/`.