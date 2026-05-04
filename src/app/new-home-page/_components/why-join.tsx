//File :- src/app/new-home-page/_components/why-join.tsx
import { CheckCircle2, ArrowRight, UserRound } from "lucide-react";

const CAMPUS_IMAGE =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80";

const features = [
  "World-Class Modern Infrastructure",
  "Integrated CBSE Curriculum",
  "Digital classrooms with Smart Boards",
  "Science, Math, Linguistic, Computer & Robotic Labs",
  "National & International Skill Development partnerships",
  "Separate air-conditioned hostel for boys and girls",
];

export default function WhyJoin() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div>
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Join Our Montessori Prime School
          </span>

          <h2
            className="mt-5 text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.1] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            <span
              aria-hidden
              className="mr-1 align-top text-[60px] leading-none"
              style={{
                color: "var(--palette-magenta)",
                fontFamily: "ui-serif, Georgia, serif",
              }}
            >
              &ldquo;
            </span>
            School is a building which has{" "}
            <span style={{ color: "var(--palette-magenta)" }}>four walls</span>{" "}
            with{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-teal)",
              }}
            >
              tomorrow inside.
            </span>
            <span
              aria-hidden
              className="ml-1 align-top text-[60px] leading-none"
              style={{
                color: "var(--palette-magenta)",
                fontFamily: "ui-serif, Georgia, serif",
              }}
            >
              &rdquo;
            </span>
          </h2>

          <p
            className="mt-6 text-[15px] md:text-[16px] leading-[1.75] max-w-[560px]"
            style={{ color: "var(--palette-muted)" }}
          >
            The quest for a good tomorrow ends when your child joins Montessori
            Prime — a school with the best facilities to nurture self-confident,
            self-reliant individuals ready to lead. We honour individual
            differences in our teaching strategy, develop cooperation, teamwork,
            and empathy, because the progress of young minds is the progress of
            the nation.
          </p>

          {/* Feature checklist */}
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-[14px] md:text-[15px]"
                style={{ color: "var(--palette-ink)" }}
              >
                <CheckCircle2
                  size={20}
                  strokeWidth={2}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--palette-teal)" }}
                  fill="rgba(32,184,184,0.12)"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#infrastructure"
            className="mt-9 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(215,53,114,0.5)]"
            style={{ background: "var(--palette-magenta)" }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            VIEW OUR INFRASTRUCTURE
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>

        {/* RIGHT — image with magenta accent frame + experience badge */}
        <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
          {/* Magenta accent frame (offset background block) */}
          <div
            aria-hidden
            className="absolute -top-4 -right-4 left-12 bottom-12 rounded-3xl"
            style={{ background: "var(--palette-magenta)" }}
          />

          {/* Image */}
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
            style={{
              boxShadow: "0 30px 70px -30px rgba(29,29,31,0.35)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CAMPUS_IMAGE}
              alt="Montessori Prime School campus"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience badge — bottom tab */}
          <div
            className="absolute bottom-4 left-4 right-12 lg:right-16 rounded-2xl px-7 py-5"
            style={{
              background: "var(--palette-magenta)",
              boxShadow: "0 18px 40px -18px rgba(215,53,114,0.55)",
            }}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[36px] md:text-[44px] font-bold leading-none text-white">
                3+
              </span>
              <span className="text-[18px] md:text-[20px] font-semibold text-white/95">
                Decades of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
