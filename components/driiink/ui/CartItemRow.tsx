"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "motion/react";
import type { CartItem } from "@/lib/driiink/driiink-types";
import QuantityControl from "./QuantityControl";

interface CartItemRowProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  index?: number;
}

export default function CartItemRow({
  item,
  onIncrement,
  onDecrement,
  onRemove,
  index = 0,
}: CartItemRowProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, x: -30 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10"
    >
      {/* Quantity badge */}
      <QuantityControl
        quantity={item.quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        size="sm"
      />

      {/* Drink thumbnail */}
      <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
        <Image
          src={item.drink.image}
          alt={item.drink.name}
          fill
          className="object-cover"
          sizes="40px"
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

      {/* Remove */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={onRemove}
        className="w-6 h-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-zinc-500 hover:text-red-400 hover:border-red-400/30 transition-colors shrink-0"
      >
        <X size={12} />
      </motion.button>
    </motion.div>
  );
}
