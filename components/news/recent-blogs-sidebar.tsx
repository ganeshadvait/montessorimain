//File :- components/news/recent-blogs-sidebar.tsx
import Image from "next/image";
import Link from "next/link";

export type RecentBlogItem = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export type RecentBlogsSidebarProps = {
  blogs: RecentBlogItem[];
};

export default function RecentBlogsSidebar({ blogs }: RecentBlogsSidebarProps) {
  return (
    <aside className="w-full">
      <h3
        className="text-[22px] md:text-[24px] font-bold tracking-tight pb-3 border-b border-[#e3ddd2]"
        style={{ color: "#231a3d" }}
      >
        Recent Blogs
      </h3>
      <ul className="mt-5 flex flex-col gap-5">
        {blogs.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/news/${b.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="relative w-[88px] h-[64px] flex-shrink-0 overflow-hidden bg-[#f3f3f3] rounded-[16px]">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="88px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[12px] text-[#7a7a85] uppercase tracking-wide">
                  {b.date}
                </div>
                <div
                  className="mt-1 text-[15px] font-bold leading-tight transition-colors group-hover:text-[#E91E63]"
                  style={{ color: "#231a3d" }}
                >
                  {b.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
