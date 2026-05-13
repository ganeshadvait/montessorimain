"use client";
//File :- components/header.tsx
import { useState } from "react";
import Link from "next/link";
import { UserRound, Globe, ChevronDown, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://www.montessorijnprime.com/montessori/prime/assets/img/logo/logo.png?_=1234";

const PINK = "#dd3e74";
const YELLOW = "#F4B919";

const aboutLinks: { label: string; href: string }[] = [
  { label: "About School", href: "/about" },
  { label: "Our Leader and Teachers", href: "/about/founders" },
  { label: "House System", href: "#" },
  { label: "School Calendar", href: "/about/calendar" },
  { label: "Career", href: "/careers" },
  { label: "Infrastructure and Facilities", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Documents", href: "#" },
  { label: "Virtual Tour", href: "#" },
];

const mainLinks = [
  { label: "Mandatory Public Disclosure", href: "#mandatory-public-disclosure" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="w-full bg-white relative">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 md:px-6 py-3 md:py-4 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_URL}
            alt="Montessori Prime School"
            className="h-[48px] md:h-[64px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <a
            href="#home"
            className="text-[16px] font-semibold relative pb-1"
            style={{ color: PINK }}
          >
            Home
          </a>

          {/* About Us with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-[16px] font-semibold pb-1 relative"
              style={{ color: PINK }}
            >
              About Us
              <ChevronDown size={16} strokeWidth={2.4} />
              {aboutOpen && (
                <span
                  className="absolute left-0 right-0 -bottom-[1px] h-[3px]"
                  style={{ background: PINK }}
                />
              )}
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="w-[260px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-3">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-6 py-2.5 text-[15px] text-[#1a1a1a] hover:text-[var(--pink)] transition-colors"
                      style={{ ["--pink" as string]: PINK }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
              style={{ ["--hover-pink" as string]: PINK }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex flex-col gap-2 items-end">
          {/* Application */}
          <a
            href="#application"
            className="inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 py-1.5 text-[15px] font-semibold text-white shadow-[0_4px_10px_rgba(233,30,99,0.3)]"
            style={{ background: PINK }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/25">
              <UserRound size={16} strokeWidth={2.4} />
            </span>
            Application
          </a>

          {/* Virtual Tour */}
          <a
            href="#virtual-tour"
            className="relative inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 py-1.5 text-[15px] font-semibold text-[#1a1a1a] shadow-[0_4px_10px_rgba(244,185,25,0.35)]"
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
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center p-2 -mr-2"
          style={{ color: PINK }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3">
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-[16px] font-semibold border-b border-black/5"
              style={{ color: PINK }}
            >
              Home
            </a>

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
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-[14px] text-[#1a1a1a]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[16px] font-semibold text-[#1a1a1a] border-b border-black/5"
              >
                {l.label}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2 pt-5 pb-2">
              <a
                href="#application"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 py-2 text-[15px] font-semibold text-white"
                style={{ background: PINK }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/25">
                  <UserRound size={16} strokeWidth={2.4} />
                </span>
                Application
              </a>
              <a
                href="#virtual-tour"
                onClick={() => setMobileOpen(false)}
                className="relative inline-flex items-center gap-2 rounded-lg pl-1.5 pr-5 py-2 text-[15px] font-semibold text-[#1a1a1a]"
                style={{ background: YELLOW }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/40">
                  <Globe size={16} strokeWidth={2.4} />
                </span>
                Virtual Tour
                <span
                  className="absolute -top-2 left-[120px] rounded-md px-1.5 py-0.5 text-[10px] font-bold text-white"
                  style={{ background: "#E53935" }}
                >
                  New
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
