"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Star, Zap, Globe, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden mesh-gradient"
    >
      {/* Background Aura */}
      <motion.div 
        style={{ x: smoothX, y: smoothY }}
        className="absolute w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass px-4 py-2 rounded-full flex items-center gap-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Award Winning Studio 2026</span>
        </motion.div>

        {/* Headline */}
        <div className="text-center mb-12 relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter"
          >
            BEYOND <br /> 
            <span className="iridescent-text">GRAVITY.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto"
          >
            We blend high-fidelity 3D motion with functional design to create websites that don&apos;t just exist—they interact.
          </motion.p>
        </div>

        {/* Main Breakout Asset */}
        <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">
          {/* Floating Spec Cards (Left) */}
          <motion.div 
            style={{ x: useTransform(smoothX, [-0.5, 0.5], [-30, 30]) }}
            className="absolute left-0 top-1/4 glass p-6 rounded-3xl z-30 hidden md:block"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Turbo Render</div>
                <div className="text-xs text-zinc-500">60FPS Kinetic Motion</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ x: useTransform(smoothX, [-0.5, 0.5], [-50, 50]) }}
            className="absolute left-10 bottom-1/4 glass p-6 rounded-3xl z-30 hidden md:block"
          >
             <div className="flex -space-x-3 mb-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800" />
                ))}
             </div>
             <div className="text-sm font-bold">10k+ Creators Joined</div>
             <div className="flex gap-1 mt-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-white text-white" />)}
             </div>
          </motion.div>

          {/* Centerpiece Image with Parallax */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative z-20 w-full h-full flex items-center justify-center"
          >
            <Image 
              src="/assert/premium_char_1.png"
              alt="Whisk Character"
              width={800}
              height={800}
              className="w-full h-full object-contain drop-shadow-[0_50px_100px_rgba(255,255,255,0.24)]"
            />
          </motion.div>

          {/* Floating Spec Cards (Right) */}
          <motion.div 
            style={{ x: useTransform(smoothX, [-0.5, 0.5], [40, -40]) }}
            className="absolute right-0 top-1/3 glass p-6 rounded-3xl z-30 hidden md:block"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-zinc-300/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-zinc-200" />
              </div>
              <div className="text-lg font-bold">Global Ready</div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex gap-6"
        >
          <button className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start Your Project
          </button>
          <button className="px-10 py-5 rounded-full glass font-bold text-lg hover:bg-white/10 transition-colors">
            View Showreel
          </button>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/6 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-zinc-400/8 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
