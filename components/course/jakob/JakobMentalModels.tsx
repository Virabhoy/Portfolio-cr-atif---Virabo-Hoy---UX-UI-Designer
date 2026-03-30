"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const icons = [
  {
    labelFr: "Accueil",
    labelEn: "Home",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 24L24 10L40 24" />
        <path d="M14 22V38H20V30H28V38H34V22" />
      </svg>
    ),
  },
  {
    labelFr: "Recherche",
    labelEn: "Search",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="21" cy="21" r="10" />
        <line x1="28" y1="28" x2="38" y2="38" />
      </svg>
    ),
  },
  {
    labelFr: "Panier",
    labelEn: "Cart",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 12H14L18 32H36L40 16H16" />
        <circle cx="20" cy="37" r="2.5" />
        <circle cx="34" cy="37" r="2.5" />
      </svg>
    ),
  },
  {
    labelFr: "Navigation",
    labelEn: "Navigation",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <line x1="10" y1="14" x2="38" y2="14" />
        <line x1="10" y1="24" x2="38" y2="24" />
        <line x1="10" y1="34" x2="38" y2="34" />
      </svg>
    ),
  },
  {
    labelFr: "Retour",
    labelEn: "Back",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="38" y1="24" x2="12" y2="24" />
        <polyline points="22,14 12,24 22,34" />
      </svg>
    ),
  },
];

export default function JakobMentalModels() {
  const { language } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Icon grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {icons.map((item) => (
          <div
            key={item.labelEn}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <span className="font-montserrat text-sm text-slate-700">
              {language === "fr" ? item.labelFr : item.labelEn}
            </span>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="bg-[#0099FF]/10 border-l-4 border-[#0099FF] rounded-r-xl p-5">
        <p className="font-montserrat text-sm text-slate-700 leading-relaxed">
          {language === "fr"
            ? "Ces conventions sont universelles. Les utilisateurs les reconnaissent instantanement, quel que soit le site. Changer ces patterns sans raison valable augmente la charge cognitive et cree de la confusion."
            : "These conventions are universal. Users recognize them instantly, regardless of the site. Changing these patterns without valid reason increases cognitive load and creates confusion."}
        </p>
      </div>
    </div>
  );
}
