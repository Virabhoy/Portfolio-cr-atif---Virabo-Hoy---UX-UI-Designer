"use client";

import { useState } from "react";
import { Timer, Sparkles, QrCode, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useNavigation } from "@/lib/driiink/driiink-context";
import { categories, getPopularDrinks, getDrinksByCategory } from "@/lib/driiink/driiink-data";
import CategoryPill from "../ui/CategoryPill";
import DrinkCard from "../ui/DrinkCard";
import SearchBar from "../ui/SearchBar";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("cocktails");
  const { selectDrink } = useNavigation();
  const popularDrinks = getPopularDrinks();
  const categoryDrinks = getDrinksByCategory(activeCategory);

  return (
    <div className="pb-24 min-h-full bg-[#FAFAFA]">
      {/* Back to portfolio */}
      <Link href="/#projects" className="flex items-center gap-1.5 bg-white px-5 pt-3 pb-1 text-zinc-400 hover:text-zinc-700 transition-colors text-xs">
        <ArrowLeft className="h-3 w-3" />
        Retour au portfolio
      </Link>

      {/* Header */}
      <div className="bg-white px-5 pb-3 border-b border-zinc-100">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-zinc-900 font-bricolage"
          >
            Driiink
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-[#548c2f]/10 border border-[#548c2f]/20 rounded-full px-3 py-1.5"
          >
            <div className="w-2 h-2 bg-[#548c2f] rounded-full animate-pulse" />
            <span className="text-[#104911] text-xs font-medium">Table 7</span>
          </motion.div>
        </div>
      </div>

      {/* Popular — 3D Carousel */}
      <div className="mb-3 pt-2">
        <div className="flex items-center gap-2 px-5 mb-1">
          <h2 className="text-zinc-900 font-bold font-bricolage text-base">Les + commandés</h2>
          <span className="text-lg">{"\ud83d\udd25"}</span>
        </div>
        <FeatureCarousel autoPlay interval={4000}>
          {popularDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} onSelect={selectDrink} variant="horizontal" />
          ))}
        </FeatureCarousel>
      </div>

      {/* Search */}
      <div className="px-5 pb-3">
        <SearchBar />
      </div>

      {/* Happy Hour */}
      <div className="px-5 mb-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-[#ffd449]/15 border border-[#f9a620]/20 p-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="w-10 h-10 bg-[#f9a620]/20 rounded-full flex items-center justify-center"
            >
              <Timer size={20} className="text-[#f9a620]" />
            </motion.div>
            <div>
              <h2 className="text-zinc-900 font-bold font-bricolage text-base">Happy Hour</h2>
              <p className="text-[#f9a620] text-xs">-25% sur toutes les cartes des boissons</p>
              <p className="text-zinc-400 text-[10px] mt-0.5">17h30 - 22h</p>
            </div>
          </div>
          <Sparkles size={14} className="absolute top-3 right-4 text-[#ffd449]/40" />
        </motion.div>
      </div>

      {/* Categories */}
      <div className="px-5 mb-3">
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

      {/* Category Grid with 3D cards */}
      <div className="px-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-zinc-900 font-bold font-bricolage text-base">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>
          <span>{categories.find((c) => c.id === activeCategory)?.emoji}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {categoryDrinks.map((drink, i) => (
            <DrinkCard key={drink.id} drink={drink} onSelect={selectDrink} variant="vertical" index={i} />
          ))}
        </div>
      </div>

      {/* QR Banner */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm">
          <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0">
            <QrCode size={20} className="text-zinc-400" />
          </div>
          <div>
            <p className="text-zinc-900 text-sm font-semibold">Table 7</p>
            <p className="text-zinc-400 text-xs">Scannez le QR code pour partager la commande</p>
          </div>
        </div>
      </div>
    </div>
  );
}
