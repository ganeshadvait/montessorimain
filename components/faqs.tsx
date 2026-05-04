"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "How is Montessori Prime different from other schools?",
    answer:
      "We combine the best of both worlds: rigorous CBSE academics with Montessori's child-centered, hands-on philosophy. This means your child gets exam-ready academics without losing the joy of learning.",
  },
  {
    question: "What's included in the residential program?",
    answer:
      "Air-conditioned hostel, nutritious meals, 24/7 supervision, separate facilities for boys and girls, and a supportive environment where your child feels at home.",
  },
  {
    question: "How much individual attention does each child get?",
    answer:
      "We maintain optimized class strengths and use a teaching methodology that considers individual differences. Your child isn't just a number — they're known, understood, and guided personally.",
  },
  {
    question: "Are there opportunities for my child to explore their talents?",
    answer:
      "Absolutely! Beyond academics, we offer sports, languages, music, dance, art, and robotics. Every child has a chance to discover and develop their unique talents.",
  },
  {
    question:
      "What happens after high school? Does the school help with career guidance?",
    answer:
      "Yes! We provide dedicated mentorship and career guidance to help students make informed choices about higher education and their professional aspirations.",
  },
];

export default function FaqOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);

  const setContentRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      contentRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === 0) {
        gsap.set(el, { height: "auto", opacity: 1 });
      } else {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const toggle = useCallback(
    (index: number) => {
      if (isAnimating.current || index === activeIndex) return;
      isAnimating.current = true;

      const prevContent = contentRefs.current[activeIndex];
      const nextContent = contentRefs.current[index];

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      // Collapse previous
      if (prevContent) {
        tl.to(prevContent, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.inOut",
        });
      }

      // Expand new
      if (nextContent) {
        tl.to(
          nextContent,
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power3.inOut",
          },
          0.1,
        );
      }

      tl.call(() => setActiveIndex(index), [], 0.15);
    },
    [activeIndex],
  );

  return (
    <div className="w-full bg-[#faf6f1] ">
      <div className="max-w-[1224px] mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 lg:gap-24">
          {/* Left: CTA */}
          <div className="w-full md:w-[38%] flex flex-col justify-center">
            <p className="text-[26px] md:text-[32px] lg:text-[32px] leading-[1.3] tracking-[-0.02em]">
              <span className="text-[#b5b0a8]">
                We believe in meaningful conversations. To help you out, we
                provide
              </span>
              <br />
              <span className="text-[#1a1a1a] font-semibold">
                a free 20-minute call to answer your questions.
              </span>
            </p>

            <div className="mt-10">
              <button className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-[16px] font-medium px-8 py-4 rounded-full hover:bg-[#333] transition-colors duration-200">
                Book a free call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full md:w-[62%] flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f0ebe4] rounded-[16px] px-7 py-6 cursor-pointer transition-colors duration-200 hover:bg-[#ebe5dd]"
                onClick={() => toggle(index)}
              >
                {/* Question Row */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] leading-[1.4] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 7l5 5 5-5"
                        stroke="#1a1a1a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  ref={(el) => setContentRef(el, index)}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] md:text-[15px] text-[#7a756d] leading-[1.6] pt-4 pb-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
