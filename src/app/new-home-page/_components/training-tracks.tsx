//File :- src/app/new-home-page/_components/training-tracks.tsx
import {
  Trophy,
  Languages,
  Music,
  ArrowRight,
  UserRound,
  LucideIcon,
} from "lucide-react";

type Track = {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
  blobCorner: "tl" | "tr";
};

const tracks: Track[] = [
  {
    Icon: Trophy,
    title: "Sports Training",
    body: "Sports build discipline and shape both mind and body. At MPS, expert coaches train students across Volleyball, Basketball, Cricket, Football, Skating, Swimming, Martial Arts, Table Tennis, Chess and more — turning fitness into a lifelong habit.",
    accent: "var(--palette-teal)",
    blobCorner: "tl",
  },
  {
    Icon: Languages,
    title: "Language Training",
    body: "Our English Village gives students immersive practice in spoken language, voice modulation, and confident public speaking. We also introduce a foreign language so every learner can engage fluently with the wider world.",
    accent: "var(--palette-coral)",
    blobCorner: "tl",
  },
  {
    Icon: Music,
    title: "Music, Dance & Art",
    body: "A team of specialists nurtures vocal and instrumental music, classical and western dance, and fine arts. Performance opportunities through the year help every student showcase their talent confidently and fearlessly.",
    accent: "var(--palette-sun)",
    blobCorner: "tr",
  },
];

function Card({ Icon, title, body, accent, blobCorner }: Track) {
  const cornerClass =
    blobCorner === "tl"
      ? "top-0 left-0 rounded-br-[100%]"
      : "top-0 right-0 rounded-bl-[100%]";
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-white border p-7 md:p-8 transition-all duration-500 hover:-translate-y-1"
      style={{
        borderColor: "rgba(0,0,0,0.06)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 30px -16px rgba(29,29,31,0.15)",
      }}
    >
      {/* Corner blob */}
      <div
        aria-hidden
        className={`absolute ${cornerClass} w-[120px] h-[120px] transition-all duration-500 group-hover:scale-110`}
        style={{ background: accent, opacity: 0.85 }}
      />

      <div className="relative">
        {/* Icon */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center">
          <Icon
            size={32}
            strokeWidth={1.6}
            style={{ color: "var(--palette-ink)" }}
          />
        </div>

        {/* Title */}
        <h3
          className="text-[20px] md:text-[22px] font-bold leading-tight tracking-tight"
          style={{ color: "var(--palette-ink)" }}
        >
          {title}
        </h3>

        {/* Body */}
        <p
          className="mt-3 text-[14px] md:text-[15px] leading-[1.7]"
          style={{ color: "var(--palette-muted)" }}
        >
          {body}
        </p>
      </div>
    </article>
  );
}

export default function TrainingTracks() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      {/* Soft ambient palette glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(700px circle at 0% 0%, rgba(32,184,184,0.05), transparent 50%), radial-gradient(700px circle at 100% 100%, rgba(255,179,0,0.05), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-5">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Beyond Academics
          </span>

          <h2
            className="mt-5 text-[34px] md:text-[44px] lg:text-[48px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Guide the path to your{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              professional journey
            </span>
          </h2>

          <p
            className="mt-6 text-[15px] md:text-[16px] leading-[1.75]"
            style={{ color: "var(--palette-muted)" }}
          >
            An ultra-modern campus with fully air-conditioned classrooms,
            optimised class strengths for interactive learning, a well-stocked
            library, and 3D laboratories for Physics, Chemistry, Biology,
            Linguistics, Mathematics, and Robotics.
          </p>

          <a
            href="#explore"
            className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(215,53,114,0.5)]"
            style={{ background: "var(--palette-magenta)" }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            EXPLORE NOW
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>

        {/* RIGHT — staggered cards */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            <div className="sm:col-start-1">
              <Card {...tracks[0]} />
            </div>
            <div className="sm:col-start-2 sm:row-span-2 sm:mt-14">
              <Card {...tracks[2]} />
            </div>
            <div className="sm:col-start-1">
              <Card {...tracks[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
