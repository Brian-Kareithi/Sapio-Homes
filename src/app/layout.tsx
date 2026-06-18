import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            })();
          `}
        </Script>
        <Script id="loading-failsafe" strategy="beforeInteractive">
          {`
            (function() {
              document.documentElement.classList.add('overflow-hidden');
              setTimeout(function() {
                var el = document.getElementById('loading-screen');
                if (el) {
                  el.style.display = 'none';
                }
                document.documentElement.classList.remove('overflow-hidden');
              }, 3000);
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LoadingScreen />
          <SkipToContent />
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
