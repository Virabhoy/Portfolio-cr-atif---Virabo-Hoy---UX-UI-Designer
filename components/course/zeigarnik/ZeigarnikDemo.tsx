"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

const STEPS_FR = [
  { id: "name", label: "Ton prénom", placeholder: "ex. Marie" },
  { id: "job", label: "Ton métier", placeholder: "ex. UX Designer" },
  { id: "city", label: "Ta ville", placeholder: "ex. Paris" },
  { id: "bio", label: "Une phrase sur toi", placeholder: "ex. Passionnée par le design..." },
];

const STEPS_EN = [
  { id: "name", label: "Your first name", placeholder: "e.g. Marie" },
  { id: "job", label: "Your job", placeholder: "e.g. UX Designer" },
  { id: "city", label: "Your city", placeholder: "e.g. Paris" },
  { id: "bio", label: "One sentence about you", placeholder: "e.g. Passionate about design..." },
];

export default function ZeigarnikDemo() {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const steps = isFr ? STEPS_FR : STEPS_EN;

  const [values, setValues] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const filled = steps.filter((s) => values[s.id]?.trim()).length;
  const percent = Math.round((filled / steps.length) * 100);

  const handleChange = (id: string, val: string) => {
    setValues((v) => ({ ...v, [id]: val }));
    if (completed) setCompleted(false);
  };

  const handleSubmit = () => {
    if (filled === steps.length) setCompleted(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden">
      {/* Profile header */}
      <div className="bg-[#0099FF] px-6 pt-6 pb-10 relative">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="10" r="5" fill="white" />
              <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="font-bricolage text-white font-bold text-lg">
              {values["name"] || (isFr ? "Votre profil" : "Your profile")}
            </p>
            <p className="font-montserrat text-white/70 text-sm">
              {values["job"] || (isFr ? "— métier non renseigné" : "— job not filled")}
            </p>
          </div>
        </div>

        {/* Progress ring */}
        <div className="absolute right-6 top-4 flex flex-col items-center">
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="5" />
            <circle
              cx="28"
              cy="28"
              r="22"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="138.2"
              strokeDashoffset={138.2 - (138.2 * percent) / 100}
              transform="rotate(-90 28 28)"
              className="transition-all duration-500"
            />
            <text x="28" y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
              {percent}%
            </text>
          </svg>
          <span className="font-montserrat text-white/80 text-[10px] mt-1">
            {isFr ? "complété" : "complete"}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 -mt-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-montserrat text-xs font-semibold text-[#0099FF]">
              {isFr ? `Profil complété à ${percent}%` : `Profile ${percent}% complete`}
            </span>
            <span className="font-montserrat text-xs text-[var(--muted-foreground)]">
              {filled}/{steps.length} {isFr ? "champs" : "fields"}
            </span>
          </div>
          <div className="h-2 bg-[#E8F4FF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0099FF] rounded-full transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          {percent < 100 && (
            <p className="font-montserrat text-xs text-[var(--muted-foreground)] mt-2">
              {isFr
                ? `Encore ${steps.length - filled} champ${steps.length - filled > 1 ? "s" : ""} pour compléter votre profil.`
                : `${steps.length - filled} more field${steps.length - filled > 1 ? "s" : ""} to complete your profile.`}
            </p>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-4">
        {steps.map((step) => (
          <div key={step.id}>
            <label className="font-montserrat text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-1 block">
              {step.label}
              {values[step.id]?.trim() && (
                <span className="ml-2 text-[#0099FF]">✓</span>
              )}
            </label>
            <input
              type="text"
              value={values[step.id] || ""}
              onChange={(e) => handleChange(step.id, e.target.value)}
              placeholder={step.placeholder}
              className="w-full font-montserrat text-sm border border-[var(--border)] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0099FF] transition-all"
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={filled === 0}
          className="w-full font-montserrat font-semibold text-sm bg-[#0099FF] text-white py-3 rounded-xl hover:bg-[#0066CC] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2"
        >
          {isFr ? "Enregistrer le profil" : "Save profile"}
        </button>

        {completed && (
          <div className="bg-[#E8F4FF] border border-[#0099FF] rounded-xl p-4 text-center">
            <p className="font-bricolage font-bold text-[#0066CC] mb-1">
              {isFr ? "Boucle fermée !" : "Loop closed!"}
            </p>
            <p className="font-montserrat text-xs text-[#0066CC]">
              {isFr
                ? "Vous avez ressenti la tension. Maintenant elle est libérée. C'est exactement ce que ressent votre utilisateur."
                : "You felt the tension. Now it's released. That's exactly what your user feels."}
            </p>
          </div>
        )}

        {/* Explanation tag */}
        <p className="font-montserrat text-xs text-center text-[var(--muted-foreground)] pt-2">
          {isFr
            ? "Observez comment la barre de progression crée une envie de compléter — c'est l'Effet Zeigarnik en action."
            : "Notice how the progress bar creates an urge to complete — that's the Zeigarnik Effect in action."}
        </p>
      </div>
    </div>
  );
}
