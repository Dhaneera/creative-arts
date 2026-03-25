"use client";

import React, { useEffect, useRef, useState } from "react";
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
  "/assert/Whisk_44a0286e44787eb896449bd49f1106d6eg.png",
  "/assert/Whisk_4ff13fbeec87dafb3664c1a1b7c652b7eg.png",
  "/assert/Whisk_5e2517b2d656c17b48245003bd54ef99eg.png",
  "/assert/Whisk_73b23ac8572ef47adf140c6ce8af89fdeg.png",
  "/assert/Whisk_8e16227fc1163a8baa847d584adb863feg.png",
  "/assert/Whisk_9659259ee06e6169fc04aba1bf6fa981eg.png",
  "/assert/Whisk_9a6a48ce8ffb5a5b1cd452db981ec49aeg.png",
  "/assert/Whisk_a3b24b09df7d703ac0245d87e323fdd5eg.png",
  "/assert/Whisk_e123c77f312cd0eb98142cfe1fdc2529eg.png"
];

// High-density distribution for 'Hyperspace' effect
const TUNNEL_ASSETS = Array.from({ length: 50 }, (_, i) => ({
  src: ARTIFACTS[i % ARTIFACTS.length],
  // Targets for the "shooting out" end position
  targetX: ((i * 137) % 160) - 80, // -80 to 80 (percentage of screen)
  targetY: ((i * 263) % 120) - 60, // -60 to 60 (percentage of screen)
  zOffset: (i * 400),             // Depth staggering
  rot: (i * 15) % 360,
  // Deterministic scale to avoid SSR/client hydration drift.
  scale: 0.8 + (((i * 73) % 100) / 100) * 0.7
}));

const TunnelLayer = ({ index, scrollProgress }: { index: number; scrollProgress: MotionValue<number> }) => {
    const zTranslate = useTransform(scrollProgress, [0, 1], [(index * -1200), (index * -1200) + 15000]);
    const opacity = useTransform(zTranslate, [-2000, 0, 8000], [0, 0.4, 0]);
    
    return (
        <motion.div
            style={{ z: zTranslate, opacity }}
            className="absolute w-[1500px] h-[1500px] border border-white/10 rounded-[200px]"
        />
    );
};

const HyperspaceArtifact = ({ asset, scrollProgress }: { asset: typeof TUNNEL_ASSETS[0]; scrollProgress: MotionValue<number> }) => {
    // Each artifact travels from deep center to the screen edges
    const zPos = useTransform(scrollProgress, [0, 1], [asset.zOffset + 2000, asset.zOffset - 18000]);
    
    // As it get closer (z decreases), it "shoots out" sideways
    // Start at 0, 0 (center) and move to targetX, targetY as z approaches -2000
    const xPos = useTransform(zPos, [8000, 2000, -2000], [0, 0, asset.targetX * 25]);
    const yPos = useTransform(zPos, [8000, 2000, -2000], [0, 0, asset.targetY * 15]);
    
    const scale = useTransform(zPos, [8000, 2000, -2000], [0.1, 0.5, 3]);
    const opacity = useTransform(zPos, [5000, 2000, 500, -2000], [0, 0.8, 1, 0]);
    const blur = useTransform(zPos, [2000, 500, -1000], ["10px", "0px", "20px"]);

    return (
        <motion.div
            style={{ 
                x: xPos, 
                y: yPos, 
                z: zPos, 
                scale: scale,
                rotateZ: asset.rot,
                opacity: opacity,
                filter: blur
            }}
            className="absolute w-80 h-80 pointer-events-none"
        >
            <Image 
                src={asset.src} 
                alt="Archive Fragment" 
                fill 
                sizes="320px"
                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
        </motion.div>
    );
};

const CoreTruth = ({ truth, scrollProgress }: { truth: typeof CORE_TRUTHS[0]; scrollProgress: MotionValue<number> }) => {
    const start = Math.max(0, truth.depth - 0.08);
    const end = Math.min(1, truth.depth + 0.08);
    
    const opacityTruth = useTransform(scrollProgress, [start, truth.depth, end], [0, 1, 0]);
    const scaleTruth = useTransform(scrollProgress, [start, truth.depth, end], [0.9, 1, 1.1]);

    return (
        <motion.div
            style={{ opacity: opacityTruth, scale: scaleTruth }}
            className="absolute inset-0 flex flex-col items-center justify-center p-10 z-[100] pointer-events-none"
        >
            <div className="max-w-2xl text-center">
                <span className="text-white/60 font-mono text-xs tracking-[1em] uppercase block mb-6">METHOD_LOG_{truth.id}</span>
                <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-6 core-truth-glow">
                    {truth.title.split("_").map((word, idx) => (
                        <React.Fragment key={idx}>
                            {word}<br/>
                        </React.Fragment>
                    ))}
                </h2>
                <p className="text-zinc-400 text-base md:text-lg font-medium tracking-tight leading-relaxed max-w-sm mx-auto italic">
                    &quot;{truth.detail}&quot;
                </p>
            </div>
        </motion.div>
    );
};

const QuantumArchive = () => {
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 40, stiffness: 60 });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[800vh] bg-black overflow-visible mt-[-100vh]"
    >
      <div className="sticky top-0 h-screen w-full relative flex items-center justify-center overflow-hidden quantum-tunnel bg-black">
        
        {/* Deep Void Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,black_80%)] opacity-40" />

        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1500px" }}>
            
            {/* Hyperspace Tunnel Layers */}
            {mounted && [...Array(30)].map((_, i) => (
                <TunnelLayer key={i} index={i} scrollProgress={smoothProgress} />
            ))}

            {/* Shooting Sideways Artifacts */}
            {mounted && TUNNEL_ASSETS.map((asset, i) => (
                <HyperspaceArtifact key={i} asset={asset} scrollProgress={smoothProgress} />
            ))}

            {/* Core Truth Manifestations */}
            {mounted && CORE_TRUTHS.map((truth) => (
                <CoreTruth key={truth.id} truth={truth} scrollProgress={smoothProgress} />
            ))}
        </div>

        {/* Ambient HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between mix-blend-screen opacity-30">
            <div className="flex justify-between items-start font-mono text-[9px] text-white tracking-[0.5em] uppercase">
                <div>SECTOR_DEPTH_MAX<br/>STATUS: WARP_DRIVE</div>
                <div className="text-right">TRAVERSAL: {Math.round(100 * (smoothProgress.get() || 0))}%</div>
            </div>
            
            <div className="flex justify-between items-end font-mono text-[9px] text-white tracking-widest">
                <div className="flex gap-2">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-8 bg-white/10 overflow-hidden">
                            <motion.div 
                                animate={{ y: [32, -32] }}
                                transition={{ duration: 0.3 + i * 0.1, repeat: Infinity, ease: "linear" }}
                                className="w-full h-4 bg-white/40"
                            />
                        </div>
                    ))}
                </div>
                <div>WHISK_ARCHIVE_NODE.exe</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumArchive;
