"use client";

import { User, Mail, Phone, Bell, Shield, Lock, Trash2, LogOut, ChevronRight } from "lucide-react";

export default function SettingsScreen() {
  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <h1 className="text-xl font-bold font-bricolage mb-6">Mon compte</h1>

      {/* Profile */}
      <div className="rounded-xl border border-zinc-100 bg-white p-5 mb-6">
        <h3 className="font-bold text-sm mb-4">Informations personnelles</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffc09f]/20 flex items-center justify-center"><User className="h-5 w-5 text-[#ffc09f]" /></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Jean Dupont</p>
              <p className="text-[10px] text-zinc-400">Membre depuis janvier 2024</p>
            </div>
            <button className="text-xs text-[#ffc09f] font-medium">Modifier</button>
          </div>
          <div className="h-px bg-zinc-50" />
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-zinc-400" />
            <span className="text-sm text-zinc-600 flex-1">jean.dupont@email.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-zinc-400" />
            <span className="text-sm text-zinc-600 flex-1">+33 6 12 34 56 78</span>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-zinc-100 bg-white overflow-hidden mb-6">
        <h3 className="font-bold text-sm p-5 pb-3">Notifications</h3>
        {[
          { label: "Contrôle de présence", desc: "Emails de vérification", on: true },
          { label: "Nouveaux messages", desc: "Quand un message est livré", on: true },
          { label: "Newsletter", desc: "Actualités et conseils", on: false },
        ].map((n, i, arr) => (
          <div key={i} className={`flex items-center justify-between px-5 py-3 ${i < arr.length - 1 ? "border-b border-zinc-50" : ""}`}>
            <div>
              <p className="text-sm">{n.label}</p>
              <p className="text-[10px] text-zinc-400">{n.desc}</p>
            </div>
            <div className={`w-10 h-6 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${n.on ? "bg-[#adf7b6]" : "bg-zinc-200"}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${n.on ? "translate-x-4" : ""}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Security */}
      <div className="rounded-xl border border-zinc-100 bg-white overflow-hidden mb-6">
        <h3 className="font-bold text-sm p-5 pb-3">Sécurité</h3>
        {[
          { icon: Lock, label: "Changer le mot de passe" },
          { icon: Shield, label: "Authentification à deux facteurs", badge: "Activé" },
        ].map((s, i) => (
          <button key={i} className="w-full flex items-center gap-3 px-5 py-3 border-b border-zinc-50 text-left hover:bg-zinc-50 transition-colors">
            <s.icon className="h-4 w-4 text-zinc-400" />
            <span className="flex-1 text-sm">{s.label}</span>
            {s.badge && <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{s.badge}</span>}
            <ChevronRight className="h-4 w-4 text-zinc-300" />
          </button>
        ))}
      </div>

      {/* Danger */}
      <div className="rounded-xl border border-red-100 bg-red-50/30 p-5 space-y-3">
        <h3 className="font-bold text-sm text-red-600">Zone sensible</h3>
        <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4" /> Supprimer mon compte</button>
        <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-700"><LogOut className="h-4 w-4" /> Se déconnecter</button>
      </div>
    </div>
  );
}
