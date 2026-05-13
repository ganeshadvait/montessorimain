//File :- components/about/house-section.tsx
import Image from "next/image";
import type { ReactNode } from "react";

export type HouseSectionProps = {
  name: string;
  description: ReactNode;
  features: string[];
  image: string;
  imageOnLeft?: boolean;
  background?: string;
};

const FeatureIcon = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
        <path
          d="M6 22 L14 14 L18 18 L26 10"
          stroke="#E91E63"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10 L26 10 L26 14"
          stroke="#E91E63"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="6" cy="22" r="1.5" fill="#E91E63" />
        <path d="M20 26 L22 24 L24 26 L23 28 Z" fill="#E91E63" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="#E91E63"
          strokeWidth="2"
          fill="none"
          strokeDasharray="2 2"
        />
        <path
          d="M16 9 L16 16 L21 19"
          stroke="#E91E63"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
      <rect
        x="6"
        y="8"
        width="20"
        height="16"
        rx="1.5"
        stroke="#E91E63"
        strokeWidth="2"
        fill="none"
      />
      <path d="M6 14 L26 14" stroke="#E91E63" strokeWidth="2" />
      <path
        d="M10 18 L14 18 M10 21 L18 21"
        stroke="#E91E63"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function HouseSection({
  name,
  description,
  features,
  image,
  imageOnLeft = true,
  background = "#ffffff",
}: HouseSectionProps) {
  return (
    <section className="w-full" style={{ background }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div
          className={`flex flex-col gap-10 md:gap-16 items-center ${
            imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2
              className="font-bold tracking-tight text-[26px] md:text-[34px] lg:text-[38px] mb-5"
              style={{ color: "#231a3d" }}
            >
              {name}
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.85] text-[#6a6a78] mb-8">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {features.map((feature, i) => (
                <div key={feature} className="flex items-center gap-3">
                  <FeatureIcon index={i} />
                  <span
                    className="text-[15px] md:text-[16px] font-bold"
                    style={{ color: "#231a3d" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
