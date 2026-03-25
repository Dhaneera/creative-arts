"use client";

import React, { useEffect, useRef, useMemo, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";
import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";

interface SphereItemProps {
  item: {
    id: number;
    src: string;
    title: string;
    isVideo?: boolean;
    theta: number; // Angle around Y axis
    phi: number;   // Angle up/down
  };
  globalRotateY: MotionValue<number>;
}

const SphereItem: React.FC<SphereItemProps> = ({ item, globalRotateY }) => {
  const radius = 700; // Reduced radius for better vertical safety
  
  // Calculate raw 3D position based on angles
  const combinedRotateY = useTransform(globalRotateY, (v) => v + item.theta);
  
  // X and Z position based on Theta
  const x = useTransform(combinedRotateY, (v) => Math.sin(v * (Math.PI / 180)) * radius);
  const z = useTransform(combinedRotateY, (v) => Math.cos(v * (Math.PI / 180)) * radius);
  
  // Y position based on Phi (Static belt with tighter verticality)
  const y = Math.sin(item.phi * (Math.PI / 180)) * radius;

  // Selective Focus: Item is sharp/large when z is positive
  const proximity = useTransform(z, [radius * -1, 0, radius], [0, 0.4, 1]);
  
  const opacity = useTransform(proximity, [0, 0.4, 0.8, 1], [0.1, 0.2, 1, 1]);
  const scale = useTransform(proximity, [0, 1], [0.5, 1.1]);
  const blurValue = useTransform(proximity, [0, 0.7, 1], [15, 4, 0]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Card perspective rotation
  const rotateY = useTransform(combinedRotateY, (v) => v);

  return (
    <motion.div
      style={{ 
        x, y, z, 
        rotateY,
        opacity, 
        scale,
        filter: blur,
        transformStyle: "preserve-3d"
      }}
      className="absolute w-[360px] md:w-[400px] aspect-[16/10] flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full h-full glass rounded-[20px] overflow-hidden border border-white/10 pointer-events-auto group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:border-white/40 transition-all duration-500">
          {/* Scanline/Grid Overlay */}
          <div className="absolute inset-0 scanline-overlay z-20 pointer-events-none opacity-20" />
          
          {/* Visual Asset */}
          {item.isVideo ? (
               <AutoplayVideo
                  src={item.src} 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover"
               />
          ) : (
               <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                  sizes="420px"
               />
          )}

          {/* Hover HUD */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
               <span className="text-white/75 font-mono text-[8px] tracking-[0.4em] uppercase mb-2 font-bold">WHISK_ARCHIVE // 0{item.id}</span>
               <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">{item.title}</h3>
          </div>
      </div>
    </motion.div>
  );
};

const WhiskAssets = [
  { id: 1, src: "/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png", title: "NEBULA_UNIT" },
  { id: 2, src: "/assert/Whisk_4329104348fa66185bb4b062e6d362fceg.png", title: "VOID_WALKER" },
  { id: 3, src: "/assert/Whisk_44a0286e44787eb896449bd49f1106d6eg.png", title: "CHROME_SOUL" },
  { id: 4, src: "/assert/Whisk_4ff13fbeec87dafb3664c1a1b7c652b7eg.png", title: "SOLAR_NEXUS" },
  { id: 5, src: "/assert/Whisk_5e2517b2d656c17b48245003bd54ef99eg.png", title: "QUANTUM_SHIFT" },
  { id: 6, src: "/assert/Whisk_73b23ac8572ef47adf140c6ce8af89fdeg.png", title: "NEON_SIGHT" },
  { id: 7, src: "/assert/Whisk_8e16227fc1163a8baa847d584adb863feg.png", title: "LUX_ARCH" },
  { id: 8, src: "/assert/Whisk_9659259ee06e6169fc04aba1bf6fa981eg.png", title: "CYBER_FLARE" },
  { id: 9, src: "/assert/Whisk_9a6a48ce8ffb5a5b1cd452db981ec49aeg.png", title: "GRID_PULSE" },
  { id: 10, src: "/assert/Whisk_a3b24b09df7d703ac0245d87e323fdd5eg.png", title: "CORE_ARCHIVE" },
  { id: 11, src: "/assert/Whisk_gznkjwmhzdmmzgol1izhntotudo0qtlmdtzh1yy.mp4", title: "FLUID_VORTEX", isVideo: true },
  { id: 12, src: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4", title: "ENERGY_WAVE", isVideo: true },
  { id: 13, src: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4", title: "LIQUID_LIGHT", isVideo: true },
  { id: 14, src: "/assert/Whisk_azy2udolfwomndmz0czmjwotegzwqtlmfznl1in.mp4", title: "NEURAL_STORY", isVideo: true }
];

const NexusGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);
  
  // Distribute items around the sphere
  const sphereItems = useMemo(() => {
    return WhiskAssets.map((asset, i) => {
      // Golden ratio distribution for a "Globe" look
      const count = WhiskAssets.length;
      const theta = (360 / count) * i;
      const phi = (i % 2 === 0 ? 15 : -15); // Offset some up and down for volume
      return { ...asset, theta, phi };
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll rotates the sphere (3 full rotations over the section)
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const smoothRotateY = useSpring(rotateY, { damping: 40, stiffness: 60 });

  // Mouse Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative h-[200vh] bg-black overflow-x-hidden"
    >
      <div className="sticky top-0 h-screen w-full relative overflow-hidden flex items-center justify-center">
        
        {/* Orbital Background */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] orbital-glow rounded-full" />
             <div className="absolute inset-0 technical-grid opacity-10" />
        </div>

        {/* The Vertex Sphere Container */}
        <motion.div 
            style={{ 
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-full h-full flex items-center justify-center perspective-[3000px] transform-gpu scale-[0.35] sm:scale-[0.5] lg:scale-100 transition-transform duration-500 ease-out"
        >
          {mounted && sphereItems.map((item) => (
            <SphereItem key={item.id} item={item} globalRotateY={smoothRotateY} />
          ))}
        </motion.div>

        {/* Orbital HUD Overlays */}
        <div className="absolute top-10 left-10 pointer-events-none">
             <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] tracking-[0.6em] mb-4">
                <div className="w-2 h-2 bg-white animate-pulse" />
                ORBITAL_ENGINE ACTIVE // VERTEX_v6.0
             </div>
             <div className="w-[350px] h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none">
             <div className="text-[9px] font-mono text-zinc-600 tracking-[0.4em] uppercase mb-4">
                Rotational_Velocity // Auto_Sync
             </div>
             <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ height: [4, 20, 4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1 bg-white/30"
                    />
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default NexusGallery;
