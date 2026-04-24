//File :- components/programs.tsx
import { ArrowUpRight } from "lucide-react";

type Program = {
  ageLabel: string;
  ageRange: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

const programs: Program[] = [
  {
    ageLabel: "Toddler",
    ageRange: "18 months – 3 years",
    title: "First steps into independence",
    description:
      "A gentle, home-like environment where the youngest children pour, button, tidy, and discover — building language and confidence one real task at a time.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accent: "var(--palette-sun)",
  },
  {
    ageLabel: "Primary",
    ageRange: "3 – 6 years",
    title: "The classic Montessori classroom",
    description:
      "Children work with the iconic materials — pink tower, sandpaper letters, golden beads — and absorb reading, writing, and arithmetic at their own pace.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    accent: "var(--palette-magenta)",
  },
  {
    ageLabel: "Elementary",
    ageRange: "6 – 12 years",
    title: "Going out, digging deep",
    description:
      "Children investigate the world through big stories, field work, and collaborative research — the classroom extends from forest walks to museum visits.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    accent: "var(--palette-teal)",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="w-full bg-white text-[var(--palette-ink)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--palette-teal)]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--palette-teal)" }}
              />
              Programs
            </span>
            <h2 className="mt-4 text-[36px] md:text-[52px] font-semibold leading-[1.05] tracking-tight">
              Three prepared environments,{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "ui-serif, Georgia, serif",
                  color: "var(--palette-magenta)",
                }}
              >
                one continuous journey
              </span>
              .
            </h2>
          </div>
          <p className="max-w-md text-[16px] text-[var(--palette-muted)]">
            Each program builds on the last. Children stay with the same guide
            for three years, forming deep relationships and a steady learning
            rhythm.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.ageLabel}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-[var(--palette-surface)] border border-[var(--palette-line)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(29,29,31,0.25)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <span
                  className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: p.accent }}
                >
                  {p.ageLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--palette-muted)]">
                  {p.ageRange}
                </span>
                <h3 className="mt-2 text-[22px] font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--palette-ink)]/75">
                  {p.description}
                </p>
                <a
                  href={`#${p.ageLabel.toLowerCase()}`}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold transition-colors"
                  style={{ color: p.accent }}
                >
                  Explore this program
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
