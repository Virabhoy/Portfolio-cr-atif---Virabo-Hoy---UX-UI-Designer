"use client";

import { useLanguage } from "@/lib/language-context";

const VIOLET = "#7C3AED";
const VIOLET_LIGHT = "#EDE9FE";
const VIOLET_SOFT = "#C4B5FD";

interface Metric {
  labelFr: string;
  labelEn: string;
  percentage: number;
  positive: boolean;
}

const metrics: Metric[] = [
  { labelFr: "Code produit", labelEn: "Code Written", percentage: 40, positive: true },
  { labelFr: "Correction de bugs", labelEn: "Bug Fix Time", percentage: 50, positive: false },
  { labelFr: "Temps de review", labelEn: "Review Time", percentage: 30, positive: false },
  { labelFr: "Onboarding", labelEn: "Onboarding", percentage: 60, positive: false },
];

export default function DeveloperProductivity() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Impact sur la productivite des developpeurs"
      : "Impact on Developer Productivity";

  const beforeLabel = language === "fr" ? "Avant" : "Before";
  const afterLabel = language === "fr" ? "Apres IA" : "After AI";

  const barMaxWidth = 260;
  const rowHeight = 70;
  const labelWidth = 150;
  const chartStartX = labelWidth + 10;
  const totalWidth = chartStartX + barMaxWidth + 80;
  const headerHeight = 70;
  const totalHeight = headerHeight + metrics.length * rowHeight + 20;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Title */}
        <text
          x={totalWidth / 2}
          y={24}
          textAnchor="middle"
          fill={VIOLET}
          fontSize="15"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>

        {/* Legend */}
        <rect x={chartStartX} y={40} width={14} height={10} rx={3} fill="#D1D5DB" />
        <text x={chartStartX + 20} y={49} fill="#6B7280" fontSize="10" fontFamily="system-ui, sans-serif">
          {beforeLabel}
        </text>
        <rect x={chartStartX + 80} y={40} width={14} height={10} rx={3} fill={VIOLET} />
        <text x={chartStartX + 100} y={49} fill="#6B7280" fontSize="10" fontFamily="system-ui, sans-serif">
          {afterLabel}
        </text>

        {/* Bars */}
        {metrics.map((metric, idx) => {
          const y = headerHeight + idx * rowHeight;
          const label = language === "fr" ? metric.labelFr : metric.labelEn;
          const beforeWidth = barMaxWidth * 0.6;
          const sign = metric.positive ? "+" : "-";
          const afterRatio = metric.positive
            ? 0.6 * (1 + metric.percentage / 100)
            : 0.6 * (1 - metric.percentage / 100);
          const afterWidth = barMaxWidth * afterRatio;

          return (
            <g key={idx}>
              {/* Label */}
              <text
                x={labelWidth}
                y={y + 20}
                textAnchor="end"
                fill="#1F2937"
                fontSize="11"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {label}
              </text>

              {/* Before bar */}
              <rect
                x={chartStartX}
                y={y + 8}
                width={beforeWidth}
                height={14}
                rx={7}
                fill="#D1D5DB"
              />

              {/* After bar */}
              <rect
                x={chartStartX}
                y={y + 30}
                width={afterWidth}
                height={14}
                rx={7}
                fill={VIOLET}
              />

              {/* Percentage badge */}
              <rect
                x={chartStartX + Math.max(afterWidth, beforeWidth) + 8}
                y={y + 14}
                width={48}
                height={22}
                rx={11}
                fill={VIOLET_LIGHT}
              />
              <text
                x={chartStartX + Math.max(afterWidth, beforeWidth) + 32}
                y={y + 29}
                textAnchor="middle"
                fill={VIOLET}
                fontSize="11"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {sign}{metric.percentage}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
