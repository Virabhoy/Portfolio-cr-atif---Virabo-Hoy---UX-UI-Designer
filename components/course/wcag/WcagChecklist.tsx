"use client";

import { useLanguage } from "@/lib/language-context";

interface CheckItem {
  label: { fr: string; en: string };
  pass: boolean;
}

export default function WcagChecklist() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: { fr: "Checklist WCAG 2.2 AA", en: "WCAG 2.2 AA Checklist" },
    pass: { fr: "Conforme", en: "Pass" },
    fail: { fr: "Non conforme", en: "Fail" },
  };

  const items: {
    label: { fr: string; en: string };
    pass: boolean;
    svgContent: (pass: boolean) => React.ReactNode;
  }[] = [
    {
      label: { fr: "Contraste >= 4.5:1", en: "Contrast >= 4.5:1" },
      pass: true,
      svgContent: () => (
        <g>
          {/* Two color swatches showing good contrast */}
          <rect x="15" y="12" width="30" height="30" rx="4" fill="#FFFFFF" stroke="#ddd" strokeWidth="1" />
          <rect x="50" y="12" width="30" height="30" rx="4" fill="#1a1a1a" />
          <text x="30" y="56" textAnchor="middle" fill="#999" fontSize="7">Aa</text>
          <text x="65" y="56" textAnchor="middle" fill="#999" fontSize="7">Aa</text>
          <text x="47" y="32" textAnchor="middle" fill="#0099FF" fontSize="10" fontWeight="700">4.5:1</text>
        </g>
      ),
    },
    {
      label: { fr: "Taille cible >= 24x24px", en: "Target size >= 24x24px" },
      pass: true,
      svgContent: () => (
        <g>
          {/* Small target (bad) vs large target (good) */}
          <rect x="20" y="18" width="12" height="12" rx="2" fill="#E55A2B" opacity="0.3" stroke="#E55A2B" strokeWidth="1" />
          <line x1="20" y1="18" x2="32" y2="30" stroke="#E55A2B" strokeWidth="1.5" />
          <text x="26" y="44" textAnchor="middle" fill="#999" fontSize="7">12px</text>
          <rect x="48" y="12" width="24" height="24" rx="4" fill="#0099FF" opacity="0.2" stroke="#0099FF" strokeWidth="2" />
          <circle cx="60" cy="24" r="3" fill="#0099FF" />
          <text x="60" y="50" textAnchor="middle" fill="#999" fontSize="7">24px</text>
        </g>
      ),
    },
    {
      label: { fr: "Focus visible", en: "Visible focus" },
      pass: true,
      svgContent: () => (
        <g>
          {/* Button with focus ring */}
          <rect x="18" y="14" width="56" height="26" rx="6" fill="#f0f0f0" stroke="#0099FF" strokeWidth="3" strokeDasharray="none" />
          <rect x="14" y="10" width="64" height="34" rx="8" fill="none" stroke="#0099FF" strokeWidth="2" opacity="0.4" strokeDasharray="4 2" />
          <text x="46" y="31" textAnchor="middle" fill="#333" fontSize="10" fontWeight="600">Button</text>
        </g>
      ),
    },
    {
      label: { fr: "Redim. texte 200%", en: "Text resize 200%" },
      pass: true,
      svgContent: () => (
        <g>
          {/* Small text scaling to large text */}
          <text x="16" y="28" fill="#999" fontSize="10">Aa</text>
          <text x="36" y="20" fill="#0099FF" fontSize="7">&rarr;</text>
          <text x="48" y="34" fill="#333" fontSize="20" fontWeight="700">Aa</text>
          <text x="46" y="50" textAnchor="middle" fill="#999" fontSize="7">200%</text>
        </g>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h3 className="font-bricolage text-xl md:text-2xl font-bold text-center mb-8">
          {t.title[lang]}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 bg-gray-50/50"
            >
              {/* SVG visual */}
              <svg viewBox="0 0 92 60" className="w-24 h-16" aria-hidden="true">
                {item.svgContent(item.pass)}
              </svg>

              {/* Label */}
              <p className="font-montserrat text-sm font-medium text-center text-gray-700">
                {item.label[lang]}
              </p>

              {/* Pass/Fail badge */}
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  {item.pass ? (
                    <g>
                      <circle cx="10" cy="10" r="10" fill="#22C55E" />
                      <path d="M6 10.5L8.5 13L14 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  ) : (
                    <g>
                      <circle cx="10" cy="10" r="10" fill="#EF4444" />
                      <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  )}
                </svg>
                <span
                  className={`font-montserrat text-xs font-semibold ${
                    item.pass ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.pass ? t.pass[lang] : t.fail[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
