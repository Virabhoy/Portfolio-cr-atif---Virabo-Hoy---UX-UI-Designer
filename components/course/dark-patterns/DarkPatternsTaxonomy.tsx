"use client";

import { useLanguage } from "@/lib/language-context";

export default function DarkPatternsTaxonomy() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const patterns = [
    {
      name: { fr: "Trick Questions", en: "Trick Questions" },
      desc: {
        fr: "Formulations confuses qui inversent le sens attendu",
        en: "Confusing wording that reverses expected meaning",
      },
      icon: (
        <>
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="20" y="25" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">?</text>
          <path d="M30 10 L34 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 6 L32 4 L36 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      ),
    },
    {
      name: { fr: "Forced Continuity", en: "Forced Continuity" },
      desc: {
        fr: "Essai gratuit qui preleve sans avertissement",
        en: "Free trial that charges without warning",
      },
      icon: (
        <>
          <path d="M10 20 A10 10 0 1 1 10 21" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="6,18 10,22 14,18" fill="currentColor" />
          <text x="20" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">$</text>
        </>
      ),
    },
    {
      name: { fr: "Hidden Costs", en: "Hidden Costs" },
      desc: {
        fr: "Frais reveles a la derniere etape",
        en: "Fees revealed at the final step",
      },
      icon: (
        <>
          <path d="M8 12 L8 30 L32 30 L32 12 L26 12 L26 8 L14 8 L14 12 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <text x="20" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">+</text>
          <circle cx="30" cy="10" r="5" fill="currentColor" opacity="0.3" />
          <text x="30" y="13" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">$</text>
        </>
      ),
    },
    {
      name: { fr: "Confirmshaming", en: "Confirmshaming" },
      desc: {
        fr: "Culpabiliser l'utilisateur pour son choix",
        en: "Guilt-tripping users for their choice",
      },
      icon: (
        <>
          <circle cx="20" cy="18" r="13" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M14 14 L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 14 L23 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 26 C15 22, 25 22, 27 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <line x1="18" y1="4" x2="16" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="4" x2="24" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ),
    },
    {
      name: { fr: "Roach Motel", en: "Roach Motel" },
      desc: {
        fr: "Facile d'entrer, impossible de sortir",
        en: "Easy to enter, impossible to leave",
      },
      icon: (
        <>
          <rect x="8" y="8" width="24" height="26" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 8 L20 4 L26 4 L26 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="22" r="2" fill="currentColor" />
          <path d="M14 14 L14 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
          <path d="M20 34 L18 31 L22 31 Z" fill="currentColor" opacity="0.5" />
          <line x1="20" y1="34" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </>
      ),
    },
    {
      name: { fr: "Misdirection", en: "Misdirection" },
      desc: {
        fr: "Detourner l'attention vers l'action souhaitee",
        en: "Diverting attention to the desired action",
      },
      icon: (
        <>
          <path d="M10 20 L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <polygon points="18,8 22,12 18,16" fill="currentColor" />
          <path d="M10 20 L18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <polygon points="18,24 22,28 18,32" fill="currentColor" opacity="0.3" />
          <path d="M10 20 L30 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="28,16 34,20 28,24" fill="currentColor" />
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patterns.map((pattern, i) => (
          <div
            key={i}
            className="rounded-xl p-5 md:p-6 border border-red-200 bg-gradient-to-br from-red-50 to-gray-50 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-8 h-8 text-[#DC2626]"
                >
                  {pattern.icon}
                </svg>
              </div>
              <h4 className="font-bricolage text-sm md:text-base font-bold text-[#7F1D1D]">
                {pattern.name[lang]}
              </h4>
            </div>
            <p className="font-montserrat text-xs md:text-sm text-gray-600 leading-relaxed">
              {pattern.desc[lang]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
