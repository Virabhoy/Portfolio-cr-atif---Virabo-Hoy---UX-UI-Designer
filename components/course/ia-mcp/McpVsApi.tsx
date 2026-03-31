"use client";

import { useLanguage } from "@/lib/language-context";

export default function McpVsApi() {
  const { language } = useLanguage();

  const t = {
    traditional: language === "fr" ? "Integration API traditionnelle" : "Traditional API Integration",
    mcp: language === "fr" ? "Avec MCP" : "With MCP",
    app: language === "fr" ? "Application" : "Application",
    customApi: "API custom",
    sdk: "SDK",
    rest: "REST",
    graphql: "GraphQL",
    webhook: "Webhook",
    aiModel: language === "fr" ? "Modele IA" : "AI Model",
    mcpProtocol: "MCP",
    services: ["GitHub", "Figma", "Slack", "DB"],
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 700 340" className="w-full" role="img" aria-label={`${t.traditional} vs ${t.mcp}`}>
        <defs>
          <filter id="vs-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Divider */}
        <line x1="350" y1="30" x2="350" y2="310" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        <text x="350" y="20" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontWeight="600" fontFamily="sans-serif">VS</text>

        {/* === LEFT SIDE: Traditional === */}

        {/* Title */}
        <text x="175" y="42" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="700" fontFamily="sans-serif">
          {t.traditional}
        </text>

        {/* App box */}
        <rect x="125" y="60" width="100" height="40" rx="8" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" filter="url(#vs-shadow)" />
        <text x="175" y="84" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="600" fontFamily="sans-serif">
          {t.app}
        </text>

        {/* Service boxes */}
        {t.services.map((service, i) => {
          const sx = 50 + i * 80;
          const sy = 230;
          return (
            <g key={`trad-${i}`}>
              <rect x={sx} y={sy} width="60" height="34" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#vs-shadow)" />
              <text x={sx + 30} y={sy + 21} textAnchor="middle" fill="#374151" fontSize="10" fontWeight="600" fontFamily="sans-serif">
                {service}
              </text>
            </g>
          );
        })}

        {/* Spaghetti lines - messy connections */}
        {t.services.map((_, i) => {
          const sx = 80 + i * 80;
          const paths = [
            `M175,100 C${140 + i * 20},${140 + i * 8} ${sx - 10},${190 - i * 5} ${sx},230`,
            `M175,100 C${200 - i * 15},${155 + i * 6} ${sx + 20},${180 + i * 3} ${sx},230`,
          ];
          return (
            <g key={`spaghetti-${i}`}>
              <path d={paths[0]} fill="none" stroke="#FCA5A5" strokeWidth="1.5" opacity="0.7" />
              <path d={paths[1]} fill="none" stroke="#FECACA" strokeWidth="1" opacity="0.5" strokeDasharray="3 2" />
            </g>
          );
        })}

        {/* Protocol labels scattered */}
        {[t.customApi, t.sdk, t.rest, t.graphql].map((label, i) => {
          const positions = [
            { x: 85, y: 160 },
            { x: 155, y: 180 },
            { x: 230, y: 155 },
            { x: 280, y: 175 },
          ];
          return (
            <text
              key={`label-${i}`}
              x={positions[i].x}
              y={positions[i].y}
              fill="#EF4444"
              fontSize="8"
              fontWeight="500"
              fontFamily="sans-serif"
              opacity="0.6"
              transform={`rotate(${-15 + i * 10}, ${positions[i].x}, ${positions[i].y})`}
            >
              {label}
            </text>
          );
        })}

        {/* Red X */}
        <g transform="translate(160, 280)">
          <circle r="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
          <path d="M-5,-5 L5,5 M5,-5 L-5,5" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text x="175" y="302" textAnchor="middle" fill="#DC2626" fontSize="9" fontWeight="600" fontFamily="sans-serif">
          {language === "fr" ? "Complexe" : "Complex"}
        </text>

        {/* === RIGHT SIDE: MCP === */}

        {/* Title */}
        <text x="525" y="42" textAnchor="middle" fill="#7C3AED" fontSize="12" fontWeight="700" fontFamily="sans-serif">
          {t.mcp}
        </text>

        {/* AI Model box */}
        <rect x="475" y="60" width="100" height="40" rx="8" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" filter="url(#vs-shadow)" />
        <text x="525" y="84" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="600" fontFamily="sans-serif">
          {t.aiModel}
        </text>

        {/* MCP Protocol bar */}
        <rect x="430" y="140" width="190" height="30" rx="15" fill="#7C3AED" />
        <text x="525" y="159" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="sans-serif">
          {t.mcpProtocol}
        </text>

        {/* Clean single line from AI to MCP bar */}
        <line x1="525" y1="100" x2="525" y2="140" stroke="#7C3AED" strokeWidth="2" />
        <polygon points="521,138 529,138 525,143" fill="#7C3AED" />

        {/* Service boxes - right side */}
        {t.services.map((service, i) => {
          const sx = 405 + i * 65;
          const sy = 220;
          return (
            <g key={`mcp-${i}`}>
              {/* Clean connection line */}
              <line x1={sx + 30} y1="170" x2={sx + 30} y2={sy} stroke="#C4B5FD" strokeWidth="1.5" />
              <polygon points={`${sx + 27},${sy - 2} ${sx + 33},${sy - 2} ${sx + 30},${sy + 2}`} fill="#C4B5FD" />

              {/* Box */}
              <rect x={sx} y={sy} width="60" height="34" rx="6" fill="white" stroke="#DDD6FE" strokeWidth="1.5" filter="url(#vs-shadow)" />
              <text x={sx + 30} y={sy + 21} textAnchor="middle" fill="#4C1D95" fontSize="10" fontWeight="600" fontFamily="sans-serif">
                {service}
              </text>
            </g>
          );
        })}

        {/* Green check */}
        <g transform="translate(525, 280)">
          <circle r="12" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
          <path d="M-4,0 L-1,3 L5,-3" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        <text x="525" y="302" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="600" fontFamily="sans-serif">
          {language === "fr" ? "Unifie" : "Unified"}
        </text>
      </svg>
    </div>
  );
}
