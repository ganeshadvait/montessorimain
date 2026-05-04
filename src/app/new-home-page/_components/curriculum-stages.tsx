//File :- src/app/new-home-page/_components/curriculum-stages.tsx

type Stage = {
  label: string;
  grade: string;
  body: string;
  accent: string;
  banner: string;
  image: string;
};

const stages: Stage[] = [
  {
    label: "Pre-Primary Wing",
    grade: "Classes Jr. KG to Sr. KG",
    body: "The Pre-Primary Wing focuses on joyful learning through play, exploration, and imagination. Our early learners engage in hands-on activities using Montessori materials and interactive tools that make learning fun and meaningful — building fine motor skills, communication, social interaction, and emotional growth in a safe, nurturing environment.",
    accent: "#20b8b8",
    banner: "#cfeae8",
    image:
      "https://admissions.montessorigroups.com/pre%20primary%20wing.svg",
  },
  {
    label: "Primary Wing",
    grade: "Grade I to V",
    body: "The Primary Wing lays the foundation for academic excellence and curiosity. Formal learning begins with conceptual understanding rather than rote memorization. Interactive digital classrooms, activity-based learning, and integrated projects make lessons engaging — alongside co-curricular programs that nurture teamwork, confidence, and creativity.",
    accent: "#df3350",
    banner: "#fdd9df",
    image: "https://admissions.montessorigroups.com/primary%20wing.svg",
  },
  {
    label: "High School",
    grade: "Grade VI to X",
    body: "The High School curriculum prepares students for academic success and future challenges under the CBSE framework, focused on developing analytical, problem-solving, and leadership skills. Learners explore subjects in-depth while balancing sports, arts, and life skills — guided by mentors who support informed decisions about higher education.",
    accent: "#ffb300",
    banner: "#fde7be",
    image: "https://admissions.montessorigroups.com/high%20school.svg",
  },
];

export default function CurriculumStages() {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Soft ambient glows in palette colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px circle at 10% 20%, rgba(32,184,184,0.06), transparent 50%), radial-gradient(700px circle at 90% 80%, rgba(255,179,0,0.06), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span
            className="inline-block text-[12px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "var(--palette-magenta)" }}
          >
            Our Curriculum
          </span>
          <h2
            className="mt-5 text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--palette-ink)" }}
          >
            We nurture every stage of your child&rsquo;s{" "}
            <span
              className="italic"
              style={{
                fontFamily: "ui-serif, Georgia, serif",
                color: "var(--palette-teal)",
              }}
            >
              learning journey
            </span>
          </h2>
          <p
            className="mt-6 text-[15px] md:text-[16px] leading-[1.7]"
            style={{ color: "var(--palette-muted)" }}
          >
            A well-structured CBSE curriculum builds a strong academic foundation
            while fostering creativity, critical thinking, and holistic growth.
            Each stage is designed to meet the developmental needs of students,
            ensuring a seamless transition through every phase.
          </p>
        </div>

        {/* Stages */}
        <div className="mt-16 md:mt-20 grid gap-12 md:gap-8 md:grid-cols-3">
          {stages.map((s) => (
            <article
              key={s.label}
              className="group flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative w-full max-w-[320px] aspect-square">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-4 rounded-full blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: s.accent }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.label}
                  className="relative w-full h-full object-contain transition-transform duration-500 group-hover:-translate-y-1"
                />
              </div>

              {/* Banner label */}
              <div
                className="relative mt-6 px-10 py-3 inline-flex"
                style={{
                  background: s.banner,
                  clipPath:
                    "polygon(0 0, 100% 0, 94% 50%, 100% 100%, 0 100%, 6% 50%)",
                }}
              >
                <span
                  className="text-[20px] md:text-[22px] font-bold tracking-tight"
                  style={{ color: s.accent }}
                >
                  {s.label}
                </span>
              </div>

              {/* Grade */}
              <span
                className="mt-4 text-[14px] font-semibold"
                style={{ color: s.accent }}
              >
                ({s.grade})
              </span>

              {/* Body */}
              <p
                className="mt-4 max-w-[360px] text-[14px] md:text-[15px] leading-[1.7]"
                style={{ color: "var(--palette-muted)" }}
              >
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
