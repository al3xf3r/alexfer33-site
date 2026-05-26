import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "al33xf — Sviluppatore Software | CRM, AI & Web3 | Sicilia",
  description:
    "Sviluppatore software indipendente che realizza CRM, dashboard operative, automazioni AI, siti web premium e infrastrutture Web3. Basato in Sicilia, lavoro in tutta Italia e a livello globale.",
  keywords: [
    "web designer Sicilia",
    "sviluppatore web Sicilia",
    "CRM Sicilia",
    "gestionali Sicilia",
    "siti web Sicilia",
    "AI automation Sicilia",
    "dashboard operative",
    "software house Sicilia",
    "smart contract",
    "Hash42 Labs",
    "al33xf",
  ],
  alternates: {
    canonical: "https://al33xf.xyz/it",
    languages: { en: "https://al33xf.xyz" },
  },
  openGraph: {
    title: "al33xf — Sviluppatore Software, AI & Web3",
    description:
      "CRM, dashboard operative, automazioni AI e infrastrutture Web3 per aziende moderne.",
    url: "https://al33xf.xyz/it",
    locale: "it_IT",
  },
};

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return children;
}
