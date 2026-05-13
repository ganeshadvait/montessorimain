//File :- src/app/news/page.tsx

import PageHero from "../../../components/page-hero";
import BlogCard from "../../../components/news/blog-card";
import { blogs } from "./data";

export default function BlogsListingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blogs" },
        ]}
        title="Blogs"
      />

      <section className="w-full">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {blogs.map((b) => (
              <BlogCard
                key={b.slug}
                slug={b.slug}
                title={b.title}
                date={b.date}
                image={b.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
