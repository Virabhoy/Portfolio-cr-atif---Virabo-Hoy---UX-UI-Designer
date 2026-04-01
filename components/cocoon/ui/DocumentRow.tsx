"use client";

import { FileText, Receipt, FileSpreadsheet, File, ChevronRight } from "lucide-react";
import type { CocoonDocument } from "@/lib/cocoon/cocoon-types";

interface DocumentRowProps {
  doc: CocoonDocument;
}

const iconByType: Record<CocoonDocument["type"], typeof FileText> = {
  bail: FileText,
  quittance: Receipt,
  facture: FileSpreadsheet,
  autre: File,
};

const colorByType: Record<CocoonDocument["type"], string> = {
  bail: "#335c67",
  quittance: "#FF6B6B",
  facture: "#e09f3e",
  autre: "#9ca3af",
};

export default function DocumentRow({ doc }: DocumentRowProps) {
  const Icon = iconByType[doc.type];
  const color = colorByType[doc.type];

  return (
    <button className="flex w-full items-center gap-3 border-b border-zinc-100 py-3 text-left transition-colors hover:bg-zinc-50">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-zinc-900 truncate">{doc.name}</p>
        <p className="text-xs text-zinc-400">
          {doc.date} &middot; {doc.size}
        </p>
      </div>
      <ChevronRight size={16} className="shrink-0 text-zinc-300" />
    </button>
  );
}
