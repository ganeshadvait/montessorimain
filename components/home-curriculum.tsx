//File :- components/home-curriculum.tsx

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type Stage = {
  label: string;
  grade: string;
  body: string;
  image: string;
  bannerBg: string;
  accent: string;
};

const stages: Stage[] = [
  {
    label: "Pre- Primary Wing",
    grade: "Classes Jr. KG to Sr. KG",
    body:
      "The Pre-Primary Wing focuses on joyful learning through play, exploration, and imagination. Our early learners engage in hands-on activities using Montessori materials and interactive tools that make learning fun and meaningful. The emphasis is on developing fine motor skills, communication, social interaction, and emotional growth. We provide a safe, nurturing, and stimulating environment where every child discovers the joy of learning.",
    image:
      "https://www.montessorijnprime.com/montessori/prime/assets/img/home/programs/1.png?_=1234",
    bannerBg: "#cce7e8",
    accent: "#5caaac",
  },
  {
    label: "Primary Wing",
    grade: "Grade I to V",
    body:
      "The Primary Wing lays the foundation for academic excellence and curiosity. At this stage, formal learning begins with an emphasis on conceptual understanding rather than rote memorization. Interactive digital classrooms, activity-based learning, and integrated projects make lessons engaging and effective. Alongside academics, students participate in co-curricular and value-based programs that encourage teamwork, confidence, and creativity.",
    image:
      "https://www.montessorijnprime.com/montessori/prime/assets/img/home/programs/2.png?_=1234",
    bannerBg: "#FAD0D5",
    accent: "#E94454",
  },
  {
    label: "High School",
    grade: "Grade VI to X",
    body:
      "The High School curriculum is designed to prepare students for academic success and future challenges under the CBSE framework. The focus is on developing analytical, problem-solving, and leadership skills. Students are guided to explore subjects in-depth while balancing academics with sports, arts, and life skill education. With dedicated mentorship and career guidance, learners are equipped to make informed choices for their higher education and professional aspirations.",
    image:
      "https://www.montessorijnprime.com/montessori/prime/assets/img/home/programs/3.png?_=1234",
    bannerBg: "#FDE2A8",
    accent: "#E5A92E",
  },
];

export default function HomeCurriculum() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes home-curriculum-star-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .home-curriculum-star {
          animation: home-curriculum-star-spin 20s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }
        @keyframes home-curriculum-kite-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .home-curriculum-kite {
          animation: home-curriculum-kite-float 6s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-curriculum-star,
          .home-curriculum-kite { animation: none; }
        }
      `}</style>

      {/* Floating decorative — kite top right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/curriculum-sec-floatimages/kiteimage.png"
        alt=""
        aria-hidden
        className="home-curriculum-kite pointer-events-none absolute right-0 top-6 md:top-10 w-[170px] md:w-[240px] lg:w-[280px] select-none hidden md:block"
      />

      {/* Floating decorative — star bottom left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/curriculum-sec-floatimages/staricon.png"
        alt=""
        aria-hidden
        className="home-curriculum-star pointer-events-none absolute left-4 md:left-12 bottom-6 md:bottom-10 w-[70px] md:w-[90px] select-none hidden md:block"
      />

      <div className="relative mx-auto max-w-[1340px] px-6 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[560px] text-center">
          <span
            className="text-[13px] uppercase tracking-[0.18em]"
            style={{ color: PINK, fontWeight: 600 }}
          >
            OUR CURRICULUM
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[36px] lg:text-[40px] leading-[1.15] tracking-tight"
            style={{ color: INK, fontWeight: 900 }}
          >
            We nurture every stage of
            <br />
            your child&rsquo;s learning journey
          </h2>
          <p
            className="mt-5 text-[14px] md:text-[15px] leading-[1.7]"
            style={{ color: MUTED }}
          >
            A well-structured CBSE curriculum builds a strong academic
            foundation while fostering creativity, critical thinking, and
            holistic growth. Each stage of schooling at our institution is
            designed to meet the developmental needs of students, ensuring a
            seamless transition through every phase of their education.
          </p>
        </div>

        {/* Stage cards */}
        <div className="mt-14 md:mt-16 grid gap-12 md:gap-10 lg:gap-14 md:grid-cols-3">
          {stages.map((s) => (
            <article
              key={s.label}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Banner label */}
              <div
                className="relative mt-2 mx-3 sm:mx-4 md:mx-[15px] mb-1 px-6 sm:px-8 md:px-10 pt-[10px] pb-[6px]"
                style={{
                  background: s.bannerBg,
                  clipPath:
                    "polygon(0 0, 100% 0, 99% 100%, 3% 100%)",
                }}
              >
                <span
                  className="tracking-tight whitespace-nowrap text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]"
                  style={{
                    color: s.accent,
                    fontWeight: 900,
                  }}
                >
                  {s.label}
                </span>
              </div>

              {/* Grade */}
              <div
                className="mt-1 text-[14px] font-semibold"
                style={{ color: s.accent }}
              >
                ({s.grade})
              </div>

              {/* Body */}
              <p
                className="mt-1 max-w-[360px] text-[14px] leading-[1.75]"
                style={{ color: MUTED }}
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
