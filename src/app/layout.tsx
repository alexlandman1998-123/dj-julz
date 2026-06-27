import "./globals.css";

import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

import { Analytics } from "@/components/shared/analytics";
import { Providers } from "@/components/shared/providers";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DJ Julz | Wedding & Event DJ Pretoria",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    title: "DJ Julz | Wedding & Event DJ Pretoria",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/dj-julz-hero-optimized.jpg",
        width: 1200,
        height: 675,
        alt: "DJ Julz wedding and event DJ setup in Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Julz | Wedding & Event DJ Pretoria",
    description: siteConfig.description,
    images: ["/images/dj-julz-hero-optimized.jpg"],
  },
  keywords: [
    "Wedding DJ Pretoria",
    "Wedding DJ Gauteng",
    "Event DJ Pretoria",
    "Corporate DJ Pretoria",
    "Wedding entertainment Pretoria",
    "DJ Centurion",
    "DJ Johannesburg",
    "DJ Midrand",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
