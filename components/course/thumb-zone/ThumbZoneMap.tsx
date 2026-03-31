"use client";

import { useLanguage } from "@/lib/language-context";

export default function ThumbZoneMap() {
  const { language } = useLanguage();

  const t = {
    easy: language === "fr" ? "Facile" : "Easy",
    stretch: language === "fr" ? "Etirement" : "Stretch",
    hard: language === "fr" ? "Difficile" : "Hard",
    title:
      language === "fr"
        ? "Carte de la Thumb Zone"
        : "Thumb Zone Map",
    note:
      language === "fr"
        ? "La zone verte ne couvre plus que ~30% de l'ecran sur un smartphone moderne de 6,7 pouces."
        : "The green zone now covers only ~30% of the screen on a modern 6.7-inch smartphone.",
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center">
        {t.title}
      </h3>

      <div className="relative">
        <svg
          viewBox="0 0 220 440"
          width="220"
          height="440"
          className="drop-shadow-xl"
        >
          {/* Phone outline */}
          <rect
            x="4"
            y="4"
            width="212"
            height="432"
            rx="36"
            ry="36"
            fill="white"
            stroke="#1f2937"
            strokeWidth="4"
          />

          {/* Inner screen area */}
          <clipPath id="screen-clip">
            <rect x="8" y="8" width="204" height="424" rx="32" ry="32" />
          </clipPath>

          <g clipPath="url(#screen-clip)">
            {/* Red zone - top corners */}
            <rect x="8" y="8" width="204" height="140" fill="rgba(239, 68, 68, 0.18)" />
            {/* Red corner accents */}
            <rect x="8" y="8" width="70" height="140" fill="rgba(239, 68, 68, 0.12)" />
            <rect x="142" y="8" width="70" height="140" fill="rgba(239, 68, 68, 0.12)" />

            {/* Yellow zone - sides and middle */}
            <rect x="8" y="148" width="204" height="140" fill="rgba(245, 158, 11, 0.18)" />
            {/* Yellow side accents */}
            <rect x="8" y="148" width="40" height="140" fill="rgba(245, 158, 11, 0.12)" />
            <rect x="172" y="148" width="40" height="140" fill="rgba(245, 158, 11, 0.12)" />

            {/* Green zone - bottom center */}
            <rect x="8" y="288" width="204" height="144" fill="rgba(34, 197, 94, 0.18)" />
            {/* Green center accent */}
            <rect x="40" y="300" width="140" height="120" rx="12" fill="rgba(34, 197, 94, 0.12)" />
          </g>

          {/* Zone divider lines */}
          <line x1="12" y1="148" x2="208" y2="148" stroke="#f87171" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="12" y1="288" x2="208" y2="288" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 3" />

          {/* Notch */}
          <rect x="75" y="4" width="70" height="24" rx="0" ry="0" fill="#1f2937" />
          <rect x="75" y="20" width="70" height="12" rx="8" ry="8" fill="#1f2937" />

          {/* Home indicator */}
          <rect x="82" y="418" width="56" height="4" rx="2" fill="#1f2937" />

          {/* Zone labels */}
          <text
            x="110"
            y="90"
            textAnchor="middle"
            fill="#dc2626"
            fontWeight="700"
            fontSize="14"
            fontFamily="Montserrat, sans-serif"
          >
            {t.hard}
          </text>
          <text
            x="110"
            y="224"
            textAnchor="middle"
            fill="#d97706"
            fontWeight="700"
            fontSize="14"
            fontFamily="Montserrat, sans-serif"
          >
            {t.stretch}
          </text>
          <text
            x="110"
            y="365"
            textAnchor="middle"
            fill="#16a34a"
            fontWeight="700"
            fontSize="14"
            fontFamily="Montserrat, sans-serif"
          >
            {t.easy}
          </text>

          {/* Thumb at bottom */}
          <g transform="translate(110, 440)">
            <ellipse cx="0" cy="8" rx="28" ry="12" fill="#22c55e" opacity="0.15" />
            <path
              d="M-14 18 Q-14 2, 0 0 Q14 2, 14 18"
              stroke="#22c55e"
              strokeWidth="2.5"
              fill="none"
              opacity="0.5"
            />
            {/* Thumb arc showing reach */}
            <path
              d="M-60 -60 A 80 80 0 0 1 60 -60"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.3"
            />
          </g>
        </svg>

        {/* Legend - right side */}
        <div className="absolute top-4 -right-32 hidden md:flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs font-montserrat text-gray-600">{t.hard}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs font-montserrat text-gray-600">{t.stretch}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-montserrat text-gray-600">{t.easy}</span>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-[#F5F5F5] rounded-xl p-4 max-w-sm">
        <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
          {t.note}
        </p>
      </div>
    </div>
  );
}
