"use client";

import { useMemo, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const LINKS = {
  x: "https://x.com/al33xf",
  tg: "https://t.me/al33xf",
  mail: "mailto:al33xf@gmail.com",
  gh: "https://github.com/al3xf3r",
};

type Locale = "en" | "it";

const COPY = {
  it: {
    nav: {
      build: "Cosa realizzo",
      projects: "Progetti",
      process: "Processo",
      contacts: "Contatti",
      cta: "Lavora con me",
    },
    badge: "Sviluppatore indipendente • Gestionali • Web • AI • Web3",
    heroTitle: "Realizzo gestionali, siti web, AI agent e soluzioni Web3",
    heroGradient: "pronti per andare online.",
    heroText:
      "Creo gestionali per aziende, CRM, automazioni, siti web professionali, landing page, AI agent e piattaforme Web3 con smart contract, token, NFT e dashboard.",
    start: "Inizia un progetto",
    github: "Guarda GitHub",
    stats: [
      ["Focus", "Business", "strumenti reali"],
      ["Stack", "Web + AI + Web3", "full-stack"],
      ["Stile", "Premium", "livello fintech"],
    ],
    buildEyebrow: "Cosa realizzo",
    buildTitle: "Soluzioni digitali complete per business e prodotti online",
    buildText:
      "Dal gestionale interno al sito pubblico, dall’automazione AI alla dashboard Web3: sviluppo strumenti concreti, puliti e pronti per essere usati.",
    services: [
      {
        badge: "01",
        title: "Gestionali, CRM e automazioni",
        desc: "Sistemi per gestire clienti, richieste, scadenze, comunicazioni, dashboard interne, workflow automatici e processi aziendali.",
        tag: "CRM + Clienti + Automazioni",
      },
      {
        badge: "02",
        title: "Siti web e landing page",
        desc: "Siti professionali, responsive, veloci e SEO-ready per aziende, professionisti, attività locali, brand e progetti digitali.",
        tag: "SEO + UX + Conversione",
      },
      {
        badge: "03",
        title: "AI agent",
        desc: "Agent, bot, assistenti automatici, workflow AI, integrazioni e strumenti per ridurre lavoro manuale e aumentare efficienza.",
        tag: "AI + API + Workflow",
      },
      {
        badge: "04",
        title: "Smart contract, token, NFT e dashboard",
        desc: "Sviluppo Web3 completo: smart contract, token, NFT, dApp, wallet connection, dashboard, admin panel e interfacce premium.",
        tag: "Web3 + Dashboard",
      },
    ],
    processTitle: "Processo",
    processText: "Semplice, professionale e orientato alla consegna.",
    steps: [
      ["Step 01", "Analisi", "Obiettivi, funzionalità, stack, tempistiche e priorità."],
      ["Step 02", "Sviluppo", "Costruzione modulare, codice pulito e UI curata."],
      ["Step 03", "Deploy", "Messa online, dominio, hosting, configurazioni e test."],
      ["Step 04", "Ottimizzazione", "Miglioramento continuo, performance e scalabilità."],
    ],
    contactTitle: "Contatti",
    contactText:
      "Dimmi cosa vuoi realizzare: gestionale, sito web, landing page, AI agent, dashboard o progetto Web3. Ti propongo il percorso più rapido per andare online.",
    emailNote: "Ideale per analisi, requisiti e preventivi.",
    tgNote: "Il canale più veloce per comunicare.",
    footerRights: "Tutti i diritti riservati.",
  },

  en: {
    nav: {
      build: "What I build",
      projects: "Work",
      process: "Process",
      contacts: "Contact",
      cta: "Work with me",
    },
    badge: "Independent builder • Management systems • Web • AI • Web3",
    heroTitle: "I build management tools, websites, AI agents and Web3 products",
    heroGradient: "ready to ship.",
    heroText:
      "I create business management systems, CRMs, automations, professional websites, landing pages, AI agents and Web3 platforms with smart contracts, tokens, NFTs and dashboards.",
    start: "Start a project",
    github: "View GitHub",
    stats: [
      ["Focus", "Business", "real tools"],
      ["Stack", "Web + AI + Web3", "full-stack"],
      ["Style", "Premium", "fintech grade"],
    ],
    buildEyebrow: "What I build",
    buildTitle: "Complete digital solutions for businesses and online products",
    buildText:
      "From internal management systems to public websites, from AI automation to Web3 dashboards: I build clean, usable and production-ready tools.",
    services: [
      {
        badge: "01",
        title: "Management systems, CRMs and automations",
        desc: "Tools to manage clients, requests, deadlines, communications, internal dashboards, automated workflows and business operations.",
        tag: "CRM + Clients + Automations",
      },
      {
        badge: "02",
        title: "Websites and landing pages",
        desc: "Professional, responsive, fast and SEO-ready websites for companies, professionals, local businesses, brands and digital products.",
        tag: "SEO + UX + Conversion",
      },
      {
        badge: "03",
        title: "AI agents",
        desc: "Agents, bots, automatic assistants, AI workflows, integrations and tools to reduce manual work and improve efficiency.",
        tag: "AI + APIs + Workflows",
      },
      {
        badge: "04",
        title: "Smart contracts, tokens, NFTs and dashboards",
        desc: "Complete Web3 development: smart contracts, tokens, NFTs, dApps, wallet connection, dashboards, admin panels and premium interfaces.",
        tag: "Web3 + Dashboard",
      },
    ],
    processTitle: "Process",
    processText: "Simple, professional and delivery-oriented.",
    steps: [
      ["Step 01", "Scope", "Goals, features, stack, timeline and priorities."],
      ["Step 02", "Build", "Modular development, clean code and polished UI."],
      ["Step 03", "Deploy", "Production deploy, domain, hosting, configuration and testing."],
      ["Step 04", "Optimize", "Continuous improvement, performance and scalability."],
    ],
    contactTitle: "Contact",
    contactText:
      "Tell me what you want to build: management system, website, landing page, AI agent, dashboard or Web3 product. I’ll propose the fastest path to production.",
    emailNote: "Best for scope, requirements and quotes.",
    tgNote: "Fastest async communication.",
    footerRights: "All rights reserved.",
  },
};

export default function PersonalHome({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const year = useMemo(() => new Date().getFullYear(), []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white antialiased min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black to-black" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/35 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/assets/al33xf.webp" alt="al33xf" className="h-9 w-9 rounded-xl border border-white/10 object-cover" />
            <div>
              <div className="font-extrabold tracking-tight text-lg leading-none">
                <span>al</span><span className="text-[#ff6a00]">33</span><span>xf</span>
              </div>
              <div className="text-[11px] text-white/55 -mt-0.5">Web • AI • Web3</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a href="#build" className="hover:text-white">{c.nav.build}</a>
            <a href="#projects" className="hover:text-white">{c.nav.projects}</a>
            <a href="#process" className="hover:text-white">{c.nav.process}</a>
            <a href="#contacts" className="hover:text-white">{c.nav.contacts}</a>
          </nav>

          <div className="flex items-center gap-2 relative">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageToggle />
              <a href={LINKS.gh} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold text-sm">
                GitHub
              </a>
              <a href="#contacts" className="px-4 py-2 rounded-xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-sm">
                {c.nav.cta}
              </a>
            </div>

            <button
              type="button"
              className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              ☰
            </button>

            {menuOpen && (
              <div className="md:hidden absolute right-0 top-12 w-64 max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-[0_0_40px_rgba(46,108,255,0.18)]">
                <div className="p-2">
                  <div className="px-3 py-2"><LanguageToggle /></div>
                  {[
                    [c.nav.build, "#build"],
                    [c.nav.projects, "#projects"],
                    [c.nav.process, "#process"],
                    [c.nav.contacts, "#contacts"],
                    ["GitHub", LINKS.gh],
                    ["X", LINKS.x],
                    ["Telegram", LINKS.tg],
                  ].map(([label, href]) => (
                    <a
                      key={`${label}-${href}`}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-4 pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#2e6cff]" />
              {c.badge}
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.12] tracking-tight">
              {c.heroTitle}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f8fff] via-white to-[#ff8a2e]">
                {c.heroGradient}
              </span>
            </h1>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
              {c.heroText}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contacts" className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-center">
                {c.start}
              </a>
              <a href={LINKS.gh} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold text-center">
                {c.github}
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {c.stats.map(([label, value, sub]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs text-white/60">{label}</div>
                  <div className="mt-1 font-bold">{value}</div>
                  <div className="text-xs text-white/45 mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] border border-white/10 bg-black/40 overflow-hidden shadow-[0_0_40px_rgba(46,108,255,0.25)]">
            <div
              className="h-52 relative"
              style={{
                backgroundImage: "url(/assets/banner1.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/85" />
              <div className="absolute left-5 bottom-5 flex items-center gap-4">
                <img src="/assets/al33xf.webp" alt="al33xf profile" className="h-16 w-16 rounded-2xl border border-white/10 object-cover" />
                <div>
                  <div className="text-xl font-extrabold leading-tight">al33xf Digital Studio</div>
                  <div className="text-xs text-white/55 mt-0.5">
                    CRM • Websites • AI Agents • Web3 Dashboards
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 grid grid-cols-2 gap-3">
              <a href={LINKS.mail} className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5">
                <div className="text-xs text-white/60">Email</div>
                <div className="font-semibold truncate">al33xf@gmail.com</div>
              </a>
              <a href={LINKS.tg} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5">
                <div className="text-xs text-white/60">Telegram</div>
                <div className="font-semibold truncate">t.me/al33xf</div>
              </a>
              <a href={LINKS.x} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5">
                <div className="text-xs text-white/60">X</div>
                <div className="font-semibold truncate">x.com/al33xf</div>
              </a>
              <a href={LINKS.gh} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5">
                <div className="text-xs text-white/60">GitHub</div>
                <div className="font-semibold truncate">github.com/al3xf3r</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="build" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">{c.buildEyebrow}</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">{c.buildTitle}</h2>
            <p className="mt-3 text-white/70 leading-relaxed">{c.buildText}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {c.services.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs text-[#ff8a2e] font-semibold">{item.badge}</div>
                <div className="mt-2 text-xl font-bold">{item.title}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</div>
                <div className="mt-4 text-xs text-white/50">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2e6cff]" />
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsShowcase locale={locale} />

      <section id="process" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">{c.processTitle}</h3>
          <p className="mt-2 text-white/70 leading-relaxed max-w-2xl">{c.processText}</p>

          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {c.steps.map(([k, t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs text-white/60">{k}</div>
                <div className="mt-1 font-bold">{t}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{c.contactTitle}</h2>
          <p className="mt-2 text-white/70 max-w-2xl">{c.contactText}</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <a href={LINKS.mail} className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:bg-white/5">
              <div className="text-sm text-white/60">Email</div>
              <div className="font-semibold truncate">al33xf@gmail.com</div>
              <div className="text-xs text-white/45 mt-1">{c.emailNote}</div>
            </a>

            <a href={LINKS.tg} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:bg-white/5">
              <div className="text-sm text-white/60">Telegram</div>
              <div className="font-semibold truncate">t.me/al33xf</div>
              <div className="text-xs text-white/45 mt-1">{c.tgNote}</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {year} al33xf. {c.footerRights}</div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <a href="#build" className="hover:text-white">{c.nav.build}</a>
            <a href="#projects" className="hover:text-white">{c.nav.projects}</a>
            <a href="#process" className="hover:text-white">{c.nav.process}</a>
            <a href="#contacts" className="hover:text-white">{c.nav.contacts}</a>
            <a href={LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href={LINKS.gh} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
