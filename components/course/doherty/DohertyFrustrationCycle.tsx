"use client";

import { useLanguage } from "@/lib/language-context";

const PHASES = [
  {
    range: { fr: "0 – 400ms", en: "0 – 400ms" },
    label: { fr: "Flux", en: "Flow" },
    desc: {
      fr: "L'interface semble être une extension du corps. L'utilisateur ne perçoit aucune latence.",
      en: "The interface feels like an extension of the body. The user perceives no latency.",
    },
    color: "#0099FF",
    bg: "#E8F4FF",
    icon: "⚡",
  },
  {
    range: { fr: "400ms – 2s", en: "400ms – 2s" },
    label: { fr: "Conscience", en: "Awareness" },
    desc: {
      fr: "L'attention se fragmente. L'utilisateur remarque l'attente mais reste engagé.",
      en: "Attention fragments. The user notices the wait but remains engaged.",
    },
    color: "#F59E0B",
    bg: "#FFFBEB",
    icon: "👁",
  },
  {
    range: { fr: "2s – 10s", en: "2s – 10s" },
    label: { fr: "Frustration", en: "Frustration" },
    desc: {
      fr: "Frustration active. L'utilisateur commence à envisager l'abandon ou l'alternative.",
      en: "Active frustration. The user starts considering abandonment or an alternative.",
    },
    color: "#F97316",
    bg: "#FFF7ED",
    icon: "😤",
  },
  {
    range: { fr: "> 10s", en: "> 10s" },
    label: { fr: "Décrochage", en: "Disengagement" },
    desc: {
      fr: "Décrochage cognitif total. Le cerveau cherche activement une autre tâche.",
      en: "Total cognitive disengagement. The brain actively seeks another task.",
    },
    color: "#EF4444",
    bg: "#FEF2F2",
    icon: "🚫",
  },
];

export default function DohertyFrustrationCycle() {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const lang = isFr ? "fr" : "en";

  return (
    <div className="space-y-3">
      {PHASES.map((phase, i) => (
        <div
          key={i}
          className="rounded-xl p-4 flex items-start gap-4"
          style={{ backgroundColor: phase.bg, borderLeft: `4px solid ${phase.color}` }}
        >
          <span className="text-2xl shrink-0 mt-0.5">{phase.icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-montserrat text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: phase.color }}
              >
                {phase.range[lang]}
              </span>
              <span className="font-bricolage font-bold text-sm" style={{ color: phase.color }}>
                {phase.label[lang]}
              </span>
            </div>
            <p className="font-montserrat text-sm text-[var(--muted-foreground)]">
              {phase.desc[lang]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
