"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";

type Phase = "idle" | "loading" | "done";

const ACTIONS = [
  { ms: 100, label: { fr: "Bouton cliqué", en: "Button clicked" } },
  { ms: 400, label: { fr: "Formulaire soumis", en: "Form submitted" } },
  { ms: 1200, label: { fr: "Recherche lancée", en: "Search launched" } },
  { ms: 3000, label: { fr: "Fichier exporté", en: "File exported" } },
];

function getColor(ms: number) {
  if (ms <= 400) return "#22C55E";
  if (ms <= 1000) return "#F59E0B";
  if (ms <= 3000) return "#F97316";
  return "#EF4444";
}

function getLabel(ms: number, isFr: boolean) {
  if (ms <= 400) return isFr ? "Flux ✓" : "Flow ✓";
  if (ms <= 1000) return isFr ? "Perçu" : "Noticed";
  if (ms <= 3000) return isFr ? "Frustrant" : "Frustrating";
  return isFr ? "Abandon" : "Abandonment";
}

export default function DohertyDemo() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const [selected, setSelected] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);

  function run(ms: number, index: number) {
    if (phase === "loading") return;
    setSelected(index);
    setPhase("loading");
    setElapsed(0);
    startRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 16);

    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setElapsed(ms);
      setPhase("done");
    }, ms);
  }

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function reset() {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("idle");
    setSelected(null);
    setElapsed(0);
  }

  const currentAction = selected !== null ? ACTIONS[selected] : null;
  const targetMs = currentAction?.ms ?? 0;
  const progress = phase === "done" ? 100 : Math.min((elapsed / (targetMs || 1)) * 100, 99);
  const color = getColor(targetMs);

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-[#0099FF] text-white px-6 py-4">
        <h3 className="font-bricolage font-bold text-lg">
          {isFr ? "Simulateur de latence" : "Latency Simulator"}
        </h3>
        <p className="font-montserrat text-sm opacity-80 mt-1">
          {isFr
            ? "Déclenchez une action et ressentez la différence de perception"
            : "Trigger an action and feel the difference in perception"}
        </p>
      </div>

      {/* Actions */}
      <div className="p-6 space-y-3">
        <p className="font-montserrat text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wide mb-4">
          {isFr ? "Choisissez une action" : "Choose an action"}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {ACTIONS.map((action, i) => {
            const c = getColor(action.ms);
            return (
              <button
                key={i}
                onClick={() => run(action.ms, i)}
                disabled={phase === "loading"}
                className="rounded-xl p-4 text-left transition-all border-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderColor: selected === i ? c : "#E5E7EB",
                  backgroundColor: selected === i ? c + "15" : "white",
                }}
              >
                <p className="font-montserrat text-xs font-bold" style={{ color: c }}>
                  {action.ms}ms
                </p>
                <p className="font-montserrat text-xs text-[#374151] mt-0.5">
                  {action.label[isFr ? "fr" : "en"]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Progress display */}
        {phase !== "idle" && (
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-montserrat text-xs text-[var(--muted-foreground)]">
                {phase === "done"
                  ? (isFr ? "Terminé" : "Done")
                  : (isFr ? "Chargement…" : "Loading…")}
              </span>
              <span className="font-montserrat text-xs font-bold" style={{ color }}>
                {phase === "done" ? `${targetMs}ms` : `${Math.round(elapsed)}ms`}
              </span>
            </div>
            <div className="h-2 rounded-full bg-[#F3F4F6] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-75"
                style={{ width: `${progress}%`, backgroundColor: color }}
              />
            </div>
            {phase === "done" && (
              <div
                className="rounded-xl px-4 py-3 text-center"
                style={{ backgroundColor: color + "15", border: `1.5px solid ${color}` }}
              >
                <p className="font-montserrat text-sm font-bold" style={{ color }}>
                  {getLabel(targetMs, isFr)}
                </p>
                <p className="font-montserrat text-xs text-[var(--muted-foreground)] mt-0.5">
                  {targetMs <= 400
                    ? (isFr ? "En dessous du seuil de Doherty — expérience fluide" : "Below Doherty threshold — smooth experience")
                    : targetMs <= 1000
                    ? (isFr ? "Au-dessus du seuil — l'utilisateur a remarqué l'attente" : "Above threshold — user noticed the wait")
                    : (isFr ? "Fortement au-dessus — frustration et risque d'abandon" : "Well above — frustration and abandonment risk")}
                </p>
              </div>
            )}
          </div>
        )}

        {phase === "done" && (
          <button
            onClick={reset}
            className="w-full mt-2 font-montserrat text-sm font-semibold text-[#0099FF] border border-[#0099FF] rounded-xl py-2.5 hover:bg-[#E8F4FF] transition-colors"
          >
            {isFr ? "Réessayer" : "Try again"}
          </button>
        )}
      </div>
    </div>
  );
}
