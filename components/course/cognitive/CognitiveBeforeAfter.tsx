"use client";

import { useLanguage } from "@/lib/language-context";

export default function CognitiveBeforeAfter() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const t = {
    overloaded: isFr ? "Surcharge" : "Overloaded",
    simplified: isFr ? "Allege" : "Simplified",
    overloadedCaption: isFr
      ? "12+ metriques sans hierarchie ni regroupement"
      : "12+ metrics without hierarchy or grouping",
    simplifiedCaption: isFr
      ? "4 metriques cles mises en avant, donnees groupees"
      : "4 key metrics highlighted, data grouped",
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* OVERLOADED */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#DC2626] flex flex-col items-center gap-5">
          <h3 className="font-bricolage text-xl font-bold text-[#DC2626]">
            {t.overloaded}
          </h3>

          {/* Cluttered dashboard mockup */}
          <svg
            viewBox="0 0 260 180"
            className="w-full max-w-[260px]"
            fill="none"
          >
            {/* Background */}
            <rect width="260" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />

            {/* Top bar */}
            <rect x="0" y="0" width="260" height="20" rx="8" fill="#374151" />
            <circle cx="12" cy="10" r="3" fill="#DC2626" />
            <circle cx="22" cy="10" r="3" fill="#EAB308" />
            <circle cx="32" cy="10" r="3" fill="#16A34A" />

            {/* Tiny widgets scattered everywhere */}
            {/* Row 1 - 4 tiny boxes */}
            <rect x="8" y="26" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="12" y="30" width="20" height="3" rx="1" fill="#9CA3AF" />
            <rect x="12" y="36" width="36" height="5" rx="1" fill="#DC2626" opacity="0.3" />
            <rect x="12" y="44" width="28" height="3" rx="1" fill="#E5E7EB" />
            <rect x="12" y="50" width="16" height="3" rx="1" fill="#E5E7EB" />

            <rect x="68" y="26" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="72" y="30" width="18" height="3" rx="1" fill="#9CA3AF" />
            <rect x="72" y="36" width="40" height="5" rx="1" fill="#F97316" opacity="0.3" />
            <rect x="72" y="44" width="32" height="3" rx="1" fill="#E5E7EB" />
            <rect x="72" y="50" width="24" height="3" rx="1" fill="#E5E7EB" />

            <rect x="128" y="26" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="132" y="30" width="22" height="3" rx="1" fill="#9CA3AF" />
            <rect x="132" y="36" width="44" height="5" rx="1" fill="#EAB308" opacity="0.3" />
            <rect x="132" y="44" width="30" height="3" rx="1" fill="#E5E7EB" />

            <rect x="188" y="26" width="64" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="192" y="30" width="16" height="3" rx="1" fill="#9CA3AF" />
            <rect x="192" y="36" width="50" height="5" rx="1" fill="#16A34A" opacity="0.3" />
            <rect x="192" y="44" width="38" height="3" rx="1" fill="#E5E7EB" />

            {/* Row 2 - 4 more tiny boxes */}
            <rect x="8" y="62" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="12" y="66" width="24" height="3" rx="1" fill="#9CA3AF" />
            <rect x="12" y="72" width="42" height="5" rx="1" fill="#0099FF" opacity="0.2" />

            <rect x="68" y="62" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="72" y="66" width="20" height="3" rx="1" fill="#9CA3AF" />
            <rect x="72" y="72" width="38" height="5" rx="1" fill="#9CA3AF" opacity="0.2" />

            <rect x="128" y="62" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="132" y="66" width="18" height="3" rx="1" fill="#9CA3AF" />
            <rect x="132" y="72" width="44" height="5" rx="1" fill="#DC2626" opacity="0.2" />

            <rect x="188" y="62" width="64" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="192" y="66" width="22" height="3" rx="1" fill="#9CA3AF" />
            <rect x="192" y="72" width="48" height="5" rx="1" fill="#EAB308" opacity="0.2" />

            {/* Row 3 - 4 more */}
            <rect x="8" y="98" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="12" y="102" width="20" height="3" rx="1" fill="#9CA3AF" />
            <rect x="12" y="108" width="36" height="5" rx="1" fill="#F97316" opacity="0.2" />

            <rect x="68" y="98" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="72" y="102" width="16" height="3" rx="1" fill="#9CA3AF" />
            <rect x="72" y="108" width="40" height="5" rx="1" fill="#16A34A" opacity="0.2" />

            <rect x="128" y="98" width="56" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="132" y="102" width="24" height="3" rx="1" fill="#9CA3AF" />
            <rect x="132" y="108" width="34" height="5" rx="1" fill="#0099FF" opacity="0.2" />

            <rect x="188" y="98" width="64" height="32" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="192" y="102" width="18" height="3" rx="1" fill="#9CA3AF" />
            <rect x="192" y="108" width="46" height="5" rx="1" fill="#DC2626" opacity="0.2" />

            {/* Bottom row - tiny text lines */}
            <rect x="8" y="136" width="120" height="18" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="12" y="140" width="60" height="2" rx="1" fill="#9CA3AF" />
            <rect x="12" y="144" width="80" height="2" rx="1" fill="#E5E7EB" />
            <rect x="12" y="148" width="50" height="2" rx="1" fill="#E5E7EB" />

            <rect x="132" y="136" width="120" height="18" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
            <rect x="136" y="140" width="50" height="2" rx="1" fill="#9CA3AF" />
            <rect x="136" y="144" width="70" height="2" rx="1" fill="#E5E7EB" />
            <rect x="136" y="148" width="40" height="2" rx="1" fill="#E5E7EB" />

            {/* Confusion overlay */}
            <text x="130" y="170" textAnchor="middle" fill="#DC2626" fontSize="7" fontWeight="bold" fontFamily="system-ui">
              {isFr ? "12+ metriques" : "12+ metrics"}
            </text>
          </svg>

          <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
            {t.overloadedCaption}
          </p>
        </div>

        {/* SIMPLIFIED */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#16A34A] flex flex-col items-center gap-5">
          <h3 className="font-bricolage text-xl font-bold text-[#16A34A]">
            {t.simplified}
          </h3>

          {/* Clean dashboard mockup */}
          <svg
            viewBox="0 0 260 180"
            className="w-full max-w-[260px]"
            fill="none"
          >
            {/* Background */}
            <rect width="260" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />

            {/* Top bar */}
            <rect x="0" y="0" width="260" height="20" rx="8" fill="#1F2937" />
            <circle cx="12" cy="10" r="3" fill="#DC2626" />
            <circle cx="22" cy="10" r="3" fill="#EAB308" />
            <circle cx="32" cy="10" r="3" fill="#16A34A" />

            {/* 4 KEY METRICS - large, prominent */}
            <rect x="10" y="28" width="116" height="48" rx="8" fill="white" stroke="#0099FF" strokeWidth="1.5" />
            <rect x="16" y="34" width="40" height="4" rx="2" fill="#0099FF" opacity="0.5" />
            <text x="16" y="56" fill="#0066CC" fontSize="16" fontWeight="bold" fontFamily="system-ui">2,847</text>
            <rect x="16" y="64" width="60" height="3" rx="1" fill="#16A34A" opacity="0.4" />

            <rect x="134" y="28" width="116" height="48" rx="8" fill="white" stroke="#0099FF" strokeWidth="1.5" />
            <rect x="140" y="34" width="36" height="4" rx="2" fill="#0099FF" opacity="0.5" />
            <text x="140" y="56" fill="#0066CC" fontSize="16" fontWeight="bold" fontFamily="system-ui">94.2%</text>
            <rect x="140" y="64" width="50" height="3" rx="1" fill="#16A34A" opacity="0.4" />

            <rect x="10" y="82" width="116" height="48" rx="8" fill="white" stroke="#0099FF" strokeWidth="1.5" />
            <rect x="16" y="88" width="44" height="4" rx="2" fill="#0099FF" opacity="0.5" />
            <text x="16" y="110" fill="#0066CC" fontSize="16" fontWeight="bold" fontFamily="system-ui">1.2s</text>
            <rect x="16" y="118" width="70" height="3" rx="1" fill="#EAB308" opacity="0.4" />

            <rect x="134" y="82" width="116" height="48" rx="8" fill="white" stroke="#0099FF" strokeWidth="1.5" />
            <rect x="140" y="88" width="38" height="4" rx="2" fill="#0099FF" opacity="0.5" />
            <text x="140" y="110" fill="#0066CC" fontSize="16" fontWeight="bold" fontFamily="system-ui">+12%</text>
            <rect x="140" y="118" width="55" height="3" rx="1" fill="#16A34A" opacity="0.4" />

            {/* Grouped secondary section */}
            <rect x="10" y="140" width="240" height="32" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <rect x="16" y="146" width="30" height="3" rx="1" fill="#9CA3AF" />
            <rect x="52" y="146" width="1" height="16" rx="0.5" fill="#E5E7EB" />
            <rect x="60" y="146" width="30" height="3" rx="1" fill="#9CA3AF" />
            <rect x="96" y="146" width="1" height="16" rx="0.5" fill="#E5E7EB" />
            <rect x="104" y="146" width="30" height="3" rx="1" fill="#9CA3AF" />
            <rect x="140" y="146" width="1" height="16" rx="0.5" fill="#E5E7EB" />
            <rect x="148" y="146" width="30" height="3" rx="1" fill="#9CA3AF" />

            <rect x="16" y="154" width="24" height="8" rx="2" fill="#0099FF" opacity="0.15" />
            <rect x="60" y="154" width="28" height="8" rx="2" fill="#16A34A" opacity="0.15" />
            <rect x="104" y="154" width="20" height="8" rx="2" fill="#EAB308" opacity="0.15" />
            <rect x="148" y="154" width="26" height="8" rx="2" fill="#0099FF" opacity="0.15" />

            {/* Clean label */}
            <text x="130" y="178" textAnchor="middle" fill="#16A34A" fontSize="7" fontWeight="bold" fontFamily="system-ui">
              {isFr ? "4 metriques cles" : "4 key metrics"}
            </text>
          </svg>

          <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
            {t.simplifiedCaption}
          </p>
        </div>
      </div>
    </div>
  );
}
