"use client";

import { useLanguage } from "@/lib/language-context";

interface ComparisonSide {
  title: { fr: string; en: string };
  timeline: { fr: string; en: string };
  timelineWidth: number;
  team: { fr: string; en: string };
  teamCount: number;
  stack: { fr: string; en: string };
  color: string;
  colorLight: string;
}

const sides: [ComparisonSide, ComparisonSide] = [
  {
    title: { fr: "Developpement traditionnel", en: "Traditional Development" },
    timeline: { fr: "3-6 mois", en: "3-6 months" },
    timelineWidth: 200,
    team: { fr: "Equipe de 5+", en: "Team of 5+" },
    teamCount: 5,
    stack: { fr: "Stack complexe", en: "Complex stack" },
    color: "#94A3B8",
    colorLight: "#F1F5F9",
  },
  {
    title: { fr: "No-Code + IA", en: "No-Code AI" },
    timeline: { fr: "2-5 jours", en: "2-5 days" },
    timelineWidth: 40,
    team: { fr: "1 personne", en: "1 person" },
    teamCount: 1,
    stack: { fr: "Visual builder", en: "Visual builder" },
    color: "#7C3AED",
    colorLight: "#EDE9FE",
  },
];

export default function NoCodeVsDev() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Traditionnel vs No-Code IA"
      : "Traditional vs No-Code AI";

  const timelineLabel = language === "fr" ? "Delai" : "Timeline";
  const teamLabel = language === "fr" ? "Equipe" : "Team";
  const stackLabel = language === "fr" ? "Outils" : "Tools";

  const personIcon = (x: number, y: number, fill: string) => (
    <g>
      <circle cx={x} cy={y - 6} r="5" fill={fill} />
      <path
        d={`M${x - 6},${y + 8} Q${x - 6},${y + 1} ${x},${y + 1} Q${x + 6},${y + 1} ${x + 6},${y + 8}`}
        fill={fill}
      />
    </g>
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 700 400"
        className="w-full h-auto"
        role="img"
        aria-label={title}
      >
        <defs>
          <filter id="nc-shadow" x="-4%" y="-4%" width="108%" height="108%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#7C3AED"
              floodOpacity="0.10"
            />
          </filter>
        </defs>

        {/* Background */}
        <rect width="700" height="400" rx="16" fill="#FAFAFE" />

        {/* Title */}
        <text
          x="350"
          y="32"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#6D28D9"
          letterSpacing="0.02em"
        >
          {title.toUpperCase()}
        </text>

        {/* VS divider */}
        <line
          x1="350"
          y1="55"
          x2="350"
          y2="380"
          stroke="#DDD6FE"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <circle cx="350" cy="70" r="18" fill="#7C3AED" />
        <text
          x="350"
          y="75"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="white"
        >
          VS
        </text>

        {/* Two sides */}
        {sides.map((side, i) => {
          const baseX = i === 0 ? 30 : 380;
          const cardW = 280;

          return (
            <g key={i}>
              {/* Card */}
              <rect
                x={baseX}
                y={100}
                width={cardW}
                height={280}
                rx="12"
                fill="white"
                stroke={side.color}
                strokeWidth="1.5"
                filter="url(#nc-shadow)"
              />

              {/* Header */}
              <rect
                x={baseX}
                y={100}
                width={cardW}
                height={44}
                rx="12"
                fill={side.colorLight}
              />
              <rect
                x={baseX}
                y={132}
                width={cardW}
                height="12"
                fill={side.colorLight}
              />
              <text
                x={baseX + cardW / 2}
                y={128}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontSize="13"
                fontWeight="700"
                fill={side.color === "#7C3AED" ? "#6D28D9" : "#475569"}
              >
                {side.title[language]}
              </text>

              {/* Timeline section */}
              <text
                x={baseX + 20}
                y={175}
                fontFamily="system-ui, sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {timelineLabel.toUpperCase()}
              </text>
              {/* Timeline bar */}
              <rect
                x={baseX + 20}
                y={185}
                width={side.timelineWidth}
                height="14"
                rx="7"
                fill={side.color}
                opacity="0.25"
              />
              <rect
                x={baseX + 20}
                y={185}
                width={side.timelineWidth}
                height="14"
                rx="7"
                fill={side.color}
                opacity="0.7"
              />
              <text
                x={baseX + 20 + side.timelineWidth + 10}
                y={196}
                fontFamily="system-ui, sans-serif"
                fontSize="12"
                fontWeight="600"
                fill={side.color}
              >
                {side.timeline[language]}
              </text>

              {/* Team section */}
              <text
                x={baseX + 20}
                y={235}
                fontFamily="system-ui, sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {teamLabel.toUpperCase()}
              </text>
              <g>
                {Array.from({ length: side.teamCount }).map((_, j) =>
                  personIcon(baseX + 35 + j * 28, 255, side.color)
                )}
              </g>
              <text
                x={baseX + 35 + side.teamCount * 28 + 10}
                y={258}
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fill={side.color}
                fontWeight="500"
              >
                {side.team[language]}
              </text>

              {/* Stack section */}
              <text
                x={baseX + 20}
                y={300}
                fontFamily="system-ui, sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#94A3B8"
                letterSpacing="0.05em"
              >
                {stackLabel.toUpperCase()}
              </text>
              {i === 0 ? (
                /* Complex stack - multiple small boxes */
                <g>
                  {["React", "Node", "DB", "CI/CD", "AWS"].map((tech, j) => (
                    <g key={j}>
                      <rect
                        x={baseX + 20 + j * 48}
                        y={310}
                        width="42"
                        height="24"
                        rx="6"
                        fill={side.colorLight}
                        stroke={side.color}
                        strokeWidth="1"
                      />
                      <text
                        x={baseX + 41 + j * 48}
                        y={326}
                        textAnchor="middle"
                        fontFamily="system-ui, sans-serif"
                        fontSize="8"
                        fill="#475569"
                      >
                        {tech}
                      </text>
                    </g>
                  ))}
                </g>
              ) : (
                /* Visual builder - single friendly box */
                <g>
                  <rect
                    x={baseX + 20}
                    y={310}
                    width="120"
                    height="30"
                    rx="8"
                    fill="#EDE9FE"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  {/* Grid icon */}
                  <rect
                    x={baseX + 30}
                    y={317}
                    width="7"
                    height="7"
                    rx="1.5"
                    fill="#7C3AED"
                  />
                  <rect
                    x={baseX + 40}
                    y={317}
                    width="7"
                    height="7"
                    rx="1.5"
                    fill="#C4B5FD"
                  />
                  <rect
                    x={baseX + 30}
                    y={327}
                    width="7"
                    height="7"
                    rx="1.5"
                    fill="#C4B5FD"
                  />
                  <rect
                    x={baseX + 40}
                    y={327}
                    width="7"
                    height="7"
                    rx="1.5"
                    fill="#7C3AED"
                  />
                  <text
                    x={baseX + 60}
                    y={329}
                    fontFamily="system-ui, sans-serif"
                    fontSize="11"
                    fontWeight="600"
                    fill="#6D28D9"
                  >
                    {side.stack[language]}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
