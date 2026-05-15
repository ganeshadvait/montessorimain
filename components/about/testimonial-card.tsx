//File :- components/about/testimonial-card.tsx
import Image from "next/image";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
  background?: string;
  quoteColor?: string;
};

const initialsFor = (name: string) =>
  name
    .replace(/[^A-Za-z. ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");

export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  background = "#f3ede4",
  quoteColor = "#5B96AA",
}: TestimonialCardProps) {
  return (
    <article
      className="relative p-8 md:p-10 pt-12 md:pt-14 rounded-lg max-w-[600px] mx-auto"
      style={{ background }}
    >
      {/* Top-left pink fingernail accent */}
      <span
        aria-hidden
        className="absolute top-0 left-0"
        style={{
          width: "32px",
          height: "32px",
          background: "#DD3E74",
          borderTopLeftRadius: "8px",
          borderBottomRightRadius: "100%",
        }}
      />

      {/* Quote text */}
      <p
        className="text-[15px] md:text-[16px] leading-[1.85] mb-8"
        style={{ color: quoteColor }}
      >
        {quote}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4 relative">
        <div
          className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
          style={{ background: "#d9c7b8", color: "#231a3d" }}
        >
          {avatar ? (
            <Image src={avatar} alt={name} fill className="object-cover" />
          ) : (
            <span className="text-[14px] font-bold tracking-tight">
              {initialsFor(name)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div
            className="font-bold text-[16px] md:text-[17px] leading-tight"
            style={{ color: "#E91E63" }}
          >
            {name}
          </div>
          {role && (
            <div
              className="text-[13px] md:text-[14px] leading-snug mt-1"
              style={{ color: "#8a8a93" }}
            >
              {role}
            </div>
          )}
        </div>
      </div>

      {/* Bottom-right decorative quote glyph */}
      <span
        aria-hidden
        className="absolute right-5 bottom-2 pointer-events-none select-none"
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: "90px",
          lineHeight: 1,
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px #b8b1a6",
          letterSpacing: "-6px",
          opacity: 0.35,
        }}
      >
        &rdquo;
      </span>
    </article>
  );
}
