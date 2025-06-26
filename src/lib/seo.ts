export const seoConfig = {
  siteName: "Ford Frontier Investments",
  siteUrl: "https://fordfrontierinvestments.com",
  
  // Alabama-focused keywords
  primaryKeywords: [
    "Alabama ATM services",
    "Birmingham ATM placement", 
    "Montgomery ATM services",
    "Mobile ATM company",
    "Huntsville ATM provider",
    "free ATM placement Alabama",
    "Alabama ATM revenue",
    "ATM business Alabama"
  ],
  
  secondaryKeywords: [
    "Tuscaloosa ATM",
    "Auburn ATM services", 
    "Alabama payment processing",
    "ATM partnership Alabama",
    "Alabama ATM company",
    "ATM services Birmingham",
    "ATM placement Montgomery",
    "Mobile ATM placement",
    "Huntsville ATM business"
  ],
  
  // City-specific data
  alabamaCities: [
    "Birmingham",
    "Montgomery", 
    "Mobile",
    "Huntsville",
    "Tuscaloosa",
    "Hoover",
    "Dothan",
    "Auburn",
    "Decatur",
    "Madison",
    "Florence",
    "Gadsden"
  ],
  
  // Service descriptions
  services: {
    atmPlacement: {
      name: "Free ATM Placement Alabama",
      description: "Free ATM placement service for businesses throughout Alabama including Birmingham, Montgomery, Mobile, and Huntsville"
    },
    partnership: {
      name: "ATM Partnership Program Alabama", 
      description: "Revenue sharing ATM partnership program for Alabama businesses"
    },
    paymentProcessing: {
      name: "Payment Processing Alabama",
      description: "Comprehensive payment processing solutions for Alabama businesses"
    }
  },
  
  // Contact info
  contact: {
    phone: "+1-404-747-3899",
    email: "Landon@fordfrontierinvestments.com",
    displayPhone: "(404) 747-3899"
  },
  
  // Geographic data
  geo: {
    state: "Alabama",
    stateCode: "AL", 
    coordinates: {
      latitude: 32.3617,
      longitude: -86.2792
    },
    radius: "200000" // 200km radius
  }
};

// Generate page-specific SEO metadata
export function generateSEOMetadata(page: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}) {
  const fullTitle = `${page.title} | ${seoConfig.siteName}`;
  const canonicalUrl = page.path ? `${seoConfig.siteUrl}${page.path}` : seoConfig.siteUrl;
  
  return {
    title: fullTitle,
    description: page.description,
    keywords: page.keywords ? page.keywords.join(", ") : seoConfig.primaryKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      type: "website" as const,
      url: canonicalUrl,
      siteName: seoConfig.siteName
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description: page.description
    }
  };
} 