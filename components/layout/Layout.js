import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, title = "Loja Castor Cabo Frio", description = "Especialista em colchões e produtos para o sono em Cabo Frio - RJ" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Loja Castor Cabo Frio" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lojacastorcabofrio.com.br" />
        <meta property="og:site_name" content="Loja Castor Cabo Frio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Loja Castor Cabo Frio",
              "description": "Especialista em colchões e produtos para o sono",
              "url": "https://www.lojacastorcabofrio.com.br",
              "telephone": "+55-22-99241-0112",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Júlia Kubitschek, Nº 64",
                "addressLocality": "Cabo Frio",
                "addressRegion": "RJ",
                "addressCountry": "BR",
                "postalCode": "28900-000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-22.8786",
                "longitude": "-42.0376"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-16:00"
              ],
              "priceRange": "$$",
              "image": "https://www.lojacastorcabofrio.com.br/logo.png"
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.lojacastorcabofrio.com.br" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}