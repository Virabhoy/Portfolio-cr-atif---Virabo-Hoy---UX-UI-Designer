"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function HicksCompass() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const words = {
    n: isFr ? "STRUCTURER" : "STRUCTURE",
    e: isFr ? "CLARIFIER" : "CLARIFY",
    s: isFr ? "REVELER" : "REVEAL",
    w: isFr ? "GUIDER" : "GUIDE",
    ne: isFr ? "HIERARCHISER" : "PRIORITIZE",
  };

  const cx = 200;
  const cy = 200;
  const outerR = 120;
  const innerR = 80;
  const coreR = 35;

  // Star points for compass rose
  const starPoints = (r1: number, r2: number, tips: number) => {
    const pts: string[] = [];
    for (let i = 0; i < tips * 2; i++) {
      const angle = (Math.PI * i) / tips - Math.PI / 2;
      const r = i % 2 === 0 ? r1 : r2;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return pts.join(" ");
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-8">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-sm"
        aria-label={
          isFr
            ? "Boussole de la Loi de Hick"
            : "Hick's Law Compass"
        }
      >
        {/* Decorative rings */}
        <circle
          cx={cx}
          cy={cy}
          r={160}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={0.5}
        />
        <circle
          cx={cx}
          cy={cy}
          r={145}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={0.5}
          strokeDasharray="4 6"
        />

        {/* Outer circle */}
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          fill="none"
          stroke="#0066CC"
          strokeWidth={1.5}
        />

        {/* Inner circle */}
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="#F8FAFC"
          stroke="#0066CC"
          strokeWidth={1}
        />

        {/* Compass star */}
        <polygon
          points={starPoints(coreR + 30, coreR - 5, 4)}
          fill="#0066CC"
          fillOpacity={0.08}
          stroke="#0066CC"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />

        {/* Inner star */}
        <polygon
          points={starPoints(coreR, coreR - 15, 4)}
          fill="#0066CC"
          fillOpacity={0.15}
          stroke="#0066CC"
          strokeWidth={1}
          strokeLinejoin="round"
        />

        {/* Core circle */}
        <circle cx={cx} cy={cy} r={12} fill="#0066CC" />
        <circle cx={cx} cy={cy} r={5} fill="white" />

        {/* Tick marks at N/S/E/W on outer ring */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180 - Math.PI / 2;
          const x1 = cx + (outerR - 6) * Math.cos(rad);
          const y1 = cy + (outerR - 6) * Math.sin(rad);
          const x2 = cx + (outerR + 6) * Math.cos(rad);
          const y2 = cy + (outerR + 6) * Math.sin(rad);
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#0066CC"
              strokeWidth={2}
              strokeLinecap="round"
            />
          );
        })}

        {/* Cardinal direction letters */}
        <text
          x={cx}
          y={cy - outerR - 30}
          textAnchor="middle"
          fill="#0066CC"
          fontSize={12}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
        >
          N
        </text>
        <text
          x={cx}
          y={cy + outerR + 40}
          textAnchor="middle"
          fill="#0066CC"
          fontSize={12}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
        >
          S
        </text>
        <text
          x={cx + outerR + 30}
          y={cy + 5}
          textAnchor="middle"
          fill="#0066CC"
          fontSize={12}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
        >
          E
        </text>
        <text
          x={cx - outerR - 30}
          y={cy + 5}
          textAnchor="middle"
          fill="#0066CC"
          fontSize={12}
          fontWeight={700}
          fontFamily="Montserrat, sans-serif"
        >
          W
        </text>

        {/* Concept words around compass */}
        {/* Top (N): STRUCTURER */}
        <text
          x={cx}
          y={cy - outerR - 46}
          textAnchor="middle"
          fill="#E8613C"
          fontSize={14}
          fontWeight={800}
          fontFamily="Bricolage Grotesque, sans-serif"
          letterSpacing="0.05em"
        >
          {words.n}
        </text>

        {/* Right (E): CLARIFIER */}
        <text
          x={cx + outerR + 30}
          y={cy + 22}
          textAnchor="middle"
          fill="#E8613C"
          fontSize={14}
          fontWeight={800}
          fontFamily="Bricolage Grotesque, sans-serif"
          letterSpacing="0.05em"
        >
          {words.e}
        </text>

        {/* Bottom (S): REVELER */}
        <text
          x={cx}
          y={cy + outerR + 56}
          textAnchor="middle"
          fill="#E8613C"
          fontSize={14}
          fontWeight={800}
          fontFamily="Bricolage Grotesque, sans-serif"
          letterSpacing="0.05em"
        >
          {words.s}
        </text>

        {/* Left (W): GUIDER */}
        <text
          x={cx - outerR - 30}
          y={cy + 22}
          textAnchor="middle"
          fill="#E8613C"
          fontSize={14}
          fontWeight={800}
          fontFamily="Bricolage Grotesque, sans-serif"
          letterSpacing="0.05em"
        >
          {words.w}
        </text>

        {/* Top-right diagonal: HIERARCHISER */}
        <text
          x={cx + 100}
          y={cy - 100}
          textAnchor="middle"
          fill="#E8613C"
          fontSize={13}
          fontWeight={800}
          fontFamily="Bricolage Grotesque, sans-serif"
          letterSpacing="0.04em"
          transform={`rotate(-45, ${cx + 100}, ${cy - 100})`}
        >
          {words.ne}
        </text>

        {/* Diagonal dashed line to NE word */}
        <line
          x1={cx + coreR * Math.cos(-Math.PI / 4)}
          y1={cy + coreR * Math.sin(-Math.PI / 4)}
          x2={cx + 70}
          y2={cy - 70}
          stroke="#E8613C"
          strokeWidth={1}
          strokeDasharray="3 3"
          opacity={0.5}
        />
      </svg>

      {/* Caption text */}
      <div
        className={cn(
          "rounded-xl p-5 text-center max-w-md",
          "bg-[#F5F5F5]"
        )}
      >
        <p className="font-montserrat text-sm text-gray-700 leading-relaxed">
          {isFr
            ? "La Loi de Hick n'est pas une regle stricte. C'est une boussole pour eviter la surcharge cognitive."
            : "Hick's Law is not a strict rule. It's a compass to avoid cognitive overload."}
        </p>
      </div>
    </div>
  );
}
