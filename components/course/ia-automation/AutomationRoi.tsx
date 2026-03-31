"use client";

import { useLanguage } from "@/lib/language-context";

export default function AutomationRoi() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "ROI de l'automatisation"
      : "Automation ROI";

  const labels = {
    timeSaved: language === "fr" ? "Temps gagne" : "Time Saved",
    perWeek: language === "fr" ? "heures / semaine" : "hours / week",
    hourlyCost: language === "fr" ? "Cout horaire" : "Hourly Cost",
    perHour: language === "fr" ? "/ heure" : "/ hour",
    annualSavings: language === "fr" ? "Economies annuelles" : "Annual Savings",
    perYear: language === "fr" ? "/ an" : "/ year",
    weeks: language === "fr" ? "52 semaines" : "52 weeks",
    formula:
      language === "fr"
        ? "Temps gagne x Cout horaire x 52 semaines"
        : "Time Saved x Hourly Cost x 52 weeks",
  };

  const totalW = 700;
  const totalH = 360;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <filter id="roi-shadow" x="-4%" y="-4%" width="108%" height="108%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#7C3AED"
              floodOpacity="0.10"
            />
          </filter>
          <linearGradient id="roi-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EDE9FE" />
            <stop offset="100%" stopColor="#DDD6FE" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width={totalW} height={totalH} rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x={totalW / 2}
          y="32"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#6D28D9"
          letterSpacing="0.02em"
        >
          {title.toUpperCase()}
        </text>

        {/* Formula bar */}
        <rect x="60" y="50" width="580" height="30" rx="15" fill="url(#roi-gradient)" />
        <text
          x={totalW / 2}
          y="70"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fontWeight="500"
          fill="#6D28D9"
        >
          {labels.formula}
        </text>

        {/* Three value cards */}
        {/* Time Saved */}
        <rect
          x="50"
          y="110"
          width="170"
          height="150"
          rx="16"
          fill="white"
          stroke="#DDD6FE"
          strokeWidth="1.5"
          filter="url(#roi-shadow)"
        />
        {/* Clock icon */}
        <circle cx="135" cy="148" r="18" fill="#EDE9FE" />
        <circle cx="135" cy="148" r="12" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="135" y1="148" x2="135" y2="140" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="135" y1="148" x2="141" y2="148" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <text
          x="135"
          y="186"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#94A3B8"
          letterSpacing="0.05em"
        >
          {labels.timeSaved.toUpperCase()}
        </text>
        <text
          x="135"
          y="220"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="36"
          fontWeight="800"
          fill="#7C3AED"
        >
          10
        </text>
        <text
          x="135"
          y="242"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fill="#6D28D9"
        >
          {labels.perWeek}
        </text>

        {/* Multiply sign */}
        <text
          x="260"
          y="195"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="28"
          fontWeight="300"
          fill="#C4B5FD"
        >
          x
        </text>

        {/* Hourly Cost */}
        <rect
          x="300"
          y="110"
          width="170"
          height="150"
          rx="16"
          fill="white"
          stroke="#DDD6FE"
          strokeWidth="1.5"
          filter="url(#roi-shadow)"
        />
        {/* Euro/Dollar icon */}
        <circle cx="385" cy="148" r="18" fill="#EDE9FE" />
        <text
          x="385"
          y="154"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          fill="#7C3AED"
        >
          $
        </text>
        <text
          x="385"
          y="186"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#94A3B8"
          letterSpacing="0.05em"
        >
          {labels.hourlyCost.toUpperCase()}
        </text>
        <text
          x="385"
          y="220"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="36"
          fontWeight="800"
          fill="#7C3AED"
        >
          50
        </text>
        <text
          x="385"
          y="242"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fill="#6D28D9"
        >
          {labels.perHour}
        </text>

        {/* Equals arrow */}
        <text
          x="510"
          y="195"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="28"
          fontWeight="300"
          fill="#C4B5FD"
        >
          =
        </text>

        {/* Annual Savings - highlighted card */}
        <rect
          x="545"
          y="110"
          width="170"
          height="150"
          rx="16"
          fill="#7C3AED"
          filter="url(#roi-shadow)"
        />
        {/* Trophy/star icon */}
        <circle cx="630" cy="148" r="18" fill="rgba(255,255,255,0.2)" />
        <text
          x="630"
          y="155"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="20"
          fill="white"
        >
          &#9733;
        </text>
        <text
          x="630"
          y="186"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#DDD6FE"
          letterSpacing="0.05em"
        >
          {labels.annualSavings.toUpperCase()}
        </text>
        <text
          x="630"
          y="222"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="32"
          fontWeight="800"
          fill="white"
        >
          26 000$
        </text>
        <text
          x="630"
          y="242"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fill="#EDE9FE"
        >
          {labels.perYear}
        </text>

        {/* Bottom note */}
        <text
          x={totalW / 2}
          y="300"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fill="#94A3B8"
        >
          10h x 50$ x {labels.weeks} = 26 000$
        </text>

        {/* Arrow pointing to result */}
        <path
          d="M350,310 C350,330 500,340 620,270"
          fill="none"
          stroke="#DDD6FE"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <polygon
          points="624,268 618,278 614,268"
          fill="#DDD6FE"
        />
      </svg>
    </div>
  );
}
