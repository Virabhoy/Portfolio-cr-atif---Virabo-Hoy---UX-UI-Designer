"use client";

import { useLanguage } from "@/lib/language-context";

interface TimelinePoint {
  year: string;
  labelFr: string;
  labelEn: string;
  icon: React.ReactNode;
}

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <line x1="6" y1="6" x2="18" y2="6" />
    <line x1="6" y1="18" x2="18" y2="18" />
    <circle cx="12" cy="20" r="0.5" fill="#0066CC" />
  </svg>
);

const ComponentsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="8" height="8" rx="1" />
    <rect x="14" y="2" width="8" height="8" rx="1" />
    <rect x="2" y="14" width="8" height="8" rx="1" />
    <path d="M18 14 L22 18 L18 22 L14 18 Z" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 C12 8, 16 12, 22 12 C16 12, 12 16, 12 22 C12 16, 8 12, 2 12 C8 12, 12 8, 12 2Z" fill="#0099FF" fillOpacity="0.15" />
    <circle cx="18" cy="5" r="1.5" fill="#0099FF" fillOpacity="0.4" stroke="none" />
    <circle cx="5" cy="5" r="1" fill="#0099FF" fillOpacity="0.3" stroke="none" />
  </svg>
);

const points: TimelinePoint[] = [
  { year: "2010", labelFr: "Pixel Perfect", labelEn: "Pixel Perfect", icon: <GridIcon /> },
  { year: "2015", labelFr: "Mobile First", labelEn: "Mobile First", icon: <PhoneIcon /> },
  { year: "2020", labelFr: "Design Systems", labelEn: "Design Systems", icon: <ComponentsIcon /> },
  { year: "2025", labelFr: "UX Augmente par l'IA", labelEn: "AI-Augmented UX", icon: <SparkleIcon /> },
];

export default function UxEvolutionTimeline() {
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <p className="font-bricolage text-lg md:text-xl font-semibold text-center mb-8 text-gray-700">
        {language === "fr" ? "L'evolution du design UX" : "The evolution of UX design"}
      </p>

      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <svg className="w-full" viewBox="0 0 800 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main line */}
          <line x1="80" y1="60" x2="720" y2="60" stroke="#0066CC" strokeWidth="3" />
          {/* Arrow at end */}
          <polygon points="720,52 740,60 720,68" fill="#0066CC" />

          {/* Timeline points */}
          {points.map((point, i) => {
            const cx = 80 + i * 213;
            return (
              <g key={point.year}>
                {/* Outer circle */}
                <circle cx={cx} cy={60} r={24} fill="white" stroke="#0066CC" strokeWidth={3} />
                {/* Icon positioned via foreignObject */}
                <foreignObject x={cx - 12} y={48} width={24} height={24}>
                  {point.icon}
                </foreignObject>
                {/* Year */}
                <text x={cx} y={110} textAnchor="middle" className="font-bricolage" fill="#0066CC" fontWeight="700" fontSize="16">
                  {point.year}
                </text>
                {/* Label */}
                <text x={cx} y={130} textAnchor="middle" className="font-montserrat" fill="#6b7280" fontSize="13">
                  {language === "fr" ? point.labelFr : point.labelEn}
                </text>
              </g>
            );
          })}

          {/* Gradient glow on the last point */}
          <defs>
            <radialGradient id="glowTimeline" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#0099FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0099FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={80 + 3 * 213} cy={60} r={38} fill="url(#glowTimeline)" />
        </svg>
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden relative pl-10">
        {/* Vertical line */}
        <div className="absolute left-[1.95rem] top-8 bottom-8 w-[3px] bg-[#0066CC] z-0" />
        {/* Arrow at bottom */}
        <div className="absolute left-[1.3rem] bottom-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#0066CC] z-10" />

        <div className="flex flex-col gap-10">
          {points.map((point) => (
            <div key={point.year} className="flex items-start gap-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-[#0066CC] flex items-center justify-center shadow-md shrink-0 -ml-10">
                {point.icon}
              </div>
              <div className="pt-1">
                <span className="font-bricolage font-bold text-[#0066CC] text-lg block">
                  {point.year}
                </span>
                <span className="font-montserrat text-sm text-gray-600">
                  {language === "fr" ? point.labelFr : point.labelEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
