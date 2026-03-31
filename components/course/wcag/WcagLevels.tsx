"use client";

import { useLanguage } from "@/lib/language-context";

export default function WcagLevels() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: { fr: "Niveaux de conformite WCAG", en: "WCAG Conformance Levels" },
    levelA: { fr: "Niveau A", en: "Level A" },
    levelAA: { fr: "Niveau AA", en: "Level AA" },
    levelAAA: { fr: "Niveau AAA", en: "Level AAA" },
    minimum: { fr: "Minimum", en: "Minimum" },
    recommended: { fr: "Standard recommande", en: "Recommended standard" },
    optimal: { fr: "Optimal", en: "Optimal" },
    target: { fr: "Cible legale EU 2025", en: "EU 2025 legal target" },
    criteriaA: {
      fr: ["Texte alternatif pour les images", "Navigation au clavier", "Pas de piege clavier"],
      en: ["Alt text for images", "Keyboard navigation", "No keyboard trap"],
    },
    criteriaAA: {
      fr: ["Contraste >= 4.5:1", "Taille cible >= 24x24px", "Focus visible"],
      en: ["Contrast >= 4.5:1", "Target size >= 24x24px", "Visible focus"],
    },
    criteriaAAA: {
      fr: ["Contraste >= 7:1", "Langue des signes", "Aide contextuelle"],
      en: ["Contrast >= 7:1", "Sign language", "Context-sensitive help"],
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h3 className="font-bricolage text-xl md:text-2xl font-bold text-center mb-8">
          {t.title[lang]}
        </h3>

        <svg
          viewBox="0 0 600 420"
          className="w-full h-auto"
          role="img"
          aria-label={t.title[lang]}
        >
          {/* Level AAA - outermost circle */}
          <circle cx="300" cy="220" r="190" fill="#0066CC" opacity="0.15" stroke="#0066CC" strokeWidth="2" />
          <text x="300" y="52" textAnchor="middle" className="font-bricolage" fill="#0066CC" fontSize="16" fontWeight="700">
            {t.levelAAA[lang]}
          </text>
          <text x="300" y="72" textAnchor="middle" className="font-montserrat" fill="#0066CC" fontSize="12" opacity="0.8">
            {t.optimal[lang]}
          </text>

          {/* AAA criteria - positioned at top of outer ring */}
          {t.criteriaAAA[lang].map((c, i) => (
            <g key={`aaa-${i}`}>
              <circle cx={160 + i * 140} cy="96" r="5" fill="#0066CC" opacity="0.4" />
              <text x={160 + i * 140} y="112" textAnchor="middle" className="font-montserrat" fill="#555" fontSize="9">
                {c}
              </text>
            </g>
          ))}

          {/* Level AA - middle circle */}
          <circle cx="300" cy="220" r="130" fill="#0099FF" opacity="0.2" stroke="#0099FF" strokeWidth="3" strokeDasharray="none" />

          {/* AA highlight badge */}
          <rect x="215" y="128" width="170" height="28" rx="14" fill="#0099FF" />
          <text x="300" y="147" textAnchor="middle" className="font-bricolage" fill="white" fontSize="14" fontWeight="700">
            {t.levelAA[lang]} — {t.recommended[lang]}
          </text>

          {/* Target badge */}
          <rect x="230" y="162" width="140" height="22" rx="11" fill="#FF6B35" opacity="0.9" />
          <text x="300" y="177" textAnchor="middle" className="font-montserrat" fill="white" fontSize="10" fontWeight="600">
            {t.target[lang]}
          </text>

          {/* AA criteria */}
          {t.criteriaAA[lang].map((c, i) => (
            <g key={`aa-${i}`}>
              <rect x={170 + i * 100 - 45} y={195 + (i === 1 ? 5 : 0)} width="90" height="28" rx="6" fill="#0099FF" opacity="0.15" />
              <circle cx={170 + i * 100 - 30} cy={209 + (i === 1 ? 5 : 0)} r="4" fill="#0099FF" />
              <text x={170 + i * 100 + 5} y={213 + (i === 1 ? 5 : 0)} textAnchor="middle" className="font-montserrat" fill="#333" fontSize="9">
                {c}
              </text>
            </g>
          ))}

          {/* Level A - innermost circle */}
          <circle cx="300" cy="220" r="65" fill="#FF6B35" opacity="0.12" stroke="#E55A2B" strokeWidth="2" />
          <text x="300" y="254" textAnchor="middle" className="font-bricolage" fill="#E55A2B" fontSize="14" fontWeight="700">
            {t.levelA[lang]}
          </text>
          <text x="300" y="272" textAnchor="middle" className="font-montserrat" fill="#E55A2B" fontSize="11" opacity="0.8">
            {t.minimum[lang]}
          </text>

          {/* A criteria below inner circle */}
          {t.criteriaA[lang].map((c, i) => (
            <g key={`a-${i}`}>
              <circle cx={200 + i * 100} cy="340" r="4" fill="#E55A2B" opacity="0.5" />
              <text x={200 + i * 100} y="358" textAnchor="middle" className="font-montserrat" fill="#666" fontSize="9">
                {c}
              </text>
            </g>
          ))}

          {/* Decorative arrows pointing to AA */}
          <line x1="460" y1="160" x2="410" y2="175" stroke="#0099FF" strokeWidth="2" markerEnd="url(#arrowBlue)" opacity="0.6" />
          <defs>
            <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#0099FF" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
