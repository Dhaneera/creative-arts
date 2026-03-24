"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";

type MediaType = "image" | "video";

const services = [
  {
    id: "01",
    title: "INTERFACE",
    kicker: "SPATIAL SYSTEMS",
    detail:
      "Layered interfaces with stronger visual tension, clearer composition, and interaction patterns that feel crafted instead of assembled.",
    note: "Built for premium product surfaces",
    asset: "/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png",
    type: "image" as MediaType,
    color: "text-neon-green",
  },
  {
    id: "02",
    title: "MOTION",
    kicker: "KINETIC DIRECTION",
    detail:
      "Movement designed to guide attention and add emotional weight without turning the experience fragile or noisy.",
    note: "Motion language that survives real use",
    asset: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4",
    type: "video" as MediaType,
    color: "text-electric-cyan",
  },
  {
    id: "03",
    title: "STRATEGY",
    kicker: "CREATIVE SYSTEM DESIGN",
    detail:
      "Sharper strategic framing that reduces noise early, so the final work feels more coherent, expensive, and deliberate.",
    note: "Clearer direction, fewer decorative detours",
    asset: "/assert/Whisk_8e16227fc1163a8baa847d584adb863feg.png",
    type: "image" as MediaType,
    color: "text-hot-pink",
  },
  {
    id: "04",
    title: "QUANTUM",
    kicker: "PRODUCTION REALITY",
    detail:
      "Concept-heavy visuals translated into stable production work without flattening the original energy of the idea.",
    note: "Concept-first, launch-ready finish",
    asset: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4",
    type: "video" as MediaType,
    color: "text-solar-yellow",
  },
];

const collageAssets = [
  "/assert/Whisk_4329104348fa66185bb4b062e6d362fceg.png",
  "/assert/Whisk_44a0286e44787eb896449bd49f1106d6eg.png",
  "/assert/Whisk_9659259ee06e6169fc04aba1bf6fa981eg.png",
];

const Media = ({
  asset,
  title,
  type,
  sizes,
  className,
}: {
  asset: string;
  title: string;
  type: MediaType;
  sizes: string;
  className?: string;
}) => {
  if (type === "image") {
    return (
      <Image
        src={asset}
        alt={title}
        fill
        sizes={sizes}
        className={className ?? "object-cover"}
      />
    );
  }

  return (
    <AutoplayVideo
      src={asset}
      autoPlay
      loop
      muted
      playsInline
      className={className ?? "h-full w-full object-cover"}
    />
  );
};

const tileMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const tileClassName =
  "group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl md:rounded-[1.75rem]";

const SpectrumServices = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:92px_92px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-4xl md:mb-16 lg:mb-20">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.6em] text-white/45">
            Core Capabilities
          </p>
          <h2 className="text-3xl font-black uppercase italic leading-[0.92] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
            Live Bento.
            <br />
            Better Energy.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:mt-6 md:text-base">
            A richer bento grid built from the studio assets themselves, with motion, layered depth, and stronger contrast between feature blocks.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-12 lg:auto-rows-[minmax(14rem,auto)] lg:gap-6">
          <motion.article
            {...tileMotion}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-5 lg:row-span-2`}
          >
            <div className="relative h-full min-h-[22rem] p-5 sm:p-6 md:min-h-[26rem] md:p-7 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/45">
                      Service Matrix
                    </p>
                  </div>
                  <h3 className="max-w-md text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-5xl">
                    Building Digital Worlds
                    <br />
                    With More Pulse.
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                    We combine spatial UI, cinematic direction, and production strategy into one visual system so the work feels alive from first scroll to final launch.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-8">
                  {[
                    ["3D-led", "Interfaces"],
                    ["Motion", "Systems"],
                    ["Launch", "Ready"],
                  ].map(([top, bottom]) => (
                    <div key={top} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center">
                      <div className="text-lg font-black text-white md:text-xl">{top}</div>
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                        {bottom}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion}
            transition={{ ...tileMotion.transition, delay: 0.05 }}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-7 lg:row-span-2`}
          >
            <div className="relative min-h-[20rem] overflow-hidden md:min-h-[26rem] lg:h-full">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Media
                  asset={services[1].asset}
                  title={services[1].title}
                  type={services[1].type}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_26%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-3 md:left-6 md:top-6">
                <span className={`font-mono text-[10px] uppercase tracking-[0.5em] ${services[1].color}`}>
                  {services[1].id}
                </span>
                <div className="h-px w-12 bg-white/18" />
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/45">
                  Hero Motion Direction
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 lg:p-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                      {services[1].kicker}
                    </p>
                    <h3 className={`mt-3 text-4xl font-black uppercase italic leading-[0.9] tracking-tight md:text-6xl ${services[1].color}`}>
                      {services[1].title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-300 md:text-base">
                      {services[1].detail}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/12 bg-black/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/65 backdrop-blur-md">
                    Live Reel
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion}
            transition={{ ...tileMotion.transition, delay: 0.08 }}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-4`}
          >
            <div className="relative flex h-full min-h-[20rem] flex-col justify-between p-5 sm:p-6 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />
              <div className="relative z-10">
                <p className={`font-mono text-[10px] uppercase tracking-[0.45em] ${services[2].color}`}>
                  {services[2].id} / {services[2].kicker}
                </p>
                <h3 className={`mt-4 text-3xl font-black uppercase italic leading-[0.92] tracking-tight md:text-4xl ${services[2].color}`}>
                  {services[2].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                  {services[2].detail}
                </p>
              </div>

              <div className="relative z-10 mt-8 grid grid-cols-3 gap-2">
                {collageAssets.map((asset, index) => (
                  <motion.div
                    key={asset}
                    animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="relative aspect-[0.82] overflow-hidden rounded-[1rem] border border-white/10"
                  >
                    <Image src={asset} alt="" fill sizes="20vw" className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion}
            transition={{ ...tileMotion.transition, delay: 0.12 }}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-4`}
          >
            <div className="relative flex h-full min-h-[20rem] flex-col p-5 sm:p-6 md:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/45">
                  Live Signals
                </div>
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              </div>

              <div className="space-y-5">
                {[
                  ["Narrative Build", "91%"],
                  ["Visual Fidelity", "96%"],
                  ["Interaction Density", "84%"],
                ].map(([label, value], index) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                      <span>{label}</span>
                      <span className="text-white/75">{value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: "0% 50%" }}
                        className="h-full rounded-full progressive-scroll-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <p className="text-sm leading-relaxed text-zinc-300">
                  The system stays alive across content, motion, and launch layers instead of breaking into disconnected sections.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion}
            transition={{ ...tileMotion.transition, delay: 0.16 }}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-4`}
          >
            <div className="relative min-h-[20rem] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Media
                  asset={services[3].asset}
                  title={services[3].title}
                  type={services[3].type}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.14),transparent_30%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                <p className={`font-mono text-[10px] uppercase tracking-[0.45em] ${services[3].color}`}>
                  {services[3].note}
                </p>
                <h3 className={`mt-3 text-3xl font-black uppercase italic tracking-tight md:text-4xl ${services[3].color}`}>
                  {services[3].title}
                </h3>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...tileMotion}
            transition={{ ...tileMotion.transition, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className={`${tileClassName} lg:col-span-8`}
          >
            <div className="grid h-full gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[18rem] overflow-hidden lg:min-h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Media
                    asset={services[0].asset}
                    title={services[0].title}
                    type={services[0].type}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7">
                <div>
                  <p className={`font-mono text-[10px] uppercase tracking-[0.45em] ${services[0].color}`}>
                    {services[0].id} / {services[0].kicker}
                  </p>
                  <h3 className={`mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-tight md:text-5xl ${services[0].color}`}>
                    {services[0].title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                    {services[0].detail}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                    Design Notes
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                      <div className="text-2xl font-black text-white">01</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                        Depth-driven layouts
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                      <div className="text-2xl font-black text-white">02</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                        Higher contrast reading
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default SpectrumServices;
