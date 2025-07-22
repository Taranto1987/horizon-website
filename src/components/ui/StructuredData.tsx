import { CONTACT_INFO, COMPANY_INFO } from '@/constants/contact';

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": COMPANY_INFO.name,
    "description": COMPANY_INFO.description,
    "url": `https://${CONTACT_INFO.website}`,
    "logo": `https://${CONTACT_INFO.website}/logo.png`,
    "foundingDate": COMPANY_INFO.foundedYear.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.number}`,
      "addressLocality": CONTACT_INFO.address.city,
      "addressRegion": CONTACT_INFO.address.state,
      "addressCountry": "BR"
    },
    "telephone": CONTACT_INFO.phone,
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-16:00"
    ],
    "sameAs": [
      `https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Colchões e Produtos para o Sono",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Colchões",
            "category": "Bedroom Furniture"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Travesseiros",
            "category": "Bedroom Accessories"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}