"use client";

import { useLanguage } from "@/lib/language-context";

export default function NormanThreeLevels() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const levels = [
    {
      label: { fr: "Visceral", en: "Visceral" },
      subtitle: { fr: "Premiere impression", en: "First impression" },
      detail: { fr: "Couleurs, formes, esthetique", en: "Colors, shapes, aesthetics" },
      color: "#0099FF",
      bgColor: "#E6F3FF",
      iconPath: (
        <>
          <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="16" r="2.5" fill="currentColor" />
          <path d="M8 16 C8 10, 14 6, 20 6 C26 6, 32 10, 32 16 C32 22, 26 22, 20 22 C14 22, 8 22, 8 16Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="14" y1="8" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="26" y1="8" x2="28" y2="4" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="6" x2="20" y2="2" stroke="currentColor" strokeWidth="1.5" />
        </>
      ),
    },
    {
      label: { fr: "Comportemental", en: "Behavioral" },
      subtitle: { fr: "Plaisir d'usage", en: "Pleasure of use" },
      detail: { fr: "Utilisabilite, interaction fluide", en: "Usability, fluid interaction" },
      color: "#0077CC",
      bgColor: "#D9EDFF",
      iconPath: (
        <>
          <path d="M20 6 C14 6, 10 10, 10 14 C10 18, 12 20, 14 22 L14 26 L26 26 L26 22 C28 20, 30 18, 30 14 C30 10, 26 6, 20 6Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d="M16 22 L16 18 C16 16, 18 14, 20 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M24 22 L24 18 C24 16, 22 14, 20 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="11" r="1.5" fill="currentColor" />
          <line x1="15" y1="28" x2="25" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ),
    },
    {
      label: { fr: "Reflectif", en: "Reflective" },
      subtitle: { fr: "Identite & Souvenir", en: "Identity & Memory" },
      detail: { fr: "Sens, image de soi, fierte", en: "Meaning, self-image, pride" },
      color: "#004C99",
      bgColor: "#CCE0F5",
      iconPath: (
        <>
          <path d="M20 4 C13 4, 8 9, 8 15 C8 18, 9 20, 11 22 C11 22, 12 26, 12 28 L28 28 C28 26, 29 22, 29 22 C31 20, 32 18, 32 15 C32 9, 27 4, 20 4Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d="M14 14 C15 12, 17 11, 20 11 C23 11, 25 12, 26 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M14 18 C16 20, 18 21, 20 21 C22 21, 24 20, 26 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="20" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {levels.map((level, i) => (
        <div key={i}>
          {/* Card */}
          <div
            className="rounded-2xl p-6 md:p-8 flex items-center gap-5 md:gap-8 shadow-sm border"
            style={{ backgroundColor: level.bgColor, borderColor: level.color + "30" }}
          >
            {/* Icon */}
            <div
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: level.color + "20" }}
            >
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                style={{ color: level.color }}
                className="w-8 h-8 md:w-10 md:h-10"
              >
                {level.iconPath}
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3
                className="font-bricolage text-lg md:text-xl font-bold"
                style={{ color: level.color }}
              >
                {level.label[lang]}
              </h3>
              <p className="font-montserrat text-sm md:text-base font-semibold text-gray-700 mt-1">
                {level.subtitle[lang]}
              </p>
              <p className="font-montserrat text-xs md:text-sm text-gray-500 mt-1">
                {level.detail[lang]}
              </p>
            </div>
          </div>

          {/* Arrow between cards */}
          {i < levels.length - 1 && (
            <div className="flex justify-center py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4 L12 18 M7 14 L12 20 L17 14"
                  stroke="#0066CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
