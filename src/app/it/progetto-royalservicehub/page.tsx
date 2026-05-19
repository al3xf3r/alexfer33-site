import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Service Hub | Proposta di sviluppo e digitalizzazione",
  description:
    "Proposta per sito web, comunicazione operativa, dashboard gestionale, app driver e tracking GPS per Royal Service Hub.",
  alternates: {
    canonical: "/it/progetto-royalservicehub",
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
      className={`rounded-[32px] border border-[#d8c38a]/15 bg-[#10100f]/85 backdrop-blur-xl shadow-[0_0_80px_rgba(216,195,138,0.08)] ${className}`}
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
    <div className="rounded-[24px] border border-[#d8c38a]/15 bg-black/30 p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-white/35">
        {label}
      </div>

      <div
        className={`mt-2 text-4xl md:text-5xl font-black tracking-tight ${
          highlight
            ? "bg-gradient-to-r from-[#f6e7b1] via-[#d8b76a] to-[#8f7337] bg-clip-text text-transparent"
            : "text-[#e7e4dc]"
        }`}
      >
        {price}
      </div>
    </div>
  );
}

export default function RoyalServiceHubProposalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0b0a] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(216,195,138,0.16),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(180,180,180,0.10),transparent_44%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_24%,rgba(0,0,0,0.42))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.055)_1px,transparent_0)] [background-size:24px_24px] opacity-25" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#d8c38a]/10 bg-[#0b0b0a]/75 backdrop-blur-xl">
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

          <a
            href="mailto:al33xf@gmail.com"
            className="rounded-2xl bg-gradient-to-r from-[#f4df9b] via-[#d2aa53] to-[#8f7337] px-5 py-3 text-sm font-bold text-black shadow-[0_0_40px_rgba(216,183,106,0.20)] hover:brightness-110"
          >
            Contatta al33xf
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="flex justify-center">
          <div className="rounded-[36px] border border-[#d8c38a]/15 bg-black/35 px-6 py-5 shadow-[0_0_120px_rgba(216,195,138,0.10)]">
            <img
              src="/royal3.svg"
              alt="Royal Service Hub"
              className="h-auto w-full max-w-[720px]"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-[#d8c38a]/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
            Proposta di sviluppo e digitalizzazione
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Ecosistema digitale
            <span className="mt-2 block bg-gradient-to-r from-[#f2f2ee] via-[#d8c38a] to-[#8f7337] bg-clip-text text-transparent">
              per la gestione operativa NCC
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/68">
            L’obiettivo del progetto è trasformare Royal Service Hub in una
            struttura operativa digitale moderna, centralizzando gestione
            driver, comunicazione, servizi, tracking GPS e strumenti interni
            all’interno di un unico ecosistema scalabile.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            [
              "Comunicazione",
              "Email aziendali, WhatsApp Business, QR contact system e presenza online professionale.",
            ],
            [
              "Operatività",
              "Dashboard interna per gestione driver, servizi, clienti e partner.",
            ],
            [
              "Scalabilità",
              "Base tecnologica predisposta per AI, automazioni e futura app clienti.",
            ],
          ].map(([title, desc]) => (
            <Card key={title} className="p-6">
              <div className="text-2xl font-black tracking-tight text-[#e7e4dc]">
                {title}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/62">
                {desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Overview
          </div>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
            Una piattaforma completa, non solo un sito web.
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Presenza online professionale",
              "Infrastruttura comunicativa aziendale",
              "Sistema gestionale interno",
              "Web app operativa per driver",
              "Tracking GPS realtime",
              "Base per automazioni future",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#d8c38a]/12 bg-white/[0.035] px-4 py-4 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#d8c38a]">
                Fase 1
              </div>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
                Presenza online e comunicazione operativa
              </h2>

              <p className="mt-4 text-white/62 leading-relaxed">
                Prima fase orientata alla costruzione dell’identità digitale e
                della struttura comunicativa aziendale.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {phaseOne.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d8c38a]/12 bg-black/25 px-4 py-3 text-sm text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <PriceBox label="Prezzo standard" price="€ 1.500" />

              <PriceBox
                label="Prezzo riservato"
                price="€ 1.000"
                highlight
              />

              <div className="rounded-[24px] border border-[#d8c38a]/20 bg-[#d8c38a]/10 p-5 text-sm leading-relaxed text-white/70">
                Obiettivo: rendere Royal Service Hub immediatamente
                professionale, organizzata e facilmente raggiungibile online.
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#d8c38a]">
                Fase 2
              </div>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
                Sistema gestionale interno MVP
              </h2>

              <p className="mt-4 text-white/62 leading-relaxed">
                Sviluppo del sistema operativo interno per la gestione
                dell’attività NCC: driver, veicoli, servizi, tracking, clienti,
                partner e contabilità operativa.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {phaseTwo.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d8c38a]/12 bg-black/25 px-4 py-3 text-sm text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <PriceBox label="Prezzo standard" price="€ 9.000" />

              <PriceBox
                label="Prezzo riservato"
                price="€ 6.500"
                highlight
              />

              <div className="rounded-[24px] border border-[#d8c38a]/20 bg-[#d8c38a]/10 p-5 text-sm leading-relaxed text-white/70">
                Obiettivo: centralizzare tutta l’operatività aziendale in un
                unico sistema moderno, riducendo errori, tempi di gestione e
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
            <PriceBox label="Totale standard" price="€ 11.500" />

            <PriceBox
              label="Totale riservato"
              price="€ 7.500"
              highlight
            />
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Manutenzione e supporto
          </div>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
            Supporto tecnico continuativo.
          </h2>

          <p className="mt-5 max-w-4xl text-white/68 leading-relaxed">
            Per garantire stabilità, aggiornamenti e continuità operativa del
            sistema sarà previsto un servizio di manutenzione tecnica
            continuativa.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-2xl border border-[#d8c38a]/12 bg-white/[0.035] px-4 py-4 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PriceBox
              label="Canone manutenzione"
              price="€ 100 / mese"
              highlight
            />
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            Costi infrastruttura
          </div>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
            Servizi cloud e provider esterni
          </h2>

          <p className="mt-4 text-white/65 leading-relaxed">
            I costi infrastrutturali verranno fatturati separatamente dai
            rispettivi provider utilizzati.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {infra.map(([title, price]) => (
              <div
                key={title}
                className="rounded-[24px] border border-[#d8c38a]/12 bg-black/25 p-5"
              >
                <div className="text-white/72">{title}</div>

                <div className="mt-3 text-3xl font-black bg-gradient-to-r from-[#f6e7b1] via-[#d8b76a] to-[#8f7337] bg-clip-text text-transparent">
                  {price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-[#d8c38a]/20 bg-[#d8c38a]/10 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-white/40">
              Totale infrastruttura stimato
            </div>

            <div className="mt-2 text-5xl font-black text-[#e7e4dc]">
              € 100 / mese circa
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.25fr_1fr]">
            <div className="flex items-start justify-center md:justify-start">
              <img
                src="/royal1.svg"
                alt="Royal Service Hub mark"
                className="w-28 opacity-90"
              />
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/35">
                Visione
              </div>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#e7e4dc] md:text-5xl">
                Una piattaforma operativa moderna e scalabile.
              </h2>

              <p className="mt-5 max-w-4xl text-white/68 leading-relaxed">
                La struttura sviluppata sarà predisposta per future evoluzioni,
                integrazioni e automazioni, permettendo a Royal Service Hub di
                costruire nel tempo un ecosistema operativo sempre più avanzato.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Automazioni operative",
                  "AI agent",
                  "Contabilità avanzata",
                  "App clienti",
                  "Notifiche push",
                  "Integrazioni future",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d8c38a]/12 bg-white/[0.035] px-4 py-4 text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-[#d8c38a]/12 bg-black/25 p-6 md:flex-row md:items-center">
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
              className="rounded-2xl bg-gradient-to-r from-[#f4df9b] via-[#d2aa53] to-[#8f7337] px-6 py-4 font-bold text-black shadow-[0_0_40px_rgba(216,183,106,0.20)] hover:brightness-110"
            >
              Contatta al33xf
            </a>
          </div>
        </Card>
      </section>
    </main>
  );
}