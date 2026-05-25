//File :- components/page-hero.tsx
import type { ReactNode } from "react";

export type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  breadcrumb: Crumb[];
  title: ReactNode;
};

export default function PageHero({ breadcrumb, title }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#f3ede4" }}
    >
      {/* Decorative teal X */}
      <svg
        aria-hidden
        className="absolute left-[4%] top-[58%] w-12 h-12 animate-[spin_20s_linear_infinite] [transform-origin:center]"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1FBABA"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <line x1="12" y1="12" x2="36" y2="36" />
        <line x1="36" y1="12" x2="12" y2="36" />
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8 md:pt-10 pb-16 md:pb-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[15px] flex items-center gap-2 flex-wrap"
        >
          {breadcrumb.map((crumb, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={i} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <a
                    href={crumb.href}
                    className="text-[#7a7a85] hover:text-[#1a1a2e] transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? "text-[#1a1a2e]" : "text-[#7a7a85]"}
                  >
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-[#b8b8c0]">/</span>}
              </span>
            );
          })}
        </nav>

        {/* Heading */}
        <h1
          className="text-center font-bold tracking-tight mt-12 md:mt-16 text-[32px] md:text-[44px] lg:text-[52px]"
          style={{ color: "#231a3d" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
