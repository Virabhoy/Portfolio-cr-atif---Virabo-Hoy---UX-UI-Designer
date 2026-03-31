"use client";

import { useLanguage } from "@/lib/language-context";

interface FeedbackType {
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  icon: React.ReactNode;
}

const VisualIcon = () => (
  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    {/* Normal button */}
    <rect x="2" y="12" width="22" height="14" rx="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5" />
    <circle cx="13" cy="19" r="2" fill="#9CA3AF" />
    {/* Arrow */}
    <path d="M28 19 L34 19" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arrowBlue)" />
    {/* Pressed button */}
    <rect x="38" y="14" width="22" height="14" rx="4" fill="#0099FF" stroke="#0066CC" strokeWidth="1.5" />
    <circle cx="49" cy="21" r="2" fill="white" />
    {/* Arrow */}
    <path d="M64 21 L70 21" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
    {/* Success state */}
    <rect x="56" y="12" width="22" height="14" rx="4" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
    <path d="M63 19 L66 22 L71 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Labels */}
    <text x="13" y="38" textAnchor="middle" fill="#6B7280" fontSize="7" fontFamily="system-ui">Normal</text>
    <text x="49" y="38" textAnchor="middle" fill="#0066CC" fontSize="7" fontFamily="system-ui">Press</text>
    <text x="67" y="38" textAnchor="middle" fill="#15803D" fontSize="7" fontFamily="system-ui">OK</text>
    <defs>
      <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="#0099FF" />
      </marker>
    </defs>
  </svg>
);

const SoundIcon = () => (
  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    {/* Speaker */}
    <path d="M20 18 L26 18 L34 12 L34 38 L26 32 L20 32 Z" fill="#0099FF" opacity="0.15" stroke="#0099FF" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Sound waves */}
    <path d="M40 16 C44 20, 44 30, 40 34" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M46 12 C52 18, 52 32, 46 38" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M52 8 C60 16, 60 34, 52 42" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    {/* Label */}
    <text x="40" y="50" textAnchor="middle" fill="#0066CC" fontSize="8" fontFamily="system-ui" fontWeight="500">Notification</text>
  </svg>
);

const HapticIcon = () => (
  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    {/* Phone */}
    <rect x="28" y="4" width="24" height="44" rx="4" fill="white" stroke="#0099FF" strokeWidth="1.5" />
    <rect x="30" y="10" width="20" height="30" rx="1" fill="#0099FF" opacity="0.08" />
    <circle cx="40" cy="46" r="1.5" fill="#0099FF" opacity="0.5" />
    {/* Vibration lines left */}
    <path d="M24 16 C20 20, 20 28, 24 32" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M20 13 C14 19, 14 29, 20 35" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    {/* Vibration lines right */}
    <path d="M56 16 C60 20, 60 28, 56 32" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M60 13 C66 19, 66 29, 60 35" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    {/* Vibration indicator */}
    <text x="40" y="28" textAnchor="middle" fill="#F97316" fontSize="14" fontFamily="system-ui">~</text>
  </svg>
);

const ProgressIcon = () => (
  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    {/* Progress bar background */}
    <rect x="8" y="18" width="64" height="10" rx="5" fill="#E5E7EB" />
    {/* Progress fill */}
    <rect x="8" y="18" width="46" height="10" rx="5" fill="url(#progressGrad)" />
    {/* Percentage */}
    <text x="40" y="42" textAnchor="middle" fill="#0066CC" fontSize="10" fontFamily="system-ui" fontWeight="bold">72%</text>
    {/* Start label */}
    <text x="8" y="14" fill="#9CA3AF" fontSize="7" fontFamily="system-ui">0%</text>
    {/* End label */}
    <text x="72" y="14" textAnchor="end" fill="#9CA3AF" fontSize="7" fontFamily="system-ui">100%</text>
    <defs>
      <linearGradient id="progressGrad" x1="8" y1="23" x2="54" y2="23" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0099FF" />
        <stop offset="100%" stopColor="#0066CC" />
      </linearGradient>
    </defs>
  </svg>
);

const feedbackTypes: FeedbackType[] = [
  {
    titleFr: "Visuel",
    titleEn: "Visual",
    descFr: "Changement d'etat du bouton : normal, presse, succes",
    descEn: "Button state change: normal, pressed, success",
    icon: <VisualIcon />,
  },
  {
    titleFr: "Sonore",
    titleEn: "Auditory",
    descFr: "Son de confirmation pour renforcer l'action",
    descEn: "Confirmation sound to reinforce the action",
    icon: <SoundIcon />,
  },
  {
    titleFr: "Haptique",
    titleEn: "Haptic",
    descFr: "Vibration tactile pour confirmer sans regarder",
    descEn: "Tactile vibration to confirm without looking",
    icon: <HapticIcon />,
  },
  {
    titleFr: "Progressif",
    titleEn: "Progressive",
    descFr: "Barre de progression pour les operations longues",
    descEn: "Progress bar for long operations",
    icon: <ProgressIcon />,
  },
];

export default function FeedbackTypes() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {feedbackTypes.map((type) => (
          <div
            key={type.titleEn}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col items-center"
          >
            {/* Colored top bar */}
            <div className="w-full h-1.5 bg-[#0099FF]" />

            {/* Icon area */}
            <div className="pt-6 pb-3 flex items-center justify-center">
              {type.icon}
            </div>

            {/* Title */}
            <h3 className="font-bricolage text-lg font-bold text-[#0066CC] mb-2">
              {isFr ? type.titleFr : type.titleEn}
            </h3>

            {/* Description */}
            <p className="font-montserrat text-xs text-gray-600 text-center px-4 pb-5 leading-relaxed">
              {isFr ? type.descFr : type.descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
