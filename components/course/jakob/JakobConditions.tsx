"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6,12 10,16 18,8" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C9 2 7 4 7 6C5 6 3 8 3 10C3 12 4 13 5 14C4 15 3 17 5 19C7 21 9 20 10 19C11 21 13 21 14 19C15 20 17 21 19 19C21 17 20 15 19 14C20 13 21 12 21 10C21 8 19 6 17 6C17 4 15 2 12 2Z" />
      <path d="M12 2V22" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16,6 14,14 8,16 10,10 16,6" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

export default function JakobConditions() {
  const { language } = useLanguage();

  const conditions = [
    {
      number: 1,
      titleFr: "La valeur est evidente",
      titleEn: "Value is obvious",
      descFr: "Le benefice est visible en moins de 5 secondes",
      descEn: "The benefit is visible in under 5 seconds",
      color: "#22C55E",
      icon: <CheckIcon />,
    },
    {
      number: 2,
      titleFr: "L'apprentissage est minimal",
      titleEn: "Learning is minimal",
      descFr: "Compris en une seule interaction",
      descEn: "Understood in a single interaction",
      color: "#0099FF",
      icon: <BrainIcon />,
    },
    {
      number: 3,
      titleFr: "Le contexte le permet",
      titleEn: "Context allows it",
      descFr: "Audience tolerante, cout d'erreur faible",
      descEn: "Tolerant audience, low error cost",
      color: "#F59E0B",
      icon: <CompassIcon />,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {conditions.map((c) => (
        <div
          key={c.number}
          className="bg-white rounded-2xl shadow-lg p-5 md:p-8 flex items-start gap-5"
          style={{ borderLeft: `4px solid ${c.color}` }}
        >
          {/* Number circle */}
          <div
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: c.color }}
          >
            {c.icon}
          </div>

          <div>
            <h3 className="font-bricolage text-base md:text-lg font-bold text-slate-900 mb-1">
              {language === "fr" ? c.titleFr : c.titleEn}
            </h3>
            <p className="font-montserrat text-sm text-slate-500">
              {language === "fr" ? c.descFr : c.descEn}
            </p>
          </div>
        </div>
      ))}

      {/* Warning callout */}
      <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-5 flex items-start gap-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 mt-0.5"
        >
          <path d="M12 2L2 22H22L12 2Z" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <circle cx="12" cy="18" r="0.5" fill="#F59E0B" />
        </svg>
        <p className="font-montserrat text-sm text-slate-700 leading-relaxed">
          {language === "fr"
            ? "Si une seule condition manque, le risque de frustration est trop eleve."
            : "If even one condition is missing, the risk of frustration is too high."}
        </p>
      </div>
    </div>
  );
}
