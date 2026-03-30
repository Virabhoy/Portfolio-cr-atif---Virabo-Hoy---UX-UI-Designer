"use client";

import { useLanguage } from "@/lib/language-context";

// Pre-computed positions to avoid SSR/client floating-point hydration mismatch
// angle 210° r=130 → dot, angle 210° r=185 → label
const STEPS_POSITIONS = [
  { dot: { x: 135, y: 265 }, label: { x: 107, y: 332 } }, // 210°
  { dot: { x: 265, y: 265 }, label: { x: 293, y: 332 } }, // 330°
  { dot: { x: 200, y: 70  }, label: { x: 200, y: 8    } }, // 90°
];

export default function ZeigarnikLoop() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const steps = [
    {
      label: isFr ? "L'Action Commence" : "Action Starts",
      sub: isFr ? "Initiation d'une tâche" : "Task initiation",
    },
    {
      label: isFr ? "L'Interruption" : "Interruption",
      sub: isFr ? "La tâche reste incomplète" : "Task remains incomplete",
    },
    {
      label: isFr ? "La Tension Cognitive" : "Cognitive Tension",
      sub: isFr ? "L'attention reste active" : "Attention stays active",
    },
  ];

  return (
    <div className="flex justify-center py-4">
      <svg viewBox="0 0 400 400" className="w-full max-w-sm" aria-hidden="true">
        {/* Background arc */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#0099FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="565"
          strokeDashoffset="60"
        />

        {/* Arrow at top */}
        <polygon points="193,96 207,96 200,84" fill="#0099FF" />

        {/* Center */}
        <text x="200" y="195" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0099FF">
          {isFr ? "Boucle" : "Open"}
        </text>
        <text x="200" y="213" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0099FF">
          {isFr ? "Ouverte" : "Loop"}
        </text>

        {/* Step 1 — bottom left */}
        <circle cx="135" cy="265" r="9" fill="#0099FF" />
        <text x="68" y="308" textAnchor="middle" fontSize="10" fontWeight="700" fill="#111">
          {steps[0].label}
        </text>
        <text x="68" y="322" textAnchor="middle" fontSize="9" fill="#666">
          {steps[0].sub}
        </text>

        {/* Step 2 — bottom right */}
        <circle cx="265" cy="265" r="9" fill="#0066CC" />
        <text x="332" y="308" textAnchor="middle" fontSize="10" fontWeight="700" fill="#111">
          {steps[1].label}
        </text>
        <text x="332" y="322" textAnchor="middle" fontSize="9" fill="#666">
          {steps[1].sub}
        </text>

        {/* Step 3 — top */}
        <circle cx="200" cy="100" r="9" fill="#0099FF" />
        <text x="200" y="52" textAnchor="middle" fontSize="10" fontWeight="700" fill="#111">
          {steps[2].label}
        </text>
        <text x="200" y="66" textAnchor="middle" fontSize="9" fill="#666">
          {steps[2].sub}
        </text>
      </svg>
    </div>
  );
}
