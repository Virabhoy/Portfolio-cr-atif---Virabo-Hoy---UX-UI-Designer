"use client";

import { useLanguage } from "@/lib/language-context";

interface Platform {
  name: string;
  tagline: { fr: string; en: string };
  price: { fr: string; en: string };
  complexity: number; // 1-4
  aiLevel: number; // 1-4
  highlight: string;
}

const platforms: Platform[] = [
  {
    name: "n8n",
    tagline: { fr: "Open-source, auto-heberge", en: "Open-source, self-hosted" },
    price: { fr: "Gratuit / Pro", en: "Free / Pro" },
    complexity: 3,
    aiLevel: 3,
    highlight: "open-source",
  },
  {
    name: "Make",
    tagline: { fr: "Visuel et puissant", en: "Visual & powerful" },
    price: { fr: "A partir de 9$/mo", en: "From $9/mo" },
    complexity: 2,
    aiLevel: 3,
    highlight: "visual",
  },
  {
    name: "Zapier",
    tagline: { fr: "Simple, vaste ecosysteme", en: "Simple, vast ecosystem" },
    price: { fr: "A partir de 20$/mo", en: "From $20/mo" },
    complexity: 1,
    aiLevel: 2,
    highlight: "ecosystem",
  },
  {
    name: "Dust",
    tagline: { fr: "IA-native, agents", en: "AI-native, agents" },
    price: { fr: "A partir de 29$/mo", en: "From $29/mo" },
    complexity: 2,
    aiLevel: 4,
    highlight: "ai-native",
  },
];

function Dots({ count, max, color }: { count: number; max: number; color: string }) {
  return (
    <>
      {Array.from({ length: max }).map((_, i) => (
        <circle
          key={i}
          cx={i * 14}
          cy={0}
          r="4.5"
          fill={i < count ? color : "#F1F5F9"}
          stroke={i < count ? color : "#E2E8F0"}
          strokeWidth="0.5"
        />
      ))}
    </>
  );
}

export default function AutomationPlatforms() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Plateformes d'automatisation"
      : "Automation Platforms";

  const labels = {
    price: language === "fr" ? "Prix" : "Price",
    complexity: language === "fr" ? "Complexite" : "Complexity",
    ai: language === "fr" ? "Fonctions IA" : "AI Features",
  };

  const cardW = 148;
  const cardH = 230;
  const gap = 16;
  const padX = 30;
  const padY = 55;
  const totalW = padX * 2 + 4 * cardW + 3 * gap;
  const totalH = padY + cardH + 30;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <filter id="ap-shadow" x="-4%" y="-4%" width="108%" height="108%">
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

        {platforms.map((platform, i) => {
          const x = padX + i * (cardW + gap);
          const y = padY;
          const isAiNative = platform.highlight === "ai-native";

          return (
            <g key={platform.name}>
              {/* Card */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="12"
                fill="white"
                stroke={isAiNative ? "#7C3AED" : "#DDD6FE"}
                strokeWidth={isAiNative ? "2" : "1.5"}
                filter="url(#ap-shadow)"
              />

              {/* Header */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height="50"
                rx="12"
                fill={isAiNative ? "#7C3AED" : "#EDE9FE"}
              />
              <rect
                x={x}
                y={y + 38}
                width={cardW}
                height="12"
                fill={isAiNative ? "#7C3AED" : "#EDE9FE"}
              />

              {/* Name */}
              <text
                x={x + cardW / 2}
                y={y + 24}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="16"
                fontWeight="700"
                fill={isAiNative ? "white" : "#4C1D95"}
              >
                {platform.name}
              </text>

              {/* Tagline */}
              <text
                x={x + cardW / 2}
                y={y + 40}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fill={isAiNative ? "#EDE9FE" : "#7C3AED"}
              >
                {platform.tagline[language]}
              </text>

              {/* Price */}
              <text
                x={x + 14}
                y={y + 75}
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {labels.price.toUpperCase()}
              </text>
              <text
                x={x + 14}
                y={y + 92}
                fontFamily="system-ui, sans-serif"
                fontSize="12"
                fontWeight="600"
                fill="#4C1D95"
              >
                {platform.price[language]}
              </text>

              {/* Complexity indicator */}
              <text
                x={x + 14}
                y={y + 120}
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {labels.complexity.toUpperCase()}
              </text>
              <g transform={`translate(${x + 14}, ${y + 130})`}>
                <Dots count={platform.complexity} max={4} color="#C4B5FD" />
              </g>

              {/* AI Features indicator */}
              <text
                x={x + 14}
                y={y + 160}
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {labels.ai.toUpperCase()}
              </text>
              <g transform={`translate(${x + 14}, ${y + 170})`}>
                <Dots count={platform.aiLevel} max={4} color="#7C3AED" />
              </g>

              {/* Badge for highlight */}
              {isAiNative && (
                <g>
                  <rect
                    x={x + cardW / 2 - 30}
                    y={y + 196}
                    width="60"
                    height="20"
                    rx="10"
                    fill="#7C3AED"
                    opacity="0.12"
                  />
                  <text
                    x={x + cardW / 2}
                    y={y + 210}
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                    fontSize="9"
                    fontWeight="600"
                    fill="#7C3AED"
                  >
                    AI-Native
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
