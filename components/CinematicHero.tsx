"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import AutoplayVideo from "./AutoplayVideo";

const slides = [
  {
    video: "/assert/Whisk_gznkjwmhzdmmzgol1izhntotudo0qtlmdtzh1yy.mp4",
    title: "WHISK STUDIO",
    subtitle: "A NEW ERA OF CREATIVE MOTION",
    accent: "text-neon-green"
  },
  {
    video: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4",
    title: "KINETIC ENERGY",
    subtitle: "BLURRING LINES BETWEEN ART & CODE",
    accent: "text-electric-cyan"
  },
  {
    video: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4",
    title: "IRIDESCENT DEPTH",
    subtitle: "HIGH-FIDELITY 3D INTERFACES",
    accent: "text-hot-pink"
  },
  {
    video: "/assert/Whisk_azy2udolfwomndmz0czmjwotegzwqtlmfznl1in.mp4",
    title: "START YOUR STORY",
    subtitle: "BEYOND THE CONVENTIONAL HORIZON",
    accent: "text-solar-yellow"
  }
];

const SlideScene = ({
  slide,
  index,
  progress,
  isScrolling,
}: {
  slide: (typeof slides)[number];
  index: number;
  progress: MotionValue<number>;
  isScrolling: boolean;
}) => {
  const total = slides.length;
  const start = index / total;
  const center = (index + 0.5) / total;
  const end = (index + 1) / total;

  const contentY = useTransform(progress, [start, center, end], [72, 0, -72]);
  const contentOpacity = useTransform(progress, [start, center, end], [0.18, 1, 0.18]);
  const contentScale = useTransform(progress, [start, center, end], [0.9, 1, 0.92]);
  const mediaScale = useTransform(progress, [start, center, end], [1.2, 1.02, 1.2]);
  const mediaRotate = useTransform(progress, [start, center, end], [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]);
  const mediaX = useTransform(progress, [start, center, end], [index % 2 === 0 ? -60 : 60, 0, index % 2 === 0 ? 60 : -60]);
  const mediaBrightness = useTransform(
    progress,
    [start, center, end],
    isScrolling ? [0.34, 0.48, 0.34] : [0.55, 1, 0.55]
  );
  const mediaFilter = useTransform(mediaBrightness, (value) => `brightness(${value})`);
  const overlayOpacity = useTransform(
    progress,
    [start, center, end],
    isScrolling ? [0.76, 0.54, 0.76] : [0.62, 0.18, 0.62]
  );
  const revealScaleX = useTransform(progress, [start, center, end], [0.72, 1, 0.72]);
  const revealOpacity = useTransform(progress, [start, center, end], [0.18, 0.65, 0.18]);
  const accentBarScale = useTransform(progress, [start, center, end], [0.35, 1, 0.35]);
  const titleGlow = useTransform(
    progress,
    [start, center, end],
    isScrolling ? [0.08, 0.65, 0.08] : [0.02, 0.18, 0.02]
  );
  const titleShadow = useTransform(
    titleGlow,
    (value) =>
      `0 0 ${18 + value * 34}px rgba(255,255,255,${0.12 + value * 0.14}),
       0 0 ${40 + value * 70}px rgba(255,255,255,${0.04 + value * 0.1})`
  );
  const textFilter = useTransform(
    contentOpacity,
    (value) => `brightness(${isScrolling ? 1.28 : 0.88}) saturate(${isScrolling ? 1.12 : 0.92}) opacity(${isScrolling ? Math.max(0.72, value) : Math.max(0.28, value * 0.7)})`
  );

  return (
    <div className="relative w-screen h-full flex items-center justify-center shrink-0 overflow-hidden">
      <motion.div
        style={{ scale: mediaScale, rotate: mediaRotate, x: mediaX, filter: mediaFilter }}
        className="absolute inset-[-6%]"
      >
        <AutoplayVideo
          src={slide.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(0,0,0,0.72)_72%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
      <motion.div
        style={{ scaleX: revealScaleX, opacity: revealOpacity, transformOrigin: "50% 50%" }}
        className="absolute inset-y-[12%] left-[12%] right-[12%] border border-white/12"
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-10">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity, scale: contentScale, filter: textFilter }}
          className="text-center -translate-y-[8vh] md:-translate-y-[10vh]"
        >
          <motion.div
            style={{ scaleX: accentBarScale, transformOrigin: "50% 50%" }}
            className="mx-auto mb-5 h-px w-28 bg-white/30"
          />
          <p className="text-neon-green font-mono text-[10px] md:text-xs tracking-[0.45em] mb-4 uppercase">
            {slide.subtitle}
          </p>
          <motion.h1
            style={{ textShadow: titleShadow }}
            className={`text-[15vw] font-black leading-none tracking-tighter ${slide.accent} mix-blend-difference`}
          >
            {slide.title}
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500"
      >
        <span>SCROLL TO EXPLORE_0{index + 1}</span>
        <div className="w-10 md:w-20 h-px bg-zinc-800" />
        <span>MULTIVERSE ACCESS</span>
      </motion.div>
    </div>
  );
};

const CinematicHero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolling(true);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 140);
  });

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen relative flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[400vw] h-full shrink-0">
          {slides.map((slide, index) => (
            <SlideScene
              key={slide.title}
              slide={slide}
              index={index}
              progress={scrollYProgress}
              isScrolling={isScrolling}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
