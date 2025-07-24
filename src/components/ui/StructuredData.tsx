import Script from 'next/script';

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.lojacastorcabofrio.com.br",
    "name": "Loja Castor Cabo Frio",
    "alternateName": "Castor Cabo Frio",
    "description": "Loja especializada em colchões, travesseiros e acessórios da marca Castor em Cabo Frio. Mais de 30 anos oferecendo qualidade e conforto para o seu sono.",
    "url": "https://www.lojacastorcabofrio.com.br",
    "telephone": "+55-22-99241-012",
    "email": "contato@lojacastorcabofrio.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Júlia Kubitschek, 64",
      "addressLocality": "Jardim Flamboyant",
      "addressRegion": "RJ",
      "postalCode": "28909-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.8808,
      "longitude": -42.0278
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/castorcabofrio",
      "https://wa.me/5522992401012"
    ],
    "image": "https://www.lojacastorcabofrio.com.br/logo.png",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
    "currenciesAccepted": "BRL",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -22.8808,
        "longitude": -42.0278
      },
      "geoRadius": "50000"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData)
      }}
    />
  );
}