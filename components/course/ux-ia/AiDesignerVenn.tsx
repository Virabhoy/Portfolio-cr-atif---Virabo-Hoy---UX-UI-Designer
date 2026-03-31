"use client";

import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "IA vs Designer : la zone de co-creation",
    aiLabel: "IA",
    aiItems: ["Generation rapide", "Analyse data", "Patterns a grande echelle"],
    designerLabel: "Designer",
    designerItems: ["Empathie", "Ethique", "Vision strategique"],
    overlapLabel: "Le futur",
    overlapItems: ["Co-creation", "Decisions augmentees"],
  },
  en: {
    title: "AI vs Designer: the co-creation zone",
    aiLabel: "AI",
    aiItems: ["Rapid generation", "Data analysis", "Large-scale patterns"],
    designerLabel: "Designer",
    designerItems: ["Empathy", "Ethics", "Strategic vision"],
    overlapLabel: "The future",
    overlapItems: ["Co-creation", "Augmented decisions"],
  },
};

export default function AiDesignerVenn() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";
  const t = content[lang];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <p className="font-bricolage text-lg md:text-xl font-semibold text-center mb-8 text-gray-700">
        {t.title}
      </p>

      {/* Desktop SVG Venn */}
      <div className="hidden md:block">
        <svg viewBox="0 0 700 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <clipPath id="clipRight">
              <circle cx="420" cy="180" r="150" />
            </clipPath>
            <clipPath id="clipLeft">
              <circle cx="280" cy="180" r="150" />
            </clipPath>
          </defs>

          {/* Left circle - AI (blue) */}
          <circle cx="280" cy="180" r="150" fill="#0099FF" fillOpacity="0.15" stroke="#0099FF" strokeWidth="2" />
          {/* Right circle - Designer (teal) */}
          <circle cx="420" cy="180" r="150" fill="#00B4A0" fillOpacity="0.15" stroke="#00B4A0" strokeWidth="2" />

          {/* Overlap area - draw both circles clipped to each other for darker overlap */}
          <circle cx="280" cy="180" r="150" fill="#0099FF" fillOpacity="0.1" clipPath="url(#clipRight)" />
          <circle cx="420" cy="180" r="150" fill="#00B4A0" fillOpacity="0.1" clipPath="url(#clipLeft)" />

          {/* AI label */}
          <text x="220" y="100" textAnchor="middle" className="font-bricolage" fill="#0066CC" fontWeight="700" fontSize="20">
            {t.aiLabel}
          </text>
          {t.aiItems.map((item, i) => (
            <text key={i} x="220" y={130 + i * 24} textAnchor="middle" className="font-montserrat" fill="#374151" fontSize="13">
              {item}
            </text>
          ))}

          {/* Designer label */}
          <text x="480" y="100" textAnchor="middle" className="font-bricolage" fill="#008577" fontWeight="700" fontSize="20">
            {t.designerLabel}
          </text>
          {t.designerItems.map((item, i) => (
            <text key={i} x="480" y={130 + i * 24} textAnchor="middle" className="font-montserrat" fill="#374151" fontSize="13">
              {item}
            </text>
          ))}

          {/* Overlap label */}
          <text x="350" y="240" textAnchor="middle" className="font-bricolage" fill="#0066CC" fontWeight="700" fontSize="16">
            {t.overlapLabel}
          </text>
          {t.overlapItems.map((item, i) => (
            <text key={i} x="350" y={262 + i * 22} textAnchor="middle" className="font-montserrat" fill="#374151" fontSize="12">
              {item}
            </text>
          ))}
        </svg>
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex md:hidden flex-col gap-4">
        {/* AI card */}
        <div className="rounded-xl border-2 border-[#0099FF] bg-[#0099FF]/5 p-5">
          <p className="font-bricolage font-bold text-[#0066CC] text-lg mb-2">{t.aiLabel}</p>
          <ul className="space-y-1">
            {t.aiItems.map((item, i) => (
              <li key={i} className="font-montserrat text-sm text-gray-700">- {item}</li>
            ))}
          </ul>
        </div>

        {/* Overlap card */}
        <div className="rounded-xl border-2 border-dashed border-[#0066CC] bg-gradient-to-r from-[#0099FF]/10 to-[#00B4A0]/10 p-5">
          <p className="font-bricolage font-bold text-[#0066CC] text-lg mb-2">{t.overlapLabel}</p>
          <ul className="space-y-1">
            {t.overlapItems.map((item, i) => (
              <li key={i} className="font-montserrat text-sm text-gray-700">- {item}</li>
            ))}
          </ul>
        </div>

        {/* Designer card */}
        <div className="rounded-xl border-2 border-[#00B4A0] bg-[#00B4A0]/5 p-5">
          <p className="font-bricolage font-bold text-[#008577] text-lg mb-2">{t.designerLabel}</p>
          <ul className="space-y-1">
            {t.designerItems.map((item, i) => (
              <li key={i} className="font-montserrat text-sm text-gray-700">- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
