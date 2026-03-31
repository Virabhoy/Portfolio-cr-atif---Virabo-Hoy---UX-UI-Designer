"use client";

import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SplitControlProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function SplitControl({ count, onIncrement, onDecrement }: SplitControlProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-400 text-sm font-medium">Diviser en :</span>
      <div className="flex items-center gap-1 bg-[#22C55E]/10 backdrop-blur-sm border border-[#22C55E]/20 rounded-full">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onDecrement}
          disabled={count <= 1}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-[#22C55E] text-white disabled:opacity-30 shadow-md shadow-green-500/20"
        >
          <Minus size={12} />
        </motion.button>
        <div className="relative overflow-hidden w-6 h-5">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={count}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-white font-bold text-sm text-center block"
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onIncrement}
          disabled={count >= 8}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-[#22C55E] text-white disabled:opacity-30 shadow-md shadow-green-500/20"
        >
          <Plus size={12} />
        </motion.button>
      </div>
    </div>
  );
}
