"use client";
//File :- components/home-hero.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/hero-secimages/imageone.png",
  "/hero-secimages/imagetwo.png",
  "/hero-secimages/imagethree.png",
  "/hero-secimages/imagefour.png",
  "/hero-secimages/imagefive.png",
  "/hero-secimages/imagesix.png",
  "/hero-secimages/imageseven.png",
  "/hero-secimages/imageeight.png",
];

const AUTO_INTERVAL = 5000;

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    setActive((i + slides.length) % slides.length);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Restart timer when user navigates manually
  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTO_INTERVAL);
  };

  const handleNext = () => {
    next();
    restartTimer();
  };
  const handlePrev = () => {
    prev();
    restartTimer();
  };
  const handleDot = (i: number) => {
    goTo(i);
    restartTimer();
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black aspect-[16/5] min-h-[180px] sm:min-h-[220px] max-h-[640px]"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Prev */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        className="group absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-dashed border-[#E91E63] p-1 sm:p-1.5 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E63]/40"
      >
        <span className="flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[#E91E63] shadow-sm group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2.5} />
        </span>
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="group absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-dashed border-[#E91E63] p-1 sm:p-1.5 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E63]/40"
      >
        <span className="flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[#E91E63] shadow-sm group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2.5} />
        </span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleDot(i)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              i === active
                ? "w-6 sm:w-7 bg-[#E91E63]"
                : "w-1.5 sm:w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
