"use client";

import React from "react";
import { motion } from "framer-motion";
import KineticAsset from "./KineticAsset";

const assets = [
  { src: "/assert/premium_char_1.png", title: "Iridescent Void", type: "image", delay: 0 },
  { src: "/assert/Whisk_cdzhvtm4uwmibjzw0cmhztytemyzqtl4udnx0co.mp4", title: "Liquid Narrative", type: "video", delay: 0.2 },
  { src: "/assert/premium_obj_2.png", title: "Glass Multiverse", type: "image", delay: 0.4 },
  { src: "/assert/Whisk_edzhrwzijznjhdzx0cm5egotmzy1qtlwumy30sz.mp4", title: "Pulse Kinetic", type: "video", delay: 0.1 },
  { src: "/assert/premium_char_3.png", title: "Future Gaze", type: "image", delay: 0.3 },
  { src: "/assert/Whisk_gznkjwmhzdmmzgol1izhntotudo0qtlmdtzh1yy.mp4", title: "Chromatic Whisk", type: "video", delay: 0.5 },
];

const LayeredGallery = () => {
  return (
    <section className="py-40 px-10 bg-deep-void min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex items-end justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-8xl font-black tracking-tighter"
          >
            OUR <br /> <span className="text-white uppercase">Gallery</span>
          </motion.h2>
          <div className="text-right max-w-sm">
            <p className="text-zinc-500 text-lg">
              A curated collection of digital artifacts. Each piece is a fragment of the Whisk multiverse.
            </p>
          </div>
        </div>

        {/* Asymmetric Overlapping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
          {assets.map((asset, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "mt-0" : "mt-24 md:mt-48"}`}
            >
              <KineticAsset 
                src={asset.src}
                type={asset.type as "image" | "video" | "gif"}
                className="aspect-[4/5] w-full"
                parallaxSpeed={index % 2 === 0 ? 0.2 : 0.4}
                initialDelay={asset.delay}
              />
              <div className="mt-8">
                <span className="text-sm font-mono text-zinc-600">PROJECT_{index + 1}</span>
                <h3 className="text-3xl font-bold mt-2">{asset.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayeredGallery;
