"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export default function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="relative"
    >
      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 transition-all focus-within:border-[#22C55E]/40 focus-within:bg-white/8">
        <Search size={16} className="text-zinc-500 shrink-0" />
        <input
          type="text"
          placeholder="Rechercher un cocktail..."
          className="bg-transparent text-white text-sm placeholder:text-zinc-500 outline-none w-full"
          readOnly
        />
      </div>
    </motion.div>
  );
}
