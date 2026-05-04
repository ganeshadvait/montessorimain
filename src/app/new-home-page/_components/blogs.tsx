//File :- src/app/new-home-page/_components/blogs.tsx
import { CalendarDays, ArrowRight } from "lucide-react";

type Blog = {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  tag: string;
  accent: string;
};

const blogs: Blog[] = [
  {
    date: "Jan 26, 2026",
    title: "Happy Republic Day 2026",
    excerpt:
      "Celebrating the spirit of unity and democracy with parades, songs, and student-led tributes across our campus.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-republic-day",
    tag: "Festival",
    accent: "var(--palette-magenta)",
  },
  {
    date: "Jan 23, 2026",
    title: "Happy Vasantha Panchami",
    excerpt:
      "Honouring Goddess Saraswati and the arrival of spring — a day of music, learning, and yellow blooms.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-vasantha-panchami",
    tag: "Tradition",
    accent: "var(--palette-sun)",
  },
  {
    date: "Jan 15, 2026",
    title: "Happy Sankranthi 2026",
    excerpt:
      "Kites, harvest celebrations, and shared sweets — a heart-warming start to the year for our students and parents.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-sankranthi",
    tag: "Community",
    accent: "var(--palette-teal)",
  },
];

export default function Blogs() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Latest Blogs
          </span>
          <h2
            className="mt-5 text-[34px] md:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Montessori Prime{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              Stories
            </span>
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "var(--palette-muted)" }}
          >
            Festivals, classroom moments, and the small things that make every
            week at MPS worth remembering.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 md:mt-16 grid gap-7 md:gap-8 md:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.title} className="group relative">
              {/* Offset accent block behind */}
              <div
                aria-hidden
                className="absolute -top-3 -right-3 left-6 bottom-12 rounded-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{
                  background: b.accent,
                  opacity: 0.85,
                }}
              />

              {/* Card */}
              <a
                href={b.href}
                className="relative block overflow-hidden rounded-2xl bg-white"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -22px rgba(29,29,31,0.18)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.image}
                    alt={b.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: b.accent }}
                  >
                    {b.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  <div
                    className="inline-flex items-center gap-2 text-[12px] font-medium"
                    style={{ color: "var(--palette-muted)" }}
                  >
                    <CalendarDays size={14} strokeWidth={2} />
                    {b.date}
                  </div>
                  <h3
                    className="mt-3 text-[18px] md:text-[20px] font-bold leading-snug tracking-tight"
                    style={{ color: "var(--palette-ink)" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] leading-[1.65] line-clamp-2"
                    style={{ color: "var(--palette-muted)" }}
                  >
                    {b.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="text-[13px] font-semibold"
                      style={{ color: b.accent }}
                    >
                      Read article
                    </span>
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{
                        background: b.accent,
                        color: "white",
                        boxShadow: `0 8px 20px -6px ${b.accent}`,
                      }}
                    >
                      <ArrowRight size={16} strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div
          className="mt-12 md:mt-14 pt-8 border-t flex items-center justify-center gap-2 text-[14px]"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            color: "var(--palette-muted)",
          }}
        >
          Want to read more?
          <a
            href="#all-blogs"
            className="font-semibold underline-offset-4 hover:underline inline-flex items-center gap-1.5"
            style={{ color: "var(--palette-magenta)" }}
          >
            View all blogs
            <ArrowRight size={14} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
