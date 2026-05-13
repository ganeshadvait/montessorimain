//File :- src/app/about/page.tsx
import PageHero from "../../../components/page-hero";

const INK = "#231a3d";
const MUTED = "#5e5e6e";
const NUMBER_GRAY = "#cfcfd4";

type Pillar = {
  number: string;
  title: string;
  body: React.ReactNode;
};

const pillarsTop: Pillar[] = [
  {
    number: "1",
    title: "Our Mission",
    body: (
      <>
        <p>
          Montessori Prime School is committed to the cause of quality
          education, where faculty, staff and administration, in partnership
          with parents, students and community are committed to provide a safe
          and disciplined learning environment that promotes the academic,
          intellectual, personal and social development of our children.
        </p>
        <p className="mt-6">
          Montessori faculty have outstanding credentials in their fields of
          expertise. We invite not only the most qualified and best teachers,
          but also individuals that understand and embrace our vision and
          institutional commitments. Montessori schools have a long history of
          challenging itself to strengthen the delivery of its curriculum by
          adopting best practices. All Montessori teachers go through various
          orientation programmes organized by the management.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Our Vision",
    body: (
      <>
        <p>
          Our Vision is to be a Premier Global Educational Institution that
          cultivates academic, physical, psychological and social well-being
          through our motto Excellence in Education and All Round Development
          and &quot;Moulding Global Citizen&quot;
        </p>
        <p className="mt-6">
          The rich diversity within our student community is now one of our key
          strengths. Telangana is noted for having the very highest educational
          expectations in the world. As the desire for high quality education
          has grown, our school has responded to meet this demand. In the days
          to come, we will continue to ensure that Montessori is responsive to
          Telangana&apos;s changing needs.
        </p>
      </>
    ),
  },
];

const pillarsBottom: Pillar[] = [
  {
    number: "3",
    title: "Our Programs",
    body: (
      <>
        <p>
          Montessori Prime School is a K-XII class, co-educational school,
          offering a choice between Residential, Weekly Boarding and Day
          Scholastic programs. The school offers a full day program of
          activities, with a judicious mix of academic, sporting and
          co-curricular activities, in order to provide truly board based and
          comprehensive all round education. The education program is student
          centered and all students are encouraged to develop their innate
          potential to the fullest. A rigorous curriculum has been devised to
          take care of the intellectual needs of its students, with a specific
          emphasis on preparation for further academic study in India or
          aboard. A humane attitude in the school promotes self esteem,
          supports and encourages constructive student interaction.
        </p>
        <p className="mt-6">
          The students are encouraged to set career goals for themselves; to
          hone their learning and study skills as well as their interpersonal
          and leadership abilities. In the area of career enhancement, students
          have opportunities to connect with mentors through our career
          counseling and Life-skills programs, run by qualified professional
          teams.
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Creative Skills",
    body: (
      <>
        <p>
          We believe that creative achievements build a confident human being
          with great self worth and esteem. Music and dance, theatre, pottery
          and painting, crafting models are not just extracurricular
          activities; they are co-curricular activities integrated to their
          course of study to let the children understand how all learning is
          interconnected-baking with Chemistry, bowling with Physics, music
          with Mathematics.
        </p>
        <p className="mt-6">
          Montessori Prime sows the seeds of discipline in all the children in
          such a way that they germinate into complete human beings. The
          curricula themselves have the discipline aspect embedded within
          them. With this, a child learns to obey and respect time and
          punctuality gets into his/her blood forever.
        </p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About Us"
      />

      {/* Introduction */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
          <div className="grid gap-10 md:gap-14 lg:gap-20 md:grid-cols-2 items-start">
            {/* Image */}
            <div className="w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#f3ede4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/montessori aboutus img.png"
                  alt="Montessori Prime School faculty and staff group photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full">
              <h2
                className="text-[25px] md:text-[34px] lg:text-[30px] font-bold tracking-tight"
                style={{ color: INK }}
              >
                Introduction
              </h2>

              <div
                className="mt-6 md:mt-8 space-y-6 text-[15px] md:text-[16px] leading-[1.85]"
                style={{ color: MUTED }}
              >
                <p>
                  Primo Enterprises is the Registered partnership firm. This
                  firm is constituted to facilitate auxiliary services to
                  support Educational and other allied activities in respect of
                  Montessori Group Of Schools in Telangana State. This
                  partnership firm with all its partners have constructed
                  Montessori Prime School at Yellapur, which is spread over 9
                  acres of land on the Warangal-Karimnagar highway, with all
                  the International Standards and it has facilities like Air
                  conditioned School Block, AC Residential accommodation
                  separately for Girls &amp; Boys, various play courts like
                  Volleyball court, Badminton court, Shuttle court, Basketball
                  court, Skating zone, Cricket zone, Athletic Track along with
                  a Swimming pool.
                </p>
                <p>
                  Primo Enterprises has given this premises to Montessori
                  Educational Society, Bhupalapally to run their Educational
                  Institutions on a long term lease Basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-12 md:pb-20">
          <div className="flex flex-col gap-12 md:gap-16">
            {pillarsTop.map((p) => (
              <div
                key={p.number}
                className="grid gap-6 md:gap-10 lg:gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-start"
              >
                {/* Number + Title */}
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="font-bold leading-none italic select-none text-[20px] md:text-[80px] lg:text-[42px]"
                    style={{ color: NUMBER_GRAY }}
                    aria-hidden
                  >
                    {p.number}
                  </span>
                  <h3
                    className="text-[18px] md:text-[28px] lg:text-[22px] font-bold tracking-tight"
                    style={{ color: INK }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div
                  className="text-[15px] md:text-[16px] leading-[1.85]"
                  style={{ color: MUTED }}
                >
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collage banner */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-12 md:pb-20">
          <div className="relative w-full overflow-hidden rounded-sm bg-[#f3ede4] aspect-[16/9] md:aspect-[21/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/aboutus college img.png"
              alt="Montessori Prime School student performances and events collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programs & Creative Skills */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
          <div className="flex flex-col gap-12 md:gap-16">
            {pillarsBottom.map((p) => (
              <div
                key={p.number}
                className="grid gap-6 md:gap-10 lg:gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-start"
              >
                {/* Number + Title */}
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="font-bold leading-none italic select-none text-[20px] md:text-[80px] lg:text-[42px]"
                    style={{ color: NUMBER_GRAY }}
                    aria-hidden
                  >
                    {p.number}
                  </span>
                  <h3
                    className="text-[18px] md:text-[28px] lg:text-[22px] font-bold tracking-tight"
                    style={{ color: INK }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div
                  className="text-[15px] md:text-[16px] leading-[1.85]"
                  style={{ color: MUTED }}
                >
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
