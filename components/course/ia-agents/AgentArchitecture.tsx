"use client";

import { useLanguage } from "@/lib/language-context";

export default function AgentArchitecture() {
  const { language } = useLanguage();

  const t = {
    title: language === "fr" ? "Architecture d'un Agent IA" : "AI Agent Architecture",
    perception: language === "fr" ? "Perception" : "Perception",
    perceptionDesc: language === "fr" ? "Entrees / Contexte" : "Inputs / Context",
    reasoning: language === "fr" ? "Raisonnement" : "Reasoning",
    reasoningDesc: language === "fr" ? "LLM / Cerveau" : "LLM / Brain",
    action: language === "fr" ? "Action" : "Action",
    actionDesc: language === "fr" ? "Appels d'outils" : "Tool Calls",
    environment: language === "fr" ? "Environnement" : "Environment",
    environmentDesc: language === "fr" ? "Resultats / Feedback" : "Results / Feedback",
    feedbackLoop: language === "fr" ? "Boucle de feedback" : "Feedback Loop",
  };

  const layers = [
    { label: t.perception, desc: t.perceptionDesc, y: 50, color: "#EDE9FE", border: "#C4B5FD", icon: "eye" },
    { label: t.reasoning, desc: t.reasoningDesc, y: 130, color: "#7C3AED", border: "#7C3AED", icon: "brain", dark: true },
    { label: t.action, desc: t.actionDesc, y: 210, color: "#DDD6FE", border: "#A78BFA", icon: "bolt" },
    { label: t.environment, desc: t.environmentDesc, y: 290, color: "#EDE9FE", border: "#C4B5FD", icon: "globe" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 600 380" className="w-full" role="img" aria-label={t.title}>
        <defs>
          <filter id="agent-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
          <marker id="arrow-violet" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="8" markerHeight="6" orient="auto">
            <path d="M0,0 L10,4 L0,8 Z" fill="#7C3AED" />
          </marker>
          <marker id="arrow-violet-up" viewBox="0 0 10 8" refX="1" refY="4" markerWidth="8" markerHeight="6" orient="auto">
            <path d="M10,0 L0,4 L10,8 Z" fill="#A78BFA" />
          </marker>
        </defs>

        {/* Down arrows between layers */}
        {[0, 1, 2].map((i) => (
          <line
            key={`arrow-${i}`}
            x1="300"
            y1={layers[i].y + 50}
            x2="300"
            y2={layers[i + 1].y + 5}
            stroke="#7C3AED"
            strokeWidth="2"
            markerEnd="url(#arrow-violet)"
          />
        ))}

        {/* Feedback loop arrow - right side */}
        <path
          d="M460,310 C530,310 530,70 460,70"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeDasharray="6 4"
          markerEnd="url(#arrow-violet-up)"
        />
        {/* Feedback label */}
        <text x="510" y="190" fill="#A78BFA" fontSize="10" fontWeight="600" fontFamily="sans-serif" transform="rotate(90, 510, 190)">
          {t.feedbackLoop}
        </text>

        {/* Layer boxes */}
        {layers.map((layer, i) => {
          const isDark = layer.dark;
          const textColor = isDark ? "white" : "#4C1D95";
          const descColor = isDark ? "rgba(255,255,255,0.7)" : "#7C3AED";

          return (
            <g key={`layer-${i}`}>
              {/* Main rectangle */}
              <rect
                x="140"
                y={layer.y}
                width="320"
                height="55"
                rx="12"
                fill={layer.color}
                stroke={layer.border}
                strokeWidth="1.5"
                filter="url(#agent-shadow)"
              />

              {/* Icon area */}
              <rect
                x="152"
                y={layer.y + 10}
                width="35"
                height="35"
                rx="8"
                fill={isDark ? "rgba(255,255,255,0.15)" : "white"}
              />

              {/* Simple icons */}
              {layer.icon === "eye" && (
                <g transform={`translate(158, ${layer.y + 18})`}>
                  <ellipse cx="11" cy="10" rx="10" ry="7" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
                  <circle cx="11" cy="10" r="3.5" fill="#7C3AED" />
                </g>
              )}
              {layer.icon === "brain" && (
                <g transform={`translate(158, ${layer.y + 16})`}>
                  <path d="M11 2C6.5 2 4 5.5 4 8.5c0 2 1 3.5 2.5 4.5V16c0 1 .8 2 2 2h5c1.2 0 2-1 2-2v-3C17.5 12 18.5 10.5 18.5 8.5 18.5 5.5 16 2 11 2z" fill="white" opacity="0.9" />
                  <path d="M8 10h6M10 7.5v5M12.5 7.5v5" stroke="#7C3AED" strokeWidth="0.7" opacity="0.5" />
                </g>
              )}
              {layer.icon === "bolt" && (
                <g transform={`translate(162, ${layer.y + 15})`}>
                  <path d="M10 0L3 12h5l-2 10 9-14h-5z" fill="#7C3AED" opacity="0.8" />
                </g>
              )}
              {layer.icon === "globe" && (
                <g transform={`translate(158, ${layer.y + 17})`}>
                  <circle cx="11" cy="10" r="9" fill="none" stroke="#7C3AED" strokeWidth="1.3" />
                  <ellipse cx="11" cy="10" rx="5" ry="9" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
                  <line x1="2" y1="10" x2="20" y2="10" stroke="#7C3AED" strokeWidth="0.8" />
                  <line x1="4" y1="5" x2="18" y2="5" stroke="#7C3AED" strokeWidth="0.6" />
                  <line x1="4" y1="15" x2="18" y2="15" stroke="#7C3AED" strokeWidth="0.6" />
                </g>
              )}

              {/* Labels */}
              <text x="200" y={layer.y + 25} fill={textColor} fontSize="14" fontWeight="700" fontFamily="sans-serif">
                {layer.label}
              </text>
              <text x="200" y={layer.y + 42} fill={descColor} fontSize="11" fontWeight="400" fontFamily="sans-serif">
                {layer.desc}
              </text>

              {/* Step number */}
              <circle cx="440" cy={layer.y + 27} r="12" fill={isDark ? "rgba(255,255,255,0.2)" : "#EDE9FE"} />
              <text x="440" y={layer.y + 31} textAnchor="middle" fill={isDark ? "white" : "#7C3AED"} fontSize="11" fontWeight="700" fontFamily="sans-serif">
                {i + 1}
              </text>
            </g>
          );
        })}

        {/* Title */}
        <text x="300" y="365" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="600" fontFamily="sans-serif" opacity="0.6">
          {t.title}
        </text>
      </svg>
    </div>
  );
}
