"use client";

import { useLanguage } from "@/lib/language-context";

export default function OneHandStats() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Utilisation a une main"
        : "One-Handed Usage",
    mainStat:
      language === "fr"
        ? "des interactions mobiles"
        : "of mobile interactions",
    walking: language === "fr" ? "En marchant" : "While walking",
    holding:
      language === "fr"
        ? "En tenant quelque chose"
        : "While holding something",
    multitask: language === "fr" ? "Multitache" : "Multitasking",
    note:
      language === "fr"
        ? "L'utilisation a une main n'est pas un choix — c'est une contrainte environnementale."
        : "One-handed use isn't a choice — it's an environmental constraint.",
  };

  const contexts = [
    { label: t.walking, percent: 49, color: "#0099FF" },
    { label: t.holding, percent: 36, color: "#0066CC" },
    { label: t.multitask, percent: 15, color: "#004C99" },
  ];

  // Donut chart parameters
  const cx = 90;
  const cy = 90;
  const radius = 72;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;
  const fillLength = (75 / 100) * circumference;
  const gapLength = circumference - fillLength;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center">
        {t.title}
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Main donut - 75% */}
        <div className="relative flex-shrink-0">
          <svg width="180" height="180" viewBox="0 0 180 180">
            {/* Background circle */}
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
            />
            {/* Progress arc */}
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="#0099FF"
              strokeWidth={strokeWidth}
              strokeDasharray={`${fillLength} ${gapLength}`}
              strokeDashoffset={circumference / 4}
              strokeLinecap="round"
              transform={`rotate(-90 ${cx} ${cy})`}
            />
            {/* Center text */}
            <text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="#0099FF"
              fontWeight="800"
              fontSize="36"
              fontFamily="Bricolage Grotesque, sans-serif"
            >
              75%
            </text>
            <text
              x={cx}
              y={cy + 16}
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
              fontFamily="Montserrat, sans-serif"
            >
              {t.mainStat}
            </text>
          </svg>
        </div>

        {/* Context breakdown - horizontal bars */}
        <div className="flex flex-col gap-5 w-full max-w-xs">
          {contexts.map((ctx) => (
            <div key={ctx.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-sm font-medium text-gray-700">
                  {ctx.label}
                </span>
                <span className="font-bricolage font-bold text-sm" style={{ color: ctx.color }}>
                  {ctx.percent}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${ctx.percent}%`,
                    backgroundColor: ctx.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="bg-[#F5F5F5] rounded-xl p-4 max-w-sm">
        <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
          {t.note}
        </p>
      </div>
    </div>
  );
}
