"use client";

import { useLanguage } from "@/lib/language-context";

export default function EmotionSpectrum() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: {
      fr: "Le spectre emotionnel du design",
      en: "The emotional spectrum of design",
    },
    frustration: { fr: "Frustration", en: "Frustration" },
    neutral: { fr: "Neutre", en: "Neutral" },
    delight: { fr: "Enchantement", en: "Delight" },
    frustrationExamples: {
      fr: ["Messages d'erreur cryptiques", "Flux brises, bugs visuels"],
      en: ["Cryptic error messages", "Broken flows, visual bugs"],
    },
    neutralExamples: {
      fr: ["Fonctionnel mais oubliable", "Pas d'emotion, pas de souvenir"],
      en: ["Functional but forgettable", "No emotion, no memory"],
    },
    delightExamples: {
      fr: ["Micro-interactions soignees", "Touches personnelles, surprises"],
      en: ["Polished micro-interactions", "Personal touches, surprises"],
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Gradient bar */}
      <div className="relative">
        <div className="h-5 md:h-6 rounded-full overflow-hidden shadow-inner">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(to right, #DC2626, #EF4444 20%, #9CA3AF 40%, #9CA3AF 60%, #0099FF 80%, #0066CC)",
            }}
          />
        </div>

        {/* Markers */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Frustration marker */}
          <div className="absolute left-[10%] -translate-x-1/2">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-3 border-[#DC2626] shadow-md" />
          </div>
          {/* Neutral marker */}
          <div className="absolute left-[50%] -translate-x-1/2">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-3 border-[#9CA3AF] shadow-md" />
          </div>
          {/* Delight marker */}
          <div className="absolute left-[90%] -translate-x-1/2">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-3 border-[#0099FF] shadow-md" />
          </div>
        </div>
      </div>

      {/* Labels & examples */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Frustration */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="#DC2626" strokeWidth="2" fill="#FEE2E2" />
              <line x1="12" y1="13" x2="16" y2="15" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
              <line x1="24" y1="13" x2="20" y2="15" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 25 C14 21, 22 21, 24 25" stroke="#DC2626" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="font-bricolage text-sm md:text-base font-bold text-[#DC2626]">
            {t.frustration[lang]}
          </h4>
          <div className="mt-2 space-y-1">
            {t.frustrationExamples[lang].map((ex, i) => (
              <p key={i} className="font-montserrat text-xs md:text-sm text-gray-500">
                {ex}
              </p>
            ))}
          </div>
        </div>

        {/* Neutral */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="#9CA3AF" strokeWidth="2" fill="#F3F4F6" />
              <circle cx="13" cy="15" r="2" fill="#9CA3AF" />
              <circle cx="23" cy="15" r="2" fill="#9CA3AF" />
              <line x1="12" y1="23" x2="24" y2="23" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="font-bricolage text-sm md:text-base font-bold text-[#6B7280]">
            {t.neutral[lang]}
          </h4>
          <div className="mt-2 space-y-1">
            {t.neutralExamples[lang].map((ex, i) => (
              <p key={i} className="font-montserrat text-xs md:text-sm text-gray-500">
                {ex}
              </p>
            ))}
          </div>
        </div>

        {/* Delight */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="#0099FF" strokeWidth="2" fill="#E6F3FF" />
              <circle cx="13" cy="14" r="2" fill="#0099FF" />
              <circle cx="23" cy="14" r="2" fill="#0099FF" />
              <path d="M11 20 C13 26, 23 26, 25 20" stroke="#0099FF" strokeWidth="2" fill="none" strokeLinecap="round" />
              <line x1="28" y1="6" x2="30" y2="3" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="32" y1="10" x2="35" y2="9" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="6" x2="33" y2="5" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="font-bricolage text-sm md:text-base font-bold text-[#0099FF]">
            {t.delight[lang]}
          </h4>
          <div className="mt-2 space-y-1">
            {t.delightExamples[lang].map((ex, i) => (
              <p key={i} className="font-montserrat text-xs md:text-sm text-gray-500">
                {ex}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
