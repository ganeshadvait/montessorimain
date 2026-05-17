//File :- components/home-training-v2.tsx

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5e5e6e";

type ProgramCard = {
  number: string;
  title: string;
  body: string;
  iconClass: string;
  accent: string;
  accentSoft: string;
};

const cards: ProgramCard[] = [
  {
    number: "01",
    title: "Sports Training",
    body:
      "Sports plays an important role in the lives of students. It brings discipline in student's life. Sports is helpful in the mental and physical development of the students. At MPS we give training to students with trained Coaches. A plentiful of sports like Volleyball, Basketball, Cricket, Football, Skating, Swimming Pool, Martial Arts, Ludo, Carrom, Table Tennis, Chess etc.",
    iconClass: "flaticon-experience",
    accent: "#1FBABA",
    accentSoft: "#E4F5F5",
  },
  {
    number: "02",
    title: "Music, Dance, Art Training",
    body:
      "The essence of Music, Dance and Art training allows students to become innovative and creative. A team of experts train students for vocal, instrumental music, classical dance, western dance and art and craft. With the training, students are able to showcase their talents confidently and fearlessly.",
    iconClass: "flaticon-guitar",
    accent: "#F4B919",
    accentSoft: "#FBEFCF",
  },
  {
    number: "03",
    title: "Language Training",
    body:
      "Keeping the present scenario in mind, MPS has established an English Village where students get training on their speeches and are even taught ways to deliver speeches with proper voice modulation. We also teach one foreign language to match the pace of outside world.",
    iconClass: "flaticon-translation",
    accent: "#EF6B6B",
    accentSoft: "#FDE6E6",
  },
];

export default function HomeTrainingV2() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[680px] text-center">
          <span
            className="text-[13px] font-bold uppercase tracking-[0.22em]"
            style={{ color: PINK }}
          >
            OUR TRAINING
          </span>
          <h2
            className="mt-3 text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight"
            style={{ color: INK }}
          >
            Guide the path to your{" "}
            <span style={{ color: PINK }}>professional journey</span>
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.8]"
            style={{ color: MUTED }}
          >
            An ultra modern school infrastructure with fully air-conditioned
            classrooms, optimised class strength, well-stocked library, and
            modern 3D laboratories for Physics, Chemistry, Biology, Linguistic,
            Math, and Robotics.
          </p>
        </div>

        {/* Alternating stripes */}
        <div className="mt-14 md:mt-20 space-y-12 md:space-y-16">
          {cards.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={c.title}
                className={`grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-center ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Icon panel */}
                <div
                  className="relative aspect-square w-1/2 mx-auto md:w-auto md:mx-0 md:[direction:ltr] overflow-hidden rotate-5 hover:rotate-0 transition-transform duration-500 ease-out"
                  style={{
                    background: c.accentSoft,
                    borderRadius: 16,
                  }}
                >
                  {/* big translucent number */}
                  <span
                    aria-hidden
                    className="absolute -top-4 -right-2 text-[140px] md:text-[180px] font-bold leading-none select-none"
                    style={{ color: c.accent, opacity: 0.18 }}
                  >
                    {c.number}
                  </span>

                  {/* icon centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                      style={{ color: c.accent }}
                    >
                      <i
                        className={c.iconClass}
                        style={{ fontSize: 44, lineHeight: 1 }}
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div className="md:[direction:ltr]">
                  <div
                    className="flex items-center gap-3 mb-3"
                    style={{ color: c.accent }}
                  >
                    <span
                      className="text-[14px] font-semibold tabular-nums"
                      style={{ color: c.accent }}
                    >
                      {c.number}
                    </span>
                    <span
                      className="block w-12 h-[2px]"
                      style={{ background: c.accent }}
                    />
                  </div>
                  <h3
                    className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight"
                    style={{ color: INK }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-4 text-[14px] md:text-[15px] leading-[1.85]"
                    style={{ color: MUTED }}
                  >
                    {c.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 flex justify-center">
          <a
            href="/about/infrastructure"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
            style={{ background: PINK, color: "#ffffff" }}
          >
            <i className="flaticon-user" aria-hidden />
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
