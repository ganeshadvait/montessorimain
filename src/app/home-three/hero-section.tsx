//File :- /src/app/home-three/hero-section.tsx

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Child absorbed in practical life work",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    alt: "Children with sensorial materials",
  },
  {
    src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1200&q=80",
    alt: "A Montessori classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Child reading",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* Hero Content */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="pt-8 md:pt-14 max-w-[900px]">
          {/* Tag */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d73572] mb-6">
            <span className="text-white text-[13px] font-semibold tracking-[0.04em] uppercase">
              Admissions Open · 2026-27
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[78px] font-bold text-[#1a1a1a] leading-[1.05] tracking-[-0.03em] mb-6">
            Where children
            <br />
            learn by doing.
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[18px] text-[#555] leading-[1.7] max-w-[680px] mb-10">
            A Montessori school from KG-I through Grade X — prepared
            environments, mixed-age classrooms, and guides who follow the
            child. Quiet, purposeful, alive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#d73572] text-white text-[16px] font-semibold hover:bg-[#b82b60] transition-colors shadow-md shadow-[#d73572]/20"
            >
              Book a Tour
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-[#d73572] text-[#d73572] text-[16px] font-semibold hover:bg-[#d73572] hover:text-white transition-colors"
            >
              Our Programs
            </a>
          </div>
        </div>
      </main>

      {/* Image Grid — Full width, edge to edge */}
      <div className="w-full mt-12 md:mt-20 overflow-hidden">
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-5 px-3 md:px-5">
          {/* Image 1 — Rounded rectangle with magenta block on right */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[440px] md:flex-1 md:min-w-0 rounded-[20px] md:rounded-t-[28px] md:rounded-b-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-[45%] bg-[#d73572] rounded-bl-[20px] md:rounded-bl-[28px] z-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              className="absolute inset-0 w-full h-full object-cover object-top z-10"
            />
          </div>

          {/* Image 2 — Rounded rectangle */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[440px] md:flex-1 md:min-w-0 rounded-[20px] md:rounded-t-[28px] md:rounded-b-none overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Image 3 — Rounded rectangle with yellow block */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[440px] md:flex-1 md:min-w-0 rounded-[20px] md:rounded-t-[28px] md:rounded-b-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[35%] h-[50%] bg-[#ffb300] rounded-br-[20px] md:rounded-br-[28px] z-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              className="absolute inset-0 w-full h-full object-cover object-top z-10"
            />
          </div>

          {/* Image 4 — Circle */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[440px] md:flex-1 md:min-w-0 flex items-center md:items-start justify-center md:pt-8 overflow-hidden">
            <div className="w-[90%] md:w-[95%] aspect-square rounded-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImages[3].src}
                alt={heroImages[3].alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
