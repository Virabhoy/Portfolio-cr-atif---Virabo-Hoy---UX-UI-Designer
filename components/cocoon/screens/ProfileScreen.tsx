"use client";

import Image from "next/image";
import { Building, Calendar, Star, Bell, Globe, Moon, Crown, LogOut, ChevronRight, Shield } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { properties, tenants } from "@/lib/cocoon/cocoon-data";

export default function ProfileScreen() {
  const { navigate } = useNavigation();

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="px-5 pt-4 pb-3">
        <h1 className="text-xl font-bold font-bricolage">Mon profil</h1>
      </div>

      <div className="px-5 space-y-5">
        {/* Avatar card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#e05555] text-white p-5 flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
            <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" alt="Sylvie" fill className="object-cover" sizes="64px" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-bricolage">Sylvie Bonnet</h2>
            <p className="text-xs text-white/70">Propriétaire</p>
            <div className="flex items-center gap-1 mt-1">
              <Crown className="h-3 w-3 text-[#e09f3e]" />
              <span className="text-[10px] font-medium text-white/80">Premium</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white border border-zinc-200 p-3 text-center">
            <Building className="h-4 w-4 mx-auto text-[#FF6B6B] mb-1" />
            <p className="text-lg font-bold font-bricolage">{properties.length}</p>
            <p className="text-[10px] text-zinc-400">Biens</p>
          </div>
          <div className="rounded-xl bg-white border border-zinc-200 p-3 text-center">
            <Calendar className="h-4 w-4 mx-auto text-[#335c67] mb-1" />
            <p className="text-lg font-bold font-bricolage">2 ans</p>
            <p className="text-[10px] text-zinc-400">Ancienneté</p>
          </div>
          <div className="rounded-xl bg-white border border-zinc-200 p-3 text-center">
            <Star className="h-4 w-4 mx-auto text-[#e09f3e] mb-1" />
            <p className="text-lg font-bold font-bricolage">4.8</p>
            <p className="text-[10px] text-zinc-400">Note</p>
          </div>
        </div>

        {/* Settings */}
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
          {[
            { icon: Bell, label: "Notifications", value: "Activées", action: () => navigate("notifications") },
            { icon: Globe, label: "Langue", value: "Français" },
            { icon: Moon, label: "Thème", value: "Clair" },
            { icon: Shield, label: "Sécurité", value: "2FA activé" },
          ].map((s, i, arr) => (
            <button key={i} onClick={s.action} className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-zinc-50 transition-colors ${i < arr.length - 1 ? "border-b border-zinc-50" : ""}`}>
              <s.icon className="h-4 w-4 text-zinc-500" />
              <span className="flex-1 text-sm">{s.label}</span>
              <span className="text-xs text-zinc-400">{s.value}</span>
              <ChevronRight className="h-4 w-4 text-zinc-300" />
            </button>
          ))}
        </div>

        {/* Subscription */}
        <div className="rounded-2xl border border-[#FF6B6B]/20 bg-[#FF6B6B]/5 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-[#FF6B6B]" />
              <span className="font-bold text-sm">Abonnement Premium</span>
            </div>
            <span className="text-xs font-bold text-[#FF6B6B]">9.99€/mois</span>
          </div>
          <p className="text-[10px] text-zinc-500">Jusqu&apos;à 5 biens · SEPA · Support prioritaire</p>
          <button className="w-full mt-3 py-2 rounded-lg border border-[#FF6B6B]/30 text-xs font-medium text-[#FF6B6B]">
            Gérer l&apos;abonnement
          </button>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="h-4 w-4" /> Se déconnecter
        </button>
      </div>
    </div>
  );
}
