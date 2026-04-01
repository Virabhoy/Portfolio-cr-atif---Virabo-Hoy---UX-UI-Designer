"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export default function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-4 py-3 shadow-sm transition-all focus-within:border-[#548c2f]/40 focus-within:shadow-md">
        <Search size={16} className="text-zinc-400 shrink-0" />
        <input
          type="text"
          placeholder="Rechercher un cocktail..."
          className="bg-transparent text-zinc-900 text-sm placeholder:text-zinc-400 outline-none w-full"
          readOnly
        />
      </div>
    </motion.div>
  );
}
