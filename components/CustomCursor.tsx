"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHiddenZone, setIsHiddenZone] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  // Pure tracking values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth, mass-based trailing values
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if we are inside a section requiring the global cursor to vanish
      if (target.closest('.hide-global-cursor')) {
        setIsHiddenZone(true);
      } else {
        setIsHiddenZone(false);
      }

      // Detect interactable elements via tags or explicitly defined tailwind classes
      if (target.closest('a, button, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, hasMoved]);

  if (!hasMoved) return null;

  return (
    <div style={{ opacity: isHiddenZone ? 0 : 1, transition: "opacity 0.3s ease", pointerEvents: "none" }}>
      {/* 1. Instant Precision Dot */}
      <motion.div
        style={{ left: cursorX, top: cursorY }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* 2. Kinetic Trailing Ring */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          opacity: isHovering ? 0.3 : 1,
          borderWidth: isHovering ? "1px" : "1.5px"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="fixed border-white rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-colors border"
      />

      {/* 3. Hover Expansion Orb (Glass) */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        animate={{
          width: isHovering ? 80 : 0,
          height: isHovering ? 80 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="fixed bg-white/10 backdrop-blur-[2px] rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      />
    </div>
  );
};

export default CustomCursor;
