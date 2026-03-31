"use client";

import { useLanguage } from "@/lib/language-context";

interface PhoneSize {
  year: string;
  model: string;
  size: string;
  width: number;
  height: number;
  greenPercent: number;
}

const phones: PhoneSize[] = [
  { year: "2013", model: "iPhone 5", size: "4\"", width: 60, height: 120, greenPercent: 60 },
  { year: "2018", model: "iPhone X", size: "5.8\"", width: 72, height: 156, greenPercent: 42 },
  { year: "2024", model: "iPhone 16 Pro Max", size: "6.9\"", width: 84, height: 184, greenPercent: 30 },
];

export default function ScreenSizeEvolution() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Evolution de la taille des ecrans"
        : "Screen Size Evolution",
    easyZone: language === "fr" ? "Zone facile" : "Easy zone",
    note:
      language === "fr"
        ? "La zone confortable du pouce a diminue de 60% a 30% de l'ecran en 11 ans."
        : "The thumb's comfortable zone shrank from 60% to 30% of the screen in 11 years.",
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center">
        {t.title}
      </h3>

      {/* Phones side by side */}
      <div className="flex items-end justify-center gap-6 md:gap-10">
        {phones.map((phone) => {
          const greenHeight = (phone.height * phone.greenPercent) / 100;
          const nonGreenHeight = phone.height - greenHeight;

          return (
            <div key={phone.year} className="flex flex-col items-center gap-3">
              {/* Year */}
              <span className="font-bricolage font-bold text-[#0066CC] text-sm md:text-base">
                {phone.year}
              </span>

              {/* Phone SVG */}
              <svg
                viewBox={`0 0 ${phone.width + 8} ${phone.height + 8}`}
                width={phone.width + 8}
                height={phone.height + 8}
              >
                {/* Phone frame */}
                <rect
                  x="2"
                  y="2"
                  width={phone.width + 4}
                  height={phone.height + 4}
                  rx="10"
                  ry="10"
                  fill="white"
                  stroke="#374151"
                  strokeWidth="2.5"
                />

                <clipPath id={`clip-${phone.year}`}>
                  <rect
                    x="4"
                    y="4"
                    width={phone.width}
                    height={phone.height}
                    rx="8"
                    ry="8"
                  />
                </clipPath>

                <g clipPath={`url(#clip-${phone.year})`}>
                  {/* Non-green area (red/yellow) */}
                  <rect
                    x="4"
                    y="4"
                    width={phone.width}
                    height={nonGreenHeight}
                    fill="rgba(239, 68, 68, 0.12)"
                  />
                  {/* Green easy zone */}
                  <rect
                    x="4"
                    y={4 + nonGreenHeight}
                    width={phone.width}
                    height={greenHeight}
                    fill="rgba(34, 197, 94, 0.25)"
                  />
                  {/* Divider */}
                  <line
                    x1="4"
                    y1={4 + nonGreenHeight}
                    x2={4 + phone.width}
                    y2={4 + nonGreenHeight}
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                  />
                </g>

                {/* Percentage label */}
                <text
                  x={(phone.width + 8) / 2}
                  y={4 + nonGreenHeight + greenHeight / 2 + 4}
                  textAnchor="middle"
                  fill="#16a34a"
                  fontWeight="700"
                  fontSize={phone.width < 70 ? "9" : "10"}
                  fontFamily="Montserrat, sans-serif"
                >
                  {phone.greenPercent}%
                </text>
              </svg>

              {/* Model & size */}
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">
                  {phone.model}
                </span>
                <span className="font-montserrat text-xs text-gray-500">
                  {phone.size}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow showing trend */}
      <div className="flex items-center gap-3">
        <svg width="200" height="24" viewBox="0 0 200 24">
          <defs>
            <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <line x1="10" y1="12" x2="180" y2="12" stroke="url(#arrow-grad)" strokeWidth="2" />
          <polygon points="180,6 194,12 180,18" fill="#ef4444" />
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-xs font-montserrat text-gray-600">{t.easyZone}</span>
      </div>

      {/* Note */}
      <div className="bg-[#F5F5F5] rounded-xl p-4 max-w-sm">
        <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
          {t.note}
        </p>
      </div>
    </div>
  );
}
