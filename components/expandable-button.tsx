"use client";
//File :- components/expandable-button.tsx
import { useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const themes = {
  light: {
    bg: "#fef0f6",
    border: "#f9d4e3",
    text: "#d73572",
    iconBg: "#d73572",
    iconStroke: "#ffffff",
  },
  dark: {
    bg: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.2)",
    text: "#ffffff",
    iconBg: "#d73572",
    iconStroke: "#ffffff",
  },
  solid: {
    bg: "#d73572",
    border: "#d73572",
    text: "#ffffff",
    iconBg: "#ffffff",
    iconStroke: "#d73572",
  },
} as const;

type Variant = keyof typeof themes;

export default function ExpandableButton({
  label = "Learn more",
  href,
  onClick,
  variant = "light",
  className = "",
}: {
  label?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const textWidth = useRef(0);
  const isOpen = useRef(false);
  const theme = themes[variant];

  useLayoutEffect(() => {
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;
    wrapper.style.width = "auto";
    textWidth.current = text.offsetWidth;
    wrapper.style.width = "0px";
  }, [label]);

  const expand = useCallback(() => {
    if (isOpen.current) return;
    isOpen.current = true;
    const root = rootRef.current;
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!root || !wrapper || !text) return;
    gsap.killTweensOf([root, wrapper, text]);
    const tl = gsap.timeline();
    tl.to(wrapper, {
      width: textWidth.current + 16,
      duration: 0.55,
      ease: "elastic.out(1, 0.72)",
    });
    tl.fromTo(
      text,
      { opacity: 0, x: 12 },
      { opacity: 1, x: 0, duration: 0.3, ease: "power3.out" },
      "-=0.45",
    );
    tl.to(root, { paddingLeft: 18, duration: 0.4, ease: "power3.out" }, 0);
  }, []);

  const collapse = useCallback(() => {
    if (!isOpen.current) return;
    isOpen.current = false;
    const root = rootRef.current;
    const wrapper = textWrapperRef.current;
    const text = textRef.current;
    if (!root || !wrapper || !text) return;
    gsap.killTweensOf([root, wrapper, text]);
    const tl = gsap.timeline();
    tl.to(text, { opacity: 0, x: 8, duration: 0.15, ease: "power2.in" });
    tl.to(
      wrapper,
      { width: 0, duration: 0.4, ease: "elastic.out(1, 0.8)" },
      "-=0.05",
    );
    tl.to(root, { paddingLeft: 5, duration: 0.35, ease: "power3.out" }, 0);
  }, []);

  const inner = (
    <>
      <div
        ref={textWrapperRef}
        className="overflow-hidden flex-shrink-0"
        style={{ width: 0 }}
      >
        <span
          ref={textRef}
          className="text-[15px] font-semibold whitespace-nowrap block pl-1 pr-3"
          style={{ color: theme.text }}
        >
          {label}
        </span>
      </div>
      <span
        className="flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: theme.iconBg }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.iconStroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </>
  );

  const styleObj = {
    height: 48,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: theme.bg,
    borderColor: theme.border,
  };

  if (href) {
    return (
      <a
        ref={rootRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseEnter={expand}
        onMouseLeave={collapse}
        onFocus={expand}
        onBlur={collapse}
        className={`inline-flex items-center gap-0 cursor-pointer rounded-full border w-fit ${className}`}
        style={styleObj}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={rootRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={expand}
      onMouseLeave={collapse}
      onFocus={expand}
      onBlur={collapse}
      className={`inline-flex items-center gap-0 cursor-pointer rounded-full border w-fit ${className}`}
      style={styleObj}
    >
      {inner}
    </button>
  );
}
