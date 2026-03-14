import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "react-hot-toast"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WallTik | E-Commerce Automation Platform",
  description: "Automate your TikTok shop business with Walltik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <SessionWrapper>
          <ClientBody>{children}</ClientBody>
        </SessionWrapper>
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
      </body>
    </html>
  );
}
