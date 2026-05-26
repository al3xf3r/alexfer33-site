import type { Metadata } from "next";
import PersonalHome from "@/components/PersonalHome-v2";

export const metadata: Metadata = {
  title: "al33xf — Software Developer | CRM, AI & Web3 | Sicily",
  description:
    "Independent software developer building CRM systems, operational dashboards, AI automation, premium websites and Web3 infrastructure. Based in Sicily, working globally.",
  alternates: {
    canonical: "https://al33xf.xyz",
    languages: { it: "https://al33xf.xyz/it" },
  },
  openGraph: {
    title: "al33xf — Software, AI & Web3 Developer",
    description:
      "CRM systems, dashboards, AI automation and Web3 infrastructure for modern companies.",
    url: "https://al33xf.xyz",
  },
};

export default function EnPage() {
  return <PersonalHome locale="en" />;
}
