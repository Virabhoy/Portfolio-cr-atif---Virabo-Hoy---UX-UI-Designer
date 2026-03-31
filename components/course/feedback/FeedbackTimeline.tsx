"use client";

import { useLanguage } from "@/lib/language-context";

interface Threshold {
  range: string;
  labelFr: string;
  labelEn: string;
  descFr: string;
  descEn: string;
  color: string;
  colorLight: string;
  width: number; // percentage of bar
}

const thresholds: Threshold[] = [
  {
    range: "0-100ms",
    labelFr: "Instantane",
    labelEn: "Instant",
    descFr: "Perception de manipulation directe",
    descEn: "Perception of direct manipulation",
    color: "#16A34A",
    colorLight: "#DCFCE7",
    width: 15,
  },
  {
    range: "100ms-1s",
    labelFr: "Perceptible",
    labelEn: "Noticeable",
    descFr: "L'utilisateur reste engage",
    descEn: "User stays engaged",
    color: "#EAB308",
    colorLight: "#FEF9C3",
    width: 25,
  },
  {
    range: "1-10s",
    labelFr: "Lent",
    labelEn: "Slow",
    descFr: "Besoin d'un indicateur de progression",
    descEn: "Needs a progress indicator",
    color: "#F97316",
    colorLight: "#FFEDD5",
    width: 30,
  },
  {
    range: "10s+",
    labelFr: "Rupture",
    labelEn: "Break",
    descFr: "L'utilisateur abandonne",
    descEn: "User abandons",
    color: "#DC2626",
    colorLight: "#FEE2E2",
    width: 30,
  },
];

export default function FeedbackTimeline() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Desktop: horizontal bar */}
      <div className="hidden md:block">
        {/* Labels above */}
        <div className="flex mb-3">
          {thresholds.map((t) => (
            <div
              key={t.range}
              className="flex flex-col items-center"
              style={{ width: `${t.width}%` }}
            >
              <span className="font-bricolage font-bold text-sm" style={{ color: t.color }}>
                {isFr ? t.labelFr : t.labelEn}
              </span>
              <span className="font-montserrat text-xs text-gray-500 mt-0.5">
                {t.range}
              </span>
            </div>
          ))}
        </div>

        {/* Bar */}
        <svg width="100%" height="48" viewBox="0 0 800 48" preserveAspectRatio="none">
          {thresholds.reduce(
            (acc, t, i) => {
              const x = acc.offset;
              const w = (t.width / 100) * 800;
              acc.elements.push(
                <g key={t.range}>
                  <rect
                    x={x}
                    y={8}
                    width={w}
                    height={32}
                    rx={i === 0 ? 8 : 0}
                    ry={i === 0 ? 8 : 0}
                    fill={t.color}
                    opacity={0.85}
                  />
                  {i === thresholds.length - 1 && (
                    <rect x={x} y={8} width={w} height={32} rx={8} ry={8} fill={t.color} opacity={0.85} />
                  )}
                  {/* Separator line */}
                  {i > 0 && (
                    <line x1={x} y1={8} x2={x} y2={40} stroke="white" strokeWidth={2} />
                  )}
                  {/* Icon in bar */}
                  <text
                    x={x + w / 2}
                    y={29}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    fontFamily="system-ui"
                  >
                    {i === 0 ? "\u26A1" : i === 1 ? "\u23F3" : i === 2 ? "\u23F0" : "\u26D4"}
                  </text>
                </g>
              );
              acc.offset = x + w;
              return acc;
            },
            { offset: 0, elements: [] as React.ReactNode[] }
          ).elements}
        </svg>

        {/* Descriptions below */}
        <div className="flex mt-3">
          {thresholds.map((t) => (
            <div
              key={t.range}
              className="flex flex-col items-center px-1"
              style={{ width: `${t.width}%` }}
            >
              <span className="font-montserrat text-xs text-gray-600 text-center leading-tight">
                {isFr ? t.descFr : t.descEn}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical cards */}
      <div className="flex md:hidden flex-col gap-3">
        {thresholds.map((t) => (
          <div
            key={t.range}
            className="rounded-xl p-4 border-l-4 bg-white shadow-sm"
            style={{ borderLeftColor: t.color }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bricolage font-bold" style={{ color: t.color }}>
                {isFr ? t.labelFr : t.labelEn}
              </span>
              <span className="font-montserrat text-xs text-gray-400 font-medium">
                {t.range}
              </span>
            </div>
            <p className="font-montserrat text-sm text-gray-600">
              {isFr ? t.descFr : t.descEn}
            </p>
          </div>
        ))}
      </div>

      {/* Attribution */}
      <p className="text-center font-montserrat text-xs text-gray-400 mt-4">
        {isFr ? "Seuils de Jakob Nielsen (1993)" : "Jakob Nielsen thresholds (1993)"}
      </p>
    </div>
  );
}
