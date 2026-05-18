"use client";
//File :- components/home-chairman-popup.tsx
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const INK = "#231a3d";
const MUTED = "#5e5e6e";
const NAME_BLUE = "#1F8BE0";
const CLOSE_RED = "#EF4444";

const CHAIRMAN_IMAGE = "/home/chairman jose nedumthundam.webp";

export default function HomeChairmanPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="chairman-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close Chairman's Message"
        onClick={() => setOpen(false)}
        className="absolute inset-0 w-full h-full bg-black/55 backdrop-blur-[2px] cursor-default"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-[760px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:opacity-90 transition-opacity"
          style={{ background: CLOSE_RED }}
        >
          <X size={18} strokeWidth={2.6} />
        </button>

        <div className="px-6 md:px-10 pt-8 pb-8 md:pb-10">
          <h2
            id="chairman-popup-title"
            className="text-center text-[22px] md:text-[26px] font-semibold tracking-tight"
            style={{ color: INK }}
          >
            Chairman&rsquo;s Message
          </h2>

          <div className="mt-6 md:mt-8 grid md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-start">
            {/* Left — portrait */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CHAIRMAN_IMAGE}
                  alt="Shri. Jose Nedumthundam, Chairman & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="mt-4 text-[15px] md:text-[16px] font-semibold leading-tight"
                style={{ color: NAME_BLUE }}
              >
                Shri. Jose Nedumthundam
              </div>
              <div
                className="mt-1 text-[13px] md:text-[14px]"
                style={{ color: INK }}
              >
                Chairman &amp; Founder
              </div>
            </div>

            {/* Right — message */}
            <div
              className="space-y-4 text-[14px] md:text-[15px] leading-[1.75]"
              style={{ color: MUTED }}
            >
              <p>
                At Montessori Prime School, our vision is to provide a
                nurturing and enriching environment where students can learn,
                grow, and excel. Our Yellapur branch is committed to delivering
                quality education that prepares children for a bright and
                successful future.
              </p>
              <p>
                We aim to foster creativity, discipline, responsibility, and
                empathy in our students, shaping them into ethical and
                responsible citizens of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
