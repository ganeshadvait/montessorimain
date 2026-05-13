//File :- src/app/news/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";

import PageHero from "../../../../components/page-hero";
import RecentBlogsSidebar from "../../../../components/news/recent-blogs-sidebar";
import { blogs, getBlog, getRecentBlogs } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  const recent = getRecentBlogs(blog.slug, 5);

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/news" },
          { label: blog.title },
        ]}
        title={blog.title}
      />

      <section className="w-full">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14">
            {/* MAIN */}
            <article className="min-w-0">
              {/* Hero image */}
              <div className="relative w-full aspect-[16/8] overflow-hidden bg-[#f3f3f3] rounded-[16px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Date row */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#7a7a85]" />
                  <div>
                    <div
                      className="text-[12px] uppercase tracking-wide font-semibold"
                      style={{ color: "#E91E63" }}
                    >
                      Date
                    </div>
                    <div
                      className="text-[15px] font-semibold"
                      style={{ color: "#231a3d" }}
                    >
                      {blog.date}
                    </div>
                  </div>
                </div>

                {blog.lastUpdated && (
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-[#7a7a85]" />
                    <div>
                      <div
                        className="text-[12px] uppercase tracking-wide font-semibold"
                        style={{ color: "#E91E63" }}
                      >
                        Last Updated
                      </div>
                      <div
                        className="text-[15px] font-semibold"
                        style={{ color: "#231a3d" }}
                      >
                        {blog.lastUpdated}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title */}
              <h1
                className="mt-10 text-[26px] md:text-[32px] font-bold tracking-tight"
                style={{ color: "#231a3d" }}
              >
                {blog.title}
              </h1>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-5 text-[14px] flex flex-wrap items-center gap-2">
                  {blog.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2">
                      <span
                        className="uppercase tracking-wide text-[11px] font-bold"
                        style={{ color: "#8a8a93" }}
                      >
                        in
                      </span>
                      <span
                        className="font-bold"
                        style={{ color: "#231a3d" }}
                      >
                        {t}
                      </span>
                    </span>
                  ))}
                </div>
              )}

              {/* Body */}
              <div className="mt-8 space-y-5">
                {blog.content.map((block, i) =>
                  block.type === "hashtags" ? (
                    <p
                      key={i}
                      className="text-[15px] md:text-[16px] leading-[1.85] break-words"
                      style={{ color: "#5B96AA" }}
                    >
                      {block.text}
                    </p>
                  ) : (
                    <p
                      key={i}
                      className="text-[15px] md:text-[16px] leading-[1.85]"
                      style={{ color: "#5B96AA" }}
                    >
                      {block.text}
                    </p>
                  )
                )}
              </div>
            </article>

            {/* SIDEBAR */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <RecentBlogsSidebar blogs={recent} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
