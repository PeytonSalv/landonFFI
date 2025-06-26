import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0891b2",
};

export const metadata: Metadata = {
  title: "Alabama ATM Services | Free ATM Placement Birmingham, Montgomery, Mobile | Ford Frontier Investments",
  description: "Leading Alabama ATM services company. Free ATM placement in Birmingham, Montgomery, Mobile, Huntsville, and throughout Alabama. Increase revenue 20% with our premium ATM solutions. Call (404) 747-3899 for free consultation.",
  keywords: "Alabama ATM services, free ATM placement Alabama, Birmingham ATM company, Montgomery ATM services, Mobile ATM placement, Huntsville ATM provider, Alabama ATM revenue, ATM business Alabama, ATM partnership Alabama",
  authors: [{ name: "Ford Frontier Investments" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Alabama ATM Services | Ford Frontier Investments",
    description: "Leading Alabama ATM services provider. Free ATM placement across Birmingham, Montgomery, Mobile, Huntsville, and all of Alabama.",
    type: "website",
    locale: "en_US",
    siteName: "Ford Frontier Investments",
    url: "https://fordfrontierinvestments.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alabama ATM Services | Ford Frontier Investments",
    description: "Leading Alabama ATM services provider. Free ATM placement across Birmingham, Montgomery, Mobile, Huntsville, and all of Alabama.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ford Frontier Investments",
              "description": "Leading Alabama ATM services provider offering free ATM placement, payment processing, and ATM partnership programs across Birmingham, Montgomery, Mobile, Huntsville, and all of Alabama.",
              "url": "https://fordfrontierinvestments.com",
              "telephone": "+1-404-747-3899",
              "email": "Landon@fordfrontierinvestments.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "AL",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Alabama"
                },
                {
                  "@type": "City",
                  "name": "Birmingham"
                },
                {
                  "@type": "City", 
                  "name": "Montgomery"
                },
                {
                  "@type": "City",
                  "name": "Mobile"
                },
                {
                  "@type": "City",
                  "name": "Huntsville"
                }
              ],
              "serviceType": [
                "ATM Placement Services",
                "ATM Partnership Programs", 
                "Payment Processing Solutions",
                "ATM Revenue Sharing"
              ],
              "priceRange": "Free ATM Placement",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": []
            })
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
