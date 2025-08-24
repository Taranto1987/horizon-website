# Deployment Checklist - Loja Castor Cabo Frio

## Pre-Deployment Checklist

### Code Quality
- [ ] All changes tested locally (`npm run dev`)
- [ ] Build successful (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] No console errors or warnings
- [ ] All links and WhatsApp redirect working

### Content Review
- [ ] Product information is accurate
- [ ] Prices are up to date
- [ ] Contact information is correct
- [ ] Images and icons display properly
- [ ] Meta tags and SEO information updated

## Production Deployment Process

### Step 1: Prepare Release
```bash
# Switch to main branch and pull latest changes
git checkout main
git pull origin main

# Run tests and build
npm run lint
npm run build

# Test locally
npm run dev
```

### Step 2: Deploy to Production
```bash
# Switch to production branch
git checkout production

# Merge changes from main
git merge main

# Push to trigger deployment
git push origin production
```

### Step 3: Verify Deployment
- [ ] Check Vercel dashboard shows successful deployment
- [ ] Verify "Production" badge on the deployment
- [ ] Test live domain: `https://www.lojacastorcabofrio.com.br`
- [ ] Test WhatsApp redirect: `https://www.lojacastorcabofrio.com.br/whatsapp`
- [ ] Check site in different browsers/devices
- [ ] Verify no broken links or missing content

## Emergency Procedures

### Wrong Deployment Live (Site Azul Issue)
1. **Immediate Fix (1 minute):**
   - Go to Vercel Dashboard → Deployments
   - Find the correct/good deployment
   - Click ⋯ → "Promote to Production" → Confirm
   - Test domain after 15-30 seconds

2. **Prevent Recurrence:**
   - Settings → Git → Set "Production Branch" to `production`
   - Settings → Domains → Mark correct domain as "Production"
   - Remove or demote incorrect domain

### Rollback Procedure
If deployment causes issues:
1. Identify last known good deployment in Vercel dashboard
2. Promote the previous working deployment
3. Fix issues in development
4. Test thoroughly before re-deploying

## Vercel Dashboard Navigation

### Key Locations
- **Deployments**: See all deployments and their status
- **Settings → Git**: Configure which branch triggers production deployments
- **Settings → Domains**: Manage domain assignments and aliases
- **Settings → Environment Variables**: Manage environment-specific configuration

### Important Settings
- Production Branch: `production`
- Production Domain: `www.lojacastorcabofrio.com.br`
- Auto-deploy from main: **DISABLED**
- Auto-deploy from production: **ENABLED**

## Troubleshooting

### Common Issues
1. **Blue site appearing**: Usually means main branch deployed instead of production
2. **Build failures**: Check for TypeScript errors or missing dependencies
3. **Broken links**: Verify all internal links use correct paths
4. **WhatsApp not working**: Check redirect configuration in vercel.json

### Contact Information
- WhatsApp Business: (22) 99241-0112
- Domain: www.lojacastorcabofrio.com.br
- Business: Loja Castor Cabo Frio

## Notes
- Always test in incognito/private browsing to avoid cache issues
- Keep this checklist updated when deployment process changes
- Document any manual interventions in project issues/commits