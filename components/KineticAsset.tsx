"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface KineticAssetProps {
  src: string;
  alt?: string;
  type?: "image" | "video" | "gif";
  className?: string;
  parallaxSpeed?: number;
  initialDelay?: number;
}

const KineticAsset: React.FC<KineticAssetProps> = ({
  src,
  alt = "Whisk Studio Asset",
  type = "image",
  className = "",
  parallaxSpeed = 0.2,
  initialDelay = 0,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150 * parallaxSpeed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        delay: initialDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ y, rotate }}
      className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(180,255,57,0.2)] ${className}`}
    >
      {type === "video" || type === "gif" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      )}
      
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/10 via-transparent to-electric-cyan/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
};

export default KineticAsset;
