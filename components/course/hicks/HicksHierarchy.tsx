"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function HicksHierarchy() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const labels = {
    save: isFr ? "Sauvegarder" : "Save",
    cancel: isFr ? "Annuler" : "Cancel",
    export: isFr ? "Exporter en PDF" : "Export to PDF",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left panel - Without hierarchy */}
        <div className="flex flex-col items-center gap-8 p-6 md:border-r border-gray-200">
          <h3 className="font-bricolage text-lg font-bold text-gray-900">
            {isFr ? "Sans Hierarchie" : "Without Hierarchy"}
          </h3>

          <div className="flex flex-col gap-3 w-full max-w-[240px]">
            {[labels.save, labels.cancel, labels.export].map((label, i) => (
              <button
                key={i}
                type="button"
                className={cn(
                  "w-full py-3 px-6 rounded-lg border-2 border-gray-300",
                  "font-montserrat text-sm font-medium text-gray-500",
                  "bg-white cursor-default"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="font-montserrat text-xs text-gray-400 text-center leading-relaxed max-w-[220px]">
            {isFr
              ? "L'oeil ne sait pas ou se poser."
              : "The eye doesn't know where to land."}
          </p>
        </div>

        {/* Right panel - With hierarchy */}
        <div className="flex flex-col items-center gap-8 p-6">
          <h3 className="font-bricolage text-lg font-bold text-gray-900">
            {isFr ? "Avec Hierarchie" : "With Hierarchy"}
          </h3>

          <div className="flex flex-col items-center gap-4 w-full max-w-[240px]">
            {/* Primary CTA */}
            <button
              type="button"
              className={cn(
                "w-full py-3.5 px-8 rounded-full",
                "font-montserrat text-sm font-bold text-white",
                "cursor-default shadow-md"
              )}
              style={{ backgroundColor: "#E8613C" }}
            >
              {labels.save}
            </button>

            {/* Secondary */}
            <button
              type="button"
              className={cn(
                "w-full py-3 px-6 rounded-full border-2",
                "font-montserrat text-sm font-semibold",
                "bg-white cursor-default"
              )}
              style={{ borderColor: "#0066CC", color: "#0066CC" }}
            >
              {labels.export}
            </button>

            {/* Tertiary */}
            <button
              type="button"
              className={cn(
                "font-montserrat text-xs text-gray-400 underline underline-offset-2",
                "cursor-default"
              )}
            >
              {labels.cancel}
            </button>
          </div>

          <p className="font-montserrat text-xs text-gray-400 text-center leading-relaxed max-w-[220px]">
            {isFr
              ? "La decision est pre-orientee."
              : "The decision is pre-oriented."}
          </p>
        </div>
      </div>
    </div>
  );
}
