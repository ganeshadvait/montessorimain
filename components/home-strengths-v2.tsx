"use client";
//File :- components/home-strengths-v2.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X, ChevronLeft, ChevronRight, Quote } from "lucide-react";

import type { TestimonialCardProps } from "./about/testimonial-card";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type Stat = {
  value: string;
  label: string;
  color: string;
  fill: number;
};

const stats: Stat[] = [
  { value: "0", label: "FINISHED SESSIONS", color: "#50C878", fill: 0 },
  { value: "676", label: "ENROLLED LEARNERS", color: "#E91E63", fill: 85 },
  { value: "0", label: "ONLINE INSTRUCTORS", color: "#EF6B6B", fill: 0 },
  { value: "95%", label: "SATISFACTION RATE", color: "#231a3d", fill: 95 },
];

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "We felt that this is the important decision of my son's career...we enquired in all the aspects about this school...school is the basic foundation of knowledge being imparted to a child especially in academics and non academics too....this is the best school in my vicinity couple of times we visited the campus which is environment friendly....we were impressed by the infrastructure... We got good reviews about the quality maintained in your schools from various places...Finally our family make a consensus to join our son in this institution...",
    name: "Ramu Chanda",
    role: ":",
  },
  {
    quote:
      "I sincerely thank the Management, Principal, and each and every member of the staff at Montessori Prime School for everything that they have done to make my son's time at school enjoyable and productive. I have seen my son's exponential and quick growth while reading the encouraging and thankful things in the messages and in Dairy. My best wishes to Montessori Prime School.",
    name: "Dr. I. Rajasri Reddy",
    role: "Principal, Sumathi Reddy Institute of Technology for Women",
  },
  {
    quote:
      "I am B. S. R. Prasad, father of B. Bhavish who is studying in 6th standard. We decided to join him in hostel as we both are Employees. There are many things that I admire about the school, Friendly and safe environment, brilliant teachers and modern learning. Along with regular academics, IIT & NEET are also being taught by excellent teachers. My son is actively participating in co-curricular activities like cricket, Music (Drums) and he is doing well in it. I am very much satisfied with the hostel facilities and food.",
    name: "B. S. R. Prasad",
    role: "M. Sc Agriculture, Working as Manager QC Food Corporation of India",
  },
  {
    quote:
      "I am Aparna Suman as a parent we have made the right choice to enroll our Kid Elsy Neorah, Grade -2 in Montessori Prime School. It is a good school with a balance of academics and sports. Transport and canteen facilities are at their best. As a parent, I am happy with the teaching methodology, co-curricular activities, administration of tests and exams as well as discipline in the campus.",
    name: "Dr. T. Suman Anaesthetist & Aparna M. Pharm.",
    role: "Parents",
  },
];

function RingStat({ value, label, color, fill }: Stat) {
  const radius = 50;
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (fill / 100) * circumference;

  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-[130px] h-[130px] md:w-[150px] md:h-[150px]">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90"
          aria-hidden
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#eee"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[26px] md:text-[32px] font-bold tabular-nums"
            style={{ color }}
          >
            {value}
          </span>
        </div>
      </div>
      <div
        className="mt-3 text-[11px] md:text-[12px] font-bold tracking-[0.18em] uppercase"
        style={{ color: INK }}
      >
        {label}
      </div>
    </div>
  );
}

const YOUTUBE_ID = "FtRWQd_RwKk";

export default function HomeStrengthsV2() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const active = testimonials[activeIdx];

  useEffect(() => {
    if (!videoPlaying) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoPlaying(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [videoPlaying]);

  const next = () => setActiveIdx((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/home/cream-bg.jpg')" }}
    >
      <style>{`
        @keyframes hsv2-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hsv2-float-y { 0%,100% { transform: translateY(-8px); } 50% { transform: translateY(8px); } }
        @keyframes hsv2-fadein { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .hsv2-spin { animation: hsv2-spin 60s linear infinite; }
        .hsv2-float { animation: hsv2-float-y 8s ease-in-out infinite; }
        .hsv2-quote { animation: hsv2-fadein 480ms ease-out both; }
        @keyframes hsv2-modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hsv2-modal-pop { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        .hsv2-modal-backdrop { animation: hsv2-modal-fade 280ms ease-out both; }
        .hsv2-modal-content { animation: hsv2-modal-pop 320ms cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      {/* Ambient palette decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-[280px] h-[280px] rounded-full opacity-50 blur-3xl"
        style={{ background: "#fce4ec" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-10 w-[320px] h-[320px] rounded-full opacity-40 blur-3xl"
        style={{ background: "#e4f5f5" }}
      />

      <div className="relative mx-auto max-w-[1240px]">
        {/* Heading — centered */}
        <div className="mx-auto max-w-[760px] text-center">
          <span
            className="text-[13px] font-bold uppercase tracking-[0.22em]"
            style={{ color: PINK }}
          >
            OUR STRENGTHS &amp; STATISTICS
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight"
            style={{ color: INK }}
          >
            The Best Choice For{" "}
            <span style={{ color: PINK }}>Your Child</span>
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            Montessori Prime School is one of the top CBSE schools in Warangal,
            located in Hanamkonda (Yellapur). We offer CBSE curriculum with
            modern classrooms, digital laboratories, experienced faculty and
            holistic development programs.
          </p>
        </div>

        {/* Stats — 4 graphic rings */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-[900px] mx-auto">
          {stats.map((s) => (
            <RingStat key={s.label} {...s} />
          ))}
        </div>

        {/* Testimonial — featured card */}
        <div className="mt-16 md:mt-24 relative max-w-[960px] mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 shadow-[0_24px_60px_rgba(35,26,61,0.10)]"
            style={{
              background:
                "linear-gradient(135deg, #fff7f9 0%, #ffffff 50%, #f0f9f9 100%)",
            }}
          >
            {/* Big quote watermark */}
            <Quote
              aria-hidden
              className="absolute top-6 right-6 opacity-[0.08]"
              size={140}
              strokeWidth={1.4}
              style={{ color: PINK }}
            />

            {/* Small decorative dots cluster */}
            <div
              aria-hidden
              className="absolute -top-3 -left-3 w-24 h-24 opacity-50 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #E91E6340 1.5px, transparent 2px)",
                backgroundSize: "12px 12px",
              }}
            />

            <div className="relative">
              <Quote
                size={36}
                strokeWidth={2}
                style={{ color: PINK }}
                aria-hidden
              />
              <blockquote
                key={activeIdx}
                className="hsv2-quote mt-5 text-[16px] md:text-[18px] leading-[1.85]"
                style={{ color: INK }}
              >
                {active.quote}
              </blockquote>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div
                    className="text-[16px] md:text-[18px] font-bold"
                    style={{ color: INK }}
                  >
                    {active.name}
                  </div>
                  {active.role && active.role !== ":" && (
                    <div
                      className="mt-1 text-[13px] md:text-[14px]"
                      style={{ color: MUTED }}
                    >
                      {active.role}
                    </div>
                  )}
                </div>

                {/* Pager + arrows */}
                <div className="flex items-center gap-4">
                  <div
                    className="text-[14px] tabular-nums font-semibold"
                    style={{ color: MUTED }}
                  >
                    <span style={{ color: PINK }}>
                      {String(activeIdx + 1).padStart(2, "0")}
                    </span>{" "}
                    / {String(testimonials.length).padStart(2, "0")}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      onClick={prev}
                      className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-[#fce4ec]"
                      style={{ borderColor: "#e5e5e5", color: INK }}
                    >
                      <ChevronLeft size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next testimonial"
                      onClick={next}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
                      style={{ background: PINK, color: "#fff" }}
                    >
                      <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[14px]">
            <span style={{ color: MUTED }}>Want to read more stories?</span>
            <Link
              href="/about/testimonials"
              className="font-semibold hover:underline"
              style={{ color: PINK }}
            >
              View All Testimonials
            </Link>
          </div>
        </div>

        {/* VIDEO BLOCK */}
        <div className="relative mt-16 md:mt-24">
          <div className="relative mx-auto w-full max-w-[820px]">
            {/* Rotating sun-circle behind top-right */}
            <div
              aria-hidden
              className="hsv2-spin absolute -top-10 -right-8 md:-right-16 w-24 h-24 md:w-32 md:h-32 rounded-full pointer-events-none z-0"
              style={{
                background:
                  "conic-gradient(from 0deg, #F4B919 0deg, #ffd966 90deg, #F4B919 180deg, #ffd966 270deg, #F4B919 360deg)",
                maskImage:
                  "radial-gradient(circle, transparent 35%, black 36%, black 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 35%, black 36%, black 100%)",
                opacity: 0.65,
              }}
            />

            {/* Floating dot cluster bottom-left */}
            <div
              aria-hidden
              className="hsv2-float absolute -bottom-6 -left-6 md:-left-12 w-28 h-20 opacity-70 pointer-events-none z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #E91E6355 2px, transparent 2.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Stacked colored squares — decorative bottom-right */}
            <div
              aria-hidden
              className="absolute -bottom-6 -right-3 md:-right-8 hidden md:flex flex-col gap-1.5 pointer-events-none z-0"
            >
              <span
                className="w-3 h-3 rounded-sm"
                style={{ background: "#1FBABA" }}
              />
              <span
                className="w-3 h-3 rounded-sm"
                style={{ background: "#F4B919" }}
              />
              <span
                className="w-3 h-3 rounded-sm"
                style={{ background: PINK }}
              />
            </div>

            {/* Main video frame */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)] z-10 bg-black">
              <Image
                src="/home/schook tumbnail.png"
                alt="Montessori Prime School"
                fill
                sizes="(max-width: 768px) 100vw, 820px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                aria-label="Play school video"
                className="group absolute inset-0 m-auto w-[80px] h-[80px] rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  background: PINK,
                  boxShadow: "0 0 0 12px rgba(233,30,99,0.20)",
                }}
              >
                <Play size={30} fill="#ffffff" className="text-white ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {videoPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="School video"
          onClick={() => setVideoPlaying(false)}
          className="hsv2-modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="hsv2-modal-content relative w-full max-w-[960px] aspect-video"
          >
            <button
              type="button"
              onClick={() => setVideoPlaying(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 text-white"
            >
              <X size={28} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Montessori Prime School video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0 rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
