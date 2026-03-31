"use client";

import { useLanguage } from "@/lib/language-context";

interface ItemGroup {
  count: number;
  labelFr: string;
  labelEn: string;
  color: string;
  colorLight: string;
  inRange: boolean;
}

const groups: ItemGroup[] = [
  {
    count: 5,
    labelFr: "Facile",
    labelEn: "Easy",
    color: "#16A34A",
    colorLight: "#DCFCE7",
    inRange: true,
  },
  {
    count: 7,
    labelFr: "Ideal",
    labelEn: "Ideal",
    color: "#0099FF",
    colorLight: "#E0F2FE",
    inRange: true,
  },
  {
    count: 9,
    labelFr: "Maximum",
    labelEn: "Maximum",
    color: "#F97316",
    colorLight: "#FFEDD5",
    inRange: true,
  },
  {
    count: 12,
    labelFr: "Trop",
    labelEn: "Too many",
    color: "#DC2626",
    colorLight: "#FEE2E2",
    inRange: false,
  },
];

export default function MillerMagicNumber() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Title badge */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#0099FF] text-white font-bricolage font-bold text-lg px-6 py-2 rounded-full shadow-md">
          7 &plusmn; 2
        </div>
      </div>

      <div className="space-y-5">
        {groups.map((group) => (
          <div
            key={group.count}
            className="flex items-center gap-4 md:gap-6"
          >
            {/* Count label */}
            <div className="w-16 shrink-0 text-right">
              <span
                className="font-bricolage text-2xl font-bold"
                style={{ color: group.color }}
              >
                {group.count}
              </span>
            </div>

            {/* Items row */}
            <div className="flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                {Array.from({ length: group.count }).map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shadow-sm text-xs font-bold font-montserrat"
                    style={{
                      backgroundColor: group.colorLight,
                      color: group.color,
                      border: `1.5px solid ${group.color}`,
                    }}
                  >
                    {i + 1}
                  </div>
                ))}

                {/* In-range bracket indicator */}
                {group.inRange && (
                  <svg className="ml-2 shrink-0" width="20" height="28" viewBox="0 0 20 28" fill="none">
                    <path
                      d="M4 4 L12 4 L12 24 L4 24"
                      stroke={group.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path d="M12 14 L18 14" stroke={group.color} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}

                {/* X mark for too many */}
                {!group.inRange && (
                  <svg className="ml-2 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
                    <path d="M8 8 L16 16 M16 8 L8 16" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </div>

            {/* Status label */}
            <div className="w-20 shrink-0">
              <span
                className="font-montserrat text-sm font-semibold px-2.5 py-1 rounded-full inline-block"
                style={{
                  backgroundColor: group.colorLight,
                  color: group.color,
                }}
              >
                {isFr ? group.labelFr : group.labelEn}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 7 +/- 2 range bracket */}
      <div className="mt-6 flex justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" fill="none" className="max-w-full">
          {/* Bracket spanning the 5-9 range */}
          <path d="M30 8 L30 20 L270 20 L270 8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="150" y1="20" x2="150" y2="32" stroke="#0099FF" strokeWidth="2" />
          <text x="150" y="38" textAnchor="middle" fill="#0066CC" fontSize="11" fontWeight="bold" fontFamily="system-ui">
            {isFr ? "Zone optimale (7\u00B12)" : "Optimal zone (7\u00B12)"}
          </text>
        </svg>
      </div>

      <p className="text-center font-montserrat text-xs text-gray-400 mt-3">
        {isFr ? "George Miller (1956) — Le nombre magique" : "George Miller (1956) — The magical number"}
      </p>
    </div>
  );
}
