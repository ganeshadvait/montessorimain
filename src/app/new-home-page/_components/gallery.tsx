//File :- src/app/new-home-page/_components/gallery.tsx
import { ArrowRight, Images } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span: string;
};

const items: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1400&q=80",
    alt: "Classroom in session",
    caption: "Modern Classrooms",
    span: "col-span-2 md:col-span-3 row-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Annual Day performance",
    caption: "Annual Day",
    span: "col-span-2 md:col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Independent reading time",
    caption: "Reading",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    alt: "Hands-on learning",
    caption: "Sensorial",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    alt: "Library and books",
    caption: "Library",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
    alt: "Group work and collaboration",
    caption: "Collaboration",
    span: "col-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ background: "#faf3ec" }}
    >
      {/* Ambient palette glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, rgba(215,53,114,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto max-w-[640px] text-center">
          <span
            className="text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Our Gallery
          </span>
          <h2
            className="mt-5 text-[34px] md:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            Moments from{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-teal)",
              }}
            >
              MPS
            </span>
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "var(--palette-muted)" }}
          >
            A glimpse into the unique, innovative, and practical learning
            environments that shape every day at Montessori Prime.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {items.map((item) => (
            <a
              key={item.src}
              href="#gallery-full"
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              style={{
                boxShadow: "0 18px 40px -22px rgba(29,29,31,0.25)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient on hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[12px] font-semibold"
                  style={{ color: "var(--palette-ink)" }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--palette-magenta)" }}
                  />
                  {item.caption}
                </span>
              </div>

              {/* Top-right corner accent dot */}
              <span
                aria-hidden
                className="absolute top-3 right-3 h-2 w-2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--palette-sun)" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14 flex justify-center">
          <a
            href="#gallery-full"
            className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-[0_12px_30px_-10px_rgba(215,53,114,0.5)]"
            style={{ background: "var(--palette-magenta)" }}
          >
            <Images size={16} strokeWidth={2.4} />
            EXPLORE GALLERY
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
