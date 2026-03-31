"use client";

import { useLanguage } from "@/lib/language-context";

export default function McpArchitecture() {
  const { language } = useLanguage();

  const t = {
    title: language === "fr" ? "Architecture MCP" : "MCP Architecture",
    aiModel: language === "fr" ? "Modele IA" : "AI Model",
    protocol: "MCP Protocol",
    github: "GitHub",
    figma: "Figma",
    slack: "Slack",
    database: language === "fr" ? "Base de donnees" : "Database",
    custom: language === "fr" ? "Serveur Custom" : "Custom Server",
  };

  const servers = [
    { label: t.github, angle: -72, icon: "GH" },
    { label: t.figma, angle: -36, icon: "FG" },
    { label: t.slack, angle: 0, icon: "SL" },
    { label: t.database, angle: 36, icon: "DB" },
    { label: t.custom, angle: 72, icon: "CS" },
  ];

  const cx = 300;
  const cy = 200;
  const radius = 140;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 600 400" className="w-full" role="img" aria-label={t.title}>
        <defs>
          <filter id="mcp-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Connection lines */}
        {servers.map((server, i) => {
          const rad = (server.angle * Math.PI) / 180;
          const sx = cx + radius * Math.sin(rad);
          const sy = cy - radius * Math.cos(rad);
          return (
            <line
              key={`line-${i}`}
              x1={cx}
              y1={cy}
              x2={sx}
              y2={sy}
              stroke="#C4B5FD"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          );
        })}

        {/* Center hub - AI Model */}
        <circle cx={cx} cy={cy} r="52" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5" filter="url(#mcp-shadow)" />
        <circle cx={cx} cy={cy} r="38" fill="#7C3AED" />

        {/* Brain icon in center */}
        <g transform={`translate(${cx - 14}, ${cy - 14})`}>
          <path
            d="M14 2C9.5 2 6 5.5 6 9c0 2.5 1.5 4.5 3.5 5.5V18c0 1.5 1 3 2.5 3h4c1.5 0 2.5-1.5 2.5-3v-3.5C20.5 13.5 22 11.5 22 9c0-3.5-3.5-7-8-7z"
            fill="white"
            opacity="0.9"
          />
          <path d="M10 12h8M12 9v6M16 9v6" stroke="#7C3AED" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* AI Model label */}
        <text x={cx} y={cy + 68} textAnchor="middle" fill="#7C3AED" fontSize="13" fontWeight="700" fontFamily="sans-serif">
          {t.aiModel}
        </text>

        {/* Protocol label on arc */}
        <text x={cx} y={cy - 62} textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="600" fontFamily="sans-serif" opacity="0.8">
          {t.protocol}
        </text>

        {/* Server nodes */}
        {servers.map((server, i) => {
          const rad = (server.angle * Math.PI) / 180;
          const sx = cx + radius * Math.sin(rad);
          const sy = cy - radius * Math.cos(rad);
          return (
            <g key={`server-${i}`}>
              {/* Server circle */}
              <rect
                x={sx - 32}
                y={sy - 22}
                width="64"
                height="44"
                rx="10"
                fill="white"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                filter="url(#mcp-shadow)"
              />
              {/* Icon circle */}
              <circle cx={sx} cy={sy - 4} r="10" fill="#EDE9FE" />
              <text x={sx} y={sy} textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="700" fontFamily="sans-serif">
                {server.icon}
              </text>
              {/* Label */}
              <text x={sx} y={sy + 16} textAnchor="middle" fill="#4C1D95" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                {server.label}
              </text>
            </g>
          );
        })}

        {/* Decorative dots */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const r = radius + 40;
          return (
            <circle
              key={`dot-${i}`}
              cx={cx + r * Math.sin(angle)}
              cy={cy - r * Math.cos(angle)}
              r="2"
              fill="#DDD6FE"
              opacity="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}
