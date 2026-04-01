"use client";

import { LeaveProvider, useLeave, useLeaveNav } from "@/lib/leave/leave-context";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Home, MessageCircle, Users, CreditCard, User, Menu, X, Settings, Bell, Send, BookOpen, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";
import { InteractiveMenu } from "@/components/ui/modern-mobile-menu";
import type { Screen } from "@/lib/leave/leave-types";

import DashboardScreen from "./screens/DashboardScreen";
import CreateMessageScreen from "./screens/CreateMessageScreen";
import RecordVideoScreen from "./screens/RecordVideoScreen";
import MyMessagesScreen from "./screens/MyMessagesScreen";
import RecipientsScreen from "./screens/RecipientsScreen";
import PricingScreen from "./screens/PricingScreen";
import HelpScreen from "./screens/HelpScreen";
import SettingsScreen from "./screens/SettingsScreen";

const MAIN_SCREENS: Screen[] = ["dashboard", "my-messages", "recipients", "pricing", "account"];

const MENU_ITEMS = [
  { label: "Accueil", icon: Home, screen: "dashboard" as Screen },
  { label: "Messages", icon: MessageCircle, screen: "my-messages" as Screen },
  { label: "Contacts", icon: Users, screen: "recipients" as Screen },
  { label: "Offre", icon: CreditCard, screen: "pricing" as Screen },
  { label: "Compte", icon: User, screen: "account" as Screen },
];

const SIDEBAR_ITEMS = [
  { screen: "dashboard" as Screen, icon: Home, label: "Accueil" },
  { screen: "my-messages" as Screen, icon: MessageCircle, label: "Mes messages" },
  { screen: "recipients" as Screen, icon: Users, label: "Destinataires" },
  { screen: "pricing" as Screen, icon: CreditCard, label: "Mon offre" },
  { screen: "account" as Screen, icon: User, label: "Mon compte" },
];

const SIDEBAR_BOTTOM = [
  { screen: "help" as Screen, icon: BookOpen, label: "Le blog" },
  { screen: "help" as Screen, icon: HelpCircle, label: "Aide" },
];

function ScreenRouter() {
  const { state } = useLeave();
  const screens: Record<string, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    "create-message": <CreateMessageScreen />,
    "record-video": <RecordVideoScreen />,
    "my-messages": <MyMessagesScreen />,
    recipients: <RecipientsScreen />,
    pricing: <PricingScreen />,
    help: <HelpScreen />,
    settings: <SettingsScreen />,
    account: <SettingsScreen />,
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div key={state.screen} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="h-full">
        {screens[state.screen] || <DashboardScreen />}
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Desktop Sidebar ─── */
function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state } = useLeave();
  const { navigate } = useLeaveNav();

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={onClose} />}
      <aside className={`fixed md:static z-50 top-0 left-0 h-full w-60 bg-white border-r border-zinc-100 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-6 pb-4">
          <Link href="/leave-landing" className="flex items-center gap-2 text-xl font-bold text-[#5B7FD6]" style={{ fontFamily: "var(--font-grandstander), cursive" }}>
            <Send className="w-5 h-5" /> Leave
          </Link>
        </div>
        <div className="h-px bg-zinc-100 mx-4" />
        <nav className="flex-1 px-3 py-4 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const active = state.screen === item.screen || (item.screen === "my-messages" && ["my-messages", "create-message", "record-video"].includes(state.screen));
            return (
              <button key={item.label} onClick={() => { navigate(item.screen); onClose(); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-[#5B7FD6]/10 text-[#5B7FD6] font-semibold" : "text-zinc-500 hover:bg-zinc-50"}`}>
                <item.icon className="h-4 w-4" /> {item.label}
              </button>
            );
          })}
        </nav>
        <div className="h-px bg-zinc-100 mx-4" />
        <nav className="px-3 py-4 space-y-1">
          {SIDEBAR_BOTTOM.map((item, i) => (
            <button key={i} onClick={() => { navigate(item.screen); onClose(); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50">
              <item.icon className="h-4 w-4" /> {item.label}
            </button>
          ))}
        </nav>
        <div className="h-px bg-zinc-100 mx-4" />
        <div className="px-3 py-4">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-red-500 hover:bg-red-50">
            <LogOut className="h-4 w-4" /> Se déconnecter
          </button>
        </div>
      </aside>
    </>
  );
}

/* ─── Mobile Bottom Menu ─── */
function MobileBottomNav() {
  const { state } = useLeave();
  const { navigate } = useLeaveNav();

  const activeIdx = MENU_ITEMS.findIndex((item) => {
    if (item.screen === state.screen) return true;
    if (item.screen === "my-messages" && ["my-messages", "create-message", "record-video"].includes(state.screen)) return true;
    if (item.screen === "dashboard" && state.screen === "help") return true;
    return false;
  });

  const menuItems = MENU_ITEMS.map((item) => ({
    label: item.label,
    icon: item.icon,
    onClick: () => navigate(item.screen),
  }));

  // Only show on main screens
  const showNav = MAIN_SCREENS.includes(state.screen) || ["help", "create-message", "record-video"].includes(state.screen);
  if (!showNav) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 safe-area-pb">
      <InteractiveMenu
        items={menuItems}
        accentColor="#5B7FD6"
        activeIndex={activeIdx >= 0 ? activeIdx : 0}
        onActiveChange={(i) => navigate(MENU_ITEMS[i].screen)}
      />
    </div>
  );
}

/* ─── Main Shell ─── */
function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fa]">
      {/* Sidebar — desktop always visible, mobile toggle */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-white border-b border-zinc-100">
          <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-zinc-50" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-zinc-50"><Settings className="h-4 w-4 text-zinc-500" /></button>
            <button className="p-2 rounded-lg hover:bg-zinc-50 relative">
              <Bell className="h-4 w-4 text-zinc-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffc09f] rounded-full" />
            </button>
          </div>
        </header>

        {/* Content — with bottom padding for mobile nav */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <ScreenRouter />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <MobileBottomNav />

      {/* Back to portfolio — desktop only */}
      <Link href="/projects/leave" className="hidden md:flex fixed bottom-6 left-6 z-50 items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur border border-zinc-200 text-sm text-zinc-600 hover:text-[#5B7FD6] transition-colors shadow-sm">
        <ArrowLeft size={16} /> Portfolio
      </Link>
    </div>
  );
}

export default function LeaveApp() {
  return (
    <LeaveProvider>
      <AppShell />
    </LeaveProvider>
  );
}
