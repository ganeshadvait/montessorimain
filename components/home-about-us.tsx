//File :- components/home-about-us.tsx
import { UserRound } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const PRIMARY_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1400&q=80";
const SECONDARY_IMAGE =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80";

export default function HomeAboutUs() {
  return (
    <section
      className="relative w-full py-16 md:py-20 px-4 md:px-8 overflow-hidden"
      style={{ background: "#fbf3ec" }}
    >
      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            ABOUT US
          </span>

          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[36px] font-bold leading-[1.2] tracking-tight"
            style={{ color: INK }}
          >
            Develop your skills at
          </h2>
          <h3
            className="mt-2 text-[26px] md:text-[32px] lg:text-[34px] font-bold leading-[1.2] tracking-tight"
            style={{ color: INK }}
          >
            Montessori Prime School
          </h3>

          <div
            className="mt-6 space-y-5 text-[14px] md:text-[15px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            <p>
              At{" "}
              <strong style={{ color: INK }}>Montessori Prime School</strong>,
              we believe that education is not just about academics — it&rsquo;s
              about nurturing the mind, heart, and spirit of every learner. The
              formative years of schooling play a vital role in shaping a
              child&rsquo;s character, confidence, and future aspirations.
            </p>
            <p>
              As a{" "}
              <strong style={{ color: INK }}>CBSE-affiliated institution</strong>,
              we follow a balanced curriculum that integrates scholastic
              excellence with life skills, sports, and co-curricular enrichment.
              Our approach combines traditional values with modern teaching
              methodologies to create a joyful, stimulating, and inclusive
              learning environment.
            </p>
            <p>
              We emphasize{" "}
              <strong style={{ color: INK }}>holistic development</strong> —
              fostering intellectual curiosity, discipline, empathy, and
              leadership. Through experiential learning and personalized
              attention, our students develop strong communication,
              problem-solving, and teamwork abilities — preparing them to excel
              in an ever-evolving world.
            </p>
            <p style={{ color: INK, fontWeight: 600 }}>
              We aim to inspire our students to become responsible global
              citizens who lead with knowledge, compassion, and integrity.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://www.montessorijnprime.com/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-semibold text-white"
            style={{ background: PINK }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            Read More
          </a>
        </div>

        {/* RIGHT — image collage */}
        <div className="relative aspect-square max-w-[560px] mx-auto w-full">
          {/* Decorative — asterisk lines (top-left of right area) */}
          <svg
            aria-hidden
            className="absolute top-[2%] left-[12%] w-9 h-9 opacity-80"
            viewBox="0 0 32 32"
            fill="none"
            stroke={INK}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="16" y1="2" x2="16" y2="30" />
            <line x1="2" y1="16" x2="30" y2="16" />
            <line x1="6" y1="6" x2="26" y2="26" />
            <line x1="6" y1="26" x2="26" y2="6" />
          </svg>

          {/* Red splash */}
          <svg
            aria-hidden
            className="absolute top-[-2%] left-[44%] w-28 h-28"
            viewBox="0 0 100 100"
          >
            <path
              d="M50 6 C 62 22, 80 30, 70 50 C 62 70, 40 70, 30 55 C 20 40, 38 18, 50 6 Z"
              fill="#E94454"
            />
            <circle cx="20" cy="32" r="5" fill="#E94454" />
          </svg>

          {/* Yellow speckled circle */}
          <div
            className="absolute right-[-6%] top-[24%] w-28 h-28 rounded-full"
            style={{
              background: "#F4B919",
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.2) 1.5px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.18) 1.5px, transparent 2px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.2) 1.5px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.18) 1.5px, transparent 2px)",
            }}
          />

          {/* Outline concentric circles (right) */}
          <div
            className="absolute right-[6%] top-[2%] w-12 h-12 rounded-full border-2"
            style={{ borderColor: "#E94454" }}
          >
            <div
              className="absolute inset-1.5 rounded-full border-2"
              style={{ borderColor: "#E94454" }}
            />
          </div>

          {/* Small circle (outline) — left */}
          <div
            className="absolute top-[30%] left-[2%] w-5 h-5 rounded-full border-2"
            style={{ borderColor: "#F4B919" }}
          />

          {/* Red zigzag */}
          <svg
            aria-hidden
            className="absolute top-[40%] right-[6%] w-20 h-6"
            viewBox="0 0 80 24"
            fill="none"
          >
            <path
              d="M2 12 L 14 4 L 26 20 L 38 4 L 50 20 L 62 4 L 78 12"
              stroke="#E94454"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Dotted pattern bottom-left */}
          <div
            aria-hidden
            className="absolute bottom-[12%] left-[2%] w-32 h-20 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle, #F4B919 2px, transparent 2.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Plus mark */}
          <svg
            aria-hidden
            className="absolute bottom-[2%] left-[44%] w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            stroke="#E94454"
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
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PRIMARY_IMAGE}
              alt="Montessori Prime students"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image — smaller blob */}
          <div
            className="absolute bottom-[2%] left-[6%] w-[42%] aspect-[5/4] overflow-hidden border-[5px] border-white"
            style={{
              borderRadius: "55% 45% 52% 48% / 48% 60% 40% 52%",
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
