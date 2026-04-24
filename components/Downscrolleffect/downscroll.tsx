"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "lenis";
import styles from "./downscroll.module.scss";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function Downscroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const splitText = new SplitType(".opacity-reveal", { types: "chars" });
    gsap.set(splitText.chars, { opacity: 0.2, y: 0 });

    const revealTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-stick",
        pin: true,
        start: "center center",
        end: "+=1500",
        scrub: 1,
      },
    });

    revealTimeline
      .to(splitText.chars, {
        opacity: 1,
        duration: 1,
        ease: "none",
        stagger: 1,
      })
      .to({}, { duration: 10 })
      .to(".opacity-reveal", {
        opacity: 0,
        scale: 1.2,
        duration: 50,
      });

    // Effect 1: Move Text DOWN (slower than scroll)
    gsap.to(".reverse-scroll-down", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".reverse-scroll-down",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Effect 2: Move Image UP (faster than scroll/opposing direction)
    gsap.to(".reverse-scroll-up", {
      yPercent: 60,
      ease: "none",
      scrollTrigger: {
        trigger: ".reverse-scroll-up",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(".liquify-scroll", { opacity: 0 });

    const liquifyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".liquify-scroll-container",
        start: "top bottom",
        end: "bottom 60%",
        scrub: true,
      },
    });

    liquifyTimeline
      .to("#liquid", { attr: { scale: 0 } }, 0)
      .to(".liquify-scroll", { opacity: 1, y: 0 }, 0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (splitText) splitText.revert();
    };
  }, []);

  return (
    <main
      className={` ${styles.mainContainer}`}
      ref={containerRef}
    >
      <section className="flex p-24 min-h-screen">
        <div className="flex justify-center grow-1 w-full reverse-scroll-up">
          <video
            className="w-full max-w-[1200px] rounded-2xl shadow-2xl object-cover"
            src="https://assets.mixkit.co/videos/23319/23319-720.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="section-stick min-h-screen bg-black flex justify-center items-center text-white">
        <p className="opacity-reveal text-7xl text-center w-3/5 font-medium font-circular">
          It was all very well to say "Drink me," but the wise little Alice was
          not going to do that
        </p>
      </section>

      <section className="liquify-scroll-container relative min-h-screen bg-white mt-[-1px] overflow-hidden">
        <video
          className="w-screen h-screen object-cover"
          src="https://assets.codepen.io/204808/alice-in-wonderland-vid.mov"
          muted
          autoPlay
          loop
          playsInline
        ></video>
        <h1
          style={{ filter: "url('#liquify')" }}
          className=" font-circular liquify-scroll absolute text-center top-1/2 left-0 -translate-y-1/2 w-full text-8xl font-semibold px-60"
        >
          Alice's Adventures in Wonderland
        </h1>
        <svg className="hidden">
          <filter id="liquify">
            <feTurbulence
              baseFrequency="0.015"
              numOctaves="3"
              result="warp"
              type="fractalNoise"
            ></feTurbulence>
            <feDisplacementMap
              id="liquid"
              in="SourceGraphic"
              in2="warp"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="B"
            ></feDisplacementMap>
          </filter>
        </svg>
      </section>
    </main>
  );
}
