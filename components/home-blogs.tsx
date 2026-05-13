//File :- components/home-blogs.tsx
import { CalendarDays, ArrowRight } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type Blog = {
  date: string;
  title: string;
  image: string;
  href: string;
};

const blogs: Blog[] = [
  {
    date: "Jan 26, 2026",
    title: "Happy Republic Day 2026",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-republic-day",
  },
  {
    date: "Jan 23, 2026",
    title: "Happy Vasantha Panchami",
    image:
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-vasantha-panchami",
  },
  {
    date: "Jan 15, 2026",
    title: "Happy Sankranthi! 2026",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    href: "#blog-sankranthi",
  },
];

export default function HomeBlogs() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            LATEST BLOGS
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[36px] font-bold leading-[1.15] tracking-tight"
            style={{ color: INK }}
          >
            Montessori Prime Blogs
          </h2>
          <p
            className="mt-4 text-[14px] md:text-[15px] leading-[1.7]"
            style={{ color: MUTED }}
          >
            Montessori Prime School aims primarily at the education of young
            children without distinction of imparting education to school.
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-12 md:mt-14 grid gap-8 md:gap-10 md:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.title} className="group relative">
              {/* Pink offset (top-right) */}
              <div
                aria-hidden
                className="absolute -top-2 -right-2 left-4 bottom-4"
                style={{ background: PINK }}
              />
              {/* Pink offset (bottom-left) */}
              <div
                aria-hidden
                className="absolute top-4 right-4 -bottom-2 -left-2"
                style={{ background: PINK }}
              />

              {/* Image card */}
              <a href={b.href} className="relative block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.image}
                  alt={b.title}
                  className="block w-full aspect-[4/5] object-cover"
                />
              </a>

              {/* Body */}
              <div className="relative bg-white pt-5">
                <div
                  className="inline-flex items-center gap-2 text-[13px]"
                  style={{ color: MUTED }}
                >
                  <CalendarDays size={14} strokeWidth={2} />
                  {b.date}
                </div>
                <h3
                  className="mt-3 text-[18px] md:text-[20px] font-bold leading-tight tracking-tight"
                  style={{ color: INK }}
                >
                  {b.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <div
                    className="h-px flex-1 mr-4"
                    style={{ background: "#e5e5e5" }}
                  />
                  <a
                    href={b.href}
                    aria-label={`Read: ${b.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform hover:translate-x-1"
                    style={{
                      borderColor: "#e5e5e5",
                      color: PINK,
                    }}
                  >
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div
          className="mt-12 md:mt-14 pt-6 border-t flex items-center justify-center gap-2 text-[14px]"
          style={{ borderColor: "#e5e5e5", color: MUTED }}
        >
          Get into details now?
          <a
            href="#all-blogs"
            className="font-semibold hover:underline"
            style={{ color: PINK }}
          >
            View all Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
