//File :- components/news/blog-card.tsx
import Image from "next/image";
import Link from "next/link";

export type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export default function BlogCard({ slug, title, date, image }: BlogCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group block"
      aria-label={title}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#f3f3f3] rounded-[16px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-4">
        <div className="text-[14px] text-[#7a7a85]">{date}</div>
        <h3
          className="mt-2 text-[20px] md:text-[22px] font-bold tracking-tight transition-colors group-hover:text-[#E91E63]"
          style={{ color: "#231a3d" }}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
