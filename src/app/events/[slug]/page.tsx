//File :- src/app/events/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MapPin, Calendar } from "lucide-react";
import PageHero from "../../../../components/page-hero";
import { getEventBySlug } from "../../../../data/events";

const PINK = "#E91E63";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.name },
        ]}
        title={event.name}
      />

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
            <span
              className="inline-flex items-center gap-2 text-[14px]"
              style={{ color: "#5e5e6e" }}
            >
              <Calendar size={16} strokeWidth={2} style={{ color: PINK }} />
              {event.date}
            </span>
            <span
              className="inline-flex items-center gap-2 text-[14px]"
              style={{ color: "#5e5e6e" }}
            >
              <MapPin size={16} strokeWidth={2} style={{ color: PINK }} />
              {event.location}
            </span>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <article className="mt-10">
            <p
              className="text-[16px] leading-[1.85]"
              style={{ color: "#5e5e6e" }}
            >
              {event.body}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
