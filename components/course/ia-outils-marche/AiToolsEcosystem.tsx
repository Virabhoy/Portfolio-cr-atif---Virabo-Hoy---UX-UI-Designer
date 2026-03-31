"use client";

import { useLanguage } from "@/lib/language-context";

const categories = [
  {
    key: "text",
    labelFr: "Texte",
    labelEn: "Text",
    tools: ["ChatGPT", "Claude"],
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    icon: (
      <path
        d="M4 6h16M4 10h16M4 14h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    key: "image",
    labelFr: "Image",
    labelEn: "Image",
    tools: ["Midjourney", "DALL-E"],
    color: "#9333EA",
    bgColor: "#DDD6FE",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="8.5" cy="8.5" r="2" fill="currentColor" />
        <path
          d="M21 15l-5-5L5 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    key: "code",
    labelFr: "Code",
    labelEn: "Code",
    tools: ["Copilot", "Cursor"],
    color: "#6D28D9",
    bgColor: "#EDE9FE",
    icon: (
      <>
        <polyline
          points="16 18 22 12 16 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    key: "audio",
    labelFr: "Audio",
    labelEn: "Audio",
    tools: ["ElevenLabs"],
    color: "#8B5CF6",
    bgColor: "#DDD6FE",
    icon: (
      <>
        <path
          d="M9 18V5l12-2v13"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="18" r="3" fill="currentColor" />
        <circle cx="18" cy="16" r="3" fill="currentColor" />
      </>
    ),
  },
  {
    key: "video",
    labelFr: "Video",
    labelEn: "Video",
    tools: ["Runway", "Sora"],
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    icon: (
      <>
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <polygon points="10,8 10,16 16,12" fill="currentColor" />
      </>
    ),
  },
  {
    key: "nocode",
    labelFr: "No-Code",
    labelEn: "No-Code",
    tools: ["v0", "Bolt"],
    color: "#9333EA",
    bgColor: "#DDD6FE",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          fill="currentColor"
        />
      </>
    ),
  },
];

export default function AiToolsEcosystem() {
  const { language } = useLanguage();

  const title =
    language === "fr"
      ? "Ecosysteme des outils IA"
      : "AI Tools Ecosystem";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="font-bricolage text-xl font-bold text-center text-[#7C3AED] mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="rounded-2xl border-2 p-5 flex flex-col items-center gap-3 transition-shadow hover:shadow-lg"
            style={{
              borderColor: cat.color,
              backgroundColor: cat.bgColor,
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: cat.color }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                {cat.icon}
              </svg>
            </div>
            <span
              className="font-bricolage font-bold text-sm"
              style={{ color: cat.color }}
            >
              {language === "fr" ? cat.labelFr : cat.labelEn}
            </span>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-full text-xs font-montserrat font-medium text-white"
                  style={{ backgroundColor: cat.color }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
