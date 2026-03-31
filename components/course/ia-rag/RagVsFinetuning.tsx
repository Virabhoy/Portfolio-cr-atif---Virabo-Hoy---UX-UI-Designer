"use client";

import { useLanguage } from "@/lib/language-context";

interface ComparisonItem {
  label: { fr: string; en: string };
  isPro: boolean;
}

interface Column {
  title: string;
  items: ComparisonItem[];
  color: string;
  bgColor: string;
}

export default function RagVsFinetuning() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "RAG vs Fine-tuning : comparaison"
      : "RAG vs Fine-tuning: Comparison";

  const ragColumn: Column = {
    title: "RAG",
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    items: [
      { label: { fr: "Donnees toujours a jour", en: "Always up-to-date data" }, isPro: true },
      { label: { fr: "Pas d'entrainement requis", en: "No training required" }, isPro: true },
      { label: { fr: "Sources externes verifiables", en: "Verifiable external sources" }, isPro: true },
      { label: { fr: "Cout de deploiement modere", en: "Moderate deployment cost" }, isPro: true },
      { label: { fr: "Latence supplementaire", en: "Additional latency" }, isPro: false },
      { label: { fr: "Depend de la qualite des sources", en: "Depends on source quality" }, isPro: false },
    ],
  };

  const ftColumn: Column = {
    title: "Fine-tuning",
    color: "#5B21B6",
    bgColor: "#DDD6FE",
    items: [
      { label: { fr: "Connaissances integrees au modele", en: "Knowledge embedded in model" }, isPro: true },
      { label: { fr: "Reponses plus rapides", en: "Faster responses" }, isPro: true },
      { label: { fr: "Donnees statiques apres entrainement", en: "Static data after training" }, isPro: false },
      { label: { fr: "Necessite un jeu de donnees curate", en: "Requires curated dataset" }, isPro: false },
      { label: { fr: "Entrainement couteux en GPU", en: "Expensive GPU training" }, isPro: false },
      { label: { fr: "Risque de hallucination accru", en: "Increased hallucination risk" }, isPro: false },
    ],
  };

  const colWidth = 360;
  const startY = 80;
  const rowHeight = 38;
  const gap = 30;

  const maxRows = Math.max(ragColumn.items.length, ftColumn.items.length);
  const svgHeight = startY + maxRows * rowHeight + 40;

  function renderColumn(col: Column, items: ComparisonItem[], offsetX: number) {
    return (
      <g>
        {/* Column header */}
        <rect x={offsetX} y={45} width={colWidth} height={32} rx={8} fill={col.color} />
        <text x={offsetX + colWidth / 2} y={67} textAnchor="middle" fill="white" fontSize={14} fontWeight={700}>
          {col.title}
        </text>

        {/* Items */}
        {items.map((item, i) => {
          const y = startY + i * rowHeight + 10;
          return (
            <g key={i}>
              <rect x={offsetX} y={y} width={colWidth} height={30} rx={6} fill={i % 2 === 0 ? col.bgColor : "white"} opacity={0.7} />
              {/* Pro/Con indicator */}
              <circle cx={offsetX + 18} cy={y + 15} r={7} fill={item.isPro ? "#22C55E" : "#EF4444"} />
              <text x={offsetX + 18} y={y + 19} textAnchor="middle" fill="white" fontSize={10} fontWeight={700}>
                {item.isPro ? "+" : "-"}
              </text>
              {/* Label */}
              <text x={offsetX + 34} y={y + 19} fill="#1E1B4B" fontSize={12} fontWeight={400}>
                {item.label[language]}
              </text>
            </g>
          );
        })}
      </g>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 ${colWidth * 2 + gap + 20} ${svgHeight}`} className="w-full h-auto" role="img" aria-label={title}>
        <text x={(colWidth * 2 + gap + 20) / 2} y={28} textAnchor="middle" fill="#1E1B4B" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* VS divider */}
        <circle cx={colWidth + gap / 2 + 10} cy={61} r={16} fill="#7C3AED" />
        <text x={colWidth + gap / 2 + 10} y={66} textAnchor="middle" fill="white" fontSize={11} fontWeight={700}>
          VS
        </text>

        {renderColumn(ragColumn, ragColumn.items, 10)}
        {renderColumn(ftColumn, ftColumn.items, colWidth + gap + 10)}
      </svg>
    </div>
  );
}
