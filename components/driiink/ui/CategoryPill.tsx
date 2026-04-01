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
          ? "bg-[#104911] text-white border-[#104911] shadow-md"
          : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
      )}
    >
      <span>{emoji}</span>
      <span>{name}</span>
    </motion.button>
  );
}
