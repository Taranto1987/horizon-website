import { companyInfo } from '@/data/products';

export function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "description": companyInfo.description,
    "url": companyInfo.website,
    "telephone": companyInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address,
      "addressLocality": "Cabo Frio",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.8794,
      "longitude": -42.0273
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "priceRange": "$$",
    "image": "/images/loja-fachada.jpg",
    "sameAs": [
      "https://www.instagram.com/castorcabofrio",
      companyInfo.googleMaps
    ]
  };
}

export function generateProductSchema(productName: string, description: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "Castor"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "seller": {
        "@type": "Organization",
        "name": companyInfo.name
      }
    }
  };
}