"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function FittsFormula() {
  const { language } = useLanguage();

  const t = {
    distanceLabel:
      language === "fr"
        ? "D = Distance jusqu\u2019\u00e0 la cible"
        : "D = Distance to the target",
    widthLabel:
      language === "fr"
        ? "W = Largeur de la cible"
        : "W = Width of the target",
    summaryLine:
      language === "fr"
        ? "\u2191 Distance + \u2193 Taille = \u2191 Temps"
        : "\u2191 Distance + \u2193 Size = \u2191 Time",
    summaryDetail:
      language === "fr"
        ? "Plus la cible est petite et \u00e9loign\u00e9e, plus il faut de temps pour l\u2019atteindre."
        : "The smaller and farther the target, the longer it takes to reach it.",
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Formula */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-2xl md:text-4xl font-montserrat select-none">
          <span className="font-bold text-[#0099FF]">MT</span>
          <span className="text-gray-400">=</span>
          <span className="text-gray-500">a</span>
          <span className="text-gray-400">+</span>
          <span className="text-gray-500">b</span>
          <span className="text-gray-400 mx-1">&times;</span>
          <span className="italic text-gray-700">
            log<sub className="text-sm">2</sub>
          </span>
          <span className="text-gray-400">(</span>
          <span className="text-lg md:text-2xl text-gray-500">
            2
          </span>
          <span
            className={cn(
              "inline-flex items-center justify-center",
              "bg-[#0099FF] text-white rounded-full",
              "px-3 py-1 text-lg md:text-2xl font-bold"
            )}
          >
            D
          </span>
          <span className="text-gray-400 mx-1">/</span>
          <span
            className={cn(
              "inline-flex items-center justify-center",
              "bg-[#0066CC] text-white rounded-full",
              "px-3 py-1 text-lg md:text-2xl font-bold"
            )}
          >
            W
          </span>
          <span className="text-gray-400">)</span>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0099FF] shrink-0" />
            <span className="text-sm text-gray-700 font-montserrat">
              {t.distanceLabel}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0066CC] shrink-0" />
            <span className="text-sm text-gray-700 font-montserrat">
              {t.widthLabel}
            </span>
          </div>
        </div>

        {/* Summary box */}
        <div className="mt-8 bg-[#F5F5F5] rounded-xl p-5">
          <p className="text-center text-lg md:text-xl font-bold text-gray-800 font-montserrat tracking-wide">
            {t.summaryLine}
          </p>
          <p className="text-center text-sm text-gray-500 mt-2 font-montserrat">
            {t.summaryDetail}
          </p>
        </div>
      </div>
    </div>
  );
}
