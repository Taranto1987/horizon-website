import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'
import './globals.css'

// Use system fonts as fallback since network access may be limited

export const metadata: Metadata = {
  title: 'Loja Castor Cabo Frio - Produtos de Qualidade',
  description: 'Encontre os melhores produtos na Loja Castor Cabo Frio. Qualidade e tradição há anos servindo Cabo Frio e região.',
  keywords: 'castor, cabo frio, loja, produtos, qualidade, tradicional',
  authors: [{ name: 'Loja Castor Cabo Frio' }],
  creator: 'Loja Castor Cabo Frio',
  publisher: 'Loja Castor Cabo Frio',
  openGraph: {
    title: 'Loja Castor Cabo Frio',
    description: 'Produtos de qualidade em Cabo Frio',
    url: 'https://www.lojacastorcabofrio.com.br',
    siteName: 'Loja Castor Cabo Frio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loja Castor Cabo Frio',
    description: 'Produtos de qualidade em Cabo Frio',
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
        <GoogleAnalytics />
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}