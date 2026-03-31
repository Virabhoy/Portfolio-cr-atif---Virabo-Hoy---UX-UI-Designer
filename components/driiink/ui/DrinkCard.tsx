"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Drink } from "@/lib/driiink/driiink-types";

interface DrinkCardProps {
  drink: Drink;
  onSelect: (id: string) => void;
  variant?: "horizontal" | "vertical";
  index?: number;
}

export default function DrinkCard({ drink, onSelect, variant = "vertical", index = 0 }: DrinkCardProps) {
  if (variant === "horizontal") {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect(drink.id)}
        className="flex-shrink-0 w-[160px] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 text-left transition-shadow hover:shadow-xl hover:shadow-green-500/5 snap-start"
      >
        <div className="relative w-full h-[120px]">
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-cover"
            sizes="160px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {drink.popular && (
            <span className="absolute top-2 left-2 bg-[#22C55E]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-lg shadow-green-500/30">
              Populaire
            </span>
          )}
        </div>
        <div className="p-3">
          <h3 className="text-white text-sm font-semibold truncate">{drink.name}</h3>
          <p className="text-zinc-500 text-xs mt-0.5 line-clamp-2">{drink.description}</p>
          <p className="text-[#22C55E] font-bold text-sm mt-2">
            {drink.price.toFixed(2)}&euro;
          </p>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(drink.id)}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 text-left w-full transition-shadow hover:shadow-xl hover:shadow-green-500/5 group"
    >
      <div className="relative w-full h-[130px] overflow-hidden">
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 180px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      <div className="p-3">
        <h3 className="text-white text-sm font-semibold truncate">{drink.name}</h3>
        <p className="text-zinc-500 text-xs mt-0.5 line-clamp-2">{drink.description}</p>
        <p className="text-[#22C55E] font-bold text-sm mt-2">
          {drink.price.toFixed(2)}&euro;
        </p>
      </div>
    </motion.button>
  );
}
