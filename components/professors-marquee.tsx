"use client";
//File :- components/professors-marquee.tsx
import { useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Professor = {
  course: string;
  name: string;
  position: string;
  overview: string;
  affiliations: string[];
  image: string;
  tint: string;
};

const professors: Professor[] = [
  {
    course: "Practical Life",
    name: "Lakshmi Iyer",
    position: "AMI Trained Guide, 18 years of classroom experience",
    overview:
      "Designs the prepared environment where children build coordination, concentration, and independence through real, purposeful work.",
    affiliations: ["AMI", "NCERT"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Lakshmi&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(215, 53, 114, 0.12)",
  },
  {
    course: "Sensorial Education",
    name: "Priya Sharma",
    position: "Lead Guide, Pre-Primary Wing — Cambridge Montessori certified",
    overview:
      "Refines the senses with the Pink Tower, colour tablets, and sound cylinders, preparing young minds for abstract thought.",
    affiliations: ["AMI", "Cambridge"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Priya&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(32, 184, 184, 0.14)",
  },
  {
    course: "Language & Phonics",
    name: "Anjali Menon",
    position: "Specialist in early literacy, M.Ed (Linguistics), Mumbai University",
    overview:
      "Guides children from sandpaper letters to fluent reading using the moveable alphabet — confident readers by age six.",
    affiliations: ["NCERT", "MU"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Anjali&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(223, 51, 80, 0.12)",
  },
  {
    course: "Mathematics",
    name: "Ravi Krishnan",
    position: "Senior Guide, Primary Wing — AMI Elementary diploma",
    overview:
      "Takes children from concrete quantity to abstract arithmetic with golden beads, number rods, and the stamp game.",
    affiliations: ["AMI", "ISB"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Ravi&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(255, 179, 0, 0.14)",
  },
  {
    course: "Cultural Studies",
    name: "Meera Patel",
    position: "Geography & Cosmic Education specialist, Sri Aurobindo Society",
    overview:
      "Opens up the wider world — geography, botany, history — using the Great Lessons and hands-on cosmic education materials.",
    affiliations: ["Aurobindo", "AMI"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Meera&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(32, 184, 184, 0.14)",
  },
  {
    course: "Music & Movement",
    name: "Arun Nair",
    position: "Orff-Schulwerk certified, performing arts mentor for 12 years",
    overview:
      "Brings rhythm, song, and embodied movement into daily work cycles — music as a language children speak fluently.",
    affiliations: ["Orff", "NCERT"],
    image:
      "https://api.dicebear.com/9.x/personas/svg?seed=Arun&backgroundType=solid&backgroundColor=transparent",
    tint: "rgba(215, 53, 114, 0.12)",
  },
];

export default function ProfessorsMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 460;
    el.scrollBy({ left: (cardWidth + 20) * dir, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 460;
    setActivePage(Math.round(el.scrollLeft / (cardWidth + 20)));
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8" style={{ background: "#0a1f1c" }}>
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
        {/* LEFT — sticky title */}
        <div className="lg:sticky lg:top-8 self-start">
          <h2 className="text-[36px] md:text-[44px] font-bold leading-[1.05] text-white">
            Marquee{" "}
            <span style={{ color: "var(--palette-sun)" }}>Educators</span>
          </h2>
          <p className="mt-4 text-[15px] text-white/70 leading-relaxed max-w-[280px]">
            Take a peek into our most-loved environments led by trained,
            certified Montessori guides.
          </p>
          <a
            href="#educators"
            className="mt-6 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: "#dff58a", color: "#0d2622" }}
          >
            EXPLORE MORE
            <ArrowRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* RIGHT — horizontal scroller */}
        <div className="relative min-w-0">
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            style={{ scrollPadding: "0 20px" }}
          >
            {professors.map((p) => (
              <article
                key={p.name}
                data-card
                className="snap-start flex-shrink-0 w-[88vw] sm:w-[460px] rounded-3xl border border-white/10 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.tint}, rgba(15,45,40,0.6))`,
                }}
              >
                <div className="relative grid grid-cols-[1fr_140px] gap-4 p-7 min-h-[340px]">
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-semibold text-white leading-tight">
                      {p.course}
                    </h3>
                    <div className="mt-1 text-[14px] text-white/75">
                      by{" "}
                      <span className="text-white font-medium">{p.name}</span>
                    </div>
                    <div className="mt-3 h-px w-full bg-white/15" />
                    <p className="mt-3 text-[12px] text-white/65 leading-relaxed">
                      {p.position}
                    </p>

                    <div
                      className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: "var(--palette-sun)" }}
                    >
                      Overview
                    </div>
                    <p className="mt-1.5 text-[13px] text-white/85 leading-snug">
                      {p.overview}
                    </p>

                    {/* Affiliations */}
                    <div className="mt-auto pt-5 flex items-center gap-2">
                      {p.affiliations.map((a) => (
                        <span
                          key={a}
                          className="rounded-md bg-white/10 border border-white/15 px-2.5 py-1 text-[10px] font-bold text-white/90"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Portrait */}
                  <div className="relative flex items-end justify-center">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="w-[120px] h-[120px] rounded-full opacity-30 blur-2xl"
                        style={{ background: "var(--palette-sun)" }}
                      />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="relative w-full max-w-[140px] object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Pagination dots */}
            <div className="flex items-center gap-1.5">
              {professors.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === activePage ? 20 : 6,
                    background:
                      i === activePage ? "var(--palette-sun)" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
                style={{ background: "#dff58a", color: "#0d2622" }}
              >
                <ArrowLeft size={18} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
                style={{ background: "#dff58a", color: "#0d2622" }}
              >
                <ArrowRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
