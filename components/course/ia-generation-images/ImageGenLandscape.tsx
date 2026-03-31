"use client";

import { useLanguage } from "@/lib/language-context";

interface ToolData {
  name: string;
  tagline: { fr: string; en: string };
  quality: number;
  speed: number;
  cost: number;
  openness: number;
  color: string;
}

const tools: ToolData[] = [
  {
    name: "Midjourney",
    tagline: { fr: "Artistique", en: "Artistic" },
    quality: 95,
    speed: 60,
    cost: 40,
    openness: 20,
    color: "#7C3AED",
  },
  {
    name: "DALL-E 3",
    tagline: { fr: "Polyvalent", en: "Versatile" },
    quality: 85,
    speed: 80,
    cost: 50,
    openness: 30,
    color: "#8B5CF6",
  },
  {
    name: "Stable Diffusion",
    tagline: { fr: "Open-source", en: "Open-source" },
    quality: 75,
    speed: 70,
    cost: 90,
    openness: 100,
    color: "#A78BFA",
  },
  {
    name: "Flux",
    tagline: { fr: "Nouveau", en: "New" },
    quality: 90,
    speed: 75,
    cost: 60,
    openness: 80,
    color: "#C4B5FD",
  },
];

export default function ImageGenLandscape() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Panorama des outils de g\u00e9n\u00e9ration d\u2019images"
        : "Image Generation Tools Landscape",
    quality: language === "fr" ? "Qualit\u00e9" : "Quality",
    speed: language === "fr" ? "Vitesse" : "Speed",
    cost: language === "fr" ? "Co\u00fbt" : "Cost",
    openness: language === "fr" ? "Ouverture" : "Openness",
  };

  const cardW = 150;
  const cardH = 180;
  const gap = 20;
  const startX = 20;
  const startY = 10;
  const totalW = 4 * cardW + 3 * gap + 2 * startX;

  const attributes = [
    { key: "quality" as const, label: t.quality },
    { key: "speed" as const, label: t.speed },
    { key: "cost" as const, label: t.cost },
    { key: "openness" as const, label: t.openness },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox={`0 0 ${totalW} ${cardH + 2 * startY}`}
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        {tools.map((tool, i) => {
          const x = startX + i * (cardW + gap);
          const y = startY;

          return (
            <g key={tool.name}>
              {/* Card background */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="14"
                fill="white"
                stroke={tool.color}
                strokeWidth="2"
              />

              {/* Header accent */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height="50"
                rx="14"
                fill={tool.color}
              />
              <rect
                x={x}
                y={y + 36}
                width={cardW}
                height="14"
                fill={tool.color}
              />

              {/* Tool name */}
              <text
                x={x + cardW / 2}
                y={y + 24}
                textAnchor="middle"
                fontSize="13"
                fontWeight="800"
                fill="white"
                fontFamily="system-ui, sans-serif"
              >
                {tool.name}
              </text>

              {/* Tagline */}
              <text
                x={x + cardW / 2}
                y={y + 40}
                textAnchor="middle"
                fontSize="9"
                fontWeight="500"
                fill="rgba(255,255,255,0.85)"
                fontFamily="system-ui, sans-serif"
              >
                {tool.tagline[language]}
              </text>

              {/* Attribute bars */}
              {attributes.map((attr, j) => {
                const barY = y + 65 + j * 28;
                const barMaxW = cardW - 30;
                const barW = (tool[attr.key] / 100) * barMaxW;

                return (
                  <g key={attr.key}>
                    <text
                      x={x + 15}
                      y={barY}
                      fontSize="8.5"
                      fontWeight="600"
                      fill="#6B7280"
                      fontFamily="system-ui, sans-serif"
                    >
                      {attr.label}
                    </text>
                    {/* Bar track */}
                    <rect
                      x={x + 15}
                      y={barY + 4}
                      width={barMaxW}
                      height="6"
                      rx="3"
                      fill="#F3F4F6"
                    />
                    {/* Bar fill */}
                    <rect
                      x={x + 15}
                      y={barY + 4}
                      width={barW}
                      height="6"
                      rx="3"
                      fill={tool.color}
                      opacity="0.8"
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
