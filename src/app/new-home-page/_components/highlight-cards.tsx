//File :- src/app/new-home-page/_components/highlight-cards.tsx
import { Home, GraduationCap, ArrowUpRight, LucideIcon } from "lucide-react";

type Highlight = {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
  glow: string;
  href: string;
};

const highlights: Highlight[] = [
  {
    Icon: Home,
    title: "Residential & Day Scholar",
    body: "Air-conditioned campus and hostel with separate wings for boys and girls. Nutritious, balanced meals and round-the-clock supervision in a home that feels like home.",
    accent: "var(--palette-magenta)",
    glow: "rgba(215,53,114,0.18)",
    href: "#residential",
  },
  {
    Icon: GraduationCap,
    title: "Integrated CBSE Curriculum",
    body: "A rigorous CBSE curriculum woven with Montessori principles — exam-ready academics that retain the joy of discovery, with a clear path into competitive exams.",
    accent: "var(--palette-teal)",
    glow: "rgba(32,184,184,0.18)",
    href: "#curriculum",
  },
];

export default function HighlightCards() {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8"
      style={{ background: "var(--palette-surface)" }}
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px circle at 20% 0%, rgba(215,53,114,0.06), transparent 50%), radial-gradient(800px circle at 80% 100%, rgba(32,184,184,0.06), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] grid gap-6 md:gap-8 md:grid-cols-2">
        {highlights.map(({ Icon, title, body, accent, glow, href }) => (
          <a
            key={title}
            href={href}
            className="group relative overflow-hidden rounded-3xl border bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
            style={{
              borderColor: "var(--palette-line)",
              boxShadow: `0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -24px ${glow}`,
            }}
          >
            {/* Top accent bar */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ background: accent }}
            />

            {/* Ambient blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: glow }}
            />

            <div className="relative flex flex-col h-full">
              {/* Icon chip */}
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-7 transition-transform duration-500 group-hover:-rotate-6"
                style={{
                  background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                  color: accent,
                }}
              >
                <Icon size={26} strokeWidth={1.8} />
              </span>

              {/* Title */}
              <h3
                className="text-[24px] md:text-[28px] font-semibold leading-tight tracking-tight"
                style={{ color: "var(--palette-ink)" }}
              >
                {title}
              </h3>

              {/* Body */}
              <p
                className="mt-4 text-[15px] md:text-[16px] leading-[1.65]"
                style={{ color: "var(--palette-muted)" }}
              >
                {body}
              </p>

              {/* Footer link */}
              <div className="mt-8 flex items-center gap-2 text-[14px] font-semibold">
                <span style={{ color: accent }}>Explore</span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ background: accent, color: "white" }}
                >
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
