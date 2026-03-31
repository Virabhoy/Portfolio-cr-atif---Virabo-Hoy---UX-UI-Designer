"use client";

import { useState } from "react";
import { Timer, Sparkles, QrCode } from "lucide-react";
import { motion } from "motion/react";
import { useNavigation } from "@/lib/driiink/driiink-context";
import { categories, getPopularDrinks, getDrinksByCategory, promoDrink } from "@/lib/driiink/driiink-data";
import CategoryPill from "../ui/CategoryPill";
import DrinkCard from "../ui/DrinkCard";
import PromoBanner from "../ui/PromoBanner";
import SearchBar from "../ui/SearchBar";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("cocktails");
  const { selectDrink } = useNavigation();
  const popularDrinks = getPopularDrinks();
  const categoryDrinks = getDrinksByCategory(activeCategory);

  return (
    <div className="pb-24 min-h-full">
      {/* Header */}
      <div className="pt-14 px-5 pb-3">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white font-bricolage tracking-tight"
          >
            Driiink
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5"
          >
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-zinc-400 text-xs font-medium">Table 7</span>
          </motion.div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-4">
        <SearchBar />
      </div>

      {/* Happy Hour Banner */}
      <div className="px-5 mb-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-900/40 to-orange-900/30 border border-amber-700/20 p-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center"
            >
              <Timer size={20} className="text-amber-400" />
            </motion.div>
            <div>
              <h2 className="text-white font-bold font-bricolage text-base">
                Happy Hour
              </h2>
              <p className="text-amber-300/80 text-xs">
                -25% sur toutes les cartes des boissons
              </p>
              <p className="text-amber-500/60 text-[10px] mt-0.5">17h30 - 22h</p>
            </div>
          </div>
          <Sparkles size={14} className="absolute top-3 right-4 text-amber-500/30" />
          <Sparkles size={10} className="absolute bottom-4 right-8 text-amber-500/20" />
        </motion.div>
      </div>

      {/* Promo */}
      <div className="px-5 mb-6">
        <PromoBanner drink={promoDrink} onSelect={selectDrink} />
      </div>

      {/* Popular Section */}
      <div className="mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 px-5 mb-3"
        >
          <h2 className="text-white font-bold font-bricolage text-base">
            Les + commandés
          </h2>
          <span className="text-lg">{"\ud83d\udd25"}</span>
        </motion.div>
        <div className="flex gap-3 px-5 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
          {popularDrinks.map((drink, i) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onSelect={selectDrink}
              variant="horizontal"
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 mb-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              name={cat.name}
              emoji={cat.emoji}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* Category Drinks Grid */}
      <div className="px-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-white font-bold font-bricolage text-base">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>
          <span>{categories.find((c) => c.id === activeCategory)?.emoji}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {categoryDrinks.map((drink, i) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onSelect={selectDrink}
              variant="vertical"
              index={i}
            />
          ))}
        </div>
      </div>

      {/* QR Banner */}
      <div className="px-5 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4"
        >
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
            <QrCode size={20} className="text-zinc-400" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Table 7</p>
            <p className="text-zinc-500 text-xs">Scannez le QR code pour partager la commande</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
