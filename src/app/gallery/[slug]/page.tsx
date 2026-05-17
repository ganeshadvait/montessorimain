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

  // Locally-hosted sub-galleries (override the remote cover with real photos).
  const localOverrides: Record<string, string[]> = {
    "t-hub-2024": [
      5476, 5457, 5468, 5432, 5436, 5456, 5424, 5427, 5420, 5422, 5385, 5418,
      5370, 5379, 5383, 5361, 5367, 5350, 5352, 5345, 5349, 5343, 5344, 5341,
      5337, 5340, 5329, 5333, 5314, 5323, 5304, 5305, 5310, 5313, 5299, 5300,
      5296, 5297, 5294, 5295, 5292, 5293, 5290, 5291, 5287, 5288, 5289, 5284,
      5285, 5286, 5281, 5283, 5278, 5280, 5276, 5277, 5273, 5275, 5270, 5271,
      5268, 5269, 5251, 5259, 5265, 5266,
    ].map((id) => `/gallery-images/IMG_${id}.jpg`),
  };

  const photos =
    localOverrides[slug] ??
    Array.from({ length: Math.min(gallery.count, 24) }).map(() => gallery.cover);

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
