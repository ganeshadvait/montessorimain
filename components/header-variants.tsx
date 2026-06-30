"use client";
//File :- components/header-variants.tsx
// Design-comparison variants of the site header. Same design language
// (logo, colors, links, CTAs) as components/header.tsx — only the layout
// arrangement differs. Rendered together in src/app/header-variants/page.tsx.
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserRound, Globe, ChevronDown, Phone, Mail, Menu, X } from "lucide-react";

const LOGO_URL = "/headerlogo.png";

const PINK = "#dd3e74";
const YELLOW = "#F4B919";
const INK = "#1a1a1a";

const aboutLinks: { label: string; href: string }[] = [
  { label: "About School", href: "/about" },
  { label: "Our Leader and Teachers", href: "/about/founders" },
  { label: "House System", href: "/about/house-systems" },
  { label: "School Calendar", href: "/about/calendar" },
  { label: "Career", href: "/careers" },
  { label: "Infrastructure and Facilities", href: "/about/infrastructure" },
  { label: "Testimonials", href: "/about/testimonials" },
  { label: "Documents", href: "/about/documents" },
  { label: "Virtual Tour", href: "/about/virtualtour" },
];

const mainLinks: { label: string; href: string }[] = [
  { label: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

/* ---------- Shared pieces ---------- */

function Logo({ className = "h-[48px] md:h-[64px]" }: { className?: string }) {
  return (
    <Link href="/" className="flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_URL} alt="Montessori Prime School" className={`${className} w-auto`} />
    </Link>
  );
}

function AboutDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-[16px] font-semibold pb-1 relative"
        style={{ color: PINK }}
      >
        About Us
        <ChevronDown size={16} strokeWidth={2.4} />
        {open && (
          <span
            className="absolute left-0 right-0 -bottom-[1px] h-[3px]"
            style={{ background: PINK }}
          />
        )}
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <div className="w-[260px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-3">
            {aboutLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-2.5 text-[15px] text-[#1a1a1a] hover:text-[#dd3e74] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-[16px] font-semibold pb-1" style={{ color: INK }}>
        Home
      </Link>
      <AboutDropdown />
      {mainLinks.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="text-[16px] font-semibold transition-colors hover:text-[#dd3e74]"
          style={{ color: INK }}
        >
          {l.label}
        </Link>
      ))}
    </>
  );
}

function ApplicationButton({ size = "py-1.5" }: { size?: string }) {
  return (
    <Link
      href="/application"
      className={`inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 ${size} text-[15px] font-semibold text-white shadow-[0_4px_10px_rgba(233,30,99,0.3)]`}
      style={{ background: PINK }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/25">
        <UserRound size={16} strokeWidth={2.4} />
      </span>
      Application
    </Link>
  );
}

function VirtualTourButton({ size = "py-1.5" }: { size?: string }) {
  return (
    <Link
      href="/about/virtualtour"
      className={`relative inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 ${size} text-[15px] font-semibold text-[#1a1a1a] shadow-[0_4px_10px_rgba(244,185,25,0.35)]`}
      style={{ background: YELLOW }}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/40">
        <Globe size={16} strokeWidth={2.4} />
      </span>
      Virtual Tour
      <span
        className="absolute -top-2 -right-2 rounded-md px-1.5 py-0.5 text-[10px] font-bold text-white"
        style={{ background: "#E53935" }}
      >
        New
      </span>
    </Link>
  );
}

// lucide-react in this project ships no brand icons, so use an inline SVG.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_HREF =
  "https://wa.me/917700053030?text=Hi%2C%20I%27m%20interested%20in%20admissions";

/* ---------- Variant A — Single Row (compact, inline CTAs) ---------- */

export function HeaderVariantA() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 md:px-6 py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLinks />
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ApplicationButton />
          <VirtualTourButton />
        </div>
      </div>
    </header>
  );
}

/* ---------- Variant B — Two-tier with top utility bar ---------- */

export function HeaderVariantB() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mega menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const exploreLinks = [{ label: "Home", href: "/" }, ...mainLinks];

  return (
    <header className="relative w-full bg-white">
      {/* Top utility bar — hidden on mobile */}
      <div className="hidden md:block text-white" style={{ background: INK }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6 py-2 text-[13px]">
          <div className="flex items-center gap-5">
            <a href="tel:7700053030" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone size={14} strokeWidth={2.2} /> +91 77000 53030
            </a>
            <a
              href="mailto:info@montessorijnprime.com"
              className="flex items-center gap-1.5 hover:opacity-80"
            >
              <Mail size={14} strokeWidth={2.2} /> info@montessorijnprime.com
            </a>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <Link href="/careers" className="hover:opacity-80">Careers</Link>
            <span className="opacity-40">|</span>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main row: logo + menu button (left), CTAs (right) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 md:px-6 py-3 border-b border-black/5">
        <div className="flex items-center gap-5">
          <Logo />
          {/* Menu button — desktop, next to logo */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-[15px] font-semibold transition-colors hover:border-[#dd3e74]"
            style={{ color: PINK }}
          >
            {menuOpen ? <X size={18} strokeWidth={2.4} /> : <Menu size={18} strokeWidth={2.4} />}
            <span>Menu</span>
          </button>
        </div>

        {/* Desktop: CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <ApplicationButton />
          <VirtualTourButton />
        </div>

        {/* Mobile: WhatsApp + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-sm"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 transition-colors hover:border-[#dd3e74]"
            style={{ color: PINK }}
          >
            {menuOpen ? <X size={18} strokeWidth={2.4} /> : <Menu size={18} strokeWidth={2.4} />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {menuOpen && (
        <>
          {/* Backdrop — click outside to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 right-0 top-full z-50 border-t border-black/5 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
              {/* Explore */}
              <div>
                <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                  Explore
                </h3>
                <ul className="space-y-1">
                  {exploreLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-md px-3 pl-0 py-2 text-[15px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#dd3e74]/5 hover:text-[#dd3e74]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Us — spans two columns */}
              <div className="md:col-span-2">
                <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                  About Us
                </h3>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                  {aboutLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-md px-3 pl-0 py-2 text-[15px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#dd3e74]/5 hover:text-[#dd3e74]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTAs inside menu for mobile (hidden on desktop where they show in the row) */}
                <div className="mt-6 flex flex-wrap gap-3 md:hidden">
                  <ApplicationButton size="py-2" />
                  <VirtualTourButton size="py-2" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

/* ---------- Variant C — Centered logo, nav underneath ---------- */

export function HeaderVariantC() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 py-3">
        {/* Row 1: centered logo, CTAs pinned right */}
        <div className="relative flex items-center justify-center">
          <Logo />
          <div className="absolute right-0 hidden md:flex items-center gap-3">
            <ApplicationButton />
            <VirtualTourButton />
          </div>
        </div>
        {/* Row 2: centered nav */}
        <nav className="mt-3 hidden lg:flex items-center justify-center gap-7 xl:gap-9">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
