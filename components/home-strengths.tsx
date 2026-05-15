"use client";
//File :- components/home-strengths.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";

import TestimonialCard, {
  type TestimonialCardProps,
} from "./about/testimonial-card";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type Stat = { value: string; label: string; borderColor: string };

const stats: Stat[] = [
  { value: "0", label: "FINISHED SESSIONS", borderColor: "#50C878" },
  { value: "676", label: "ENROLLED LEARNERS", borderColor: "#E91E63" },
  { value: "0", label: "ONLINE INSTRUCTORS", borderColor: "#EF6B6B" },
  { value: "95%", label: "SATISFACTION RATE", borderColor: "#231a3d" },
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
      "I am B. S. R. Prasad, father of B. Bhavish who is studying in 6th standard. We decided to join him in hostel as we both are Employees. There are many things that I admire about the school, Friendly and safe environment, brilliant teachers and modern learning. Along with regular academics, IIT & NEET are also being taught by excellent teachers. My son is actively participating in co- curricular activities like cricket ,Music (Drums) and he is doing well in it. I am very much satisfied with the hostel facilities and food. We are happy and fortunate to have chosen Montessori Prime School as our Son's centre of learning. Much Gratitude any many thanks!!!",
    name: "B. S. R. Prasad",
    role: "M. Sc Agriculture, Working as Manager QCFood Corporation of India",
  },
  {
    quote:
      "I am Aparna Suman as a parent we have made the right choice to enroll our Kid Elsy Neorah, Grade -2 in Montessori Prime School. It is a good school with a balance of academics and sports. Transport and canteen facilities are at their best. As a parent, I am happy with the teaching methodology, co-curricular activities, administration of tests and exams as well as discipline in the campus. I must say that the attitude of teaching staff and administrative staff is excellent, they are very caring and helpful.",
    name: "Dr. T. Suman Anaesthetist & Aparna M. Pharm.",
    role: "Parents",
  },
];

function StatCard({ value, label, borderColor }: Stat) {
  return (
    <div
      className="relative bg-[#fafafa] rounded-[4px] p-5 md:p-6 flex flex-col items-center justify-center text-center min-h-[140px] md:min-h-[160px] overflow-hidden"
      style={{ border: `1px dashed ${borderColor}` }}
    >
      {/* Faint background decoration */}
      <svg
        aria-hidden
        className="absolute inset-0 m-auto w-[55%] h-[55%] opacity-[0.08] pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#231a3d"
        strokeWidth="1.5"
      >
        <path d="M20 70 Q35 30 50 50 T80 30" strokeLinecap="round" />
        <path d="M25 75 L78 22" strokeLinecap="round" />
      </svg>

      <div
        className="relative text-[32px] md:text-[40px] font-bold tracking-tight leading-none"
        style={{ color: PINK }}
      >
        {value}
      </div>
      <div
        className="relative mt-2 text-[11px] md:text-[12px] font-bold tracking-[0.18em] uppercase"
        style={{ color: INK }}
      >
        {label}
      </div>
    </div>
  );
}

const YOUTUBE_ID = "FtRWQd_RwKk";

export default function HomeStrengths() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const active = testimonials[activeIdx];

  // Close modal on Esc and lock body scroll while open
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

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/home/cream-bg.jpg')" }}
    >
      {/* Animation keyframes */}
      <style>{`
        @keyframes home-video-horizontal {
          0%, 100% { transform: translateX(-0.21cm); }
          50% { transform: translateX(0.4cm); }
        }
        @keyframes home-video-vertical {
          0%, 100% { transform: translateY(-0.5cm); }
          50% { transform: translateY(0.5cm); }
        }
        @keyframes home-video-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .home-video-dots {
          animation: home-video-horizontal 10s ease-in-out infinite;
        }
        .home-video-lines {
          animation: home-video-vertical 10s ease-in-out infinite;
        }
        .home-video-circle {
          animation: home-video-spin 100s linear infinite;
        }
        @keyframes home-modal-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes home-modal-pop {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        .home-modal-backdrop {
          animation: home-modal-fade 280ms ease-out both;
        }
        .home-modal-content {
          animation: home-modal-pop 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            OUR STRENGTHS &amp; STATISTICS
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.2] tracking-tight"
            style={{ color: INK }}
          >
            The Best Choice For Your Child
          </h2>

          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            Montessori Prime School is one of the top CBSE schools in Warangal,
            located in Hanamkonda (Yellapur). We offer CBSE curriculum with
            modern classrooms, digital laboratories, experienced faculty and
            holistic development programs. Parents searching for the best
            school in Warangal trust Montessori Prime for quality education and
            student success.
          </p>

          {/* Testimonial carousel */}
          <div className="mt-8 relative">
            <TestimonialCard
              {...active}
              background="#ffffff"
              quoteColor="#7a7d4e"
            />

            {/* Vertical pagination dots (overlaid inside card on right edge) */}
            <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              {testimonials.map((_, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={isActive}
                    className="transition-all rounded-full flex items-center justify-center"
                    style={{
                      width: "14px",
                      height: "14px",
                      background: "transparent",
                      border: `2px solid ${isActive ? PINK : "#c8c8d0"}`,
                    }}
                  >
                    {isActive && (
                      <span
                        className="rounded-full"
                        style={{
                          width: "6px",
                          height: "6px",
                          background: PINK,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-[14px]">
            <span style={{ color: MUTED }}>Get into details now?</span>
            <Link
              href="/about/testimonials"
              className="font-semibold hover:underline"
              style={{ color: PINK }}
            >
              View All Testimonials
            </Link>
          </div>
        </div>

        {/* RIGHT — stats grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 w-full">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* VIDEO BLOCK */}
      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10 mt-16 md:mt-24">
        <div className="relative mx-auto w-full max-w-[760px]">
          {/* Horizontal dots — left, slides left/right */}
          <div
            aria-hidden
            className="home-video-dots absolute -left-24 md:-left-15 top-100 -translate-y-1/2 pointer-events-none z-0"
          >
            <Image
              src="/home/horizontal dots.png"
              alt=""
              width={110}
              height={220}
              className="opacity-90"
            />
          </div>

          {/* Yellow circle — top-right, rotates */}
          <div
            aria-hidden
            className="home-video-circle absolute -right-16 md:-right-24 -top-[-80px] pointer-events-none z-0"
            style={{ transformOrigin: "center" }}
          >
            <Image
              src="/home/yellow cirecle rotation.png"
              alt=""
              width={120}
              height={120}
            />
          </div>

          {/* Three lines — bottom-right, slides up/down */}
          <div
            aria-hidden
            className="home-video-lines absolute -right-16 md:-right-14 bottom-[-30] pointer-events-none z-0"
          >
            <Image
              src="/home/three lines.png"
              alt=""
              width={160}
              height={120}
            />
          </div>

          {/* Main video frame */}
          <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden shadow-lg z-10 bg-black">
            <Image
              src="/home/schook tumbnail.png"
              alt="Montessori Prime School"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => setVideoPlaying(true)}
              aria-label="Play school video"
              className="absolute inset-0 m-auto w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
              style={{ background: PINK }}
            >
              <Play size={28} fill="#ffffff" className="text-white ml-1" />
            </button>
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
          className="home-modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="home-modal-content relative w-full max-w-[960px] aspect-video"
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
