"use client";

import { useLanguage } from "@/lib/language-context";

export default function AffordanceVsSignifier() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: {
      fr: "Affordance vs Signifiant",
      en: "Affordance vs Signifier",
    },
    affordance: {
      fr: "Affordance",
      en: "Affordance",
    },
    signifier: {
      fr: "Signifiant",
      en: "Signifier",
    },
    affordanceDesc: {
      fr: "Propriete physique",
      en: "Physical property",
    },
    signifierDesc: {
      fr: "Signal perceptible",
      en: "Perceptual signal",
    },
    affordanceDetail: {
      fr: "Existe independamment de l'utilisateur",
      en: "Exists independently of the user",
    },
    signifierDetail: {
      fr: "Communique l'action possible",
      en: "Communicates the possible action",
    },
    arrow: {
      fr: "Outil du designer",
      en: "Designer's tool",
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center mb-8 text-gray-700">
        {t.title[lang]}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center">
        {/* Affordance card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-gray-400 flex flex-col items-center gap-5">
          <h4 className="font-bricolage text-xl font-bold text-gray-700">
            {t.affordance[lang]}
          </h4>

          {/* Chair / flat surface icon */}
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Chair seat - flat surface */}
            <rect
              x="20"
              y="35"
              width="80"
              height="8"
              rx="3"
              fill="#9CA3AF"
            />
            {/* Chair back */}
            <rect
              x="20"
              y="10"
              width="8"
              height="33"
              rx="3"
              fill="#9CA3AF"
            />
            {/* Chair legs */}
            <rect x="24" y="43" width="6" height="30" rx="2" fill="#9CA3AF" />
            <rect x="90" y="43" width="6" height="30" rx="2" fill="#9CA3AF" />
            {/* Sitting person silhouette hint */}
            <circle cx="60" cy="22" r="8" fill="#D1D5DB" />
            <path
              d="M48 35 C48 28, 72 28, 72 35"
              stroke="#D1D5DB"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* "Exists physically" label */}
            <text
              x="60"
              y="92"
              textAnchor="middle"
              className="font-montserrat"
              fill="#6B7280"
              fontSize="10"
            >
              {t.affordanceDetail[lang]}
            </text>
          </svg>

          <div className="text-center">
            <p className="font-montserrat text-sm font-semibold text-gray-600">
              {t.affordanceDesc[lang]}
            </p>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex flex-col items-center justify-center px-4 py-2 md:py-0">
          {/* Horizontal arrow for desktop */}
          <svg
            width="100"
            height="50"
            viewBox="0 0 100 50"
            fill="none"
            className="hidden md:block"
          >
            <defs>
              <marker
                id="arrowhead-h"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#0099FF" />
              </marker>
            </defs>
            <line
              x1="5"
              y1="25"
              x2="90"
              y2="25"
              stroke="#0099FF"
              strokeWidth="2"
              strokeDasharray="6 4"
              markerEnd="url(#arrowhead-h)"
            />
            <text
              x="50"
              y="18"
              textAnchor="middle"
              className="font-montserrat"
              fill="#0099FF"
              fontSize="10"
              fontWeight="600"
            >
              {t.arrow[lang]}
            </text>
          </svg>
          {/* Vertical arrow for mobile */}
          <svg
            width="50"
            height="60"
            viewBox="0 0 50 60"
            fill="none"
            className="block md:hidden"
          >
            <defs>
              <marker
                id="arrowhead-v"
                markerWidth="8"
                markerHeight="6"
                refX="3"
                refY="6"
                orient="auto"
              >
                <polygon points="0 0, 6 0, 3 6" fill="#0099FF" />
              </marker>
            </defs>
            <line
              x1="25"
              y1="5"
              x2="25"
              y2="50"
              stroke="#0099FF"
              strokeWidth="2"
              strokeDasharray="6 4"
              markerEnd="url(#arrowhead-v)"
            />
            <text
              x="25"
              y="35"
              textAnchor="middle"
              className="font-montserrat"
              fill="#0099FF"
              fontSize="9"
              fontWeight="600"
              transform="rotate(-90, 25, 35)"
            >
              {t.arrow[lang]}
            </text>
          </svg>
        </div>

        {/* Signifier card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-[#0099FF] flex flex-col items-center gap-5">
          <h4 className="font-bricolage text-xl font-bold text-[#0099FF]">
            {t.signifier[lang]}
          </h4>

          {/* Button with shadow icon */}
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Button shadow */}
            <rect
              x="22"
              y="32"
              width="76"
              height="40"
              rx="10"
              fill="#0066CC"
            />
            {/* Button face */}
            <rect
              x="20"
              y="28"
              width="76"
              height="40"
              rx="10"
              fill="#0099FF"
            />
            {/* Button highlight gradient */}
            <rect
              x="24"
              y="32"
              width="68"
              height="16"
              rx="6"
              fill="white"
              opacity="0.15"
            />
            {/* Button label */}
            <text
              x="58"
              y="53"
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="700"
              className="font-montserrat"
            >
              Click
            </text>
            {/* Cursor pointer */}
            <g transform="translate(78, 52)">
              <path
                d="M0 0 L0 16 L4 12 L8 20 L11 18 L7 10 L12 10 Z"
                fill="white"
                stroke="#0066CC"
                strokeWidth="1"
              />
            </g>
            {/* "Communicates action" label */}
            <text
              x="60"
              y="92"
              textAnchor="middle"
              className="font-montserrat"
              fill="#6B7280"
              fontSize="10"
            >
              {t.signifierDetail[lang]}
            </text>
          </svg>

          <div className="text-center">
            <p className="font-montserrat text-sm font-semibold text-[#0066CC]">
              {t.signifierDesc[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
