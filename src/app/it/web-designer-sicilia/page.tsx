import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
  description:
    "Cerchi un web designer in Sicilia? Realizzo siti web professionali, landing page, applicazioni web, automazioni AI e soluzioni Web3 con design premium e sviluppo pulito.",
  alternates: {
    canonical: "https://al33xf.xyz/it/web-designer-sicilia",
    languages: { en: "https://al33xf.xyz", it: "https://al33xf.xyz/it/web-designer-sicilia", "x-default": "https://al33xf.xyz" },
  },
  openGraph: {
    title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
    description: "Siti web professionali, landing page, app web, automazioni AI e sviluppo su misura in Sicilia.",
    url: "https://al33xf.xyz/it/web-designer-sicilia",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Designer in Sicilia | Siti Web Professionali e Sviluppo su Misura",
    description: "Siti web professionali, landing page, app web, automazioni AI e sviluppo su misura in Sicilia.",
  },
};

const C = {
  bg:   "#050608",
  bg1:  "#0a0b0f",
  brd:  "rgba(255,255,255,0.07)",
  bMid: "rgba(255,255,255,0.12)",
  t2:   "rgba(255,255,255,0.55)",
  t3:   "rgba(255,255,255,0.28)",
} as const;

const SERVICES = [
  { title: "Siti web professionali", desc: "Siti moderni, veloci, responsive e costruiti con una struttura chiara e credibile." },
  { title: "Landing page", desc: "Pagine focalizzate sulla conversione, progettate per richieste contatto, lead o vendite." },
  { title: "Applicazioni web", desc: "Dashboard, pannelli operativi, aree riservate e strumenti digitali su misura." },
  { title: "Automazioni AI", desc: "Workflow automatici, bot, reminder e integrazioni per migliorare operatività e tempo." },
  { title: "Soluzioni Web3", desc: "Smart contract, token, dApp, interfacce wallet e componenti blockchain-oriented." },
  { title: "SEO tecnica e struttura", desc: "Metadata, sitemap, robots, performance, struttura contenuti e pagine orientate al posizionamento." },
] as const;

const REASONS = [
  { n: "01", title: "Design premium.", desc: "Interfacce pulite, moderne e credibili, pensate per comunicare qualità e fiducia." },
  { n: "02", title: "Sviluppo concreto.", desc: "Posso seguire frontend, backend, deploy, automazioni e ottimizzazione tecnica." },
  { n: "03", title: "Orientato alla delivery.", desc: "Analisi, sviluppo, pubblicazione e miglioramento continuo con aspettative chiare." },
] as const;

const FAQ = [
  { q: "Realizzi siti web solo in Sicilia?", a: "No. Posso lavorare da remoto ovunque, ma questa pagina è pensata per chi cerca un web designer in Sicilia e vuole un riferimento locale chiaro." },
  { q: "Puoi sviluppare anche applicazioni web?", a: "Sì. Oltre ai siti web posso realizzare dashboard, strumenti operativi, aree riservate e applicazioni su misura." },
  { q: "Ti occupi anche di SEO?", a: "Sì. Posso impostare struttura tecnica, metadata, sitemap, robots, performance e pagine progettate per posizionarsi meglio." },
  { q: "Puoi seguire anche la messa online?", a: "Sì. Posso occuparmi di deploy, dominio, hosting, configurazioni e ottimizzazione finale del progetto." },
] as const;

const PROJECTS = [
  { title: "Il Polimedico", url: "https://ilpolimedico.com", image: "/projects/ilpolimedico.webp", category: "Benessere / Distribuzione", desc: "Un sito strutturato per il benessere naturale, con focus su selezione prodotti, supporto rivenditori e percorso commerciale chiaro." },
  { title: "Elisa Nicotra", url: "https://elisanicotra.com", image: "/projects/elisa-nicotra.webp", category: "Medicale / Personal Brand", desc: "Un sito medico orientato alla fiducia, costruito per valorizzare trattamenti, autorevolezza e conversione paziente." },
  { title: "Sosteniamo Musica", url: "https://sosteniamomusica.com", image: "/projects/sosteniamo-musica.webp", category: "Editoriale / Media", desc: "Una piattaforma editoriale dedicata alla musica, costruita per news, interviste, sondaggi e community." },
  { title: "Pro Service", url: "https://proservice33.netlify.app/", image: "/projects/pro-service.webp", category: "Business locale / Bilingue", desc: "Un sito bilingue per pulizia, giardinaggio e pest control, progettato per chiarezza e lead generation." },
  { title: "Victoria Paci", url: "https://victoriapaci.com", image: "/projects/victoria-paci.webp", category: "Healthcare / Specialista", desc: "Un sito professionale per fisioterapia del pavimento pelvico, competenza e conversione locale." },
] as const;

export default function WebDesignerSiciliaPage() {
  return (
    <main style={{ background: C.bg, color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden", WebkitFontSmoothing: "antialiased" }}>

      <style>{`
        @media (max-width: 680px) {
          .nav-links-seo { display: none !important; }
          .services-grid-seo { grid-template-columns: 1fr !important; }
          .reasons-grid-seo { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .services-grid-seo { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 60, padding: "0 16px",
        display: "flex", alignItems: "center",
        background: "rgba(5,6,8,0.88)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.brd}`,
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 8 }}>
          <a href="/it" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 28, height: 28, borderRadius: 7, objectFit: "cover", border: `1px solid ${C.brd}` }} />
            <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.4px", color: "#fff", whiteSpace: "nowrap" }}>
              al<span style={{ color: "#f97316" }}>33</span>xf
            </span>
          </a>

          <div className="nav-links-seo" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
            {[["Home", "/it"], ["Servizi", "#servizi"], ["Progetti", "#progetti"], ["FAQ", "#faq"], ["Contatti", "#contatti"]].map(([l, h]) => (
              <a key={h} href={h} style={{ fontSize: 13, color: C.t2, textDecoration: "none", padding: "5px 10px", borderRadius: 7, whiteSpace: "nowrap" }}>{l}</a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto", flexShrink: 0 }}>
            <a href="/" style={{ fontSize: 11, color: C.t3, textDecoration: "none", padding: "4px 8px", borderRadius: 5, border: `1px solid ${C.brd}`, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>EN</a>
            <a href="#contatti" style={{ padding: "7px 14px", borderRadius: 8, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 12.5, textDecoration: "none", whiteSpace: "nowrap" }}>
              Lavora con me
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", padding: "110px 16px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "min(800px,130vw)", height: 420, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "min(360px,55vw)", height: "min(360px,55vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "60px 60px", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)" }} />

        <div style={{ position: "relative", maxWidth: 1140, margin: "0 auto", width: "100%", textAlign: "center" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.brd}`, marginBottom: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.05em" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
            Sicilia · Siti Web · App · Soluzioni digitali
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 60, height: 60, borderRadius: 15, objectFit: "cover", border: `1px solid ${C.brd}`, filter: "drop-shadow(0 0 20px rgba(59,130,246,0.28))" }} />
          </div>

          <h1 style={{ fontWeight: 900, fontSize: "clamp(32px, 5.5vw, 74px)", lineHeight: 1.02, letterSpacing: "-1.5px", marginBottom: 20, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Web Designer in Sicilia<br />
            <span style={{ background: "linear-gradient(100deg, #60a5fa 0%, #818cf8 40%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              siti web e sviluppo su misura.
            </span>
          </h1>

          <p style={{ fontSize: "clamp(14px, 2.2vw, 17px)", color: C.t2, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Realizzo siti web professionali, landing page, applicazioni web, automazioni AI e soluzioni Web3 per attività, professionisti e brand che vogliono una presenza online credibile e costruita per convertire.
          </p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#contatti" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 13.5, textDecoration: "none" }}>
              Richiedi un progetto →
            </a>
            <a href="#progetti" style={{ display: "inline-flex", alignItems: "center", padding: "11px 22px", borderRadius: 10, border: `1px solid ${C.bMid}`, color: C.t2, fontWeight: 500, fontSize: 13.5, textDecoration: "none" }}>
              Guarda i lavori
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,5vw,48px)", flexWrap: "wrap", paddingTop: 32, borderTop: `1px solid ${C.brd}` }}>
            {[{ v: "Sicilia", l: "Basato a" }, { v: "Remote", l: "Lavoro anche" }, { v: "Full-stack", l: "Sviluppo" }, { v: "SEO", l: "Ottimizzato" }].map((s) => (
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
      <section id="servizi" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Servizi</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.05 }}>Cosa posso realizzare.<br />Per te.</h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 440, margin: "10px auto 0" }}>Non solo siti vetrina: design, sviluppo, messa online e ottimizzazione finale.</p>
          </div>

          <div className="services-grid-seo" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 10 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{ padding: "20px 22px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px" }}>{s.title}</div>
                <p style={{ fontSize: 12.5, color: C.t3, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── PROJECTS ── */}
      <section id="progetti" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Progetti realizzati</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.05 }}>Siti web già consegnati.</h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10 }}>Progetti reali tra healthcare, benessere, editoriale e business locali.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 10 }}>
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noreferrer"
                style={{ textDecoration: "none", display: "block", border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden", background: C.bg1 }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "60%", overflow: "hidden" }}>
                  <img src={p.image} alt={p.title} loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                  <div style={{ position: "absolute", top: 10, left: 10 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 20, background: "rgba(0,0,0,0.65)", border: `1px solid ${C.brd}`, fontSize: 10, color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)", fontFamily: "'JetBrains Mono', monospace" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#f97316" }} />
                      {p.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px" }}>{p.title}</div>
                      <div style={{ fontSize: 11, color: C.t3, fontFamily: "'JetBrains Mono', monospace", marginTop: 3 }}>{p.url.replace(/^https?:\/\//, "")}</div>
                    </div>
                    <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 7, border: `1px solid ${C.brd}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: C.t2 }}>↗</div>
                  </div>
                  <p style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.6, margin: "0 0 10px" }}>{p.desc}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#f97316" }}>Visita il sito →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── WHY ME ── */}
      <section style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Approccio</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.05 }}>Perché lavorare con me.</h2>
            <p style={{ color: C.t2, fontSize: 14, marginTop: 10, maxWidth: 400, margin: "10px auto 0" }}>Non solo un'interfaccia — un progetto solido, pubblicabile e utile al business.</p>
          </div>

          <div className="reasons-grid-seo" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 2, background: C.brd, border: `1px solid ${C.brd}`, borderRadius: 14, overflow: "hidden" }}>
            {REASONS.map((r) => (
              <div key={r.n} style={{ background: C.bg1, padding: "26px 22px" }}>
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: -2, color: "rgba(255,255,255,0.05)", marginBottom: 12, lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>{r.n}</div>
                <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px", marginBottom: 8 }}>{r.title}</div>
                <p style={{ fontSize: 12.5, color: C.t2, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "72px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>FAQ</p>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-1px", lineHeight: 1.05 }}>Domande frequenti.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: 10 }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ padding: "22px 24px", border: `1px solid ${C.brd}`, borderRadius: 14, background: C.bg1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px", marginBottom: 8 }}>{f.q}</div>
                <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: `1px solid ${C.brd}`, margin: 0 }} />

      {/* ── CONTACT ── */}
      <section id="contatti" style={{ padding: "72px 16px 96px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "clamp(32px, 6vw, 56px) clamp(16px, 5vw, 48px)", border: `1px solid ${C.brd}`, borderRadius: 18, background: C.bg1, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -70, left: "50%", transform: "translateX(-50%)", width: 460, height: 280, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.t3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12, position: "relative" }}>Contatti</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(20px, 4vw, 40px)", letterSpacing: "-1px", marginBottom: 12, position: "relative", lineHeight: 1.1, overflowWrap: "break-word" }}>
            Hai un progetto in mente?
          </h2>
          <p style={{ fontSize: 14, color: C.t2, maxWidth: 380, margin: "0 auto 28px", lineHeight: 1.65, position: "relative" }}>
            Se cerchi un web designer in Sicilia per un sito web, una landing page o un'applicazione su misura, scrivimi e troviamo il percorso più adatto.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <a href="mailto:al33xf@gmail.com" style={{ padding: "11px 20px", borderRadius: 9, background: "#fff", color: C.bg, fontWeight: 700, fontSize: 13.5, textDecoration: "none" }}>
              Scrivimi via email →
            </a>
            <a href="https://t.me/al33xf" target="_blank" rel="noreferrer" style={{ padding: "11px 20px", borderRadius: 9, border: `1px solid ${C.bMid}`, color: C.t2, fontWeight: 500, fontSize: 13.5, textDecoration: "none" }}>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${C.brd}`, padding: "20px 16px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/assets/al33xf.webp" alt="al33xf" style={{ width: 20, height: 20, borderRadius: 5, objectFit: "cover" }} />
            <span style={{ fontWeight: 700, fontSize: 13, color: C.t2 }}>al<span style={{ color: "#f97316" }}>33</span>xf</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {[["Home", "/it"], ["Servizi", "#servizi"], ["Progetti", "#progetti"], ["FAQ", "#faq"], ["Contatti", "#contatti"]].map(([l, h]) => (
              <a key={h} href={h} style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <a href="https://hash42.xyz/it" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: C.t3, textDecoration: "none" }}>
            Powered by Hash42 Labs
          </a>
        </div>
      </footer>

    </main>
  );
}