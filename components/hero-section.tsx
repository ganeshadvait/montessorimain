//File :- /components/hero-section.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowRight, PlayCircle, MouseIcon } from "lucide-react";
import gsap from "gsap";

const POSTER_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=2000&q=80";
const BACKDROP_VIDEO = "https://assets.mixkit.co/videos/14956/14956-720.mp4";

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-hero-fade]", { opacity: 0, y: 28 });
      gsap.set("[data-hero-word]", { opacity: 0, y: 40, rotate: 4 });
      gsap.set("[data-hero-chip]", { opacity: 0, scale: 0.9 });
      gsap.set("[data-hero-stat]", { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.to("[data-hero-chip]", { opacity: 1, scale: 1, duration: 0.5 })
        .to(
          "[data-hero-word]",
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.1",
        )
        .to("[data-hero-fade]", { opacity: 1, y: 0, stagger: 0.1 }, "-=0.5")
        .to(
          "[data-hero-stat]",
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 },
          "-=0.4",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden bg-[var(--palette-ink)] text-white"
    >
      {/* MEDIA BACKDROP */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${POSTER_IMAGE})` }}
        />
        <video
          src={BACKDROP_VIDEO}
          poster={POSTER_IMAGE}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "var(--palette-magenta)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-160px] left-1/3 h-[360px] w-[360px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--palette-teal)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-[14%] h-3 w-3 rounded-full"
        style={{ background: "var(--palette-sun)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[22%] left-[48%] h-2 w-2 rounded-full bg-white/70"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-24">
        {/* Chip */}
        <span
          data-hero-chip
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.18em] backdrop-blur-xl"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--palette-sun)" }}
          />
          A Montessori School · Est. 2002
        </span>

        {/* Headline */}
        <h1 className="mt-8 font-semibold leading-[0.95] tracking-tight text-[clamp(44px,8vw,124px)]">
          <span className="block overflow-hidden">
            <span data-hero-word className="inline-block">
              Where
            </span>{" "}
            <span data-hero-word className="inline-block">
              curious
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-word className="inline-block">
              minds
            </span>{" "}
            <span
              data-hero-word
              className="inline-block italic"
              style={{
                fontFamily:
                  '"Host Grotesk", ui-serif, Georgia, serif',
                color: "var(--palette-sun)",
              }}
            >
              bloom
            </span>
            <span
              data-hero-word
              className="inline-block"
              style={{ color: "var(--palette-sun)" }}
            >
              .
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          data-hero-fade
          className="mt-8 max-w-xl text-[17px] md:text-[19px] leading-relaxed text-white/80"
        >
          A prepared environment where children from 18 months to 12 years
          follow their own interests, build independence, and learn by doing —
          with guides who meet them exactly where they are.
        </p>

        {/* CTAs */}
        <div
          data-hero-fade
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#apply"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold text-black shadow-[0_10px_40px_-10px_rgba(255,179,0,0.6)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--palette-sun)" }}
          >
            Book a School Tour
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#story"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/20"
          >
            <PlayCircle size={18} />
            Watch Our Story
          </a>
        </div>

        {/* Stats strip */}
        <div
          data-hero-fade
          className="mt-16 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-white/15 pt-8"
        >
          {[
            { value: "22+", label: "Years guiding children" },
            { value: "7:1", label: "Student to guide ratio" },
            { value: "18m–12y", label: "Ages we welcome" },
            { value: "4", label: "Prepared environments" },
          ].map((stat, i) => (
            <div key={stat.label} data-hero-stat className="flex flex-col">
              <span
                className="text-[32px] md:text-[40px] font-semibold leading-none"
                style={{
                  color:
                    i % 2 === 0
                      ? "var(--palette-sun)"
                      : "var(--palette-teal)",
                }}
              >
                {stat.value}
              </span>
              <span className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/65">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-fade
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/70"
      >
        <MouseIcon size={18} className="animate-bounce" />
        Scroll
      </div>
    </section>
  );
}
