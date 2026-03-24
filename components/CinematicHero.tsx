"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const CinematicHero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[400vw] h-full shrink-0">
          {slides.map((slide, index) => (
            <div key={index} className="relative w-screen h-full flex items-center justify-center shrink-0">
              {/* Background Video */}
              <video 
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]"
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 container mx-auto px-10">
                <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="text-center"
                >
                  <p className="text-neon-green font-mono text-xs tracking-[0.5em] mb-4 uppercase">{slide.subtitle}</p>
                  <h1 className={`text-[15vw] font-black leading-none tracking-tighter ${slide.accent} mix-blend-difference`}>
                    {slide.title}
                  </h1>
                </motion.div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                <span>SCROLL TO EXPLORE_0{index + 1}</span>
                <div className="w-20 h-px bg-zinc-800" />
                <span>MULTIVERSE ACCESS</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
