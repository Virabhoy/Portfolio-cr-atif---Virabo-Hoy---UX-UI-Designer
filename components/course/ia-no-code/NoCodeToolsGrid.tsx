"use client";

import { useLanguage } from "@/lib/language-context";

interface ToolCard {
  name: string;
  capability: { fr: string; en: string };
  icon: string;
}

const tools: ToolCard[] = [
  {
    name: "v0",
    capability: { fr: "Generation d'UI", en: "UI Generation" },
    icon: "ui",
  },
  {
    name: "Bolt.new",
    capability: { fr: "Full-stack apps", en: "Full-stack apps" },
    icon: "bolt",
  },
  {
    name: "Lovable",
    capability: { fr: "Apps completes", en: "Complete apps" },
    icon: "heart",
  },
  {
    name: "Replit Agent",
    capability: { fr: "Coding assiste", en: "Assisted coding" },
    icon: "code",
  },
  {
    name: "Bubble + AI",
    capability: { fr: "Workflows visuels", en: "Visual workflows" },
    icon: "flow",
  },
  {
    name: "Framer AI",
    capability: { fr: "Sites web design", en: "Design websites" },
    icon: "web",
  },
];

function ToolIcon({ type, x, y }: { type: string; x: number; y: number }) {
  const cx = x + 12;
  const cy = y + 12;
  switch (type) {
    case "ui":
      return (
        <g>
          <rect x={x + 2} y={y + 2} width="20" height="20" rx="4" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
          <rect x={x + 5} y={y + 5} width="6" height="14" rx="1" fill="#C4B5FD" />
          <rect x={x + 13} y={y + 5} width="6" height="6" rx="1" fill="#EDE9FE" />
          <rect x={x + 13} y={y + 13} width="6" height="6" rx="1" fill="#DDD6FE" />
        </g>
      );
    case "bolt":
      return (
        <path
          d={`M${cx - 2},${cy - 8} L${cx - 4},${cy + 1} L${cx + 1},${cy + 1} L${cx - 1},${cy + 8} L${cx + 5},${cy - 2} L${cx},${cy - 2} Z`}
          fill="#7C3AED"
        />
      );
    case "heart":
      return (
        <path
          d={`M${cx},${cy + 6} C${cx - 10},${cy - 2} ${cx - 6},${cy - 10} ${cx},${cy - 4} C${cx + 6},${cy - 10} ${cx + 10},${cy - 2} ${cx},${cy + 6} Z`}
          fill="#C4B5FD"
          stroke="#7C3AED"
          strokeWidth="1"
        />
      );
    case "code":
      return (
        <g>
          <text x={cx} y={cy + 5} textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#7C3AED">
            {"</>"}
          </text>
        </g>
      );
    case "flow":
      return (
        <g>
          <circle cx={cx - 6} cy={cy - 4} r="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
          <circle cx={cx + 6} cy={cy + 4} r="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
          <line x1={cx - 3} y1={cy - 2} x2={cx + 3} y2={cy + 2} stroke="#7C3AED" strokeWidth="1.5" />
        </g>
      );
    case "web":
      return (
        <g>
          <circle cx={cx} cy={cy} r="9" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
          <ellipse cx={cx} cy={cy} rx="4" ry="9" fill="none" stroke="#C4B5FD" strokeWidth="1" />
          <line x1={cx - 9} y1={cy} x2={cx + 9} y2={cy} stroke="#C4B5FD" strokeWidth="1" />
        </g>
      );
    default:
      return <circle cx={cx} cy={cy} r="8" fill="#EDE9FE" />;
  }
}

export default function NoCodeToolsGrid() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Outils No-Code IA"
      : "No-Code AI Tools";

  const cols = 3;
  const cardW = 200;
  const cardH = 90;
  const gapX = 16;
  const gapY = 16;
  const padX = 30;
  const padY = 60;
  const totalW = padX * 2 + cols * cardW + (cols - 1) * gapX;
  const totalH = padY + 2 * cardH + gapY + 30;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <filter id="tg-shadow" x="-4%" y="-4%" width="108%" height="108%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#7C3AED"
              floodOpacity="0.10"
            />
          </filter>
        </defs>

        {/* Background */}
        <rect width={totalW} height={totalH} rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x={totalW / 2}
          y="32"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#6D28D9"
          letterSpacing="0.02em"
        >
          {title.toUpperCase()}
        </text>

        {/* Grid of tool cards */}
        {tools.map((tool, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = padX + col * (cardW + gapX);
          const y = padY + row * (cardH + gapY);

          return (
            <g key={tool.name}>
              {/* Card background */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="12"
                fill="white"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                filter="url(#tg-shadow)"
              />

              {/* Icon area */}
              <rect
                x={x + 12}
                y={y + 14}
                width="36"
                height="36"
                rx="8"
                fill="#EDE9FE"
              />
              <ToolIcon type={tool.icon} x={x + 18} y={y + 20} />

              {/* Tool name */}
              <text
                x={x + 60}
                y={y + 30}
                fontFamily="system-ui, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="#4C1D95"
              >
                {tool.name}
              </text>

              {/* Capability */}
              <text
                x={x + 60}
                y={y + 48}
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fill="#7C3AED"
              >
                {tool.capability[language]}
              </text>

              {/* Subtle accent line */}
              <rect
                x={x + 60}
                y={y + 56}
                width="60"
                height="2"
                rx="1"
                fill="#EDE9FE"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
