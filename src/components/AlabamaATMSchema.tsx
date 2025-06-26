export default function AlabamaATMSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://fordfrontierinvestments.com/#business",
        "name": "Ford Frontier Investments",
        "alternateName": "Ford Frontier ATM Services",
        "description": "Leading Alabama ATM services provider offering free ATM placement, payment processing, and ATM partnership programs throughout Alabama including Birmingham, Montgomery, Mobile, and Huntsville.",
        "url": "https://fordfrontierinvestments.com",
        "telephone": "+1-404-747-3899",
        "email": "Landon@fordfrontierinvestments.com",
        "priceRange": "Free ATM Placement",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "AL",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "State",
            "name": "Alabama",
            "@id": "https://en.wikipedia.org/wiki/Alabama"
          },
          {
            "@type": "City",
            "name": "Birmingham",
            "containedInPlace": "Alabama, US"
          },
          {
            "@type": "City",
            "name": "Montgomery", 
            "containedInPlace": "Alabama, US"
          },
          {
            "@type": "City",
            "name": "Mobile",
            "containedInPlace": "Alabama, US"
          },
          {
            "@type": "City",
            "name": "Huntsville",
            "containedInPlace": "Alabama, US"
          },
          {
            "@type": "City",
            "name": "Tuscaloosa",
            "containedInPlace": "Alabama, US"
          },
          {
            "@type": "City",
            "name": "Auburn",
            "containedInPlace": "Alabama, US"
          }
        ],
        "serviceType": [
          "ATM Placement Services Alabama",
          "ATM Partnership Programs Alabama", 
          "Payment Processing Solutions Alabama",
          "ATM Revenue Sharing Alabama",
          "Free ATM Placement Alabama"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Alabama ATM Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Free ATM Placement Alabama",
                "description": "Free ATM placement service for businesses throughout Alabama"
              },
              "price": "0",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "ATM Partnership Program Alabama",
                "description": "Revenue sharing ATM partnership program for Alabama businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Payment Processing Alabama",
                "description": "Comprehensive payment processing solutions for Alabama businesses"
              }
            }
          ]
        },
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 32.3617,
            "longitude": -86.2792
          },
          "geoRadius": "200000"
        },
        "openingHours": "Mo-Fr 09:00-17:00",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://fordfrontierinvestments.com/#website",
        "url": "https://fordfrontierinvestments.com",
        "name": "Ford Frontier Investments - Alabama ATM Services",
        "description": "Leading Alabama ATM services provider",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fordfrontierinvestments.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 