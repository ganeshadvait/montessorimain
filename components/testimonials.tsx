//File :- components/testimonials.tsx
import { Quote } from "lucide-react";

const voices = [
  {
    quote:
      "We expected a preschool. We found a community that actually knows our son — his interests, his fears, the way he thinks. Two years in, he wakes up asking when it’s school day.",
    name: "Priya & Arjun M.",
    role: "Parents of Vihaan, Primary",
    initials: "PM",
    accent: "var(--palette-magenta)",
  },
  {
    quote:
      "What struck me wasn’t the materials — it was watching a five-year-old choose her work, settle in, and stay with it for forty minutes. Nobody was making her do that.",
    name: "Kavya S.",
    role: "Parent of Ananya, Primary",
    initials: "KS",
    accent: "var(--palette-teal)",
  },
  {
    quote:
      "Our daughter is twelve now and graduating Elementary. She reads for pleasure, argues her ideas politely, and plans her weeks. That’s what Montessori gave her.",
    name: "Rohan & Sneha D.",
    role: "Parents of Zoya, Elementary",
    initials: "RD",
    accent: "var(--palette-coral)",
  },
  {
    quote:
      "The guides treat children like capable people, not like projects. That respect comes home with them — and it’s changing how we parent too.",
    name: "Anita R.",
    role: "Parent of Ishaan, Toddler",
    initials: "AR",
    accent: "var(--palette-sun)",
  },
];

export default function Testimonials() {
  return (
    <section
      id="voices"
      className="w-full bg-[var(--palette-surface)] text-[var(--palette-ink)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[var(--palette-coral)]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--palette-coral)" }}
            />
            Voices of Our Community
          </span>
          <h2 className="mt-4 text-[36px] md:text-[52px] font-semibold leading-[1.05] tracking-tight">
            Don’t take our word for it.{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-magenta)",
              }}
            >
              Ask the parents
            </span>
            .
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="relative flex flex-col rounded-3xl bg-white border border-[var(--palette-line)] p-8 md:p-10 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(29,29,31,0.2)]"
            >
              <Quote
                size={36}
                className="absolute top-6 right-6 opacity-15"
                style={{ color: v.accent }}
              />
              <blockquote className="text-[18px] md:text-[20px] leading-[1.55] text-[var(--palette-ink)]/90 pr-8">
                {v.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ background: v.accent }}
                >
                  {v.initials}
                </span>
                <div>
                  <div className="text-[15px] font-semibold">{v.name}</div>
                  <div className="text-[13px] text-[var(--palette-muted)]">
                    {v.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
