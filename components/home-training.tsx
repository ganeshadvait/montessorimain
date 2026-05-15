//File :- components/home-training.tsx
import { Trophy, Music, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PINK = "#E91E63";
const INK = "#231a3d";
const MUTED = "#5B96AA";

type ProgramCard = {
  title: string;
  body: string;
  cornerColor: string;
  icon: LucideIcon;
};

const cards: ProgramCard[] = [
  {
    title: "Sports Training",
    body: "Sports plays an important role in the lives of students. It brings discipline in student's life. Sports is helpful in the mental and physical development of the students. At MPS we give training to students with trained Coaches. A plentiful of sports like Volleyball, Basketball, Cricket, Football, Skating, Swimming Pool, Martial Arts, Ludo, Carrom, Table Tennis, Chess etc.",
    cornerColor: "#1FBABA",
    icon: Trophy,
  },
  {
    title: "Music, Dance, Art Training",
    body: "The essence of Music, Dance and Art training allows students to become innovative and creative. A team of experts train students for vocal, instrumental music, classical dance, western dance and art and craft. With the training, students are able to showcase their talents confidently and fearlessly.",
    cornerColor: "#F4B919",
    icon: Music,
  },
  {
    title: "Language Training",
    body: "Keeping the present scenario in mind, MPS has established an English Village where students get training on their speeches and are even taught ways to deliver speeches with proper voice modulation. We also teach one foreign language to match the pace of outside world.",
    cornerColor: "#EF6B6B",
    icon: Languages,
  },
];

function ProgramTile({ card }: { card: ProgramCard }) {
  const Icon = card.icon;
  return (
    <article className="relative bg-white rounded-[10px] shadow-[0_8px_24px_rgba(35,26,61,0.06)] p-7 md:p-8 pt-9 md:pt-10">
      {/* Top-left curved corner accent */}
      <span
        aria-hidden
        className="absolute top-0 left-0"
        style={{
          width: "42px",
          height: "42px",
          background: card.cornerColor,
          borderTopLeftRadius: "10px",
          borderBottomRightRadius: "100%",
        }}
      />

      <div className="relative">
        <Icon size={36} className="mb-4" style={{ color: PINK }} />
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
          <a
            href="/about/infrastructure"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold transition-opacity hover:opacity-90"
            style={{ background: PINK, color: "#ffffff" }}
          >
            Explore Now
          </a>
        </div>

        {/* RIGHT — staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            <ProgramTile card={cards[0]} />
            <ProgramTile card={cards[2]} />
          </div>
          <div className="md:mt-20">
            <ProgramTile card={cards[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
