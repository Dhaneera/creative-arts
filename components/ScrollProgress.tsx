"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "archive", label: "Archive" },
  { id: "cta", label: "Launch" },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100));
  });

  const activeIndex = Math.min(
    SECTIONS.length - 1,
    Math.floor((progress / 100) * SECTIONS.length)
  );
  const isLightSection = activeIndex === SECTIONS.length - 1;
  const activeLabel = SECTIONS[activeIndex]?.label ?? "Hero";

  return (
    <>
      <div className="pointer-events-none fixed right-3 top-3 z-[10001] sm:right-4 sm:top-4 lg:hidden">
        <div
          className={`pointer-events-auto w-[min(15rem,calc(100vw-1.5rem))] rounded-[22px] border px-3 py-3 backdrop-blur-xl transition-colors duration-300 sm:w-[15.5rem] sm:px-4 ${
            isLightSection
              ? "border-black/8 bg-white/38 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              : "border-white/10 bg-black/42 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
          }`}
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div
                className={`font-mono text-[8px] uppercase tracking-[0.42em] ${
                  isLightSection ? "text-black/45" : "text-white/45"
                }`}
              >
                Progress
              </div>
              <div
                className={`mt-1 truncate font-mono text-[10px] uppercase tracking-[0.34em] ${
                  isLightSection ? "text-black/75" : "text-white/75"
                }`}
              >
                {activeLabel}
              </div>
            </div>
            <motion.div
              className={`text-lg font-black tracking-tight sm:text-xl ${
                isLightSection ? "text-black" : "text-white"
              }`}
              key={`mobile-${progress}`}
              initial={{ opacity: 0.5, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {progress}%
            </motion.div>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <div
              className={`relative h-1.5 flex-1 overflow-hidden rounded-full ${
                isLightSection ? "bg-black/10" : "bg-white/10"
              }`}
            >
              <motion.div
                style={{ scaleX, transformOrigin: "0% 50%" }}
                className={`absolute inset-y-0 left-0 w-full rounded-full ${
                  isLightSection
                    ? "bg-[linear-gradient(90deg,#09090b_0%,#27272a_55%,#71717a_100%)]"
                    : "progressive-scroll-fill"
                }`}
              />
            </div>
            <div
              className={`h-8 w-8 rounded-full border flex items-center justify-center ${
                isLightSection ? "border-black/12" : "border-white/12"
              }`}
            >
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  isLightSection ? "bg-black/70" : "bg-white/70"
                }`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-1.5">
            {SECTIONS.map((section, index) => {
              const isActive = index <= activeIndex;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-label={`Go to ${section.label}`}
                  className="flex min-w-0 flex-1 items-center gap-1.5"
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? isLightSection
                          ? "w-full bg-black"
                          : "w-full bg-white"
                        : isLightSection
                          ? "w-full bg-black/15"
                          : "w-full bg-white/15"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed right-4 top-1/2 z-[10001] hidden -translate-y-1/2 lg:block lg:right-6">
        <div
          className={`progressive-side-shell pointer-events-auto flex items-center gap-4 rounded-[28px] px-4 py-5 transition-colors duration-300 ${
            isLightSection
              ? "border-transparent bg-transparent shadow-none backdrop-blur-none"
              : ""
          }`}
        >
          <div className="flex min-h-[320px] flex-col items-end justify-between">
            <div className="text-right">
              <div
                className={`text-[10px] font-mono uppercase tracking-[0.45em] ${
                  isLightSection ? "text-black/45" : "text-white/45"
                }`}
              >
                Progress
              </div>
              <motion.div
                className={`mt-2 text-2xl font-black tracking-tight ${
                  isLightSection ? "text-black" : "text-white"
                }`}
                key={progress}
                initial={{ opacity: 0.5, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {progress}%
              </motion.div>
            </div>

            <div className="flex flex-col items-end gap-5">
              {SECTIONS.map((section, index) => {
              const isActive = index <= activeIndex;

              return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-label={`Go to ${section.label}`}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`text-[10px] font-mono uppercase tracking-[0.35em] transition-colors duration-300 ${
                        isActive
                          ? isLightSection
                            ? "text-black/90"
                            : "text-white/90"
                          : isLightSection
                            ? "text-black/30"
                            : "text-white/30"
                      }`}
                    >
                      {section.label}
                    </span>
                    <div
                      className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                        isActive
                          ? isLightSection
                            ? "border-black bg-black shadow-[0_0_18px_rgba(0,0,0,0.16)]"
                            : "border-white bg-white shadow-[0_0_18px_rgba(255,255,255,0.4)]"
                          : isLightSection
                            ? "border-black/25 bg-transparent"
                            : "border-white/25 bg-transparent"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div
            className={`relative h-[320px] w-[3px] overflow-hidden rounded-full ${
              isLightSection ? "bg-black/10" : "bg-white/10"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                isLightSection
                  ? "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.16),rgba(0,0,0,0.04))]"
                  : "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]"
              }`}
            />
            <motion.div
              style={{ scaleY, transformOrigin: "50% 0%" }}
              className={`absolute inset-x-0 top-0 h-full rounded-full ${
                isLightSection
                  ? "bg-[linear-gradient(180deg,#111827_0%,#18181b_45%,#52525b_100%)] shadow-[0_0_18px_rgba(0,0,0,0.18)]"
                  : "progressive-scroll-fill"
              }`}
            />
            <div
              className={`absolute inset-x-[-6px] top-0 h-full opacity-70 ${
                isLightSection
                  ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_65%)]"
                  : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_65%)]"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
