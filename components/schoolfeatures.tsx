//File :- /components/schoolfeatures.tsx
"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function Features() {
  const data: {
    title: string;
    description: string;
    image: string;
    video?: string;
  }[] = [
    {
      title: "Practical Life",
      description:
        "Pouring, buttoning, sweeping — everyday activities that build coordination, concentration, and independence from the earliest years.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
      video: "https://assets.mixkit.co/videos/48169/48169-720.mp4",
    },
    {
      title: "Sensorial Materials",
      description:
        "The Pink Tower, colour tablets, and sound cylinders refine each of the senses and prepare the mind for abstract thinking.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Language & Phonics",
      description:
        "Sandpaper letters and the moveable alphabet guide children from spoken sounds to confident reading and writing.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Mathematics",
      description:
        "Number rods, spindle boxes, and the golden bead material take children from concrete quantity to abstract arithmetic.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Cultural Studies",
      description:
        "Geography, botany, zoology, history, and art open up the wider world and nurture a lifelong curiosity about it.",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Mixed-Age Classrooms",
      description:
        "Three-year age groupings let younger children learn by observation and older children deepen mastery by teaching peers.",
      image:
        "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1600&q=80",
      video: "https://assets.mixkit.co/videos/14956/14956-720.mp4",
    },
    {
      title: "Child-Led Learning",
      description:
        "Uninterrupted work cycles and freedom of choice let each child follow their own interest at their own pace.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
      video: "https://assets.mixkit.co/videos/23319/23319-720.mp4",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* IMAGE — PURE SLIDE ONLY (bottom → top) */
  const animateImage = () => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { y: 180, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
      },
    );
  };

  /* PILL — UNIFIED MORPH */
  const animatePillExpand = (index: number) => {
    const el = pillsRef.current[index];
    if (!el) return;

    const desc = el.querySelector("p");

    const tl = gsap.timeline({
      defaults: {
        duration: 0.22,
        ease: "power1.out",
      },
    });

    tl.fromTo(
      el,
      {
        borderRadius: 55,
        paddingTop: 12,
        paddingBottom: 12,
      },
      {
        borderRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
      },
      0,
    );

    if (desc) {
      tl.fromTo(desc, { opacity: 0, y: 4 }, { opacity: 1, y: 0 }, 0);
    }
  };

  const handlePillClick = (index: number) => {
    setActiveIndex(index);
    setExpandedIndex(index);

    requestAnimationFrame(() => {
      animateImage();
      animatePillExpand(index);
    });
  };

  const goPrev = () => {
    const newIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;

    setActiveIndex(newIndex);
    setExpandedIndex(newIndex);

    requestAnimationFrame(() => {
      animateImage();
      animatePillExpand(newIndex);
    });
  };

  const goNext = () => {
    const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(newIndex);
    setExpandedIndex(newIndex);

    requestAnimationFrame(() => {
      animateImage();
      animatePillExpand(newIndex);
    });
  };

  useLayoutEffect(() => {
    if (!imageRef.current) return;
    gsap.set(imageRef.current, { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="h-screen w-full bg-gray-100 p-0">
      <div className="h-full w-full  relative overflow-hidden">
        {/* MEDIA BACKDROP — animated div */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover will-change-transform"
          style={{
            backgroundImage: `url(${data[activeIndex].image})`,
          }}
        >
          {data[activeIndex].video && (
            <video
              key={data[activeIndex].video}
              src={data[activeIndex].video}
              poster={data[activeIndex].image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* NAV */}
        {expandedIndex !== null && (
          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <button
              onClick={goPrev}
              className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-2xl border border-white/25 shadow-lg shadow-black/10 text-white shadow-lg rotate-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-2xl border border-white/25 shadow-lg shadow-black/10 text-white shadow-lg rotate-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* PILLS — overlaid on backdrop */}
        <div className="absolute inset-y-0 left-0 z-10 flex flex-col justify-center gap-3 pl-8 md:pl-24 w-full md:w-[460px]">
          {data.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                ref={(el) => {
                  pillsRef.current[index] = el;
                }}
                onClick={() => handlePillClick(index)}
                className={`cursor-pointer w-fit rounded-[55px] backdrop-blur-2xl border border-white/25 shadow-lg shadow-black/10 text-white transition-all
                ${
                  isExpanded
                    ? "bg-white/15 px-6 py-5"
                    : "bg-white/10 px-6 py-3 hover:bg-white/20"
                }`}
              >
                <div className="flex items-center justify-start gap-4 w-fit">
                  {!isExpanded && <Plus size={16} />}
                  <h3 className="font-semibold text-white text-[15px]">
                    {item.title}
                  </h3>
                </div>

                {isExpanded && (
                  <p className="mt-3 text-white/85 text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
