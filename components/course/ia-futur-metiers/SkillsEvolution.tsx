"use client";

import { useLanguage } from "@/lib/language-context";

interface SkillRow {
  label: { fr: string; en: string };
  before: number;
  after: number;
  trend: "up" | "down" | "stable" | "new";
  color: string;
}

export default function SkillsEvolution() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Evolution de l'importance des competences"
      : "Skills Importance Evolution";

  const beforeLabel = language === "fr" ? "Avant IA" : "Pre-AI";
  const afterLabel = language === "fr" ? "Ere IA" : "AI Era";

  const skills: SkillRow[] = [
    {
      label: { fr: "Competences techniques", en: "Technical Skills" },
      before: 90,
      after: 55,
      trend: "down",
      color: "#EF4444",
    },
    {
      label: { fr: "Soft skills", en: "Soft Skills" },
      before: 50,
      after: 85,
      trend: "up",
      color: "#22C55E",
    },
    {
      label: { fr: "Maitrise de l'IA", en: "AI Literacy" },
      before: 5,
      after: 90,
      trend: "new",
      color: "#7C3AED",
    },
    {
      label: { fr: "Expertise metier", en: "Domain Expertise" },
      before: 75,
      after: 78,
      trend: "stable",
      color: "#3B82F6",
    },
    {
      label: { fr: "Creativite", en: "Creativity" },
      before: 55,
      after: 88,
      trend: "up",
      color: "#F59E0B",
    },
  ];

  const rowHeight = 60;
  const startY = 80;
  const barMaxW = 200;
  const labelW = 160;
  const barStartX = 200;
  const svgHeight = startY + skills.length * rowHeight + 30;

  function trendIcon(trend: string, x: number, y: number) {
    switch (trend) {
      case "up":
        return <polygon points={`${x},${y + 6} ${x + 6},${y - 6} ${x + 12},${y + 6}`} fill="#22C55E" />;
      case "down":
        return <polygon points={`${x},${y - 6} ${x + 6},${y + 6} ${x + 12},${y - 6}`} fill="#EF4444" />;
      case "stable":
        return <rect x={x} y={y - 3} width={12} height={6} rx={3} fill="#3B82F6" />;
      case "new":
        return (
          <g>
            <circle cx={x + 6} cy={y} r={8} fill="#7C3AED" />
            <text x={x + 6} y={y + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight={700}>
              !
            </text>
          </g>
        );
      default:
        return null;
    }
  }

  function trendLabel(trend: string): string {
    if (language === "fr") {
      switch (trend) {
        case "up": return "En hausse";
        case "down": return "En baisse";
        case "stable": return "Stable";
        case "new": return "Nouveau";
        default: return "";
      }
    }
    switch (trend) {
      case "up": return "Increasing";
      case "down": return "Decreasing";
      case "stable": return "Stable";
      case "new": return "New";
      default: return "";
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 650 ${svgHeight}`} className="w-full h-auto" role="img" aria-label={title}>
        <text x={325} y={28} textAnchor="middle" fill="#1E1B4B" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* Column headers */}
        <text x={labelW / 2 + 20} y={60} textAnchor="middle" fill="#64748B" fontSize={11} fontWeight={600}>
          {language === "fr" ? "COMPETENCE" : "SKILL"}
        </text>
        <text x={barStartX + barMaxW / 2} y={52} textAnchor="middle" fill="#94A3B8" fontSize={10}>
          {beforeLabel}
        </text>
        <text x={barStartX + barMaxW / 2} y={66} textAnchor="middle" fill="#7C3AED" fontSize={10} fontWeight={600}>
          {afterLabel}
        </text>
        <text x={barStartX + barMaxW + 60} y={60} textAnchor="middle" fill="#64748B" fontSize={11} fontWeight={600}>
          {language === "fr" ? "TENDANCE" : "TREND"}
        </text>

        {/* Rows */}
        {skills.map((skill, i) => {
          const y = startY + i * rowHeight;
          const beforeW = (skill.before / 100) * barMaxW;
          const afterW = (skill.after / 100) * barMaxW;

          return (
            <g key={i}>
              {/* Row background */}
              {i % 2 === 0 && (
                <rect x={10} y={y} width={630} height={rowHeight} rx={4} fill="#F8FAFC" />
              )}

              {/* Label */}
              <text x={20} y={y + rowHeight / 2 + 4} fill="#1E1B4B" fontSize={12} fontWeight={500}>
                {skill.label[language]}
              </text>

              {/* Before bar (ghost) */}
              <rect x={barStartX} y={y + 14} width={beforeW} height={10} rx={5} fill="#E2E8F0" />
              <text x={barStartX + beforeW + 6} y={y + 23} fill="#94A3B8" fontSize={9}>
                {skill.before}%
              </text>

              {/* After bar */}
              <rect x={barStartX} y={y + 30} width={afterW} height={12} rx={6} fill={skill.color} opacity={0.85} />
              <text x={barStartX + afterW + 6} y={y + 41} fill={skill.color} fontSize={10} fontWeight={600}>
                {skill.after}%
              </text>

              {/* Arrow between bars */}
              {skill.before !== skill.after && (
                <line
                  x1={barStartX + beforeW}
                  y1={y + 24}
                  x2={barStartX + afterW}
                  y2={y + 30}
                  stroke={skill.color}
                  strokeWidth={1}
                  strokeDasharray="2 2"
                  opacity={0.5}
                />
              )}

              {/* Trend icon */}
              {trendIcon(skill.trend, barStartX + barMaxW + 45, y + rowHeight / 2)}
              <text x={barStartX + barMaxW + 80} y={y + rowHeight / 2 + 4} fill="#64748B" fontSize={9}>
                {trendLabel(skill.trend)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
