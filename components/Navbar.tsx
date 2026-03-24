"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

const NAV_ITEMS = [
  { name: "HORIZON", target: "#hero" },
  { name: "SPECTRUM", target: "#services" },
  { name: "VERTEX", target: "#gallery" },
  { name: "ARCHIVE", target: "#archive" },
];

const NavItem = ({ name, target, mouseX }: { name: string; target: string; mouseX: MotionValue<number> }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Responsive base sizes
  const [baseWidth, setBaseWidth] = useState(100);
  const [hoverWidth, setHoverWidth] = useState(160);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 768) {
        setBaseWidth(60);
        setHoverWidth(90);
      } else {
        setBaseWidth(100);
        setHoverWidth(160);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Magnetic distance calculation
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scaling effect based on proximity to center of the dock
  const widthTransform = useTransform(distance, [-150, 0, 150], [baseWidth, hoverWidth, baseWidth]);
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={target}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width }}
      className="relative flex flex-col items-center justify-center group h-14"
    >
      <div className="relative flex flex-col items-center justify-center">
         {/* Kinetic Indicator */}
         <motion.div 
            animate={{ 
                height: isHovered ? 2 : 1,
                width: isHovered ? (baseWidth === 60 ? 30 : 40) : (baseWidth === 60 ? 10 : 20),
                backgroundColor: isHovered ? "#ffffff" : "rgba(255,255,255,0.2)"
            }}
            className="absolute top-[-10px] md:top-[-12px] rounded-full transition-colors"
         />
         
         <span className={`text-[8px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.4em] transition-all duration-300 ${isHovered ? 'text-white md:scale-110 scale-100' : 'text-white/30'}`}>
            {name}
         </span>
      </div>
    </motion.a>
  );
};

const Navbar = () => {
  const mouseX = useMotionValue(Infinity);
  const isVisible = useMotionValue(1);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection logic: Hide on move, Show on stop or up
  useEffect(() => {
    const handleScroll = () => {
      isVisible.set(0); // Hide immediately on any scroll

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Show on stop (after 400ms of no scrolling)
      scrollTimeout.current = setTimeout(() => {
        isVisible.set(1);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isVisible]);

  const opacity = useSpring(isVisible, { damping: 20, stiffness: 100 });
  const y = useTransform(opacity, [0, 1], [100, 0]);

  return (
    <motion.nav
      style={{ y, opacity }}
      className="fixed bottom-10 left-1/2 z-[9999] hidden -translate-x-1/2 lg:block"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="relative h-20 items-end px-4 flex gap-2 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden group">
        
        {/* Dock Inner Aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

        <div className="flex items-center gap-1 md:gap-4 h-full">
           {NAV_ITEMS.map((item) => (
             <NavItem key={item.name} {...item} mouseX={mouseX} />
           ))}
        </div>

        {/* Separator / Dynamic Indicator */}
        <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

        <a 
          href="mailto:hello@whisk.studio"
          className="h-8 md:h-10 px-4 md:px-6 mb-4 md:mb-5 items-center flex rounded-full md:rounded-2xl bg-white text-black text-[8px] md:text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-transform shrink-0"
        >
          WHISK_INIT
        </a>
      </div>
      
      {/* Background Pulse Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 bg-white/10 blur-3xl -z-10" />
    </motion.nav>
  );
};

export default Navbar;
