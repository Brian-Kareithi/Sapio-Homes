import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SkipToContent from "@/components/layout/SkipToContent";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingScreen from "@/components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sapio Homes | Affordable Luxury Living",
  description:
    "Sapio Homes — where intelligent design meets affordable luxury. Experience thoughtfully crafted spaces governed by quality, innovation, and timeless elegance.",
  openGraph: {
    title: "Sapio Homes | Affordable Luxury Living",
    description:
      "Sapio Homes — where intelligent design meets affordable luxury.",
    type: "website",
    siteName: "Sapio Homes",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script src="/theme-init.js" />
        <script src="/loading-failsafe.js" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <LoadingScreen />
          <SkipToContent />
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
