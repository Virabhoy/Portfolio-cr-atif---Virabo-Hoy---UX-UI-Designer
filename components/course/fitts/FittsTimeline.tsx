"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface TimelineNode {
  year: string;
  labelFr: string;
  labelEn: string;
  icon: React.ReactNode;
}

const GearIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="4" />
    <path d="M14 2 L14 5 M14 23 L14 26 M2 14 L5 14 M23 14 L26 14 M4.9 4.9 L7 7 M21 21 L23.1 23.1 M4.9 23.1 L7 21 M21 7 L23.1 4.9" />
    <circle cx="14" cy="14" r="9" strokeDasharray="3 3" opacity="0.4" />
  </svg>
);

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 26 V14" />
    <path d="M8 14 C4 14, 3 10, 5 7 C3 4, 7 2, 10 3 C11 1, 17 1, 18 3 C21 2, 25 4, 23 7 C25 10, 24 14, 20 14" />
    <path d="M10 14 C10 18, 14 18, 14 14" />
    <path d="M18 14 C18 18, 14 18, 14 14" />
    <path d="M8 8 Q11 10, 14 8" opacity="0.5" />
    <path d="M14 8 Q17 10, 20 8" opacity="0.5" />
  </svg>
);

const CursorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M6 4 L6 20 L10.5 16 L15 24 L18 22.5 L13.5 14.5 L19 14 Z"
      stroke="#0066CC"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="#0066CC"
      fillOpacity="0.1"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="3" width="14" height="22" rx="3" />
    <line x1="7" y1="7" x2="21" y2="7" />
    <line x1="7" y1="21" x2="21" y2="21" />
    <circle cx="14" cy="23.5" r="0.5" fill="#0066CC" />
  </svg>
);

const nodes: TimelineNode[] = [
  { year: "1950s", labelFr: "Ergonomie", labelEn: "Ergonomics", icon: <GearIcon /> },
  { year: "1970s", labelFr: "Psychologie Cognitive", labelEn: "Cognitive Psychology", icon: <BrainIcon /> },
  { year: "1980s", labelFr: "Informatique (WIMP)", labelEn: "Computing (WIMP)", icon: <CursorIcon /> },
  { year: "2000s+", labelFr: "UX Design Moderne", labelEn: "Modern UX Design", icon: <PhoneIcon /> },
];

export default function FittsTimeline() {
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start relative">
        {/* Connecting line */}
        <div className="absolute top-8 left-8 right-8 h-[3px] bg-[#0066CC] z-0" />

        {nodes.map((node, i) => (
          <div
            key={node.year}
            className={cn(
              "flex-1 flex flex-col items-center relative z-10",
              i === 0 && "items-start",
              i === nodes.length - 1 && "items-end"
            )}
          >
            {/* Circle node */}
            <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0066CC] flex items-center justify-center shadow-md">
              {node.icon}
            </div>
            {/* Year */}
            <span className="mt-4 font-bricolage font-bold text-[#0066CC] text-lg">
              {node.year}
            </span>
            {/* Label */}
            <span className="mt-1 font-montserrat text-sm text-gray-600 text-center max-w-[140px]">
              {language === "fr" ? node.labelFr : node.labelEn}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden relative pl-10">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.95rem] top-8 bottom-8 w-[3px] bg-[#0066CC] z-0" />

        <div className="flex flex-col gap-10">
          {nodes.map((node) => (
            <div key={node.year} className="flex items-start gap-5 relative z-10">
              {/* Circle node */}
              <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0066CC] flex items-center justify-center shadow-md shrink-0 -ml-10">
                {node.icon}
              </div>
              {/* Text */}
              <div className="pt-1">
                <span className="font-bricolage font-bold text-[#0066CC] text-lg block">
                  {node.year}
                </span>
                <span className="font-montserrat text-sm text-gray-600">
                  {language === "fr" ? node.labelFr : node.labelEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
