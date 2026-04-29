import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Service Hub | Progetto App, Dashboard e Sistema Gestionale",
  description:
    "Overview del progetto Royal Service Hub: dashboard gestionale, web app driver, tracking GPS, gestione servizi, partner, contabilità e automazioni future.",
  alternates: {
    canonical: "/it/progetto-royalservicehub",
    languages: {
      it: "/it/progetto-royalservicehub",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Royal Service Hub | Progetto App, Dashboard e Sistema Gestionale",
    description:
      "Sistema digitale interno per gestione NCC: driver, servizi, tracking GPS, partner, contabilità e automazioni.",
    url: "https://al33xf.xyz/it/progetto-royalservicehub",
    locale: "it_IT",
  },
  twitter: {
    title: "Royal Service Hub | Progetto App, Dashboard e Sistema Gestionale",
    description:
      "Dashboard gestionale e web app driver per digitalizzare le operazioni Royal Service Hub.",
  },
};

const modules = [
  {
    title: "Dashboard gestionale",
    desc: "Pannello web per titolare e segreteria con vista su servizi, driver, disponibilità, corse, clienti e operatività giornaliera.",
  },
  {
    title: "Web app driver",
    desc: "Area mobile per i driver per ricevere servizi, accettare o rifiutare corse, aggiornare stato e condividere posizione.",
  },
  {
    title: "Tracking GPS",
    desc: "Monitoraggio in tempo reale della posizione dei driver su mappa, collegato allo stato operativo e ai servizi assegnati.",
  },
  {
    title: "Gestione servizi",
    desc: "Creazione, assegnazione e monitoraggio delle corse con cliente, pickup, destinazione, orario, passeggeri, prezzo e stato.",
  },
  {
    title: "Partner e disponibilità",
    desc: "Gestione dei partner esterni, disponibilità, storico collaborazioni, costi e servizi assegnati.",
  },
  {
    title: "Contabilità operativa",
    desc: "Registrazione di incassi, costi, margini, pagamenti, servizi da fatturare e report giornalieri o mensili.",
  },
];

const phases = [
  {
    phase: "Fase 1",
    title: "MVP operativo",
    items: [
      "Login utenti e ruoli",
      "Dashboard admin",
      "Gestione driver",
      "Gestione veicoli",
      "Creazione servizi",
      "Assegnazione corse",
      "App driver mobile",
      "Tracking GPS",
      "Notifiche base",
    ],
  },
  {
    phase: "Fase 2",
    title: "Operatività avanzata",
    items: [
      "Calendario servizi",
      "Ordine di servizio automatico",
      "Filtri avanzati",
      "Gestione partner",
      "Miglioramento flusso segreteria",
    ],
  },
  {
    phase: "Fase 3",
    title: "Contabilità e report",
    items: [
      "Margini per servizio",
      "Incassi giornalieri",
      "Costi driver e partner",
      "Servizi da fatturare",
      "Report direzionali",
    ],
  },
  {
    phase: "Fase 4",
    title: "Integrazioni e automazioni",
    items: [
      "Integrazione Fatture in Cloud",
      "Automazioni interne",
      "AI agent operativo",
      "Riepiloghi automatici",
    ],
  },
  {
    phase: "Fase 5",
    title: "App clienti",
    items: [
      "Richiesta transfer",
      "Prenotazioni",
      "Notifiche cliente",
      "Tracking driver",
      "Storico servizi",
    ],
  },
];

const serviceFields = [
  "Cliente",
  "Telefono",
  "Email",
  "Data e ora",
  "Pickup",
  "Destinazione",
  "Tappe intermedie",
  "Passeggeri",
  "Bagagli",
  "Note operative",
  "Prezzo",
  "Metodo pagamento",
  "Driver",
  "Veicolo",
  "Partner",
  "Stato servizio",
];

export default function RoyalServiceHubProjectPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:22px_22px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black to-black" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/35 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <a href="/it" className="flex items-center gap-3">
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
              <div className="text-[11px] text-white/55 -mt-0.5">
                Web3 • AI • Sviluppo Web
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a href="#overview" className="hover:text-white">
              Overview
            </a>
            <a href="#moduli" className="hover:text-white">
              Moduli
            </a>
            <a href="#mvp" className="hover:text-white">
              MVP
            </a>
            <a href="#roadmap" className="hover:text-white">
              Roadmap
            </a>
          </nav>

          <a
            href="/it"
            className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm"
          >
            Torna al sito
          </a>
        </div>
      </header>

      <section id="overview" className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
              Progetto gestionale NCC • Dashboard • App Driver • Tracking GPS
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Royal Service Hub
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f8fff] via-white to-[#ff8a2e]">
                sistema digitale per la gestione operativa NCC
              </span>
            </h1>

            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-3xl">
              L’obiettivo è sviluppare una piattaforma interna per centralizzare
              la gestione dei servizi, coordinare driver e partner, monitorare le
              posizioni in tempo reale e trasformare l’operatività quotidiana in
              un processo ordinato, misurabile e scalabile.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#mvp"
                className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-center shadow-[0_0_40px_rgba(255,106,0,0.18)]"
              >
                Vedi la prima fase
              </a>
              <a
                href="#roadmap"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-center"
              >
                Consulta la roadmap
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(46,108,255,0.12)]">
            <div className="rounded-[24px] border border-white/10 bg-black/50 overflow-hidden">
              <div className="border-b border-white/10 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/50">Live Operations</div>
                  <div className="font-bold">Royal Control Center</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#ff6a00]/15 text-[#ff8a2e] text-xs border border-[#ff6a00]/20">
                  MVP Scope
                </div>
              </div>

              <div className="p-5 grid gap-4">
                {[
                  ["Driver attivi", "12", "Tracking e disponibilità"],
                  ["Servizi oggi", "28", "Assegnati e da completare"],
                  ["In corso", "6", "Monitoraggio real time"],
                  ["Da assegnare", "4", "Priorità segreteria"],
                ].map(([label, value, note]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="text-sm text-white/55">{label}</div>
                        <div className="mt-1 text-white/65 text-xs">{note}</div>
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-[#2e6cff]/25 bg-[#2e6cff]/10 p-4">
                  <div className="text-sm font-semibold text-white">
                    Focus principale
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    Sapere chi è disponibile, dove si trova e quale servizio può
                    ricevere, riducendo telefonate, errori e tempi morti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["Dashboard", "gestione centrale"],
            ["Driver App", "operatività mobile"],
            ["GPS Tracking", "posizioni live"],
            ["CRM", "clienti e servizi"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff8a2e]">
                {title}
              </div>
              <div className="mt-2 text-sm text-white/60">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="moduli" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">Moduli principali</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Cosa dovrà gestire il sistema
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              La piattaforma sarà progettata come un unico centro operativo:
              ogni modulo comunica con gli altri e contribuisce a rendere più
              chiara la gestione quotidiana.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 hover:bg-white/[0.06] transition"
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mvp" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#2e6cff]/15 via-white/5 to-[#ff6a00]/10 p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div>
              <div className="text-sm text-white/60">Prima versione</div>
              <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
                MVP con tracking GPS fin dalla base
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                La prima versione dovrà essere semplice, stabile e concentrata
                sulle funzioni essenziali: creare servizi, assegnarli ai driver,
                vedere disponibilità e posizione, monitorare lo stato e
                registrare i dati principali.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Creazione servizi",
                "Gestione driver",
                "Gestione veicoli",
                "Assegnazione corse",
                "App mobile driver",
                "Accettazione/rifiuto",
                "Tracking GPS",
                "Notifiche base",
                "Stati operativi",
                "Vista giornaliera",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="text-sm text-white/60">Scheda servizio</div>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
              Dati da registrare per ogni corsa
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {serviceFields.map((field) => (
                <div
                  key={field}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="text-sm text-white/60">Stati operativi</div>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
              Controllo immediato su driver e servizi
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h3 className="font-bold">Stati driver</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Libero, occupato, in servizio, non disponibile, in pausa, in
                  ferie, offline.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h3 className="font-bold">Stati servizio</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Nuovo, da assegnare, assegnato, accettato, in corso,
                  completato, annullato, da fatturare, fatturato.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h3 className="font-bold">Stati veicolo</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Disponibile, occupato, manutenzione, non disponibile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">Roadmap</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Sviluppo per fasi, senza creare complessità inutile
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Il sistema dovrà crescere per step: prima le funzioni operative
              fondamentali, poi contabilità, integrazioni, automazioni e app
              clienti.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="md:w-44">
                    <div className="text-sm text-[#ff8a2e] font-semibold">
                      {phase.phase}
                    </div>
                    <h3 className="mt-1 text-xl font-extrabold">
                      {phase.title}
                    </h3>
                  </div>

                  <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {phase.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            [
              "Fatture in Cloud",
              "Da valutare integrazione API per creare clienti, documenti fiscali, ricevute, proforme e sincronizzare stato pagamento.",
            ],
            [
              "AI Agent",
              "In futuro l’AI potrà leggere richieste, estrarre dati, creare bozze servizio, suggerire driver e generare riepiloghi.",
            ],
            [
              "App clienti",
              "Evoluzione futura per richiesta transfer, prenotazioni, notifiche, tracking driver e storico servizi.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#2e6cff]/15 via-white/5 to-[#ff6a00]/10 p-6 md:p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="text-sm text-white/60">Visione finale</div>
              <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
                Un sistema interno oggi, una piattaforma scalabile domani.
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed max-w-3xl">
                Royal Service Hub può diventare la base operativa per
                digitalizzare l’azienda, migliorare il controllo quotidiano e
                costruire un prodotto replicabile per altre realtà del settore
                NCC.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
              <div className="text-xs text-white/50">Prepared by</div>
              <div className="mt-1 font-extrabold tracking-tight text-2xl leading-none">
                <span className="text-white">al</span>
                <span className="text-[#ff6a00]">33</span>
                <span className="text-white">xf</span>
              </div>
              <div className="mt-1 text-xs text-white/55">
                Web3 • AI • Sviluppo Web
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}