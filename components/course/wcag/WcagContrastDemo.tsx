"use client";

import { useLanguage } from "@/lib/language-context";

export default function WcagContrastDemo() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: { fr: "Demonstration de contraste", en: "Contrast Demonstration" },
    bad: { fr: "Mauvais contraste", en: "Bad contrast" },
    good: { fr: "Bon contraste", en: "Good contrast" },
    fail: { fr: "Echec", en: "Fail" },
    pass: { fr: "Conforme", en: "Pass" },
    sampleText: { fr: "Texte exemple", en: "Sample text" },
    ratio: { fr: "Ratio", en: "Ratio" },
    minRequired: { fr: "Minimum requis : 4.5:1", en: "Minimum required: 4.5:1" },
    formula: { fr: "Luminance relative", en: "Relative luminance" },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h3 className="font-bricolage text-xl md:text-2xl font-bold text-center mb-8">
          {t.title[lang]}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Bad contrast card */}
          <div className="rounded-xl border-2 border-red-200 overflow-hidden">
            <div className="bg-red-50 px-4 py-2 flex items-center justify-between">
              <span className="font-bricolage font-bold text-red-600 text-sm">
                {t.bad[lang]}
              </span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {t.fail[lang]}
              </span>
            </div>
            <div className="p-5">
              <svg viewBox="0 0 220 140" className="w-full h-auto" aria-label={t.bad[lang]} role="img">
                {/* White background card */}
                <rect x="10" y="10" width="200" height="80" rx="8" fill="#FFFFFF" stroke="#eee" strokeWidth="1" />
                {/* Light gray text on white - bad contrast */}
                <text x="110" y="42" textAnchor="middle" fill="#C0C0C0" fontSize="18" fontWeight="600" className="font-montserrat">
                  {t.sampleText[lang]}
                </text>
                <text x="110" y="65" textAnchor="middle" fill="#D0D0D0" fontSize="11" className="font-montserrat">
                  Lorem ipsum dolor sit amet
                </text>

                {/* Ratio badge */}
                <rect x="60" y="100" width="100" height="30" rx="15" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                <text x="90" y="120" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="700" className="font-montserrat">
                  {t.ratio[lang]}:
                </text>
                <text x="150" y="120" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="800" className="font-bricolage">
                  2.1:1
                </text>

                {/* Red X icon */}
                <circle cx="195" cy="115" r="10" fill="#EF4444" />
                <path d="M191 111L199 119M199 111L191 119" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Good contrast card */}
          <div className="rounded-xl border-2 border-green-200 overflow-hidden">
            <div className="bg-green-50 px-4 py-2 flex items-center justify-between">
              <span className="font-bricolage font-bold text-green-700 text-sm">
                {t.good[lang]}
              </span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {t.pass[lang]}
              </span>
            </div>
            <div className="p-5">
              <svg viewBox="0 0 220 140" className="w-full h-auto" aria-label={t.good[lang]} role="img">
                {/* White background card */}
                <rect x="10" y="10" width="200" height="80" rx="8" fill="#FFFFFF" stroke="#eee" strokeWidth="1" />
                {/* Dark text on white - good contrast */}
                <text x="110" y="42" textAnchor="middle" fill="#1a1a1a" fontSize="18" fontWeight="600" className="font-montserrat">
                  {t.sampleText[lang]}
                </text>
                <text x="110" y="65" textAnchor="middle" fill="#333333" fontSize="11" className="font-montserrat">
                  Lorem ipsum dolor sit amet
                </text>

                {/* Ratio badge */}
                <rect x="60" y="100" width="100" height="30" rx="15" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1.5" />
                <text x="90" y="120" textAnchor="middle" fill="#16A34A" fontSize="11" fontWeight="700" className="font-montserrat">
                  {t.ratio[lang]}:
                </text>
                <text x="150" y="120" textAnchor="middle" fill="#16A34A" fontSize="14" fontWeight="800" className="font-bricolage">
                  7.2:1
                </text>

                {/* Green checkmark icon */}
                <circle cx="195" cy="115" r="10" fill="#22C55E" />
                <path d="M190 115L193.5 118.5L200 111" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Formula bar */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <svg viewBox="0 0 280 40" className="w-64 h-10" aria-hidden="true">
            <text x="5" y="26" fill="#666" fontSize="12" className="font-montserrat" fontWeight="600">
              {t.formula[lang]}:
            </text>
            <text x="140" y="26" fill="#0099FF" fontSize="13" className="font-montserrat" fontWeight="700">
              (L1 + 0.05) / (L2 + 0.05)
            </text>
          </svg>
          <span className="text-xs font-montserrat text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
            {t.minRequired[lang]}
          </span>
        </div>
      </div>
    </div>
  );
}
