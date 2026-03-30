"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function BrokenBarIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 mx-auto mb-4"
    >
      {/* Left bar segment */}
      <rect x="10" y="30" width="22" height="8" rx="2" fill="#1a1a1a" />
      {/* Zigzag break */}
      <path
        d="M32 30 L36 38 L40 30 L44 38 L48 30"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 38 L36 30 L40 38 L44 30 L48 38"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
      {/* Right bar segment */}
      <rect x="48" y="30" width="22" height="8" rx="2" fill="#1a1a1a" />
      {/* Shatter fragments */}
      <path d="M38 24 L40 20 L42 25" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.5" />
      <path d="M36 44 L38 48 L40 43" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.5" />
      {/* Small crack lines */}
      <line x1="34" y1="26" x2="36" y2="22" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
      <line x1="44" y1="42" x2="46" y2="46" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function SCurveIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 mx-auto mb-4"
    >
      {/* Smooth S-curve going up */}
      <path
        d="M12 62 C20 62, 28 58, 34 50 C40 42, 46 22, 58 18 C62 16, 66 16, 68 16"
        stroke="#E8613C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow tip at end */}
      <path
        d="M64 12 L68 16 L64 20"
        stroke="#E8613C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Subtle gradient dots along path */}
      <circle cx="20" cy="60" r="2" fill="#E8613C" opacity="0.3" />
      <circle cx="34" cy="50" r="2" fill="#E8613C" opacity="0.5" />
      <circle cx="48" cy="28" r="2" fill="#E8613C" opacity="0.7" />
      <circle cx="60" cy="18" r="2.5" fill="#E8613C" opacity="1" />
    </svg>
  );
}

export default function JakobRuptureVsDisruption() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const title = isFr
    ? "Disruption \u2260 Rupture Brutale"
    : "Disruption \u2260 Brutal Break";

  const leftTitle = isFr ? "La Rupture" : "The Break";
  const rightTitle = isFr ? "La Disruption" : "The Disruption";

  const leftPoints = isFr
    ? [
        "Casse les rep\u00e8res",
        "Impose un nouveau mod\u00e8le",
        "Est forc\u00e9e",
        "Co\u00fbteuse cognitivement",
      ]
    : [
        "Breaks reference points",
        "Imposes a new model",
        "Is forced",
        "Cognitively costly",
      ];

  const rightPoints = isFr
    ? [
        "D\u00e9place progressivement les rep\u00e8res",
        "Propose un meilleur mod\u00e8le",
        "Est accept\u00e9e",
        "Justifi\u00e9e par la valeur",
      ]
    : [
        "Gradually shifts reference points",
        "Proposes a better model",
        "Is accepted",
        "Justified by value",
      ];

  const callout = isFr
    ? "Une rupture peut \u00eatre disruptive. Une disruption n\u2019est jamais brutale."
    : "A break can be disruptive. A disruption is never brutal.";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Title */}
      <div className="px-8 pt-8 pb-4">
        <h3 className="font-bricolage text-2xl md:text-3xl font-bold text-center text-[#1a1a1a]">
          {title}
        </h3>
      </div>

      {/* Two-panel comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
        {/* Vertical divider (visible on md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

        {/* LEFT: La Rupture */}
        <div className="p-8">
          <BrokenBarIcon />
          <h4 className="font-bricolage text-xl font-bold text-[#1a1a1a] text-center mb-6">
            {leftTitle}
          </h4>
          <ul className="space-y-3">
            {leftPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-montserrat text-sm md:text-base text-gray-600"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal divider (visible on mobile only) */}
        <div className="md:hidden h-px bg-gray-200 mx-8" />

        {/* RIGHT: La Disruption */}
        <div className="p-8">
          <SCurveIcon />
          <h4 className="font-bricolage text-xl font-bold text-[#E8613C] text-center mb-6">
            {rightTitle}
          </h4>
          <ul className="space-y-3">
            {rightPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-montserrat text-sm md:text-base text-[#1a1a1a]"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8613C] shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width callout */}
      <div className="bg-[var(--muted)] px-8 py-6">
        <p className="font-montserrat text-sm md:text-base text-center text-[#1a1a1a] font-medium italic">
          {callout}
        </p>
      </div>
    </div>
  );
}
