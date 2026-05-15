//File :- components/home-gallery.tsx
import Image from "next/image";
import Link from "next/link";
import { Images } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const galleryImages: { src: string; alt: string }[] = [
  { src: "/montassori.jpg", alt: "Montessori Prime School campus" },
  { src: "/aboutus college img.png", alt: "Students group photo" },
  { src: "/carrers bg image.jpg", alt: "Students walking" },
  { src: "/montassori.jpg", alt: "Sports event" },
  { src: "/aboutus college img.png", alt: "Cultural event" },
  { src: "/carrers bg image.jpg", alt: "Students gathering" },
  { src: "/montassori.jpg", alt: "Student in uniform" },
  { src: "/aboutus college img.png", alt: "School building" },
];

export default function HomeGallery() {
  // Duplicate the strip so the marquee loops seamlessly
  const strip = [...galleryImages, ...galleryImages];

  return (
    <section
      className="w-full py-16 md:py-20 overflow-hidden"
      style={{ background: "#f3ede4" }}
    >
      <style>{`
        @keyframes gallery-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-strip {
          animation: gallery-marquee 40s linear infinite;
        }
        .gallery-strip:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 text-center">
        <span
          className="text-[13px] font-bold uppercase tracking-[0.18em]"
          style={{ color: PINK }}
        >
          OUR GALLERY
        </span>
        <h2
          className="mt-2 text-[28px] md:text-[34px] lg:text-[38px] font-bold tracking-tight"
          style={{ color: INK }}
        >
          Our Best Gallery From MPS
        </h2>
        <p
          className="mt-3 text-[15px] md:text-[16px] leading-[1.85] max-w-[700px] mx-auto"
          style={{ color: MUTED }}
        >
          Students learns in a unique, innovative and practical orientation
          methodologies.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-10 md:mt-12">
        <div className="gallery-strip flex gap-5 md:gap-6 w-max">
          {strip.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] h-[280px] md:h-[320px] rounded-md overflow-hidden bg-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
          style={{ background: PINK, color: "#ffffff" }}
        >
          <Images size={16} />
          Explore Gallery
        </Link>
      </div>
    </section>
  );
}
