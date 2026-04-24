//File :- /src/app/home-three/programs.tsx
import {
  MessageCircle,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type Program = {
  icon: LucideIcon;
  title: string;
  grade: string;
  description: ReactNode;
  highlights: string[];
};

const accent = "#20b8b8";
const accentSoft = "#E4F5F5";

const programs: Program[] = [
  {
    icon: MessageCircle,
    title: "Pre-Primary Wing",
    grade: "JR. KG TO SR. KG",
    description: (
      <>
        Focused on <strong>Joyful Learning</strong>, our early years program
        utilizes authentic Montessori materials to develop tactile intelligence
        and social harmony.
      </>
    ),
    highlights: ["Sensory-based Exploration", "Self-Directed Activity"],
  },
  {
    icon: GraduationCap,
    title: "Primary Wing",
    grade: "GRADE I TO V",
    description: (
      <>
        Transitioning to <strong>Conceptual Understanding</strong>, we integrate
        digital classrooms with project-based learning to bridge the gap between
        theory and reality.
      </>
    ),
    highlights: ["Smart-Board Classrooms", "Cross-disciplinary Projects"],
  },
  {
    icon: Lightbulb,
    title: "High School",
    grade: "GRADE VI TO X",
    description: (
      <>
        Emphasizing <strong>Analytical Thinking</strong>, our CBSE curriculum is
        designed for academic excellence and competitive readiness in a global
        landscape.
      </>
    ),
    highlights: ["Advanced Laboratory Access", "Career Counseling Labs"],
  },
];

export default function Programs() {
  return (
    <section className="w-full bg-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-6 md:gap-7 md:grid-cols-3">
          {programs.map(({ icon: Icon, title, grade, description, highlights }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl bg-white border border-black/[0.06] shadow-[0_1px_4px_rgba(0,0,0,0.04)] p-8 md:p-10 transition-shadow hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* Icon */}
              <span
                className="mb-8 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: accentSoft, color: accent }}
              >
                <Icon size={22} strokeWidth={2} />
              </span>

              {/* Title */}
              <h3
                className="text-[26px] md:text-[28px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]"
                style={{ fontFamily: "ui-serif, Georgia, serif" }}
              >
                {title}
              </h3>

              {/* Grade label */}
              <span
                className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: accent }}
              >
                {grade}
              </span>

              {/* Description */}
              <p className="mt-5 text-[15px] leading-[1.7] text-[#555]">
                {description}
              </p>

              {/* Divider */}
              <div className="mt-7 h-px w-full bg-black/[0.08]" />

              {/* Highlights */}
              <ul className="mt-6 space-y-3">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 text-[14px] text-[#333]"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      style={{ color: accent }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
