import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "react-hot-toast"
import Script from "next/script"
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WallTik - Find Best Deals & Compare Prices | Shop Smarter",
  description: "Compare prices from multiple stores, discover hot deals, and save more on every purchase. Find the cheapest products across Shopee, Amazon, and more.",
  keywords: ["best deals", "price comparison", "cheapest products", "discount finder", "compare prices", "hot deals", "save money", "shopping deals"],
  authors: [{ name: "WallTik" }],
  creator: "WallTik",
  publisher: "WallTik",
  metadataBase: new URL('https://walltik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "WallTik - Find Best Deals & Compare Prices Across Multiple Stores",
    description: "Compare prices from multiple stores, discover hot deals, and save more on every purchase. Shop smarter with WallTik.",
    url: 'https://walltik.com',
    siteName: 'WallTik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WallTik - Best Deals & Price Comparison Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WallTik - Find Best Deals & Compare Prices',
    description: 'Compare prices from multiple stores and discover hot deals. Save more on every purchase.',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
            "@type": "WebSite",
            "name": "WallTik",
            "description": "Price comparison and deals platform to find the best prices across multiple stores and save money on every purchase",
            "url": "https://walltik.com",
            "applicationCategory": "ShoppingApplication",
            "operatingSystem": "Web",
            "creator": {
              "@type": "Organization",
              "name": "WallTik",
              "url": "https://walltik.com"
            },
            "featureList": [
              "Price comparison across stores",
              "Deal discovery and discounts", 
              "Hot deals aggregation",
              "Multi-platform shopping",
              "Smart shopping tools",
              "Best price finder"
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
