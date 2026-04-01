"use client";

import { Home, Search, BarChart3, MessageSquare, User } from "lucide-react";
import { useCocoon, useNavigation } from "@/lib/cocoon/cocoon-context";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import type { Screen } from "@/lib/cocoon/cocoon-types";

const tabs: { screen: Screen; icon: typeof Home; label: string }[] = [
  { screen: "home", icon: Home, label: "Accueil" },
  { screen: "search", icon: Search, label: "Recherche" },
  { screen: "management", icon: BarChart3, label: "Gestion" },
  { screen: "messages", icon: MessageSquare, label: "Messages" },
  { screen: "profile", icon: User, label: "Profil" },
];

const mainScreens = new Set<Screen>(["home", "search", "management", "messages", "profile"]);

export default function BottomNav() {
  const { state } = useCocoon();
  const { navigate } = useNavigation();

  if (!mainScreens.has(state.screen)) return null;

  // Count unread messages (simplified: use a static count for demo)
  const unreadCount = 3;

  return (
    <div className="absolute bottom-0 left-0 right-0 z-40">
      <div className="h-16 bg-white border-t border-zinc-200 flex items-start justify-around px-2 pt-2 pb-safe">
        {tabs.map((tab) => {
          const isActive = state.screen === tab.screen;
          const Icon = tab.icon;

          return (
            <button
              key={tab.screen}
              onClick={() => navigate(tab.screen)}
              className={cn(
                "flex flex-col items-center gap-0.5 transition-all relative py-1 px-3 rounded-xl min-w-[56px]",
                isActive ? "text-[#FF6B6B]" : "text-zinc-400"
              )}
            >
              <div className="relative">
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
                {tab.screen === "messages" && (
                  <AnimatePresence>
                    {unreadCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        className="absolute -top-1 -right-1.5 bg-[#FF6B6B] w-2 h-2 rounded-full"
                      />
                    )}
                  </AnimatePresence>
                )}
              </div>
              <span className={cn("text-[10px]", isActive ? "font-semibold" : "font-medium")}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="cocoonNavIndicator"
                  className="absolute -bottom-1 w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"
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
