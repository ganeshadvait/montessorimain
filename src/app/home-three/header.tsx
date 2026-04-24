"use client";
//File :- /src/app/home-three/header.tsx
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";

function MontessoriLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="26" r="14" fill="#1a1a1a" />
      <circle cx="20" cy="14" r="10" fill="#d73572" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  "Pre-Primary Wing",
  "Primary Wing",
  "High School",
  "House System",
  "Infrastructure & Facilities",
  "Virtual Tour",
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  const openServices = useCallback(() => {
    if (animating.current || servicesOpen) return;
    animating.current = true;
    setServicesOpen(true);

    const dd = dropdownRef.current;
    if (!dd) return;

    gsap.set(dd, { display: "block", height: 0, opacity: 0 });
    const tl = gsap.timeline({
      onComplete: () => {
        animating.current = false;
      },
    });
    tl.to(dd, {
      height: "auto",
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
    });
    tl.fromTo(
      ".flexio-service-item",
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
      "-=0.2",
    );
  }, [servicesOpen]);

  const closeServices = useCallback(() => {
    if (animating.current || !servicesOpen) return;
    animating.current = true;

    const dd = dropdownRef.current;
    if (!dd) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setServicesOpen(false);
        animating.current = false;
        gsap.set(dd, { display: "none" });
      },
    });
    tl.to(dd, { height: 0, opacity: 0, duration: 0.25, ease: "power3.in" });
  }, [servicesOpen]);

  return (
    <header className="w-full px-5 md:px-10 pt-4">
      <nav className="max-w-[1400px] mx-auto bg-white rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <MontessoriLogo />
            <span className="text-[22px] font-bold text-[#1a1a1a] tracking-[-0.02em]">
              Montessori
            </span>
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Programs with dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-[15px] font-medium text-[#1a1a1a] hover:text-[#d73572] transition-colors"
                onClick={servicesOpen ? closeServices : openServices}
                onMouseEnter={openServices}
              >
                Programs
                <ChevronDown
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                ref={dropdownRef}
                className="hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-black/[0.04] overflow-hidden z-50"
                onMouseLeave={closeServices}
              >
                <div className="py-2">
                  {services.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="flexio-service-item block px-5 py-2.5 text-[14px] text-[#333] hover:text-[#d73572] hover:bg-[#FFF5ED] transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-[15px] font-medium text-[#1a1a1a] hover:text-[#d73572] transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[15px] font-medium text-[#1a1a1a] hover:text-[#d73572] transition-colors"
            >
              Admissions
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-flex items-center px-7 py-3 rounded-full bg-[#d73572] text-white text-[15px] font-semibold hover:bg-[#b82b60] transition-colors shadow-md shadow-[#d73572]/20"
        >
          Book a Tour
        </a>

        {/* Mobile Hamburger */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path
              d="M1 1h20M1 8h20M1 15h20"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
