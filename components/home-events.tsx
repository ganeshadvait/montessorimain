//File :- components/home-events.tsx
import Image from "next/image";
import Link from "next/link";
import { MapPin, UserRound } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type EventItem = {
  location: string;
  title: string;
  day: string;
  month: string;
  href: string;
};

const events: EventItem[] = [
  {
    location: "MPS - Yellapur",
    title: "Christmas Celebrations",
    day: "25",
    month: "Dec",
    href: "/events/christmas-celebrations",
  },
  {
    location: "MPS - Yellapur",
    title: "Annual Day 2026 Celebrations",
    day: "6",
    month: "Dec",
    href: "/events/annual-day-2026",
  },
];

export default function HomeEvents() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            LATEST EVENTS
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.2] tracking-tight"
            style={{ color: INK }}
          >
            Our Upcoming Events
          </h2>
          <p
            className="mt-3 text-[15px] md:text-[16px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            Montessori Prime School aims primarily at the education of young
            children without distinction of imparting education to school.
          </p>

          {/* Event list */}
          <ul className="mt-7 flex flex-col gap-4">
            {events.map((ev) => (
              <li key={ev.title}>
                <div
                  className="flex items-stretch rounded-md overflow-hidden"
                  style={{ background: "#f6f6f6" }}
                >
                  <div className="flex-1 px-6 py-5">
                    <div
                      className="flex items-center gap-1 text-[13px] font-semibold"
                      style={{ color: PINK }}
                    >
                      <MapPin size={14} />
                      {ev.location}
                    </div>
                    <h3
                      className="mt-2 text-[17px] md:text-[18px] font-bold tracking-tight"
                      style={{ color: INK }}
                    >
                      {ev.title}
                    </h3>
                    <Link
                      href={ev.href}
                      className="mt-2 inline-block text-[13px] font-semibold hover:underline"
                      style={{ color: PINK }}
                    >
                      Read More
                    </Link>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center w-[90px] px-4 py-5 text-center"
                    style={{ background: "#e5e5e5" }}
                  >
                    <div
                      className="text-[32px] md:text-[36px] font-bold leading-none"
                      style={{ color: PINK }}
                    >
                      {ev.day}
                    </div>
                    <div
                      className="mt-1 text-[14px] font-semibold"
                      style={{ color: INK }}
                    >
                      {ev.month}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
            style={{ background: PINK, color: "#ffffff" }}
          >
            <UserRound size={16} />
            View All Events
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[3/4]">
            <Image
              src="/home/dancer bharathanathyam.png"
              alt="Bharathanatyam dancer"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
