"use client";
//File :- src/app/new-home-page/_components/strengths-stats.tsx
import { useEffect, useState } from "react";
import { Quote, Users, Award, Star, ThumbsUp, LucideIcon } from "lucide-react";

type Stat = {
  Icon: LucideIcon;
  value: string;
  label: string;
  accent: string;
  glow: string;
};

const stats: Stat[] = [
  {
    Icon: Users,
    value: "1,200+",
    label: "Students Across Wings",
    accent: "var(--palette-magenta)",
    glow: "rgba(215,53,114,0.10)",
  },
  {
    Icon: Award,
    value: "22+",
    label: "Years of Excellence",
    accent: "var(--palette-teal)",
    glow: "rgba(32,184,184,0.10)",
  },
  {
    Icon: Star,
    value: "60+",
    label: "Trained Faculty",
    accent: "var(--palette-sun)",
    glow: "rgba(255,179,0,0.12)",
  },
  {
    Icon: ThumbsUp,
    value: "95%",
    label: "Parent Satisfaction",
    accent: "var(--palette-coral)",
    glow: "rgba(223,51,80,0.10)",
  },
];

const testimonials = [
  {
    quote:
      "I sincerely thank the management, principal, and every staff member for making my son's time at Montessori Prime so productive. His exponential growth — and the encouraging notes I read in his diary — speak for themselves.",
    name: "Dr. I. Rajasri Reddy",
    role: "Principal, Sumathi Reddy Institute of Technology for Women",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=Rajasri&backgroundType=solid&backgroundColor=fef0f6",
  },
  {
    quote:
      "What stood out wasn't the materials — it was watching my daughter choose her work, settle in, and stay focused for forty minutes. Nobody was making her do that. That's Montessori Prime.",
    name: "Kavya S.",
    role: "Parent of Ananya, Grade III",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=Kavya&backgroundType=solid&backgroundColor=e4f5f5",
  },
  {
    quote:
      "Two years in, our son wakes up asking when it's a school day. The guides treat children like capable people, and that respect comes home with them. It's changing how we parent too.",
    name: "Anita & Rohan D.",
    role: "Parents of Ishaan, Pre-Primary",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=AnitaRohan&backgroundType=solid&backgroundColor=fde7be",
  },
];

export default function StrengthsStats() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ background: "#faf3ec" }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px circle at 0% 100%, rgba(215,53,114,0.07), transparent 50%), radial-gradient(700px circle at 100% 0%, rgba(32,184,184,0.07), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* LEFT — copy + testimonial */}
        <div className="lg:col-span-6">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Our Strengths & Statistics
          </span>

          <h2
            className="mt-5 text-[34px] md:text-[44px] lg:text-[48px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            The best choice for{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              your child
            </span>
          </h2>

          <p
            className="mt-3 text-[15px] font-semibold"
            style={{ color: "var(--palette-teal)" }}
          >
            Top CBSE School in Warangal
          </p>

          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.75] max-w-[540px]"
            style={{ color: "var(--palette-muted)" }}
          >
            Montessori Prime is among Warangal&rsquo;s top CBSE schools, in
            Hanamkonda (Yellapur). We combine modern classrooms, digital
            laboratories, experienced faculty, and holistic development
            programs — trusted by parents across the city for quality
            education and student success.
          </p>

          {/* Testimonial card */}
          <figure
            className="relative mt-10 rounded-3xl bg-white p-7 md:p-9"
            style={{
              boxShadow: "0 24px 60px -24px rgba(29,29,31,0.18)",
            }}
          >
            <Quote
              size={56}
              className="absolute -top-4 -left-2 opacity-15"
              style={{ color: "var(--palette-magenta)" }}
              strokeWidth={1.5}
            />

            <blockquote
              key={active}
              className="relative text-[15px] md:text-[16px] leading-[1.7] animate-[fadein_0.5s_ease-out]"
              style={{ color: "var(--palette-ink)" }}
            >
              {t.quote}
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 rounded-full border"
                style={{ borderColor: "var(--palette-line)" }}
              />
              <div>
                <div
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--palette-magenta)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[12px]"
                  style={{ color: "var(--palette-muted)" }}
                >
                  {t.role}
                </div>
              </div>
            </figcaption>

            {/* Pagination dots */}
            <div className="mt-6 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === active ? 24 : 6,
                    background:
                      i === active
                        ? "var(--palette-magenta)"
                        : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </figure>

          <div
            className="mt-6 text-[14px]"
            style={{ color: "var(--palette-muted)" }}
          >
            Want to read more?{" "}
            <a
              href="#testimonials"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: "var(--palette-magenta)" }}
            >
              View all testimonials →
            </a>
          </div>
        </div>

        {/* RIGHT — stat grid */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ Icon, value, label, accent, glow }) => (
              <div
                key={label}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-white p-7 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  boxShadow: `0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -22px ${glow}`,
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: accent }}
                />

                {/* Background watermark icon */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]"
                  style={{ color: accent }}
                >
                  <Icon size={170} strokeWidth={1.4} />
                </div>

                <div className="relative flex flex-col h-full justify-between">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    style={{ color: accent }}
                  />
                  <div>
                    <div
                      className="text-[44px] md:text-[54px] font-bold leading-none tracking-tight"
                      style={{ color: accent }}
                    >
                      {value}
                    </div>
                    <div
                      className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--palette-ink)" }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
