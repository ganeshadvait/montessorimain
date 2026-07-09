"use client";
//File :- components/footer-modern.tsx
// Modern redesign of components/footer.tsx — flat black theme, mobile accordions.
import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Clock, ChevronDown } from "lucide-react";

const LOGO_URL = "https://admissions.montessorigroups.com/montessori%20footer%20logo%20website.png";

const PINK = "#E91E63";
const YELLOW = "#F4B919";

const exploreLinks = [
  { label: "About Us", href: "https://www.montessorijnprime.com/about" },
  { label: "Gallery", href: "https://www.montessorijnprime.com/gallery" },
  { label: "Events", href: "https://www.montessorijnprime.com/events" },
  { label: "Blogs", href: "https://www.montessorijnprime.com/news" },
  { label: "Virtual Tour", href: "https://www.montessorijnprime.com/about/virtualtour", highlight: true },
  { label: "Privacy Policy", href: "#" },
];

const hours = [
  { day: "Mon", time: "8:00 am - 5:00 pm" },
  { day: "Tue", time: "8:00 am - 5:00 pm" },
  { day: "Wed", time: "8:00 am - 5:00 pm" },
  { day: "Thu", time: "8:00 am - 5:00 pm" },
  { day: "Fri", time: "8:00 am - 5:00 pm" },
  { day: "Sat", time: "8:00 am - 5:00 pm" },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
  </svg>
);

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/montessorijnprime", label: "Facebook" },
  { Icon: TwitterIcon, href: "https://twitter.com/mjnprime", label: "Twitter" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/montessorijnprime/", label: "Instagram" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/@montessorijnprime", label: "YouTube" },
];

const contact = [
  {
    Icon: MapPin,
    node: (
      <span>
        3FRR+5F3, Bavupet, X Road, Yellapur,
        <br />
        Warangal, Telangana 506371
      </span>
    ),
  },
  { Icon: Phone, node: <a href="tel:08065064810" className="hover:text-white">08065064810</a> },
  {
    Icon: Mail,
    node: (
      <a href="mailto:info@montessorijnprime.com" className="hover:text-white">
        info@montessorijnprime.com
      </a>
    ),
  },
];

/* Collapsible column — accordion on mobile, always open on desktop. */
function FooterColumn({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 md:cursor-default md:py-0 md:pointer-events-none"
      >
        <h3 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-white/50">
          {icon}
          {title}
        </h3>
        <ChevronDown
          size={18}
          className={`text-white/50 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-5 md:block md:pb-0 md:pt-5`}>
        {children}
      </div>
    </div>
  );
}

export default function FooterModern() {
  return (
    <footer className="w-full border-t border-white/10 text-white" style={{ background: "#0d0c1f" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* CTA band */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 md:flex-row md:px-10">
          <div className="text-center md:text-left">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: YELLOW }}>
              Admissions Open 2026–27
            </p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Give your child the best start.
            </h2>
          </div>
          <Link
            href="/application"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: PINK }}
          >
            Apply Now
            <ArrowRight size={18} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-0 py-8 md:grid-cols-2 md:gap-12 md:py-14 lg:grid-cols-[1.5fr_1fr_1.1fr_1.3fr]">
          {/* Brand — always visible */}
          <div className="border-b border-white/10 pb-8 md:border-0 md:pb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="Montessori Prime School" className="mb-6 h-[64px] w-auto" />
            <p className="max-w-sm text-[14px] leading-[1.85] text-white/70">
              Montessori Prime School educates young children without distinction
              of caste and creed through play-way and other modern methods — so
              that going to school is something every child looks forward to.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-white/80 ring-1 ring-white/10 transition-all hover:scale-110 hover:bg-[#E91E63] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore">
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] transition-colors hover:text-white"
                    //style={{ color: link.highlight ? YELLOW : "rgba(255,255,255,0.78)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Opening Hours */}
          <FooterColumn title="Opening Hours" icon={<Clock size={15} strokeWidth={2.2} />}>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-white/5 pb-2 text-[14px]"
                >
                  <span className="font-semibold text-white/90">{h.day}</span>
                  <span className="text-white/65">{h.time}</span>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Get In Touch */}
          <FooterColumn title="Get In Touch">
            <ul className="space-y-4 text-[14px] text-white/70">
              {contact.map(({ Icon, node }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10"
                    style={{ color: YELLOW }}
                  >
                    <Icon size={15} strokeWidth={2.2} />
                  </span>
                  <span className="leading-relaxed">{node}</span>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-center md:flex-row md:px-10 md:text-left">
          <p className="text-[13px] text-white/60">
            © 2025{" "}
            <a href="#" className="font-semibold" style={{ color: PINK }}>
              Montessori Prime School
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-[13px] text-white/60">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
