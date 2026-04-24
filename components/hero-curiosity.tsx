//File :- components/hero-curiosity.tsx
import { Phone, ArrowDown } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const POSTER_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=2000&q=80";
const BACKDROP_VIDEO = "https://assets.mixkit.co/videos/14956/14956-720.mp4";

type IconProps = SVGProps<SVGSVGElement>;

const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
  </svg>
);

const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials: { Icon: ComponentType<IconProps>; href: string; label: string }[] = [
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function HeroCuriosity() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black text-white">
      {/* MEDIA BACKDROP */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${POSTER_IMAGE})` }}
        />
        <video
          src={BACKDROP_VIDEO}
          poster={POSTER_IMAGE}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Legibility overlay */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* LEFT — social rail */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-5">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-white/85 hover:text-white transition-colors"
          >
            <Icon width={18} height={18} />
          </a>
        ))}
      </div>

      {/* RIGHT — scroll indicator */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3">
        <ArrowDown size={16} className="text-white/85" />
        <span
          className="text-[11px] uppercase tracking-[0.28em] text-white/85"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
      </div>

      {/* BOTTOM — content card */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] md:w-[calc(100%-8rem)] max-w-[1000px] z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md px-6 py-7 md:px-10 md:py-9">
          <div>
            <span
              className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--palette-coral)" }}
            >
              Admissions Open 2026-27
            </span>
            <h1 className="mt-3 text-[32px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-tight">
              Where Curiosity Excels!
            </h1>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <span className="text-[14px] text-white/85">
              Pre-Nursery to Grade XII
            </span>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(223,51,80,0.55)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--palette-coral)" }}
            >
              <Phone size={18} strokeWidth={2.2} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
