"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function FittsThumbZone() {
  const { language } = useLanguage();

  const t = {
    hard: language === "fr" ? "Difficile" : "Hard",
    reachable: language === "fr" ? "Atteignable" : "Reachable",
    easy: language === "fr" ? "Facile" : "Easy",
    note:
      language === "fr"
        ? "Apple et Google recommandent une taille de cible tactile minimale de 44\u00d744 px pour garantir l\u2019accessibilit\u00e9."
        : "Apple and Google recommend a minimum touch target size of 44\u00d744 px to ensure accessibility.",
    minSize: language === "fr" ? "Taille minimale" : "Minimum size",
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
      {/* Phone + annotations container */}
      <div className="relative">
        {/* Phone frame */}
        <div className="relative w-[220px] aspect-[9/19] rounded-[2.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl bg-white">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-20" />

          {/* Hard zone (top 30%) */}
          <div
            className={cn(
              "absolute inset-x-0 top-0 flex items-center justify-center"
            )}
            style={{ height: "30%", background: "rgba(239, 68, 68, 0.2)" }}
          >
            <span className="text-red-600 font-bold text-sm font-montserrat drop-shadow-sm mt-4">
              {t.hard}
            </span>
          </div>

          {/* Reachable zone (middle 30%) */}
          <div
            className="absolute inset-x-0 flex items-center justify-center"
            style={{
              top: "30%",
              height: "30%",
              background: "rgba(245, 158, 11, 0.2)",
            }}
          >
            <span className="text-amber-600 font-bold text-sm font-montserrat drop-shadow-sm">
              {t.reachable}
            </span>
          </div>

          {/* Easy zone (bottom 40%) */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-center"
            style={{ height: "40%", background: "rgba(34, 197, 94, 0.2)" }}
          >
            <span className="text-green-600 font-bold text-sm font-montserrat drop-shadow-sm">
              {t.easy}
            </span>
          </div>

          {/* Zone borders */}
          <div
            className="absolute inset-x-0 h-px bg-red-300"
            style={{ top: "30%" }}
          />
          <div
            className="absolute inset-x-0 h-px bg-amber-300"
            style={{ top: "60%" }}
          />

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gray-800 z-20" />
        </div>

        {/* 44px annotation - right side */}
        <div className="absolute top-[62%] -right-28 flex items-center gap-2">
          {/* Line pointing to phone */}
          <svg width="24" height="2" viewBox="0 0 24 2">
            <line x1="0" y1="1" x2="24" y2="1" stroke="#0099FF" strokeWidth="1.5" strokeDasharray="3 2" />
          </svg>
          {/* 44px box */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-[44px] h-[44px] border-2 border-[#0099FF] rounded-lg flex items-center justify-center bg-[#0099FF]/5">
              <span className="text-[10px] font-bold text-[#0099FF] font-montserrat">
                44px
              </span>
            </div>
            <span className="text-[9px] text-gray-500 font-montserrat whitespace-nowrap">
              {t.minSize}
            </span>
          </div>
        </div>

        {/* Thumb indicator at bottom */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <svg width="60" height="32" viewBox="0 0 60 32" fill="none">
            <ellipse cx="30" cy="22" rx="24" ry="10" fill="#22C55E" opacity="0.15" />
            <path
              d="M20 30 Q20 14, 30 12 Q40 14, 40 30"
              stroke="#22C55E"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
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
