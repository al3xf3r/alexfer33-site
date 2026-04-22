import "./globals.css";
import type { Metadata } from "next";

const SITE_URL = "https://al33xf.xyz";
const SITE_NAME = "al33xf";
const DEFAULT_TITLE = "Web Designer in Sicilia | Siti Web, App e Soluzioni Web3 - al33xf";
const DEFAULT_DESCRIPTION =
  "Realizzo siti web professionali, landing page, applicazioni web, soluzioni Web3 e automazioni AI in Sicilia. Design premium, codice pulito e delivery pronta per la produzione.";
const OG_IMAGE = "/assets/og.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: "%s | al33xf",
  },

  description: DEFAULT_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: "al33xf", url: SITE_URL }],
  creator: "al33xf",
  publisher: "al33xf",

  keywords: [
    "web designer Sicilia",
    "sviluppatore web Sicilia",
    "creazione siti web Sicilia",
    "sviluppo siti web Sicilia",
    "sviluppatore applicazioni Sicilia",
    "sviluppo app Sicilia",
    "web designer Catania",
    "sviluppatore web Catania",
    "landing page Sicilia",
    "sviluppo web3 Italia",
    "smart contract developer Italia",
    "automazioni AI Sicilia",
    "sviluppatore Next.js Italia",
    "designer siti web professionali",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      it: "/it",
      "x-default": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "al33xf - Web Designer in Sicilia, sviluppo siti web, app e soluzioni Web3",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@al33xf",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}