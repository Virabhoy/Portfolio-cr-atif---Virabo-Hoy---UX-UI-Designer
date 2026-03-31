"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CategoryPillProps {
  name: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryPill({ name, emoji, active, onClick }: CategoryPillProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-300 border",
        active
          ? "bg-[#22C55E] text-white border-[#22C55E]/50 shadow-lg shadow-green-500/25"
          : "bg-white/5 backdrop-blur-sm text-zinc-400 border-white/10 hover:bg-white/10 hover:text-zinc-300"
      )}
    >
      <span>{emoji}</span>
      <span>{name}</span>
      {active && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-[#22C55E] rounded-full -z-10"
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        />
      )}
    </motion.button>
  );
}
