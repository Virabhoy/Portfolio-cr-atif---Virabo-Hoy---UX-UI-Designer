"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Drink } from "@/lib/driiink/driiink-types";

interface PromoBannerProps {
  drink: Drink;
  onSelect: (id: string) => void;
}

export default function PromoBanner({ drink, onSelect }: PromoBannerProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(drink.id)}
      className="relative w-full h-[160px] rounded-2xl overflow-hidden border border-white/10 text-left group"
    >
      <Image
        src={drink.image}
        alt={drink.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="100%"
      />
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent driiink-shimmer" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-center">
        <span className="text-[#22C55E] text-xs font-bold uppercase tracking-wider">
          Offre Du Moment
        </span>
        <h3 className="text-white text-xl font-bold font-bricolage mt-1">
          {drink.name}
        </h3>
        <p className="text-zinc-300 text-xs mt-1 max-w-[200px] line-clamp-2">
          {drink.description}
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-white font-bold text-lg">{drink.price.toFixed(2)}&euro;</span>
          <motion.span
            animate={{ boxShadow: ["0 0 0px #22C55E", "0 0 12px #22C55E", "0 0 0px #22C55E"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full"
          >
            -50% sur le 2eme
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}
