//File :- components/home-training.tsx
const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#000000";

type ProgramCard = {
  title: string;
  body: string;
  iconClass: string;
  iconColor: string;
  cornerImg: string;
  cornerSide: "left" | "right";
};

const cards: ProgramCard[] = [
  {
    title: "Sports Training",
    body: "Sports plays an important role in the lives of students. It brings discipline in student's life. Sports is helpful in the mental and physical development of the students. At MPS we give training to students with trained Coaches. A plentiful of sports like Volleyball, Basketball, Cricket, Football, Skating, Swimming Pool, Martial Arts, Ludo, Carrom, Table Tennis, Chess etc.",
    iconClass: "flaticon-experience",
    iconColor: "#1FBABA",
    cornerImg: "/home/list-shape1.png",
    cornerSide: "left",
  },
  {
    title: "Music, Dance, Art Training",
    body: "The essence of Music, Dance and Art training allows students to become innovative and creative. A team of experts train students for vocal, instrumental music, classical dance, western dance and art and craft. With the training, students are able to showcase their talents confidently and fearlessly.",
    iconClass: "flaticon-guitar",
    iconColor: "#F4B919",
    cornerImg: "/home/list-shape3.png",
    cornerSide: "right",
  },
  {
    title: "Language Training",
    body: "Keeping the present scenario in mind, MPS has established an English Village where students get training on their speeches and are even taught ways to deliver speeches with proper voice modulation. We also teach one foreign language to match the pace of outside world.",
    iconClass: "flaticon-translation",
    iconColor: "#EF6B6B",
    cornerImg: "/home/list-shape2.png",
    cornerSide: "left",
  },
];

function ProgramTile({ card }: { card: ProgramCard }) {
  return (
    <article className="relative bg-white rounded-[10px] shadow-[0_8px_24px_rgba(35,26,61,0.06)] p-7 md:p-8 pt-9 md:pt-10">
      {/* Curved corner accent */}
      <img
        aria-hidden
        src={card.cornerImg}
        alt=""
        className={
          card.cornerSide === "right"
            ? "absolute top-0 right-0"
            : "absolute top-0 left-0"
        }
      />

      <div className="relative">
        <div
          className="icon mb-4 text-center"
          style={{ color: card.iconColor, fontSize: 48, lineHeight: 1 }}
        >
          <i className={card.iconClass} />
        </div>
        <h3
          className="text-[18px] md:text-[20px] font-bold tracking-tight text-center"
          style={{ color: INK }}
        >
          {card.title}
        </h3>
        <p
          className="mt-3 text-[14px] md:text-[15px] leading-[1.8] text-center"
          style={{ color: MUTED }}
        >
          {card.body}
        </p>
      </div>
    </article>
  );
}

export default function HomeTraining() {
  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/home/program-bg.jpg')" }}
    >
      <div className="relative mx-auto max-w-[1240px] grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-start">
        {/* LEFT — copy */}
        <div className="lg:pt-16">
          <h2
            className="text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.2] tracking-tight"
            style={{ color: INK }}
          >
            Guide the path to your professional journey
          </h2>
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.85]"
            style={{ color: MUTED }}
          >
            An ultra modern school Infrastructure building with FULLY
            Air-Conditioned class rooms. Optimized class strength for
            interactive learning Well stocked library, Modern 3D Laboratories
            for Physics, Chemistry, Biology, Linguistic, Math, Robotics.
          </p>
          <div className="mt-7 flex justify-center md:justify-start">
            <a
              href="/about/infrastructure"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
              style={{ background: PINK, color: "#ffffff" }}
            >
              <i className="flaticon-user" aria-hidden />
              Explore Now
            </a>
          </div>
        </div>

        {/* RIGHT — staggered cards */}
        <div className="relative">
          <img
            aria-hidden
            src="/home/circle-shape.png"
            alt=""
            className="program-circle-shape pointer-events-none absolute top-1/2 left-[33%] -z-0 w-[520px] max-w-none opacity-90 hidden md:block"
          />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <ProgramTile card={cards[0]} />
              <ProgramTile card={cards[2]} />
            </div>
            <div className="md:mt-20">
              <ProgramTile card={cards[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
