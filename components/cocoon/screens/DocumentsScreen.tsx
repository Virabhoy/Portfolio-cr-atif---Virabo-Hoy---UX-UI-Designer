"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Camera, FileText, Receipt, File, ChevronRight } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { documents } from "@/lib/cocoon/cocoon-data";
import type { DocumentType } from "@/lib/cocoon/cocoon-types";

const TABS: { label: string; value: DocumentType | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Baux", value: "bail" },
  { label: "Quittances", value: "quittance" },
  { label: "Factures", value: "facture" },
  { label: "Autres", value: "autre" },
];

const TYPE_ICONS: Record<DocumentType, typeof FileText> = {
  bail: FileText,
  quittance: Receipt,
  facture: File,
  autre: File,
};

const TYPE_COLORS: Record<DocumentType, string> = {
  bail: "#335c67",
  quittance: "#22c55e",
  facture: "#e09f3e",
  autre: "#FF6B6B",
};

export default function DocumentsScreen() {
  const { goBack } = useNavigation();
  const [tab, setTab] = useState<DocumentType | "all">("all");

  const filtered = tab === "all" ? documents : documents.filter((d) => d.type === tab);

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 pt-4 pb-3 flex items-center gap-3">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage">Documents</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-5 pb-4 overflow-x-auto scrollbar-hide">
        {TABS.map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${tab === t.value ? "bg-[#FF6B6B] text-white" : "bg-zinc-100 text-zinc-600"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Document list */}
      <div className="px-5 space-y-1">
        {filtered.map((doc) => {
          const Icon = TYPE_ICONS[doc.type];
          const color = TYPE_COLORS[doc.type];
          return (
            <div key={doc.id} className="flex items-center gap-3 py-3 border-b border-zinc-50">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
                <Icon className="h-4 w-4" style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{doc.name}</p>
                <p className="text-[10px] text-zinc-400">{new Date(doc.date).toLocaleDateString("fr-FR")} · {doc.size}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-zinc-300 shrink-0" />
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="px-5 py-6 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF6B6B] text-white text-xs font-semibold">
          <Plus className="h-3.5 w-3.5" /> Créer un bail
        </button>
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-200 text-xs font-semibold">
          <Camera className="h-3.5 w-3.5" /> Scanner
        </button>
      </div>
    </div>
  );
}
