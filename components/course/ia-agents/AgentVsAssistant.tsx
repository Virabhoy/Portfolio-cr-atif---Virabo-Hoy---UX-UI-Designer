"use client";

import { useLanguage } from "@/lib/language-context";

export default function AgentVsAssistant() {
  const { language } = useLanguage();

  const t = {
    assistant: "Assistant",
    agent: "Agent",
    vs: "VS",
    assistantTraits: language === "fr"
      ? ["Tour unique", "L'utilisateur dirige", "Pas d'outils", "Sans memoire"]
      : ["Single turn", "User drives", "No tools", "No memory"],
    agentTraits: language === "fr"
      ? ["Multi-etapes", "Autonome", "Utilise des outils", "A de la memoire"]
      : ["Multi-step", "Autonomous", "Uses tools", "Has memory"],
    assistantIcons: ["chat", "user", "noTool", "noMem"],
    agentIcons: ["steps", "auto", "tool", "mem"],
    userSays: language === "fr" ? "Utilisateur" : "User",
    response: language === "fr" ? "Reponse" : "Response",
    think: language === "fr" ? "Penser" : "Think",
    act: language === "fr" ? "Agir" : "Act",
    observe: language === "fr" ? "Observer" : "Observe",
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 700 400" className="w-full" role="img" aria-label={`${t.assistant} vs ${t.agent}`}>
        <defs>
          <filter id="avsa-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* === LEFT: Assistant === */}
        <rect x="20" y="20" width="310" height="360" rx="16" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />

        {/* Header */}
        <rect x="20" y="20" width="310" height="50" rx="16" fill="#F3F4F6" />
        <rect x="20" y="50" width="310" height="20" fill="#F3F4F6" />
        <text x="175" y="52" textAnchor="middle" fill="#6B7280" fontSize="16" fontWeight="700" fontFamily="sans-serif">
          {t.assistant}
        </text>

        {/* Simple flow: User -> Response */}
        <g transform="translate(80, 100)">
          {/* User bubble */}
          <rect x="0" y="0" width="190" height="36" rx="18" fill="white" stroke="#D1D5DB" strokeWidth="1" filter="url(#avsa-shadow)" />
          <circle cx="22" cy="18" r="10" fill="#E5E7EB" />
          <text x="22" y="22" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="600" fontFamily="sans-serif">U</text>
          <text x="105" y="22" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="500" fontFamily="sans-serif">{t.userSays}</text>

          {/* Arrow down */}
          <line x1="95" y1="40" x2="95" y2="58" stroke="#D1D5DB" strokeWidth="1.5" />
          <polygon points="91,56 99,56 95,62" fill="#D1D5DB" />

          {/* Response bubble */}
          <rect x="0" y="65" width="190" height="36" rx="18" fill="white" stroke="#D1D5DB" strokeWidth="1" filter="url(#avsa-shadow)" />
          <circle cx="22" cy="83" r="10" fill="#E5E7EB" />
          <text x="22" y="87" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="700" fontFamily="sans-serif">AI</text>
          <text x="105" y="87" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="500" fontFamily="sans-serif">{t.response}</text>
        </g>

        {/* Trait list */}
        {t.assistantTraits.map((trait, i) => {
          const y = 235 + i * 32;
          return (
            <g key={`at-${i}`}>
              <circle cx="70" cy={y} r="10" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
              {/* X mark for "no" traits (last two) */}
              {i >= 2 ? (
                <g>
                  <line x1="66" y1={y - 4} x2="74" y2={y + 4} stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="74" y1={y - 4} x2="66" y2={y + 4} stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              ) : (
                <circle cx="70" cy={y} r="3" fill="#D1D5DB" />
              )}
              <text x="90" y={y + 4} fill="#6B7280" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                {trait}
              </text>
            </g>
          );
        })}

        {/* === CENTER: VS badge === */}
        <circle cx="350" cy="200" r="22" fill="#7C3AED" />
        <text x="350" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="sans-serif">
          {t.vs}
        </text>

        {/* === RIGHT: Agent === */}
        <rect x="370" y="20" width="310" height="360" rx="16" fill="#FAF5FF" stroke="#DDD6FE" strokeWidth="1" />

        {/* Header */}
        <rect x="370" y="20" width="310" height="50" rx="16" fill="#EDE9FE" />
        <rect x="370" y="50" width="310" height="20" fill="#EDE9FE" />
        <text x="525" y="52" textAnchor="middle" fill="#7C3AED" fontSize="16" fontWeight="700" fontFamily="sans-serif">
          {t.agent}
        </text>

        {/* Agent loop diagram */}
        <g transform="translate(440, 90)">
          {/* Think */}
          <rect x="40" y="0" width="90" height="32" rx="16" fill="#7C3AED" filter="url(#avsa-shadow)" />
          <text x="85" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="sans-serif">{t.think}</text>

          {/* Arrow to Act */}
          <path d="M130,16 C150,16 150,56 130,56" fill="none" stroke="#C4B5FD" strokeWidth="1.5" />
          <polygon points="131,53 131,59 126,56" fill="#C4B5FD" />

          {/* Act */}
          <rect x="40" y="42" width="90" height="32" rx="16" fill="#A78BFA" filter="url(#avsa-shadow)" />
          <text x="85" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="sans-serif">{t.act}</text>

          {/* Arrow to Observe */}
          <path d="M130,58 C150,58 150,98 130,98" fill="none" stroke="#C4B5FD" strokeWidth="1.5" />
          <polygon points="131,95 131,101 126,98" fill="#C4B5FD" />

          {/* Observe */}
          <rect x="40" y="84" width="90" height="32" rx="16" fill="#C4B5FD" filter="url(#avsa-shadow)" />
          <text x="85" y="104" textAnchor="middle" fill="#4C1D95" fontSize="11" fontWeight="600" fontFamily="sans-serif">{t.observe}</text>

          {/* Loop back arrow */}
          <path d="M40,98 C10,98 10,16 40,16" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="39,19 39,13 44,16" fill="#DDD6FE" />

          {/* Loop label */}
          <text x="15" y="60" fill="#A78BFA" fontSize="8" fontWeight="600" fontFamily="sans-serif" transform="rotate(-90, 15, 60)">LOOP</text>
        </g>

        {/* Trait list */}
        {t.agentTraits.map((trait, i) => {
          const y = 235 + i * 32;
          return (
            <g key={`agt-${i}`}>
              <circle cx="420" cy={y} r="10" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1" />
              {/* Checkmark */}
              <path
                d={`M${416},${y} L${419},${y + 3} L${425},${y - 3}`}
                fill="none"
                stroke="#7C3AED"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="440" y={y + 4} fill="#4C1D95" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                {trait}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
