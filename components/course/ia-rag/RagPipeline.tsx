"use client";

import { useLanguage } from "@/lib/language-context";

interface PipelineStep {
  icon: string;
  label: { fr: string; en: string };
  x: number;
}

const steps: PipelineStep[] = [
  { icon: "doc", label: { fr: "Documents", en: "Documents" }, x: 30 },
  { icon: "chunk", label: { fr: "Chunking", en: "Chunking" }, x: 140 },
  { icon: "embed", label: { fr: "Embedding", en: "Embedding" }, x: 250 },
  { icon: "db", label: { fr: "Vector DB", en: "Vector DB" }, x: 360 },
  { icon: "query", label: { fr: "Requête", en: "Query" }, x: 470 },
  { icon: "retrieve", label: { fr: "Retrieval", en: "Retrieval" }, x: 580 },
  { icon: "llm", label: { fr: "LLM", en: "LLM" }, x: 690 },
  { icon: "response", label: { fr: "Réponse", en: "Response" }, x: 800 },
];

function StepIcon({ type, cx, cy }: { type: string; cx: number; cy: number }) {
  const r = 24;
  switch (type) {
    case "doc":
      return (
        <g>
          <rect x={cx - 10} y={cy - 14} width={20} height={28} rx={2} fill="none" stroke="white" strokeWidth={1.5} />
          <line x1={cx - 6} y1={cy - 6} x2={cx + 6} y2={cy - 6} stroke="white" strokeWidth={1.2} />
          <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="white" strokeWidth={1.2} />
          <line x1={cx - 6} y1={cy + 6} x2={cx + 4} y2={cy + 6} stroke="white" strokeWidth={1.2} />
        </g>
      );
    case "chunk":
      return (
        <g>
          {[-8, 0, 8].map((dy) => (
            <rect key={dy} x={cx - 10} y={cy + dy - 4} width={20} height={6} rx={1} fill="none" stroke="white" strokeWidth={1.2} />
          ))}
        </g>
      );
    case "embed":
      return (
        <g>
          <text x={cx} y={cy + 2} textAnchor="middle" fill="white" fontSize={11} fontFamily="monospace">[0.3]</text>
          <text x={cx} y={cy + 13} textAnchor="middle" fill="white" fontSize={11} fontFamily="monospace">[0.7]</text>
        </g>
      );
    case "db":
      return (
        <g>
          <ellipse cx={cx} cy={cy - 8} rx={14} ry={6} fill="none" stroke="white" strokeWidth={1.5} />
          <path d={`M${cx - 14},${cy - 8} v16 a14,6 0 0,0 28,0 v-16`} fill="none" stroke="white" strokeWidth={1.5} />
          <ellipse cx={cx} cy={cy + 8} rx={14} ry={6} fill="none" stroke="white" strokeWidth={1.5} />
        </g>
      );
    case "query":
      return (
        <g>
          <circle cx={cx - 2} cy={cy - 2} r={10} fill="none" stroke="white" strokeWidth={1.5} />
          <line x1={cx + 5} y1={cy + 5} x2={cx + 12} y2={cy + 12} stroke="white" strokeWidth={2} strokeLinecap="round" />
        </g>
      );
    case "retrieve":
      return (
        <g>
          <path d={`M${cx},${cy - 14} v20`} stroke="white" strokeWidth={1.5} strokeLinecap="round" />
          <path d={`M${cx - 7},${cy + 1} l7,7 7,-7`} fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <line x1={cx - 10} y1={cy + 12} x2={cx + 10} y2={cy + 12} stroke="white" strokeWidth={1.5} strokeLinecap="round" />
        </g>
      );
    case "llm":
      return (
        <g>
          <rect x={cx - 12} y={cy - 12} width={24} height={24} rx={4} fill="none" stroke="white" strokeWidth={1.5} />
          <circle cx={cx - 4} cy={cy - 2} r={2.5} fill="white" />
          <circle cx={cx + 4} cy={cy - 2} r={2.5} fill="white" />
          <path d={`M${cx - 5},${cy + 5} q5,4 10,0`} fill="none" stroke="white" strokeWidth={1.2} />
        </g>
      );
    case "response":
      return (
        <g>
          <path d={`M${cx - 12},${cy - 10} h24 v16 h-18 l-8,6 v-6 h2 v-16z`} fill="none" stroke="white" strokeWidth={1.5} strokeLinejoin="round" />
          <line x1={cx - 5} y1={cy - 3} x2={cx + 8} y2={cy - 3} stroke="white" strokeWidth={1.2} />
          <line x1={cx - 5} y1={cy + 2} x2={cx + 5} y2={cy + 2} stroke="white" strokeWidth={1.2} />
        </g>
      );
    default:
      return <circle cx={cx} cy={cy} r={r} fill="none" stroke="white" strokeWidth={1.5} />;
  }
}

export default function RagPipeline() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Pipeline RAG : de la source a la reponse"
      : "RAG Pipeline: From Source to Response";

  const centerY = 120;
  const circleR = 28;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 870 240" className="w-full h-auto" role="img" aria-label={title}>
        <defs>
          <linearGradient id="rag-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
          <marker id="rag-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth={6} markerHeight={6} orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#C4B5FD" />
          </marker>
        </defs>

        <rect width="870" height="240" rx={16} fill="url(#rag-bg)" />

        <text x={435} y={36} textAnchor="middle" fill="white" fontSize={16} fontWeight={700}>
          {title}
        </text>

        {/* Divider line between indexing and querying */}
        <line x1={415} y1={55} x2={415} y2={210} stroke="#C4B5FD" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
        <text x={230} y={68} textAnchor="middle" fill="#DDD6FE" fontSize={11} fontWeight={600}>
          {language === "fr" ? "INDEXATION" : "INDEXING"}
        </text>
        <text x={650} y={68} textAnchor="middle" fill="#DDD6FE" fontSize={11} fontWeight={600}>
          {language === "fr" ? "INTERROGATION" : "QUERYING"}
        </text>

        {/* Steps */}
        {steps.map((step, i) => {
          const cx = step.x + circleR;
          return (
            <g key={step.icon}>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <line
                  x1={cx + circleR + 4}
                  y1={centerY}
                  x2={steps[i + 1].x + 4}
                  y2={centerY}
                  stroke="#C4B5FD"
                  strokeWidth={1.5}
                  markerEnd="url(#rag-arrow)"
                />
              )}
              {/* Circle */}
              <circle cx={cx} cy={centerY} r={circleR} fill="rgba(255,255,255,0.12)" stroke="#C4B5FD" strokeWidth={1.5} />
              {/* Icon */}
              <StepIcon type={step.icon} cx={cx} cy={centerY} />
              {/* Label */}
              <text x={cx} y={centerY + circleR + 18} textAnchor="middle" fill="white" fontSize={11} fontWeight={500}>
                {step.label[language]}
              </text>
              {/* Step number */}
              <text x={cx} y={centerY - circleR - 8} textAnchor="middle" fill="#DDD6FE" fontSize={10}>
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
