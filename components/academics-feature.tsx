//File :- components/academics-feature.tsx
import { GraduationCap, Clock, BookOpen, Hexagon, ArrowRight } from "lucide-react";

const stats = [
  {
    Icon: GraduationCap,
    title: "AMI, NCERT, CBSE",
    body: "Trained guides from\ntop accredited bodies",
  },
  {
    Icon: Clock,
    title: "1200+ Hours",
    body: "of uninterrupted Montessori work cycles",
  },
  {
    Icon: BookOpen,
    title: "75+",
    body: "hands-on real-world\ncase materials",
  },
  {
    Icon: Hexagon,
    title: "6 Domains",
    body: "and pathways for focused skill building",
  },
];

const PROFESSOR_IMAGE =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80";
const BACKDROP_IMAGE =
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=2000&q=80";

const universities = [
  { name: "AMI", color: "var(--palette-magenta)" },
  { name: "CBSE", color: "var(--palette-teal)" },
  { name: "Cambridge", color: "var(--palette-coral)" },
];

export default function AcademicsFeature() {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-8">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] md:rounded-[40px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${BACKDROP_IMAGE})` }}
        />
        {/* Dark green overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,38,34,0.92) 0%, rgba(10,31,28,0.85) 50%, rgba(13,38,34,0.78) 100%)",
          }}
        />

        {/* Glowing "m" mark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          <span
            className="text-[220px] md:text-[340px] lg:text-[400px] font-bold leading-none"
            style={{
              fontFamily: "ui-serif, Georgia, serif",
              color: "var(--palette-sun)",
              opacity: 0.18,
              filter: "drop-shadow(0 0 60px rgba(255,179,0,0.4))",
            }}
          >
            m
          </span>
        </div>

        {/* Content */}
        <div className="relative flex flex-col gap-8 p-6 md:p-8 lg:p-10">
          {/* Top row: kicker + headline */}
          <div className="max-w-[600px] ml-auto md:ml-[40%] lg:ml-[35%]">
            <span
              className="text-[14px] font-medium"
              style={{
                background:
                  "linear-gradient(90deg, #6ee7e0, var(--palette-magenta), var(--palette-sun))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              New age Academics
            </span>
            <h2
              className="mt-2 text-[28px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.1] tracking-tight text-white border-l-2 border-white/40 pl-5"
            >
              <span className="font-bold">Learn business</span> from world{" "}
              <br className="hidden md:block" />
              renowned professors
            </h2>
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ml-auto md:ml-[40%] lg:ml-[35%] max-w-[900px]">
            {stats.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-5 border"
                style={{
                  background: "rgba(15,45,40,0.6)",
                  borderColor: "rgba(110,180,160,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Icon size={24} className="mb-4 text-white/85" strokeWidth={1.5} />
                <div
                  className="text-[16px] font-semibold mb-2"
                  style={{ color: "#7ee0c8" }}
                >
                  {title}
                </div>
                <div className="text-[13px] text-white/80 leading-snug whitespace-pre-line">
                  {body}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: portrait card + brochure button */}
          <div className="flex flex-wrap items-end gap-6">
            {/* Portrait + name + universities */}
            <div className="relative w-[200px] flex-shrink-0">
              <div className="relative h-[180px] w-full rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFESSOR_IMAGE}
                  alt="Lead Montessori Guide"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div
                className="mt-2 rounded-2xl border px-4 py-3"
                style={{
                  background: "rgba(15,45,40,0.85)",
                  borderColor: "rgba(110,180,160,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="text-white text-[14px] font-semibold mb-2 text-center">
                  Dr. Ananya Rao{" "}
                  <span className="text-white/60 font-normal">| Lead Guide</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {universities.map((u) => (
                    <span
                      key={u.name}
                      className="rounded-md px-2.5 py-1 text-[10px] font-bold text-white"
                      style={{ background: u.color }}
                    >
                      {u.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#brochure"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: "#dff58a", color: "#0d2622" }}
            >
              DOWNLOAD BROCHURE
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
