"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface IridescentCardProps {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const IridescentCard: React.FC<IridescentCardProps> = ({ title, description, tag, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative p-[1px] rounded-[40px] overflow-hidden bg-white/5 transition-all duration-700"
    >
      {/* Moving Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-300 to-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_6s_linear_infinite]" />
      
      {/* Intense Background Glow */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 blur-[100px] transition-colors duration-700" />

      <div className="relative h-full glass rounded-[39px] p-10 flex flex-col justify-between z-10">
        <div>
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
            <div className="text-zinc-400 group-hover:text-white transition-colors">
              {icon}
            </div>
          </div>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">{tag}</span>
          <h3 className="text-3xl font-black mt-4 group-hover:text-white transition-colors tracking-tight leading-tight">{title}</h3>
          <p className="mt-6 text-zinc-500 leading-relaxed font-medium text-lg">
            {description}
          </p>
        </div>
        
        <div className="mt-12 flex justify-end">
          <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-500">
            <ArrowUpRight className="w-6 h-6 text-zinc-600 transition-all group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IridescentCard;
