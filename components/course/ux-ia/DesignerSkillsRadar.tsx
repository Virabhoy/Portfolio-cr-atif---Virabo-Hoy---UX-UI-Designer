"use client";

import { useLanguage } from "@/lib/language-context";

const labels = {
  fr: ["Pensee systemique", "Ethique", "Prompt Design", "Recherche utilisateur", "Storytelling", "Data Literacy"],
  en: ["Systems thinking", "Ethics", "Prompt Design", "User Research", "Storytelling", "Data Literacy"],
};

// Values from 0 to 1 for each axis
const data2020 = [0.5, 0.4, 0.1, 0.7, 0.6, 0.3];
const data2026 = [0.85, 0.8, 0.75, 0.9, 0.7, 0.8];

const cx = 200;
const cy = 200;
const maxR = 140;
const levels = 5;
const axes = 6;

function polarToXY(angle: number, radius: number): [number, number] {
  const a = angle - Math.PI / 2; // start from top
  return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)];
}

function dataToPolygon(values: number[]): string {
  return values
    .map((v, i) => {
      const angle = (2 * Math.PI * i) / axes;
      const [x, y] = polarToXY(angle, v * maxR);
      return `${x},${y}`;
    })
    .join(" ");
}

export default function DesignerSkillsRadar() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";
  const axisLabels = labels[lang];

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <p className="font-bricolage text-lg md:text-xl font-semibold text-center mb-6 text-gray-700">
        {lang === "fr"
          ? "Competences critiques du designer"
          : "Critical designer skills"}
      </p>

      <div className="flex justify-center">
        <svg viewBox="0 0 400 440" className="w-full max-w-[420px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid levels */}
          {Array.from({ length: levels }, (_, l) => {
            const r = ((l + 1) / levels) * maxR;
            const pts = Array.from({ length: axes }, (_, i) => {
              const angle = (2 * Math.PI * i) / axes;
              const [x, y] = polarToXY(angle, r);
              return `${x},${y}`;
            }).join(" ");
            return (
              <polygon
                key={l}
                points={pts}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={l === levels - 1 ? 1.5 : 1}
              />
            );
          })}

          {/* Axis lines */}
          {Array.from({ length: axes }, (_, i) => {
            const angle = (2 * Math.PI * i) / axes;
            const [x, y] = polarToXY(angle, maxR);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="#d1d5db"
                strokeWidth={1}
              />
            );
          })}

          {/* 2020 shape (gray) */}
          <polygon
            points={dataToPolygon(data2020)}
            fill="#9ca3af"
            fillOpacity={0.2}
            stroke="#9ca3af"
            strokeWidth={2}
          />
          {/* 2020 dots */}
          {data2020.map((v, i) => {
            const angle = (2 * Math.PI * i) / axes;
            const [x, y] = polarToXY(angle, v * maxR);
            return <circle key={i} cx={x} cy={y} r={3.5} fill="#9ca3af" />;
          })}

          {/* 2026 shape (blue) */}
          <polygon
            points={dataToPolygon(data2026)}
            fill="#0099FF"
            fillOpacity={0.15}
            stroke="#0099FF"
            strokeWidth={2.5}
          />
          {/* 2026 dots */}
          {data2026.map((v, i) => {
            const angle = (2 * Math.PI * i) / axes;
            const [x, y] = polarToXY(angle, v * maxR);
            return <circle key={i} cx={x} cy={y} r={4} fill="#0099FF" />;
          })}

          {/* Axis labels */}
          {axisLabels.map((label, i) => {
            const angle = (2 * Math.PI * i) / axes;
            const [x, y] = polarToXY(angle, maxR + 28);
            // Adjust text anchor based on position
            let anchor: "start" | "middle" | "end" = "middle";
            if (x < cx - 10) anchor = "end";
            if (x > cx + 10) anchor = "start";
            return (
              <text
                key={i}
                x={x}
                y={y + 4}
                textAnchor={anchor}
                className="font-montserrat"
                fill="#374151"
                fontSize="12"
              >
                {label}
              </text>
            );
          })}

          {/* Legend */}
          <rect x={120} y={400} width={16} height={10} rx={2} fill="#9ca3af" fillOpacity={0.5} stroke="#9ca3af" strokeWidth={1.5} />
          <text x={142} y={409} className="font-montserrat" fill="#6b7280" fontSize="12">2020</text>

          <rect x={220} y={400} width={16} height={10} rx={2} fill="#0099FF" fillOpacity={0.3} stroke="#0099FF" strokeWidth={1.5} />
          <text x={242} y={409} className="font-montserrat" fill="#0066CC" fontSize="12" fontWeight={600}>2026</text>
        </svg>
      </div>
    </div>
  );
}
