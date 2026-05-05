//File :- components/Headers/gsapexpanding-header.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const wings = [
  {
    src: "https://admissions.montessorigroups.com/pre%20primary%20wing.svg",
    alt: "Pre-Primary Wing — Grade KG-I, KG-II, KG-III",
    border: "#A6D8D6",
  },
  {
    src: "https://admissions.montessorigroups.com/primary%20wing.svg",
    alt: "Primary Wing — Grade I to V",
    border: "#F5B6C9",
  },
  {
    src: "https://admissions.montessorigroups.com/high%20school.svg",
    alt: "High School — Grade VI to X",
    border: "#F5D697",
  },
];

export default function GsapExpandingHeader() {
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [wingIndex, setWingIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWingIndex((i) => (i + 1) % wings.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const toggleMenu = useCallback(() => {
    if (timelineRef.current?.isActive()) return;

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });
    timelineRef.current = tl;

    if (!isOpen) {
      // ---- OPEN ----
      // Two lines → X
      tl.to(
        bar1Ref.current,
        {
          top: "50%",
          y: "-50%",
          rotation: 45,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0,
      );
      tl.to(
        bar2Ref.current,
        {
          bottom: "50%",
          y: "50%",
          rotation: -45,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0,
      );

      // Expand the island
      tl.to(
        navRef.current,
        {
          maxWidth: "92rem",
          width: "calc(100% - 1rem)",
          duration: 1,
          ease: "power4.out",
        },
        0,
      );
      tl.to(
        headerRef.current,
        {
          borderRadius: "12px 12px 0 0",
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      );

      // Reveal mega menu
      tl.fromTo(
        menuContentRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        0.15,
      );

      // Stagger in menu columns
      tl.fromTo(
        ".menu-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.3,
      );

      // Stagger in menu links
      tl.fromTo(
        ".menu-link",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        0.45,
      );

      // Featured card
      tl.fromTo(
        ".featured-card",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.5,
      );
    } else {
      // ---- CLOSE ----
      // X → Two lines
      tl.to(
        bar1Ref.current,
        {
          top: "6px",
          y: "0%",
          rotation: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0,
      );
      tl.to(
        bar2Ref.current,
        {
          bottom: "6px",
          y: "0%",
          rotation: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0,
      );

      // Fade out content
      tl.to(
        ".menu-link, .menu-col, .featured-card",
        {
          y: -15,
          opacity: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.in",
        },
        0,
      );

      // Collapse mega menu
      tl.to(
        menuContentRef.current,
        {
          height: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        },
        0.2,
      );

      // Shrink island back
      tl.to(
        navRef.current,
        {
          maxWidth: "48rem",
          duration: 0.8,
          ease: "power4.out",
        },
        0.25,
      );
      tl.to(
        headerRef.current,
        {
          borderRadius: "12px",
          duration: 0.5,
          ease: "power2.out",
        },
        0.25,
      );
    }

    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-3xl "
    >
      {/* Header Bar */}
      <div
        ref={headerRef}
        className="bg-white border border-[#e5e5e5] rounded-xl px-6 py-3 flex items-center justify-between relative z-10"
      >
        {/* Left - Menu */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-3 text-black hover:text-[var(--palette-magenta)] transition-colors cursor-pointer"
        >
          <div className="w-5 h-5 relative flex items-center justify-center">
            <div
              ref={bar1Ref}
              className="absolute w-full h-[2px] bg-black rounded-full top-[6px]"
            />
            <div
              ref={bar2Ref}
              className="absolute w-full h-[2px] bg-black rounded-full bottom-[6px]"
            />
          </div>
          <span className="text-base font-medium">Menu</span>
        </button>

        {/* Center - Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-black text-md md:text-xl font-bold tracking-wide">
            Montessori Prime
          </span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-5 py-2 rounded-full border border-[#d73572] text-[#d73572] text-sm font-medium hover:bg-[#d73572] hover:text-white transition-colors cursor-pointer">
            Application
          </button>
          <button className="px-5 py-2 rounded-full bg-[#d73572] text-white text-sm font-medium hover:bg-[#b82b60] transition-colors cursor-pointer">
            Join Us
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        ref={menuContentRef}
        className="overflow-hidden bg-[#f5f5f7] border border-t-0 border-[#e5e5e5] rounded-b-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]"
        style={{ height: 0, opacity: 0 }}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-5 p-6">
          {/* Column 1 - About Us */}
          <div className="menu-col border border-[#e5e5e5] rounded-2xl p-8 flex flex-col bg-white">
            <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-8">
              About Us
            </h3>
            <ul className="flex-1">
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Our Leader and Teachers
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  House System
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  School Calendar
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Career
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Infrastructure and Facilities
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Testimonials
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors"
                >
                  Documents
                </a>
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#"
                className="menu-link text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors flex items-center gap-3"
              >
                Virtual Tour
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="menu-col rounded-2xl p-10 flex flex-col justify-between ">
            <div>
              <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-8">
                Explore
              </h3>
              <ul>
                <li className="menu-link">
                  <a
                    href="#"
                    className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                  >
                    Mandatory Public Disclosure
                  </a>
                </li>
                <li className="menu-link">
                  <a
                    href="#"
                    className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                  >
                    Gallery
                  </a>
                </li>
                <li className="menu-link">
                  <a
                    href="#"
                    className="block py-4 text-black text-2xl font-medium hover:text-[var(--palette-magenta)] transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="menu-link flex items-center gap-3 pt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#666] hover:text-black hover:bg-[#e0e0e0] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#666] hover:text-black hover:bg-[#e0e0e0] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#666] hover:text-black hover:bg-[#e0e0e0] transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3 - Wings Carousel */}
          <div className="featured-card menu-col border border-[#e5e5e5] rounded-2xl p-6 flex flex-col bg-white">
            <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
              Our Wings
            </h3>
            <div className="relative flex-1 w-full aspect-[3/3]">
              {wings.map((w, i) => (
                <div
                  key={w.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === wingIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className="w-full h-full overflow-hidden border-[3px]"
                    style={{
                      borderRadius: "50%",
                      borderColor: w.border,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.src}
                      alt={w.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 pt-4">
              {wings.map((w, i) => (
                <button
                  key={w.src}
                  type="button"
                  aria-label={`Show ${w.alt}`}
                  onClick={() => setWingIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === wingIndex ? "w-6 bg-black" : "w-1.5 bg-[#d0d0d0]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className="md:hidden flex flex-col px-4 py-4 gap-2 overflow-y-auto"
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          {/* About Us */}
          <div className="menu-col border border-[#e5e5e5] rounded-2xl p-4 bg-white">
            <h3 className="text-[#666] text-[11px] font-medium tracking-[0.25em] uppercase mb-2">
              About Us
            </h3>
            <ul>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Our Leader and Teachers
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  House System
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  School Calendar
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Career
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Infrastructure and Facilities
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Testimonials
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Documents
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-2 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors"
                >
                  Virtual Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="menu-col mt-2 px-2">
            <ul>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-3.5 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Mandatory Public Disclosure
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-3.5 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors border-b border-[#e5e5e5]"
                >
                  Gallery
                </a>
              </li>
              <li className="menu-link">
                <a
                  href="#"
                  className="block py-3.5 text-black text-xl font-medium hover:text-[var(--palette-magenta)] transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile CTAs */}
          <div className="menu-col mt-auto pt-6 flex flex-col gap-3">
            <button className="menu-link w-full py-3.5 rounded-full bg-[#f0f0f0] text-black text-base font-medium hover:bg-[#e0e0e0] transition-colors cursor-pointer">
              Member Login
            </button>
            <button className="menu-link w-full py-3.5 rounded-full bg-[#d73572] text-white text-base font-medium hover:bg-[#b82b60] transition-colors cursor-pointer">
              Join Montessori
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
