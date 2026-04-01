"use client";

import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend?: string;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  color,
  trend,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
      <div className="flex items-center justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        {trend && (
          <span
            className={`text-xs font-medium ${
              trend.startsWith("+") ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-xl font-bold text-zinc-900">{value}</p>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
}
