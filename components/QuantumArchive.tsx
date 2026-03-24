"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";

const CORE_TRUTHS = [
  { 
    id: "01", 
    title: "SYMMETRY_OF_CHAOS", 
    detail: "We engineer precision within the unpredictable. Turning raw potential into structured impact.",
    depth: 0.15
  },
  { 
    id: "02", 
    title: "KINETIC_BORN", 
    detail: "Everything we touch must feel alive. If it doesn't move with intention, it's not finished.",
    depth: 0.35
  },
  { 
    id: "03", 
    title: "NEURAL_AESTHETIC", 
    detail: "Blending high-tech logic with high-art soul. The bridge between the machine and the human.",
    depth: 0.55
  },
  { 
    id: "04", 
    title: "THE_INFINITY_VALVE", 
    detail: "Growth is non-linear. We build systems that evolve faster than the market can react.",
    depth: 0.75
  },
  { 
    id: "05", 
    title: "WORLD_MASTER_v1", 
    detail: "Deployment is an ascension. We don't just launch; we manifest new digital realities.",
    depth: 0.95
  }
];

const ARTIFACTS = [
  "/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png",
  "/assert/Whisk_4329104348fa66185bb4b062e6d362fceg.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_01.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_02.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_03.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_04.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_06.png",
  "/assert/Whisk_Brawl_Stars_Starr_Park_07.png"
];

// Deterministic placement for artifacts
const TUNNEL_ASSETS = Array.from({ length: 16 }, (_, i) => ({
  src: ARTIFACTS[i % ARTIFACTS.length],
  x: ((i * 137) % 200) - 100,
  y: ((i * 263) % 200) - 100,
  z: (i * 2000),
  rot: (i * 45) % 360
}));

const TunnelLayer = ({ index, scrollProgress }: { index: number; scrollProgress: MotionValue<number> }) => {
    const zTranslate = useTransform(scrollProgress, [0, 1], [(index * -1000), (index * -1000) + 10000]);
    const opacity = useTransform(zTranslate, [-2000, 0, 5000], [0, 0.4, 0]);
    
    return (
        <motion.div
            style={{ z: zTranslate, opacity }}
            className="absolute w-[1200px] h-[1200px] border border-neon-green/30 rounded-[100px]"
        />
    );
};

const FlyingArtifact = ({ asset, index, scrollProgress }: { asset: typeof TUNNEL_ASSETS[0]; index: number; scrollProgress: MotionValue<number> }) => {
    const zPos = useTransform(scrollProgress, [0, 1], [asset.z, asset.z - 15000]);
    const opacityAsset = useTransform(zPos, [3000, 1000, -1000], [0, 0.6, 0]);
    
    return (
        <motion.div
            key={index}
            style={{ 
                x: asset.x * 15, 
                y: asset.y * 10, 
                z: zPos, 
                rotateZ: asset.rot,
                opacity: opacityAsset 
            }}
            className="absolute w-64 h-64 grayscale contrast-125 brightness-150"
        >
            <Image 
                src={asset.src} 
                alt="Archive Fragment" 
                fill 
                className="object-contain filter drop-shadow-[0_0_20px_rgba(0,255,142,0.3)]"
            />
        </motion.div>
    );
};

const CoreTruth = ({ truth, scrollProgress }: { truth: typeof CORE_TRUTHS[0]; scrollProgress: MotionValue<number> }) => {
    const start = Math.max(0, truth.depth - 0.1);
    const end = Math.min(1, truth.depth + 0.1);
    
    const opacityTruth = useTransform(scrollProgress, [start, truth.depth, end], [0, 1, 0]);
    const scaleTruth = useTransform(scrollProgress, [start, truth.depth, end], [0.8, 1, 1.2]);
    const blurTruth = useTransform(scrollProgress, [start, truth.depth, end], ["15px", "0px", "15px"]);

    return (
        <motion.div
            style={{ opacity: opacityTruth, scale: scaleTruth, filter: blurTruth }}
            className="absolute inset-0 flex flex-col items-center justify-center p-10 z-50 pointer-events-none"
        >
            <div className="max-w-2xl text-center">
                <span className="text-neon-green font-mono text-xs tracking-[0.8em] uppercase block mb-8 opacity-60">CORE_TRUTH_{truth.id}</span>
                <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-8 core-truth-glow">
                    {truth.title.split("_").map((word, idx) => (
                        <React.Fragment key={idx}>
                            {word}<br/>
                        </React.Fragment>
                    ))}
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-lg mx-auto italic">
                    &quot;{truth.detail}&quot;
                </p>
            </div>
        </motion.div>
    );
};

const QuantumArchive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 50 });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-black overflow-visible mt-[-100vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden quantum-tunnel bg-black">
        
        {/* Distance Void */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,255,142,0.02)_0%,black_70%)] opacity-20" />

        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
            
            {/* Tunnel Layers */}
            {[...Array(20)].map((_, i) => (
                <TunnelLayer key={i} index={i} scrollProgress={smoothProgress} />
            ))}

            {/* Flying Artifacts */}
            {TUNNEL_ASSETS.map((asset, i) => (
                <FlyingArtifact key={i} asset={asset} index={i} scrollProgress={smoothProgress} />
            ))}

            {/* Core Truths */}
            {CORE_TRUTHS.map((truth) => (
                <CoreTruth key={truth.id} truth={truth} scrollProgress={smoothProgress} />
            ))}
        </div>

        {/* Ambient HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between mix-blend-screen opacity-40">
            <div className="flex justify-between items-start font-mono text-[9px] text-neon-green tracking-widest">
                <div>VOID_TRAVERSAL_v1.0<br/>SYNC: DATA_MAIN</div>
                <div className="text-right">DEPTH_BUFFER: STABLE<br/>VEL: [NOMINAL]</div>
            </div>
            
            <div className="flex justify-between items-end font-mono text-[9px] text-neon-green tracking-widest">
                <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-1 overflow-hidden border border-neon-green/30">
                            <motion.div 
                                animate={{ x: [-32, 32] }}
                                transition={{ duration: 1 + i, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-full bg-neon-green/40"
                            />
                        </div>
                    ))}
                </div>
                <div>WHISK_ARCHIVE.sys</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumArchive;
