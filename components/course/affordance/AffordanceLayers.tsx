"use client";

import { useLanguage } from "@/lib/language-context";

export default function AffordanceLayers() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const layers = [
    {
      label: { fr: "Feedback", en: "Feedback" },
      desc: {
        fr: "Confirmation de l'action",
        en: "Confirmation of action",
      },
      color: "#003D66",
      width: 140,
    },
    {
      label: { fr: "Signifiant", en: "Signifier" },
      desc: {
        fr: "Le signal de design",
        en: "The design signal",
      },
      color: "#0066CC",
      width: 220,
    },
    {
      label: { fr: "Affordance Percue", en: "Perceived Affordance" },
      desc: {
        fr: "Ce que l'utilisateur croit possible",
        en: "What user believes is possible",
      },
      color: "#0088EE",
      width: 320,
    },
    {
      label: { fr: "Affordance Physique", en: "Physical Affordance" },
      desc: {
        fr: "Ce qui est physiquement possible",
        en: "What is physically possible",
      },
      color: "#0099FF",
      width: 420,
    },
  ];

  const t = {
    title: {
      fr: "Les couches de l'affordance selon Don Norman",
      en: "Don Norman's Affordance Layers",
    },
    topLabel: {
      fr: "Le plus visible",
      en: "Most visible",
    },
    bottomLabel: {
      fr: "Fondation invisible",
      en: "Invisible foundation",
    },
  };

  const totalHeight = 340;
  const layerHeight = 56;
  const gap = 14;
  const startY = 40;
  const centerX = 240;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center mb-8 text-gray-700">
        {t.title[lang]}
      </h3>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <svg
          width="100%"
          viewBox={`0 0 480 ${totalHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {/* Top label */}
          <text
            x={centerX}
            y={startY - 12}
            textAnchor="middle"
            className="font-montserrat"
            fill="#9CA3AF"
            fontSize="10"
          >
            {t.topLabel[lang]}
          </text>

          {/* Arrow pointing up */}
          <line
            x1={centerX}
            y1={startY - 8}
            x2={centerX}
            y2={startY - 2}
            stroke="#D1D5DB"
            strokeWidth="1.5"
          />
          <polygon
            points={`${centerX - 4},${startY - 4} ${centerX + 4},${startY - 4} ${centerX},${startY - 10}`}
            fill="#D1D5DB"
          />

          {/* Layers from top (narrowest) to bottom (widest) */}
          {layers.map((layer, i) => {
            const y = startY + i * (layerHeight + gap);
            const halfWidth = layer.width / 2;

            return (
              <g key={i}>
                {/* Layer trapezoid shape */}
                <path
                  d={`
                    M ${centerX - halfWidth} ${y}
                    L ${centerX + halfWidth} ${y}
                    L ${centerX + halfWidth + 8} ${y + layerHeight}
                    L ${centerX - halfWidth - 8} ${y + layerHeight}
                    Z
                  `}
                  fill={layer.color}
                  rx="6"
                  opacity="0.95"
                />
                {/* Subtle highlight on top */}
                <path
                  d={`
                    M ${centerX - halfWidth + 4} ${y + 2}
                    L ${centerX + halfWidth - 4} ${y + 2}
                    L ${centerX + halfWidth - 2} ${y + 14}
                    L ${centerX - halfWidth + 2} ${y + 14}
                    Z
                  `}
                  fill="white"
                  opacity="0.1"
                />
                {/* Layer label */}
                <text
                  x={centerX}
                  y={y + 24}
                  textAnchor="middle"
                  className="font-bricolage"
                  fill="white"
                  fontSize="13"
                  fontWeight="700"
                >
                  {layer.label[lang]}
                </text>
                {/* Layer description */}
                <text
                  x={centerX}
                  y={y + 42}
                  textAnchor="middle"
                  className="font-montserrat"
                  fill="white"
                  fontSize="10"
                  opacity="0.85"
                >
                  {layer.desc[lang]}
                </text>
              </g>
            );
          })}

          {/* Bottom label */}
          {(() => {
            const bottomY =
              startY + layers.length * (layerHeight + gap) + 4;
            return (
              <>
                <polygon
                  points={`${centerX - 4},${bottomY + 4} ${centerX + 4},${bottomY + 4} ${centerX},${bottomY + 10}`}
                  fill="#D1D5DB"
                />
                <line
                  x1={centerX}
                  y1={bottomY}
                  x2={centerX}
                  y2={bottomY + 6}
                  stroke="#D1D5DB"
                  strokeWidth="1.5"
                />
                <text
                  x={centerX}
                  y={bottomY + 24}
                  textAnchor="middle"
                  className="font-montserrat"
                  fill="#9CA3AF"
                  fontSize="10"
                >
                  {t.bottomLabel[lang]}
                </text>
              </>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}
