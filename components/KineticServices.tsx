"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import IridescentCard from "./IridescentCard";
import AutoplayVideo from "./AutoplayVideo";
import { Layers, MousePointer2, Zap, Rocket } from "lucide-react";

const KineticServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

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
      className="py-60 px-6 relative overflow-hidden bg-black"
    >
      {/* Background Spirit Asset */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <AutoplayVideo
            src="/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4"
            autoPlay loop muted playsInline
            className="w-full h-full object-cover blur-[100px] scale-125"
         />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mb-40">
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="text-neon-green font-mono text-xs tracking-[0.8em] uppercase block mb-6"
           >
             Core Capabilities_
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.85] uppercase italic"
           >
             Manifesting <br /> <span className="text-zinc-800 not-italic">the Unseen.</span>
           </motion.h2>
        </div>

        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 xl:gap-20"
        >
          {/* Card 01 - Offset Top */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:-mt-20"
          >
            <IridescentCard 
              tag="KINETIC_01"
              title="3D Interface Design"
              description="We build spatial experiences that break the rectangle. High-fidelity 3D environments delivered fluidly in the browser."
              icon={<Layers />}
            />
          </motion.div>

          {/* Card 02 - Standard Position */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <IridescentCard 
              tag="KINETIC_02"
              title="Interactive Motion"
              description="Motion that reacts to every gesture. We use spring-physics and fluid dynamics to make interfaces feel like physical matter."
              icon={<MousePointer2 />}
            />
          </motion.div>

          {/* Card 03 - Offset Left & Down */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:ml-20 lg:-mt-10"
          >
            <IridescentCard 
              tag="KINETIC_03"
              title="Cinematic Direction"
              description="Storytelling through pixels. We treat every brand as a movie, directing the viewer through a carefully choreographed horizon."
              icon={<Zap />}
            />
          </motion.div>

          {/* Card 04 - Offset Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:mt-20"
          >
            <IridescentCard 
              tag="KINETIC_04"
              title="Quantum Development"
              description="Future-proof architecture using Next.js 16 and Tailwind 4. Performant, scalable, and technically unmatched."
              icon={<Rocket />}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
    </section>
  );
};

export default KineticServices;
