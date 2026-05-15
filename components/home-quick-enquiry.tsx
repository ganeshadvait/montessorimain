"use client";
//File :- components/home-quick-enquiry.tsx
import { useState, FormEvent } from "react";
import { UserRound } from "lucide-react";

const PINK = "#E91E63";
const ORANGE = "#F4831C";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const SHAPE_LEFT = "/home/sketboard pink.png";
const SHAPE_RIGHT = "/home/bulb thread paper rocket.png";

export default function HomeQuickEnquiry() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;
    // Hook into your real backend here.
    console.log({ name, mobile });
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ background: "#E9EAF3" }}
    >
      <style>{`
        @keyframes enquiry-skateboard-slide {
          0%, 100% { transform: translateX(-0.4cm); }
          50% { transform: translateX(0.4cm); }
        }
        .enquiry-skateboard {
          animation: enquiry-skateboard-slide 10s ease-in-out infinite;
        }
      `}</style>

      {/* Floating decorative — skateboard top-left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SHAPE_LEFT}
        alt=""
        aria-hidden
        className="enquiry-skateboard pointer-events-none absolute left-4 md:left-12 top-4 md:top-8 w-[110px] md:w-[150px] select-none"
      />

      {/* Floating decorative — paper plane right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SHAPE_RIGHT}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-[200px] md:w-[600px] select-none"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT — copy */}
        <div>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: ORANGE }}
          >
            QUICK ENQUIRY
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[36px] font-bold tracking-tight"
            style={{ color: INK }}
          >
            Get In Touch
          </h2>
          <p
            className="mt-4 max-w-[420px] text-[14px] md:text-[15px] leading-[1.75]"
            style={{ color: MUTED }}
          >
            Montessori Prime School aims primarily at the education of young
            children without distinction of imparting education to school.
          </p>
        </div>

        {/* RIGHT — form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full bg-white px-5 py-4 text-[15px] outline-none border border-transparent focus:border-[#E91E63] transition-colors"
            style={{ color: INK }}
          />
          <input
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            className="w-full bg-white px-5 py-4 text-[15px] outline-none border border-transparent focus:border-[#E91E63] transition-colors"
            style={{ color: INK }}
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center gap-2 w-fit px-5 py-2.5 text-[14px] font-semibold text-white"
            style={{ background: PINK }}
          >
            <UserRound size={16} strokeWidth={2.4} />
            Get In Touch
          </button>
        </form>
      </div>
    </section>
  );
}
