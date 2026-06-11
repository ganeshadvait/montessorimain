//File :- src/app/gallery/page.tsx
import Link from "next/link";
import PageHero from "../../../components/page-hero";
import { galleries } from "../../../data/galleries";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        title="Gallery"
      />

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleries.map((g) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] rounded-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.cover}
                    alt={g.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                    <h3 className="text-white text-[16px] md:text-[17px] font-bold tracking-tight leading-tight line-clamp-2">
                      {g.name}
                    </h3>
                    <span className="text-white/85 text-[12px] font-medium whitespace-nowrap">
                      {g.count} photos
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
