"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { CartItem } from "@/lib/driiink/driiink-types";

interface PaymentItemRowProps {
  item: CartItem;
  selected: boolean;
  onToggle: () => void;
  disabled?: boolean;
  index?: number;
}

export default function PaymentItemRow({
  item,
  selected,
  onToggle,
  disabled = false,
  index = 0,
}: PaymentItemRowProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      onClick={onToggle}
      disabled={disabled}
      className={cn(
        "flex items-center gap-3 backdrop-blur-md rounded-2xl p-3 border transition-all w-full text-left",
        selected
          ? "bg-[#22C55E]/10 border-[#22C55E]/30 shadow-md shadow-green-500/5"
          : "bg-white/5 border-white/10",
        disabled && "opacity-40"
      )}
    >
      {/* Checkbox */}
      <motion.div
        animate={selected ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.2 }}
        className={cn(
          "w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all",
          selected
            ? "bg-[#22C55E] border-[#22C55E] shadow-md shadow-green-500/30"
            : "border-zinc-600 bg-transparent"
        )}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <Check size={14} className="text-white" />
          </motion.div>
        )}
      </motion.div>

      {/* Quantity badge */}
      <span className="w-6 h-6 bg-[#22C55E]/15 rounded-full flex items-center justify-center text-[#22C55E] text-xs font-bold shrink-0">
        {item.quantity}
      </span>

      {/* Drink thumbnail */}
      <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/10">
        <Image
          src={item.drink.image}
          alt={item.drink.name}
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-sm font-semibold truncate">{item.drink.name}</h3>
        <p className="text-zinc-500 text-xs truncate">{item.drink.description}</p>
      </div>

      {/* Price */}
      <span className="text-white font-bold text-sm shrink-0">
        {(item.drink.price * item.quantity).toFixed(2)}&euro;
      </span>
    </motion.button>
  );
}
