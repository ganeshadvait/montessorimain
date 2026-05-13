//File :- src/app/about/founders/page.tsx
import type { ReactNode } from "react";
import PageHero from "../../../../components/page-hero";

const INK = "#231a3d";
const MUTED = "#5e5e6e";
const RED = "#e6334a";
const PLACEHOLDER_BG = "#ece4d6";

type Faculty = {
  name: string;
  subject: string;
  image: string;
};

const faculty: Faculty[] = [
  { name: "A. Sharanya, B.Tech(IT),B.Ed", subject: "Science Faculty", image: "/aparnamol thomas img.jpg" },
  { name: "Amin Baby", subject: "Social", image: "/amin baby img.jpg" },
  { name: "Aparnamol Thomas", subject: "Chemistry", image: "/aparnamol thomas img.jpg" },
  { name: "Enaganti Sandhya Rani", subject: "Biology", image: "/sandhya rani img.jpg" },
  { name: "Gh Hassan Dar", subject: "English", image: "/hassan img.jpg" },
  { name: "Gurijala Janaki", subject: "Maths", image: "/janaki img.jpg" },
  { name: "Kandikonda Rambabu", subject: "Physics", image: "/rambabu img.jpg" },
  { name: "Kavitha Pandey", subject: "Hindi", image: "/kavitha img.jpg" },
  { name: "Kolla Srinivas Reddy", subject: "Physics", image: "/srinias reddy img.jpg" },
  { name: "Mayuri Prakash Saudagar", subject: "Hindi", image: "/mayuri img.jpg" },
  { name: "Mekala Praveen Kumar", subject: "Biology", image: "/praveen kumar img.jpg" },
  { name: "Mohammed Ashjil", subject: "Computer", image: "/mohammed img.jpg" },
  { name: "Pusala Divya", subject: "Library", image: "/divya img.jpg" },
  { name: "Sarvam Sravani", subject: "Physics", image: "/sravani img.jpg" },
  { name: "Shagufta Babar", subject: "English", image: "/shagufta img.jpg" },
  { name: "Shveta Singh", subject: "Social", image: "/shveta img.jpg" },
];

function PortraitCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="relative w-full">
      <div
        className="relative w-full overflow-hidden rounded-[2px] aspect-square"
        style={{ background: PLACEHOLDER_BG }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 md:bottom-10 right-0 rounded-l-[10px] rounded-r-none bg-white shadow-md px-5 py-3 md:px-7 md:py-4 text-[13px] md:text-[14px]"
          style={{ color: INK }}
        >
          {caption}
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase"
      style={{ color: RED }}
    >
      {children}
    </p>
  );
}

export default function FoundersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Founders" },
        ]}
        title="Founders"
      />

      {/* Section 1 — Chairman */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
          <div className="grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
            <div className="w-full max-w-[420px] mx-auto md:mx-0">
              <PortraitCard
                src="/chairman.png"
                alt="Mr. Jose Nedumthundam, Founder and Chairman"
                caption="Chairman Message"
              />
            </div>

            <div className="w-full">
              <Eyebrow>Founder and Chairman</Eyebrow>
              <h2
                className="mt-3 text-[26px] md:text-[34px] lg:text-[38px] font-bold tracking-tight"
                style={{ color: INK }}
              >
                Mr. Jose Nedumthundam
              </h2>

              <div
                className="mt-5 md:mt-6 space-y-4 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                <p>I am dedicated to</p>
                <p className="font-semibold" style={{ color: INK }}>
                  MOULDING THE GLOBAL CITIZENS.
                </p>
                <p>
                  I take pride in stating that Montessori Group of Schools has
                  been successful in proving true to the words of Willa A.
                  Foster.
                </p>
              </div>

              <div className="mt-6">
                <blockquote
                  className="px-6 md:px-8 py-5 md:py-6 text-[15px] md:text-[16px] leading-[1.7]"
                  style={{ background: "#f1f1f1", color: INK }}
                >
                  &ldquo;Quality is never an accident; it is always the result
                  of high intention, sincere effort, intelligent direction and
                  skilful execution; it represents the wise choice of many
                  alternatives&rdquo;
                </blockquote>
              </div>

              <div
                className="mt-6 space-y-4 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                <p>
                  Our Montessori Group of institutions has carefully trudged up
                  the road of Achievements, consistently striving for
                  betterment and has carved a niche for itself in the education
                  fraternity.
                </p>
              </div>
            </div>
          </div>

          {/* Continuation paragraphs + signature */}
          <div
            className="mt-10 md:mt-12 space-y-5 text-[15px] md:text-[16px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            <p>
              Twenty Eight years ago, I laid the foundation of my dream project
              – Montessori Group of Institutions. In these twenty eight years,
              India has been abundantly blessed with material wealth and
              economic progress. But economic wealth is not enough to shape a
              future. The real wealth of our nation lies in the intellectual
              power of our future generations. We, at Montessori, believe that
              it is our role to enhance this intellectual wealth for our next
              generation. I have since made it my commitment to equip young
              India with all the tools, skills and know-how it requires to
              stand toe to toe with the best in the world. Education is not
              simply about academic achievement. For me, it has always been
              about being a global citizen. – One who cares for and is
              empowered by the challenges of our future society. This can only
              be realized by imparting quality education, specially focused on
              development of &ldquo;KASSM&rdquo; (Knowledge, Attitude, Skills,
              Social and Moral values). At Montessori schools, we are nurturing
              and building these citizens every day, both within and outside
              the classroom.
            </p>
            <p>
              But even though we are looking towards the future, at Montessori,
              our foundations are deeply – rooted. We stay true to our
              traditions while adapting to the pace of progress. Prayers have
              always been a strong moral foundation. I strongly believe that
              in Montessori each stakeholder will be benefitted to reach the
              goal in the specified field.
            </p>
            <p>
              My family and I trust in the Mighty Lord and always believe in
              the power of the Lord&rsquo;s grace to guide us.
            </p>
          </div>

          <div
            className="mt-8 md:mt-10 space-y-1 text-[15px] md:text-[16px] font-semibold"
            style={{ color: INK }}
          >
            <p>With Best Wishes,</p>
            <p>Jose Nedumthundam</p>
            <p>M.A. (Pol), M.A.(Pub.Admn.) M.Ed</p>
            <p>Founder and Chairman</p>
            <p>Montessori Group of Institutions</p>
          </div>
        </div>
      </section>

      {/* Section 2 — Vice Chairman + Principal (shared container) */}
      <section className="w-full" style={{ background: "#F6F1ED" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28 space-y-20 md:space-y-32">
          {/* Vice Chairman (reversed) */}
          <div className="grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div className="w-full md:order-1 order-2">
              <Eyebrow>Vice Chairman Message</Eyebrow>
              <h2
                className="mt-3 text-[26px] md:text-[34px] lg:text-[38px] font-bold tracking-tight"
                style={{ color: INK }}
              >
                Mr. SEAN JOSE, B.COM, PGDMA, B.Ed.
              </h2>

              <p
                className="mt-5 md:mt-6 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                Greetings from the Vice Chairman&rsquo;s Desk.
              </p>

              <div className="mt-5">
                <blockquote
                  className="rounded-lg px-6 md:px-8 py-5 md:py-6 text-[15px] md:text-[16px] leading-[1.7]"
                  style={{ background: "#ffffff", color: INK }}
                >
                  &ldquo;Intelligence plus character that is the true goal of
                  education.&rdquo;
                </blockquote>
              </div>

              <div
                className="mt-6 space-y-4 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                <p>
                  Education is a key which unlocks numerous doors that will
                  lead to success. It is a tool that increases productivity,
                  helps in better task completion and builds a better life.
                  Montessori Prime School is an amazing place to learn and
                  grow. We are proud of our wonderful school and have high
                  expectations for each and every student. A key success
                  indicator of our institution is the strong bond our teachers
                  and staff foster with the family and the child, and with the
                  community. Our high-quality teaching and education programs
                  will develop their knowledge. At MPS students are encouraged
                  to take part and develop not only their skills in the
                  activities but also as collaborators who can work with others
                  in kindness. There is only one way to fully experience and
                  appreciate what our school has to offer and that is to visit
                  the school.
                </p>
                <p>---***---</p>
              </div>
            </div>

            <div className="w-full max-w-[420px] mx-auto md:mx-0 md:order-2 order-1">
              <PortraitCard
                src="/vicechairman.png"
                alt="Mr. Sean Jose, Vice Chairman"
                caption="Vice Chairman"
              />
            </div>
          </div>

          {/* Principal */}
          <div className="grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div className="w-full md:order-1 order-2">
              <Eyebrow>Message From the Principal</Eyebrow>

              <div
                className="mt-5 md:mt-6 space-y-4 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                <p>Dear Parents and Students,</p>
                <p>
                  It is with great pride and deep joy that I welcome you to
                  Montessori Prime School — an institution where education
                  transcends conventional boundaries and evolves into a journey
                  of transformation, enlightenment, and purpose.
                </p>
                <p>
                  At Montessori Prime School, we hold a steadfast belief that
                  every child is a unique masterpiece of potential, brilliance,
                  and imagination. Our vision is to nurture these young minds
                  with sensitivity and wisdom, empowering them to become not
                  only successful scholars but also compassionate human beings
                  and responsible global citizens.
                </p>
                <p>
                  Education, to us, is not confined to the acquisition of
                  knowledge — it is the awakening of curiosity, the
                  cultivation of character, and the celebration of creativity.
                  We aspire to provide an atmosphere where learning is both
                  joyful and profound, where intellect meets empathy, and
                  where excellence is pursued with humility and grace.
                </p>
                <p>
                  Our dedicated faculty members are the pillars of this
                  vision. With unwavering commitment, they inspire students to
                  think critically, question deeply, and act ethically.
                  Together, we strive to create a learning ecosystem that
                  harmonises tradition with innovation, discipline with
                  freedom, and aspiration with grounded values.
                </p>
                <p>
                  In an era of rapid change, our goal is to prepare learners
                  who can lead with clarity, adapt with confidence, and serve
                  with compassion. We envision our students stepping into the
                  world as torchbearers of integrity, courage, and wisdom —
                  ready to illuminate whatever path they choose.
                </p>
                <p>
                  As you explore our website, I invite you to experience the
                  essence of Montessori Prime School — a sanctuary of
                  learning, a cradle of dreams, and a home where every
                  child&rsquo;s journey is cherished and celebrated.
                </p>
              </div>

              <div
                className="mt-6 space-y-1 text-[15px] md:text-[16px] font-semibold"
                style={{ color: INK }}
              >
                <p>With warm regards and best wishes,</p>
                <p>INAGALA SWETHA</p>
                <p>Principal</p>
              </div>
            </div>

            <div className="w-full max-w-[420px] mx-auto md:mx-0 md:order-2 order-1">
              <PortraitCard
                src="/principal.png"
                alt="Inagala Swetha, Principal"
                caption="Principal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Faculty grid */}
      <section className="w-full bg-[#fafafa]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
          <div className="text-center max-w-[720px] mx-auto">
            <Eyebrow>Instructor</Eyebrow>
            <h2
              className="mt-3 text-[26px] md:text-[34px] lg:text-[40px] font-bold tracking-tight"
              style={{ color: INK }}
            >
              Best Faculty From Montessori Prime School
            </h2>
            <p
              className="mt-4 text-[14px] md:text-[15px] leading-[1.7]"
              style={{ color: MUTED }}
            >
              the knowledge which has gives to students to teaches in a very
              unique way of giving theoretical.
            </p>
          </div>

          <div className="mt-10 md:mt-14 grid gap-6 md:gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {faculty.map((f) => (
              <article
                key={f.name}
                className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col aspect-[4/5]"
              >
                <div
                  className="basis-[58%] shrink-0 relative w-full overflow-hidden"
                  style={{ background: PLACEHOLDER_BG }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="basis-[42%] shrink-0 flex flex-col items-center justify-center px-4 md:px-5 text-center">
                  <h3
                    className="text-[15px] md:text-[17px] font-bold leading-snug"
                    style={{ color: INK }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="mt-2 md:mt-3 text-[12px] md:text-[13px]"
                    style={{ color: RED }}
                  >
                    {f.subject}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
