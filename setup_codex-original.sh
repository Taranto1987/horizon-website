#!/bin/bash
echo "🚀 Configurando Codex AutoPilot..."

# 1. Inicializa git se não existir
git init
git branch -M main
git add .
git commit -m "Configuração inicial Codex Auto Deploy"

# 2. Cria repositório remoto automaticamente
gh repo create Taranto1987/horizon-website --private --source=. --push

echo "✅ Repositório criado e enviado para GitHub!"

echo "Agora vá no GitHub > Settings > Secrets > Actions e adicione:"
echo "  - VERCEL_TOKEN"
echo "  - VERCEL_ORG_ID"
echo "  - VERCEL_PROJECT_ID"

echo "Assim o Codex vai fazer deploy sozinho SEM INTERVENÇÃO."
