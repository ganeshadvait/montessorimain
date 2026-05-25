//File :- src/app/not-found.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PINK = "#E91E63";
const ORANGE = "#F4831C";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Application", href: "/application" },
  { label: "Contact", href: "/contact" },
];

const galleryPeeks = [
  "/new-gallery-images/1.jpg",
  "/new-gallery-images/(14).jpg",
  "/new-gallery-images/IMG_5345.jpg",
  "/new-gallery-images/(83).jpg",
];

export default function NotFound() {
  return (
    <main
      className="relative min-h-[80vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8EE 0%, #FFFFFF 50%, #FFF1F4 100%)",
      }}
    >
      {/* Decorative blob — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(244,131,28,0.28), transparent 70%)",
        }}
      />
      {/* Decorative blob — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(233,30,99,0.22), transparent 70%)",
        }}
      />
      {/* Subtle dot — top left */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 left-10 w-3 h-3 rounded-full opacity-50"
        style={{ background: PINK }}
      />
      {/* Subtle dot — bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 right-14 w-4 h-4 rounded-full opacity-50"
        style={{ background: ORANGE }}
      />

      <div className="relative mx-auto max-w-[960px] px-6 md:px-10 py-16 md:py-24">
        {/* 404 heading block */}
        <div className="text-center">
          <div
            className="text-[96px] md:text-[140px] font-black leading-[0.9] tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${PINK} 0%, ${ORANGE} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>
          <h1
            className="mt-3 text-[26px] md:text-[34px] font-bold tracking-tight"
            style={{ color: INK }}
          >
            Nothing Found Here
          </h1>
          <p
            className="mt-3 max-w-[520px] mx-auto text-[14px] md:text-[15px] leading-[1.7]"
            style={{ color: MUTED }}
          >
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have
            moved. Try one of the links below — or take a quick peek inside our
            school.
          </p>
        </div>

        {/* Pill links */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-5 py-2 text-[13px] font-semibold rounded-full bg-white/80 backdrop-blur border border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-sm transition-all"
              style={{ color: INK }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Book appointment CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-white rounded-full hover:opacity-95 hover:shadow-xl active:scale-[0.98] transition-all"
            style={{
              background: `linear-gradient(135deg, ${PINK} 0%, ${ORANGE} 100%)`,
              boxShadow: "0 8px 24px rgba(233,30,99,0.32)",
            }}
          >
            Book an Appointment
            <ArrowRight
              size={16}
              strokeWidth={2.4}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Gallery peek */}
        <div className="mt-16 md:mt-20">
          <div className="text-center">
            <span
              className="text-[12px] font-bold tracking-[0.2em] uppercase"
              style={{ color: ORANGE }}
            >
              A glimpse of our school
            </span>
            <h2
              className="mt-2 text-[18px] md:text-[20px] font-bold"
              style={{ color: INK }}
            >
              While you&rsquo;re here…
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryPeeks.map((src) => (
              <Link
                key={src}
                href="/gallery"
                className="block aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/gallery"
              className="text-[13px] font-semibold underline-offset-4 hover:underline"
              style={{ color: PINK }}
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
