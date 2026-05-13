//File :- src/app/events/page.tsx
import Link from "next/link";
import PageHero from "../../../components/page-hero";
import { MapPin } from "lucide-react";
import { events } from "../../../data/events";

const PINK = "#E91E63";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Events" }]}
        title="Events"
      />

      {/* Tabs */}
      <section className="w-full pt-12 md:pt-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div
            className="w-full rounded-md"
            style={{ background: "#f5f5f5" }}
          >
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="relative px-6 py-5 text-[16px] font-medium"
                style={{ color: PINK }}
              >
                All
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-[34px]"
                  style={{ background: PINK }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <Link
                key={e.slug}
                href={`/events/${e.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="mt-4">
                  <div
                    className="text-[15px] font-medium pb-2 inline-block border-b-2"
                    style={{ color: PINK, borderColor: PINK }}
                  >
                    {e.date}
                  </div>
                  <h3
                    className="mt-4 text-[22px] md:text-[24px] font-bold leading-tight tracking-tight"
                    style={{ color: "#231a3d" }}
                  >
                    {e.name}
                  </h3>
                  <div
                    className="mt-4 flex items-center gap-2 text-[14px]"
                    style={{ color: "#5e5e6e" }}
                  >
                    <MapPin size={16} strokeWidth={2} style={{ color: PINK }} />
                    {e.location}
                  </div>
                  <div
                    className="mt-5 h-px w-full"
                    style={{ background: "#e5e5e5" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
