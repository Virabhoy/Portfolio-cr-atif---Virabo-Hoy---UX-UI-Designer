"use client";

import { User, Bell, CreditCard, Globe, Moon, HelpCircle, LogOut, ChevronRight, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useDriiink } from "@/lib/driiink/driiink-context";

export default function SettingsScreen() {
  const { dispatch } = useDriiink();

  return (
    <div className="min-h-full bg-[#FAFAFA] pb-24">
      {/* Header */}
      <div className="bg-white pt-14 px-5 pb-5 border-b border-zinc-100">
        <h1 className="text-xl font-bold font-bricolage text-zinc-900">Réglages</h1>
      </div>

      <div className="px-5 pt-5 space-y-4">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#104911]/10 rounded-full flex items-center justify-center">
              <User className="h-7 w-7 text-[#104911]" />
            </div>
            <div>
              <h2 className="font-bold text-zinc-900">Antoine</h2>
              <p className="text-sm text-zinc-500">antoine.m@email.com</p>
            </div>
          </div>
        </motion.div>

        {/* Settings groups */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
        >
          <p className="px-5 pt-4 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Général</p>
          {[
            { label: "Notifications", icon: Bell, value: "Activées" },
            { label: "Langue", icon: Globe, value: "Français" },
            { label: "Mode sombre", icon: Moon, value: "Désactivé" },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-0"
            >
              <item.icon className="h-5 w-5 text-zinc-500 shrink-0" />
              <span className="flex-1 text-sm text-zinc-900">{item.label}</span>
              <span className="text-xs text-zinc-400 mr-1">{item.value}</span>
              <ChevronRight className="h-4 w-4 text-zinc-300 shrink-0" />
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
        >
          <p className="px-5 pt-4 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Paiement</p>
          {[
            { label: "Méthodes de paiement", icon: CreditCard },
            { label: "Historique des transactions", icon: Shield },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-0"
            >
              <item.icon className="h-5 w-5 text-zinc-500 shrink-0" />
              <span className="flex-1 text-sm text-zinc-900">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-zinc-300 shrink-0" />
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
        >
          <p className="px-5 pt-4 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Support</p>
          {[
            { label: "Aide & FAQ", icon: HelpCircle },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full px-5 py-3.5 text-left hover:bg-zinc-50 transition-colors"
            >
              <item.icon className="h-5 w-5 text-zinc-500 shrink-0" />
              <span className="flex-1 text-sm text-zinc-900">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-zinc-300 shrink-0" />
            </button>
          ))}
        </motion.div>

        {/* Logout + Reset */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="flex items-center gap-3 w-full bg-white rounded-2xl px-5 py-4 border border-zinc-100 shadow-sm hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5 text-red-500 shrink-0" />
            <span className="text-sm font-medium text-red-500">Réinitialiser la session</span>
          </button>
        </motion.div>

        <p className="text-center text-[10px] text-zinc-300 pt-2 pb-4">Driiink v1.0 — Démo Portfolio</p>
      </div>
    </div>
  );
}
