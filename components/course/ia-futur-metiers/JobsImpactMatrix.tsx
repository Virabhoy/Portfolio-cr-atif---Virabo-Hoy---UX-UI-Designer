"use client";

import { useLanguage } from "@/lib/language-context";

interface JobBubble {
  label: { fr: string; en: string };
  x: number;
  y: number;
  r: number;
  color: string;
}

export default function JobsImpactMatrix() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Matrice d'impact de l'IA sur les metiers"
      : "AI Impact Matrix on Jobs";

  const jobs: JobBubble[] = [
    // High impact, routine (top-left)
    { label: { fr: "Saisie de donnees", en: "Data Entry" }, x: 160, y: 100, r: 28, color: "#EF4444" },
    { label: { fr: "Comptabilite", en: "Accounting" }, x: 250, y: 130, r: 24, color: "#F87171" },
    { label: { fr: "Administration", en: "Admin" }, x: 180, y: 170, r: 26, color: "#EF4444" },
    // High impact, creative (top-right)
    { label: { fr: "Traduction", en: "Translation" }, x: 450, y: 120, r: 24, color: "#F59E0B" },
    { label: { fr: "Redaction", en: "Copywriting" }, x: 530, y: 140, r: 22, color: "#F59E0B" },
    // Low impact, routine (bottom-left)
    { label: { fr: "Artisanat", en: "Crafts" }, x: 170, y: 310, r: 22, color: "#22C55E" },
    { label: { fr: "Maintenance", en: "Maintenance" }, x: 260, y: 290, r: 20, color: "#22C55E" },
    // Low impact, creative (bottom-right)
    { label: { fr: "Strategie", en: "Strategy" }, x: 490, y: 300, r: 28, color: "#7C3AED" },
    { label: { fr: "Design UX", en: "UX Design" }, x: 560, y: 250, r: 26, color: "#8B5CF6" },
    { label: { fr: "Leadership", en: "Leadership" }, x: 420, y: 280, r: 24, color: "#7C3AED" },
    { label: { fr: "Recherche", en: "Research" }, x: 530, y: 330, r: 22, color: "#A78BFA" },
  ];

  const originX = 100;
  const originY = 375;
  const axisW = 540;
  const axisH = 310;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 700 430" className="w-full h-auto" role="img" aria-label={title}>
        <text x={350} y={30} textAnchor="middle" fill="#1E1B4B" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* Quadrant backgrounds */}
        <rect x={originX} y={originY - axisH} width={axisW / 2} height={axisH / 2} fill="#FEE2E2" opacity={0.4} />
        <rect x={originX + axisW / 2} y={originY - axisH} width={axisW / 2} height={axisH / 2} fill="#FEF3C7" opacity={0.4} />
        <rect x={originX} y={originY - axisH / 2} width={axisW / 2} height={axisH / 2} fill="#DCFCE7" opacity={0.4} />
        <rect x={originX + axisW / 2} y={originY - axisH / 2} width={axisW / 2} height={axisH / 2} fill="#EDE9FE" opacity={0.4} />

        {/* Quadrant labels */}
        <text x={originX + axisW / 4} y={80} textAnchor="middle" fill="#DC2626" fontSize={10} fontWeight={600} opacity={0.7}>
          {language === "fr" ? "FORT IMPACT" : "HIGH IMPACT"}
        </text>
        <text x={originX + axisW / 4} y={92} textAnchor="middle" fill="#DC2626" fontSize={9} opacity={0.6}>
          {language === "fr" ? "Taches routinieres" : "Routine tasks"}
        </text>

        <text x={originX + (3 * axisW) / 4} y={80} textAnchor="middle" fill="#D97706" fontSize={10} fontWeight={600} opacity={0.7}>
          {language === "fr" ? "IMPACT MODERE" : "MODERATE IMPACT"}
        </text>
        <text x={originX + (3 * axisW) / 4} y={92} textAnchor="middle" fill="#D97706" fontSize={9} opacity={0.6}>
          {language === "fr" ? "Taches creatives" : "Creative tasks"}
        </text>

        <text x={originX + (3 * axisW) / 4} y={350} textAnchor="middle" fill="#7C3AED" fontSize={10} fontWeight={600} opacity={0.7}>
          {language === "fr" ? "FAIBLE IMPACT" : "LOW IMPACT"}
        </text>
        <text x={originX + (3 * axisW) / 4} y={362} textAnchor="middle" fill="#7C3AED" fontSize={9} opacity={0.6}>
          {language === "fr" ? "Haute valeur humaine" : "High human value"}
        </text>

        {/* Axes */}
        <line x1={originX} y1={originY} x2={originX + axisW} y2={originY} stroke="#94A3B8" strokeWidth={1.5} />
        <line x1={originX} y1={originY} x2={originX} y2={originY - axisH} stroke="#94A3B8" strokeWidth={1.5} />

        {/* Axis arrows */}
        <polygon points={`${originX + axisW},${originY} ${originX + axisW - 8},${originY - 5} ${originX + axisW - 8},${originY + 5}`} fill="#94A3B8" />
        <polygon points={`${originX},${originY - axisH} ${originX - 5},${originY - axisH + 8} ${originX + 5},${originY - axisH + 8}`} fill="#94A3B8" />

        {/* Axis labels */}
        <text x={originX + axisW / 2} y={originY + 25} textAnchor="middle" fill="#64748B" fontSize={12} fontWeight={600}>
          {language === "fr" ? "Routinier" : "Routine"}
        </text>
        <text x={originX + axisW + 5} y={originY + 25} textAnchor="end" fill="#64748B" fontSize={11}>
          {language === "fr" ? "Creatif" : "Creative"}
        </text>
        <text x={originX - 10} y={originY - axisH + 10} textAnchor="end" fill="#64748B" fontSize={11}>
          {language === "fr" ? "Impact IA eleve" : "High AI Impact"}
        </text>
        <text x={originX - 10} y={originY - 5} textAnchor="end" fill="#64748B" fontSize={11}>
          {language === "fr" ? "Faible" : "Low"}
        </text>

        {/* Job bubbles */}
        {jobs.map((job, i) => (
          <g key={i}>
            <circle cx={job.x} cy={job.y} r={job.r} fill={job.color} opacity={0.2} stroke={job.color} strokeWidth={1.5} />
            <text x={job.x} y={job.y + 4} textAnchor="middle" fill={job.color === "#7C3AED" || job.color === "#8B5CF6" || job.color === "#A78BFA" ? "#5B21B6" : job.color === "#22C55E" ? "#166534" : job.color === "#F59E0B" ? "#92400E" : "#991B1B"} fontSize={9} fontWeight={600}>
              {job.label[language]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
