# Horizon Website - Loja Castor Cabo Frio

Este é um site Next.js 14 para a Loja Castor Cabo Frio, especializada em colchões e produtos para dormir.

## Tecnologias Utilizadas

- **Next.js 14** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **SEO otimizado** com meta tags, robots.txt e sitemap.xml

## Estrutura do Projeto

```
├── src/
│   ├── app/           # App Router (Next.js 13+)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/    # Componentes React
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       └── Catalog.tsx
├── public/           # Arquivos estáticos
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── package.json      # Dependências e scripts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── vercel.json       # Configuração Vercel
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm run start

# Linting
npm run lint
```

## Deploy no Vercel

O projeto está configurado para deploy automático no Vercel. O arquivo `vercel.json` contém as configurações necessárias.

## Contato da Loja

- **Endereço**: Av. Júlia Kubitschek, Nº 64 - Jardim Flamboyant, Cabo Frio - RJ
- **WhatsApp**: (22) 99241-0112
- **Instagram**: @castorcabofrio
- **Site**: https://www.lojacastorcabofrio.com.br/