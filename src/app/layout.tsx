import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "react-hot-toast"
import Script from "next/script"
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "WallTik - TikTok Shop Automation Software | Multi-Platform E-commerce Management",
  description: "Automate your TikTok Shop, Amazon, and eBay businesses with WallTik. Manage inventory, orders, and product sourcing with AI-powered tools. Start your 14-day $1 trial today.",
  keywords: ["TikTok Shop automation", "e-commerce software", "Amazon seller tools", "eBay management", "product sourcing automation", "multi-platform selling", "inventory management"],
  authors: [{ name: "WallTik" }],
  creator: "WallTik",
  publisher: "WallTik",
  metadataBase: new URL('https://walltik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "WallTik - TikTok Shop Automation & E-commerce Management Software",
    description: "All-in-one platform to automate your TikTok Shop, Amazon, and eBay businesses. AI-powered tools for inventory, orders, and product sourcing.",
    url: 'https://walltik.com',
    siteName: 'WallTik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WallTik - E-commerce Automation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WallTik - TikTok Shop Automation Software',
    description: 'Automate your e-commerce business across TikTok, Amazon, and eBay with AI-powered tools.',
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <CookieConsentProvider>
          <SessionWrapper>
            <ClientBody>{children}</ClientBody>
            <CookieConsent />
          </SessionWrapper>
        </CookieConsentProvider>
        <Toaster position="top-right" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-G40ZBWZD2L`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G40ZBWZD2L');
          `}
        </Script>

        <Script id="structured-data" strategy="beforeInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WallTik",
            "description": "Multi-platform e-commerce automation software for TikTok Shop, Amazon, and eBay sellers",
            "url": "https://walltik.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "1",
              "priceCurrency": "USD",
              "description": "14-day trial period",
              "availability": "https://schema.org/InStock"
            },
            "creator": {
              "@type": "Organization",
              "name": "WallTik",
              "url": "https://walltik.com"
            },
            "featureList": [
              "TikTok Shop automation",
              "Amazon seller tools", 
              "eBay management",
              "Product sourcing automation",
              "Inventory management",
              "Order processing",
              "Multi-platform integration"
            ],
            "screenshot": "https://res.cloudinary.com/dqg6ernew/image/upload/v1748666448/Gemini_Generated_Image_jmmp98jmmp98jmmp_bx3hqn.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          }
          `}
        </Script>
      </body>
    </html>
  );
}
