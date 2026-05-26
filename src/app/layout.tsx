import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "al33xf — Software, AI & Web3 Developer",
  description:
    "Independent developer building CRM systems, operational dashboards, AI automation, premium websites and Web3 infrastructure for modern companies in Sicily and beyond.",
  metadataBase: new URL("https://al33xf.xyz"),
  keywords: [
    "web designer Sicilia", "sviluppatore web Sicilia", "CRM Sicilia",
    "gestionali Sicilia", "siti web Sicilia", "AI automation Sicilia",
    "dashboard operative", "software house Sicilia", "AI systems",
    "Web3 developer", "SaaS systems", "smart contract developer",
    "Hash42 Labs", "al33xf",
  ],
  openGraph: {
    title: "al33xf — Software, AI & Web3 Developer",
    description: "Building CRM systems, operational dashboards, AI automation and Web3 infrastructure.",
    url: "https://al33xf.xyz",
    siteName: "al33xf",
    images: ["/assets/og.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "al33xf — Software, AI & Web3",
    description: "CRM · Dashboards · AI · Web3 · Premium Websites",
    images: ["/assets/og.webp"],
  },
  alternates: {
    canonical: "https://al33xf.xyz",
    languages: { "it": "https://al33xf.xyz/it", "en": "https://al33xf.xyz" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-[#050608] text-white antialiased">
        {children}
      </body>
    </html>
  );
}