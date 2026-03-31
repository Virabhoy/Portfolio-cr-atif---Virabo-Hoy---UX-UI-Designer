"use client";

import { useLanguage } from "@/lib/language-context";

interface FrameworkStep {
  letter: string;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  icon: React.ReactNode;
}

const steps: FrameworkStep[] = [
  {
    letter: "T",
    label: { fr: "Tâche", en: "Task" },
    description: {
      fr: "Ce que l'IA doit accomplir",
      en: "What the AI must accomplish",
    },
    icon: (
      <path
        d="M6 3h12v2H6V3zm3 4h6v10H9V7z"
        fill="currentColor"
        opacity="0.7"
      />
    ),
  },
  {
    letter: "C",
    label: { fr: "Contexte", en: "Context" },
    description: {
      fr: "Les informations de fond",
      en: "Background information",
    },
    icon: (
      <circle
        cx="12"
        cy="12"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />
    ),
  },
  {
    letter: "R",
    label: { fr: "Références", en: "References" },
    description: {
      fr: "Sources et exemples à suivre",
      en: "Sources and examples to follow",
    },
    icon: (
      <g opacity="0.7">
        <rect x="5" y="4" width="14" height="3" rx="1" fill="currentColor" />
        <rect x="5" y="9" width="14" height="3" rx="1" fill="currentColor" />
        <rect x="5" y="14" width="10" height="3" rx="1" fill="currentColor" />
      </g>
    ),
  },
  {
    letter: "E",
    label: { fr: "Exemples", en: "Examples" },
    description: {
      fr: "Démonstrations du résultat attendu",
      en: "Demonstrations of expected output",
    },
    icon: (
      <g opacity="0.7">
        <path d="M4 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" />
      </g>
    ),
  },
  {
    letter: "I",
    label: { fr: "Instructions", en: "Instructions" },
    description: {
      fr: "Contraintes et format de sortie",
      en: "Constraints and output format",
    },
    icon: (
      <g opacity="0.7">
        <rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
  },
];

const stepColors = ["#7C3AED", "#8B5CF6", "#A78BFA", "#8B5CF6", "#7C3AED"];

export default function TcreiFramework() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Le framework TCREI"
      : "The TCREI Framework";

  const boxW = 110;
  const boxH = 120;
  const gap = 16;
  const arrowW = 20;
  const totalW = steps.length * boxW + (steps.length - 1) * (gap + arrowW) + 40;
  const startX = 20;
  const startY = 60;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox={`0 0 ${totalW} 220`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Background */}
        <rect width={totalW} height="220" rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x={totalW / 2}
          y="35"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#4C1D95"
        >
          {title}
        </text>

        {steps.map((step, i) => {
          const x = startX + i * (boxW + gap + arrowW);
          const color = stepColors[i];

          return (
            <g key={step.letter}>
              {/* Card */}
              <rect
                x={x}
                y={startY}
                width={boxW}
                height={boxH}
                rx="12"
                fill="white"
                stroke={color}
                strokeWidth="2"
              />

              {/* Letter badge */}
              <rect
                x={x + boxW / 2 - 16}
                y={startY - 12}
                width="32"
                height="24"
                rx="12"
                fill={color}
              />
              <text
                x={x + boxW / 2}
                y={startY + 5}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="14"
                fontWeight="800"
                fill="white"
              >
                {step.letter}
              </text>

              {/* Icon */}
              <svg
                x={x + boxW / 2 - 12}
                y={startY + 20}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                color={color}
              >
                {step.icon}
              </svg>

              {/* Label */}
              <text
                x={x + boxW / 2}
                y={startY + 60}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="12"
                fontWeight="700"
                fill="#4C1D95"
              >
                {step.label[language]}
              </text>

              {/* Description - line-wrapped manually */}
              {wrapText(step.description[language], 16).map((line, li) => (
                <text
                  key={li}
                  x={x + boxW / 2}
                  y={startY + 76 + li * 13}
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                  fontSize="9"
                  fill="#6B6B8D"
                >
                  {line}
                </text>
              ))}

              {/* Arrow to next */}
              {i < steps.length - 1 && (
                <g>
                  <line
                    x1={x + boxW + 4}
                    y1={startY + boxH / 2}
                    x2={x + boxW + gap + arrowW - 6}
                    y2={startY + boxH / 2}
                    stroke="#C4B5FD"
                    strokeWidth="2"
                  />
                  <polygon
                    points={`${x + boxW + gap + arrowW - 6},${startY + boxH / 2 - 5} ${x + boxW + gap + arrowW},${startY + boxH / 2} ${x + boxW + gap + arrowW - 6},${startY + boxH / 2 + 5}`}
                    fill="#C4B5FD"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (current.length + word.length + 1 > maxChars && current.length > 0) {
      lines.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}
