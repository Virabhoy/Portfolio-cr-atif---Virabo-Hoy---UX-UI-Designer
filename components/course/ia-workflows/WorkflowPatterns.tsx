"use client";

import { useLanguage } from "@/lib/language-context";

export default function WorkflowPatterns() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Patterns de workflows IA"
        : "AI Workflow Patterns",
    chain:
      language === "fr" ? "Cha\u00eene simple" : "Simple Chain",
    chainDesc:
      language === "fr"
        ? "Ex\u00e9cution s\u00e9quentielle, chaque \u00e9tape nourrit la suivante"
        : "Sequential execution, each step feeds the next",
    parallel:
      language === "fr" ? "Parall\u00e8le" : "Parallel",
    parallelDesc:
      language === "fr"
        ? "Traitement simultan\u00e9 puis fusion des r\u00e9sultats"
        : "Simultaneous processing then merging results",
    conditional:
      language === "fr" ? "Conditionnel" : "Conditional",
    conditionalDesc:
      language === "fr"
        ? "Branchement selon une d\u00e9cision logique"
        : "Branching based on a logical decision",
    yes: language === "fr" ? "Oui" : "Yes",
    no: language === "fr" ? "Non" : "No",
    split: language === "fr" ? "Split" : "Split",
    merge: language === "fr" ? "Merge" : "Merge",
  };

  const violet = "#7C3AED";
  const violetLight = "#EDE9FE";
  const violetMid = "#DDD6FE";
  const violetSoft = "#C4B5FD";

  const boxRx = 10;
  const boxW = 90;
  const boxH = 40;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 700 420"
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        <defs>
          <marker
            id="wp-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={violet} />
          </marker>
        </defs>

        {/* --- PATTERN 1: Simple Chain --- */}
        <g transform="translate(0, 0)">
          {/* Section background */}
          <rect
            x="10"
            y="10"
            width="680"
            height="110"
            rx="16"
            fill={violetLight}
            opacity="0.5"
          />

          {/* Pattern label */}
          <text
            x="30"
            y="38"
            fontSize="14"
            fontWeight="800"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            1. {t.chain}
          </text>
          <text
            x="30"
            y="54"
            fontSize="10"
            fill="#6B7280"
            fontFamily="system-ui, sans-serif"
          >
            {t.chainDesc}
          </text>

          {/* Boxes A -> B -> C */}
          {["A", "B", "C"].map((label, i) => {
            const x = 250 + i * 150;
            const y = 50;
            return (
              <g key={label}>
                <rect
                  x={x}
                  y={y}
                  width={boxW}
                  height={boxH}
                  rx={boxRx}
                  fill="white"
                  stroke={violet}
                  strokeWidth="2"
                />
                <text
                  x={x + boxW / 2}
                  y={y + boxH / 2 + 5}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill={violet}
                  fontFamily="system-ui, sans-serif"
                >
                  {language === "fr" ? "\u00c9tape" : "Step"} {label}
                </text>
                {i < 2 && (
                  <line
                    x1={x + boxW}
                    y1={y + boxH / 2}
                    x2={x + 150}
                    y2={y + boxH / 2}
                    stroke={violet}
                    strokeWidth="2"
                    markerEnd="url(#wp-arrow)"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* --- PATTERN 2: Parallel --- */}
        <g transform="translate(0, 140)">
          <rect
            x="10"
            y="10"
            width="680"
            height="130"
            rx="16"
            fill={violetLight}
            opacity="0.5"
          />

          <text
            x="30"
            y="38"
            fontSize="14"
            fontWeight="800"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            2. {t.parallel}
          </text>
          <text
            x="30"
            y="54"
            fontSize="10"
            fill="#6B7280"
            fontFamily="system-ui, sans-serif"
          >
            {t.parallelDesc}
          </text>

          {/* Box A */}
          <rect
            x="200"
            y="50"
            width={boxW}
            height={boxH}
            rx={boxRx}
            fill="white"
            stroke={violet}
            strokeWidth="2"
          />
          <text
            x={200 + boxW / 2}
            y={75}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            A
          </text>

          {/* Parallel branches B1, B2, B3 */}
          {["B1", "B2", "B3"].map((label, i) => {
            const bx = 370;
            const by = 20 + i * 40;
            return (
              <g key={label}>
                <rect
                  x={bx}
                  y={by}
                  width={70}
                  height={32}
                  rx={8}
                  fill={violetMid}
                  stroke={violet}
                  strokeWidth="1.5"
                />
                <text
                  x={bx + 35}
                  y={by + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill={violet}
                  fontFamily="system-ui, sans-serif"
                >
                  {label}
                </text>
                {/* Arrow A -> Bi */}
                <line
                  x1={290}
                  y1={70}
                  x2={bx}
                  y2={by + 16}
                  stroke={violet}
                  strokeWidth="1.5"
                  markerEnd="url(#wp-arrow)"
                />
                {/* Arrow Bi -> C */}
                <line
                  x1={bx + 70}
                  y1={by + 16}
                  x2={520}
                  y2={70}
                  stroke={violet}
                  strokeWidth="1.5"
                  markerEnd="url(#wp-arrow)"
                />
              </g>
            );
          })}

          {/* Box C (merge) */}
          <rect
            x="520"
            y="50"
            width={boxW}
            height={boxH}
            rx={boxRx}
            fill="white"
            stroke={violet}
            strokeWidth="2"
          />
          <text
            x={520 + boxW / 2}
            y={75}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            C ({t.merge})
          </text>
        </g>

        {/* --- PATTERN 3: Conditional --- */}
        <g transform="translate(0, 290)">
          <rect
            x="10"
            y="10"
            width="680"
            height="120"
            rx="16"
            fill={violetLight}
            opacity="0.5"
          />

          <text
            x="30"
            y="38"
            fontSize="14"
            fontWeight="800"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            3. {t.conditional}
          </text>
          <text
            x="30"
            y="54"
            fontSize="10"
            fill="#6B7280"
            fontFamily="system-ui, sans-serif"
          >
            {t.conditionalDesc}
          </text>

          {/* Box A */}
          <rect
            x="200"
            y="50"
            width={boxW}
            height={boxH}
            rx={boxRx}
            fill="white"
            stroke={violet}
            strokeWidth="2"
          />
          <text
            x={200 + boxW / 2}
            y={75}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            A
          </text>

          {/* Arrow A -> Diamond */}
          <line
            x1={290}
            y1={70}
            x2={350}
            y2={70}
            stroke={violet}
            strokeWidth="2"
            markerEnd="url(#wp-arrow)"
          />

          {/* Decision diamond */}
          <polygon
            points="385,40 420,70 385,100 350,70"
            fill={violetSoft}
            stroke={violet}
            strokeWidth="2"
          />
          <text
            x="385"
            y="74"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            ?
          </text>

          {/* Arrow Diamond -> B (yes, top) */}
          <line
            x1={420}
            y1={55}
            x2={500}
            y2={40}
            stroke={violet}
            strokeWidth="1.5"
            markerEnd="url(#wp-arrow)"
          />
          <text
            x="455"
            y="42"
            fontSize="10"
            fontWeight="600"
            fill="#16A34A"
            fontFamily="system-ui, sans-serif"
          >
            {t.yes}
          </text>

          {/* Box B */}
          <rect
            x="500"
            y="22"
            width={boxW}
            height={boxH}
            rx={boxRx}
            fill="white"
            stroke="#16A34A"
            strokeWidth="2"
          />
          <text
            x={500 + boxW / 2}
            y={47}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#16A34A"
            fontFamily="system-ui, sans-serif"
          >
            B
          </text>

          {/* Arrow Diamond -> C (no, bottom) */}
          <line
            x1={420}
            y1={85}
            x2={500}
            y2={95}
            stroke={violet}
            strokeWidth="1.5"
            markerEnd="url(#wp-arrow)"
          />
          <text
            x="455"
            y="100"
            fontSize="10"
            fontWeight="600"
            fill="#DC2626"
            fontFamily="system-ui, sans-serif"
          >
            {t.no}
          </text>

          {/* Box C */}
          <rect
            x="500"
            y="75"
            width={boxW}
            height={boxH}
            rx={boxRx}
            fill="white"
            stroke="#DC2626"
            strokeWidth="2"
          />
          <text
            x={500 + boxW / 2}
            y={100}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#DC2626"
            fontFamily="system-ui, sans-serif"
          >
            C
          </text>
        </g>
      </svg>
    </div>
  );
}
