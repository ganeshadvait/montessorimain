"use client";
//File :- components/about/virtual-tour-accordion.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type VirtualTourItem = {
  title: string;
  embedUrl?: string;
  link?: string;
};

export type VirtualTourAccordionProps = {
  items: VirtualTourItem[];
};

export default function VirtualTourAccordion({
  items,
}: VirtualTourAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <p className="text-[15px] md:text-[16px] mb-5" style={{ color: "#2A8DC9" }}>
        Click on the title to view virtual tour.
      </p>

      <div className="flex flex-col">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.title}
              className="border-b border-[#e3e3e3] last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                style={{
                  background: isOpen ? "#e8f3fb" : "transparent",
                  color: isOpen ? "#2A8DC9" : "#231a3d",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[640px]" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-6 pt-2">
                  {item.embedUrl ? (
                    <div className="relative w-full aspect-[4/1.5] bg-[#f3f3f3]">
                      <iframe
                        src={item.embedUrl}
                        title={`Virtual tour - ${item.title}`}
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-[14px] font-semibold transition-opacity hover:opacity-90"
                      style={{ background: "#2A8DC9", color: "#ffffff" }}
                    >
                      View Virtual Tour
                      <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <div
                      className="w-full aspect-[16/9] flex items-center justify-center text-[14px]"
                      style={{ background: "#f3f3f3", color: "#8a8a93" }}
                    >
                      Tour for &ldquo;{item.title}&rdquo; coming soon.
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
