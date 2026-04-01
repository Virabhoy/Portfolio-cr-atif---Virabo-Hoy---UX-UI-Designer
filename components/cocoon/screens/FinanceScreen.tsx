"use client";

import { ArrowLeft, CreditCard, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { transactions, properties, getTotalRevenue, getTotalExpenses } from "@/lib/cocoon/cocoon-data";

export default function FinanceScreen() {
  const { goBack } = useNavigation();
  const revenue = getTotalRevenue();
  const expenses = getTotalExpenses();
  const balance = revenue - expenses;

  // Donut data
  const revenueByProperty = properties.filter(p => p.status === "loue").map(p => ({
    name: p.title.split(" ").slice(0, 2).join(" "),
    amount: transactions.filter(t => t.propertyId === p.id && t.type === "income").reduce((s, t) => s + t.amount, 0),
  }));
  const colors = ["#FF6B6B", "#335c67", "#e09f3e", "#22c55e"];

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 pt-4 pb-3 flex items-center gap-3">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage">Finances</h1>
      </div>

      <div className="px-5 space-y-5 pb-8">
        {/* Balance card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#e05555] text-white p-5">
          <p className="text-xs text-white/70">Solde total</p>
          <p className="text-3xl font-bold font-bricolage mt-1">{balance.toLocaleString()}€</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-[10px] text-white/60">Revenus</p>
              <p className="text-sm font-bold">+{revenue.toLocaleString()}€</p>
            </div>
            <div>
              <p className="text-[10px] text-white/60">Dépenses</p>
              <p className="text-sm font-bold">-{expenses.toLocaleString()}€</p>
            </div>
          </div>
        </div>

        {/* Revenue by property - donut */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h3 className="font-bold text-sm mb-4">Revenus par bien</h3>
          <div className="flex items-center gap-6">
            <div className="relative w-28 h-28 shrink-0">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="45" fill="none" stroke="#f0f0f0" strokeWidth="14" />
                {revenueByProperty.map((p, i) => {
                  const total = revenueByProperty.reduce((s, r) => s + r.amount, 0);
                  const pct = (p.amount / total) * 283;
                  const offset = revenueByProperty.slice(0, i).reduce((s, r) => s + (r.amount / total) * 283, 0);
                  return <circle key={i} cx="60" cy="60" r="45" fill="none" stroke={colors[i]} strokeWidth="14" strokeDasharray={`${pct} ${283 - pct}`} strokeDashoffset={-offset} strokeLinecap="round" />;
                })}
              </svg>
            </div>
            <div className="space-y-2">
              {revenueByProperty.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors[i] }} />
                  <div>
                    <p className="text-xs font-medium">{p.name}</p>
                    <p className="text-[10px] text-zinc-400">{p.amount.toLocaleString()}€</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEPA */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#335c67]/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-[#335c67]" />
            </div>
            <div>
              <p className="font-bold text-sm">Prélèvement SEPA</p>
              <p className="text-[10px] text-zinc-500">Connecté — BNP Paribas ****4521</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-zinc-50 p-3">
              <p className="text-[10px] text-zinc-500">Dernier prélèvement</p>
              <p className="text-sm font-bold">05/03/2024</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-3">
              <p className="text-[10px] text-zinc-500">Prochain</p>
              <p className="text-sm font-bold">05/04/2024</p>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <h3 className="font-bold text-sm mb-3">Historique</h3>
          <div className="space-y-1">
            {transactions.slice(0, 8).map((t) => (
              <div key={t.id} className="flex items-center gap-3 py-2.5 border-b border-zinc-50">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.type === "income" ? "bg-green-50" : "bg-red-50"}`}>
                  {t.type === "income" ? <ArrowDownLeft className="h-4 w-4 text-green-600" /> : <ArrowUpRight className="h-4 w-4 text-red-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{t.description}</p>
                  <p className="text-[10px] text-zinc-400">{new Date(t.date).toLocaleDateString("fr-FR")}</p>
                </div>
                <span className={`text-sm font-bold ${t.type === "income" ? "text-green-600" : "text-red-500"}`}>
                  {t.type === "income" ? "+" : ""}{t.amount.toLocaleString()}€
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
