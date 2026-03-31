"use client";

import { Home, ShoppingCart } from "lucide-react";
import { useDriiink, useCart, useNavigation } from "@/lib/driiink/driiink-context";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function BottomNav() {
  const { state } = useDriiink();
  const { totalItems } = useCart();
  const { navigate } = useNavigation();

  const isHome = state.screen === "home";
  const isOrder = state.screen === "order";

  return (
    <div className="absolute bottom-0 left-0 right-0 z-40">
      <div className="h-20 bg-black/60 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-8">
        <button
          onClick={() => navigate("home")}
          className={cn(
            "flex flex-col items-center gap-1 transition-all relative py-2 px-4",
            isHome ? "text-[#22C55E]" : "text-zinc-500"
          )}
        >
          <Home size={22} />
          <span className="text-[10px] font-medium">Accueil</span>
          {isHome && (
            <motion.div
              layoutId="navIndicator"
              className="absolute -bottom-0 w-8 h-0.5 bg-[#22C55E] rounded-full shadow-md shadow-green-500/50"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          )}
        </button>

        <button
          onClick={() => navigate("order")}
          className={cn(
            "flex flex-col items-center gap-1 transition-all relative py-2 px-4",
            isOrder ? "text-[#22C55E]" : "text-zinc-500"
          )}
        >
          <div className="relative">
            <ShoppingCart size={22} />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="absolute -top-2 -right-3 bg-[#22C55E] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md shadow-green-500/30"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <span className="text-[10px] font-medium">Commande</span>
          {isOrder && (
            <motion.div
              layoutId="navIndicator"
              className="absolute -bottom-0 w-8 h-0.5 bg-[#22C55E] rounded-full shadow-md shadow-green-500/50"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
