"use client";
//File :- components/about/facility-section.tsx
import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

export type FacilityTab = {
  label: string;
  content: ReactNode;
};

export type FacilitySectionProps = {
  image: string;
  imageAlt: string;
  tabs: FacilityTab[];
  imageOnLeft?: boolean;
  background?: string;
};

export const Heading = ({ children }: { children: ReactNode }) => (
  <h3
    className="text-[22px] md:text-[26px] font-semibold tracking-tight mt-2 mb-3"
    style={{ color: "#231a3d" }}
  >
    {children}
  </h3>
);

export const Paragraph = ({ children }: { children: ReactNode }) => (
  <p
    className="text-[15px] md:text-[16px] leading-[1.85] mb-6"
    style={{ color: "gray" }}
  >
    {children}
  </p>
);

export const ChevronListItem = ({ children }: { children: ReactNode }) => (
  <li
    className="flex gap-2 text-[15px] md:text-[16px] leading-[1.85]"
    style={{ color: "#5B96AA" }}
  >
    <span aria-hidden className="font-bold mt-0.5" style={{ color: "#231a3d" }}>
      »
    </span>
    <span>{children}</span>
  </li>
);

export default function FacilitySection({
  image,
  imageAlt,
  tabs,
  imageOnLeft = true,
  background = "#ffffff",
}: FacilitySectionProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full" style={{ background }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div
          className={`flex flex-col gap-10 md:gap-16 items-start ${
            imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Tabs + Content */}
          <div className="w-full md:w-1/2">
            {/* Tab headers */}
            <ul
              className="list-none p-0 flex flex-wrap"
              style={{
                marginBottom: "35px",
                borderBottom: "0.2px solid #d8d8d8",
              }}
            >
              {tabs.map((tab, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={tab.label}
                    className="inline-block"
                    style={{ marginRight: "50px", marginBottom: "-1px" }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group block cursor-pointer relative bg-transparent border-0"
                      style={{
                        padding: "0 0 10px",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#231a3d",
                      }}
                    >
                      {tab.label}
                      <span
                        aria-hidden
                        className={`absolute left-0 right-0 bottom-0 h-[1.5px] origin-left transition-transform duration-300 ease-out ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ background: "#E91E63" }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Tab content */}
            <div>{tabs[active].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
