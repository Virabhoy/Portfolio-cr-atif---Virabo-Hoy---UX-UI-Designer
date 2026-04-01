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

export default function PaymentItemRow({ item, selected, onToggle, disabled = false, index = 0 }: PaymentItemRowProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      onClick={onToggle}
      disabled={disabled}
      className={cn(
        "flex items-center gap-3 rounded-2xl p-3 border transition-all w-full text-left",
        selected ? "bg-[#548c2f]/5 border-[#548c2f]/30 shadow-sm" : "bg-white border-zinc-100",
        disabled && "opacity-40"
      )}
    >
      <motion.div
        animate={selected ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.2 }}
        className={cn("w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all", selected ? "bg-[#548c2f] border-[#548c2f]" : "border-zinc-300 bg-white")}
      >
        {selected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 15 }}><Check size={14} className="text-white" /></motion.div>}
      </motion.div>
      <span className="w-6 h-6 bg-[#548c2f]/10 rounded-full flex items-center justify-center text-[#548c2f] text-xs font-bold shrink-0">{item.quantity}</span>
      <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-zinc-100">
        <Image src={item.drink.image} alt={item.drink.name} fill className="object-cover" sizes="32px" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-zinc-900 text-sm font-semibold truncate">{item.drink.name}</h3>
        <p className="text-zinc-400 text-xs truncate">{item.drink.description}</p>
      </div>
      <span className="text-zinc-900 font-bold text-sm shrink-0">{(item.drink.price * item.quantity).toFixed(2)}&euro;</span>
    </motion.button>
  );
}
