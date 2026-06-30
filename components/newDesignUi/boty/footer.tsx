"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

// lucide-react in this project does not ship brand icons, so use inline SVGs.
const Facebook = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)
const Instagram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const Youtube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Academic Programmes", href: "#academic" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#branches" },
]

const academicLinks = [
  { name: "CBSE Curriculum", href: "#why-us" },
  { name: "Montessori Method", href: "#why-us" },
  { name: "Co-Curricular", href: "#why-us" },
  { name: "Results", href: "#testimonials" },
]

export function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/[0.03] whitespace-nowrap leading-none">
          Montessori
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/_boty-images/montessori footer logo website.png"
                alt="Montessori Groups of Schools"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Nurturing excellence across Telangana for 33+ years. Building confident, capable individuals through quality education.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white boty-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          {/* <div>
            <h3 className="font-medium text-white mb-4">Academics</h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white boty-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:7700053030" className="md:hidden flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <img src="/_boty-images/Call white.svg" alt="Call" className="w-6 h-6 flex-shrink-0" />
                  7700053030
                </a>
                <a href="https://wa.me/917700053030?text=Hi%2C%20I%27m%20interested%20in%20admissions" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <img src="/_boty-images/Whatsapp white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0" />
                  +91 77000 53030
                </a>
              </li>
              <li>
                <a href="mailto:admissions@montessorigroups.edu" className="flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@montessorijnprime.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Montessori Groups of Schools, Telangana. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <Link href="/" className="text-sm text-white/40 hover:text-white/60 boty-transition">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-white/40 hover:text-white/60 boty-transition">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
