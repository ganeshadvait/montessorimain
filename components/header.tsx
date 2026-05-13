"use client";
//File :- components/header.tsx
import { useState } from "react";
import { UserRound, Globe, ChevronDown } from "lucide-react";

const LOGO_URL =
  "https://www.montessorijnprime.com/montessori/prime/assets/img/logo/logo.png?_=1234";

const PINK = "#E91E63";
const YELLOW = "#F4B919";

const aboutLinks = [
  "About School",
  "Our Leader and Teachers",
  "House System",
  "School Calendar",
  "Career",
  "Infrastructure and Facilities",
  "Testimonials",
  "Documents",
  "Virtual Tour",
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_URL}
            alt="Montessori Prime School"
            className="h-[64px] w-auto"
          />
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-9">
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
                      key={link}
                      href="#"
                      className="block px-6 py-2.5 text-[15px] text-[#1a1a1a] hover:text-[var(--pink,#E91E63)] transition-colors"
                      style={{ ["--pink" as string]: PINK }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#mandatory-public-disclosure"
            className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
            style={{ ["--hover-pink" as string]: PINK }}
          >
            Mandatory Public Disclosure
          </a>
          <a
            href="#gallery"
            className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
            style={{ ["--hover-pink" as string]: PINK }}
          >
            Gallery
          </a>
          <a
            href="#events"
            className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
            style={{ ["--hover-pink" as string]: PINK }}
          >
            Events
          </a>
          <a
            href="#blogs"
            className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
            style={{ ["--hover-pink" as string]: PINK }}
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-[16px] font-semibold text-[#1a1a1a] hover:text-[var(--hover-pink)] transition-colors"
            style={{ ["--hover-pink" as string]: PINK }}
          >
            Contact Us
          </a>
        </nav>

        {/* CTA buttons */}
        <div className="flex flex-col gap-2 items-end">
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
      </div>

    
    </header>
  );
}
