"use client";

import { useLanguage } from "@/lib/language-context";

interface CategoryNode {
  label: { fr: string; en: string };
  models: string[];
  x: number;
  y: number;
}

const categories: CategoryNode[] = [
  {
    label: { fr: "Texte", en: "Text Generation" },
    models: ["GPT-4", "Claude", "Gemini"],
    x: 140,
    y: 60,
  },
  {
    label: { fr: "Image", en: "Image Generation" },
    models: ["DALL-E 3", "Midjourney", "Stable Diffusion"],
    x: 560,
    y: 60,
  },
  {
    label: { fr: "Code", en: "Code" },
    models: ["Copilot", "Claude Code", "Cursor"],
    x: 100,
    y: 340,
  },
  {
    label: { fr: "Audio", en: "Audio" },
    models: ["Whisper", "ElevenLabs", "Suno"],
    x: 420,
    y: 400,
  },
  {
    label: { fr: "Vidéo", en: "Video" },
    models: ["Sora", "Runway", "Veo 2"],
    x: 600,
    y: 300,
  },
];

export default function AiLandscape() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Le paysage de l'IA générative"
      : "The Generative AI Landscape";

  const centerX = 350;
  const centerY = 210;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 700 480"
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <filter id="ai-shadow" x="-4%" y="-4%" width="108%" height="108%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#7C3AED"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* Background */}
        <rect width="700" height="480" rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x="350"
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

        {/* Connection lines from center to each category */}
        {categories.map((cat, i) => {
          const catCenterX = cat.x + 80;
          const catCenterY = cat.y + 30;
          return (
            <line
              key={`line-${i}`}
              x1={centerX}
              y1={centerY}
              x2={catCenterX}
              y2={catCenterY}
              stroke="#DDD6FE"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          );
        })}

        {/* Center node: LLMs */}
        <rect
          x={centerX - 65}
          y={centerY - 30}
          width="130"
          height="60"
          rx="30"
          fill="#7C3AED"
          filter="url(#ai-shadow)"
        />
        <text
          x={centerX}
          y={centerY - 4}
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="white"
        >
          LLMs
        </text>
        <text
          x={centerX}
          y={centerY + 16}
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fill="#EDE9FE"
        >
          {language === "fr" ? "Modèles fondation" : "Foundation Models"}
        </text>

        {/* Category nodes */}
        {categories.map((cat, i) => {
          const boxW = 160;
          const headerH = 36;
          const modelH = 22;
          const totalH = headerH + cat.models.length * modelH + 10;

          return (
            <g key={`cat-${i}`}>
              {/* Card background */}
              <rect
                x={cat.x}
                y={cat.y}
                width={boxW}
                height={totalH}
                rx="12"
                fill="white"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                filter="url(#ai-shadow)"
              />

              {/* Header bar */}
              <rect
                x={cat.x}
                y={cat.y}
                width={boxW}
                height={headerH}
                rx="12"
                fill="#EDE9FE"
              />
              <rect
                x={cat.x}
                y={cat.y + headerH - 12}
                width={boxW}
                height="12"
                fill="#EDE9FE"
              />

              {/* Category label */}
              <text
                x={cat.x + boxW / 2}
                y={cat.y + 23}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="13"
                fontWeight="700"
                fill="#6D28D9"
              >
                {cat.label[language]}
              </text>

              {/* Model items */}
              {cat.models.map((model, j) => (
                <g key={`model-${i}-${j}`}>
                  <circle
                    cx={cat.x + 18}
                    cy={cat.y + headerH + 14 + j * modelH}
                    r="3.5"
                    fill="#C4B5FD"
                  />
                  <text
                    x={cat.x + 28}
                    y={cat.y + headerH + 18 + j * modelH}
                    fontFamily="system-ui, sans-serif"
                    fontSize="11"
                    fill="#4C1D95"
                  >
                    {model}
                  </text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
