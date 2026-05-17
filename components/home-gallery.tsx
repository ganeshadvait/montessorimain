//File :- components/home-gallery.tsx
import Image from "next/image";
import Link from "next/link";
import { Images } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const galleryImages: { src: string; alt: string }[] = [
  { src: "/home-galleryimages/academic-year-2024-25.jpg", alt: "Academic Year 2024-25" },
  { src: "/home-galleryimages/diwali-2024.jpg", alt: "Diwali Celebrations 2024" },
  { src: "/home-galleryimages/diwali-pre-2024.jpg", alt: "Diwali Pre-Celebrations 2024" },
  { src: "/home-galleryimages/show-and-tell.jpg", alt: "Show and Tell" },
  { src: "/home-galleryimages/balloon-experiments.jpg", alt: "Balloon Experiments" },
  { src: "/home-galleryimages/dussehra-pre.jpg", alt: "Dussehra Pre Celebrations" },
  { src: "/home-galleryimages/campus-tour-2024.jpg", alt: "Campus Tour 2024" },
  { src: "/home-galleryimages/pongal-sankranthi-2024-a.jpg", alt: "Pongal & Sankranthi 2024" },
  { src: "/home-galleryimages/pongal-sankranthi-2024-b.jpg", alt: "Pongal & Sankranthi 2024" },
  { src: "/home-galleryimages/award-ceremony-hostelites.jpg", alt: "Award Ceremony for Hostelites" },
  { src: "/home-galleryimages/elysium-annual-day-2024.jpg", alt: "Elysium Annual Day 2024" },
  { src: "/home-galleryimages/holi-2024.jpg", alt: "Holi Celebrations 2024" },
  { src: "/home-galleryimages/pongal-sankranthi-2024-c.jpg", alt: "Pongal & Sankranthi 2024" },
  { src: "/home-galleryimages/ptm-2024.jpg", alt: "Parent Teacher Meet 2024" },
  { src: "/home-galleryimages/republic-day-2024.jpg", alt: "Republic Day 2024" },
  { src: "/home-galleryimages/telangana-formation-2024.jpg", alt: "Telangana Formation Day 2024" },
  { src: "/home-galleryimages/euphoria-2025-kodada.jpg", alt: "Euphoria 2025 Kodada" },
];

export default function HomeGallery() {
  // Duplicate the strip so the marquee loops seamlessly
  const strip = [...galleryImages, ...galleryImages];

  return (
    <section
      className="w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ background: "#f3ede4" }}
    >
      <style>{`
        @keyframes gallery-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-strip {
          animation: gallery-marquee 60s linear infinite;
        }
        .gallery-strip:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 text-center">
        <span
          className="text-[13px] font-bold uppercase tracking-[0.22em]"
          style={{ color: PINK }}
        >
          OUR GALLERY
        </span>
        <h2
          className="mt-4 text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight"
          style={{ color: INK }}
        >
          Our Best Gallery From MPS
        </h2>
        <p
          className="mt-5 text-[15px] md:text-[16px] leading-[1.85] max-w-[640px] mx-auto"
          style={{ color: MUTED }}
        >
          Students learn in a unique, innovative and practical orientation
          methodology.
        </p>
      </div>

      {/* Carousel — edge to edge with subtle side fades */}
      <div className="relative mt-14 md:mt-20">
        {/* Edge fade — left */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style={{
            background:
              "linear-gradient(to right, #f3ede4 0%, rgba(243,237,228,0) 100%)",
          }}
        />
        {/* Edge fade — right */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style={{
            background:
              "linear-gradient(to left, #f3ede4 0%, rgba(243,237,228,0) 100%)",
          }}
        />

        <div className="gallery-strip flex gap-6 md:gap-8 w-max px-4 md:px-6">
          {strip.map((item, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-[240px] md:w-[300px] lg:w-[340px] h-[300px] md:h-[360px] lg:h-[400px] rounded-xl overflow-hidden bg-white shadow-[0_10px_28px_rgba(35,26,61,0.10)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 340px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 md:mt-20 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
          style={{ background: PINK, color: "#ffffff" }}
        >
          <Images size={16} />
          Explore Gallery
        </Link>
      </div>
    </section>
  );
}
