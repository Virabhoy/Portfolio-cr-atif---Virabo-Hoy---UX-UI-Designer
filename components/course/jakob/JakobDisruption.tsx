"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function WavyToStraightIcon() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      stroke="#0099FF"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {/* Wavy line */}
      <path
        d="M4 16C10 8 16 24 22 16C28 8 34 24 40 16"
        strokeOpacity="0.3"
      />
      {/* Straight line */}
      <line x1="4" y1="34" x2="60" y2="34" />
      {/* Arrow at end */}
      <polyline points="52,28 60,34 52,40" />
    </svg>
  );
}

function TangledToCleanIcon() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      stroke="#0099FF"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {/* Tangled */}
      <path
        d="M4 14C12 24 8 8 18 18C22 22 14 28 24 20C28 16 20 10 30 14"
        strokeOpacity="0.3"
      />
      {/* Clean path */}
      <path d="M38 14L46 14L52 24L58 14L62 34" />
      <circle cx="46" cy="34" r="4" fill="#0099FF" fillOpacity="0.15" />
      <circle cx="58" cy="34" r="4" fill="#0099FF" fillOpacity="0.15" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      stroke="#0099FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bulb */}
      <path d="M32 6C24 6 18 12 18 19C18 24 22 27 24 30V34H40V30C42 27 46 24 46 19C46 12 40 6 32 6Z" />
      <line x1="24" y1="38" x2="40" y2="38" />
      <line x1="26" y1="42" x2="38" y2="42" />
      {/* Sparkles */}
      <line x1="8" y1="18" x2="12" y2="18" />
      <line x1="52" y1="18" x2="56" y2="18" />
      <line x1="14" y1="6" x2="17" y2="9" />
      <line x1="50" y1="6" x2="47" y2="9" />
    </svg>
  );
}

export default function JakobDisruption() {
  const { language } = useLanguage();

  const cards = [
    {
      number: "01",
      titleFr: "Reduction massive de friction",
      titleEn: "Massive friction reduction",
      exampleFr: "Le scroll infini vs. la pagination",
      exampleEn: "Infinite scroll vs. pagination",
      icon: <WavyToStraightIcon />,
    },
    {
      number: "02",
      titleFr: "Simplification radicale d'un parcours",
      titleEn: "Radical path simplification",
      exampleFr: "Le drag & drop de fichiers",
      exampleEn: "Drag & drop for files",
      icon: <TangledToCleanIcon />,
    },
    {
      number: "03",
      titleFr: "Revelation d'un besoin latent",
      titleEn: "Revealing a latent need",
      exampleFr: "Les stories sur les reseaux sociaux",
      exampleEn: "Stories on social media",
      icon: <LightbulbIcon />,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.number}
            className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden"
          >
            {/* Large background number */}
            <span className="absolute top-3 right-4 text-5xl font-bold text-[#0099FF]/15 font-bricolage select-none">
              {card.number}
            </span>

            {/* Icon */}
            <div className="mb-5">{card.icon}</div>

            {/* Title */}
            <h3 className="font-bricolage text-base font-bold text-slate-900 mb-3 pr-8">
              {language === "fr" ? card.titleFr : card.titleEn}
            </h3>

            {/* Example */}
            <div className="bg-slate-50 rounded-lg px-3 py-2">
              <p className="font-montserrat text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-600">
                  {language === "fr" ? "Ex : " : "E.g. "}
                </span>
                {language === "fr" ? card.exampleFr : card.exampleEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
