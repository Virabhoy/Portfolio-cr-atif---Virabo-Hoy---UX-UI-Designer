"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: "sm" | "md";
}

export default function QuantityControl({ quantity, onIncrement, onDecrement, size = "md" }: QuantityControlProps) {
  const isSmall = size === "sm";

  return (
    <div className={cn("flex items-center rounded-full bg-zinc-100 border border-zinc-200", isSmall ? "gap-1" : "gap-3")}>
      <motion.button whileTap={{ scale: 0.85 }} onClick={onDecrement} className={cn("flex items-center justify-center rounded-full bg-[#104911] text-white shadow-sm", isSmall ? "w-6 h-6" : "w-8 h-8")}>
        <Minus size={isSmall ? 12 : 14} />
      </motion.button>
      <div className="relative overflow-hidden" style={{ width: isSmall ? 20 : 24, height: isSmall ? 16 : 20 }}>
        <AnimatePresence mode="popLayout">
          <motion.span key={quantity} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.15 }} className={cn("text-zinc-900 font-bold text-center block", isSmall ? "text-xs" : "text-sm")}>
            {quantity}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.button whileTap={{ scale: 0.85 }} onClick={onIncrement} className={cn("flex items-center justify-center rounded-full bg-[#104911] text-white shadow-sm", isSmall ? "w-6 h-6" : "w-8 h-8")}>
        <Plus size={isSmall ? 12 : 14} />
      </motion.button>
    </div>
  );
}
