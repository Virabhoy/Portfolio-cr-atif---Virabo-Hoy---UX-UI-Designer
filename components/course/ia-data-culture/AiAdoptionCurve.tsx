"use client";

import { useLanguage } from "@/lib/language-context";

interface Phase {
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  x: number;
  y: number;
}

export default function AiAdoptionCurve() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Courbe d'adoption de l'IA en entreprise"
      : "AI Adoption Curve in Organizations";

  const phases: Phase[] = [
    {
      label: { fr: "Experimentation", en: "Experimentation" },
      description: { fr: "POCs et tests isoles", en: "POCs & isolated tests" },
      x: 120,
      y: 310,
    },
    {
      label: { fr: "Pilote", en: "Pilot" },
      description: { fr: "Premiers cas d'usage", en: "First use cases" },
      x: 280,
      y: 240,
    },
    {
      label: { fr: "Passage a l'echelle", en: "Scaling" },
      description: { fr: "Deploiement multi-equipes", en: "Multi-team deployment" },
      x: 460,
      y: 130,
    },
    {
      label: { fr: "Transformation", en: "Transformation" },
      description: { fr: "IA au coeur de la strategie", en: "AI at the core of strategy" },
      x: 640,
      y: 80,
    },
  ];

  // S-curve path
  const curvePath = "M 60,340 C 100,340 140,330 180,300 C 240,250 280,230 340,180 C 400,130 460,100 540,85 C 600,75 660,72 720,70";

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 780 400" className="w-full h-auto" role="img" aria-label={title}>
        <defs>
          <linearGradient id="curve-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
          <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0.02} />
          </linearGradient>
        </defs>

        <text x={390} y={30} textAnchor="middle" fill="#1E1B4B" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* Axes */}
        <line x1={60} y1={355} x2={740} y2={355} stroke="#CBD5E1" strokeWidth={1} />
        <line x1={60} y1={355} x2={60} y2={55} stroke="#CBD5E1" strokeWidth={1} />

        {/* Axis labels */}
        <text x={400} y={390} textAnchor="middle" fill="#64748B" fontSize={11}>
          {language === "fr" ? "Temps" : "Time"}
        </text>
        <text x={25} y={200} textAnchor="middle" fill="#64748B" fontSize={11} transform="rotate(-90, 25, 200)">
          {language === "fr" ? "Adoption" : "Adoption"}
        </text>

        {/* Filled area under curve */}
        <path d={`${curvePath} L 720,355 L 60,355 Z`} fill="url(#area-gradient)" />

        {/* S-curve */}
        <path d={curvePath} fill="none" stroke="url(#curve-gradient)" strokeWidth={3} strokeLinecap="round" />

        {/* Phase markers and labels */}
        {phases.map((phase, i) => (
          <g key={i}>
            {/* Vertical dashed line to curve */}
            <line
              x1={phase.x}
              y1={355}
              x2={phase.x}
              y2={phase.y + 20}
              stroke="#7C3AED"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.4}
            />

            {/* Dot on curve area */}
            <circle cx={phase.x} cy={phase.y} r={6} fill="white" stroke="#7C3AED" strokeWidth={2} />
            <circle cx={phase.x} cy={phase.y} r={3} fill="#7C3AED" />

            {/* Label card */}
            <rect
              x={phase.x - 65}
              y={phase.y - 48}
              width={130}
              height={38}
              rx={6}
              fill="white"
              stroke="#EDE9FE"
              strokeWidth={1}
            />
            <text x={phase.x} y={phase.y - 32} textAnchor="middle" fill="#7C3AED" fontSize={11} fontWeight={700}>
              {phase.label[language]}
            </text>
            <text x={phase.x} y={phase.y - 18} textAnchor="middle" fill="#64748B" fontSize={9}>
              {phase.description[language]}
            </text>

            {/* Phase number on x-axis */}
            <circle cx={phase.x} cy={355} r={10} fill="#EDE9FE" />
            <text x={phase.x} y={359} textAnchor="middle" fill="#7C3AED" fontSize={9} fontWeight={700}>
              {i + 1}
            </text>
          </g>
        ))}

        {/* "Most companies" indicator */}
        <g>
          <path d={`M 180,370 l -6,-8 h12 z`} fill="#EF4444" />
          <text x={180} y={385} textAnchor="middle" fill="#EF4444" fontSize={9} fontWeight={600}>
            {language === "fr" ? "La plupart des entreprises" : "Most companies"}
          </text>
        </g>

        {/* "Leaders" indicator */}
        <g>
          <path d={`M 550,370 l -6,-8 h12 z`} fill="#22C55E" />
          <text x={550} y={385} textAnchor="middle" fill="#22C55E" fontSize={9} fontWeight={600}>
            {language === "fr" ? "Leaders du marche" : "Market leaders"}
          </text>
        </g>
      </svg>
    </div>
  );
}
