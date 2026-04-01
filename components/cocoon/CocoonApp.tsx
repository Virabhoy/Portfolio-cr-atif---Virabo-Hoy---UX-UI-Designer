"use client";

import { CocoonProvider, useCocoon } from "@/lib/cocoon/cocoon-context";
import CocoonPhoneFrame from "./CocoonPhoneFrame";
import BottomNav from "./ui/BottomNav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Screen } from "@/lib/cocoon/cocoon-types";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PropertyDetailScreen from "./screens/PropertyDetailScreen";
import ManagementScreen from "./screens/ManagementScreen";
import DocumentsScreen from "./screens/DocumentsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ConversationScreen from "./screens/ConversationScreen";
import FinanceScreen from "./screens/FinanceScreen";
import WorksScreen from "./screens/WorksScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

// ── Screen map ──

const screens: Record<Screen, React.ReactNode> = {
  home: <HomeScreen />,
  search: <SearchScreen />,
  "property-detail": <PropertyDetailScreen />,
  management: <ManagementScreen />,
  documents: <DocumentsScreen />,
  messages: <MessagesScreen />,
  conversation: <ConversationScreen />,
  finance: <FinanceScreen />,
  works: <WorksScreen />,
  profile: <ProfileScreen />,
  notifications: <NotificationsScreen />,
};

const screensWithNav = new Set<Screen>(["home", "search", "management", "messages", "profile"]);

// ── Screen Router ──

function ScreenRouter() {
  const { state, direction } = useCocoon();

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8f9fa]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={state.screen}
          custom={direction}
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden"
        >
          {screens[state.screen]}
        </motion.div>
      </AnimatePresence>

      {screensWithNav.has(state.screen) && <BottomNav />}
    </div>
  );
}

// ── Main App ──

export default function CocoonApp() {
  return (
    <CocoonProvider>
      <div className="relative">
        <CocoonPhoneFrame>
          <ScreenRouter />
        </CocoonPhoneFrame>

        {/* Back button to portfolio - desktop only, outside the phone frame */}
        <Link
          href="/projects/cocoon"
          className="hidden md:flex fixed top-6 left-6 z-50 items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-sm text-zinc-600 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/30 transition-colors shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Portfolio</span>
        </Link>
      </div>
    </CocoonProvider>
  );
}
