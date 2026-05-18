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
    "new-gallery": [
      "1.jpg",
      "(1).jpg",
      "(8).jpg",
      "(9).jpg",
      "(9) (1).jpg",
      "(14).jpg",
      "(18).jpg",
      "(26).jpg",
      "(54).jpg",
      "(54).jpeg",
      "(83).jpg",
      "(86).jpg",
      "95.jpg",
      "DSC_1066.jpg",
      "IMG-20241016-WA0004.jpg",
      "IMG_4512.jpg",
      "IMG_5251.jpg",
      "IMG_5266.jpg",
      "IMG_5271.jpg",
      "IMG_5275.jpg",
      "IMG_5337.jpg",
      "IMG_5337 - Copy.jpg",
      "IMG_5340.jpg",
      "IMG_5340 - Copy.jpg",
      "IMG_5341.jpg",
      "IMG_5341 - Copy.jpg",
      "IMG_5343.jpg",
      "IMG_5343 - Copy.jpg",
      "IMG_5344.jpg",
      "IMG_5344 - Copy.jpg",
      "IMG_5345.jpg",
      "IMG_5345 - Copy.jpg",
      "IMG_5349.jpg",
      "IMG_5349 - Copy.jpg",
      "IMG_5350.jpg",
      "IMG_5350 - Copy.jpg",
      "IMG_5352.jpg",
      "IMG_5352 - Copy.jpg",
      "IMG_5361.jpg",
      "IMG_5361 - Copy.jpg",
      "IMG_5367.jpg",
      "IMG_5367 - Copy.jpg",
      "IMG_5370.jpg",
      "IMG_5370 - Copy.jpg",
      "IMG_5379.jpg",
      "IMG_5379 - Copy.jpg",
      "IMG_5383.jpg",
      "IMG_5383 - Copy.jpg",
      "IMG_5476.jpg",
      "IMG_5476 - Copy.jpg",
      "WhatsApp Image 2023-09-13 at 9.40.59 AM.jpeg",
      "WhatsApp Image 2024-01-11 at 7.06.55 AM.jpeg",
      "_G3C2037.jpg",
    ].map((f) => encodeURI(`/new-gallery-images/${f}`)),
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
