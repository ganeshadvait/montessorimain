//File :- src/app/gallery/[slug]/page.tsx
import { notFound } from "next/navigation";
import PageHero from "../../../../components/page-hero";
import { getGalleryBySlug } from "../../../../data/galleries";

export default async function SubGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);
  if (!gallery) return notFound();

  // Generate placeholder photo URLs using the same cover (real per-photo
  // images can be wired up when an endpoint for sub-gallery contents exists).
  const photos = Array.from({ length: Math.min(gallery.count, 24) }).map(
    () => gallery.cover,
  );

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
          { label: gallery.name },
        ]}
        title={gallery.name}
      />

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-8 text-[14px] text-[#5e5e6e]">
            {gallery.count} photos · Added {gallery.createdOn}
          </div>

          <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((src, i) => (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden bg-[#f5f5f5]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${gallery.name} photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
