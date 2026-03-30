"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function JakobBalance() {
  const { language } = useLanguage();

  const jakobItems =
    language === "fr"
      ? ["Stabilite", "Continuite", "Cognition"]
      : ["Stability", "Continuity", "Cognition"];

  const disruptionItems =
    language === "fr"
      ? ["Transformation", "Valeur", "Evolution"]
      : ["Transformation", "Value", "Evolution"];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Desktop: SVG balance */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 700 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          {/* Pivot stand */}
          <line
            x1="350"
            y1="160"
            x2="350"
            y2="240"
            stroke="#CBD5E1"
            strokeWidth="3"
          />
          <rect x="320" y="236" width="60" height="8" rx="4" fill="#CBD5E1" />

          {/* Pivot triangle */}
          <polygon points="350,140 336,160 364,160" fill="#0099FF" />

          {/* Beam */}
          <line
            x1="80"
            y1="140"
            x2="620"
            y2="140"
            stroke="#1E293B"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Left pan strings */}
          <line
            x1="80"
            y1="140"
            x2="110"
            y2="180"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <line
            x1="220"
            y1="140"
            x2="190"
            y2="180"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* Left pan */}
          <path
            d="M100 180 Q150 200 200 180"
            stroke="#0066CC"
            strokeWidth="2"
            fill="#0066CC"
            fillOpacity="0.08"
          />

          {/* Left circle with shield */}
          <circle cx="150" cy="60" r="36" fill="#0066CC" />
          <path
            d="M150 40 L150 40 C158 42 164 44 170 44 L170 56 C170 68 162 76 150 80 C138 76 130 68 130 56 L130 44 C136 44 142 42 150 40Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polyline
            points="142,58 148,64 158,52"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Left label */}
          <text
            x="150"
            y="115"
            textAnchor="middle"
            className="font-bricolage"
            fontSize="11"
            fontWeight="700"
            fill="#0066CC"
          >
            {language === "fr" ? "LOI DE JAKOB" : "JAKOB'S LAW"}
          </text>

          {/* Right pan strings */}
          <line
            x1="480"
            y1="140"
            x2="510"
            y2="180"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <line
            x1="620"
            y1="140"
            x2="590"
            y2="180"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* Right pan */}
          <path
            d="M500 180 Q550 200 600 180"
            stroke="#E8613C"
            strokeWidth="2"
            fill="#E8613C"
            fillOpacity="0.08"
          />

          {/* Right circle with flame */}
          <circle cx="550" cy="60" r="36" fill="#E8613C" />
          <path
            d="M550 78 C540 78 534 70 534 62 C534 54 542 48 542 40 C544 46 548 48 550 44 C552 48 556 46 558 40 C558 48 566 54 566 62 C566 70 560 78 550 78Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Right label */}
          <text
            x="550"
            y="115"
            textAnchor="middle"
            className="font-bricolage"
            fontSize="11"
            fontWeight="700"
            fill="#E8613C"
          >
            {language === "fr" ? "DESIGN DISRUPTIF" : "DISRUPTIVE DESIGN"}
          </text>

          {/* Center label */}
          <rect x="300" y="260" width="100" height="28" rx="14" fill="#0099FF" />
          <text
            x="350"
            y="279"
            textAnchor="middle"
            className="font-bricolage"
            fontSize="11"
            fontWeight="600"
            fill="white"
          >
            DESIGNER UX
          </text>

          {/* Left sub-description */}
          <text
            x="150"
            y="210"
            textAnchor="middle"
            className="font-montserrat"
            fontSize="9"
            fill="#64748B"
          >
            {language === "fr"
              ? "Rassurer pour mieux guider"
              : "Reassure to better guide"}
          </text>
          {jakobItems.map((item, i) => (
            <text
              key={item}
              x={110 + i * 45}
              y="228"
              textAnchor="middle"
              className="font-montserrat"
              fontSize="8"
              fill="#0066CC"
            >
              {item}
            </text>
          ))}

          {/* Right sub-description */}
          <text
            x="550"
            y="210"
            textAnchor="middle"
            className="font-montserrat"
            fontSize="9"
            fill="#64748B"
          >
            {language === "fr"
              ? "Innover avec un but"
              : "Innovate with purpose"}
          </text>
          {disruptionItems.map((item, i) => (
            <text
              key={item}
              x={500 + i * 50}
              y="228"
              textAnchor="middle"
              className="font-montserrat"
              fontSize="8"
              fill="#E8613C"
            >
              {item}
            </text>
          ))}
        </svg>
      </div>

      {/* Mobile: stacked vertical layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {/* Jakob side */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#0066CC] flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L12 2C15 3 17 4 19 4L19 11C19 16 16 19 12 22C8 19 5 16 5 11L5 4C7 4 9 3 12 2Z" />
              <polyline points="9,12 11,14 15,10" />
            </svg>
          </div>
          <p className="font-bricolage text-sm font-bold text-[#0066CC] uppercase tracking-wide">
            {language === "fr" ? "Loi de Jakob" : "Jakob's Law"}
          </p>
          <p className="font-montserrat text-xs text-slate-500">
            {language === "fr"
              ? "Rassurer pour mieux guider"
              : "Reassure to better guide"}
          </p>
          <div className="flex gap-2">
            {jakobItems.map((item) => (
              <span
                key={item}
                className="font-montserrat text-xs text-[#0066CC] bg-[#0066CC]/10 px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pivot */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="font-bricolage text-xs font-semibold text-white bg-[#0099FF] px-4 py-1.5 rounded-full">
            DESIGNER UX
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Disruption side */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#E8613C] flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22C9 22 6 18 6 13C6 8 10 5 10 2C11 5 13 6 14 3C15 6 18 8 18 13C18 18 15 22 12 22Z" />
            </svg>
          </div>
          <p className="font-bricolage text-sm font-bold text-[#E8613C] uppercase tracking-wide">
            {language === "fr" ? "Design Disruptif" : "Disruptive Design"}
          </p>
          <p className="font-montserrat text-xs text-slate-500">
            {language === "fr"
              ? "Innover avec un but"
              : "Innovate with purpose"}
          </p>
          <div className="flex gap-2">
            {disruptionItems.map((item) => (
              <span
                key={item}
                className="font-montserrat text-xs text-[#E8613C] bg-[#E8613C]/10 px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
