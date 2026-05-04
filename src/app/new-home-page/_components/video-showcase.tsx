"use client";
//File :- src/app/new-home-page/_components/video-showcase.tsx
import { useState } from "react";
import { Play } from "lucide-react";

const POSTER_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1800&q=80";
const VIDEO_SRC = "https://assets.mixkit.co/videos/14956/14956-720.mp4";

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes ring-pulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.55; }
          100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0;    }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1100px]">
        {/* DECORATIVE — top right outline circle */}
        <div
          aria-hidden
          className="absolute -top-4 right-2 w-14 h-14 rounded-full border-2 hidden md:block"
          style={{ borderColor: "var(--palette-coral)" }}
        >
          <div
            className="absolute inset-2 rounded-full border-2"
            style={{ borderColor: "var(--palette-coral)" }}
          />
        </div>

        {/* DECORATIVE — yellow speckled circle right */}
        <div
          aria-hidden
          className="hidden md:block absolute right-2 top-[20%] w-24 h-24 rounded-full"
          style={{
            background: "var(--palette-sun)",
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.18) 1.5px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.15) 1.5px, transparent 2px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.18) 1.5px, transparent 2px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.15) 1.5px, transparent 2px)",
          }}
        />

        {/* DECORATIVE — slanted lines bottom right */}
        <svg
          aria-hidden
          className="hidden md:block absolute right-0 bottom-12 w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
        >
          <line
            x1="35"
            y1="0"
            x2="100"
            y2="65"
            stroke="var(--palette-ink)"
            strokeWidth="2"
          />
          <line
            x1="55"
            y1="0"
            x2="100"
            y2="45"
            stroke="var(--palette-ink)"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="55"
            y1="20"
            x2="100"
            y2="65"
            stroke="var(--palette-coral)"
            strokeWidth="2"
          />
        </svg>

        {/* DECORATIVE — dotted grid bottom left */}
        <div
          aria-hidden
          className="hidden md:block absolute left-0 bottom-2 w-32 h-40 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.35) 2px, transparent 2.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* VIDEO CARD */}
        <div className="relative mx-auto md:px-12 lg:px-16">
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black"
            style={{
              boxShadow: "0 30px 70px -30px rgba(29,29,31,0.4)",
            }}
          >
            {playing ? (
              <video
                src={VIDEO_SRC}
                poster={POSTER_IMAGE}
                autoPlay
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={POSTER_IMAGE}
                  alt="Montessori Prime School campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15" />

                {/* Play button */}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play campus tour video"
                  className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {/* Pulse rings */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                    style={{
                      borderColor: "var(--palette-magenta)",
                      animation: "ring-pulse 2s ease-out infinite",
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                    style={{
                      borderColor: "var(--palette-magenta)",
                      animation: "ring-pulse 2s ease-out infinite 1s",
                    }}
                  />
                  {/* Core button */}
                  <span
                    className="relative flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--palette-magenta)",
                      boxShadow:
                        "0 14px 40px -10px rgba(215,53,114,0.55), 0 0 0 8px rgba(255,255,255,0.4)",
                    }}
                  >
                    <Play
                      size={26}
                      fill="white"
                      stroke="white"
                      strokeWidth={1.5}
                      className="ml-1"
                    />
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
