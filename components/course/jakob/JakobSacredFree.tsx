"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function ArrowsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15,4 20,4 20,9" />
      <line x1="20" y1="4" x2="14" y2="10" />
      <polyline points="9,20 4,20 4,15" />
      <line x1="4" y1="20" x2="10" y2="14" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4L10 20L13 13L20 10L4 4Z" />
    </svg>
  );
}

function TouchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 11V3" />
      <path d="M12 11L17 16H14V21H10V16H7L12 11Z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9 2 7 4 7 6C5 6 3 8 3 10C3 12 4 13 5 14C4 15 3 17 5 19C7 21 9 20 10 19C11 21 13 21 14 19C15 20 17 21 19 19C21 17 20 15 19 14C20 13 21 12 21 10C21 8 19 6 17 6C17 4 15 2 12 2Z" />
      <path d="M12 2V22" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L12 12" />
      <path d="M14 4L20 4L20 10" />
      <path d="M12 12C10 14 6 14 4 16C2 18 4 22 8 20C10 18 10 14 12 12Z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4H8C10 4 12 5 12 7V20C12 18 10 17 8 17H4V4Z" />
      <path d="M20 4H16C14 4 12 5 12 7V20C12 18 14 17 16 17H20V4Z" />
    </svg>
  );
}

function SpeechIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11C21 15 17 18 12 18C11 18 10 18 9 17L4 20V15C3 14 2 12 2 11C2 7 6 4 12 4C18 4 21 7 21 11Z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15L16 10L5 21" />
    </svg>
  );
}

export default function JakobSacredFree() {
  const { language } = useLanguage();

  const sacredItems = [
    {
      icon: <ArrowsIcon />,
      labelFr: "Navigation",
      labelEn: "Navigation",
    },
    {
      icon: <CursorIcon />,
      labelFr: "Patterns d'interaction",
      labelEn: "Interaction patterns",
    },
    {
      icon: <TouchIcon />,
      labelFr: "Gestes connus",
      labelEn: "Known gestures",
    },
    {
      icon: <BrainIcon />,
      labelFr: "Raccourcis cognitifs",
      labelEn: "Cognitive shortcuts",
    },
  ];

  const freeItems = [
    {
      icon: <BrushIcon />,
      labelFr: "Direction artistique",
      labelEn: "Art direction",
    },
    {
      icon: <BookIcon />,
      labelFr: "Storytelling",
      labelEn: "Storytelling",
    },
    {
      icon: <SpeechIcon />,
      labelFr: "Ton editorial",
      labelEn: "Editorial tone",
    },
    {
      icon: <ImageIcon />,
      labelFr: "Visuels memorables",
      labelEn: "Memorable visuals",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Sacred - blue panel */}
          <div className="bg-[#0099FF] p-6 md:p-8 text-white">
            <h3 className="font-bricolage text-lg font-bold mb-1">
              {language === "fr"
                ? "Ce que la loi protege"
                : "What the law protects"}
            </h3>
            <p className="font-montserrat text-sm text-white/70 mb-6">
              {language === "fr" ? "Le sacre" : "Sacred"}
            </p>
            <ul className="space-y-4">
              {sacredItems.map((item) => (
                <li key={item.labelEn} className="flex items-center gap-3">
                  <span className="shrink-0 text-white">{item.icon}</span>
                  <span className="font-montserrat text-sm">
                    {language === "fr" ? item.labelFr : item.labelEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Free - white panel */}
          <div className="p-6 md:p-8">
            <h3 className="font-bricolage text-lg font-bold text-slate-900 mb-1">
              {language === "fr"
                ? "Ce qu'elle n'interdit pas"
                : "What it doesn't forbid"}
            </h3>
            <p className="font-montserrat text-sm text-slate-400 mb-6">
              {language === "fr" ? "Le libre" : "Free"}
            </p>
            <ul className="space-y-4">
              {freeItems.map((item) => (
                <li key={item.labelEn} className="flex items-center gap-3">
                  <span className="shrink-0 text-[#0066CC]">{item.icon}</span>
                  <span className="font-montserrat text-sm text-slate-700">
                    {language === "fr" ? item.labelFr : item.labelEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4">
          <p className="font-montserrat text-sm text-slate-600 text-center leading-relaxed">
            <span className="font-semibold text-[#E8613C]">
              {language === "fr" ? "L'erreur classique" : "The classic mistake"}
              {" : "}
            </span>
            {language === "fr"
              ? "etre original sur la navigation au lieu de l'etre sur l'expression."
              : "being original with navigation instead of expression."}
          </p>
        </div>
      </div>
    </div>
  );
}
