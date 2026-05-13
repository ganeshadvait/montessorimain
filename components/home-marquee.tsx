//File :- components/home-marquee.tsx

const MESSAGE = (
  <>
    <span style={{ color: "#16a34a" }}>✅</span> Happy Republic Day{" "}
    <span className="mx-3 text-[#b8b8c0]">|</span>{" "}
    <span style={{ color: "#F4B919" }}>✨</span> TARANG: Chapter 1 — LIVE on
    Dec 6, 4 PM!{" "}
    <a
      href="#watch"
      className="inline-flex items-center gap-1 hover:underline"
      style={{ color: "#1d4ed8" }}
    >
      <span style={{ color: "#1d4ed8" }}>▶️</span> Watch Now
    </a>{" "}
    <span className="mx-3 text-[#b8b8c0]">|</span>{" "}
    <strong style={{ color: "#231a3d" }}>
      Admissions Now Open for 2026–2027 at Montessori Prime School!
    </strong>{" "}
    🎓
  </>
);

export default function HomeMarquee() {
  return (
    <section
      aria-label="Announcements"
      className="relative w-full bg-white overflow-hidden border-y"
      style={{ borderColor: "#e5e5e5" }}
    >
      <style>{`
        @keyframes home-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .home-marquee-track { animation: home-marquee 38s linear infinite; }
        .home-marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .home-marquee-track { animation: none; }
        }
      `}</style>

      <div className="home-marquee-track flex w-max items-center gap-12 py-3 whitespace-nowrap text-[15px] text-[#231a3d]">
        <span className="px-6">{MESSAGE}</span>
        <span className="px-6">{MESSAGE}</span>
      </div>
    </section>
  );
}
