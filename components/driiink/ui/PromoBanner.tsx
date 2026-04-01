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
      className="relative w-full h-[150px] rounded-2xl overflow-hidden border border-zinc-200 text-left group shadow-sm"
    >
      <Image src={drink.image} alt={drink.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100%" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-center">
        <span className="text-[#ffd449] text-[10px] font-bold uppercase tracking-wider">Offre Du Moment</span>
        <h3 className="text-white text-lg font-bold font-bricolage mt-0.5">{drink.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white font-bold">{drink.price.toFixed(2)}&euro;</span>
          <span className="bg-[#548c2f] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">-50%</span>
        </div>
      </div>
    </motion.button>
  );
}
