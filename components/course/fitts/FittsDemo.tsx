"use client";

import { useState, useCallback, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types & config
// ---------------------------------------------------------------------------

type Phase = "intro" | "ready" | "waiting" | "targeting" | "results";

interface RoundConfig {
  /** Target diameter in px */
  size: number;
  /** Distance from start circle as a percentage of container width (0-1) */
  distancePct: number;
  labelFr: string;
  labelEn: string;
}

const ROUNDS: RoundConfig[] = [
  { size: 60, distancePct: 0.45, labelFr: "Moyen", labelEn: "Medium" },
  { size: 24, distancePct: 0.80, labelFr: "Difficile", labelEn: "Hard" },
  { size: 100, distancePct: 0.22, labelFr: "Facile", labelEn: "Easy" },
];

const START_CIRCLE_SIZE = 56;
const START_LEFT_PCT = 0.08;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Fitts' Index of Difficulty (Shannon formulation) */
function fittsID(distance: number, width: number): number {
  return Math.log2(distance / width + 1);
}

function formatMs(ms: number): string {
  return `${Math.round(ms)} ms`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FittsDemo() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  // State
  const [phase, setPhase] = useState<Phase>("intro");
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startTimeRef = useRef(0);
  const areaRef = useRef<HTMLDivElement>(null);

  // ------- handlers -------

  const handleStart = useCallback(() => {
    setTimes([]);
    setRound(0);
    setPhase("ready");
  }, []);

  const handleGoClick = useCallback(() => {
    startTimeRef.current = performance.now();
    setPhase("targeting");
  }, []);

  const handleTargetHit = useCallback(() => {
    const elapsed = performance.now() - startTimeRef.current;
    const newTimes = [...times, elapsed];
    setTimes(newTimes);

    if (round < ROUNDS.length - 1) {
      setRound((r) => r + 1);
      setPhase("ready");
    } else {
      setPhase("results");
    }
  }, [times, round]);

  const handleReset = useCallback(() => {
    setPhase("intro");
    setRound(0);
    setTimes([]);
  }, []);

  // ------- derived -------

  const currentRound = ROUNDS[round];

  // ------- render helpers -------

  const renderIntro = () => (
    <div className="flex flex-col items-center gap-6 text-center px-2">
      <p className="font-montserrat text-gray-600 max-w-lg leading-relaxed text-sm md:text-base">
        {isFr
          ? "Vous allez cliquer sur 3 cibles de tailles et distances differentes. Votre temps de reaction sera mesure pour chaque essai. Pret ?"
          : "You will click on 3 targets of varying sizes and distances. Your reaction time will be measured for each trial. Ready?"}
      </p>
      <button
        onPointerDown={handleStart}
        className={cn(
          "font-montserrat font-semibold text-white rounded-xl px-8 py-3",
          "bg-[var(--primary)] hover:bg-[var(--primary-dark)] active:scale-95",
          "transition-all duration-150 select-none"
        )}
      >
        {isFr ? "Commencer" : "Start"}
      </button>
    </div>
  );

  const renderPlayArea = () => {
    const isReady = phase === "ready";
    const isTargeting = phase === "targeting";

    return (
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Round indicator */}
        <div className="font-montserrat text-sm text-gray-500 flex items-center gap-2">
          <span>
            {isFr ? "Essai" : "Trial"} {round + 1}/{ROUNDS.length}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
            {isFr ? currentRound.labelFr : currentRound.labelEn}
          </span>
        </div>

        {/* Instruction */}
        <p className="font-montserrat text-sm text-gray-400">
          {isReady
            ? isFr
              ? 'Cliquez sur "GO" pour lancer'
              : 'Click "GO" to start'
            : isFr
              ? "Cliquez sur la cible orange !"
              : "Click the orange target!"}
        </p>

        {/* Playing area */}
        <div
          ref={areaRef}
          className={cn(
            "relative w-full h-32 md:h-40 rounded-xl overflow-hidden",
            "bg-gray-50 border border-gray-200",
            "select-none"
          )}
          style={{ touchAction: "none" }}
        >
          {/* Start circle — always visible during ready/targeting */}
          {(isReady || isTargeting) && (
            <button
              onPointerDown={isReady ? handleGoClick : undefined}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 rounded-full",
                "flex items-center justify-center font-montserrat font-bold text-white text-sm",
                "transition-all duration-200",
                isReady
                  ? "bg-[var(--primary)] hover:bg-[var(--primary-dark)] cursor-pointer shadow-lg shadow-blue-200"
                  : "bg-gray-300 cursor-default"
              )}
              style={{
                width: START_CIRCLE_SIZE,
                height: START_CIRCLE_SIZE,
                left: `${START_LEFT_PCT * 100}%`,
              }}
              aria-label={isReady ? "Go" : "Start position"}
            >
              {isReady ? "GO" : ""}
            </button>
          )}

          {/* Target circle — only in targeting phase */}
          {isTargeting && (
            <button
              onPointerDown={handleTargetHit}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 rounded-full",
                "bg-amber-400 hover:bg-amber-500 cursor-pointer",
                "shadow-lg shadow-amber-200",
                "flex items-center justify-center",
                "animate-pulse-target"
              )}
              style={{
                width: Math.max(currentRound.size, 44),
                height: Math.max(currentRound.size, 44),
                left: `calc(${START_LEFT_PCT * 100}% + ${currentRound.distancePct * 100}%)`,
              }}
              aria-label="Target"
            >
              {/* Inner visual circle at actual design size when touch area is larger */}
              {currentRound.size < 44 && (
                <span
                  className="rounded-full bg-amber-500 pointer-events-none"
                  style={{
                    width: currentRound.size,
                    height: currentRound.size,
                  }}
                />
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);

    // Compute Fitts' IDs for relative comparison
    const fittsIDs = ROUNDS.map((r) => {
      // Use actual pixel distance approximation (assume ~700px container)
      const approxDistance = r.distancePct * 700;
      return fittsID(approxDistance, r.size);
    });

    return (
      <div className="flex flex-col gap-6 w-full">
        {/* Results table */}
        <div className="overflow-x-auto">
          <table className="w-full font-montserrat text-sm">
            <thead>
              <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="text-left py-2 px-3">#</th>
                <th className="text-left py-2 px-3">
                  {isFr ? "Taille" : "Size"}
                </th>
                <th className="text-left py-2 px-3">
                  {isFr ? "Distance" : "Distance"}
                </th>
                <th className="text-left py-2 px-3">
                  {isFr ? "Difficulte" : "Difficulty"}
                </th>
                <th className="text-right py-2 px-3">
                  {isFr ? "Temps" : "Time"}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROUNDS.map((r, i) => {
                const time = times[i];
                const isFastest = time === minTime;
                const isSlowest = time === maxTime;

                return (
                  <tr
                    key={i}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="py-3 px-3 font-semibold text-gray-700">
                      {i + 1}
                    </td>
                    <td className="py-3 px-3 text-gray-600">{r.size}px</td>
                    <td className="py-3 px-3 text-gray-600">
                      {Math.round(r.distancePct * 100)}%
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={cn(
                          "text-xs font-medium px-2 py-0.5 rounded-full",
                          isFr ? "" : "",
                          i === 0 && "bg-blue-50 text-blue-600",
                          i === 1 && "bg-red-50 text-red-600",
                          i === 2 && "bg-green-50 text-green-600"
                        )}
                      >
                        {isFr ? r.labelFr : r.labelEn} (ID:{" "}
                        {fittsIDs[i].toFixed(1)})
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span
                        className={cn(
                          "font-mono font-semibold tabular-nums",
                          isFastest && "text-green-600",
                          isSlowest && "text-red-500",
                          !isFastest && !isSlowest && "text-gray-700"
                        )}
                      >
                        {formatMs(time)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="bg-blue-50 rounded-xl p-4 md:p-5">
          <p className="font-montserrat text-sm text-blue-900 leading-relaxed">
            {isFr
              ? "Comme Fitts le predit, plus la cible est petite et eloignee, plus il faut de temps pour l'atteindre. L'indice de difficulte (ID) quantifie cette relation : ID = log2(D/W + 1)."
              : "As Fitts predicted, the smaller and farther the target, the longer it takes to reach. The Index of Difficulty (ID) quantifies this: ID = log\u2082(D/W + 1)."}
          </p>
        </div>

        {/* Try again button */}
        <div className="flex justify-center">
          <button
            onPointerDown={handleReset}
            className={cn(
              "font-montserrat font-semibold text-white rounded-xl px-8 py-3",
              "bg-[var(--primary)] hover:bg-[var(--primary-dark)] active:scale-95",
              "transition-all duration-150 select-none"
            )}
          >
            {isFr ? "Recommencer" : "Try again"}
          </button>
        </div>
      </div>
    );
  };

  // ------- main render -------

  return (
    <>
      {/* Keyframe for target pulse */}
      <style>{`
        @keyframes pulse-target {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.08); }
        }
        .animate-pulse-target {
          animation: pulse-target 1.2s ease-in-out infinite;
        }
      `}</style>

      <div
        className={cn(
          "w-full rounded-2xl border-2 border-[var(--primary)]/20",
          "bg-white p-6 md:p-8 shadow-lg",
          "flex flex-col gap-6"
        )}
      >
        {/* Header */}
        <div className="text-center">
          <h3 className="font-bricolage text-xl md:text-2xl font-bold text-gray-900">
            {isFr ? "Testez la Loi de Fitts" : "Test Fitts' Law"}
          </h3>
          <p className="font-montserrat text-sm text-gray-500 mt-1">
            {isFr
              ? "Cliquez sur les cibles le plus vite possible"
              : "Click the targets as fast as possible"}
          </p>
        </div>

        {/* Content by phase */}
        {phase === "intro" && renderIntro()}
        {(phase === "ready" || phase === "targeting") && renderPlayArea()}
        {phase === "results" && renderResults()}
      </div>
    </>
  );
}
