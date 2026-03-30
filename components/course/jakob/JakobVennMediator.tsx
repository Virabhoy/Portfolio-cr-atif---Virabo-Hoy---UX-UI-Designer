"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
    >
      <circle cx="16" cy="16" r="14" stroke="#1a1a1a" strokeWidth="1.5" fill="white" />
      <circle cx="16" cy="16" r="11" stroke="#1a1a1a" strokeWidth="0.75" opacity="0.3" />
      {/* Compass needle - N/S */}
      <path d="M16 5 L18.5 16 L16 27 L13.5 16 Z" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
      <path d="M16 5 L18.5 16 L16 16 Z" fill="#E8613C" />
      <path d="M16 5 L13.5 16 L16 16 Z" fill="#E8613C" opacity="0.6" />
      <path d="M16 27 L18.5 16 L16 16 Z" fill="#0066CC" />
      <path d="M16 27 L13.5 16 L16 16 Z" fill="#0066CC" opacity="0.6" />
      {/* Center dot */}
      <circle cx="16" cy="16" r="1.5" fill="#1a1a1a" />
      {/* Cardinal marks */}
      <text x="16" y="4" textAnchor="middle" fontSize="3" fill="#1a1a1a" fontWeight="bold">N</text>
      <text x="16" y="31" textAnchor="middle" fontSize="3" fill="#1a1a1a" fontWeight="bold">S</text>
      <text x="2" y="17" textAnchor="middle" fontSize="3" fill="#1a1a1a" fontWeight="bold">O</text>
      <text x="30" y="17" textAnchor="middle" fontSize="3" fill="#1a1a1a" fontWeight="bold">E</text>
    </svg>
  );
}

export default function JakobVennMediator() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const jakobLabel = "JAKOB";
  const disruptionLabel = "DISRUPTION";

  const jakobInner = isFr
    ? "Prot\u00e8ge la cognition humaine, la stabilit\u00e9, la continuit\u00e9."
    : "Protects human cognition, stability, continuity.";

  const disruptionInner = isFr
    ? "Fait \u00e9voluer les usages, la transformation, l\u2019augmentation de valeur."
    : "Evolves usage, transformation, value increase.";

  const lineJakob = isFr
    ? "Jakob stabilise l\u2019interaction et la structure."
    : "Jakob stabilizes interaction and structure.";

  const lineDisruption = isFr
    ? "La Disruption transforme l\u2019usage et la valeur."
    : "Disruption transforms usage and value.";

  const lineMediator = isFr
    ? "Le designer UX travaille entre les deux\u00a0: il est le m\u00e9diateur entre la stabilit\u00e9 et la transformation."
    : "The UX designer works between the two: they are the mediator between stability and transformation.";

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Venn Diagram SVG */}
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto mb-8"
      >
        {/* Left circle - Jakob */}
        <circle
          cx="190"
          cy="150"
          r="120"
          stroke="#0066CC"
          strokeWidth="2.5"
          fill="#0066CC"
          fillOpacity="0.06"
        />
        {/* Right circle - Disruption */}
        <circle
          cx="310"
          cy="150"
          r="120"
          stroke="#E8613C"
          strokeWidth="2.5"
          fill="#E8613C"
          fillOpacity="0.06"
        />

        {/* Intersection highlight */}
        <clipPath id="clip-left">
          <circle cx="190" cy="150" r="120" />
        </clipPath>
        <circle
          cx="310"
          cy="150"
          r="120"
          fill="#F5F5F5"
          fillOpacity="0.5"
          clipPath="url(#clip-left)"
        />

        {/* Labels */}
        <text
          x="130"
          y="80"
          textAnchor="middle"
          className="font-bricolage"
          fontSize="18"
          fontWeight="700"
          fill="#0066CC"
        >
          {jakobLabel}
        </text>
        <text
          x="370"
          y="80"
          textAnchor="middle"
          className="font-bricolage"
          fontSize="18"
          fontWeight="700"
          fill="#E8613C"
        >
          {disruptionLabel}
        </text>

        {/* Left text (wrapped manually for SVG) */}
        <foreignObject x="70" y="110" width="140" height="100">
          <div className="font-montserrat text-xs md:text-sm text-[#0066CC]/80 text-center leading-tight">
            {jakobInner}
          </div>
        </foreignObject>

        {/* Right text */}
        <foreignObject x="290" y="110" width="140" height="100">
          <div className="font-montserrat text-xs md:text-sm text-[#E8613C]/80 text-center leading-tight">
            {disruptionInner}
          </div>
        </foreignObject>

        {/* Compass in intersection */}
        <foreignObject x="234" y="134" width="32" height="32">
          <CompassIcon />
        </foreignObject>
      </svg>

      {/* Text below Venn */}
      <div className="space-y-3 text-center">
        <p className="font-montserrat text-sm md:text-base text-[#0066CC]">
          {lineJakob}
        </p>
        <p className="font-montserrat text-sm md:text-base text-[#E8613C]">
          {lineDisruption}
        </p>
        <p className="font-montserrat text-sm md:text-base text-[#1a1a1a] font-bold mt-4">
          {lineMediator}
        </p>
      </div>
    </div>
  );
}
