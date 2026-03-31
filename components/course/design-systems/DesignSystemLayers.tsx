"use client";

import { useLanguage } from "@/lib/language-context";

export default function DesignSystemLayers() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const layers = [
    {
      label: { fr: "Templates / Pages", en: "Templates / Pages" },
      detail: { fr: "Mises en page completes", en: "Complete page layouts" },
      width: "55%",
      color: "#003366",
      bgColor: "#CCE0F5",
    },
    {
      label: { fr: "Patterns", en: "Patterns" },
      detail: { fr: "Formulaires, navigation, layouts", en: "Forms, navigation, layouts" },
      width: "70%",
      color: "#004C99",
      bgColor: "#D6E8F7",
    },
    {
      label: { fr: "Composants", en: "Components" },
      detail: { fr: "Boutons, inputs, cartes, modales", en: "Buttons, inputs, cards, modals" },
      width: "85%",
      color: "#0066CC",
      bgColor: "#E0EFFA",
    },
    {
      label: { fr: "Design Tokens", en: "Design Tokens" },
      detail: { fr: "Couleurs, espacements, typographie", en: "Colors, spacing, typography" },
      width: "100%",
      color: "#0099FF",
      bgColor: "#E6F3FF",
    },
  ];

  const t = {
    foundation: { fr: "Fondation", en: "Foundation" },
    specific: { fr: "Specifique", en: "Specific" },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Arrow labels */}
      <div className="flex justify-between mb-3 px-2">
        <span className="font-montserrat text-xs text-gray-400 uppercase tracking-wide">
          {t.specific[lang]}
        </span>
        <span className="font-montserrat text-xs text-gray-400 uppercase tracking-wide">
          {t.foundation[lang]}
        </span>
      </div>

      {/* Vertical arrow on the right */}
      <div className="relative">
        {/* Layers */}
        <div className="space-y-3 flex flex-col items-center">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="rounded-xl py-4 px-6 md:px-8 flex items-center gap-4 md:gap-6 border shadow-sm transition-all hover:shadow-md"
              style={{
                width: layer.width,
                backgroundColor: layer.bgColor,
                borderColor: layer.color + "30",
              }}
            >
              {/* Layer icon */}
              <div
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: layer.color + "20" }}
              >
                {i === 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: layer.color }}>
                    <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="8" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: layer.color }}>
                    <rect x="2" y="4" width="20" height="8" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="2" y="14" width="9" height="6" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="13" y="14" width="9" height="6" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: layer.color }}>
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="9" y1="9" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
                {i === 0 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: layer.color }}>
                    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="5" y="5" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <rect x="13" y="5" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <rect x="5" y="11" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <rect x="5" y="17" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4
                  className="font-bricolage text-sm md:text-base font-bold"
                  style={{ color: layer.color }}
                >
                  {layer.label[lang]}
                </h4>
                <p className="font-montserrat text-xs md:text-sm text-gray-500 mt-0.5">
                  {layer.detail[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Side arrow */}
        <div className="absolute -right-8 md:-right-10 top-0 bottom-0 flex items-center">
          <svg width="20" height="100%" viewBox="0 0 20 200" preserveAspectRatio="none" fill="none">
            <line x1="10" y1="10" x2="10" y2="190" stroke="#0099FF" strokeWidth="2" opacity="0.3" />
            <polygon points="5,10 15,10 10,2" fill="#0099FF" opacity="0.3" />
            <polygon points="5,190 15,190 10,198" fill="#0099FF" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
