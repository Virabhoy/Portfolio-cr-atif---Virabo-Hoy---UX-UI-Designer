"use client";

import { useLanguage } from "@/lib/language-context";

interface ModelBar {
  name: string;
  tokens: number;
  tokenLabel: string;
  color: string;
}

const models: ModelBar[] = [
  {
    name: "GPT-4",
    tokens: 128000,
    tokenLabel: "128K",
    color: "#7C3AED",
  },
  {
    name: "Claude 3.5",
    tokens: 200000,
    tokenLabel: "200K",
    color: "#8B5CF6",
  },
  {
    name: "Gemini 1.5",
    tokens: 1000000,
    tokenLabel: "1M+",
    color: "#6D28D9",
  },
];

const maxTokens = 1000000;

export default function ContextWindowDiagram() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Fenêtres de contexte comparées"
      : "Context Window Comparison";

  const subtitle =
    language === "fr"
      ? "Nombre maximum de tokens traitables en une seule requête"
      : "Maximum tokens processable in a single request";

  const tokensLabel = language === "fr" ? "tokens" : "tokens";

  const barAreaX = 140;
  const barAreaWidth = 480;
  const barHeight = 44;
  const barGap = 28;
  const startY = 90;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 700 340"
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Background */}
        <rect width="700" height="340" rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x="350"
          y="35"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#4C1D95"
        >
          {title}
        </text>
        <text
          x="350"
          y="55"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fill="#7C7C9C"
        >
          {subtitle}
        </text>

        {/* Scale line */}
        <line
          x1={barAreaX}
          y1={startY - 10}
          x2={barAreaX + barAreaWidth}
          y2={startY - 10}
          stroke="#EDE9FE"
          strokeWidth="1"
        />
        {/* Scale markers */}
        {[0, 250000, 500000, 750000, 1000000].map((val) => {
          const xPos = barAreaX + (val / maxTokens) * barAreaWidth;
          const label =
            val === 0
              ? "0"
              : val >= 1000000
                ? `${val / 1000000}M`
                : `${val / 1000}K`;
          return (
            <g key={val}>
              <line
                x1={xPos}
                y1={startY - 14}
                x2={xPos}
                y2={startY - 6}
                stroke="#C4B5FD"
                strokeWidth="1"
              />
              <text
                x={xPos}
                y={startY - 18}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fill="#8B8BA8"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {models.map((model, i) => {
          const y = startY + i * (barHeight + barGap);
          const barWidth = (model.tokens / maxTokens) * barAreaWidth;
          const minDisplayWidth = Math.max(barWidth, 60);

          return (
            <g key={model.name}>
              {/* Model name */}
              <text
                x={barAreaX - 12}
                y={y + barHeight / 2 + 5}
                textAnchor="end"
                fontFamily="system-ui, sans-serif"
                fontSize="13"
                fontWeight="600"
                fill="#4C1D95"
              >
                {model.name}
              </text>

              {/* Background track */}
              <rect
                x={barAreaX}
                y={y}
                width={barAreaWidth}
                height={barHeight}
                rx="8"
                fill="#EDE9FE"
                opacity="0.5"
              />

              {/* Filled bar */}
              <rect
                x={barAreaX}
                y={y}
                width={minDisplayWidth}
                height={barHeight}
                rx="8"
                fill={model.color}
              />

              {/* Token label inside or next to bar */}
              <text
                x={
                  minDisplayWidth > 100
                    ? barAreaX + minDisplayWidth - 12
                    : barAreaX + minDisplayWidth + 8
                }
                y={y + barHeight / 2 + 1}
                textAnchor={minDisplayWidth > 100 ? "end" : "start"}
                dominantBaseline="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="13"
                fontWeight="700"
                fill={minDisplayWidth > 100 ? "white" : "#4C1D95"}
              >
                {model.tokenLabel} {tokensLabel}
              </text>
            </g>
          );
        })}

        {/* Visual ratio callout */}
        <g>
          <text
            x="350"
            y="310"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="11"
            fill="#7C7C9C"
          >
            {language === "fr"
              ? "Gemini 1.5 peut traiter ~8x plus de contexte que GPT-4"
              : "Gemini 1.5 can process ~8x more context than GPT-4"}
          </text>
        </g>
      </svg>
    </div>
  );
}
