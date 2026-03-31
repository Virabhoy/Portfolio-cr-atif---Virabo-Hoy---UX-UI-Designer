"use client";

import { useLanguage } from "@/lib/language-context";

const VIOLET = "#7C3AED";
const VIOLET_LIGHT = "#EDE9FE";
const VIOLET_MID = "#DDD6FE";
const VIOLET_SOFT = "#C4B5FD";

interface Assistant {
  name: string;
  scores: number[];
}

const assistants: Assistant[] = [
  { name: "GitHub Copilot", scores: [5, 4, 3, 3, 2] },
  { name: "Cursor", scores: [5, 5, 4, 5, 4] },
  { name: "Claude Code", scores: [3, 5, 5, 5, 5] },
  { name: "Codex", scores: [4, 4, 4, 4, 3] },
];

function RatingDots({ score, cx, cy }: { score: number; cx: number; cy: number }) {
  const dots = [];
  const dotRadius = 4;
  const gap = 12;
  const totalWidth = 4 * gap;
  const startX = cx - totalWidth / 2;

  for (let i = 0; i < 5; i++) {
    dots.push(
      <circle
        key={i}
        cx={startX + i * gap}
        cy={cy}
        r={dotRadius}
        fill={i < score ? VIOLET : VIOLET_MID}
        opacity={i < score ? 1 : 0.5}
      />
    );
  }
  return <>{dots}</>;
}

export default function CodingAssistantsComparison() {
  const { language } = useLanguage();

  const categories =
    language === "fr"
      ? ["Autocompl.", "Chat", "Refactoring", "Multi-fichier", "Autonomie"]
      : ["Autocomplete", "Chat", "Refactoring", "Multi-file", "Autonomy"];

  const title =
    language === "fr"
      ? "Comparatif des assistants IA de code"
      : "AI Coding Assistants Comparison";

  const colWidth = 80;
  const rowHeight = 52;
  const headerHeight = 80;
  const nameColWidth = 140;
  const startX = nameColWidth + 20;
  const totalWidth = startX + categories.length * colWidth + 20;
  const totalHeight = headerHeight + assistants.length * rowHeight + 20;

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
          fontSize="16"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>

        {/* Column headers */}
        {categories.map((cat, i) => (
          <text
            key={cat}
            x={startX + i * colWidth + colWidth / 2}
            y={55}
            textAnchor="middle"
            fill="#6B7280"
            fontSize="10"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
          >
            {cat}
          </text>
        ))}

        {/* Header separator */}
        <line
          x1={10}
          y1={headerHeight - 10}
          x2={totalWidth - 10}
          y2={headerHeight - 10}
          stroke={VIOLET_MID}
          strokeWidth={1.5}
        />

        {/* Rows */}
        {assistants.map((assistant, rowIdx) => {
          const y = headerHeight + rowIdx * rowHeight + rowHeight / 2;
          const isEven = rowIdx % 2 === 0;

          return (
            <g key={assistant.name}>
              {/* Row background */}
              <rect
                x={5}
                y={y - rowHeight / 2 + 5}
                width={totalWidth - 10}
                height={rowHeight - 2}
                rx={8}
                fill={isEven ? VIOLET_LIGHT : "white"}
                opacity={0.6}
              />

              {/* Assistant name */}
              <text
                x={20}
                y={y + 5}
                fill="#1F2937"
                fontSize="12"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {assistant.name}
              </text>

              {/* Rating dots for each category */}
              {assistant.scores.map((score, colIdx) => (
                <RatingDots
                  key={colIdx}
                  score={score}
                  cx={startX + colIdx * colWidth + colWidth / 2}
                  cy={y + 2}
                />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
