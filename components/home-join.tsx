"use client";
//File :- components/home-join.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";
const TEAL = "#1FBABA";

const features = [
  "World Class Modern Infrastructure",
  "Integrated CBSE curriculum",
  "Digital classrooms with Smart boards",
  "Science, Math, Linguistic, Computer & Robotic Labs",
  "National / International Associations for Skill Development",
  "With Separate Air-Conditioned Hostel for Boys and Girls",
];

export default function HomeJoin() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative w-full bg-white py-20 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-2 gap-14 lg:gap-24 xl:gap-28 items-center">
        {/* LEFT */}
        <div className="lg:pr-4">
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            JOIN OUR MONTESSORI PRIME SCHOOL
          </span>
          <h2
            className="mt-5 text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.25] tracking-tight"
            style={{ color: INK }}
          >
            &ldquo;School is a building which has four walls with tomorrow
            inside.&rdquo;
          </h2>

          <p
            className={`mt-7 text-[15px] md:text-[16px] leading-[1.95] ${
              expanded ? "" : "line-clamp-3"
            }`}
            style={{ color: MUTED }}
          >
            The quest for a good tomorrow ends once you the child joins
            Montessori Prime School. A school which has the best facilities and
            create self-confident, self-reliant, independent individuals ready
            to undertake their role as future leaders. MPS emphasises on
            teaching strategy by considering the individual differences among
            the students. We believe that no student is alike and that is why
            modifying teaching methodology is very important. As we accept the
            differences among students. We develop cooperation, team work and
            empathy in our students because the progress the young minds will
            lead to the progress of the nation.
          </p>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold hover:underline"
            style={{ color: PINK }}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          <ul className="mt-10 space-y-5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: TEAL }}
                >
                  <Check size={15} strokeWidth={3} className="text-white" />
                </span>
                <span
                  className="text-[15px] md:text-[16px] font-semibold"
                  style={{ color: INK }}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/about/infrastructure"
            className="mt-12 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
            style={{ background: PINK, color: "#ffffff" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            View Our Infrastructure
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative w-full">
          <div className="relative w-full max-w-[560px] ml-auto aspect-[4/5]">
            {/* Pink full-size offset block behind */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6 rounded-md"
              style={{ background: PINK }}
            />

            {/* Image */}
            <div className="relative w-full h-full rounded-md overflow-hidden shadow-[0_20px_50px_rgba(35,26,61,0.18)]">
              <Image
                src="/schoolbuilidngimage.png"
                alt="Montessori Prime School building"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />

              {/* Bottom pink bar */}
              <div
                className="absolute left-0 right-0 bottom-0 py-5 px-6 text-center"
                style={{ background: PINK }}
              >
                <span
                  className="text-[20px] md:text-[24px] font-bold tracking-tight"
                  style={{ color: "#ffffff" }}
                >
                  3 Decades of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
