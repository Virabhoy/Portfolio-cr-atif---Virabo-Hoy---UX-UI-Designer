"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Card3D } from "@/components/ui/3d-card";
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
      <Card3D onClick={() => onSelect(drink.id)} className="flex-shrink-0 w-[300px] rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-md hover:shadow-xl snap-start">
        <div className="relative w-full h-[400px]">
          <Image src={drink.image} alt={drink.name} fill className="object-cover" sizes="150px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {drink.popular && (
            <span className="absolute top-2 left-2 bg-[#f9a620] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">
              Populaire
            </span>
          )}
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-white text-sm font-bold truncate drop-shadow-md">{drink.name}</h3>
            <p className="text-[#ffd449] font-bold text-xs drop-shadow-md">{drink.price.toFixed(2)}&euro;</p>
          </div>
        </div>
      </Card3D>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Card3D onClick={() => onSelect(drink.id)} className="rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm hover:shadow-lg w-full">
        <div className="relative w-full h-[160px] overflow-hidden">
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 180px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-3">
          <h3 className="text-zinc-900 text-sm font-semibold truncate">{drink.name}</h3>
          <p className="text-zinc-400 text-xs mt-0.5 line-clamp-1">{drink.description}</p>
          <p className="text-[#548c2f] font-bold text-sm mt-1.5">{drink.price.toFixed(2)}&euro;</p>
        </div>
      </Card3D>
    </motion.div>
  );
}
