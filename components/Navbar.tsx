"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass px-8 py-4 rounded-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-green to-electric-cyan" />
          <span className="text-xl font-bold tracking-tighter">STUDIO</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Process</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform active:scale-95">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
