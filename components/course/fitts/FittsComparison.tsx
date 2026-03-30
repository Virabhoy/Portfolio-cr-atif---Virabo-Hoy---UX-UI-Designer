"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function FittsComparison() {
  const { language } = useLanguage();

  const t = {
    bad: language === "fr" ? "Frustrant" : "Frustrating",
    good: language === "fr" ? "Fluide" : "Smooth",
    badCaption:
      language === "fr"
        ? "Un bouton minuscule et \u00e9loign\u00e9 du pouce"
        : "A tiny button far from the thumb",
    goodCaption:
      language === "fr"
        ? "Un bouton large et accessible au pouce"
        : "A wide button accessible to the thumb",
    modalTitle:
      language === "fr" ? "Supprimer le compte ?" : "Delete account?",
    modalBody:
      language === "fr"
        ? "\u00cates-vous s\u00fbr ?"
        : "Are you sure?",
    confirm: language === "fr" ? "Confirmer" : "Confirm",
    vs: "vs",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      {/* BAD card */}
      <div
        className={cn(
          "bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#DC2626]",
          "flex flex-col items-center gap-6"
        )}
      >
        <h3 className="font-bricolage text-xl font-bold text-[#DC2626]">
          {t.bad}
        </h3>

        {/* Phone mockup */}
        <div className="relative w-[180px] aspect-[9/16] max-h-[300px] rounded-[2rem] border-4 border-gray-800 bg-gray-50 overflow-hidden">
          {/* Status bar */}
          <div className="h-6 bg-gray-200 flex items-center justify-center">
            <div className="w-12 h-1.5 rounded-full bg-gray-400" />
          </div>

          {/* Modal overlay */}
          <div className="absolute inset-0 top-6 bg-black/30 flex items-start justify-center pt-8">
            <div className="bg-white rounded-xl w-[85%] p-3 relative shadow-xl">
              {/* Tiny X button - far from thumb */}
              <button
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[8px] text-gray-500 font-bold border border-gray-300"
                aria-label="Close"
              >
                x
              </button>
              <p className="text-[9px] font-bold text-gray-800 mt-2 text-center font-montserrat">
                {t.modalTitle}
              </p>
              <p className="text-[7px] text-gray-500 text-center mt-1 font-montserrat">
                {t.modalBody}
              </p>
              <div className="flex gap-1.5 mt-3 justify-center">
                <div className="px-2 py-1 bg-gray-100 rounded text-[7px] text-gray-600 font-montserrat">
                  {language === "fr" ? "Annuler" : "Cancel"}
                </div>
                <div className="px-2 py-1 bg-red-500 rounded text-[7px] text-white font-montserrat">
                  {language === "fr" ? "Supprimer" : "Delete"}
                </div>
              </div>
            </div>
          </div>

          {/* Thumb zone indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <ellipse
                cx="20"
                cy="16"
                rx="16"
                ry="8"
                fill="#DC2626"
                opacity="0.15"
              />
              <path
                d="M14 20 C14 10, 26 10, 26 20"
                stroke="#DC2626"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Arrow showing distance */}
          <svg
            className="absolute top-[52px] right-[18px]"
            width="20"
            height="80"
            viewBox="0 0 20 80"
            fill="none"
          >
            <line
              x1="10"
              y1="0"
              x2="10"
              y2="75"
              stroke="#DC2626"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <polygon points="5,75 15,75 10,80" fill="#DC2626" />
          </svg>
        </div>

        <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
          {t.badCaption}
        </p>
      </div>

      {/* GOOD card */}
      <div
        className={cn(
          "bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#16A34A]",
          "flex flex-col items-center gap-6"
        )}
      >
        <h3 className="font-bricolage text-xl font-bold text-[#16A34A]">
          {t.good}
        </h3>

        {/* Phone mockup */}
        <div className="relative w-[180px] aspect-[9/16] max-h-[300px] rounded-[2rem] border-4 border-gray-800 bg-gray-50 overflow-hidden">
          {/* Status bar */}
          <div className="h-6 bg-gray-200 flex items-center justify-center">
            <div className="w-12 h-1.5 rounded-full bg-gray-400" />
          </div>

          {/* Content area */}
          <div className="flex flex-col h-[calc(100%-1.5rem)] justify-between p-3">
            {/* Top content */}
            <div className="space-y-2 mt-2">
              <div className="h-2 bg-gray-200 rounded-full w-3/4" />
              <div className="h-2 bg-gray-200 rounded-full w-1/2" />
              <div className="h-16 bg-gray-100 rounded-lg mt-3" />
              <div className="h-2 bg-gray-200 rounded-full w-full" />
              <div className="h-2 bg-gray-200 rounded-full w-2/3" />
            </div>

            {/* Large bottom button - accessible to thumb */}
            <div className="w-full py-3 bg-[#16A34A] rounded-xl text-white text-center text-[11px] font-bold shadow-md font-montserrat">
              {t.confirm}
            </div>
          </div>

          {/* Thumb zone indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <ellipse
                cx="20"
                cy="16"
                rx="16"
                ry="8"
                fill="#16A34A"
                opacity="0.15"
              />
            </svg>
          </div>

          {/* Checkmark indicator */}
          <svg
            className="absolute bottom-[52px] right-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="7" fill="#16A34A" opacity="0.2" />
            <path
              d="M5 8 L7 10 L11 6"
              stroke="#16A34A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
          {t.goodCaption}
        </p>
      </div>
    </div>
  );
}
