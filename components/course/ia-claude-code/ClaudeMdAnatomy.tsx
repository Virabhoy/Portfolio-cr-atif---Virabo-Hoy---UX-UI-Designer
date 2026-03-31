"use client";

import { useLanguage } from "@/lib/language-context";

interface Section {
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  color: string;
  bgColor: string;
  icon: string;
}

const sections: Section[] = [
  {
    titleFr: "## Commandes",
    titleEn: "## Commands",
    descFr: "Scripts npm, commandes de build et de test",
    descEn: "npm scripts, build and test commands",
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    icon: ">_",
  },
  {
    titleFr: "## Architecture",
    titleEn: "## Architecture",
    descFr: "Structure des dossiers, patterns et conventions",
    descEn: "Folder structure, patterns and conventions",
    color: "#6D28D9",
    bgColor: "#DDD6FE",
    icon: "{}",
  },
  {
    titleFr: "## Patterns cles",
    titleEn: "## Key Patterns",
    descFr: "Stockage de donnees, auth, i18n, composants UI",
    descEn: "Data storage, auth, i18n, UI components",
    color: "#9333EA",
    bgColor: "#EDE9FE",
    icon: "**",
  },
  {
    titleFr: "## Variables d'environnement",
    titleEn: "## Environment Variables",
    descFr: "Identifiants admin, tokens d'API, secrets",
    descEn: "Admin credentials, API tokens, secrets",
    color: "#4C1D95",
    bgColor: "#DDD6FE",
    icon: ".env",
  },
];

export default function ClaudeMdAnatomy() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Anatomie d'un fichier CLAUDE.md"
        : "Anatomy of a CLAUDE.md File",
    file: "CLAUDE.md",
  };

  const svgW = 600;
  const headerH = 60;
  const sectionH = 90;
  const gap = 8;
  const totalH =
    headerH + sections.length * sectionH + (sections.length - 1) * gap + 40;
  const contentX = 40;
  const contentW = svgW - 80;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="font-bricolage text-xl font-bold text-center text-[#7C3AED] mb-6">
        {t.title}
      </h3>
      <svg
        viewBox={`0 0 ${svgW} ${totalH}`}
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        {/* File container */}
        <rect
          x="20"
          y="10"
          width={svgW - 40}
          height={totalH - 20}
          rx="16"
          fill="white"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* File header */}
        <rect
          x="20"
          y="10"
          width={svgW - 40}
          height={headerH}
          rx="16"
          fill="#7C3AED"
        />
        {/* Fix bottom corners of header */}
        <rect
          x="20"
          y={10 + headerH - 16}
          width={svgW - 40}
          height="16"
          fill="#7C3AED"
        />

        {/* File icon */}
        <rect x="44" y="26" width="20" height="26" rx="3" fill="white" opacity="0.3" />
        <rect x="48" y="34" width="12" height="2" rx="1" fill="white" opacity="0.6" />
        <rect x="48" y="39" width="8" height="2" rx="1" fill="white" opacity="0.6" />
        <rect x="48" y="44" width="10" height="2" rx="1" fill="white" opacity="0.6" />

        {/* File name */}
        <text
          x="76"
          y="43"
          fill="white"
          fontSize="18"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          {t.file}
        </text>

        {/* Sections */}
        {sections.map((section, i) => {
          const y = headerH + 20 + i * (sectionH + gap);
          const title = language === "fr" ? section.titleFr : section.titleEn;
          const desc = language === "fr" ? section.descFr : section.descEn;

          return (
            <g key={i}>
              {/* Section background */}
              <rect
                x={contentX}
                y={y}
                width={contentW}
                height={sectionH}
                rx="12"
                fill={section.bgColor}
                stroke={section.color}
                strokeWidth="1.5"
              />

              {/* Left accent bar */}
              <rect
                x={contentX}
                y={y}
                width="6"
                height={sectionH}
                rx="3"
                fill={section.color}
              />

              {/* Icon badge */}
              <rect
                x={contentX + 20}
                y={y + 16}
                width="40"
                height="28"
                rx="8"
                fill={section.color}
              />
              <text
                x={contentX + 40}
                y={y + 33}
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontWeight="700"
                fontFamily="monospace"
              >
                {section.icon}
              </text>

              {/* Section title */}
              <text
                x={contentX + 72}
                y={y + 34}
                fill={section.color}
                fontSize="15"
                fontWeight="700"
                fontFamily="monospace"
              >
                {title}
              </text>

              {/* Description */}
              <text
                x={contentX + 20}
                y={y + 68}
                fill="#6B7280"
                fontSize="12"
                fontFamily="system-ui, sans-serif"
              >
                {desc}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
