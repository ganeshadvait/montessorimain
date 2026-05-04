//File :- src/app/new-home-page/_components/upcoming-events.tsx
import { MapPin, ArrowRight, Calendar, UserRound } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1100&q=80";

type Event = {
  day: string;
  month: string;
  title: string;
  location: string;
  href: string;
  accent: string;
  glow: string;
};

const events: Event[] = [
  {
    day: "25",
    month: "Dec",
    title: "Christmas Celebrations",
    location: "MPS — Yellapur",
    href: "#christmas",
    accent: "var(--palette-magenta)",
    glow: "rgba(215,53,114,0.18)",
  },
  {
    day: "06",
    month: "Dec",
    title: "Annual Day 2026 Celebrations",
    location: "MPS — Yellapur",
    href: "#annual-day",
    accent: "var(--palette-teal)",
    glow: "rgba(32,184,184,0.18)",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy + event cards */}
        <div className="lg:col-span-7">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Latest Events
          </span>

          <h2
            className="mt-5 text-[34px] md:text-[44px] lg:text-[48px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Our Upcoming{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              Events
            </span>
          </h2>

          <p
            className="mt-5 max-w-[540px] text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "var(--palette-muted)" }}
          >
            Montessori Prime celebrates learning beyond the classroom — through
            festivals, performances, and community gatherings that bring every
            child&rsquo;s joy and confidence to the stage.
          </p>

          {/* Event cards */}
          <div className="mt-9 space-y-4">
            {events.map((e) => (
              <a
                key={e.title}
                href={e.href}
                className="group relative flex items-stretch overflow-hidden rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                  boxShadow: `0 14px 30px -18px ${e.glow}`,
                }}
              >
                {/* Left accent bar — slides in on hover */}
                <div
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ background: e.accent }}
                />

                {/* Body */}
                <div className="flex-1 p-5 md:p-6">
                  <div
                    className="inline-flex items-center gap-2 text-[12px] font-medium"
                    style={{ color: "var(--palette-muted)" }}
                  >
                    <MapPin size={13} strokeWidth={2} />
                    {e.location}
                  </div>
                  <h3
                    className="mt-2 text-[18px] md:text-[20px] font-bold leading-tight tracking-tight"
                    style={{ color: "var(--palette-ink)" }}
                  >
                    {e.title}
                  </h3>
                  <span
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color: e.accent }}
                  >
                    Read More
                    <ArrowRight
                      size={13}
                      strokeWidth={2.4}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>

                {/* Date tile */}
                <div
                  className="flex flex-col items-center justify-center px-7 md:px-9 py-5 transition-colors duration-300"
                  style={{
                    background: `color-mix(in oklab, ${e.accent} 8%, white)`,
                  }}
                >
                  <span
                    className="text-[36px] md:text-[44px] font-bold leading-none tabular-nums"
                    style={{ color: e.accent }}
                  >
                    {e.day}
                  </span>
                  <span
                    className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: e.accent }}
                  >
                    {e.month}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#all-events"
            className="mt-9 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(215,53,114,0.5)]"
            style={{ background: "var(--palette-magenta)" }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            VIEW ALL EVENTS
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>

        {/* RIGHT — hero image with floating event badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-0">
            {/* Soft palette ambient blob behind */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-6 -left-6 w-40 h-40 rounded-full blur-3xl opacity-50"
              style={{ background: "var(--palette-sun)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-6 w-44 h-44 rounded-full blur-3xl opacity-50"
              style={{ background: "var(--palette-magenta)" }}
            />

            {/* Image */}
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl"
              style={{
                boxShadow: "0 30px 70px -30px rgba(29,29,31,0.35)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE}
                alt="Annual Day performance"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating "next event" badge */}
            <div
              className="absolute -bottom-4 -left-4 lg:-left-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3"
              style={{
                boxShadow: "0 18px 40px -16px rgba(29,29,31,0.25)",
              }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "var(--palette-magenta)",
                  color: "white",
                }}
              >
                <Calendar size={18} strokeWidth={2} />
              </span>
              <div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--palette-muted)" }}
                >
                  Next Event
                </div>
                <div
                  className="text-[14px] font-bold"
                  style={{ color: "var(--palette-ink)" }}
                >
                  Dec 6 · Annual Day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
