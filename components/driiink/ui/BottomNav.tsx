"use client";

import { Home, ShoppingBag, QrCode, Settings } from "lucide-react";
import { useDriiink, useCart, useNavigation } from "@/lib/driiink/driiink-context";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import type { Screen } from "@/lib/driiink/driiink-types";

const tabs: { screen: Screen; icon: typeof Home; label: string }[] = [
  { screen: "home", icon: Home, label: "Menu" },
  { screen: "order", icon: ShoppingBag, label: "Panier" },
  { screen: "table", icon: QrCode, label: "Table" },
  { screen: "settings", icon: Settings, label: "Réglages" },
];

export default function BottomNav() {
  const { state } = useDriiink();
  const { totalItems } = useCart();
  const { navigate } = useNavigation();

  return (
    <div className="absolute bottom-0 left-0 right-0 z-40">
      <div className="h-[72px] bg-white border-t border-zinc-200 flex items-start justify-around px-2 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {tabs.map((tab) => {
          const isActive = state.screen === tab.screen;
          const Icon = tab.icon;

          return (
            <button
              key={tab.screen}
              onClick={() => navigate(tab.screen)}
              className={cn(
                "flex flex-col items-center gap-0.5 transition-all relative py-1 px-3 rounded-xl min-w-[60px]",
                isActive ? "text-[#104911]" : "text-zinc-400"
              )}
            >
              <div className="relative">
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
                {tab.screen === "order" && (
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        className="absolute -top-1.5 -right-2.5 bg-[#f9a620] text-white text-[9px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                )}
              </div>
              <span className={cn("text-[10px]", isActive ? "font-semibold" : "font-medium")}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -top-2 w-10 h-1 bg-[#104911] rounded-full"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
