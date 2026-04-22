import type { Metadata } from "next";

const SITE_URL = "https://al33xf.xyz";
const OG_IMAGE = "/assets/og.webp";

export const metadata: Metadata = {
  title: {
    default: "Web Designer in Sicilia | Siti Web, App e Soluzioni Web3 - al33xf",
    template: "%s | al33xf",
  },
  description:
    "Realizzo siti web professionali, landing page, applicazioni web, soluzioni Web3 e automazioni AI in Sicilia. Design premium, codice pulito e delivery pronta per la produzione.",
  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      it: "/it",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/it`,
    locale: "it_IT",
    alternateLocale: ["en_US"],
    siteName: "al33xf",
    title: "Web Designer in Sicilia | Siti Web, App e Soluzioni Web3 - al33xf",
    description:
      "Realizzo siti web professionali, landing page, applicazioni web, soluzioni Web3 e automazioni AI in Sicilia.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "al33xf - Web Designer in Sicilia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@al33xf",
    title: "Web Designer in Sicilia | Siti Web, App e Soluzioni Web3 - al33xf",
    description:
      "Realizzo siti web professionali, landing page, applicazioni web, soluzioni Web3 e automazioni AI in Sicilia.",
    images: [OG_IMAGE],
  },
};

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}