"use client";

import { useLanguage } from "@/lib/language-context";

interface PromptPart {
  label: { fr: string; en: string };
  text: { fr: string; en: string };
  color: string;
  bgColor: string;
}

const parts: PromptPart[] = [
  {
    label: { fr: "Role", en: "Role" },
    text: {
      fr: "Tu es un expert en UX Design avec 10 ans d'expérience.",
      en: "You are a UX Design expert with 10 years of experience.",
    },
    color: "#7C3AED",
    bgColor: "#EDE9FE",
  },
  {
    label: { fr: "Contexte", en: "Context" },
    text: {
      fr: "Je travaille sur une app mobile de livraison de repas destinée aux 18-35 ans.",
      en: "I'm working on a food delivery mobile app targeting 18-35 year olds.",
    },
    color: "#6D28D9",
    bgColor: "#DDD6FE",
  },
  {
    label: { fr: "Tâche", en: "Task" },
    text: {
      fr: "Analyse le parcours utilisateur de la commande et propose 5 améliorations.",
      en: "Analyze the order user journey and suggest 5 improvements.",
    },
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
  {
    label: { fr: "Format", en: "Format" },
    text: {
      fr: "Présente chaque amélioration avec : titre, problème, solution, impact estimé.",
      en: "Present each improvement with: title, problem, solution, estimated impact.",
    },
    color: "#A78BFA",
    bgColor: "#F5F3FF",
  },
  {
    label: { fr: "Contraintes", en: "Constraints" },
    text: {
      fr: "Reste concis. Maximum 200 mots par amélioration. Pas de jargon technique.",
      en: "Stay concise. Max 200 words per improvement. No technical jargon.",
    },
    color: "#7C3AED",
    bgColor: "#EDE9FE",
  },
];

export default function PromptAnatomy() {
  const { language } = useLanguage();

  const title =
    language === "fr" ? "Anatomie d'un prompt" : "Anatomy of a Prompt";

  const lineH = 56;
  const startY = 70;
  const leftCol = 30;
  const bracketX = 140;
  const textX = 165;
  const textW = 470;
  const totalH = startY + parts.length * lineH + 40;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 700 ${totalH}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Background */}
        <rect width="700" height={totalH} rx="16" fill="#FAFAFE" />

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

        {/* Prompt container (code-like background) */}
        <rect
          x={textX - 14}
          y={startY - 16}
          width={textW + 28}
          height={parts.length * lineH + 16}
          rx="10"
          fill="#F8F7FC"
          stroke="#E9E5F5"
          strokeWidth="1"
        />

        {parts.map((part, i) => {
          const y = startY + i * lineH;
          const midY = y + lineH / 2 - 4;

          return (
            <g key={i}>
              {/* Label badge */}
              <rect
                x={leftCol}
                y={midY - 12}
                width="96"
                height="24"
                rx="12"
                fill={part.color}
              />
              <text
                x={leftCol + 48}
                y={midY + 2}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="white"
              >
                {part.label[language]}
              </text>

              {/* Bracket / connector */}
              <line
                x1={leftCol + 100}
                y1={midY}
                x2={bracketX}
                y2={midY}
                stroke={part.color}
                strokeWidth="2"
                opacity="0.5"
              />
              <circle cx={bracketX} cy={midY} r="3" fill={part.color} />

              {/* Text line highlight */}
              <rect
                x={textX - 6}
                y={y - 2}
                width={textW + 12}
                height={lineH - 8}
                rx="6"
                fill={part.bgColor}
                opacity="0.6"
              />

              {/* Left accent bar */}
              <rect
                x={textX - 6}
                y={y - 2}
                width="3"
                height={lineH - 8}
                rx="1.5"
                fill={part.color}
              />

              {/* Prompt text */}
              {wrapSvgText(part.text[language], 62).map((line, li) => (
                <text
                  key={li}
                  x={textX + 6}
                  y={y + 16 + li * 16}
                  fontFamily="ui-monospace, 'SF Mono', monospace"
                  fontSize="11"
                  fill="#3B1F6E"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function wrapSvgText(text: string, maxChars: number): string[] {
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
