"use client";

import { useLanguage } from "@/lib/language-context";

export default function ClaudeCodeArchitecture() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Architecture de Claude Code"
        : "Claude Code Architecture",
    terminal: "Terminal",
    claudeCode: "Claude Code (LLM)",
    claudeMd: "CLAUDE.md",
    memory: language === "fr" ? "Memoire" : "Memory",
    skills: "Skills & Hooks",
    mcp: language === "fr" ? "Serveurs MCP" : "MCP Servers",
    tools: language === "fr" ? "Outils (Bash, Read, Edit...)" : "Tools (Bash, Read, Edit...)",
    project: language === "fr" ? "Projet / Codebase" : "Project / Codebase",
  };

  // Layout constants
  const W = 700;
  const H = 520;
  const boxH = 44;
  const boxW = 160;
  const midX = W / 2;

  const boxes: {
    label: string;
    x: number;
    y: number;
    w: number;
    fill: string;
    border: string;
    textColor: string;
  }[] = [
    // Row 0: Terminal
    {
      label: t.terminal,
      x: midX,
      y: 40,
      w: 140,
      fill: "#1E1B4B",
      border: "#1E1B4B",
      textColor: "#ffffff",
    },
    // Row 1: Claude Code
    {
      label: t.claudeCode,
      x: midX,
      y: 120,
      w: 200,
      fill: "#7C3AED",
      border: "#7C3AED",
      textColor: "#ffffff",
    },
    // Row 2: CLAUDE.md, Memory, Skills
    {
      label: t.claudeMd,
      x: 130,
      y: 220,
      w: boxW,
      fill: "#EDE9FE",
      border: "#7C3AED",
      textColor: "#7C3AED",
    },
    {
      label: t.memory,
      x: midX,
      y: 220,
      w: boxW,
      fill: "#EDE9FE",
      border: "#8B5CF6",
      textColor: "#6D28D9",
    },
    {
      label: t.skills,
      x: 570,
      y: 220,
      w: boxW,
      fill: "#EDE9FE",
      border: "#9333EA",
      textColor: "#7C3AED",
    },
    // Row 3: Tools
    {
      label: t.tools,
      x: midX,
      y: 320,
      w: 240,
      fill: "#DDD6FE",
      border: "#7C3AED",
      textColor: "#6D28D9",
    },
    // Row 4: MCP + Project
    {
      label: t.mcp,
      x: 200,
      y: 420,
      w: boxW,
      fill: "#C4B5FD",
      border: "#6D28D9",
      textColor: "#4C1D95",
    },
    {
      label: t.project,
      x: 500,
      y: 420,
      w: boxW,
      fill: "#C4B5FD",
      border: "#6D28D9",
      textColor: "#4C1D95",
    },
  ];

  // Arrows: [fromIndex, toIndex]
  const arrows: [number, number][] = [
    [0, 1], // Terminal -> Claude Code
    [1, 2], // Claude Code -> CLAUDE.md
    [1, 3], // Claude Code -> Memory
    [1, 4], // Claude Code -> Skills
    [1, 5], // Claude Code -> Tools
    [5, 6], // Tools -> MCP
    [5, 7], // Tools -> Project
  ];

  function arrowPath(fromIdx: number, toIdx: number): string {
    const from = boxes[fromIdx];
    const to = boxes[toIdx];
    const fy = from.y + boxH / 2;
    const ty = to.y - boxH / 2;
    const fx = from.x;
    const tx = to.x;

    if (fx === tx) {
      return `M${fx},${fy} L${tx},${ty}`;
    }
    const midY = (fy + ty) / 2;
    return `M${fx},${fy} L${fx},${midY} L${tx},${midY} L${tx},${ty}`;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="font-bricolage text-xl font-bold text-center text-[#7C3AED] mb-6">
        {t.title}
      </h3>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        <defs>
          <marker
            id="arrowhead-violet"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#7C3AED" />
          </marker>
        </defs>

        {/* Arrows */}
        {arrows.map(([fi, ti], i) => (
          <path
            key={i}
            d={arrowPath(fi, ti)}
            stroke="#7C3AED"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead-violet)"
            opacity="0.6"
          />
        ))}

        {/* Boxes */}
        {boxes.map((box, i) => (
          <g key={i}>
            <rect
              x={box.x - box.w / 2}
              y={box.y - boxH / 2}
              width={box.w}
              height={boxH}
              rx="10"
              fill={box.fill}
              stroke={box.border}
              strokeWidth="2"
            />
            <text
              x={box.x}
              y={box.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill={box.textColor}
              fontSize="13"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {box.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
