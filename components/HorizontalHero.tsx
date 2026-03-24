"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KineticAsset from "./KineticAsset";

const HorizontalHero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-deep-void">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20 shrink-0">
          {/* Slide 1: Welcome */}
          <div className="w-screen flex flex-col justify-center shrink-0">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-[12vw] font-black leading-none tracking-tighter text-white"
            >
              WHISK <span className="text-neon-green">STUDIO</span>
            </motion.h1>
            <p className="mt-8 text-2xl text-zinc-500 max-w-xl">
              Award-winning interactive design. We turn kinetic energy into visual stories.
            </p>
          </div>

          {/* Slide 2: The Vision */}
          <div className="w-[80vw] flex items-center gap-12 shrink-0">
            <div className="flex-1">
              <h2 className="text-7xl font-bold">First an <span className="text-electric-cyan italic">Idea.</span></h2>
              <p className="mt-6 text-xl text-zinc-400">
                Crafting digital experiences that defy standard gravity.
              </p>
            </div>
            <KineticAsset 
              src="/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png"
              className="w-[400px] h-[500px]"
            />
          </div>

          {/* Slide 3: Kinetic Motion */}
          <div className="w-[80vw] flex items-center gap-12 shrink-0">
             <KineticAsset 
              src="/assert/Whisk_azy2udolfwomndmz0czmjwotegzwqtlmfznl1in.mp4"
              type="video"
              className="w-[400px] h-[500px]"
            />
            <div className="flex-1">
              <h2 className="text-7xl font-bold">In <span className="text-hot-pink uppercase">Motion.</span></h2>
              <p className="mt-6 text-xl text-zinc-400">
                Blurring the lines between 3D art and functional interfaces.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalHero;
