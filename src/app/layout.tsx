import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loja Castor Cabo Frio - Colchões e Produtos para Dormir',
  description: 'Loja especializada em colchões Castor em Cabo Frio. Encontre o colchão perfeito para uma noite de sono reparadora. Amazon Prime Gel, Silver Star Air, Technopadic e muito mais.',
  keywords: ['colchões', 'Castor', 'Cabo Frio', 'sono', 'descanso', 'Amazon Prime Gel', 'Silver Star Air'],
  authors: [{ name: 'Loja Castor Cabo Frio' }],
  openGraph: {
    title: 'Loja Castor Cabo Frio - Colchões e Produtos para Dormir',
    description: 'Loja especializada em colchões Castor em Cabo Frio. Encontre o colchão perfeito para uma noite de sono reparadora.',
    url: 'https://www.lojacastorcabofrio.com.br',
    siteName: 'Loja Castor Cabo Frio',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}