This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Production Deployment on Vercel

This project is configured for deployment on Vercel with specific branch management:

#### Branch Strategy
- **`production`** branch: Stable releases that go to production
- **`main`** branch: Development and testing (not auto-deployed to production)

#### Vercel Configuration
The project includes a `vercel.json` configuration that:
- Disables automatic deployment from `main` branch
- Enables deployment only from `production` branch
- Includes security headers and redirects

#### Deployment Process

1. **For Production Releases:**
   ```bash
   # Ensure you're on the production branch
   git checkout production
   
   # Merge changes from main (after testing)
   git merge main
   
   # Push to trigger production deployment
   git push origin production
   ```

2. **Manual Promotion (Emergency Fix):**
   If the wrong deployment is live:
   - Go to Vercel Dashboard → Project → Deployments
   - Find the correct deployment
   - Click ⋯ → "Promote to Production" → Confirm
   - Test the domain after 15-30 seconds

3. **Domain Management:**
   - Production domain should point to `production` branch deployments
   - Preview domains can be used for `main` branch testing

#### Preventing Deployment Issues

1. **Always use the production branch for releases:**
   - Only merge tested and approved changes to `production`
   - Keep `main` as development/staging branch

2. **Verify deployments:**
   - Check the deployment shows "Production" badge
   - Test the live domain after each deployment
   - Use hard refresh (Ctrl+F5) or incognito tab to bypass cache

3. **Emergency Procedures:**
   - If wrong deployment goes live, immediately promote the correct one
   - Update Git settings in Vercel to ensure `production` branch is the production branch
   - Document any manual interventions for future reference

#### Domain Configuration
- Production: `https://www.lojacastorcabofrio.com.br`
- WhatsApp redirect: `/whatsapp` → `https://wa.me/5522992410112`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
