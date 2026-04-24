//File :- components/awards-stripe.tsx
import {
  Trophy,
  Award,
  Star,
  Medal,
  Shield,
  Sparkles,
  BadgeCheck,
  Crown,
  LucideIcon,
} from "lucide-react";

type AwardItem = {
  Icon: LucideIcon;
  label: string;
  accent: string;
};

const items: AwardItem[] = [
  { Icon: Trophy, label: "Best Montessori School 2024", accent: "var(--palette-sun)" },
  { Icon: BadgeCheck, label: "CBSE Affiliated", accent: "var(--palette-teal)" },
  { Icon: Award, label: "AMI Certified", accent: "var(--palette-magenta)" },
  { Icon: Shield, label: "ISO 9001:2015", accent: "var(--palette-coral)" },
  { Icon: Medal, label: "Cambridge Assessment Partner", accent: "var(--palette-sun)" },
  { Icon: Star, label: "Parents' Choice Award 2023", accent: "var(--palette-magenta)" },
  { Icon: Sparkles, label: "Green School Alliance", accent: "var(--palette-teal)" },
  { Icon: Crown, label: "Academic Excellence · 22 Years", accent: "var(--palette-coral)" },
];

export default function AwardsStripe() {
  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-16"
      style={{ background: "var(--palette-surface)" }}
    >
      <style>{`
        @keyframes awards-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .awards-track { animation: awards-scroll 45s linear infinite; }
        .awards-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .awards-track { animation: none; }
        }
      `}</style>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-28 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--palette-surface), transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-28 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--palette-surface), transparent)",
          }}
        />

        <div className="awards-track flex w-max gap-10 md:gap-14 px-6">
          {[...items, ...items].map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-3 shrink-0"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: `color-mix(in oklab, ${item.accent} 18%, transparent)`,
                  color: item.accent,
                }}
              >
                <item.Icon size={18} strokeWidth={2} />
              </span>
              <span
                className="whitespace-nowrap text-[15px] md:text-[17px] font-semibold"
                style={{ color: "color-mix(in oklab, var(--palette-ink) 85%, transparent)" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
