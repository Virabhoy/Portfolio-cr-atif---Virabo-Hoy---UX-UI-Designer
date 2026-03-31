"use client";

import { useLanguage } from "@/lib/language-context";

interface LoadType {
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  descFr: string;
  descEn: string;
  color: string;
  colorLight: string;
  highlight: boolean;
  icon: React.ReactNode;
}

const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 36 V22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 22 C6 22, 5 16, 7 12 C4 8, 9 4, 13 5 C14 2, 22 2, 24 5 C28 3, 33 6, 31 10 C34 14, 33 22, 28 22" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M14 22 C14 27, 20 27, 20 22" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M26 22 C26 27, 20 27, 20 22" stroke="white" strokeWidth="1.5" fill="none" />
    {/* Complexity dots */}
    <circle cx="14" cy="13" r="1.5" fill="white" opacity="0.7" />
    <circle cx="20" cy="10" r="1.5" fill="white" opacity="0.7" />
    <circle cx="26" cy="13" r="1.5" fill="white" opacity="0.7" />
  </svg>
);

const NoiseIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    {/* Zigzag noise lines */}
    <path d="M6 12 L10 8 L14 16 L18 6 L22 18 L26 4 L30 14 L34 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* X marks for bad design */}
    <path d="M12 24 L16 28 M16 24 L12 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 24 L26 28 M26 24 L22 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Warning triangle */}
    <path d="M32 34 L38 24 L26 24 Z" stroke="white" strokeWidth="1.5" fill="none" />
    <text x="32" y="32" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">!</text>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    {/* Bulb */}
    <circle cx="20" cy="16" r="10" stroke="white" strokeWidth="2" fill="none" />
    <path d="M16 26 L16 30 C16 32, 24 32, 24 30 L24 26" stroke="white" strokeWidth="2" fill="none" />
    {/* Filament */}
    <path d="M17 16 L20 20 L23 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Rays */}
    <line x1="20" y1="2" x2="20" y2="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="6" x2="28" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="6" x2="12" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="16" x2="32" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="16" x2="8" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Base lines */}
    <line x1="17" y1="28" x2="23" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const loadTypes: LoadType[] = [
  {
    titleFr: "Intrinseque",
    titleEn: "Intrinsic",
    subtitleFr: "Complexite du contenu",
    subtitleEn: "Content complexity",
    descFr: "La difficulte inherente a la tache. On ne peut pas la supprimer, seulement la gerer.",
    descEn: "The inherent difficulty of the task. Cannot be removed, only managed.",
    color: "#0099FF",
    colorLight: "#E0F2FE",
    highlight: false,
    icon: <BrainIcon />,
  },
  {
    titleFr: "Extrinseque",
    titleEn: "Extraneous",
    subtitleFr: "Mauvais design",
    subtitleEn: "Bad design",
    descFr: "Le bruit ajoute par un design confus. Celle que les designers doivent eliminer.",
    descEn: "Noise added by confusing design. The one designers must eliminate.",
    color: "#DC2626",
    colorLight: "#FEE2E2",
    highlight: true,
    icon: <NoiseIcon />,
  },
  {
    titleFr: "Pertinente",
    titleEn: "Germane",
    subtitleFr: "Apprentissage",
    subtitleEn: "Learning",
    descFr: "L'effort mental positif qui construit la comprehension et les schemas mentaux.",
    descEn: "Positive mental effort that builds understanding and mental schemas.",
    color: "#16A34A",
    colorLight: "#DCFCE7",
    highlight: false,
    icon: <LightbulbIcon />,
  },
];

export default function CognitiveLoadTypes() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {loadTypes.map((type) => (
          <div
            key={type.titleEn}
            className={`rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col ${
              type.highlight ? "ring-2 ring-[#DC2626] ring-offset-2" : ""
            }`}
          >
            {/* Colored header with icon */}
            <div
              className="py-6 flex flex-col items-center gap-2"
              style={{ backgroundColor: type.color }}
            >
              {type.icon}
              <h3 className="font-bricolage text-lg font-bold text-white">
                {isFr ? type.titleFr : type.titleEn}
              </h3>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col items-center text-center flex-1">
              <span
                className="font-montserrat text-sm font-semibold mb-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: type.colorLight, color: type.color }}
              >
                {isFr ? type.subtitleFr : type.subtitleEn}
              </span>
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed mt-2">
                {isFr ? type.descFr : type.descEn}
              </p>

              {type.highlight && (
                <div className="mt-3 px-3 py-1.5 bg-[#FEE2E2] rounded-lg">
                  <span className="font-montserrat text-xs font-bold text-[#DC2626]">
                    {isFr ? "A eliminer en priorite" : "Eliminate first"}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center font-montserrat text-xs text-gray-400 mt-4">
        {isFr ? "Theorie de la charge cognitive (Sweller, 1988)" : "Cognitive Load Theory (Sweller, 1988)"}
      </p>
    </div>
  );
}
