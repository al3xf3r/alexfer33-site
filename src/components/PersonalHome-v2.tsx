"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ProjectsShowcase from "@/components/ProjectsShowcase";

type Locale = "en" | "it";

const C = {
  bg:   "#050608",
  bg1:  "#0a0b0f",
  brd:  "rgba(255,255,255,0.07)",
  bMid: "rgba(255,255,255,0.12)",
  t2:   "rgba(255,255,255,0.55)",
  t3:   "rgba(255,255,255,0.28)",
} as const;

const LINKS = {
  x:    "https://x.com/al33xf",
  tg:   "https://t.me/al33xf",
  mail: "mailto:al33xf@gmail.com",
  gh:   "https://github.com/al3xf3r",
} as const;

// Fonts — hardcoded exactly like Hash42 source

const COPY = {
  en: {
    navItems: [
      { label: "Services", href: "#services" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    navCta: "Work with me",
    langToggle: "IT",
    langHref: "/it",
    badgeText: "al33xf · Lead builder behind Hash42 Labs",
    heroLine1: "I build software,",
    heroLine2: "",
    heroAccent: "AI systems & digital infrastructure.",
    heroSub: "CRM systems, operational dashboards, AI automation, premium websites and Web3 infrastructure — built to production standards.",
    ctaPrimary: "Work with me",
    ctaSecondary: "Explore Hash42",
    ctaSecHref: "https://hash42.xyz",
    stats: [
      { v: "Full-stack", l: "Development" },
      { v: "AI-native", l: "Architecture" },
      { v: "Web3", l: "Infrastructure" },
      { v: "SaaS", l: "Systems" },
    ],
    servicesEyebrow: "Services",
    servicesTitle: "What I build.",
    servicesAccent: "End-to-end.",
    servicesSub: "From internal tools to public products — clean, scalable and production-ready.",
    services: [
      { n: "01", title: "CRM & Management Systems", desc: "Custom tools to manage clients, requests, deadlines, communications, internal dashboards, automated workflows and business operations.", tags: ["CRM", "Dashboards", "Automation"] },
      { n: "02", title: "Websites & Landing Pages", desc: "Professional, responsive, fast and SEO-ready websites for companies, professionals, local businesses, brands and digital products.", tags: ["Next.js", "SEO", "UX"] },
      { n: "03", title: "AI Agents & Automation", desc: "Intelligent agents, automated workflows, API integrations and AI-native tools to eliminate manual processes and scale operations.", tags: ["AI", "Agents", "Workflows"] },
      { n: "04", title: "Web3 Infrastructure", desc: "Complete Web3 development: smart contracts, tokens, NFTs, dApps, wallet connections, dashboards and premium on-chain interfaces.", tags: ["Smart Contracts", "Web3", "DeFi"] },
    ],
    ecosystemEyebrow: "Hash42 Ecosystem",
    ecosystemTitle: "Products I built.",
    ecosystemAccent: "Live in the wild.",
    ecosystemSub: "Three products. Three markets. Built and shipped as part of Hash42 Labs.",
    products: [
      {
        badge: "Live Beta · Free",
        badgeColor: "#f97316", badgeBg: "rgba(249,115,22,0.1)", badgeBorder: "rgba(249,115,22,0.25)",
        image: "/assets/tracker.webp", logo: "/assets/hash42-tracker-logo-squared.svg",
        name: "Hash42 Tracker", domain: "tracker.hash42.xyz",
        desc: "A premium investment tracking platform for serious long-term investors. Crypto, ETFs and stocks — tracked with precision. PAC/DCA engine and social copy trading.",
        features: ["Multi-asset portfolio tracking", "PAC / DCA strategy engine", "Real-time prices via CoinGecko & Yahoo", "Social leaderboard & copy trading (soon)"],
        featureDot: "#f97316",
        ctaLabel: "Start Free →", ctaHref: "https://tracker.hash42.xyz/register",
        learnHref: "https://hash42.xyz/discover-tracker", accentBorder: "rgba(249,115,22,0.1)",
      },
      {
        badge: "In Development",
        badgeColor: "#a78bfa", badgeBg: "rgba(139,92,246,0.1)", badgeBorder: "rgba(139,92,246,0.25)",
        image: "/assets/veni.webp", logo: "/assets/logo-veni-squared.svg",
        name: "VENI", domain: "veni.hash42.xyz",
        desc: "AI-native booking and business management ecosystem for local services. Smart scheduling, CRM, AI automations and marketing — all in one place.",
        features: ["Smart booking & calendar management", "AI automations & reminders", "CRM, staff & analytics", "Marketing automation & public pages"],
        featureDot: "#8b5cf6",
        ctaLabel: "Discover VENI →", ctaHref: "https://hash42.xyz/discover-veni",
        learnHref: "https://hash42.xyz/discover-veni", accentBorder: "rgba(139,92,246,0.1)",
      },
      {
        badge: "In Development",
        badgeColor: "#d4a832", badgeBg: "rgba(212,168,50,0.1)", badgeBorder: "rgba(212,168,50,0.25)",
        image: "/assets/velora.webp", logo: "/assets/velora-logo-sqaured.svg",
        name: "Velora", domain: "velora.hash42.xyz",
        desc: "Enterprise operational platform for NCC operators, chauffeur services and premium transport companies — from driver management to live dispatching.",
        features: ["Driver & fleet management", "Live GPS tracking & dispatching", "Booking, scheduling & customer CRM", "AI operational tools & notifications"],
        featureDot: "#d4a832",
        ctaLabel: "Discover Velora →", ctaHref: "https://hash42.xyz/discover-velora",
        learnHref: "https://hash42.xyz/discover-velora", accentBorder: "rgba(212,168,50,0.1)",
      },
    ],
    workEyebrow: "Selected Work",
    workTitle: "Websites already shipped.",
    workSub: "Real projects delivered across healthcare, wellness, editorial and local business.",
    workVisit: "Visit site",
    processEyebrow: "Process",
    processTitle: "How I work.",
    processAccent: "Simple. Precise.",
    processSub: "Professional and delivery-oriented from day one.",
    steps: [
      { k: "01", t: "Scope", d: "Goals, features, stack, timeline and priorities." },
      { k: "02", t: "Build", d: "Modular development, clean code and polished UI." },
      { k: "03", t: "Deploy", d: "Production deploy, domain, hosting and testing." },
      { k: "04", t: "Optimize", d: "Continuous improvement, performance and scale." },
    ],
    contactEyebrow: "Contact",
    contactTitle: "Let's build something.",
    contactSub: "Tell me what you need: a management system, website, AI agent, dashboard or Web3 product. I'll map the fastest path to production.",
    emailNote: "Best for scope and quotes.",
    tgNote: "Fastest async channel.",
    footerPowered: "Powered by Hash42 Labs",
    footerHash42: "https://hash42.xyz",
  },
  it: {
    navItems: [
      { label: "Servizi", href: "#services" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Progetti", href: "#work" },
      { label: "Processo", href: "#process" },
      { label: "Contatti", href: "#contact" },
    ],
    navCta: "Lavora con me",
    langToggle: "EN",
    langHref: "/",
    badgeText: "al33xf · Lead builder di Hash42 Labs",
    heroLine1: "Costruisco software,",
    heroLine2: "",
    heroAccent: "AI e sistemi digitali.",
    heroSub: "CRM, dashboard operative, automazioni AI, siti web premium e infrastrutture Web3 — realizzati a livello di produzione.",
    ctaPrimary: "Lavora con me",
    ctaSecondary: "Scopri Hash42",
    ctaSecHref: "https://hash42.xyz/it",
    stats: [
      { v: "Full-stack", l: "Sviluppo" },
      { v: "AI-native", l: "Architettura" },
      { v: "Web3", l: "Infrastruttura" },
      { v: "SaaS", l: "Sistemi" },
    ],
    servicesEyebrow: "Servizi",
    servicesTitle: "Cosa realizzo.",
    servicesAccent: "End-to-end.",
    servicesSub: "Dagli strumenti interni ai prodotti pubblici — puliti, scalabili e pronti per la produzione.",
    services: [
      { n: "01", title: "CRM e Gestionali", desc: "Strumenti su misura per gestire clienti, richieste, scadenze, comunicazioni, dashboard interne, workflow automatici e processi aziendali.", tags: ["CRM", "Dashboard", "Automazione"] },
      { n: "02", title: "Siti web e landing page", desc: "Siti professionali, responsive, veloci e SEO-ready per aziende, professionisti, attività locali, brand e prodotti digitali.", tags: ["Next.js", "SEO", "UX"] },
      { n: "03", title: "AI agent e automazioni", desc: "Agent intelligenti, workflow automatici, integrazioni API e strumenti AI-native per eliminare processi manuali e scalare le operazioni.", tags: ["AI", "Agent", "Workflow"] },
      { n: "04", title: "Web3 e infrastruttura", desc: "Sviluppo Web3 completo: smart contract, token, NFT, dApp, wallet connection, dashboard e interfacce premium on-chain.", tags: ["Smart Contract", "Web3", "DeFi"] },
    ],
    ecosystemEyebrow: "Ecosistema Hash42",
    ecosystemTitle: "Prodotti che ho costruito.",
    ecosystemAccent: "Online e in crescita.",
    ecosystemSub: "Tre prodotti. Tre mercati. Costruiti e lanciati come parte di Hash42 Labs.",
    products: [
      {
        badge: "Live Beta · Gratis",
        badgeColor: "#f97316", badgeBg: "rgba(249,115,22,0.1)", badgeBorder: "rgba(249,115,22,0.25)",
        image: "/assets/tracker.webp", logo: "/assets/hash42-tracker-logo-squared.svg",
        name: "Hash42 Tracker", domain: "tracker.hash42.xyz",
        desc: "Una piattaforma premium per il tracking degli investimenti per investitori a lungo termine. Crypto, ETF e azioni — tracciati con precisione. PAC/DCA engine e copy trading.",
        features: ["Portfolio multi-asset", "PAC / DCA strategy engine", "Prezzi real-time via CoinGecko & Yahoo", "Leaderboard sociale & copy trading (presto)"],
        featureDot: "#f97316",
        ctaLabel: "Inizia gratis →", ctaHref: "https://tracker.hash42.xyz/register",
        learnHref: "https://hash42.xyz/it/discover-tracker", accentBorder: "rgba(249,115,22,0.1)",
      },
      {
        badge: "In Sviluppo",
        badgeColor: "#a78bfa", badgeBg: "rgba(139,92,246,0.1)", badgeBorder: "rgba(139,92,246,0.25)",
        image: "/assets/veni.webp", logo: "/assets/logo-veni-squared.svg",
        name: "VENI", domain: "veni.hash42.xyz",
        desc: "Ecosistema AI-native per prenotazioni e gestione business per servizi locali. Agenda smart, CRM, automazioni AI e marketing — tutto in un unico posto.",
        features: ["Prenotazioni smart & gestione agenda", "Automazioni AI & promemoria", "CRM, staff & analytics", "Marketing automation & pagine pubbliche"],
        featureDot: "#8b5cf6",
        ctaLabel: "Scopri VENI →", ctaHref: "https://hash42.xyz/it/discover-veni",
        learnHref: "https://hash42.xyz/it/discover-veni", accentBorder: "rgba(139,92,246,0.1)",
      },
      {
        badge: "In Sviluppo",
        badgeColor: "#d4a832", badgeBg: "rgba(212,168,50,0.1)", badgeBorder: "rgba(212,168,50,0.25)",
        image: "/assets/velora.webp", logo: "/assets/velora-logo-sqaured.svg",
        name: "Velora", domain: "velora.hash42.xyz",
        desc: "Piattaforma operativa enterprise per operatori NCC, servizi di autista e società di trasporto premium — dalla gestione autisti al dispatching live.",
        features: ["Gestione autisti & flotta", "GPS live & dispatching", "Prenotazioni, agenda & CRM clienti", "Strumenti AI & notifiche operative"],
        featureDot: "#d4a832",
        ctaLabel: "Scopri Velora →", ctaHref: "https://hash42.xyz/it/discover-velora",
        learnHref: "https://hash42.xyz/it/discover-velora", accentBorder: "rgba(212,168,50,0.1)",
      },
    ],
    workEyebrow: "Progetti realizzati",
    workTitle: "Siti web già consegnati.",
    workSub: "Progetti reali tra healthcare, benessere, editoriale e business locali.",
    workVisit: "Visita il sito",
    processEyebrow: "Processo",
    processTitle: "Come lavoro.",
    processAccent: "Semplice. Preciso.",
    processSub: "Professionale e orientato alla consegna dal primo giorno.",
    steps: [
      { k: "01", t: "Analisi", d: "Obiettivi, funzionalità, stack, tempistiche e priorità." },
      { k: "02", t: "Sviluppo", d: "Costruzione modulare, codice pulito e UI curata." },
      { k: "03", t: "Deploy", d: "Messa online, dominio, hosting e test." },
      { k: "04", t: "Ottimizzazione", d: "Miglioramento continuo, performance e scalabilità." },
    ],
    contactEyebrow: "Contatti",
    contactTitle: "Costruiamo qualcosa.",
    contactSub: "Dimmi cosa vuoi realizzare: gestionale, sito web, AI agent, dashboard o progetto Web3. Ti propongo il percorso più rapido per andare online.",
    emailNote: "Ideale per analisi e preventivi.",
    tgNote: "Il canale più veloce per comunicare.",
    footerPowered: "Powered by Hash42 Labs",
    footerHash42: "https://hash42.xyz/it",
  },
} as const;



/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function PersonalHome({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  
  
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <main style={{ background: C.bg, color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden", WebkitFontSmoothing: "antialiased" }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 60, padding: "0 16px",
        display: "flex", alignItems: "center",
        background: "rgba(5,6,8,0.88)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.brd}`,
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 8 }}>
          {/* Logo */}
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 28, height: 28, borderRadius: 7, objectFit: "cover", border: `1px solid ${C.brd}` }} />
            <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.4px", color: "#fff", whiteSpace: "nowrap" }}>
              al<span style={{ color: "#f97316" }}>33</span>xf
            </span>
          </a>

          {/* Centre links */}
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center", fontFamily: "'Inter', system-ui, sans-serif" }}>
            {c.navItems.map((item) => (
              <a key={item.href} href={item.href} style={{ fontSize: 13, color: C.t2, textDecoration: "none", padding: "5px 10px", borderRadius: 7, whiteSpace: "nowrap" }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto", flexShrink: 0 }}>
            <Link href={c.langHref} style={{ fontSize: 11, color: C.t3, textDecoration: "none", padding: "4px 8px", borderRadius: 5, border: `1px solid ${C.brd}`, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>
              {c.langToggle}
            </Link>
            <a href="#contact" style={{ padding: "7px 14px", borderRadius: 8, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 12.5, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.navCta}
            </a>
            {/* Mobile burger - shown via CSS class */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{ width: 34, height: 34, borderRadius: 7, border: `1px solid ${C.brd}`, background: "transparent", color: "#fff", cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}
              className="nav-burger"
              aria-label="Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: "rgba(5,6,8,0.97)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.brd}`, padding: "8px 16px 16px", zIndex: 200, fontFamily: "'Inter', system-ui, sans-serif" }}>
            {c.navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 4px", fontSize: 14, color: C.t2, textDecoration: "none", borderBottom: `1px solid ${C.brd}` }}>
                {item.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <Link href={c.langHref} style={{ fontSize: 12, color: C.t3, textDecoration: "none", padding: "6px 10px", border: `1px solid ${C.brd}`, borderRadius: 6 }}>{c.langToggle}</Link>
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{ padding: "7px 14px", borderRadius: 7, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 12.5, textDecoration: "none" }}>{c.navCta}</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="top" style={{ minHeight: "100svh", display: "flex", alignItems: "center", padding: "110px 16px 72px", position: "relative", overflow: "hidden" }}>
        {/* Background glows */}
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "min(800px,130vw)", height: 420, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "min(360px,55vw)", height: "min(360px,55vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "60px 60px", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)" }} />

        <div style={{ position: "relative", maxWidth: 1140, margin: "0 auto", width: "100%", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.brd}`, marginBottom: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.05em" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
            {c.badgeText}
          </div>

          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 60, height: 60, borderRadius: 15, objectFit: "cover", border: `1px solid ${C.brd}`, filter: "drop-shadow(0 0 20px rgba(59,130,246,0.28))" }} />
          </div>

          {/* Headline — exact same structure as Hash42 */}
          <h1 style={{
            fontWeight: 900,
            fontSize: "clamp(32px, 5.5vw, 74px)",
            lineHeight: 1.02,
            letterSpacing: "-1.5px",
            marginBottom: 20,
            overflowWrap: "break-word",
            wordBreak: "break-word",
          }}>
            {c.heroLine1}<br />
            <span style={{ background: "linear-gradient(100deg, #60a5fa 0%, #818cf8 40%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.heroAccent}
            </span>
          </h1>

          <p style={{ fontSize: "clamp(14px, 2.2vw, 17px)", color: C.t2, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7, fontFamily: "'Inter', system-ui, sans-serif" }}>
            {c.heroSub}
          </p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 13.5, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.ctaPrimary} →
            </a>
            <a href={c.ctaSecHref} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, border: `1px solid ${C.bMid}`, color: C.t2, fontWeight: 500, fontSize: 13.5, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.ctaSecondary}
            </a>
          </div>

          {/* Stats row */}
          <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,5vw,48px)", flexWrap: "wrap", paddingTop: 32, borderTop: `1px solid ${C.brd}` }}>
            {c.stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: "clamp(16px,3vw,22px)", letterSpacing: "-0.5px", fontFamily: "'Inter', system-ui, sans-serif" }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.t3, marginTop: 2, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.servicesEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0, fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.servicesTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.servicesAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 400, margin: "10px auto 0", fontFamily: "'Inter', system-ui, sans-serif" }}>{c.servicesSub}</p>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
            {c.services.map((s) => (
              <div key={s.n} style={{ padding: "28px 26px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
                  <span style={{ fontWeight: 900, fontSize: 26, letterSpacing: -2, color: "rgba(255,255,255,0.05)", lineHeight: 1, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{s.n}</span>
                  <span style={{ fontWeight: 700, fontSize: 15.5, letterSpacing: "-0.3px", lineHeight: 1.2, fontFamily: "'Inter', system-ui, sans-serif" }}>{s.title}</span>
                </div>
                <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.65, margin: "0 0 14px", fontFamily: "'Inter', system-ui, sans-serif" }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map((tag) => (
                    <span key={tag} style={{ padding: "2px 8px", borderRadius: 20, border: `1px solid ${C.brd}`, fontSize: 10, color: C.t3, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── HASH42 ECOSYSTEM ─────────────────────────────────────── */}
      <section id="ecosystem" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.ecosystemEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0, fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.ecosystemTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.ecosystemAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 420, margin: "10px auto 0", fontFamily: "'Inter', system-ui, sans-serif" }}>{c.ecosystemSub}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {c.products.map((p) => (
              <div key={p.name} style={{ border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden", background: C.bg1 }}>
                <div className="pcg" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
                  {/* Info side */}
                  <div style={{ padding: "clamp(24px,4vw,44px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                      <img src={p.logo} alt={p.name} style={{ width: 34, height: 34, borderRadius: 8, flexShrink: 0 }} />
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: p.badgeBg, border: `1px solid ${p.badgeBorder}`, color: p.badgeColor, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, whiteSpace: "nowrap" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.badgeColor, flexShrink: 0 }} />
                        {p.badge}
                      </div>
                    </div>
                    <h3 style={{ fontWeight: 900, fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1.5px", lineHeight: 1.0, marginBottom: 5, fontFamily: "'Inter', system-ui, sans-serif" }}>{p.name}</h3>
                    <div style={{ fontSize: 11, color: C.t3, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", marginBottom: 14 }}>{p.domain}</div>
                    <p style={{ fontSize: 13.5, color: C.t2, lineHeight: 1.65, maxWidth: 360, marginBottom: 18, fontFamily: "'Inter', system-ui, sans-serif" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 24 }}>
                      {p.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: C.t2, fontFamily: "'Inter', system-ui, sans-serif" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.featureDot, flexShrink: 0, marginTop: 6 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <a href={p.ctaHref} target="_blank" rel="noopener noreferrer" style={{ padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", background: p.badgeColor, color: p.badgeColor === "#d4a832" ? "#000" : "#fff", whiteSpace: "nowrap", fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {p.ctaLabel}
                      </a>
                      <a href={p.learnHref} target="_blank" rel="noopener noreferrer" style={{ padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none", border: `1px solid ${C.bMid}`, color: C.t2, whiteSpace: "nowrap", fontFamily: "'Inter', system-ui, sans-serif" }}>
                        Learn more
                      </a>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="pvp" style={{ position: "relative", minHeight: 280, borderLeft: `1px solid ${p.accentBorder}`, overflow: "hidden" }}>
                    <img src={p.image} alt={`${p.name} preview`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── WORK / PROJECTS ──────────────────────────────────────── */}
<section id="work" style={{ padding: "72px 16px" }}>
  <div style={{ maxWidth: 1140, margin: "0 auto" }}>
    <ProjectsShowcase locale={locale} />
  </div>
</section>

<hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section id="process" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.processEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0, fontFamily: "'Inter', system-ui, sans-serif" }}>
              {c.processTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.processAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, fontFamily: "'Inter', system-ui, sans-serif" }}>{c.processSub}</p>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: C.brd, border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden" }}>
            {c.steps.map((s) => (
              <div key={s.k} style={{ background: C.bg1, padding: "26px 22px" }}>
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: -2, color: "rgba(255,255,255,0.05)", marginBottom: 12, lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>{s.k}</div>
                <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px", marginBottom: 8, fontFamily: "'Inter', system-ui, sans-serif" }}>{s.t}</div>
                <p style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.65, margin: 0, fontFamily: "'Inter', system-ui, sans-serif" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "72px 16px 96px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.contactEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0, fontFamily: "'Inter', system-ui, sans-serif" }}>{c.contactTitle}</h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 480, margin: "10px auto 0", lineHeight: 1.7, fontFamily: "'Inter', system-ui, sans-serif" }}>{c.contactSub}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 10, maxWidth: 680, margin: "0 auto" }}>
            {[
              { label: "Email", value: "al33xf@gmail.com", note: c.emailNote, href: LINKS.mail },
              { label: "Telegram", value: "t.me/al33xf", note: c.tgNote, href: LINKS.tg },
              { label: "X / Twitter", value: "x.com/al33xf", note: "DMs open.", href: LINKS.x },
              { label: "GitHub", value: "github.com/al3xf3r", note: "Open-source work.", href: LINKS.gh },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ padding: "20px 22px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1, textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: 11, color: C.t3, fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 6, fontFamily: "'Inter', system-ui, sans-serif" }}>{item.value}</div>
                <div style={{ fontSize: 11, color: C.t3, fontFamily: "'Inter', system-ui, sans-serif" }}>{item.note}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.brd}`, padding: "20px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 20, height: 20, borderRadius: 5, objectFit: "cover" }} />
            <span style={{ fontWeight: 700, fontSize: 13, color: C.t2 }}>
              al<span style={{ color: "#f97316" }}>33</span>xf
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {c.navItems.map((item) => (
              <a key={item.href} href={item.href} style={{ fontSize: 12, color: C.t3, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>{item.label}</a>
            ))}
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: C.t3, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>X</a>
            <a href={LINKS.gh} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: C.t3, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>GitHub</a>
            <Link href={c.langHref} style={{ fontSize: 11, color: C.t3, textDecoration: "none", padding: "2px 6px", border: `1px solid ${C.brd}`, borderRadius: 4, fontFamily: "'JetBrains Mono', monospace" }}>{c.langToggle}</Link>
          </div>
          <a href={c.footerHash42} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: C.t3, textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
            {c.footerPowered}
          </a>
        </div>
      </footer>

    </main>
  );
}