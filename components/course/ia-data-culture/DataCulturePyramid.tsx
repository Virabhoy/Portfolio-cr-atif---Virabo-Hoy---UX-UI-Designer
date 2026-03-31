"use client";

import { useLanguage } from "@/lib/language-context";

interface PyramidLevel {
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  width: number;
  color: string;
}

const levels: PyramidLevel[] = [
  {
    label: { fr: "Decisions data-driven", en: "Data-Driven Decisions" },
    description: { fr: "Culture du pilotage par la donnee", en: "Data-driven steering culture" },
    width: 160,
    color: "#7C3AED",
  },
  {
    label: { fr: "Analyse des donnees", en: "Data Analysis" },
    description: { fr: "Insights et visualisations", en: "Insights & visualizations" },
    width: 260,
    color: "#8B5CF6",
  },
  {
    label: { fr: "Qualite des donnees", en: "Data Quality" },
    description: { fr: "Nettoyage, validation, gouvernance", en: "Cleaning, validation, governance" },
    width: 370,
    color: "#A78BFA",
  },
  {
    label: { fr: "Collecte des donnees", en: "Data Collection" },
    description: { fr: "Sources, integrations, pipelines", en: "Sources, integrations, pipelines" },
    width: 480,
    color: "#C4B5FD",
  },
];

export default function DataCulturePyramid() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Pyramide de la maturite data"
      : "Data Maturity Pyramid";

  const centerX = 310;
  const levelHeight = 60;
  const topY = 70;
  const svgHeight = topY + levels.length * levelHeight + 50;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 620 ${svgHeight}`} className="w-full h-auto" role="img" aria-label={title}>
        <defs>
          <filter id="pyramid-shadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx={0} dy={2} stdDeviation={3} floodColor="#7C3AED" floodOpacity={0.15} />
          </filter>
        </defs>

        <text x={centerX} y={32} textAnchor="middle" fill="#1E1B4B" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* Maturity arrow on the right */}
        <line x1={575} y1={topY + levels.length * levelHeight - 10} x2={575} y2={topY + 10} stroke="#7C3AED" strokeWidth={2} markerEnd="url(#pyramid-arrow)" />
        <defs>
          <marker id="pyramid-arrow" viewBox="0 0 10 10" refX={5} refY={0} markerWidth={8} markerHeight={8} orient="auto">
            <path d="M 0 10 L 5 0 L 10 10 z" fill="#7C3AED" />
          </marker>
        </defs>
        <text x={575} y={topY - 2} textAnchor="middle" fill="#7C3AED" fontSize={10} fontWeight={600}>
          {language === "fr" ? "MATURITE" : "MATURITY"}
        </text>

        {/* Pyramid levels (top to bottom) */}
        {levels.map((level, i) => {
          const y = topY + i * levelHeight;
          const w = level.width;
          const nextW = i < levels.length - 1 ? levels[i + 1].width : w;

          // Trapezoid path
          const x1 = centerX - w / 2;
          const x2 = centerX + w / 2;
          const x3 = centerX + (i < levels.length - 1 ? nextW / 2 : w / 2 + 20);
          const x4 = centerX - (i < levels.length - 1 ? nextW / 2 : w / 2 + 20);

          return (
            <g key={i} filter="url(#pyramid-shadow)">
              <path
                d={`M${x1},${y} L${x2},${y} L${x3},${y + levelHeight - 4} L${x4},${y + levelHeight - 4} Z`}
                fill={level.color}
                stroke="white"
                strokeWidth={2}
              />
              <text x={centerX} y={y + levelHeight / 2 - 4} textAnchor="middle" fill="white" fontSize={13} fontWeight={700}>
                {level.label[language]}
              </text>
              <text x={centerX} y={y + levelHeight / 2 + 12} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize={10}>
                {level.description[language]}
              </text>

              {/* Level number */}
              <circle cx={centerX - w / 2 - 20} cy={y + levelHeight / 2 - 2} r={12} fill="white" stroke={level.color} strokeWidth={1.5} />
              <text x={centerX - w / 2 - 20} y={y + levelHeight / 2 + 2} textAnchor="middle" fill={level.color} fontSize={11} fontWeight={700}>
                {levels.length - i}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
