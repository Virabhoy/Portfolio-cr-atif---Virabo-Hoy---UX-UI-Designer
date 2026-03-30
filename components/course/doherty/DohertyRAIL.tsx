"use client";

import { useLanguage } from "@/lib/language-context";

const RAIL_ITEMS = [
  {
    ms: "16ms",
    label: { fr: "Animation", en: "Animation" },
    sub: { fr: "60fps — mouvement fluide", en: "60fps — smooth motion" },
    color: "#22C55E",
    width: 38,
  },
  {
    ms: "100ms",
    label: { fr: "Réponse", en: "Response" },
    sub: { fr: "Retour visuel immédiat", en: "Immediate visual feedback" },
    color: "#0099FF",
    width: 58,
  },
  {
    ms: "400ms",
    label: { fr: "Seuil de Doherty", en: "Doherty Threshold" },
    sub: { fr: "Limite du flux cognitif", en: "Cognitive flow limit" },
    color: "#F59E0B",
    width: 78,
  },
  {
    ms: "1 000ms",
    label: { fr: "Continuité", en: "Continuity" },
    sub: { fr: "Perte du fil narratif", en: "Loss of narrative thread" },
    color: "#F97316",
    width: 100,
  },
  {
    ms: "10 000ms",
    label: { fr: "Abandon", en: "Abandonment" },
    sub: { fr: "Décrochage total", en: "Total disengagement" },
    color: "#EF4444",
    width: 120,
  },
];

export default function DohertyRAIL() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="space-y-3">
      {RAIL_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <span
            className="font-montserrat text-xs font-bold tabular-nums shrink-0"
            style={{ color: item.color, minWidth: 56 }}
          >
            {item.ms}
          </span>
          <div className="flex-1 flex items-center gap-3">
            <div
              className="h-8 rounded-lg flex items-center px-3 shrink-0"
              style={{ width: item.width, backgroundColor: item.color + "22", border: `1.5px solid ${item.color}` }}
            />
            <div>
              <p className="font-montserrat text-xs font-bold" style={{ color: item.color }}>
                {item.label[isFr ? "fr" : "en"]}
              </p>
              <p className="font-montserrat text-xs text-[var(--muted-foreground)]">
                {item.sub[isFr ? "fr" : "en"]}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Doherty highlight */}
      <div className="mt-6 bg-[#F59E0B] text-white rounded-xl px-5 py-3">
        <p className="font-montserrat text-sm font-semibold">
          {isFr
            ? "Le Seuil de Doherty à 400ms est le point de bascule entre flux et friction."
            : "The 400ms Doherty Threshold is the tipping point between flow and friction."}
        </p>
      </div>
    </div>
  );
}
