"use client";

import { useLanguage } from "@/lib/language-context";

export default function DesignSystemBenefits() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    withoutTitle: { fr: "Sans Design System", en: "Without Design System" },
    withTitle: { fr: "Avec Design System", en: "With Design System" },
    withoutTime: { fr: "~3 mois", en: "~3 months" },
    withTime: { fr: "~2 semaines", en: "~2 weeks" },
    withoutTimeLabel: { fr: "Temps de dev par feature", en: "Dev time per feature" },
    withTimeLabel: { fr: "Temps de dev par feature", en: "Dev time per feature" },
    withoutChaos: { fr: "Incoherence visuelle", en: "Visual inconsistency" },
    withOrder: { fr: "Coherence totale", en: "Total consistency" },
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* WITHOUT Design System */}
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
        <div className="bg-red-50 px-5 py-3 border-b border-red-200 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#DC2626" strokeWidth="2" fill="none" />
            <line x1="6" y1="6" x2="14" y2="14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="6" x2="6" y2="14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-bricolage text-sm md:text-base font-bold text-[#7F1D1D]">
            {t.withoutTitle[lang]}
          </span>
        </div>

        <div className="bg-white p-6 space-y-5">
          {/* Inconsistent buttons */}
          <div className="space-y-3">
            <p className="font-montserrat text-xs text-gray-500 uppercase tracking-wide mb-2">
              {t.withoutChaos[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {/* All different styles */}
              <div className="px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-full font-montserrat">
                Submit
              </div>
              <div className="px-3 py-1.5 bg-green-600 text-white text-[10px] rounded font-montserrat border-2 border-green-800">
                SAVE
              </div>
              <div className="px-5 py-2.5 bg-purple-400 text-white text-sm rounded-xl font-montserrat italic">
                ok
              </div>
              <div className="px-2 py-1 bg-orange-500 text-white text-xs rounded-none font-montserrat uppercase">
                Confirm
              </div>
              <div className="px-4 py-2 bg-gray-800 text-yellow-300 text-xs rounded-lg font-montserrat underline">
                Next
              </div>
            </div>
          </div>

          {/* Chaos icons */}
          <div className="flex items-center justify-center gap-3 py-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-red-400">
              <path d="M4 24 L14 4 L24 24 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
              <line x1="14" y1="12" x2="14" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="14" cy="21" r="1" fill="currentColor" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-red-300 rotate-12">
              <path d="M6 6 L22 22 M22 6 L6 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-red-400 -rotate-6">
              <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 3" />
              <text x="14" y="18" textAnchor="middle" fontSize="12" fill="currentColor">!</text>
            </svg>
          </div>

          {/* Time */}
          <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
            <p className="font-bricolage text-2xl md:text-3xl font-bold text-[#DC2626]">
              {t.withoutTime[lang]}
            </p>
            <p className="font-montserrat text-xs text-gray-500 mt-1">
              {t.withoutTimeLabel[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* WITH Design System */}
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#0099FF]">
        <div className="bg-blue-50 px-5 py-3 border-b border-blue-200 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#0099FF" strokeWidth="2" fill="none" />
            <path d="M6 10 L9 13 L14 7" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bricolage text-sm md:text-base font-bold text-[#003366]">
            {t.withTitle[lang]}
          </span>
        </div>

        <div className="bg-white p-6 space-y-5">
          {/* Consistent buttons */}
          <div className="space-y-3">
            <p className="font-montserrat text-xs text-gray-500 uppercase tracking-wide mb-2">
              {t.withOrder[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {/* All same style */}
              <div className="px-4 py-2 bg-[#0099FF] text-white text-xs font-semibold rounded-lg font-montserrat">
                Primary
              </div>
              <div className="px-4 py-2 bg-[#0066CC] text-white text-xs font-semibold rounded-lg font-montserrat">
                Secondary
              </div>
              <div className="px-4 py-2 bg-white text-[#0099FF] text-xs font-semibold rounded-lg font-montserrat border border-[#0099FF]">
                Outline
              </div>
              <div className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg font-montserrat">
                Ghost
              </div>
              <div className="px-4 py-2 bg-[#DC2626] text-white text-xs font-semibold rounded-lg font-montserrat">
                Danger
              </div>
            </div>
          </div>

          {/* Order icons */}
          <div className="flex items-center justify-center gap-3 py-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#0099FF]">
              <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 14 L12 18 L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#0066CC]">
              <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#0099FF]">
              <path d="M4 8 L14 4 L24 8 L24 20 L14 24 L4 20 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
              <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Time */}
          <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
            <p className="font-bricolage text-2xl md:text-3xl font-bold text-[#0099FF]">
              {t.withTime[lang]}
            </p>
            <p className="font-montserrat text-xs text-gray-500 mt-1">
              {t.withTimeLabel[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
