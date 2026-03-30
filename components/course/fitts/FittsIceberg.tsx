"use client";

import { useLanguage } from "@/lib/language-context";

const underwaterItems = [
  { fr: "COMPR\u00c9HENSION", en: "COMPREHENSION", opacity: 0.95 },
  { fr: "MOTIVATION", en: "MOTIVATION", opacity: 0.85 },
  { fr: "HI\u00c9RARCHIE VISUELLE", en: "VISUAL HIERARCHY", opacity: 0.75 },
  { fr: "CONTEXTE D\u2019USAGE", en: "CONTEXT OF USE", opacity: 0.65 },
  {
    fr: "LISIBILIT\u00c9, \u00c9MOTIONS\u2026",
    en: "READABILITY, EMOTIONS\u2026",
    opacity: 0.5,
  },
];

export default function FittsIceberg() {
  const { language } = useLanguage();

  const t = {
    aboveLabel:
      language === "fr"
        ? "MOUVEMENT (Loi de Fitts)"
        : "MOVEMENT (Fitts\u2019 Law)",
    visible: language === "fr" ? "Visible" : "Visible",
    hidden: language === "fr" ? "Cach\u00e9" : "Hidden",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-xl min-h-[500px] flex flex-col">
        {/* Above water - light section */}
        <div className="relative bg-gradient-to-b from-sky-50 to-sky-100 flex-[3] min-h-[180px] flex flex-col items-center justify-end pb-0">
          {/* Subtle label */}
          <span className="absolute top-4 right-4 text-[10px] font-montserrat text-sky-400 uppercase tracking-widest">
            {t.visible}
          </span>

          {/* Above-water label */}
          <p className="font-bricolage font-bold text-[#0099FF] text-lg md:text-xl text-center px-6 mb-6 z-10">
            {t.aboveLabel}
          </p>

          {/* Iceberg tip - SVG triangle */}
          <svg
            className="w-full max-w-[280px] z-10 -mb-[1px]"
            viewBox="0 0 280 80"
            fill="none"
            preserveAspectRatio="xMidYMax meet"
          >
            <polygon
              points="140,0 40,80 240,80"
              fill="white"
              stroke="#B0D4F1"
              strokeWidth="1.5"
            />
            {/* Snow highlights */}
            <polygon points="140,8 100,55 180,55" fill="#E8F4FD" opacity="0.6" />
          </svg>
        </div>

        {/* Water line - wavy SVG */}
        <div className="relative h-8 z-10 -mt-[1px]">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 32"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Water surface behind */}
            <rect y="16" width="800" height="16" fill="#0066CC" />
            {/* Wave shape */}
            <path
              d="M0 16 Q50 4, 100 16 Q150 28, 200 16 Q250 4, 300 16 Q350 28, 400 16 Q450 4, 500 16 Q550 28, 600 16 Q650 4, 700 16 Q750 28, 800 16 V0 H0 Z"
              fill="#E0F2FE"
            />
            {/* Wave line */}
            <path
              d="M0 16 Q50 4, 100 16 Q150 28, 200 16 Q250 4, 300 16 Q350 28, 400 16 Q450 4, 500 16 Q550 28, 600 16 Q650 4, 700 16 Q750 28, 800 16"
              stroke="#7DD3FC"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Below water - deep blue section */}
        <div
          className="relative flex-[5] min-h-[280px] flex flex-col items-center justify-center gap-4 md:gap-5 py-8 px-6"
          style={{
            background: "linear-gradient(to bottom, #0066CC, #004499)",
          }}
        >
          {/* Subtle label */}
          <span className="absolute top-4 right-4 text-[10px] font-montserrat text-blue-300/60 uppercase tracking-widest">
            {t.hidden}
          </span>

          {/* Underwater iceberg body (subtle shape) */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-full max-w-[360px] opacity-10"
            viewBox="0 0 360 240"
            fill="none"
            preserveAspectRatio="xMidYMin meet"
          >
            <polygon
              points="40,0 320,0 280,240 80,240"
              fill="white"
            />
          </svg>

          {/* Underwater items */}
          {underwaterItems.map((item, i) => (
            <p
              key={i}
              className="text-white text-center font-montserrat font-semibold text-sm md:text-base tracking-wide z-10"
              style={{ opacity: item.opacity }}
            >
              {language === "fr" ? item.fr : item.en}
            </p>
          ))}

          {/* Decorative dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[0.3, 0.5, 0.7, 0.5, 0.3].map((op, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white"
                style={{ opacity: op }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
