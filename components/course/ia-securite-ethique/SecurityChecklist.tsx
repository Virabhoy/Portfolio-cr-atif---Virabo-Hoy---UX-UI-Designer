"use client";

import { useLanguage } from "@/lib/language-context";

const VIOLET = "#7C3AED";
const VIOLET_LIGHT = "#EDE9FE";
const VIOLET_MID = "#DDD6FE";
const VIOLET_SOFT = "#C4B5FD";

interface ChecklistItem {
  labelFr: string;
  labelEn: string;
  icon: "shield" | "lock" | "eye" | "scale" | "key" | "clipboard";
}

const items: ChecklistItem[] = [
  { labelFr: "Protection des donnees", labelEn: "Data Protection", icon: "shield" },
  { labelFr: "Defense anti-injection", labelEn: "Prompt Injection Defense", icon: "lock" },
  { labelFr: "Surveillance des biais", labelEn: "Bias Monitoring", icon: "eye" },
  { labelFr: "Transparence", labelEn: "Transparency", icon: "scale" },
  { labelFr: "Controle d'acces", labelEn: "Access Control", icon: "key" },
  { labelFr: "Piste d'audit", labelEn: "Audit Trail", icon: "clipboard" },
];

function ShieldIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path
        d="M12 2L3 7v5c0 5.25 3.83 10.17 9 11.38C17.17 22.17 21 17.25 21 12V7l-9-5z"
        fill={VIOLET_SOFT}
        stroke={VIOLET}
        strokeWidth={1.5}
        transform="scale(0.8) translate(-12, -12)"
      />
      <path
        d="M-3,-1 L-1,2 L4,-3"
        fill="none"
        stroke={VIOLET}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function LockIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x={-7} y={-3} width={14} height={11} rx={2} fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1.2} />
      <path d="M-4,-3 V-7 a4,4 0 0,1 8,0 V-3" fill="none" stroke={VIOLET} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={0} cy={3} r={1.5} fill={VIOLET} />
    </g>
  );
}

function EyeIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M-10,0 Q0,-8 10,0 Q0,8 -10,0 Z" fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1.2} />
      <circle cx={0} cy={0} r={3.5} fill={VIOLET} opacity={0.8} />
      <circle cx={0} cy={0} r={1.5} fill="white" />
    </g>
  );
}

function ScaleIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1={0} y1={-8} x2={0} y2={6} stroke={VIOLET} strokeWidth={1.5} />
      <line x1={-8} y1={-6} x2={8} y2={-6} stroke={VIOLET} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M-8,-6 L-11,2 L-5,2 Z" fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1} />
      <path d="M8,-6 L5,2 L11,2 Z" fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1} />
      <rect x={-3} y={6} width={6} height={2} rx={1} fill={VIOLET} />
    </g>
  );
}

function KeyIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={-4} cy={0} r={5} fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1.2} />
      <line x1={1} y1={0} x2={10} y2={0} stroke={VIOLET} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={7} y1={0} x2={7} y2={3} stroke={VIOLET} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={10} y1={0} x2={10} y2={3} stroke={VIOLET} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={-4} cy={0} r={2} fill={VIOLET} opacity={0.5} />
    </g>
  );
}

function ClipboardIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x={-7} y={-8} width={14} height={18} rx={2} fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={1.2} />
      <rect x={-3} y={-10} width={6} height={4} rx={1} fill={VIOLET_MID} stroke={VIOLET} strokeWidth={1} />
      <line x1={-4} y1={0} x2={4} y2={0} stroke={VIOLET} strokeWidth={1} strokeLinecap="round" />
      <line x1={-4} y1={3} x2={4} y2={3} stroke={VIOLET} strokeWidth={1} strokeLinecap="round" />
      <line x1={-4} y1={6} x2={2} y2={6} stroke={VIOLET} strokeWidth={1} strokeLinecap="round" />
    </g>
  );
}

const iconComponents: Record<string, React.FC<{ x: number; y: number }>> = {
  shield: ShieldIcon,
  lock: LockIcon,
  eye: EyeIcon,
  scale: ScaleIcon,
  key: KeyIcon,
  clipboard: ClipboardIcon,
};

export default function SecurityChecklist() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Checklist securite IA"
      : "AI Security Checklist";

  const cols = 3;
  const cellWidth = 150;
  const cellHeight = 110;
  const gapX = 16;
  const gapY = 16;
  const paddingX = 20;
  const paddingY = 60;
  const totalWidth = paddingX * 2 + cols * cellWidth + (cols - 1) * gapX;
  const rows = Math.ceil(items.length / cols);
  const totalHeight = paddingY + rows * cellHeight + (rows - 1) * gapY + 20;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        {/* Title */}
        <text
          x={totalWidth / 2}
          y={30}
          textAnchor="middle"
          fill={VIOLET}
          fontSize="16"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>

        {/* Grid of items */}
        {items.map((item, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const x = paddingX + col * (cellWidth + gapX);
          const y = paddingY + row * (cellHeight + gapY);
          const label = language === "fr" ? item.labelFr : item.labelEn;
          const IconComponent = iconComponents[item.icon];

          return (
            <g key={idx}>
              {/* Card background */}
              <rect
                x={x}
                y={y}
                width={cellWidth}
                height={cellHeight}
                rx={12}
                fill="white"
                stroke={VIOLET_MID}
                strokeWidth={1.5}
              />

              {/* Icon circle */}
              <circle
                cx={x + cellWidth / 2}
                cy={y + 38}
                r={20}
                fill={VIOLET_LIGHT}
              />

              {/* Icon */}
              <IconComponent x={x + cellWidth / 2} y={y + 38} />

              {/* Checkmark badge */}
              <circle
                cx={x + cellWidth / 2 + 14}
                cy={y + 24}
                r={7}
                fill={VIOLET}
              />
              <path
                d={`M${x + cellWidth / 2 + 11},${y + 24} L${x + cellWidth / 2 + 13.5},${y + 26.5} L${x + cellWidth / 2 + 18},${y + 21.5}`}
                fill="none"
                stroke="white"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Label */}
              <text
                x={x + cellWidth / 2}
                y={y + 75}
                textAnchor="middle"
                fill="#1F2937"
                fontSize="10.5"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
