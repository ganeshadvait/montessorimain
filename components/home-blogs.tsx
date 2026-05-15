//File :- components/home-blogs.tsx
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

import { blogs as allBlogs } from "../src/app/news/data";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

export default function HomeBlogs() {
  const blogs = allBlogs.slice(0, 3);

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
        <div className="mt-12 md:mt-14 grid gap-10 md:gap-12 md:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.slug} className="group relative">
              {/* Image with framed pink block crossed behind */}
              <div className="relative aspect-square">
                {/* Pink block behind image — rotated slightly */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[16px] rotate-[-3deg]"
                  style={{ background: PINK }}
                />

                {/* Image card with white border */}
                <Link
                  href={`/news/${b.slug}`}
                  className="relative block w-full h-full overflow-hidden rounded-[16px] bg-white p-2 shadow-sm"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </div>

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
                  <Link
                    href={`/news/${b.slug}`}
                    className="transition-colors group-hover:text-[#E91E63]"
                  >
                    {b.title}
                  </Link>
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <div
                    className="h-px flex-1 mr-4"
                    style={{ background: "#e5e5e5" }}
                  />
                  <Link
                    href={`/news/${b.slug}`}
                    aria-label={`Read: ${b.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:translate-x-1"
                    style={{
                      background: "#fce4ec",
                      color: PINK,
                    }}
                  >
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </Link>
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
          <Link
            href="/news"
            className="font-semibold hover:underline"
            style={{ color: PINK }}
          >
            View all Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
