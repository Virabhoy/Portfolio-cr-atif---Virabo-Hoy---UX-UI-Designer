"use client";

import { useLanguage } from "@/lib/language-context";

export default function ZeigarnikToolbox() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const tools = [
    {
      icon: (
        <svg viewBox="0 0 120 32" className="w-full" aria-hidden="true">
          <rect x="0" y="6" width="120" height="20" rx="10" fill="#E8F4FF" />
          <rect x="0" y="6" width="78" height="20" rx="10" fill="#0099FF" />
          <text x="39" y="21" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
            65%
          </text>
        </svg>
      ),
      title: isFr ? "La Barre de Progression" : "The Progress Bar",
      desc: isFr
        ? "Rend le chemin restant visuellement plus court que le chemin parcouru."
        : "Makes the remaining path visually shorter than the path already covered.",
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto" aria-hidden="true">
          <rect x="4" y="4" width="72" height="72" rx="10" fill="#E8F4FF" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="16"
                y={18 + i * 20}
                width="14"
                height="14"
                rx="3"
                fill={i < 2 ? "#0099FF" : "white"}
                stroke={i < 2 ? "#0099FF" : "#0099FF"}
                strokeWidth="1.5"
              />
              {i < 2 && (
                <path
                  d={`M ${18} ${24 + i * 20} l 4 4 6 -6`}
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
              <rect x="36" y={21 + i * 20} width="28" height="8" rx="4" fill={i < 2 ? "#0099FF" : "#CBD5E1"} opacity={i < 2 ? "0.3" : "0.5"} />
            </g>
          ))}
        </svg>
      ),
      title: isFr ? "La Checklist" : "The Checklist",
      desc: isFr
        ? "Capitalise sur le besoin compulsif du cerveau de voir toutes les cases remplies."
        : "Capitalizes on the brain's compulsive need to see all boxes filled.",
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto" aria-hidden="true">
          <rect x="4" y="4" width="72" height="72" rx="10" fill="#E8F4FF" />
          <circle cx="40" cy="38" r="20" fill="none" stroke="#CBD5E1" strokeWidth="6" />
          <circle
            cx="40"
            cy="38"
            r="20"
            fill="none"
            stroke="#0099FF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="100.5"
            strokeDashoffset="20"
            transform="rotate(-90 40 38)"
          />
          <circle cx="40" cy="38" r="12" fill="white" />
          <text x="40" y="42" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0099FF">
            80%
          </text>
        </svg>
      ),
      title: isFr ? "Le Profil Incomplet" : "The Incomplete Profile",
      desc: isFr
        ? "\"Profil complété à 80%\" incite à fournir les dernières informations personnelles."
        : "\"Profile 80% complete\" encourages providing the last personal information.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-[var(--border)] p-6 flex flex-col items-center text-center gap-4 shadow-sm"
        >
          <div className="w-full flex items-center justify-center h-20">
            {tool.icon}
          </div>
          <h4 className="font-bricolage text-base font-bold">{tool.title}</h4>
          <p className="font-montserrat text-sm text-[var(--muted-foreground)] leading-relaxed">
            {tool.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
