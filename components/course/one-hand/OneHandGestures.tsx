"use client";

import { useLanguage } from "@/lib/language-context";

interface GestureCard {
  labelFr: string;
  labelEn: string;
  descFr: string;
  descEn: string;
  icon: React.ReactNode;
}

const TapIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Finger tip */}
    <circle cx="28" cy="28" r="8" fill="#0099FF" opacity="0.9" />
    {/* Ripple rings */}
    <circle cx="28" cy="28" r="14" stroke="#0099FF" strokeWidth="1.5" opacity="0.4" />
    <circle cx="28" cy="28" r="20" stroke="#0099FF" strokeWidth="1" opacity="0.2" />
  </svg>
);

const SwipeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Swipe line */}
    <line x1="14" y1="28" x2="38" y2="28" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
    {/* Arrow head */}
    <polyline points="34,22 42,28 34,34" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Dot at start */}
    <circle cx="14" cy="28" r="4" fill="#0099FF" opacity="0.4" />
    {/* Motion lines */}
    <line x1="10" y1="20" x2="16" y2="20" stroke="#0099FF" strokeWidth="1" opacity="0.3" />
    <line x1="8" y1="28" x2="10" y2="28" stroke="#0099FF" strokeWidth="1" opacity="0.3" />
    <line x1="10" y1="36" x2="16" y2="36" stroke="#0099FF" strokeWidth="1" opacity="0.3" />
  </svg>
);

const LongPressIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Center dot */}
    <circle cx="28" cy="28" r="6" fill="#0099FF" />
    {/* Expanding rings (pulse effect) */}
    <circle cx="28" cy="28" r="12" stroke="#0099FF" strokeWidth="2" opacity="0.5" strokeDasharray="3 2" />
    <circle cx="28" cy="28" r="18" stroke="#0099FF" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 3" />
    <circle cx="28" cy="28" r="24" stroke="#0099FF" strokeWidth="1" opacity="0.15" strokeDasharray="5 4" />
    {/* Clock indicator */}
    <path d="M28 18 L28 22" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M28 22 L32 26" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const PullRefreshIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Downward arrow */}
    <line x1="28" y1="12" x2="28" y2="38" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
    <polyline points="20,32 28,42 36,32" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Refresh arc */}
    <path
      d="M18 18 A14 14 0 0 1 38 18"
      stroke="#0099FF"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      fill="none"
      opacity="0.35"
    />
    {/* Small dot at top */}
    <circle cx="28" cy="12" r="3" fill="#0099FF" opacity="0.4" />
  </svg>
);

const gestures: GestureCard[] = [
  {
    labelFr: "Tap",
    labelEn: "Tap",
    descFr: "Geste le plus simple et precis",
    descEn: "Simplest and most precise gesture",
    icon: <TapIcon />,
  },
  {
    labelFr: "Swipe",
    labelEn: "Swipe",
    descFr: "Arc naturel du pouce, ideal a une main",
    descEn: "Natural thumb arc, ideal one-handed",
    icon: <SwipeIcon />,
  },
  {
    labelFr: "Appui long",
    labelEn: "Long Press",
    descFr: "Actions secondaires sans changer de vue",
    descEn: "Secondary actions without changing view",
    icon: <LongPressIcon />,
  },
  {
    labelFr: "Tirer pour rafraichir",
    labelEn: "Pull to Refresh",
    descFr: "Geste vertical devenu universel",
    descEn: "Vertical gesture that became universal",
    icon: <PullRefreshIcon />,
  },
];

export default function OneHandGestures() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Gestes adaptes a une main"
        : "One-Hand Friendly Gestures",
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center">
        {t.title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {gestures.map((gesture) => (
          <div
            key={gesture.labelEn}
            className="flex flex-col items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#0099FF]/5 flex items-center justify-center">
              {gesture.icon}
            </div>

            {/* Label */}
            <span className="font-bricolage font-bold text-sm md:text-base text-gray-800">
              {language === "fr" ? gesture.labelFr : gesture.labelEn}
            </span>

            {/* Description */}
            <span className="font-montserrat text-xs text-gray-500 text-center leading-relaxed">
              {language === "fr" ? gesture.descFr : gesture.descEn}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
