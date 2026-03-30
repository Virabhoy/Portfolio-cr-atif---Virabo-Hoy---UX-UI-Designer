"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Phase = "intro" | "standard" | "novel" | "results";

// ---------------------------------------------------------------------------
// Icon SVGs — Standard (familiar)
// ---------------------------------------------------------------------------

function IconHome({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconBell({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function IconGear({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function IconProfile({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Icon SVGs — Novel (abstract geometric)
// ---------------------------------------------------------------------------

function IconDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)}>
      <path d="M12 2L22 12L12 22L2 12Z" />
    </svg>
  );
}

function IconHexagon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)}>
      <path d="M12 2L21.66 7V17L12 22L2.34 17V7Z" />
    </svg>
  );
}

function IconTriangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)}>
      <path d="M12 2L23 21H1Z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconPentagon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)}>
      <path d="M12 2L22.47 9.27L18.54 21.73H5.46L1.53 9.27Z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface NavItem {
  id: string;
  labelFr: string;
  labelEn: string;
  isTarget: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", labelFr: "Accueil", labelEn: "Home", isTarget: false },
  { id: "search", labelFr: "Recherche", labelEn: "Search", isTarget: false },
  { id: "notifications", labelFr: "Notifs", labelEn: "Notifs", isTarget: false },
  { id: "settings", labelFr: "Param.", labelEn: "Settings", isTarget: true },
  { id: "profile", labelFr: "Profil", labelEn: "Profile", isTarget: false },
];

const STANDARD_ICONS: Record<string, React.FC<{ className?: string }>> = {
  home: IconHome,
  search: IconSearch,
  notifications: IconBell,
  settings: IconGear,
  profile: IconProfile,
};

const NOVEL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  home: IconDiamond,
  search: IconHexagon,
  notifications: IconTriangle,
  settings: IconStar,
  profile: IconPentagon,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatMs(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function JakobDemo() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const [phase, setPhase] = useState<Phase>("intro");
  const [times, setTimes] = useState<number[]>([]);
  const [wrongClick, setWrongClick] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const startTimeRef = useRef(0);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear hint timer on unmount or phase change
  useEffect(() => {
    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    };
  }, []);

  // Start hint timer for novel round
  useEffect(() => {
    if (phase === "novel") {
      setShowHint(false);
      hintTimerRef.current = setTimeout(() => {
        setShowHint(true);
      }, 5000);
    }
    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    };
  }, [phase]);

  const handleStart = useCallback(() => {
    setTimes([]);
    setShowHint(false);
    setWrongClick(false);
    startTimeRef.current = performance.now();
    setPhase("standard");
  }, []);

  const handleStandardClick = useCallback(
    (item: NavItem) => {
      if (!item.isTarget) return;
      const elapsed = performance.now() - startTimeRef.current;
      setTimes([elapsed]);
      // Brief pause before moving to novel round
      setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("novel");
      }, 600);
    },
    []
  );

  const handleNovelClick = useCallback(
    (item: NavItem) => {
      if (!item.isTarget) {
        setWrongClick(true);
        setTimeout(() => setWrongClick(false), 400);
        return;
      }
      const elapsed = performance.now() - startTimeRef.current;
      setTimes((prev) => [...prev, elapsed]);
      setPhase("results");
    },
    []
  );

  const handleReset = useCallback(() => {
    setTimes([]);
    setWrongClick(false);
    setShowHint(false);
    setPhase("intro");
  }, []);

  // -------------------------------------------------------------------------
  // Render: Intro
  // -------------------------------------------------------------------------

  if (phase === "intro") {
    return (
      <div className="rounded-2xl border-2 border-[var(--primary)]/20 bg-white p-6 shadow-lg md:p-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
            <IconGear className="h-8 w-8 text-[var(--primary)]" />
          </div>
          <h3 className="font-bricolage mb-3 text-xl font-bold text-gray-900">
            {isFr
              ? "Testez la loi de Jakob"
              : "Test Jakob's Law"}
          </h3>
          <p className="font-montserrat mb-6 text-sm leading-relaxed text-gray-600">
            {isFr
              ? "Vous allez effectuer la m\u00eame t\u00e2che sur deux interfaces : l'une familière, l'autre inhabituelle. Voyez par vous-m\u00eame la diff\u00e9rence de rapidit\u00e9."
              : "You'll perform the same task on two interfaces: one familiar, one unfamiliar. See the speed difference for yourself."}
          </p>
          <p className="font-montserrat mb-6 text-xs text-gray-400">
            {isFr
              ? "2 manches \u2022 ~15 secondes"
              : "2 rounds \u2022 ~15 seconds"}
          </p>
          <button
            onClick={handleStart}
            className="font-montserrat inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[var(--primary-dark)] hover:shadow-lg active:scale-[0.97]"
          >
            {isFr ? "Commencer" : "Start"}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render: Standard / Novel (phone mockup)
  // -------------------------------------------------------------------------

  if (phase === "standard" || phase === "novel") {
    const isNovel = phase === "novel";
    const icons = isNovel ? NOVEL_ICONS : STANDARD_ICONS;
    const roundLabel = isNovel
      ? isFr
        ? "Manche 2/2 \u2014 Interface in\u00e9dite"
        : "Round 2/2 \u2014 Novel interface"
      : isFr
        ? "Manche 1/2 \u2014 Interface standard"
        : "Round 1/2 \u2014 Standard interface";

    return (
      <div className="rounded-2xl border-2 border-[var(--primary)]/20 bg-white p-6 shadow-lg md:p-8">
        {/* Round indicator */}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-montserrat text-xs font-semibold tracking-wide text-gray-400 uppercase">
            {roundLabel}
          </span>
          <div className="flex gap-1.5">
            <div
              className={cn(
                "h-2 w-8 rounded-full transition-colors",
                !isNovel ? "bg-[var(--primary)]" : "bg-[var(--primary)]/30"
              )}
            />
            <div
              className={cn(
                "h-2 w-8 rounded-full transition-colors",
                isNovel ? "bg-[var(--primary)]" : "bg-gray-200"
              )}
            />
          </div>
        </div>

        {/* Task instruction */}
        <div className="mb-6 text-center">
          <p className="font-montserrat text-sm font-medium text-gray-700">
            {isFr
              ? "Trouvez et cliquez sur "
              : "Find and click "}
            <span className="font-semibold text-[var(--primary)]">
              {isFr ? "Param\u00e8tres" : "Settings"}
            </span>
          </p>
        </div>

        {/* Phone mockup */}
        <div className="mx-auto max-w-[280px]">
          <div
            className={cn(
              "relative overflow-hidden rounded-[2rem] border-4 border-gray-800 bg-gray-50 transition-colors",
              wrongClick && "bg-red-50"
            )}
          >
            {/* Phone screen area */}
            <div className="flex h-[420px] flex-col">
              {/* Status bar */}
              <div className="flex items-center justify-between bg-white px-6 py-2">
                <span className="text-[10px] font-semibold text-gray-800">9:41</span>
                <div className="flex gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-800" />
                </div>
              </div>

              {/* Content area */}
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6">
                <div className="h-6 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-5/6 rounded bg-gray-100" />
                <div className="mt-4 h-24 w-full rounded-xl bg-gray-100" />
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-2/3 rounded bg-gray-100" />
              </div>

              {/* Bottom navigation bar */}
              <div className="border-t border-gray-200 bg-white px-2 py-3">
                <div className="flex items-center justify-around">
                  {NAV_ITEMS.map((item) => {
                    const Icon = icons[item.id];
                    return (
                      <button
                        key={item.id}
                        onPointerDown={() =>
                          isNovel
                            ? handleNovelClick(item)
                            : handleStandardClick(item)
                        }
                        className={cn(
                          "flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 transition-all",
                          "hover:bg-gray-100 active:scale-90",
                          item.isTarget && !isNovel && "cursor-pointer"
                        )}
                        aria-label={isFr ? item.labelFr : item.labelEn}
                      >
                        <Icon className="text-gray-600" />
                        {!isNovel && (
                          <span className="text-[9px] font-medium text-gray-500">
                            {isFr ? item.labelFr : item.labelEn}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center bg-white pb-2">
                <div className="h-1 w-28 rounded-full bg-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Wrong-click feedback */}
        {isNovel && wrongClick && (
          <p className="font-montserrat mt-4 text-center text-xs font-medium text-red-500 animate-pulse">
            {isFr ? "Ce n'est pas le bon !" : "That's not the right one!"}
          </p>
        )}

        {/* Hint for novel round */}
        {isNovel && showHint && !wrongClick && (
          <p className="font-montserrat mt-4 text-center text-xs text-gray-400 italic">
            {isFr
              ? "Indice : l'ic\u00f4ne abstraite repr\u00e9sentant les param\u00e8tres est l'\u00e9toile \u2605"
              : "Hint: the abstract icon representing settings is the star \u2605"}
          </p>
        )}

        {/* Success flash for standard round */}
        {phase === "standard" && times.length === 1 && (
          <div className="font-montserrat mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {formatMs(times[0])}
            </span>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render: Results
  // -------------------------------------------------------------------------

  const standardTime = times[0] ?? 0;
  const novelTime = times[1] ?? 0;
  const standardFaster = standardTime < novelTime;
  const ratio = novelTime > 0 ? (novelTime / standardTime).toFixed(1) : "?";

  return (
    <div className="rounded-2xl border-2 border-[var(--primary)]/20 bg-white p-6 shadow-lg md:p-8">
      <h3 className="font-bricolage mb-6 text-center text-xl font-bold text-gray-900">
        {isFr ? "R\u00e9sultats" : "Results"}
      </h3>

      {/* Cards */}
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-4">
        {/* Standard card */}
        <div
          className={cn(
            "rounded-xl border-2 p-4 text-center transition-colors",
            standardFaster
              ? "border-green-200 bg-green-50"
              : "border-red-200 bg-red-50"
          )}
        >
          <p className="font-montserrat mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            {isFr ? "Interface standard" : "Standard Interface"}
          </p>
          <div className="mb-3 flex justify-center gap-1 text-gray-500">
            <IconHome className="h-4 w-4" />
            <IconSearch className="h-4 w-4" />
            <IconBell className="h-4 w-4" />
            <IconGear className="h-4 w-4 text-[var(--primary)]" />
            <IconProfile className="h-4 w-4" />
          </div>
          <p
            className={cn(
              "font-bricolage text-2xl font-bold",
              standardFaster ? "text-green-600" : "text-red-600"
            )}
          >
            {formatMs(standardTime)}
          </p>
          {standardFaster && (
            <span className="font-montserrat mt-1 inline-block text-[10px] font-semibold text-green-600 uppercase">
              {isFr ? "Plus rapide" : "Faster"}
            </span>
          )}
        </div>

        {/* Novel card */}
        <div
          className={cn(
            "rounded-xl border-2 p-4 text-center transition-colors",
            !standardFaster
              ? "border-green-200 bg-green-50"
              : "border-red-200 bg-red-50"
          )}
        >
          <p className="font-montserrat mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            {isFr ? "Interface in\u00e9dite" : "Novel Interface"}
          </p>
          <div className="mb-3 flex justify-center gap-1 text-gray-500">
            <IconDiamond className="h-4 w-4" />
            <IconHexagon className="h-4 w-4" />
            <IconTriangle className="h-4 w-4" />
            <IconStar className="h-4 w-4 text-[var(--primary)]" />
            <IconPentagon className="h-4 w-4" />
          </div>
          <p
            className={cn(
              "font-bricolage text-2xl font-bold",
              !standardFaster ? "text-green-600" : "text-red-600"
            )}
          >
            {formatMs(novelTime)}
          </p>
          {!standardFaster && (
            <span className="font-montserrat mt-1 inline-block text-[10px] font-semibold text-green-600 uppercase">
              {isFr ? "Plus rapide" : "Faster"}
            </span>
          )}
        </div>
      </div>

      {/* Ratio */}
      {standardFaster && (
        <div className="mt-5 text-center">
          <span className="font-montserrat inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--primary)]">
            {isFr ? `${ratio}x plus lent avec l'interface in\u00e9dite` : `${ratio}x slower with the novel interface`}
          </span>
        </div>
      )}

      {/* Summary */}
      <p className="font-montserrat mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-gray-600">
        {isFr
          ? "Comme Jakob le pr\u00e9dit, les interfaces famili\u00e8res permettent des d\u00e9cisions plus rapides. Les utilisateurs passent la majorit\u00e9 de leur temps sur d'autres sites \u2014 ils pr\u00e9f\u00e8rent que votre site fonctionne comme ceux qu'ils connaissent d\u00e9j\u00e0."
          : "As Jakob predicted, familiar interfaces enable faster decisions. Users spend most of their time on other sites \u2014 they prefer your site to work like the ones they already know."}
      </p>

      {/* Try again */}
      <div className="mt-6 text-center">
        <button
          onClick={handleReset}
          className="font-montserrat inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-[var(--primary)]/40 hover:text-[var(--primary)] active:scale-[0.97]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {isFr ? "Recommencer" : "Try again"}
        </button>
      </div>
    </div>
  );
}
