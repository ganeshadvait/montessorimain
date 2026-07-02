"use client";
//File :- components/header-variants.tsx
// Design-comparison variants of the site header. Same design language
// (logo, colors, links, CTAs) as components/header.tsx — only the layout
// arrangement differs. Rendered together in src/app/header-variants/page.tsx.
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  UserRound,
  Globe,
  ChevronDown,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

const LOGO_URL =
  "https://admissions.montessorigroups.com/School%20Logo_MPS.png";

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

const resourceLinks: { label: string; href: string }[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/news" },
];

/* ---------- Shared pieces ---------- */

function Logo({ className = "h-[48px] md:h-[64px]" }: { className?: string }) {
  return (
    <Link href="/" className="flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_URL}
        alt="Montessori Prime School"
        className={`${className} w-auto`}
      />
    </Link>
  );
}

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-[16px] font-semibold pb-1 relative whitespace-nowrap"
        style={{ color: PINK }}
      >
        {label}
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
            {links.map((link) => (
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
      <Link
        href="/"
        className="text-[16px] font-semibold pb-1"
        style={{ color: INK }}
      >
        Home
      </Link>
      <NavDropdown label="About Us" links={aboutLinks} />
      <Link
        href="/mandatory-public-disclosure"
        className="text-[16px] font-semibold transition-colors hover:text-[#dd3e74] whitespace-nowrap"
        style={{ color: INK }}
      >
        Mandatory Public Disclosure
      </Link>
      <NavDropdown label="Resources" links={resourceLinks} />
      <Link
        href="/contact"
        className="text-[16px] font-semibold transition-colors hover:text-[#dd3e74]"
        style={{ color: INK }}
      >
        Contact Us
      </Link>
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

/* ---------- Site header — two-tier with top utility bar ---------- */

export function HeaderVariantB() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileResourcesOpen(false);
  };

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top utility bar — hidden on mobile */}
      <div className="hidden md:block text-white" style={{ background: INK }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6 py-2 text-[13px]">
          <div className="flex items-center gap-5">
            <a
              href="tel:08065064810"
              className="flex items-center gap-1.5 hover:opacity-80"
            >
              <Phone size={14} strokeWidth={2.2} /> 08065064810
            </a>
            <a
              href="mailto:info@montessorijnprime.com"
              className="flex items-center gap-1.5 hover:opacity-80"
            >
              <Mail size={14} strokeWidth={2.2} /> info@montessorijnprime.com
            </a>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <Link href="https://admissions.montessorigroups.com/" className="hover:opacity-80">
              Admissions
            </Link>
            <span className="opacity-40">|</span>
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main row: logo + nav (left), CTAs (right) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 md:px-6 py-3 border-b border-black/5">
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2 md:gap-3">
            <Logo />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://admissions.montessorigroups.com/CBSE%20LOGO.svg"
              alt="CBSE Affiliated"
              className="h-[42px] md:h-[56px] w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <ApplicationButton />
            <VirtualTourButton />
          </div>

          {/* Mobile: Call + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:08065064810"
              aria-label="Call 08065064810"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-sm"
              style={{ background: PINK }}
            >
              <Phone size={18} strokeWidth={2.4} />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 transition-colors hover:border-[#dd3e74]"
              style={{ color: PINK }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-3 text-[16px] font-semibold border-b border-black/5"
              style={{ color: INK }}
            >
              Home
            </Link>

            {/* About Us — collapsible */}
            <div className="border-b border-black/5">
              <button
                type="button"
                onClick={() => setMobileAboutOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-[16px] font-semibold"
                style={{ color: PINK }}
              >
                About Us
                <ChevronDown
                  size={18}
                  strokeWidth={2.4}
                  className={`transition-transform ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 pb-3 flex flex-col">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="py-2 text-[14px] text-[#1a1a1a]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/mandatory-public-disclosure"
              onClick={closeMenu}
              className="py-3 text-[16px] font-semibold border-b border-black/5"
              style={{ color: INK }}
            >
              Mandatory Public Disclosure
            </Link>

            {/* Resources — collapsible */}
            <div className="border-b border-black/5">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-[16px] font-semibold"
                style={{ color: PINK }}
              >
                Resources
                <ChevronDown
                  size={18}
                  strokeWidth={2.4}
                  className={`transition-transform ${
                    mobileResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 pb-3 flex flex-col">
                  {resourceLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="py-2 text-[14px] text-[#1a1a1a]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 text-[16px] font-semibold border-b border-black/5"
              style={{ color: INK }}
            >
              Contact Us
            </Link>

            {/* CTAs */}
            <div className="flex flex-col gap-2 pt-5 pb-2">
              <ApplicationButton size="py-2" />
              <VirtualTourButton size="py-2" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
