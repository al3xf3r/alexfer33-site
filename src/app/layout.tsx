// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const SITE_URL = "https://al33xf.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "al33xf — Web3 & AI Full-Stack Builder",
    template: "%s — al33xf",
  },
  description:
    "Web3 & AI builder. Smart contracts (Solidity/EVM), tokens, AI agents, NFT platforms, dashboards, automations, and full-stack apps. Production-ready delivery.",
  applicationName: "al33xf",
  authors: [{ name: "al33xf", url: SITE_URL }],
  creator: "al33xf",
  publisher: "al33xf",
  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "al33xf",
    title: "al33xf — Web3 & AI Full-Stack Builder",
    description:
      "Smart contracts, tokens, AI agents, NFT platforms, dashboards, automations and full-stack apps. Premium UI, clean engineering, production delivery.",
    images: [
      {
        url: "/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "al33xf — Web3 & AI Full-Stack Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@al33xf",
    title: "al33xf — Web3 & AI Full-Stack Builder",
    description:
      "Smart contracts, tokens, AI agents, NFT platforms, dashboards, automations and full-stack apps.",
    images: ["/assets/og.webp"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}