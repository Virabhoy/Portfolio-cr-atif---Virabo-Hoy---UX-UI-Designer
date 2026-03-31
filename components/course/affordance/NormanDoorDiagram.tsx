"use client";

import { useLanguage } from "@/lib/language-context";

export default function NormanDoorDiagram() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    title: {
      fr: "La \"Norman Door\" : un design qui contredit l'usage",
      en: 'The "Norman Door": a design that contradicts usage',
    },
    badTitle: {
      fr: "Le probleme",
      en: "The problem",
    },
    goodTitle: {
      fr: "La solution",
      en: "The solution",
    },
    designSays: {
      fr: "Le design dit :",
      en: "Design says:",
    },
    push: {
      fr: "POUSSER",
      en: "PUSH",
    },
    userThinks: {
      fr: "L'utilisateur pense :",
      en: "User thinks:",
    },
    pull: {
      fr: "TIRER",
      en: "PULL",
    },
    mismatch: {
      fr: "Conflit !",
      en: "Mismatch!",
    },
    matchLabel: {
      fr: "Signifiant = Action",
      en: "Signifier = Action",
    },
    fixedDesign: {
      fr: "La plaque plate dit clairement : poussez",
      en: "The flat plate clearly says: push",
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="font-bricolage text-lg md:text-xl font-bold text-center mb-8 text-gray-700">
        {t.title[lang]}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BAD: Norman Door with mismatch */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-[#DC2626] flex flex-col items-center gap-4">
          <h4 className="font-bricolage text-lg font-bold text-[#DC2626]">
            {t.badTitle[lang]}
          </h4>

          <svg
            width="260"
            height="220"
            viewBox="0 0 260 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Left door - flat push plate */}
            <g>
              {/* Door frame */}
              <rect
                x="15"
                y="20"
                width="90"
                height="150"
                rx="3"
                fill="#E5E7EB"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
              {/* Push plate (flat rectangle) */}
              <rect
                x="60"
                y="70"
                width="20"
                height="50"
                rx="2"
                fill="#9CA3AF"
                stroke="#6B7280"
                strokeWidth="1.5"
              />
              {/* Label below door */}
              <text
                x="60"
                y="190"
                textAnchor="middle"
                className="font-montserrat"
                fill="#6B7280"
                fontSize="9"
              >
                {t.designSays[lang]}
              </text>
              <text
                x="60"
                y="204"
                textAnchor="middle"
                className="font-bricolage"
                fill="#0099FF"
                fontSize="12"
                fontWeight="700"
              >
                {t.push[lang]}
              </text>
            </g>

            {/* Red X in the middle */}
            <g>
              <circle cx="130" cy="95" r="20" fill="#FEE2E2" />
              <line
                x1="120"
                y1="85"
                x2="140"
                y2="105"
                stroke="#DC2626"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="140"
                y1="85"
                x2="120"
                y2="105"
                stroke="#DC2626"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text
                x="130"
                y="130"
                textAnchor="middle"
                className="font-bricolage"
                fill="#DC2626"
                fontSize="11"
                fontWeight="700"
              >
                {t.mismatch[lang]}
              </text>
            </g>

            {/* Right door - pull handle */}
            <g>
              {/* Door frame */}
              <rect
                x="155"
                y="20"
                width="90"
                height="150"
                rx="3"
                fill="#E5E7EB"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
              {/* Pull handle (vertical bar) */}
              <rect
                x="200"
                y="65"
                width="6"
                height="60"
                rx="3"
                fill="#6B7280"
                stroke="#4B5563"
                strokeWidth="1.5"
              />
              {/* Handle bracket top */}
              <rect
                x="195"
                y="63"
                width="16"
                height="4"
                rx="2"
                fill="#6B7280"
              />
              {/* Handle bracket bottom */}
              <rect
                x="195"
                y="123"
                width="16"
                height="4"
                rx="2"
                fill="#6B7280"
              />
              {/* Label below door */}
              <text
                x="200"
                y="190"
                textAnchor="middle"
                className="font-montserrat"
                fill="#6B7280"
                fontSize="9"
              >
                {t.userThinks[lang]}
              </text>
              <text
                x="200"
                y="204"
                textAnchor="middle"
                className="font-bricolage"
                fill="#DC2626"
                fontSize="12"
                fontWeight="700"
              >
                {t.pull[lang]}
              </text>
            </g>
          </svg>
        </div>

        {/* GOOD: Corrected design */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-[#16A34A] flex flex-col items-center gap-4">
          <h4 className="font-bricolage text-lg font-bold text-[#16A34A]">
            {t.goodTitle[lang]}
          </h4>

          <svg
            width="260"
            height="220"
            viewBox="0 0 260 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Single corrected door with push plate */}
            <g>
              {/* Door frame */}
              <rect
                x="60"
                y="20"
                width="140"
                height="150"
                rx="3"
                fill="#E5E7EB"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
              {/* Large push plate - clear signifier */}
              <rect
                x="150"
                y="50"
                width="30"
                height="90"
                rx="3"
                fill="#0099FF"
                stroke="#0066CC"
                strokeWidth="1.5"
              />
              {/* Push text on plate */}
              <text
                x="165"
                y="100"
                textAnchor="middle"
                className="font-montserrat"
                fill="white"
                fontSize="9"
                fontWeight="700"
                transform="rotate(-90, 165, 100)"
              >
                {t.push[lang]}
              </text>
              {/* Checkmark */}
              <circle cx="130" cy="180" r="14" fill="#DCFCE7" />
              <path
                d="M122 180 L128 186 L138 174"
                stroke="#16A34A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Label */}
            <text
              x="130"
              y="210"
              textAnchor="middle"
              className="font-bricolage"
              fill="#16A34A"
              fontSize="11"
              fontWeight="700"
            >
              {t.matchLabel[lang]}
            </text>
          </svg>

          <p className="font-montserrat text-sm text-gray-600 text-center leading-relaxed">
            {t.fixedDesign[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
