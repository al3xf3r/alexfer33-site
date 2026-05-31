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

const COPY = {
  en: {
    navItems: [
      { label: "Services",   href: "#services"  },
      { label: "Ecosystem",  href: "#ecosystem" },
      { label: "Work",       href: "#work"      },
      { label: "Process",    href: "#process"   },
      { label: "Contact",    href: "#contact"   },
    ],
    navCta: "Work with me",
    langToggle: "IT",
    langHref: "/it",
    badgeText: "al33xf · Lead builder behind Hash42 Labs",
    heroLine1: "I build software,",
    heroAccent: "AI systems & digital infrastructure.",
    heroSub: "CRM systems, operational dashboards, AI automation, premium websites and Web3 infrastructure — built to production standards.",
    ctaPrimary: "Work with me",
    ctaSecondary: "Explore Hash42",
    ctaSecHref: "https://hash42.xyz",
    stats: [
      { v: "Full-stack", l: "Development"    },
      { v: "AI-native",  l: "Architecture"   },
      { v: "Web3",       l: "Infrastructure" },
      { v: "SaaS",       l: "Systems"        },
    ],
    servicesEyebrow: "Services",
    servicesTitle: "What I build.",
    servicesAccent: "End-to-end.",
    servicesSub: "From internal tools to public products — clean, scalable and production-ready.",
    services: [
      { n: "01", title: "CRM & Management Systems",  desc: "Custom tools to manage clients, requests, deadlines, communications, internal dashboards, automated workflows and business operations.", tags: ["CRM", "Dashboards", "Automation"] },
      { n: "02", title: "Websites & Landing Pages",  desc: "Professional, responsive, fast and SEO-ready websites for companies, professionals, local businesses, brands and digital products.", tags: ["Next.js", "SEO", "UX"] },
      { n: "03", title: "AI Agents & Automation",    desc: "Intelligent agents, automated workflows, API integrations and AI-native tools to eliminate manual processes and scale operations.", tags: ["AI", "Agents", "Workflows"] },
      { n: "04", title: "Web3 Infrastructure",       desc: "Complete Web3 development: smart contracts, tokens, NFTs, dApps, wallet connections, dashboards and premium on-chain interfaces.", tags: ["Smart Contracts", "Web3", "DeFi"] },
    ],
    ecosystemEyebrow: "Hash42 Ecosystem",
    ecosystemTitle: "Products I built.",
    ecosystemAccent: "Live in the wild.",
    ecosystemSub: "Three products. Three markets. Built and shipped as part of Hash42 Labs.",
    products: [
      {
        badge: "Now Available", badgeColor: "#00d4ff", badgeBg: "rgba(0,212,255,0.1)", badgeBorder: "rgba(0,212,255,0.3)",
        image: "/muni.webp", logo: "/assets/logo-muni-squared.svg",
        name: "Muni", domain: "muni.hash42.xyz",
        desc: "Interactive digital invitations and premium event experiences for weddings, birthdays, parties, private events and corporate celebrations.",
        features: ["Personalized event websites", "QR code invitations", "RSVP and countdown", "Premium mobile-first experience"],
        featureDot: "#00d4ff",
        ctaLabel: "Discover Muni →", ctaHref: "https://muni.hash42.xyz",
        learnHref: "https://hash42.xyz/discover-muni", accentBorder: "rgba(0,212,255,0.12)",
      },
      {
        badge: "In Development", badgeColor: "#a78bfa", badgeBg: "rgba(139,92,246,0.1)", badgeBorder: "rgba(139,92,246,0.25)",
        image: "/assets/veni.webp", logo: "/assets/logo-veni-squared.svg",
        name: "VENI", domain: "veni.hash42.xyz",
        desc: "AI-native booking and business management ecosystem for local services. Smart scheduling, CRM, AI automations and marketing — all in one place.",
        features: ["Smart booking & calendar management", "AI automations & reminders", "CRM, staff & analytics", "Marketing automation & public pages"],
        featureDot: "#8b5cf6",
        ctaLabel: "Discover VENI →", ctaHref: "https://hash42.xyz/discover-veni",
        learnHref: "https://hash42.xyz/discover-veni", accentBorder: "rgba(139,92,246,0.1)",
      },
      {
        badge: "In Development", badgeColor: "#d4a832", badgeBg: "rgba(212,168,50,0.1)", badgeBorder: "rgba(212,168,50,0.25)",
        image: "/assets/velora.webp", logo: "/assets/velora-logo-sqaured.svg",
        name: "Velora", domain: "velora.hash42.xyz",
        desc: "Enterprise operational platform for NCC operators, chauffeur services and premium transport companies — from driver management to live dispatching.",
        features: ["Driver & fleet management", "Live GPS tracking & dispatching", "Booking, scheduling & customer CRM", "AI operational tools & notifications"],
        featureDot: "#d4a832",
        ctaLabel: "Discover Velora →", ctaHref: "https://hash42.xyz/discover-velora",
        learnHref: "https://hash42.xyz/discover-velora", accentBorder: "rgba(212,168,50,0.1)",
      },
    ],
    processEyebrow: "Process",
    processTitle: "How I work.",
    processAccent: "Simple. Precise.",
    processSub: "Professional and delivery-oriented from day one.",
    steps: [
      { k: "01", t: "Scope",    d: "Goals, features, stack, timeline and priorities." },
      { k: "02", t: "Build",    d: "Modular development, clean code and polished UI." },
      { k: "03", t: "Deploy",   d: "Production deploy, domain, hosting and testing." },
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
      { label: "Servizi",   href: "#services"  },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Progetti",  href: "#work"      },
      { label: "Processo",  href: "#process"   },
      { label: "Contatti",  href: "#contact"   },
    ],
    navCta: "Lavora con me",
    langToggle: "EN",
    langHref: "/",
    badgeText: "al33xf · Lead builder di Hash42 Labs",
    heroLine1: "Costruisco software,",
    heroAccent: "AI e sistemi digitali.",
    heroSub: "CRM, dashboard operative, automazioni AI, siti web premium e infrastrutture Web3 — realizzati a livello di produzione.",
    ctaPrimary: "Lavora con me",
    ctaSecondary: "Scopri Hash42",
    ctaSecHref: "https://hash42.xyz/it",
    stats: [
      { v: "Full-stack", l: "Sviluppo"       },
      { v: "AI-native",  l: "Architettura"   },
      { v: "Web3",       l: "Infrastruttura" },
      { v: "SaaS",       l: "Sistemi"        },
    ],
    servicesEyebrow: "Servizi",
    servicesTitle: "Cosa realizzo.",
    servicesAccent: "End-to-end.",
    servicesSub: "Dagli strumenti interni ai prodotti pubblici — puliti, scalabili e pronti per la produzione.",
    services: [
      { n: "01", title: "CRM e Gestionali",           desc: "Strumenti su misura per gestire clienti, richieste, scadenze, comunicazioni, dashboard interne, workflow automatici e processi aziendali.", tags: ["CRM", "Dashboard", "Automazione"] },
      { n: "02", title: "Siti web e landing page",    desc: "Siti professionali, responsive, veloci e SEO-ready per aziende, professionisti, attività locali, brand e prodotti digitali.", tags: ["Next.js", "SEO", "UX"] },
      { n: "03", title: "AI agent e automazioni",     desc: "Agent intelligenti, workflow automatici, integrazioni API e strumenti AI-native per eliminare processi manuali e scalare le operazioni.", tags: ["AI", "Agent", "Workflow"] },
      { n: "04", title: "Web3 e infrastruttura",      desc: "Sviluppo Web3 completo: smart contract, token, NFT, dApp, wallet connection, dashboard e interfacce premium on-chain.", tags: ["Smart Contract", "Web3", "DeFi"] },
    ],
    ecosystemEyebrow: "Ecosistema Hash42",
    ecosystemTitle: "Prodotti che ho costruito.",
    ecosystemAccent: "Online e in crescita.",
    ecosystemSub: "Tre prodotti. Tre mercati. Costruiti e lanciati come parte di Hash42 Labs.",
    products: [
      {
        badge: "Now Available", badgeColor: "#00d4ff", badgeBg: "rgba(0,212,255,0.1)", badgeBorder: "rgba(0,212,255,0.3)",
        image: "/muni.webp", logo: "/assets/logo-muni-squared.svg",
        name: "Muni", domain: "muni.hash42.xyz",
        desc: "Inviti digitali interattivi ed esperienze evento premium per matrimoni, compleanni, feste private, eventi corporate e celebrazioni di ogni tipo.",
        features: ["Siti evento personalizzati", "Inviti tramite QR code", "RSVP e countdown", "Esperienza premium mobile-first"],
        featureDot: "#00d4ff",
        ctaLabel: "Scopri Muni →", ctaHref: "https://muni.hash42.xyz",
        learnHref: "https://hash42.xyz/it/discover-muni", accentBorder: "rgba(0,212,255,0.12)",
      },
      {
        badge: "In Sviluppo", badgeColor: "#a78bfa", badgeBg: "rgba(139,92,246,0.1)", badgeBorder: "rgba(139,92,246,0.25)",
        image: "/assets/veni.webp", logo: "/assets/logo-veni-squared.svg",
        name: "VENI", domain: "veni.hash42.xyz",
        desc: "Ecosistema AI-native per prenotazioni e gestione business per servizi locali. Agenda smart, CRM, automazioni AI e marketing — tutto in un unico posto.",
        features: ["Prenotazioni smart & gestione agenda", "Automazioni AI & promemoria", "CRM, staff & analytics", "Marketing automation & pagine pubbliche"],
        featureDot: "#8b5cf6",
        ctaLabel: "Scopri VENI →", ctaHref: "https://hash42.xyz/it/discover-veni",
        learnHref: "https://hash42.xyz/it/discover-veni", accentBorder: "rgba(139,92,246,0.1)",
      },
      {
        badge: "In Sviluppo", badgeColor: "#d4a832", badgeBg: "rgba(212,168,50,0.1)", badgeBorder: "rgba(212,168,50,0.25)",
        image: "/assets/velora.webp", logo: "/assets/velora-logo-sqaured.svg",
        name: "Velora", domain: "velora.hash42.xyz",
        desc: "Piattaforma operativa enterprise per operatori NCC, servizi di autista e società di trasporto premium — dalla gestione autisti al dispatching live.",
        features: ["Gestione autisti & flotta", "GPS live & dispatching", "Prenotazioni, agenda & CRM clienti", "Strumenti AI & notifiche operative"],
        featureDot: "#d4a832",
        ctaLabel: "Scopri Velora →", ctaHref: "https://hash42.xyz/it/discover-velora",
        learnHref: "https://hash42.xyz/it/discover-velora", accentBorder: "rgba(212,168,50,0.1)",
      },
    ],
    processEyebrow: "Processo",
    processTitle: "Come lavoro.",
    processAccent: "Semplice. Preciso.",
    processSub: "Professionale e orientato alla consegna dal primo giorno.",
    steps: [
      { k: "01", t: "Analisi",         d: "Obiettivi, funzionalità, stack, tempistiche e priorità." },
      { k: "02", t: "Sviluppo",        d: "Costruzione modulare, codice pulito e UI curata." },
      { k: "03", t: "Deploy",          d: "Messa online, dominio, hosting e test." },
      { k: "04", t: "Ottimizzazione",  d: "Miglioramento continuo, performance e scalabilità." },
    ],
    contactEyebrow: "Contatti",
    contactTitle: "Costruiamo qualcosa.",
    contactSub: "Dimmi cosa vuoi realizzare: gestionale, sito web, AI agent, dashboard o progetto Web3. Ti propongo il percorso più rapido per andare online.",
    emailNote: "",
    tgNote: "",
    footerPowered: "Powered by Hash42 Labs",
    footerHash42: "https://hash42.xyz/it",
  },
} as const;

/* ─── MAIN ─────────────────────────────────────────────────── */
export default function PersonalHome({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ background: C.bg, color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden", WebkitFontSmoothing: "antialiased" }}>

      <style>{`
        /* ── NAV RESPONSIVE ── */
        .nav-links   { display: flex; }
        .nav-burger  { display: none; }
        @media (max-width: 768px) {
          .nav-links  { display: none !important; }
          .nav-burger { display: flex !important; }
        }

        /* ── GRIDS ── */
        @media (max-width: 680px) {
          .pcg           { grid-template-columns: 1fr !important; }
          .pvp           { display: none !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .steps-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .stats-row     { gap: 16px !important; }
          .contact-grid  { grid-template-columns: 1fr !important; }
        }

        /* ── HOVER: nav links ── */
        .nav-link { transition: color 0.18s; }
        .nav-link:hover { color: #fff !important; }

        /* ── HOVER: cards ── */
        .svc-card {
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .svc-card:hover {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.14) !important;
          transform: translateY(-2px);
        }

        .contact-card {
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .contact-card:hover {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.14) !important;
          transform: translateY(-2px);
        }

        .prod-card {
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s;
        }
        .prod-card:hover { transform: translateY(-3px); }
        .prod-card:hover .prod-img { transform: scale(1.04); }
        .prod-img { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }

        /* ── HOVER: step cells ── */
        .step-cell { transition: background 0.2s; }
        .step-cell:hover { background: rgba(255,255,255,0.03) !important; }

        /* ── HOVER: buttons ── */
        .btn-white {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .btn-outline {
          transition: border-color 0.18s, color 0.18s, transform 0.18s;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,0.28) !important;
          color: rgba(255,255,255,0.85) !important;
          transform: translateY(-2px);
        }

        /* ── FOOTER links ── */
        .footer-link { transition: color 0.18s; }
        .footer-link:hover { color: rgba(255,255,255,0.65) !important; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 60, padding: "0 16px", display: "flex", alignItems: "center", background: "rgba(5,6,8,0.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.brd}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 8 }}>

          {/* Logo */}
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 28, height: 28, borderRadius: 7, objectFit: "cover", border: `1px solid ${C.brd}` }} />
            <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.4px", color: "#fff", whiteSpace: "nowrap" }}>
              al<span style={{ color: "#f97316" }}>33</span>xf
            </span>
          </a>

          {/* Centre links — hidden on mobile via CSS */}
          <div className="nav-links" style={{ alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
            {c.navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link" style={{ fontSize: 13, color: C.t2, textDecoration: "none", padding: "5px 10px", borderRadius: 7, whiteSpace: "nowrap" }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto", flexShrink: 0 }}>
            {/* FIX 1: use <a> instead of <Link> for hard navigation between locales */}
            <a href={c.langHref} style={{ fontSize: 11, color: C.t3, textDecoration: "none", padding: "4px 8px", borderRadius: 5, border: `1px solid ${C.brd}`, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", transition: "color 0.18s, border-color 0.18s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = C.bMid; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.t3; e.currentTarget.style.borderColor = C.brd; }}>
              {c.langToggle}
            </a>
            <a href="#contact" className="btn-white" style={{ padding: "7px 14px", borderRadius: 8, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 12.5, textDecoration: "none", whiteSpace: "nowrap" }}>
              {c.navCta}
            </a>
            {/* Burger — shown on mobile via CSS */}
            <button onClick={() => setMenuOpen(v => !v)} className="nav-burger"
              style={{ width: 34, height: 34, borderRadius: 7, border: `1px solid ${C.brd}`, background: "transparent", color: "#fff", cursor: "pointer", fontSize: 15, alignItems: "center", justifyContent: "center" }}
              aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: "rgba(5,6,8,0.97)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.brd}`, padding: "8px 16px 16px", zIndex: 200 }}>
            {c.navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 4px", fontSize: 14, color: C.t2, textDecoration: "none", borderBottom: `1px solid ${C.brd}` }}>
                {item.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <a href={c.langHref} style={{ fontSize: 12, color: C.t3, textDecoration: "none", padding: "6px 10px", border: `1px solid ${C.brd}`, borderRadius: 6 }}>{c.langToggle}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{ padding: "7px 14px", borderRadius: 7, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 12.5, textDecoration: "none" }}>{c.navCta}</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="top" style={{ minHeight: "100svh", display: "flex", alignItems: "center", padding: "110px 16px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "min(800px,130vw)", height: 420, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "min(360px,55vw)", height: "min(360px,55vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "60px 60px", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)" }} />

        <div style={{ position: "relative", maxWidth: 1140, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.brd}`, marginBottom: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.05em" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
            {c.badgeText}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 60, height: 60, borderRadius: 15, objectFit: "cover", border: `1px solid ${C.brd}`, filter: "drop-shadow(0 0 20px rgba(59,130,246,0.28))" }} />
          </div>

          <h1 style={{ fontWeight: 900, fontSize: "clamp(32px, 5.5vw, 74px)", lineHeight: 1.02, letterSpacing: "-1.5px", marginBottom: 20, overflowWrap: "break-word", wordBreak: "break-word" }}>
            {c.heroLine1}<br />
            <span style={{ background: "linear-gradient(100deg, #60a5fa 0%, #818cf8 40%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {c.heroAccent}
            </span>
          </h1>

          <p style={{ fontSize: "clamp(14px, 2.2vw, 17px)", color: C.t2, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#contact" className="btn-white" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 13.5, textDecoration: "none" }}>
              {c.ctaPrimary} →
            </a>
            <a href={c.ctaSecHref} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, border: `1px solid ${C.bMid}`, color: C.t2, fontWeight: 500, fontSize: 13.5, textDecoration: "none" }}>
              {c.ctaSecondary}
            </a>
            <a href="https://wa.me/393791033339" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10, border: "1px solid rgba(37,211,102,0.35)", color: "#25d366", fontWeight: 600, fontSize: 13.5, textDecoration: "none", transition: "border-color 0.18s, background 0.18s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,5vw,48px)", flexWrap: "wrap", paddingTop: 32, borderTop: `1px solid ${C.brd}` }}>
            {c.stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: "clamp(16px,3vw,22px)", letterSpacing: "-0.5px" }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.t3, marginTop: 2, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.servicesEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0 }}>
              {c.servicesTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.servicesAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 400, margin: "10px auto 0" }}>{c.servicesSub}</p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
            {c.services.map((s) => (
              <div key={s.n} className="svc-card" style={{ padding: "28px 26px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
                  <span style={{ fontWeight: 900, fontSize: 26, letterSpacing: -2, color: "rgba(255,255,255,0.05)", lineHeight: 1, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{s.n}</span>
                  <span style={{ fontWeight: 700, fontSize: 15.5, letterSpacing: "-0.3px", lineHeight: 1.2 }}>{s.title}</span>
                </div>
                <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.65, margin: "0 0 14px" }}>{s.desc}</p>
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

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <ProjectsShowcase locale={locale} />
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── ECOSYSTEM ── */}
      <section id="ecosystem" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.ecosystemEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0 }}>
              {c.ecosystemTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.ecosystemAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 420, margin: "10px auto 0" }}>{c.ecosystemSub}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {c.products.map((p) => (
              <div key={p.name} className="prod-card" style={{ border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden", background: C.bg1 }}>
                <div className="pcg" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
                  <div style={{ padding: "clamp(24px,4vw,44px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                      <img src={p.logo} alt={p.name} style={{ width: 34, height: 34, borderRadius: 8, flexShrink: 0 }} />
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: p.badgeBg, border: `1px solid ${p.badgeBorder}`, color: p.badgeColor, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, whiteSpace: "nowrap" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.badgeColor, flexShrink: 0 }} />
                        {p.badge}
                      </div>
                    </div>
                    <h3 style={{ fontWeight: 900, fontSize: "clamp(22px,3.5vw,40px)", letterSpacing: "-1.5px", lineHeight: 1.0, marginBottom: 5 }}>{p.name}</h3>
                    <div style={{ fontSize: 11, color: C.t3, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", marginBottom: 14 }}>{p.domain}</div>
                    <p style={{ fontSize: 13.5, color: C.t2, lineHeight: 1.65, maxWidth: 360, marginBottom: 18 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 24 }}>
                      {p.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: C.t2 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.featureDot, flexShrink: 0, marginTop: 6 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <a href={p.ctaHref} target="_blank" rel="noopener noreferrer" className="btn-white"
                        style={{ padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", background: p.badgeColor, color: p.badgeColor === "#d4a832" ? "#000" : "#fff", whiteSpace: "nowrap" }}>
                        {p.ctaLabel}
                      </a>
                      <a href={p.learnHref} target="_blank" rel="noopener noreferrer" className="btn-outline"
                        style={{ padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none", border: `1px solid ${C.bMid}`, color: C.t2, whiteSpace: "nowrap" }}>
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="pvp" style={{ position: "relative", minHeight: 280, borderLeft: `1px solid ${p.accentBorder}`, overflow: "hidden" }}>
                    <img src={p.image} alt={`${p.name} preview`} className="prod-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.processEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0 }}>
              {c.processTitle}{" "}
              <span style={{ background: "linear-gradient(100deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{c.processAccent}</span>
            </h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10 }}>{c.processSub}</p>
          </div>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: C.brd, border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden" }}>
            {c.steps.map((s) => (
              <div key={s.k} className="step-cell" style={{ background: C.bg1, padding: "26px 22px" }}>
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: -2, color: "rgba(255,255,255,0.05)", marginBottom: 12, lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>{s.k}</div>
                <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px", marginBottom: 8 }}>{s.t}</div>
                <p style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "72px 16px 96px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{c.contactEyebrow}</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.0 }}>{c.contactTitle}</h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 480, margin: "10px auto 0", lineHeight: 1.7 }}>{c.contactSub}</p>
          </div>

          {/* FIX 3: fixed 2×2 grid instead of auto-fit */}
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, maxWidth: 680, margin: "0 auto" }}>
            {[
              { label: "Email",      value: "al33xf@gmail.com",     note: c.emailNote, href: LINKS.mail },
              { label: "Telegram",   value: "t.me/al33xf",          note: c.tgNote,    href: LINKS.tg   },
              { label: "X / Twitter",value: "x.com/al33xf",         note: "", href: LINKS.x    },
              { label: "WhatsApp",    value: "+39 379 103 3339",     note: c.tgNote,    href: "https://wa.me/393791033339" },
            ].map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="contact-card"
                style={{ padding: "20px 22px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1, textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: 11, color: C.t3, fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 6 }}>{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
              <a key={item.href} href={item.href} className="footer-link" style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>{item.label}</a>
            ))}
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>X</a>
            <a href={LINKS.gh} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>GitHub</a>
            {/* FIX 1 footer: <a> instead of <Link> */}
            <a href={c.langHref} className="footer-link" style={{ fontSize: 11, color: C.t3, textDecoration: "none", padding: "2px 6px", border: `1px solid ${C.brd}`, borderRadius: 4, fontFamily: "'JetBrains Mono', monospace" }}>{c.langToggle}</a>
          </div>
          <a href={c.footerHash42} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>
            {c.footerPowered}
          </a>
        </div>
      </footer>

    </main>
  );
}