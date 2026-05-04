//File :- src/app/new-home-page/_components/announcement-marquee.tsx
import {
  CalendarCheck,
  Sparkles,
  PlayCircle,
  GraduationCap,
} from "lucide-react";

const announcements = [
  {
    Icon: CalendarCheck,
    text: "Happy Republic Day",
    accent: "var(--palette-teal)",
  },
  {
    Icon: Sparkles,
    text: "TARANG: Chapter 1 — LIVE on Dec 6, 4 PM",
    accent: "var(--palette-sun)",
    pulse: true,
  },
  {
    Icon: PlayCircle,
    text: "Watch Now",
    accent: "var(--palette-coral)",
    href: "#watch",
  },
  {
    Icon: GraduationCap,
    text: "Admissions Now Open for 2026–2027 · Montessori Prime School",
    accent: "var(--palette-magenta)",
  },
];

export default function AnnouncementMarquee() {
  return (
    <section
      aria-label="Announcements"
      className="relative w-full overflow-hidden border-y"
      style={{
        background:
          "linear-gradient(90deg, #0d1117 0%, #111827 50%, #0d1117 100%)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <style>{`
        @keyframes announce-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .announce-track { animation: announce-scroll 38s linear infinite; }
        .announce-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .announce-track { animation: none; }
        }
        @keyframes announce-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.85); }
        }
      `}</style>

      {/* Top hairline gradient */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--palette-magenta), var(--palette-sun), var(--palette-teal), transparent)",
        }}
      />

      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #0d1117, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #0d1117, transparent)" }}
      />

      <div className="announce-track flex w-max items-center gap-10 py-3 px-6 whitespace-nowrap">
        {[...announcements, ...announcements].map((a, i) => {
          const Inner = (
            <span className="inline-flex items-center gap-2.5 text-[13px] md:text-[14px] font-medium text-white/85 hover:text-white transition-colors">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{
                  background: `color-mix(in oklab, ${a.accent} 22%, transparent)`,
                  color: a.accent,
                }}
              >
                {a.pulse && (
                  <span
                    aria-hidden
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      background: a.accent,
                      animation: "announce-pulse 1.6s ease-in-out infinite",
                    }}
                  />
                )}
                <a.Icon size={14} strokeWidth={2.2} />
              </span>
              {a.text}
              <span
                aria-hidden
                className="ml-6 inline-block h-1 w-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.25)" }}
              />
            </span>
          );

          return a.href ? (
            <a key={i} href={a.href} className="relative">
              {Inner}
            </a>
          ) : (
            <span key={i} className="relative">
              {Inner}
            </span>
          );
        })}
      </div>
    </section>
  );
}
