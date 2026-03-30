"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Phase = "intro" | "showing" | "choosing" | "results";

interface ColorDef {
  name: string;
  bg: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const COLOR_POOL: ColorDef[] = [
  { name: "red", bg: "#EF4444" },
  { name: "blue", bg: "#3B82F6" },
  { name: "green", bg: "#22C55E" },
  { name: "orange", bg: "#F97316" },
  { name: "purple", bg: "#A855F7" },
  { name: "teal", bg: "#14B8A6" },
  { name: "pink", bg: "#EC4899" },
  { name: "yellow", bg: "#EAB308" },
  { name: "indigo", bg: "#6366F1" },
  { name: "lime", bg: "#84CC16" },
  { name: "amber", bg: "#F59E0B" },
  { name: "cyan", bg: "#06B6D4" },
];

const ROUND_OPTION_COUNTS = [2, 6, 12] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound(count: number): { target: ColorDef; options: ColorDef[] } {
  const shuffled = shuffle(COLOR_POOL).slice(0, count);
  const target = shuffled[Math.floor(Math.random() * shuffled.length)];
  return { target, options: shuffle(shuffled) };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HicksDemo() {
  const { language } = useLanguage();
  const isEn = language === "en";

  // State
  const [phase, setPhase] = useState<Phase>("intro");
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [targetColor, setTargetColor] = useState<ColorDef | null>(null);
  const [options, setOptions] = useState<ColorDef[]>([]);
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const [flashType, setFlashType] = useState<"correct" | "wrong" | null>(null);

  const startTimeRef = useRef(0);
  const showingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ------- Round lifecycle -------

  const startRound = useCallback(
    (r: number) => {
      const count = ROUND_OPTION_COUNTS[r];
      const { target, options: opts } = pickRound(count);
      setTargetColor(target);
      setOptions(opts);
      setPhase("showing");
      setFlashIdx(null);
      setFlashType(null);

      showingTimerRef.current = setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("choosing");
      }, 1000);
    },
    [],
  );

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (showingTimerRef.current) clearTimeout(showingTimerRef.current);
    };
  }, []);

  const handleStart = useCallback(() => {
    setTimes([]);
    setRound(0);
    startRound(0);
  }, [startRound]);

  const handleSwatchClick = useCallback(
    (color: ColorDef, idx: number) => {
      if (phase !== "choosing" || flashIdx !== null) return;

      if (color.name === targetColor?.name) {
        // Correct
        const elapsed = performance.now() - startTimeRef.current;
        setFlashIdx(idx);
        setFlashType("correct");

        setTimeout(() => {
          const newTimes = [...times, Math.round(elapsed)];
          setTimes(newTimes);

          if (round < 2) {
            const nextRound = round + 1;
            setRound(nextRound);
            startRound(nextRound);
          } else {
            setPhase("results");
          }
        }, 400);
      } else {
        // Wrong
        setFlashIdx(idx);
        setFlashType("wrong");
        setTimeout(() => {
          setFlashIdx(null);
          setFlashType(null);
        }, 350);
      }
    },
    [phase, flashIdx, targetColor, times, round, startRound],
  );

  const handleRestart = useCallback(() => {
    setPhase("intro");
    setRound(0);
    setTimes([]);
    setTargetColor(null);
    setOptions([]);
  }, []);

  // ------- Render helpers -------

  const t = {
    title: isEn ? "Test Hick\u2019s Law" : "Testez la Loi de Hick",
    introP1: isEn
      ? "Hick\u2019s Law states that the time it takes to make a decision increases with the number of options available."
      : "La Loi de Hick affirme que le temps de d\u00e9cision augmente avec le nombre d\u2019options disponibles.",
    introP2: isEn
      ? "You\u2019ll go through 3 rounds: find a target color among 2, 6, then 12 swatches. Your reaction time will be measured each time."
      : "Vous allez passer 3 manches\u00a0: trouver une couleur cible parmi 2, 6, puis 12 \u00e9chantillons. Votre temps de r\u00e9action sera mesur\u00e9 \u00e0 chaque fois.",
    start: isEn ? "Start" : "Commencer",
    getReady: isEn ? "Get ready..." : "Pr\u00e9parez-vous...",
    findColor: isEn ? "Find this color" : "Trouvez cette couleur",
    roundLabel: isEn ? "Round" : "Manche",
    options: isEn ? "Options" : "Options",
    time: isEn ? "Time" : "Temps",
    summary: isEn
      ? "As Hick predicted, the more options, the slower the decision."
      : "Comme Hick le pr\u00e9dit, plus il y a d\u2019options, plus la d\u00e9cision est lente.",
    tryAgain: isEn ? "Try again" : "Recommencer",
    predicted: isEn ? "Predicted ratio (log\u2082)" : "Ratio pr\u00e9dit (log\u2082)",
    actual: isEn ? "Actual ratio" : "Ratio r\u00e9el",
  };

  // ------- Phases -------

  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-[var(--primary)]/20 bg-white shadow-lg",
        "p-6 md:p-8 w-full max-w-2xl mx-auto",
      )}
    >
      {/* Title */}
      <h3 className="font-bricolage text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
        {t.title}
      </h3>

      {/* ---------- INTRO ---------- */}
      {phase === "intro" && (
        <div className="flex flex-col items-center gap-5 animate-fade-in">
          <p className="font-montserrat text-gray-600 text-center leading-relaxed">
            {t.introP1}
          </p>
          <p className="font-montserrat text-gray-600 text-center leading-relaxed">
            {t.introP2}
          </p>
          <button
            onClick={handleStart}
            className={cn(
              "mt-2 px-8 py-3 rounded-xl font-montserrat font-semibold text-white",
              "bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors",
              "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50",
            )}
          >
            {t.start}
          </button>
        </div>
      )}

      {/* ---------- SHOWING ---------- */}
      {phase === "showing" && targetColor && (
        <div className="flex flex-col items-center gap-5 animate-fade-in">
          <p className="font-montserrat text-sm text-gray-500 uppercase tracking-wider">
            {t.findColor}
          </p>
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-md border-2 border-gray-200"
            style={{ backgroundColor: targetColor.bg }}
          />
          <p className="font-montserrat text-gray-400 animate-pulse">
            {t.getReady}
          </p>
        </div>
      )}

      {/* ---------- CHOOSING ---------- */}
      {phase === "choosing" && targetColor && (
        <div className="flex flex-col items-center gap-5">
          {/* Target reminder */}
          <div className="flex items-center gap-3">
            <span className="font-montserrat text-sm text-gray-500">
              {t.findColor}:
            </span>
            <div
              className="w-10 h-10 rounded-lg border-2 border-gray-200 shadow-sm"
              style={{ backgroundColor: targetColor.bg }}
            />
          </div>

          {/* Round indicator */}
          <p className="font-montserrat text-xs text-gray-400">
            {t.roundLabel} {round + 1}/3 &mdash; {options.length} {t.options.toLowerCase()}
          </p>

          {/* Swatch grid */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {options.map((color, idx) => (
              <button
                key={`${round}-${color.name}`}
                onClick={() => handleSwatchClick(color, idx)}
                className={cn(
                  "w-12 h-12 md:w-20 md:h-20 rounded-xl cursor-pointer transition-all duration-150",
                  "hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50",
                  "border-2 border-transparent",
                  flashIdx === idx && flashType === "correct" && "ring-4 ring-green-400 scale-110",
                  flashIdx === idx && flashType === "wrong" && "ring-4 ring-red-400 scale-95 opacity-60",
                )}
                style={{
                  backgroundColor: color.bg,
                  animationDelay: `${idx * 40}ms`,
                }}
                aria-label={color.name}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ---------- RESULTS ---------- */}
      {phase === "results" && (
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          {/* Results table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full font-montserrat text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 px-3 text-left font-medium">{t.roundLabel}</th>
                  <th className="py-2 px-3 text-center font-medium">{t.options}</th>
                  <th className="py-2 px-3 text-right font-medium">{t.time}</th>
                </tr>
              </thead>
              <tbody>
                {times.map((time, i) => {
                  const fastest = Math.min(...times);
                  const slowest = Math.max(...times);
                  const isFastest = time === fastest;
                  const isSlowest = time === slowest && times.length > 1;
                  return (
                    <tr
                      key={i}
                      className={cn(
                        "border-b border-gray-100 last:border-0",
                        isFastest && "bg-green-50",
                        isSlowest && "bg-red-50",
                      )}
                    >
                      <td className="py-3 px-3 font-semibold text-gray-700">
                        {i + 1}
                      </td>
                      <td className="py-3 px-3 text-center text-gray-600">
                        {ROUND_OPTION_COUNTS[i]}
                      </td>
                      <td
                        className={cn(
                          "py-3 px-3 text-right font-bold tabular-nums",
                          isFastest && "text-green-600",
                          isSlowest && "text-red-600",
                          !isFastest && !isSlowest && "text-gray-700",
                        )}
                      >
                        {time} ms
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Log2 comparison */}
          {times.length === 3 && times[0] > 0 && (
            <div className="w-full bg-gray-50 rounded-xl p-4 font-montserrat text-sm">
              <p className="text-gray-500 font-medium mb-3 text-center">
                log&#8322;(n) {t.predicted.toLowerCase()}
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[0, 1, 2].map((i) => {
                  const n = ROUND_OPTION_COUNTS[i];
                  const predictedRatio =
                    i === 0 ? 1 : Math.log2(n + 1) / Math.log2(ROUND_OPTION_COUNTS[0] + 1);
                  const actualRatio = i === 0 ? 1 : times[i] / times[0];
                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-gray-400 text-xs">{n} opt.</span>
                      <span className="text-[var(--primary)] font-bold">
                        {predictedRatio.toFixed(2)}x
                      </span>
                      <span className="text-gray-600 text-xs">{t.predicted}</span>
                      <span className="text-gray-800 font-bold">
                        {actualRatio.toFixed(2)}x
                      </span>
                      <span className="text-gray-600 text-xs">{t.actual}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Summary */}
          <p className="font-montserrat text-gray-600 text-center leading-relaxed italic">
            {t.summary}
          </p>

          {/* Restart */}
          <button
            onClick={handleRestart}
            className={cn(
              "px-8 py-3 rounded-xl font-montserrat font-semibold text-white",
              "bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors",
              "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50",
            )}
          >
            {t.tryAgain}
          </button>
        </div>
      )}

      {/* ---------- Global keyframe (Tailwind v4 compatible) ---------- */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.35s ease-out both;
        }
      `}</style>
    </div>
  );
}
