"use client";

import { useLanguage } from "@/lib/language-context";

export default function WorkflowPipeline() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Pipeline d\u2019un workflow IA"
        : "AI Workflow Pipeline",
    input: language === "fr" ? "Entr\u00e9e" : "Input",
    preprocess:
      language === "fr" ? "Pr\u00e9-traitement" : "Pre-processing",
    llmCall: language === "fr" ? "Appel LLM" : "LLM Call",
    postprocess:
      language === "fr" ? "Post-traitement" : "Post-processing",
    output: language === "fr" ? "Sortie" : "Output",
    inputDesc:
      language === "fr" ? "Texte, image, audio" : "Text, image, audio",
    preprocessDesc:
      language === "fr" ? "Nettoyage, tokenisation" : "Cleaning, tokenization",
    llmDesc:
      language === "fr" ? "Inf\u00e9rence du mod\u00e8le" : "Model inference",
    postprocessDesc:
      language === "fr" ? "Formatage, filtrage" : "Formatting, filtering",
    outputDesc:
      language === "fr"
        ? "R\u00e9ponse structur\u00e9e"
        : "Structured response",
  };

  const steps = [
    { label: t.input, desc: t.inputDesc, x: 60 },
    { label: t.preprocess, desc: t.preprocessDesc, x: 210 },
    { label: t.llmCall, desc: t.llmDesc, x: 360 },
    { label: t.postprocess, desc: t.postprocessDesc, x: 510 },
    { label: t.output, desc: t.outputDesc, x: 660 },
  ];

  const boxW = 120;
  const boxH = 64;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 780 160"
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        <defs>
          <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.02" />
          </linearGradient>
          <marker
            id="wf-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#7C3AED" />
          </marker>
        </defs>

        {/* Background */}
        <rect
          x="0"
          y="0"
          width="780"
          height="160"
          rx="16"
          fill="url(#wf-grad)"
        />

        {/* Arrows between boxes */}
        {steps.slice(0, -1).map((step, i) => (
          <line
            key={`arrow-${i}`}
            x1={step.x + boxW}
            y1={60}
            x2={steps[i + 1].x}
            y2={60}
            stroke="#7C3AED"
            strokeWidth="2"
            markerEnd="url(#wf-arrow)"
          />
        ))}

        {/* Data flow dots */}
        {steps.slice(0, -1).map((step, i) => {
          const cx = step.x + boxW + (steps[i + 1].x - step.x - boxW) / 2;
          return (
            <g key={`dots-${i}`}>
              <circle cx={cx - 6} cy={60} r="2" fill="#C4B5FD">
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur="2s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={cx + 6} cy={60} r="2" fill="#C4B5FD">
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur="2s"
                  begin={`${i * 0.4 + 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Step boxes */}
        {steps.map((step, i) => (
          <g key={`step-${i}`}>
            <rect
              x={step.x}
              y={60 - boxH / 2}
              width={boxW}
              height={boxH}
              rx="12"
              fill={i === 2 ? "#7C3AED" : "white"}
              stroke="#7C3AED"
              strokeWidth={i === 2 ? "0" : "2"}
            />

            {/* Icons */}
            <g
              transform={`translate(${step.x + boxW / 2}, 42)`}
              textAnchor="middle"
            >
              {i === 0 && (
                <g transform="translate(-8, -8)">
                  <rect
                    x="0"
                    y="0"
                    width="16"
                    height="12"
                    rx="2"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="2"
                    y1="5"
                    x2="14"
                    y2="5"
                    stroke="#7C3AED"
                    strokeWidth="1"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="10"
                    y2="8"
                    stroke="#7C3AED"
                    strokeWidth="1"
                  />
                </g>
              )}
              {i === 1 && (
                <g transform="translate(-8, -8)">
                  <path
                    d="M2 6 L6 2 L10 6 L14 2"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="10"
                    x2="14"
                    y2="10"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              )}
              {i === 2 && (
                <g transform="translate(-8, -8)">
                  <circle
                    cx="8"
                    cy="6"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 6 L8 3 L11 6 M8 3 L8 9"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </g>
              )}
              {i === 3 && (
                <g transform="translate(-8, -8)">
                  <rect
                    x="0"
                    y="0"
                    width="16"
                    height="12"
                    rx="2"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 4 L7 7 L12 3"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}
              {i === 4 && (
                <g transform="translate(-8, -8)">
                  <rect
                    x="0"
                    y="0"
                    width="16"
                    height="12"
                    rx="2"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="4"
                    y1="4"
                    x2="12"
                    y2="4"
                    stroke="#7C3AED"
                    strokeWidth="1"
                  />
                  <line
                    x1="4"
                    y1="7"
                    x2="9"
                    y2="7"
                    stroke="#7C3AED"
                    strokeWidth="1"
                  />
                </g>
              )}
            </g>

            {/* Label */}
            <text
              x={step.x + boxW / 2}
              y={68}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={i === 2 ? "white" : "#7C3AED"}
              fontFamily="system-ui, sans-serif"
            >
              {step.label}
            </text>

            {/* Description below box */}
            <text
              x={step.x + boxW / 2}
              y={108}
              textAnchor="middle"
              fontSize="9"
              fill="#6B7280"
              fontFamily="system-ui, sans-serif"
            >
              {step.desc}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
