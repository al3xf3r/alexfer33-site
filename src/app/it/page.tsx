// src/app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const LINKS = {
  x: "https://x.com/al33xf",
  tg: "https://t.me/al33xf",
  mail: "mailto:al33xf@gmail.com",
  gh: "https://github.com/al3xf3r",
};

const SITE_URL = "https://al33xf.xyz";

export default function HomePage() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
const isItalian = pathname === "/it";
const langHref = isItalian ? "/" : "/it";
const langLabel = isItalian ? "EN" : "IT";
const langText = isItalian ? "English" : "Italiano";
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bg-black text-white antialiased min-h-screen overflow-x-hidden">
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "al33xf",
            url: SITE_URL,
            image: `${SITE_URL}/assets/al33xf.webp`,
            sameAs: [LINKS.x, LINKS.tg, LINKS.gh],
            jobTitle: "Sviluppatore Full-Stack Web3, AI e Web",
            worksFor: { "@type": "Organization", name: "Independent" },
            knowsAbout: [
              "Web Development",
              "Websites",
              "Landing Pages",
              "SEO",
              "Performance Optimization",
              "Next.js",
              "React",
              "TypeScript",
              "Solidity",
              "EVM",
              "Smart Contracts",
              "Token Engineering",
              "AI Agents",
              "NFT Platforms",
              "Indexing",
              "Bots",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "business",
                email: "al33xf@gmail.com",
              },
            ],
          }),
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />
        <div className="absolute inset-0 noise opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black to-black" />
      </div>

      {/* Subtle noise */}
      <style>{`
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/35 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/assets/al33xf.webp"
              alt="al33xf"
              className="h-9 w-9 rounded-xl border border-white/10 bg-black/40 object-cover"
            />
            <div>
              <div className="font-extrabold tracking-tight text-lg leading-none">
                <span className="text-white">al</span>
                <span className="text-[#ff6a00]">33</span>
                <span className="text-white">xf</span>
              </div>
              <div className="text-[11px] text-white/55 -mt-0.5">Web3 • AI • Sviluppo Web</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a href="#build" className="hover:text-white">
              Cosa realizzo
            </a>
            <a href="#projects" className="hover:text-white">
              Progetti
            </a>
            <a href="#capabilities" className="hover:text-white">
              Competenze
            </a>
            <a href="#process" className="hover:text-white">
              Processo
            </a>
            <a href="#principles" className="hover:text-white">
              Principi
            </a>
            <a href="#resources" className="hover:text-white">
              Risorse
            </a>
            
            <a href="#contacts" className="hover:text-white">
              Contatti
            </a>
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-2 relative">
            <div className="hidden sm:flex items-center gap-2">
                <LanguageToggle />
              <a
                href={LINKS.gh}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm"
              >
                GitHub
              </a>
              <a
                href="#contacts"
                className="px-4 py-2 rounded-xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-sm shadow-[0_0_40px_rgba(255,106,0,0.18)]"
              >
                Lavora con me
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
              aria-label="Apri menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
              <div className="md:hidden absolute right-0 top-12 w-64 max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-[0_0_40px_rgba(46,108,255,0.18)] overflow-hidden">
                <div className="p-2">
                     <div className="px-3 py-2">
                                        <LanguageToggle />
                                      </div>
                  {[
  
  [isItalian ? "Cosa realizzo" : "What I build", "#build"],
  [isItalian ? "Progetti" : "Work", "#projects"],
  [isItalian ? "Competenze" : "Capabilities", "#capabilities"],
  [isItalian ? "Processo" : "Process", "#process"],
  [isItalian ? "Principi" : "Principles", "#principles"],
  [isItalian ? "Risorse" : "Resources", "#resources"],
  [isItalian ? "Contatti" : "Contacts", "#contacts"],
  ["GitHub", LINKS.gh],
  ["X", LINKS.x],
  ["Telegram", LINKS.tg],
].map(([label, href]) => (
                    <a
                      key={`${label}-${href}`}
                      href={href}
                      onClick={closeMenu}
                      className="block px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-2 px-3 pb-1 text-[11px] text-white/40">Menu</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-16 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#2e6cff]" />
                Sviluppatore indipendente • Delivery pronta per team e produzione
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight md:leading-[1.12] pb-1 tracking-tight">
                Realizzo progetti Web3, AI e siti web
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f8fff] via-white to-[#ff8a2e]">
                  pronti per andare online.
                </span>
              </h1>

              <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
                Siti web e landing page, smart contract, token, AI agent, piattaforme NFT, dashboard, automazioni e app
                full-stack. Interfacce premium, sistemi misurabili e sviluppo pulito.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacts"
                  className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold shadow-[0_0_40px_rgba(255,106,0,0.18)] text-center"
                >
                  Inizia un progetto
                </a>
                <a
                  href={LINKS.gh}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-center"
                >
                  Guarda GitHub
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <MiniStat label="Focus" value="Delivery" sub="non demo" />
                <MiniStat label="Stack" value="Web3 + AI" sub="full-stack" />
                <MiniStat label="Stile" value="Premium" sub="livello fintech" />
              </div>

              <div className="mt-6 text-xs text-white/45">
                Disponibile per: MVP → produzione, siti web e landing page, preparazione audit, interfacce protocol,
                integrazioni, automazioni e scaling.
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative rounded-[32px] overflow-hidden">
                <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(46,108,255,0.25),transparent_55%),radial-gradient(circle_at_bottom,rgba(255,106,0,0.18),transparent_50%)] blur-2xl" />

                <div className="relative rounded-[32px] border border-white/10 bg-black/40 overflow-hidden shadow-[0_0_40px_rgba(46,108,255,0.25)]">
                  {/* Banner */}
                  <div
                    className="h-44 md:h-52 relative"
                    style={{
                      backgroundImage: "url(/assets/banner1.webp)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/85" />
                    <div className="absolute left-5 bottom-5 flex items-center gap-4">
                      <img
                        src="/assets/al33xf.webp"
                        alt="al33xf profile"
                        className="h-14 w-14 md:h-16 md:w-16 rounded-2xl border border-white/10 bg-black/40 object-cover"
                      />
                      <div>
                        <div className="text-xl font-extrabold leading-tight">Sviluppatore Web3, AI e Web</div>
                        <div className="text-xs text-white/55 mt-0.5">
                          Siti web • Solidity • EVM • Solana • React • Next.js • Bot • Infrastruttura
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick links */}
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={LINKS.x}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <IconX />
                          <div className="min-w-0">
                            <div className="text-xs text-white/60">X</div>
                            <div className="font-semibold truncate">x.com/al33xf</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href={LINKS.tg}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <IconTelegram />
                          <div className="min-w-0">
                            <div className="text-xs text-white/60">Telegram</div>
                            <div className="font-semibold truncate">t.me/al33xf</div>
                          </div>
                        </div>
                      </a>

                      <a href={LINKS.mail} className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5 transition">
                        <div className="flex items-center gap-3">
                          <IconMail />
                          <div className="min-w-0">
                            <div className="text-xs text-white/60">Email</div>
                            <div className="font-semibold truncate">al33xf@gmail.com</div>
                          </div>
                        </div>
                      </a>

                      <a
                        href={LINKS.gh}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <IconGitHub />
                          <div className="min-w-0">
                            <div className="text-xs text-white/60">GitHub</div>
                            <div className="font-semibold truncate">github.com/al3xf3r</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold">Cosa ottieni</div>
                      <div className="mt-1 text-sm text-white/70 leading-relaxed">
                        Un progetto serio: analisi → sviluppo → deploy → monitoraggio. Codice pulito, esperienza stabile
                        e delivery pronta per la produzione.
                      </div>
                      <a
                        href="#contacts"
                        className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-sm w-full"
                      >
                        Contatto e analisi progetto
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-white/45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section id="build" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-sm text-white/60">Cosa realizzo</div>
              <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">Prodotti digitali full-stack</h2>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Posso sviluppare su richiesta: da un singolo smart contract fino a piattaforme complete con dashboard,
                autenticazione, indexing, pagamenti, automazioni, monitoraggio e siti moderni costruiti per convertire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={LINKS.gh}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 text-white font-semibold text-center"
              >
                Guarda il codice
              </a>
              <a
                href="#contacts"
                className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold shadow-[0_0_40px_rgba(255,106,0,0.18)] text-center"
              >
                Costruiamo insieme
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                badge: "AI",
                title: "AI agent e automazioni",
                desc: "Agent, bot, integrazioni e workflow per social, trigger on-chain, analytics e reminder.",
                tag: "Server + API + Bot",
              },
              {
                badge: "Web3",
                title: "Smart contract e token",
                desc: "Contratti Solidity (EVM), creazione token, permit flow, vesting, staking, logiche revenue e upgrade.",
                tag: "Pattern security-first",
              },
              {
                badge: "Prodotto",
                title: "Piattaforme NFT e dashboard",
                desc: "Minting, marketplace, gating, allowlist, pannelli admin, statistiche real-time, indexing e UX curata.",
                tag: "UI/UX premium",
              },
              {
                badge: "Web",
                title: "Siti web e landing page",
                desc: "Siti moderni progettati per convertire: responsive design, caricamento veloce, struttura SEO-ready e gerarchia dei contenuti pulita.",
                tag: "SEO + Performance + UX",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs text-white/60">{c.badge}</div>
                <div className="mt-2 text-xl font-bold">{c.title}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
                <div className="mt-4 text-xs text-white/50">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2e6cff]" />
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ProjectsShowcase locale="it"/>

      {/* Capabilities */}
      <section id="capabilities" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Competenze</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          End-to-end: design → sviluppo → prodotto → infrastruttura. Su richiesta, con una delivery da vero team tecnico.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            {
              k: "Architettura",
              t: "System design",
              d: "Specifiche, modello dati, design API, confini di sicurezza e strategia di deploy.",
            },
            {
              k: "Web3",
              t: "Contratti e integrazioni",
              d: "Solidity (EVM), flussi token, staking, permit, eventi, indexer e wallet UX.",
            },
            {
              k: "Prodotto",
              t: "Frontend e dashboard",
              d: "Next.js, React, Tailwind, interfacce premium, mobile-first, performance e chiarezza.",
            },
            {
              k: "Web",
              t: "Siti, SEO e performance",
              d: "Landing page e siti con struttura pulita, Core Web Vitals, SEO on-page, analytics e deploy in produzione.",
            },
            {
              k: "AI",
              t: "Agent e automazioni",
              d: "Bot, trigger, job automatici, loop agentici e monitoraggio in produzione.",
            },
            {
              k: "Infra",
              t: "Operatività in produzione",
              d: "Vercel/Netlify, VPS, Nginx, PM2, log, alert, uptime e analytics.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-xs text-white/60">{c.k}</div>
              <div className="mt-1 text-xl font-bold">{c.t}</div>
              <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">Processo</h3>
          <p className="mt-2 text-white/70 leading-relaxed max-w-2xl">
            Semplice, professionale e ripetibile. Niente caos. Niente zone grigie.
          </p>

          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              ["Step 01", "Analisi", "Definizione obiettivi, vincoli, chain/stack, deliverable e timeline."],
              ["Step 02", "Sviluppo", "Implementazione in moduli puliti, con sicurezza e UX come base."],
              ["Step 03", "Deploy", "Messa online con env corretti, domini e monitoraggio."],
              ["Step 04", "Ottimizzazione", "Miglioramenti basati su dati reali, performance e affidabilità."],
            ].map(([k, t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs text-white/60">{k}</div>
                <div className="mt-1 font-bold">{t}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-white/45">
            Opzionale: preparazione audit, threat modeling, runbook, piani di manutenzione e ottimizzazione siti web.
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">Principi</h3>
          <p className="mt-2 text-white/70 leading-relaxed max-w-2xl">
            La mentalità dietro ogni progetto: livello produzione, trasparenza e scalabilità.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              ["Baseline di sicurezza", "Si parte assumendo che esistano rischi reali. Le difese vanno progettate, non improvvisate."],
              ["Trasparenza", "Stato chiaro, flussi chiari e percorsi dati verificabili quando possibile."],
              ["Pronto a scalare", "Architettura e UX devono reggere utilizzo reale e crescita."],
              ["Prodotto premium", "Tono istituzionale, performance e chiarezza su ogni schermata."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="font-semibold">{t}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-sm text-white/60">Risorse</div>
              <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">Link e profili</h2>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Il modo più rapido per validare: guarda il codice, i profili social e contattami direttamente.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={LINKS.x}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 text-white font-semibold text-center"
              >
                X
              </a>
              <a
                href={LINKS.tg}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 text-white font-semibold text-center"
              >
                Telegram
              </a>
              <a
                href={LINKS.gh}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold shadow-[0_0_40px_rgba(255,106,0,0.18)] text-center"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <ResourceCard title="X" value="x.com/al33xf" href={LINKS.x} />
            <ResourceCard title="Telegram" value="t.me/al33xf" href={LINKS.tg} />
            <ResourceCard title="Email" value="al33xf@gmail.com" href={LINKS.mail} />
            <ResourceCard title="GitHub" value="github.com/al3xf3r" href={LINKS.gh} />
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contatti</h2>
              <p className="mt-2 text-white/70 max-w-2xl">
                Dimmi cosa vuoi realizzare: sito web, app, protocollo, AI agent o prodotto digitale. Ti proporrò il
                percorso più rapido per arrivare in produzione, con stack, scope e deliverable chiari.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <a href={LINKS.mail} className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:bg-white/5 transition">
              <div className="flex items-center gap-3">
                <IconMail />
                <div className="min-w-0">
                  <div className="text-sm text-white/60">Email</div>
                  <div className="font-semibold truncate">al33xf@gmail.com</div>
                  <div className="text-xs text-white/45 mt-1">Ideale per analisi, requisiti e preventivi.</div>
                </div>
              </div>
            </a>

            <a
              href={LINKS.tg}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <IconTelegram />
                <div className="min-w-0">
                  <div className="text-sm text-white/60">Telegram</div>
                  <div className="font-semibold truncate">t.me/al33xf</div>
                  <div className="text-xs text-white/45 mt-1">Il canale più veloce per comunicare.</div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#2e6cff]/15 via-white/5 to-[#ff6a00]/10 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-sm text-white/60">Pronto a partire?</div>
                <div className="text-xl font-extrabold">Analisi → Sviluppo → Deploy</div>
                <div className="text-sm text-white/70 mt-1">
                  Inviami un brief sintetico: cos’è il progetto, utenti target, preferenza chain/stack se presente e deadline.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={LINKS.mail}
                  className="px-6 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold shadow-[0_0_40px_rgba(255,106,0,0.18)] text-center"
                >
                  Scrivimi via email
                </a>
                <a
                  href={LINKS.gh}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/45">Mentalità orientata alla delivery. Aspettative chiare. Esecuzione pulita.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/al33xf.webp"
                alt="al33xf"
                className="h-9 w-9 rounded-xl border border-white/10 bg-black/40 object-cover"
              />
              <div className="text-sm text-white/60">© {year} al33xf. Tutti i diritti riservati.</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <a href="#build" className="hover:text-white">
                Cosa realizzo
              </a>
               <a href="#projects" className="hover:text-white">
                Progetti
              </a>
              <a href="#capabilities" className="hover:text-white">
                Competenze
              </a>
              <a href="#process" className="hover:text-white">
                Processo
              </a>
              <a href="#contacts" className="hover:text-white">
                Contatti
              </a>
              <a href={LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white">
                X
              </a>
              <a href={LINKS.gh} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* --- Small UI bits --- */
function MiniStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 font-bold">{value}</div>
      <div className="text-xs text-white/45 mt-1">{sub}</div>
    </div>
  );
}

function ResourceCard({ title, value, href }: { title: string; value: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="rounded-2xl border border-white/10 bg-black/30 p-5 hover:bg-white/5 transition"
    >
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-1 font-semibold">{value}</div>
      <div className="text-xs text-white/45 mt-1">Apri</div>
    </a>
  );
}

/* --- Icons (inline SVG, zero deps) --- */
function IconMail() {
  return (
    <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.9"
        />
        <path
          d="M5.5 7.5 12 12l6.5-4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

function IconX() {
  return (
    <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 5h4.2l2.9 4.2L18 5h2l-5 6.7L20 19h-4.2l-3.1-4.5L8.7 19H6.6l5.3-7L7 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

function IconTelegram() {
  return (
    <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 5 3.8 12.2c-.8.3-.8 1.5.1 1.7l4.6 1.3 1.7 5.2c.3.9 1.5 1 2 .2l2.6-4.1 4.7 3.4c.8.6 2 .1 2.2-.9L23 6.7c.2-1.2-.8-2-2-1.7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M9 14.5 20 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

function IconGitHub() {
  return (
    <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.8c-5.1 0-9.2 4.1-9.2 9.2 0 4.1 2.7 7.6 6.5 8.8.5.1.7-.2.7-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.1-.2-4.3-1.1-4.3-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.7-2.2 4.6-4.3 4.8.4.3.7 1 .7 2v3c0 .3.2.6.7.5 3.8-1.2 6.5-4.7 6.5-8.8 0-5.1-4.1-9.2-9.2-9.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}