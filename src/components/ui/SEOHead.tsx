import { Helmet } from 'react-helmet-async';
import type { SEOProps } from '../../types';
import { seoDefaults } from '../../data';

interface SEOHeadProps extends Partial<SEOProps> {}

export function SEOHead({ 
  title = seoDefaults.title,
  description = seoDefaults.description,
  keywords = seoDefaults.keywords,
  image = seoDefaults.image,
  url = seoDefaults.url 
}: SEOHeadProps) {
  const fullTitle = title === seoDefaults.title ? title : `${title} | Loja Castor Cabo Frio`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Loja Castor Cabo Frio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Loja Castor Cabo Frio",
          "description": description,
          "url": url,
          "telephone": "(22) 99241-0112",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Júlia Kubitschek, Nº 64 – Jardim Flamboyant",
            "addressLocality": "Cabo Frio",
            "addressRegion": "RJ",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-22.8808",
            "longitude": "-42.0186"
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 08:00-17:00"
          ],
          "priceRange": "$$",
          "image": image,
          "sameAs": [
            "https://www.instagram.com/castorcabofrio"
          ]
        })}
      </script>
    </Helmet>
  );
}