// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "al33xf — Web3 & AI Builder",
  description:
    "Web3 & AI product engineer. Smart contracts, tokens, AI agents, NFT platforms, dashboards, and full-stack protocol products.",
  icons: {
    icon: "/assets/al33xf.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}