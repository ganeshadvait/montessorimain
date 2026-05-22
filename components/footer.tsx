//File :- components/footer.tsx
import { MapPin, Phone, Mail } from "lucide-react";

const LOGO_URL =
  "https://www.montessorijnprime.com/montessori/prime/assets/img/logo/logo.png?_=1234";

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
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
  </svg>
);

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/montessorijnprime", label: "Facebook" },
  { Icon: TwitterIcon, href: "#", label: "Twitter" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/montessorijnprime/", label: "Instagram" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="w-full text-white"
      style={{ background: "#0d0c1f" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.1fr_1.4fr] gap-10 md:gap-12 relative">
          {/* Column 1 — Logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="Montessori Prime School"
              className="h-[70px] w-auto mb-6"
            />
            <p className="text-[14px] leading-[1.8] text-white/85">
              Montessori Prime School aims primarily at the education of young
              children without distinction of caste and creed through the play
              way and other modern methods of imparting education, in order to
              eradicate from their minds the fear of going to school!
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div className="md:border-l md:border-white/15 md:pl-10">
            <h3 className="text-[20px] font-bold mb-5">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] hover:opacity-80 transition-opacity"
                    style={{
                      color: link.highlight ? YELLOW : "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span className="mr-1.5">»</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Opening Hours */}
          <div className="md:border-l md:border-white/15 md:pl-10">
            <h3 className="text-[20px] font-bold mb-5">Opening Hours</h3>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex items-baseline gap-4 text-[14px]">
                  <span className="font-semibold text-white w-8">{h.day}</span>
                  <span className="text-white/85">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get In Touch */}
          <div className="md:border-l md:border-white/15 md:pl-10">
            <h3 className="text-[20px] font-bold mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-[14px] text-white/85">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                <span>
                  3FRR+5F3, Bavupet, X Road, Yellapur,
                  <br />
                  Warangal, Telangana 506371
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={2} className="flex-shrink-0" />
                <a href="tel:+917700043030">+91 77000 43030</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={2} className="flex-shrink-0" />
                <a href="mailto:info@montessorijnprime.com">
                  info@montessorijnprime.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={2} className="flex-shrink-0" />
                <a href="tel:+917700053030">+91 77000 53030</a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom copyright */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 text-center">
        <p className="text-[14px] text-white/80">
          Copyright © 2025{" "}
          <a href="#" style={{ color: PINK }}>
            Montessori Prime School
          </a>{" "}
          System. All Rights Reserved. |{" "}
          <a href="#" style={{ color: PINK }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
