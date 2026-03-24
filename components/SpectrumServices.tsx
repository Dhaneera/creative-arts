"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "INTERFACE",
    desc: "SCULPTING SPATIAL REWRITES",
    asset: "/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png",
    type: "image",
    color: "text-neon-green"
  },
  {
    id: "02",
    title: "MOTION",
    desc: "CHOREOGRAPHING KINETIC SOULS",
    asset: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4",
    type: "video",
    color: "text-electric-cyan"
  },
  {
    id: "03",
    title: "STRATEGY",
    desc: "MAPPING THE SPEC SPECTRUM",
    asset: "/assert/Whisk_8e16227fc1163a8baa847d584adb863feg.png",
    type: "image",
    color: "text-hot-pink"
  },
  {
    id: "04",
    title: "QUANTUM",
    desc: "ARCHITECTING DIGITAL REALMES",
    asset: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4",
    type: "video",
    color: "text-solar-yellow"
  }
];

const SpectrumServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Position for Lens & Magnetic Pull
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black py-40 overflow-hidden cursor-none"
    >
      {/* Magnetic Beam Cursor */}
      <motion.div 
        style={{ left: smoothX, top: smoothY }}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
      />
      <motion.div 
        style={{ left: smoothX, top: smoothY }}
        className="fixed w-[400px] h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left pointer-events-none z-[90] rotate-[15deg]"
      />

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col gap-10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Service ID */}
              <div className="text-[10px] font-mono text-zinc-800 mb-2 tracking-[0.5em]">
                SYS_ACCESS // {service.id}
              </div>

              {/* Massive Kinetic Headline */}
              <motion.div 
                animate={{ 
                  x: hoveredIndex === index ? 30 : 0,
                  skewX: hoveredIndex === index ? -5 : 0
                }}
                className="relative overflow-hidden"
              >
                <h2 className={`text-[12vw] font-black leading-none tracking-tighter transition-all duration-700 ${hoveredIndex === index ? service.color : "text-zinc-900"} uppercase italic`}>
                  {service.title}
                </h2>
                
                {/* Reveal Text (appears on hover) */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-xl font-bold tracking-[1em] mb-2">{service.desc}</span>
                    <div className="w-40 h-1 bg-white/20" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* The Asset Lens Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{ left: smoothX, top: smoothY }}
            className="fixed w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden pointer-events-none z-50 border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)] p-4 glass"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
                {services[hoveredIndex].type === "image" ? (
                  <img 
                    src={services[hoveredIndex].asset} 
                    alt={services[hoveredIndex].title}
                    className="w-full h-full object-cover scale-110 pointer-events-none"
                  />
                ) : (
                  <video 
                    src={services[hoveredIndex].asset}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover scale-150"
                  />
                )}
            </div>
            {/* Inner Lens Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Distorted Atmosphere */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
             <video 
                src={services[hoveredIndex].asset}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover blur-[80px] saturate-200"
             />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5vw_5vw] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
    </section>
  );
};

export default SpectrumServices;
