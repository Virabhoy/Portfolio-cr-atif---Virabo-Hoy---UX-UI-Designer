"use client";

import { useLanguage } from "@/lib/language-context";

const VIOLET = "#7C3AED";

interface RiskLevel {
  labelFr: string;
  labelEn: string;
  exampleFr: string;
  exampleEn: string;
  color: string;
}

const levels: RiskLevel[] = [
  {
    labelFr: "Inacceptable",
    labelEn: "Unacceptable",
    exampleFr: "Score social, manipulation subliminale",
    exampleEn: "Social scoring, subliminal manipulation",
    color: "#DC2626",
  },
  {
    labelFr: "Haut risque",
    labelEn: "High Risk",
    exampleFr: "Recrutement IA, diagnostic medical",
    exampleEn: "AI recruitment, medical diagnosis",
    color: "#EA580C",
  },
  {
    labelFr: "Risque limite",
    labelEn: "Limited Risk",
    exampleFr: "Chatbots, deepfakes (obligation de transparence)",
    exampleEn: "Chatbots, deepfakes (transparency required)",
    color: "#CA8A04",
  },
  {
    labelFr: "Risque minimal",
    labelEn: "Minimal Risk",
    exampleFr: "Filtres anti-spam, jeux video IA",
    exampleEn: "Spam filters, AI video games",
    color: "#16A34A",
  },
];

export default function AiRiskClassification() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Classification des risques — EU AI Act"
      : "Risk Classification — EU AI Act";

  const totalWidth = 500;
  const totalHeight = 400;
  const pyramidTop = 70;
  const pyramidBottom = 360;
  const pyramidHeight = pyramidBottom - pyramidTop;
  const centerX = totalWidth / 2;
  const maxHalfWidth = 210;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Title */}
        <text
          x={centerX}
          y={30}
          textAnchor="middle"
          fill={VIOLET}
          fontSize="16"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>

        {/* Pyramid layers */}
        {levels.map((level, idx) => {
          const layerCount = levels.length;
          const y1 = pyramidTop + (pyramidHeight / layerCount) * idx;
          const y2 = pyramidTop + (pyramidHeight / layerCount) * (idx + 1);
          const ym = (y1 + y2) / 2;

          // Trapezoid widths
          const topHalf = (maxHalfWidth * (idx + 0.5)) / layerCount;
          const bottomHalf = (maxHalfWidth * (idx + 1.5)) / layerCount;

          const points = [
            `${centerX - topHalf},${y1}`,
            `${centerX + topHalf},${y1}`,
            `${centerX + bottomHalf},${y2}`,
            `${centerX - bottomHalf},${y2}`,
          ].join(" ");

          const label = language === "fr" ? level.labelFr : level.labelEn;
          const example = language === "fr" ? level.exampleFr : level.exampleEn;

          return (
            <g key={idx}>
              <polygon
                points={points}
                fill={level.color}
                opacity={0.85}
                stroke="white"
                strokeWidth={2}
              />
              {/* Level label */}
              <text
                x={centerX}
                y={ym - 2}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {label}
              </text>
              {/* Example text */}
              <text
                x={centerX}
                y={ym + 14}
                textAnchor="middle"
                fill="white"
                fontSize="8.5"
                fontWeight="400"
                fontFamily="system-ui, sans-serif"
                opacity={0.9}
              >
                {example}
              </text>
            </g>
          );
        })}

        {/* Arrow on the side */}
        <line
          x1={centerX + maxHalfWidth + 30}
          y1={pyramidTop + 10}
          x2={centerX + maxHalfWidth + 30}
          y2={pyramidBottom - 10}
          stroke="#9CA3AF"
          strokeWidth={1.5}
          markerEnd="url(#arrowDown)"
          markerStart="url(#arrowUp)"
        />
        <defs>
          <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#9CA3AF" />
          </marker>
          <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M8,0 L0,4 L8,8 Z" fill="#9CA3AF" />
          </marker>
        </defs>
        <text
          x={centerX + maxHalfWidth + 42}
          y={(pyramidTop + pyramidBottom) / 2 - 8}
          fill="#6B7280"
          fontSize="9"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
          transform={`rotate(90, ${centerX + maxHalfWidth + 42}, ${(pyramidTop + pyramidBottom) / 2 - 8})`}
        >
          {language === "fr" ? "Niveau de regulation" : "Regulation Level"}
        </text>
      </svg>
    </div>
  );
}
