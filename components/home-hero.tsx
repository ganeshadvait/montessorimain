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
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "500px" }}
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
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Prev */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/70 hover:bg-white text-[#231a3d] backdrop-blur shadow-md transition-colors"
      >
        <ChevronLeft size={26} strokeWidth={2.4} />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/70 hover:bg-white text-[#231a3d] backdrop-blur shadow-md transition-colors"
      >
        <ChevronRight size={26} strokeWidth={2.4} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleDot(i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === active ? 28 : 8,
              background: i === active ? "#E91E63" : "rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
