"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";

const services = [
  {
    id: "01",
    title: "INTERFACE",
    kicker: "SCULPTING SPATIAL REWRITES",
    detail:
      "We build interfaces with cinematic hierarchy and a stronger editorial sense of pacing, so the work feels authored instead of assembled.",
    note: "Systems for premium product surfaces",
    asset: "/assert/Whisk_2ad878bfe1aea3c998f46445c269c9e2eg.png",
    type: "image",
    color: "text-neon-green",
    align: "left",
  },
  {
    id: "02",
    title: "MOTION",
    kicker: "CHOREOGRAPHING KINETIC SOULS",
    detail:
      "Motion becomes a narrative tool here, shaping energy and attention without relying on fragile scroll tricks or overdesigned transitions.",
    note: "Movement that survives real use",
    asset: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4",
    type: "video",
    color: "text-electric-cyan",
    align: "right",
  },
  {
    id: "03",
    title: "STRATEGY",
    kicker: "MAPPING THE SPEC SPECTRUM",
    detail:
      "The direction gets sharper before the polish arrives, which gives the whole experience more conviction, clarity, and visual authority.",
    note: "Clearer direction, fewer decorative detours",
    asset: "/assert/Whisk_8e16227fc1163a8baa847d584adb863feg.png",
    type: "image",
    color: "text-hot-pink",
    align: "left",
  },
  {
    id: "04",
    title: "QUANTUM",
    kicker: "ARCHITECTING DIGITAL REALMES",
    detail:
      "Design and production stay close together, so ambitious concepts keep their edge as they become real, stable, and shippable.",
    note: "Concept-heavy work, production-ready finish",
    asset: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4",
    type: "video",
    color: "text-solar-yellow",
    align: "right",
  },
];

const EditorialMedia = ({
  asset,
  title,
  type,
}: {
  asset: string;
  title: string;
  type: "image" | "video";
}) => {
  if (type === "image") {
    return (
      <Image
        src={asset}
        alt={title}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
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
      className="h-full w-full object-cover"
    />
  );
};

const SpectrumServices = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:92px_92px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-4xl md:mb-18 lg:mb-24">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.6em] text-white/45">
            Core Capabilities
          </p>
          <h2 className="text-3xl font-black uppercase italic leading-[0.92] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
            Editorial Blocks.
            <br />
            Stronger Presence.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 md:mt-6 md:text-base">
            A magazine-style layout with bolder pacing, clearer hierarchy, and inline media that breaks the section
            into feature stories instead of making it feel like a widget.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10 lg:space-y-16">
          {services.map((service, index) => {
            const reversed = service.align === "right";

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl sm:p-4 md:gap-6 md:rounded-[1.75rem] md:p-5 lg:grid-cols-12 lg:gap-8 lg:rounded-[2rem] lg:p-8"
              >
                <div className={`order-2 flex flex-col justify-between rounded-[1.2rem] border border-white/8 bg-black/40 p-5 sm:p-6 md:rounded-[1.35rem] md:p-7 lg:col-span-5 lg:rounded-[1.5rem] lg:p-8 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
                      <span className={`font-mono text-[10px] uppercase tracking-[0.5em] ${service.color}`}>
                        {service.id}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500 sm:text-[11px] sm:tracking-[0.38em] md:text-xs md:tracking-[0.42em]">
                      {service.kicker}
                    </p>
                    <h3 className={`mt-3 text-[14vw] font-black uppercase italic leading-[0.88] tracking-tight sm:text-[12vw] md:mt-4 md:text-6xl lg:text-[5.4vw] ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-300 md:mt-6 md:text-base">
                      {service.detail}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pt-5">
                    <p className="max-w-[18rem] font-mono text-[10px] uppercase tracking-[0.28em] text-white/38 sm:max-w-[16rem] sm:tracking-[0.35em]">
                      {service.note}
                    </p>
                    <div className="flex gap-2">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className={`rounded-full ${
                            dot === 0 ? "h-1.5 w-10 bg-white/70" : "h-1.5 w-1.5 bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`order-1 relative min-h-[240px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-950 sm:min-h-[300px] md:min-h-[360px] md:rounded-[1.35rem] lg:col-span-7 lg:min-h-[420px] lg:rounded-[1.5rem] ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <EditorialMedia asset={service.asset} title={service.title} type={service.type} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.14),transparent_28%)]" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6 lg:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 sm:tracking-[0.45em]">
                      Feature Frame
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpectrumServices;
