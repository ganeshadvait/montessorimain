//File :- src/app/new-home-page/_components/about-us.tsx
import { ArrowRight, UserRound } from "lucide-react";

const PRIMARY_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1400&q=80";
const SECONDARY_IMAGE =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80";

export default function AboutUs() {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ background: "#faf3ec" }}
    >
      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-6 relative">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            About Us
          </span>

          <h2
            className="mt-5 text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Develop your skills at{" "}
            <span style={{ color: "var(--palette-magenta)" }}>
              Montessori Prime School
            </span>
          </h2>

          <div
            className="mt-7 space-y-5 text-[15px] md:text-[16px] leading-[1.75]"
            style={{ color: "var(--palette-muted)" }}
          >
            <p>
              At{" "}
              <strong style={{ color: "var(--palette-ink)" }}>
                Montessori Prime School
              </strong>
              , we believe education isn&rsquo;t just about academics —
              it&rsquo;s about nurturing the mind, heart, and spirit of every
              learner. The formative years of schooling shape a child&rsquo;s
              character, confidence, and future aspirations.
            </p>
            <p>
              As a{" "}
              <strong style={{ color: "var(--palette-ink)" }}>
                CBSE-affiliated institution
              </strong>
              , we follow a balanced curriculum that integrates scholastic
              excellence with life skills, sports, and co-curricular enrichment
              — combining traditional values with modern teaching methodologies.
            </p>
            <p>
              We emphasize{" "}
              <strong style={{ color: "var(--palette-ink)" }}>
                holistic development
              </strong>{" "}
              — fostering intellectual curiosity, discipline, empathy, and
              leadership through experiential learning and personalised
              attention.
            </p>
            <p style={{ color: "var(--palette-ink)", fontWeight: 600 }}>
              Our aim is to inspire responsible global citizens who lead with
              knowledge, compassion, and integrity.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#about-more"
            className="mt-9 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(215,53,114,0.5)]"
            style={{ background: "var(--palette-magenta)" }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            READ MORE
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>

        {/* RIGHT — image collage */}
        <div className="lg:col-span-6 relative aspect-square max-w-[560px] mx-auto w-full">
          {/* Decorative shapes */}
          <svg
            aria-hidden
            className="absolute -top-2 left-[8%] w-10 h-10 opacity-70"
            viewBox="0 0 32 32"
            fill="none"
            stroke="var(--palette-ink)"
            strokeWidth="2"
          >
            <line x1="16" y1="2" x2="16" y2="30" />
            <line x1="2" y1="16" x2="30" y2="16" />
            <line x1="6" y1="6" x2="26" y2="26" />
            <line x1="6" y1="26" x2="26" y2="6" />
          </svg>

          {/* Coral splash */}
          <svg
            aria-hidden
            className="absolute top-[2%] left-[42%] w-24 h-24"
            viewBox="0 0 100 100"
          >
            <path
              d="M50 8 C 60 22, 78 30, 70 50 C 62 70, 40 70, 30 55 C 20 40, 38 18, 50 8 Z"
              fill="var(--palette-coral)"
            />
            <circle cx="22" cy="30" r="4" fill="var(--palette-coral)" />
          </svg>

          {/* Yellow speckled circle */}
          <div
            className="absolute right-[-4%] top-[28%] w-28 h-28 rounded-full"
            style={{
              background: "var(--palette-sun)",
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.18) 1.5px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.15) 1.5px, transparent 2px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.18) 1.5px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.15) 1.5px, transparent 2px)",
            }}
          />

          {/* Outline circle */}
          <div
            className="absolute right-[-2%] top-[6%] w-14 h-14 rounded-full border-2"
            style={{ borderColor: "var(--palette-coral)" }}
          >
            <div
              className="absolute inset-2 rounded-full border-2"
              style={{ borderColor: "var(--palette-coral)" }}
            />
          </div>

          {/* Red squiggle */}
          <svg
            aria-hidden
            className="absolute top-[44%] right-[8%] w-20 h-6"
            viewBox="0 0 80 24"
            fill="none"
          >
            <path
              d="M2 12 L 14 4 L 26 20 L 38 4 L 50 20 L 62 4 L 78 12"
              stroke="var(--palette-coral)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Dotted pattern bottom-left */}
          <div
            aria-hidden
            className="absolute bottom-[12%] left-[2%] w-28 h-20 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--palette-sun) 2px, transparent 2.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Plus mark */}
          <svg
            aria-hidden
            className="absolute bottom-[8%] left-[44%] w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            stroke="var(--palette-coral)"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="16" y1="4" x2="16" y2="28" />
            <line x1="4" y1="16" x2="28" y2="16" />
          </svg>

          {/* Primary image — large blob */}
          <div
            className="absolute inset-[6%] overflow-hidden"
            style={{
              borderRadius: "62% 38% 47% 53% / 56% 56% 44% 44%",
              boxShadow: "0 24px 60px -20px rgba(29,29,31,0.2)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PRIMARY_IMAGE}
              alt="Montessori Prime students"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image — smaller blob, overlapping */}
          <div
            className="absolute bottom-[2%] left-[2%] w-[44%] aspect-[5/4] overflow-hidden border-4 border-white"
            style={{
              borderRadius: "55% 45% 52% 48% / 48% 60% 40% 52%",
              boxShadow: "0 18px 40px -12px rgba(29,29,31,0.25)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SECONDARY_IMAGE}
              alt="Faculty at Montessori Prime"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
