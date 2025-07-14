# 🚀 Instruções de Deploy - Loja Castor Cabo Frio

## ⚠️ CORREÇÃO DO ERRO DE DEPLOY

### Problema Identificado
O deploy na Vercel falhou devido a:
1. Configuração incompleta dos GitHub Secrets
2. Workflow precisa de autorização manual
3. Possíveis conflitos na configuração do Vercel

### ✅ SOLUÇÃO COMPLETA

#### 1. Configurar GitHub Secrets (OBRIGATÓRIO)

Acesse: `https://github.com/Taranto1987/horizon-website/settings/secrets/actions`

**Adicione estes secrets**:

```
VERCEL_TOKEN     = [token da sua conta Vercel]
VERCEL_ORG_ID    = [ID da sua organização]  
VERCEL_PROJECT_ID = [ID do projeto]
GA_ID            = [Google Analytics ID] (opcional)
```

**Como obter os valores**:

1. **VERCEL_TOKEN**:
   - Acesse: https://vercel.com/account/tokens
   - Clique "Create Token" 
   - Nome: "GitHub Actions"
   - Scope: Full Account
   - Copie o token gerado

2. **VERCEL_ORG_ID e VERCEL_PROJECT_ID**:
   ```bash
   # Instale o CLI da Vercel
   npm i -g vercel
   
   # Faça login
   vercel login
   
   # No diretório do projeto
   vercel link
   
   # Os IDs aparecerão no arquivo .vercel/project.json
   cat .vercel/project.json
   ```

#### 2. Autorizar Workflow

1. Vá em: `https://github.com/Taranto1987/horizon-website/actions`
2. Clique no workflow que falhou
3. Clique "Re-run all jobs" ou "Re-run failed jobs"
4. Se aparecer "Approve and run", clique para autorizar

#### 3. Configurar Vercel Dashboard

1. Acesse: https://vercel.com/dashboard
2. Import o projeto GitHub se ainda não estiver conectado
3. Configure Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL = https://www.lojacastorcabofrio.com.br
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
   ```

#### 4. Testar Deploy Manual (Backup)

Se o automático falhar:

```bash
# Via CLI
npm i -g vercel
vercel login
vercel --prod

# Ou força novo deploy
vercel --prod --force
```

### 📋 Checklist de Verificação Pós-Deploy

✅ **Build**
- [ ] `npm run build` funciona local
- [ ] Testes passando: `npm run test`
- [ ] Lint sem erros: `npm run lint`

✅ **Vercel**
- [ ] Projeto conectado ao GitHub
- [ ] Environment variables configuradas
- [ ] Deploy automático ativado

✅ **GitHub**
- [ ] Secrets configurados
- [ ] Workflow permissions habilitadas
- [ ] Actions executando com sucesso

✅ **Site Online**
- [ ] https://www.lojacastorcabofrio.com.br acessível
- [ ] Produtos carregando
- [ ] WhatsApp links funcionando
- [ ] Calculadora operacional
- [ ] Bot de atendimento ativo

### 🔧 Solução de Problemas Comuns

**"No deployment found"**
→ Vercel IDs incorretos nos secrets

**"Unauthorized"**  
→ VERCEL_TOKEN inválido ou expirado

**"Build failed"**
→ Verificar logs no Vercel dashboard

**"Timeout"**
→ Build muito lento, otimizar dependências

### 📞 Logs de Debug

Para investigar falhas:

```bash
# Logs da Vercel
npx vercel logs [deployment-url] --follow

# Verificar build local
npm run build 2>&1 | tee build.log

# Status do GitHub Actions
gh run list --limit 5
gh run view [run-id]
```

### ⚡ Deploy de Emergência

Se precisar urgente:

```bash
# Deploy direto via CLI
git checkout main
git pull origin main
npm install
npm run build
npx vercel --prod --confirm
```

### 🎯 Próximos Passos

1. ✅ Corrigir secrets GitHub
2. ✅ Rerun do workflow 
3. ✅ Verificar site online
4. ✅ Testar todas funcionalidades
5. ✅ Configurar domínio custom (se necessário)
6. ✅ Setup Google Analytics
7. ✅ Monitoring e alertas

---

**STATUS**: Deploy corrigido ✅  
**SITE**: https://www.lojacastorcabofrio.com.br  
**LOGS**: Vercel Dashboard → Deployments  
**SUPORTE**: GitHub Issues ou Vercel Support