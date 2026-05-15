//File :- components/home-video.tsx
import Image from "next/image";
import { Play } from "lucide-react";

const PINK = "#E91E63";

export default function HomeVideo() {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/home/cream-bg.jpg')" }}
    >
      {/* Animation keyframes */}
      <style>{`
        @keyframes home-video-horizontal {
          0%, 100% { transform: translateX(-5cm); }
          50% { transform: translateX(5cm); }
        }
        @keyframes home-video-vertical {
          0%, 100% { transform: translateY(-5cm); }
          50% { transform: translateY(5cm); }
        }
        @keyframes home-video-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .home-video-dots {
          animation: home-video-horizontal 2s ease-in-out infinite;
        }
        .home-video-lines {
          animation: home-video-vertical 2s ease-in-out infinite;
        }
        .home-video-circle {
          animation: home-video-spin 2s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="relative mx-auto w-full max-w-[760px]">
          {/* Horizontal dots — left, slides left/right */}
          <div
            aria-hidden
            className="home-video-dots absolute -left-24 md:-left-32 top-1/2 -translate-y-1/2 pointer-events-none z-0"
          >
            <Image
              src="/home/horizontal dots.png"
              alt=""
              width={160}
              height={220}
              className="opacity-90"
            />
          </div>

          {/* Yellow circle — top-right, rotates */}
          <div
            aria-hidden
            className="home-video-circle absolute -right-16 md:-right-24 -top-10 pointer-events-none z-0"
            style={{ transformOrigin: "center" }}
          >
            <Image
              src="/home/yellow cirecle rotation.png"
              alt=""
              width={120}
              height={120}
            />
          </div>

          {/* Three lines — bottom-right, slides up/down */}
          <div
            aria-hidden
            className="home-video-lines absolute -right-16 md:-right-24 bottom-0 pointer-events-none z-0"
          >
            <Image
              src="/home/three lines.png"
              alt=""
              width={160}
              height={120}
            />
          </div>

          {/* Main video frame */}
          <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden shadow-lg z-10">
            <Image
              src="/montassori.jpg"
              alt="Montessori Prime School"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover"
            />
            {/* Play button overlay */}
            <button
              type="button"
              aria-label="Play school video"
              className="absolute inset-0 m-auto w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
              style={{ background: PINK }}
            >
              <Play size={28} fill="#ffffff" className="text-white ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
