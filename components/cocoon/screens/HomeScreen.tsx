"use client";

import { motion } from "motion/react";
import { Bell, Plus, AlertTriangle, TrendingUp, Home, Users, Building } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { properties, tenants, getUnreadNotifications, getLouedProperties, getTotalRevenue } from "@/lib/cocoon/cocoon-data";
import PropertyCard from "../ui/PropertyCard";
import StatCard from "../ui/StatCard";

export default function HomeScreen() {
  const { navigate, selectProperty } = useNavigation();
  const unread = getUnreadNotifications();
  const loued = getLouedProperties();
  const revenue = getTotalRevenue();

  return (
    <div className="h-full overflow-y-auto pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#f8f9fa] px-5 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500">Bienvenue</p>
            <h1 className="text-xl font-bold font-bricolage">Sylvie B.</h1>
          </div>
          <button onClick={() => navigate("notifications")} className="relative p-2 rounded-full bg-white border border-zinc-200">
            <Bell className="h-5 w-5 text-zinc-700" />
            {unread.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B6B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{unread.length}</span>
            )}
          </button>
        </div>
      </div>

      <div className="px-5 space-y-6 pt-2">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Revenus du mois" value={`${(revenue / 3).toFixed(0)}€`} icon={TrendingUp} color="#22c55e" trend="+12%" />
          <StatCard label="Biens actifs" value={`${properties.length}`} icon={Building} color="#FF6B6B" />
          <StatCard label="Locataires" value={`${tenants.length}`} icon={Users} color="#335c67" />
          <StatCard label="Biens loués" value={`${loued.length}/${properties.length}`} icon={Home} color="#e09f3e" />
        </div>

        {/* Mes biens */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold font-bricolage">Mes biens</h2>
            <button className="flex items-center gap-1 text-xs text-[#FF6B6B] font-medium">
              <Plus className="h-3.5 w-3.5" /> Ajouter
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} variant="horizontal" onClick={() => selectProperty(p.id)} />
            ))}
          </div>
        </div>

        {/* Alertes */}
        <div>
          <h2 className="font-bold font-bricolage mb-3">Alertes récentes</h2>
          <div className="space-y-2">
            {[
              { icon: AlertTriangle, color: "#ef4444", text: "Loyer en retard — Sophie Martin (T2 République)", time: "Il y a 1j" },
              { icon: Building, color: "#e09f3e", text: "Travaux cuisine — Maison Vincennes : étape 2/5", time: "Il y a 2j" },
            ].map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-100">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${a.color}15` }}>
                  <a.icon className="h-4 w-4" style={{ color: a.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-700 leading-relaxed">{a.text}</p>
                  <p className="text-[10px] text-zinc-400 mt-1">{a.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2 pb-4">
          {[
            { label: "Quittance", icon: "📄", action: () => navigate("documents") },
            { label: "Finances", icon: "💰", action: () => navigate("finance") },
            { label: "Travaux", icon: "🔧", action: () => navigate("works") },
          ].map((q, i) => (
            <button key={i} onClick={q.action} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white border border-zinc-100 hover:border-[#FF6B6B]/30 transition-colors">
              <span className="text-xl">{q.icon}</span>
              <span className="text-[10px] font-medium text-zinc-600">{q.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
