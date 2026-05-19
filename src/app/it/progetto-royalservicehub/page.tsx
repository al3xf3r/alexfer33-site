import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Service Hub | Proposta di sviluppo e digitalizzazione",
  description:
    "Proposta per sito web, comunicazione operativa, dashboard gestionale, app driver e tracking GPS per Royal Service Hub.",
  alternates: {
    canonical: "/it/progetto-royalservicehub",
  },
  openGraph: {
    title: "Royal Service Hub | Proposta di sviluppo e digitalizzazione",
    description:
      "Ecosistema digitale per gestione NCC, driver, servizi, tracking GPS e automazioni future.",
    url: "https://al33xf.xyz/it/progetto-royalservicehub",
    locale: "it_IT",
  },
};

const phaseOne = [
  "Sito web vetrina professionale",
  "Design premium responsive",
  "Ottimizzazione mobile",
  "Configurazione dominio e deploy",
  "Setup email aziendali",
  "Configurazione Cloudflare Email Routing",
  "Configurazione SMTP Brevo",
  "Gestione alias email",
  "Setup WhatsApp Business",
  "Configurazione multi-dispositivo",
  "Messaggi automatici",
  "Risposte rapide",
  "QR code per contatto diretto clienti",
  "Ottimizzazione SEO tecnica base",
];

const phaseTwo = [
  "Dashboard gestionale admin/segreteria",
  "Gestione driver",
  "Gestione veicoli",
  "Gestione servizi",
  "Sistema assegnazione corse",
  "Gestione disponibilità driver",
  "Tracking GPS in tempo reale",
  "Mappa live driver",
  "Web app mobile driver",
  "Accettazione/rifiuto servizi",
  "Stati operativi driver",
  "Notifiche operative base",
  "Gestione clienti",
  "Gestione partner",
  "Contabilità operativa base",
  "Struttura predisposta per integrazione Fatture in Cloud",
];

const infra = [
  ["Database cloud — Supabase Pro", "€ 25 / mese"],
  ["Tracking GPS e mappe", "€ 20 / mese"],
  ["Hosting applicazione — Vercel Pro", "€ 30 / mese"],
  ["Cloudflare Routing + Brevo SMTP + AWS push", "€ 25 / mese"],
];

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[32px] border border-white/10 bg-[#0b0f18]/85 shadow-[0_0_80px_rgba(46,108,255,0.10)] ${className}`}
    >
      {children}
    </div>
  );
}

function PriceBox({
  label,
  price,
  highlight = false,
}: {
  label: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-white/35">
        {label}
      </div>
      <div
        className={`mt-2 text-4xl md:text-5xl font-black tracking-tight ${
          highlight ? "text-[#ff6a00]" : "text-white"
        }`}
      >
        {price}
      </div>
    </div>
  );
}

export default function RoyalServiceHubProposalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090d14] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,108,255,0.22),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,106,0,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_22%,rgba(0,0,0,0.35))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090d14]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/it" className="flex items-center gap-3">
            <img
              src="/assets/al33xf.webp"
              alt="al33xf"
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover"
            />
            <div>
              <div className="text-2xl font-black leading-none tracking-tight">
                <span>al</span>
                <span className="text-[#ff6a00]">33</span>
                <span>xf</span>
              </div>
              <div className="mt-1 text-xs text-white/45">
                Web3 • AI • Sviluppo Web
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#fase1" className="hover:text-white">
              Fase 1
            </a>
            <a href="#fase2" className="hover:text-white">
              Fase 2
            </a>
            <a href="#costi" className="hover:text-white">
              Costi
            </a>
            <a href="#visione" className="hover:text-white">
              Visione
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 md:pb-20 md:pt-20">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
            Proposta di sviluppo e digitalizzazione
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Royal Service Hub
            <span className="block bg-gradient-to-r from-[#5f95ff] via-white to-[#ff8a2e] bg-clip-text text-transparent">
              ecosistema digitale NCC
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68">
            L’obiettivo del progetto è costruire un ecosistema digitale moderno,
            capace di migliorare l’organizzazione operativa, centralizzare le
            informazioni e creare una struttura tecnologica scalabile per la
            crescita futura dell’azienda.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Sito + Setup", "€ 1.000", "prezzo riservato"],
            ["App MVP", "€ 5.000", "prezzo riservato"],
            ["Totale", "€ 6.000", "progetto completo"],
          ].map(([title, value, note]) => (
            <Card key={title} className="p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-white/35">
                {title}
              </div>
              <div className="mt-3 text-5xl font-black tracking-tight text-white">
                {value}
              </div>
              <div className="mt-2 text-sm text-[#ff8a2e]">{note}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Overview
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Un sistema completo, non solo un sito web.
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Presenza online professionale",
              "Infrastruttura comunicativa aziendale",
              "Sistema gestionale interno",
              "Web app operativa per driver",
              "Tracking GPS in tempo reale",
              "Base per automazioni e integrazioni",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="fase1" className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#ff8a2e]">
                Fase 1
              </div>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
                Presenza online e comunicazione operativa
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                Prima fase orientata alla costruzione dell’identità digitale e
                della struttura comunicativa aziendale.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {phaseOne.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <PriceBox label="Prezzo standard" price="€ 1.500" />
              <PriceBox label="Prezzo riservato" price="€ 1.000" highlight />
              <div className="rounded-[24px] border border-[#2e6cff]/25 bg-[#2e6cff]/10 p-5 text-sm leading-relaxed text-white/70">
                Obiettivo: rendere Royal Service Hub immediatamente
                professionale, organizzata e facilmente raggiungibile online.
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section id="fase2" className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#ff8a2e]">
                Fase 2
              </div>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
                Sistema gestionale interno MVP
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                Sviluppo del sistema operativo interno per la gestione
                dell’attività NCC: driver, veicoli, servizi, tracking,
                clienti, partner e contabilità operativa.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {phaseTwo.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <PriceBox label="Prezzo standard" price="€ 7.500" />
              <PriceBox label="Prezzo riservato" price="€ 5.000" highlight />
              <div className="rounded-[24px] border border-[#ff6a00]/25 bg-[#ff6a00]/10 p-5 text-sm leading-relaxed text-white/70">
                Obiettivo: centralizzare l’operatività aziendale in un unico
                sistema moderno, riducendo errori, tempi di gestione e
                comunicazioni frammentate.
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Totale progetto
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <PriceBox label="Totale standard" price="€ 9.000" />
            <PriceBox label="Totale riservato" price="€ 6.000" highlight />
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Manutenzione e supporto
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Continuità operativa e supporto tecnico.
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Monitoraggio piattaforma",
              "Aggiornamenti tecnici",
              "Backup e controllo servizi",
              "Supporto operativo",
              "Bug fixing",
              "Ottimizzazioni minori",
              "Assistenza tecnica base",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <PriceBox label="Canone mensile" price="€ 100 / mese" highlight />
          </div>
        </Card>
      </section>

      <section id="costi" className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Costi infrastruttura
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Servizi esterni fatturati dai provider.
          </h2>

          <p className="mt-4 text-white/65 leading-relaxed">
            I costi dei provider esterni verranno fatturati separatamente e
            direttamente dai rispettivi servizi utilizzati.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {infra.map(([title, price]) => (
              <div
                key={title}
                className="rounded-[24px] border border-white/10 bg-black/25 p-5"
              >
                <div className="text-white/75">{title}</div>
                <div className="mt-3 text-3xl font-black text-[#ff6a00]">
                  {price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-[#2e6cff]/25 bg-[#2e6cff]/10 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-white/40">
              Totale costi infrastruttura stimati
            </div>
            <div className="mt-2 text-5xl font-black text-white">
              € 100 / mese circa
            </div>
          </div>
        </Card>
      </section>

      <section id="visione" className="mx-auto max-w-6xl px-4 pb-16">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Visione
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Una piattaforma operativa concreta, moderna e scalabile.
          </h2>

          <p className="mt-5 max-w-4xl text-white/68 leading-relaxed">
            L’obiettivo non è semplicemente realizzare un sito web o
            un’applicazione, ma costruire una piattaforma operativa concreta,
            moderna e scalabile, capace di evolversi nel tempo insieme
            all’azienda.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Automazioni operative",
              "AI agent",
              "Contabilità avanzata",
              "Integrazione completa Fatture in Cloud",
              "App clienti",
              "Notifiche push",
              "Sistemi avanzati di gestione servizi",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-white/10 bg-black/25 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/35">
                Progetto sviluppato da
              </div>
              <div className="mt-2 text-4xl font-black tracking-tight">
                <span>al</span>
                <span className="text-[#ff6a00]">33</span>
                <span>xf</span>
              </div>
              <div className="mt-1 text-white/45">
                Web3 • AI • Sviluppo Web
              </div>
            </div>

            <a
              href="mailto:al33xf@gmail.com"
              className="rounded-2xl bg-[#ff6a00] px-6 py-4 font-bold text-black shadow-[0_0_40px_rgba(255,106,0,0.22)] hover:bg-[#ff8a2e]"
            >
              Contatta al33xf
            </a>
          </div>
        </Card>
      </section>
    </main>
  );
}