import type { Metadata } from "next";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
  description:
    "Cerchi un web designer in Sicilia? Realizzo siti web professionali, landing page, applicazioni web, automazioni AI e soluzioni Web3 con design premium e sviluppo pulito.",
  alternates: {
    canonical: "/it/web-designer-sicilia",
    languages: {
      en: "/",
      it: "/it/web-designer-sicilia",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
    description:
      "Siti web professionali, landing page, app web, automazioni AI e sviluppo su misura in Sicilia.",
    url: "https://al33xf.xyz/it/web-designer-sicilia",
    locale: "it_IT",
  },
  twitter: {
    title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
    description:
      "Siti web professionali, landing page, app web, automazioni AI e sviluppo su misura in Sicilia.",
  },
};

export default function WebDesignerSiciliaPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,108,255,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.12),transparent_55%)]" />
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
            <a href="/it" className="hover:text-white">
              Home
            </a>
            <a href="#servizi" className="hover:text-white">
              Servizi
            </a>
            <a href="#progetti" className="hover:text-white">
              Progetti
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contatti" className="hover:text-white">
              Contatti
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm"
            >
              EN
            </a>
            <a
              href="/it#contacts"
              className="px-4 py-2 rounded-xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-sm shadow-[0_0_40px_rgba(255,106,0,0.18)]"
            >
              Lavora con me
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
            Sicilia • Siti Web • App • Soluzioni digitali
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Web Designer in Sicilia
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f8fff] via-white to-[#ff8a2e]">
              per siti web professionali e sviluppo su misura
            </span>
          </h1>

          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-3xl">
            Realizzo siti web professionali, landing page, applicazioni web,
            automazioni AI e soluzioni Web3 per attività, professionisti e brand
            che vogliono una presenza online credibile, veloce e costruita per
            convertire.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contatti"
              className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-center shadow-[0_0_40px_rgba(255,106,0,0.18)]"
            >
              Richiedi un progetto
            </a>
            <a
              href="#progetti"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-center"
            >
              Guarda i lavori realizzati
            </a>
            <a
              href="/it"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 text-white font-semibold text-center"
            >
              Vai alla home italiana
            </a>
          </div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">Servizi</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Cosa posso realizzare per te
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Non solo siti vetrina: posso seguire design, sviluppo, struttura,
              messa online e ottimizzazione finale, con un approccio orientato
              alla delivery.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "Siti web professionali",
                "Siti moderni, veloci, responsive e costruiti con una struttura chiara e credibile.",
              ],
              [
                "Landing page",
                "Pagine focalizzate sulla conversione, progettate per richieste contatto, lead o vendite.",
              ],
              [
                "Applicazioni web",
                "Dashboard, pannelli operativi, aree riservate e strumenti digitali su misura.",
              ],
              [
                "Automazioni AI",
                "Workflow automatici, bot, reminder e integrazioni per migliorare operatività e tempo.",
              ],
              [
                "Soluzioni Web3",
                "Smart contract, token, dApp, interfacce wallet e componenti blockchain-oriented.",
              ],
              [
                "SEO tecnica e struttura",
                "Metadata, sitemap, robots, performance, struttura contenuti e pagine orientate al posizionamento.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="progetti">
        <ProjectsShowcase locale="it" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">Approccio</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Perché lavorare con me
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Il mio obiettivo non è consegnare solo una bella interfaccia, ma
              un progetto solido, pubblicabile e realmente utile al business.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              [
                "Design premium",
                "Interfacce pulite, moderne e credibili, pensate per comunicare qualità e fiducia.",
              ],
              [
                "Sviluppo concreto",
                "Posso seguire frontend, backend, deploy, automazioni e ottimizzazione tecnica.",
              ],
              [
                "Mentalità orientata alla delivery",
                "Analisi, sviluppo, pubblicazione e miglioramento continuo con aspettative chiare.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">FAQ</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Domande frequenti
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {[
              [
                "Realizzi siti web solo in Sicilia?",
                "No. Posso lavorare da remoto ovunque, ma questa pagina è pensata per chi cerca un web designer in Sicilia e vuole un riferimento locale chiaro.",
              ],
              [
                "Puoi sviluppare anche applicazioni web?",
                "Sì. Oltre ai siti web posso realizzare dashboard, strumenti operativi, aree riservate e applicazioni su misura.",
              ],
              [
                "Ti occupi anche di SEO?",
                "Sì. Posso impostare struttura tecnica, metadata, sitemap, robots, performance e pagine progettate per posizionarsi meglio.",
              ],
              [
                "Puoi seguire anche la messa online?",
                "Sì. Posso occuparmi di deploy, dominio, hosting, configurazioni e ottimizzazione finale del progetto.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <h3 className="font-semibold">{q}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#2e6cff]/15 via-white/5 to-[#ff6a00]/10 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-white/60">Contatti</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              Hai un progetto in mente?
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Se cerchi un web designer in Sicilia per realizzare un sito web,
              una landing page o un’applicazione su misura, scrivimi e vediamo
              insieme il percorso più adatto.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:al33xf@gmail.com"
              className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff8a2e] text-black font-semibold text-center shadow-[0_0_40px_rgba(255,106,0,0.18)]"
            >
              Scrivimi via email
            </a>
            <a
              href="https://t.me/al33xf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-center"
            >
              Contattami su Telegram
            </a>
            <a
              href="/it"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5 text-white font-semibold text-center"
            >
              Torna alla home italiana
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}