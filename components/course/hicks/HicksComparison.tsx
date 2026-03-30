"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function BrowserChrome({ color }: { color: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-t-lg"
      style={{ backgroundColor: "#F1F5F9" }}
    >
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div
        className="flex-1 h-5 rounded-md mx-2"
        style={{ backgroundColor: "#E2E8F0" }}
      />
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function BeforeMockup() {
  const rows = 6;
  const cols = 4;
  const items = Array.from({ length: rows * cols }, (_, i) => i);

  return (
    <div className="border border-gray-200 rounded-b-lg overflow-hidden">
      {/* Nav bar placeholder */}
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 border-b border-gray-200">
        <div className="w-16 h-3 bg-gray-300 rounded" />
        <div className="flex gap-2 ml-auto">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="w-10 h-2 bg-gray-300 rounded" />
          ))}
        </div>
      </div>
      {/* Mega menu grid */}
      <div className="p-3 bg-white">
        <div className="grid grid-cols-4 gap-2">
          {items.map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded"
              style={{ backgroundColor: i % 7 === 0 ? "#FEE2E2" : "#F8FAFC" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              <div
                className="h-2 rounded"
                style={{
                  width: `${50 + ((i * 17) % 40)}%`,
                  backgroundColor: "#CBD5E1",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AfterMockup({ isFr }: { isFr: boolean }) {
  const navItems = isFr
    ? ["Accueil", "Femmes", "Hommes", "Enfants", "Promo"]
    : ["Home", "Women", "Men", "Kids", "Sale"];

  const subItems = isFr
    ? ["Robes", "Tops", "Jeans", "Chaussures"]
    : ["Dresses", "Tops", "Jeans", "Shoes"];

  return (
    <div className="border border-gray-200 rounded-b-lg overflow-hidden">
      {/* Clean nav */}
      <div className="flex items-center gap-4 px-4 py-2.5 bg-white border-b border-gray-200">
        <div className="w-16 h-3 bg-gray-800 rounded" />
        <div className="flex gap-4 ml-4">
          {navItems.map((item, i) => (
            <div key={i} className="relative">
              <span
                className={cn(
                  "font-montserrat text-[10px] font-medium",
                  i === 1 ? "text-[#0066CC] font-bold" : "text-gray-600"
                )}
              >
                {item}
              </span>
              {i === 1 && (
                <div className="absolute top-full left-0 mt-1 w-20 bg-white border border-gray-200 rounded-md shadow-md p-1.5 z-10">
                  {subItems.map((sub, j) => (
                    <div
                      key={j}
                      className="font-montserrat text-[8px] text-gray-500 py-0.5 px-1 rounded hover:bg-gray-50"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Content area */}
      <div className="p-4 bg-white min-h-[120px] flex flex-col items-center justify-center gap-3">
        <div className="w-3/4 h-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
          <div className="w-24 h-3 bg-blue-200 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="w-16 h-10 bg-gray-100 rounded" />
          <div className="w-16 h-10 bg-gray-100 rounded" />
          <div className="w-16 h-10 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function HicksComparison() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-400">
          <h3 className="font-bricolage text-lg font-bold text-red-500 mb-4">
            {isFr ? "AVANT : L'approche anti-Hick" : "BEFORE: The anti-Hick approach"}
          </h3>
          <BrowserChrome color="#EF4444" />
          <BeforeMockup />
          <div className="mt-4 flex flex-col gap-1">
            <p className="font-montserrat text-xs font-semibold text-red-500">
              {isFr ? "23 categories affichees" : "23 categories displayed"}
            </p>
            <p className="font-montserrat text-xs text-red-400">
              {isFr ? "6-7 secondes de confusion" : "6-7 seconds of confusion"}
            </p>
          </div>
        </div>

        {/* After */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-400">
          <h3 className="font-bricolage text-lg font-bold text-green-600 mb-4">
            {isFr ? "APRES : L'optimisation Hick" : "AFTER: Hick optimization"}
          </h3>
          <BrowserChrome color="#22C55E" />
          <AfterMockup isFr={isFr} />
          <div className="mt-4 flex flex-col gap-1">
            <p className="font-montserrat text-xs font-semibold text-green-600">
              {isFr ? "5 categories principales" : "5 main categories"}
            </p>
            <p className="font-montserrat text-xs text-green-500">
              {isFr ? "1-2 secondes de decision" : "1-2 seconds to decide"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
