"use client";

import { useLanguage } from "@/lib/language-context";

export default function ThumbZoneActions() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Placement recommande des actions"
        : "Recommended Action Placement",
    tertiary: language === "fr" ? "Tertiaire" : "Tertiary",
    tertiaryDesc:
      language === "fr"
        ? "Titres, statuts, reglages"
        : "Titles, statuses, settings",
    secondary: language === "fr" ? "Secondaire" : "Secondary",
    secondaryDesc:
      language === "fr"
        ? "Contenu principal, listes"
        : "Main content, lists",
    primary: language === "fr" ? "Primaire" : "Primary",
    primaryDesc:
      language === "fr"
        ? "CTA, navigation, actions"
        : "CTA, navigation, actions",
    note:
      language === "fr"
        ? "Les 25% inferieurs de l'ecran sont la zone premium pour les actions frequentes."
        : "The bottom 25% of the screen is the premium zone for frequent actions.",
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center">
        {t.title}
      </h3>

      <div className="relative">
        <svg
          viewBox="0 0 280 440"
          width="280"
          height="440"
          className="drop-shadow-xl"
        >
          {/* Phone outline */}
          <rect
            x="34"
            y="4"
            width="212"
            height="432"
            rx="36"
            ry="36"
            fill="white"
            stroke="#1f2937"
            strokeWidth="4"
          />

          {/* Notch */}
          <rect x="105" y="4" width="70" height="24" rx="0" fill="#1f2937" />
          <rect x="105" y="20" width="70" height="12" rx="8" fill="#1f2937" />

          {/* Home indicator */}
          <rect x="112" y="418" width="56" height="4" rx="2" fill="#1f2937" />

          <clipPath id="actions-clip">
            <rect x="38" y="8" width="204" height="424" rx="32" ry="32" />
          </clipPath>

          <g clipPath="url(#actions-clip)">
            {/* Tertiary zone - top 35% (red tint) */}
            <rect x="38" y="8" width="204" height="148" fill="rgba(239, 68, 68, 0.1)" />

            {/* Status bar mockup */}
            <rect x="50" y="36" width="60" height="6" rx="3" fill="#d1d5db" />
            <rect x="170" y="36" width="20" height="6" rx="3" fill="#d1d5db" />

            {/* Title mockup */}
            <rect x="60" y="56" width="100" height="10" rx="4" fill="#9ca3af" />

            {/* Settings icon placeholder */}
            <circle cx="210" cy="61" r="8" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
            <circle cx="210" cy="61" r="3" fill="none" stroke="#d1d5db" strokeWidth="1" />

            {/* Secondary zone - middle 40% (yellow tint) */}
            <rect x="38" y="156" width="204" height="170" fill="rgba(245, 158, 11, 0.08)" />

            {/* Content cards mockup */}
            <rect x="54" y="172" width="172" height="40" rx="8" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
            <rect x="66" y="182" width="80" height="6" rx="3" fill="#d1d5db" />
            <rect x="66" y="194" width="120" height="4" rx="2" fill="#e5e7eb" />

            <rect x="54" y="222" width="172" height="40" rx="8" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
            <rect x="66" y="232" width="90" height="6" rx="3" fill="#d1d5db" />
            <rect x="66" y="244" width="100" height="4" rx="2" fill="#e5e7eb" />

            <rect x="54" y="272" width="172" height="40" rx="8" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
            <rect x="66" y="282" width="70" height="6" rx="3" fill="#d1d5db" />
            <rect x="66" y="294" width="110" height="4" rx="2" fill="#e5e7eb" />

            {/* Primary zone - bottom 25% (green tint) */}
            <rect x="38" y="326" width="204" height="106" fill="rgba(34, 197, 94, 0.12)" />

            {/* CTA button mockup */}
            <rect x="64" y="340" width="152" height="40" rx="20" fill="#0099FF" />
            <text
              x="140"
              y="365"
              textAnchor="middle"
              fill="white"
              fontWeight="600"
              fontSize="12"
              fontFamily="Montserrat, sans-serif"
            >
              {language === "fr" ? "Action principale" : "Primary Action"}
            </text>

            {/* Bottom nav bar mockup */}
            <rect x="38" y="392" width="204" height="40" fill="#f9fafb" />
            <line x1="38" y1="392" x2="242" y2="392" stroke="#e5e7eb" strokeWidth="1" />
            {/* Nav icons */}
            <circle cx="78" cy="410" r="6" fill="#0099FF" />
            <circle cx="118" cy="410" r="6" fill="#d1d5db" />
            <circle cx="162" cy="410" r="6" fill="#d1d5db" />
            <circle cx="202" cy="410" r="6" fill="#d1d5db" />
          </g>

          {/* Zone divider lines */}
          <line x1="40" y1="156" x2="240" y2="156" stroke="#f87171" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          <line x1="40" y1="326" x2="240" y2="326" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />

          {/* Labels on the left */}
          {/* Tertiary label */}
          <text
            x="28"
            y="84"
            textAnchor="end"
            fill="#dc2626"
            fontWeight="700"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
          >
            {t.tertiary}
          </text>
          <text
            x="28"
            y="98"
            textAnchor="end"
            fill="#9ca3af"
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
          >
            {t.tertiaryDesc}
          </text>

          {/* Secondary label */}
          <text
            x="28"
            y="238"
            textAnchor="end"
            fill="#d97706"
            fontWeight="700"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
          >
            {t.secondary}
          </text>
          <text
            x="28"
            y="252"
            textAnchor="end"
            fill="#9ca3af"
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
          >
            {t.secondaryDesc}
          </text>

          {/* Primary label */}
          <text
            x="28"
            y="372"
            textAnchor="end"
            fill="#16a34a"
            fontWeight="700"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
          >
            {t.primary}
          </text>
          <text
            x="28"
            y="386"
            textAnchor="end"
            fill="#9ca3af"
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
          >
            {t.primaryDesc}
          </text>

          {/* Percentage labels on right */}
          <text x="252" y="84" fill="#9ca3af" fontSize="9" fontFamily="Montserrat, sans-serif">35%</text>
          <text x="252" y="244" fill="#9ca3af" fontSize="9" fontFamily="Montserrat, sans-serif">40%</text>
          <text x="252" y="372" fill="#9ca3af" fontSize="9" fontFamily="Montserrat, sans-serif">25%</text>
        </svg>
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
