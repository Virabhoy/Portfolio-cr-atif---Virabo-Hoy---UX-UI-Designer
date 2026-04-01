"use client";

import type { Transaction } from "@/lib/cocoon/cocoon-types";

interface TransactionRowProps {
  transaction: Transaction;
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
  const isIncome = transaction.type === "income";
  const color = isIncome ? "#10b981" : "#ef4444";
  const sign = isIncome ? "+" : "-";

  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-zinc-900 truncate">
          {transaction.description}
        </p>
        <p className="text-xs text-zinc-400">{transaction.date}</p>
      </div>
      <span className="shrink-0 text-sm font-semibold" style={{ color }}>
        {sign}
        {Math.abs(transaction.amount).toLocaleString("fr-FR")}&nbsp;&euro;
      </span>
    </div>
  );
}
