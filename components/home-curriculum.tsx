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
    bannerBg: "#CFEAE8",
    accent: "#1FBABA",
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
      {/* Floating decorative — kite top right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/curriculum-sec-floatimages/kiteimage.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-4 md:right-12 top-6 md:top-10 w-[120px] md:w-[180px] select-none"
      />

      {/* Floating decorative — star bottom left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/curriculum-sec-floatimages/staricon.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-4 md:left-12 bottom-6 md:bottom-10 w-[70px] md:w-[90px] select-none"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span
            className="text-[13px] font-bold uppercase tracking-[0.18em]"
            style={{ color: PINK }}
          >
            OUR CURRICULUM
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight"
            style={{ color: INK }}
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
        <div className="mt-14 md:mt-16 grid gap-10 md:gap-8 md:grid-cols-3">
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
                className="relative mt-2 px-10 py-3"
                style={{
                  background: s.bannerBg,
                  clipPath:
                    "polygon(0 0, 100% 0, 94% 50%, 100% 100%, 0 100%, 6% 50%)",
                }}
              >
                <span
                  className="text-[18px] md:text-[20px] font-bold tracking-tight whitespace-nowrap"
                  style={{ color: s.accent }}
                >
                  {s.label}
                </span>
              </div>

              {/* Grade */}
              <div
                className="mt-5 text-[14px] font-semibold"
                style={{ color: s.accent }}
              >
                ({s.grade})
              </div>

              {/* Body */}
              <p
                className="mt-4 max-w-[360px] text-[14px] leading-[1.75]"
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
