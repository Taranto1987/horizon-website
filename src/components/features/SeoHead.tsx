import { contactInfo } from '@/data/products';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SeoHead({ 
  title = "Loja Castor Cabo Frio - Colchões e Travesseiros",
  description = "Loja Castor Cabo Frio oferece os melhores colchões e travesseiros para seu conforto. Entrega rápida e qualidade garantida.",
  keywords = "colchões, travesseiros, Castor, Cabo Frio, loja de colchões, sono, conforto",
  ogImage,
  structuredData
}: SeoHeadProps) {
  const baseUrl = "https://www.lojacastorcabofrio.com.br";
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Loja Castor Cabo Frio",
    "description": description,
    "url": baseUrl,
    "telephone": contactInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Júlia Kubitschek, Nº 64",
      "addressLocality": "Cabo Frio",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.8788,
      "longitude": -42.0256
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$",
    "image": ogImage || `${baseUrl}/logo.png`,
    "sameAs": [
      `https://instagram.com/${contactInfo.instagram.replace('@', '')}`,
      contactInfo.googleMaps
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Loja Castor Cabo Frio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="pt-BR" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Loja Castor Cabo Frio" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Loja Castor" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="BR-RJ" />
      <meta name="geo.placename" content="Cabo Frio" />
      <meta name="geo.position" content="-22.8788;-42.0256" />
      <meta name="ICBM" content="-22.8788, -42.0256" />

      {/* Business Tags */}
      <meta name="business:contact_data:street_address" content="Av. Júlia Kubitschek, Nº 64" />
      <meta name="business:contact_data:locality" content="Cabo Frio" />
      <meta name="business:contact_data:region" content="RJ" />
      <meta name="business:contact_data:country_name" content="Brasil" />
      <meta name="business:contact_data:phone_number" content={contactInfo.phone} />
    </>
  );
}