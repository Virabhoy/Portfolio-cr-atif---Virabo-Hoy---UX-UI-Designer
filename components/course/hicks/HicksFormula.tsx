"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function HicksFormula() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const xLabels = [2, 4, 6, 8, 10, 12, 14];
  const chartW = 360;
  const chartH = 200;
  const padL = 48;
  const padB = 36;
  const padT = 16;
  const padR = 16;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  // Generate logarithmic curve points: T = a + b * log2(n+1)
  const a = 0.15;
  const b = 0.35;
  const maxN = 15;
  const maxT = a + b * Math.log2(maxN + 1);

  const curvePoints: string[] = [];
  for (let n = 0.5; n <= maxN; n += 0.25) {
    const t = a + b * Math.log2(n + 1);
    const x = padL + (n / maxN) * plotW;
    const y = padT + plotH - (t / maxT) * plotH;
    curvePoints.push(`${x},${y}`);
  }
  const curvePath = `M ${curvePoints.join(" L ")}`;

  // Highlight zones
  const zoneX = (n: number) => padL + (n / maxN) * plotW;
  const zoneY = (n: number) => {
    const t = a + b * Math.log2(n + 1);
    return padT + plotH - (t / maxT) * plotH;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Formula */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bricolage text-xl font-bold text-gray-900">
            {isFr ? "La Formule" : "The Formula"}
          </h3>

          {/* Formula display */}
          <div className="flex items-center gap-2 flex-wrap text-2xl font-bricolage font-bold">
            <span
              className="inline-flex items-center justify-center px-3 py-1 rounded-lg text-white text-lg font-bold"
              style={{ backgroundColor: "#0099FF" }}
            >
              T
            </span>
            <span className="text-gray-400">=</span>
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-gray-200 text-gray-600 text-lg font-bold">
              a
            </span>
            <span className="text-gray-400">+</span>
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-gray-200 text-gray-600 text-lg font-bold">
              b
            </span>
            <span className="text-gray-400">x</span>
            <span className="text-gray-700">log</span>
            <sub className="text-sm text-gray-500">2</sub>
            <span className="text-gray-400">(</span>
            <span
              className="inline-flex items-center justify-center px-3 py-1 rounded-lg text-white text-lg font-bold"
              style={{ backgroundColor: "#0066CC" }}
            >
              n
            </span>
            <span className="text-gray-400">+ 1)</span>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: "#0099FF" }}
              >
                T
              </span>
              <span className="font-montserrat text-sm text-gray-700">
                {isFr ? "Temps pour decider" : "Time to decide"}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: "#0066CC" }}
              >
                n
              </span>
              <span className="font-montserrat text-sm text-gray-700">
                {isFr ? "Nombre d'options" : "Number of options"}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-200 text-gray-600 text-sm font-bold shrink-0">
                a, b
              </span>
              <span className="font-montserrat text-sm text-gray-500">
                {isFr
                  ? "Constantes (effort mental de base)"
                  : "Constants (baseline mental effort)"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: SVG Chart */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bricolage text-xl font-bold text-gray-900">
            {isFr ? "Courbe logarithmique" : "Logarithmic Curve"}
          </h3>
          <svg
            viewBox={`0 0 ${chartW} ${chartH}`}
            className="w-full max-w-[360px]"
            aria-label={
              isFr
                ? "Graphique de la courbe logarithmique de Hick"
                : "Hick's logarithmic curve chart"
            }
          >
            {/* Axes */}
            <line
              x1={padL}
              y1={padT}
              x2={padL}
              y2={padT + plotH}
              stroke="#CBD5E1"
              strokeWidth={1}
            />
            <line
              x1={padL}
              y1={padT + plotH}
              x2={padL + plotW}
              y2={padT + plotH}
              stroke="#CBD5E1"
              strokeWidth={1}
            />

            {/* Grid lines */}
            {[0.25, 0.5, 0.75, 1].map((frac) => (
              <line
                key={frac}
                x1={padL}
                y1={padT + plotH * (1 - frac)}
                x2={padL + plotW}
                y2={padT + plotH * (1 - frac)}
                stroke="#F1F5F9"
                strokeWidth={1}
              />
            ))}

            {/* Highlight zone 2->4 (orange) */}
            <rect
              x={zoneX(2)}
              y={Math.min(zoneY(2), zoneY(4))}
              width={zoneX(4) - zoneX(2)}
              height={Math.abs(zoneY(2) - zoneY(4))}
              fill="#E8613C"
              fillOpacity={0.15}
              rx={4}
            />
            <line
              x1={zoneX(2)}
              y1={zoneY(2)}
              x2={zoneX(4)}
              y2={zoneY(2)}
              stroke="#E8613C"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <line
              x1={zoneX(4)}
              y1={zoneY(4)}
              x2={zoneX(4)}
              y2={zoneY(2)}
              stroke="#E8613C"
              strokeWidth={1.5}
              markerEnd="url(#arrowOrange)"
            />
            <text
              x={zoneX(3)}
              y={zoneY(3) - 8}
              textAnchor="middle"
              fill="#E8613C"
              fontSize={9}
              fontWeight={700}
              fontFamily="Bricolage Grotesque, sans-serif"
            >
              {isFr ? "Grand saut" : "Big jump"}
            </text>

            {/* Highlight zone 10->12 (gray) */}
            <rect
              x={zoneX(10)}
              y={Math.min(zoneY(10), zoneY(12))}
              width={zoneX(12) - zoneX(10)}
              height={Math.abs(zoneY(10) - zoneY(12))}
              fill="#94A3B8"
              fillOpacity={0.12}
              rx={4}
            />
            <line
              x1={zoneX(12)}
              y1={zoneY(12)}
              x2={zoneX(12)}
              y2={zoneY(10)}
              stroke="#94A3B8"
              strokeWidth={1.5}
              markerEnd="url(#arrowGray)"
            />
            <text
              x={zoneX(11)}
              y={zoneY(11) - 6}
              textAnchor="middle"
              fill="#64748B"
              fontSize={9}
              fontWeight={600}
              fontFamily="Bricolage Grotesque, sans-serif"
            >
              {isFr ? "Petit saut" : "Small jump"}
            </text>

            {/* Arrow markers */}
            <defs>
              <marker
                id="arrowOrange"
                markerWidth={6}
                markerHeight={6}
                refX={3}
                refY={3}
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#E8613C" />
              </marker>
              <marker
                id="arrowGray"
                markerWidth={6}
                markerHeight={6}
                refX={3}
                refY={3}
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#94A3B8" />
              </marker>
            </defs>

            {/* Curve */}
            <path
              d={curvePath}
              fill="none"
              stroke="#0066CC"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* X-axis labels */}
            {xLabels.map((n) => (
              <text
                key={n}
                x={zoneX(n)}
                y={padT + plotH + 14}
                textAnchor="middle"
                fill="#64748B"
                fontSize={10}
                fontFamily="Montserrat, sans-serif"
              >
                {n}
              </text>
            ))}

            {/* X-axis title */}
            <text
              x={padL + plotW / 2}
              y={chartH - 2}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize={9}
              fontFamily="Montserrat, sans-serif"
            >
              {isFr ? "Nombre de Choix (n)" : "Number of Choices (n)"}
            </text>

            {/* Y-axis title */}
            <text
              x={10}
              y={padT + plotH / 2}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize={9}
              fontFamily="Montserrat, sans-serif"
              transform={`rotate(-90, 10, ${padT + plotH / 2})`}
            >
              {isFr ? "Temps de Decision (T)" : "Decision Time (T)"}
            </text>

            {/* Dots at key points */}
            {xLabels.map((n) => (
              <circle
                key={n}
                cx={zoneX(n)}
                cy={zoneY(n)}
                r={3}
                fill="#0066CC"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Summary card */}
      <div
        className={cn(
          "mt-8 rounded-xl p-5 text-center",
          "bg-[#F5F5F5]"
        )}
      >
        <p className="font-montserrat text-sm text-gray-700 leading-relaxed">
          <span className="font-bold" style={{ color: "#0066CC" }}>
            {isFr ? "A retenir" : "Key takeaway"}
          </span>
          {" : "}
          {isFr
            ? "L'impact de chaque nouvelle option diminue."
            : "The impact of each new option diminishes."}
        </p>
      </div>
    </div>
  );
}
