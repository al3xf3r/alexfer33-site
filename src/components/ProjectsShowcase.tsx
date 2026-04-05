"use client";

import { useRef } from "react";

type Project = {
  title: string;
  url: string;
  image: string;
  category: string;
  description: string;
  accent: string;
};

const PROJECTS = {
  en: [
    {
      title: "Il Polimedico",
      url: "https://ilpolimedico.com",
      image: "/projects/ilpolimedico.webp",
      category: "Wellness / Distribution",
      description:
        "A structured wellness website built around product selection, reseller support and a clear commercial journey.",
      accent: "from-[#2e6cff]/30 to-cyan-400/10",
    },
    {
      title: "Elisa Nicotra",
      url: "https://elisanicotra.vercel.app",
      image: "/projects/elisa-nicotra.webp",
      category: "Medical / Personal Brand",
      description:
        "A trust-first medical website designed to present treatments, authority, reviews and patient conversion clearly.",
      accent: "from-fuchsia-500/20 to-[#ff6a00]/10",
    },
    {
      title: "Sosteniamo Musica",
      url: "https://sosteniamomusica.com",
      image: "/projects/sosteniamo-musica.webp",
      category: "Editorial / Media",
      description:
        "A music-focused editorial platform built around news, interviews, polls and community-oriented content.",
      accent: "from-violet-500/20 to-indigo-400/10",
    },
    {
      title: "Pro Service",
      url: "https://proservice33.netlify.app/",
      image: "/projects/pro-service.webp",
      category: "Local Business / Bilingual",
      description:
        "A bilingual lead-generation website for cleaning, gardening and pest control, built for clarity and trust.",
      accent: "from-emerald-500/20 to-lime-400/10",
    },
    {
      title: "Victoria Paci",
      url: "https://victoriapaci.com",
      image: "/projects/victoria-paci.webp",
      category: "Healthcare / Specialist",
      description:
        "A professional healthcare website focused on pelvic physiotherapy, credibility, privacy and local conversion.",
      accent: "from-sky-500/20 to-white/5",
    },
  ],
  it: [
    {
      title: "Il Polimedico",
      url: "https://ilpolimedico.com",
      image: "/projects/ilpolimedico.webp",
      category: "Benessere / Distribuzione",
      description:
        "Un sito strutturato per il benessere naturale, con focus su selezione prodotti, supporto ai rivenditori e percorso commerciale chiaro.",
      accent: "from-[#2e6cff]/30 to-cyan-400/10",
    },
    {
      title: "Pro Service",
      url: "https://proservice33.netlify.app/",
      image: "/projects/pro-service.webp",
      category: "Business locale / Bilingue",
      description:
        "Un sito bilingue per servizi di pulizia, giardinaggio e pest control, progettato per chiarezza, credibilità e lead generation.",
      accent: "from-emerald-500/20 to-lime-400/10",
    },
    {
      title: "Elisa Nicotra",
      url: "https://elisanicotra.vercel.app",
      image: "/projects/elisa-nicotra.webp",
      category: "Medicale / Personal Brand",
      description:
        "Un sito medico orientato alla fiducia, costruito per valorizzare trattamenti, autorevolezza, recensioni e conversione paziente.",
      accent: "from-fuchsia-500/20 to-[#ff6a00]/10",
    },
    {
      title: "Sosteniamo Musica",
      url: "https://sosteniamomusica.com",
      image: "/projects/sosteniamo-musica.webp",
      category: "Editoriale / Media",
      description:
        "Una piattaforma editoriale dedicata alla musica, costruita intorno a news, interviste, sondaggi e contenuti per la community.",
      accent: "from-violet-500/20 to-indigo-400/10",
    },
    
    {
      title: "Victoria Paci",
      url: "https://victoriapaci.com",
      image: "/projects/victoria-paci.webp",
      category: "Healthcare / Specialista",
      description:
        "Un sito professionale per fisioterapia del pavimento pelvico, pensato per trasmettere competenza, privacy e conversione locale.",
      accent: "from-sky-500/20 to-white/5",
    },
  ],
} as const;

export default function ProjectsShowcase({
  locale = "en",
}: {
  locale?: "en" | "it";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const projects = PROJECTS[locale];

  const copy = {
    en: {
      eyebrow: "Selected Work",
      title: "Websites I already built",
      subtitle:
        "Real projects already shipped across wellness, healthcare, editorial and local business.",
      visit: "Visit website",
      drag: "Scroll horizontally",
      left: "Scroll left",
      right: "Scroll right",
    },
    it: {
      eyebrow: "Progetti realizzati",
      title: "Siti web che ho già realizzato",
      subtitle:
        "Progetti reali già pubblicati tra wellness, healthcare, editoriale e business locali.",
      visit: "Visita il sito",
      drag: "Scorri orizzontalmente",
      left: "Scorri a sinistra",
      right: "Scorri a destra",
    },
  }[locale];

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-project-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 420;

    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pb-12">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm text-white/60">{copy.eyebrow}</div>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
              {copy.title}
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              {copy.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block text-xs text-white/40 mr-2">
              {copy.drag}
            </div>

            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label={copy.left}
              className="h-11 w-11 rounded-xl border border-white/10 bg-black/30 hover:bg-white/10 transition text-white"
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label={copy.right}
              className="h-11 w-11 rounded-xl border border-white/10 bg-black/30 hover:bg-white/10 transition text-white"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              data-project-card
              className="group min-w-[88%] sm:min-w-[430px] lg:min-w-[470px] snap-start"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[26px] border border-white/10 bg-black/30 overflow-hidden hover:border-white/20 transition"
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff8a2e]" />
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                        {project.title}
                      </h3>
                      <div className="mt-1 truncate text-sm text-white/45">
                        {project.url.replace(/^https?:\/\//, "")}
                      </div>
                    </div>

                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 group-hover:text-white group-hover:bg-white/10 transition">
                      ↗
                    </div>
                  </div>

                  <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8a2e]">
                      {copy.visit}
                      <span aria-hidden="true">→</span>
                    </div>

                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/30">
                      Live
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}