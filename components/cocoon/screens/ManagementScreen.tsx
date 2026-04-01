"use client";

import { TrendingUp, TrendingDown, Wallet, BarChart3, FileText, ArrowRight } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { properties, transactions, getTotalRevenue, getTotalExpenses } from "@/lib/cocoon/cocoon-data";
import StatCard from "../ui/StatCard";

const MONTHS = ["Oct", "Nov", "Déc", "Jan", "Fév", "Mar"];
const REVENUE_DATA = [3150, 4250, 3350, 4500, 3350, 4250];
const EXPENSE_DATA = [800, 1200, 600, 5880, 350, 0];

export default function ManagementScreen() {
  const { navigate } = useNavigation();
  const revenue = getTotalRevenue();
  const expenses = getTotalExpenses();
  const balance = revenue - expenses;
  const louedCount = properties.filter((p) => p.status === "loue").length;

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="px-5 pt-4 pb-3">
        <h1 className="text-xl font-bold font-bricolage">Gestion</h1>
        <p className="text-xs text-zinc-500 mt-1">Vue d&apos;ensemble de vos biens</p>
      </div>

      <div className="px-5 space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Loyers perçus" value={`${revenue.toLocaleString()}€`} icon={TrendingUp} color="#22c55e" />
          <StatCard label="Dépenses" value={`${expenses.toLocaleString()}€`} icon={TrendingDown} color="#ef4444" />
          <StatCard label="Solde net" value={`${balance.toLocaleString()}€`} icon={Wallet} color="#335c67" />
          <StatCard label="Taux occupation" value={`${Math.round((louedCount / properties.length) * 100)}%`} icon={BarChart3} color="#e09f3e" />
        </div>

        {/* Bar chart */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h3 className="font-bold text-sm mb-4">Revenus vs Dépenses (6 mois)</h3>
          <div className="flex items-end gap-2 h-32">
            {MONTHS.map((m, i) => {
              const maxVal = Math.max(...REVENUE_DATA, ...EXPENSE_DATA);
              const rH = (REVENUE_DATA[i] / maxVal) * 100;
              const eH = (EXPENSE_DATA[i] / maxVal) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex gap-0.5 items-end h-24">
                    <div className="flex-1 rounded-t-sm bg-[#22c55e]/80" style={{ height: `${rH}%` }} />
                    <div className="flex-1 rounded-t-sm bg-[#ef4444]/60" style={{ height: `${eH}%` }} />
                  </div>
                  <span className="text-[9px] text-zinc-400">{m}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-3 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#22c55e]" /> Revenus</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ef4444]" /> Dépenses</span>
          </div>
        </div>

        {/* Dernières quittances */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Dernières quittances</h3>
            <button onClick={() => navigate("documents")} className="text-[10px] text-[#FF6B6B] font-medium flex items-center gap-1">
              Voir tout <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="space-y-2">
            {transactions.filter((t) => t.type === "income").slice(0, 4).map((t) => (
              <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-white border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">{t.description}</p>
                    <p className="text-[10px] text-zinc-400">{new Date(t.date).toLocaleDateString("fr-FR")}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-600">+{t.amount}€</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 pb-4">
          <button onClick={() => navigate("documents")} className="py-3 rounded-xl bg-[#FF6B6B] text-white text-xs font-semibold">Générer quittance</button>
          <button onClick={() => navigate("finance")} className="py-3 rounded-xl border border-zinc-200 text-xs font-semibold">Voir les finances</button>
        </div>
      </div>
    </div>
  );
}
