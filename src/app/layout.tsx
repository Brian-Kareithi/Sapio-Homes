import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SkipToContent from "@/components/layout/SkipToContent";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://sapiohome.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sapio Homes | Affordable Luxury Living in Nairobi",
    template: "%s | Sapio Homes",
  },
  description:
    "Sapio Homes — where intelligent design meets affordable luxury. Thoughtfully crafted apartments and residences across Nairobi, governed by quality, innovation, and timeless elegance.",
  keywords: [
    "Sapio Homes",
    "Nairobi real estate",
    "apartments for sale Nairobi",
    "affordable luxury homes Kenya",
    "property management Nairobi",
  ],
  openGraph: {
    title: "Sapio Homes | Affordable Luxury Living in Nairobi",
    description:
      "Where intelligent design meets affordable luxury — thoughtfully crafted residences across Nairobi.",
    url: SITE_URL,
    type: "website",
    siteName: "Sapio Homes",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapio Homes | Affordable Luxury Living in Nairobi",
    description:
      "Where intelligent design meets affordable luxury — thoughtfully crafted residences across Nairobi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/theme-init.js" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/loading-failsafe.js" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <LoadingScreen />
          <SkipToContent />
          <Navbar />
          <ErrorBoundary>
            <main id="main-content" className="flex-1 bg-app-bg">
              {children}
            </main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
