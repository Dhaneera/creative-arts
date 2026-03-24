"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, useInView } from "framer-motion";
import AutoplayVideo from "./AutoplayVideo";

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

// Sub-component to track intersection
const ServiceItem = ({
  service,
  index,
  isActive,
  onActivate,
  onHover,
  onLeave
}: {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onActivate: (idx: number) => void;
  onHover: (idx: number) => void;
  onLeave: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when the item is strictly in the vertical center of the viewport
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onActivate(index);
    }
  }, [isInView, index, onActivate]);

  return (
    <div 
      ref={ref}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className="group relative cursor-none"
    >
      {/* Service ID */}
      <div className="text-[10px] sm:text-xs font-mono text-zinc-500 mb-2 tracking-[0.5em]">
        SYS_ACCESS // {service.id}
      </div>

      {/* Massive Kinetic Headline */}
      <motion.div 
        animate={{ 
          x: isActive ? 30 : 0,
          skewX: isActive ? -5 : 0,
          opacity: isActive ? 1 : 0.3
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-visible"
      >
        <h2 className={`text-[15vw] md:text-[12vw] font-display font-black leading-none tracking-tighter transition-colors duration-700 ${isActive ? service.color : "text-zinc-800"} uppercase italic`}>
          {service.title}
        </h2>
        
        {/* Reveal Text */}
        <div className={`absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none flex flex-col items-end transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-white text-sm md:text-xl font-bold tracking-[0.5em] md:tracking-[1em] mb-2 hidden sm:block">{service.desc}</span>
            <div className="hidden sm:block w-20 md:w-40 h-[1px] md:h-1 bg-white/20" />
        </div>
      </motion.div>

      {/* Mobile/Tablet Inline Asset Detail (Hidden on Desktop 'lg') */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isActive ? "auto" : 0, 
          opacity: isActive ? 1 : 0,
          marginTop: isActive ? 16 : 0
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden relative w-full overflow-hidden rounded-2xl glass border border-white/10"
      >
        <div className="relative w-full aspect-video">
           {service.type === "image" ? (
              <img 
                src={service.asset} 
                alt={service.title}
                className="w-full h-full object-cover scale-110 pointer-events-none"
              />
            ) : (
              <AutoplayVideo
                src={service.asset}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover scale-125 pointer-events-none"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">{service.desc}</span>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const SpectrumServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSectionHovered, setIsSectionHovered] = useState(false);
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
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => {
        setIsSectionHovered(false);
        if (!isHovered) setActiveIndex(null); // Clear if not hovering an item
      }}
      className="relative min-h-screen bg-black py-40 lg:py-60 overflow-hidden hide-global-cursor cursor-none"
    >
      {/* Magnetic Beam Cursor (Desktop Only) */}
      <AnimatePresence>
        {isSectionHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none z-[100] hidden lg:block"
          >
            <motion.div 
              style={{ left: smoothX, top: smoothY }}
              className="fixed w-[400px] h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left rotate-[15deg]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 lg:px-10 relative z-20">
        <div className="flex flex-col gap-24 lg:gap-10">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id}
              service={service}
              index={index}
              isActive={activeIndex === index}
              onActivate={(idx) => {
                if (!isHovered) setActiveIndex(idx);
              }}
              onHover={(idx) => {
                setIsHovered(true);
                setActiveIndex(idx);
              }}
              onLeave={() => {
                setIsHovered(false);
              }}
            />
          ))}
        </div>
      </div>

      {/* The Asset Lens Reveal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            // Only show fixed lens on desktop. Mobile/Tablet uses strictly inline accordion.
            style={{ left: smoothX, top: smoothY }}
            className="fixed w-[500px] h-[500px] hidden lg:block -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden pointer-events-none z-50 border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)] p-4 glass"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
                {services[activeIndex].type === "image" ? (
                  <img 
                    src={services[activeIndex].asset} 
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover scale-110 pointer-events-none"
                  />
                ) : (
                  <AutoplayVideo
                    src={services[activeIndex].asset}
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
        {activeIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
             {services[activeIndex].type === 'image' ? (
                <img 
                    src={services[activeIndex].asset}
                    alt="atmosphere"
                    className="w-full h-full object-cover blur-[80px] saturate-200"
                />
             ) : (
                <AutoplayVideo
                    src={services[activeIndex].asset}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover blur-[80px] saturate-200"
                />
             )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5vw_5vw] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none z-0" />
    </section>
  );
};

export default SpectrumServices;
