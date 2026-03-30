"use client";

import { useLanguage } from "@/lib/language-context";

export default function JakobGoldenRules() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const title = isFr
    ? "Les R\u00e8gles d\u2019Or du Navigateur"
    : "The Navigator\u2019s Golden Rules";

  const rules = isFr
    ? [
        "On ne demande jamais \u00e0 l\u2019utilisateur d\u2019apprendre quelque chose qu\u2019il sait d\u00e9j\u00e0 faire ailleurs.",
        "On ne disrupte jamais un usage sans avoir prouv\u00e9 que l\u2019usage actuel est insuffisant.",
        "Le standard rassure. L\u2019originalit\u00e9 doit r\u00e9compenser, jamais p\u00e9naliser.",
      ]
    : [
        "Never ask the user to learn something they already know how to do elsewhere.",
        "Never disrupt usage without proving current usage is insufficient.",
        "Standards reassure. Originality must reward, never penalize.",
      ];

  return (
    <div>
      <h3 className="font-bricolage text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-8">
        {title}
      </h3>

      <div className="space-y-0">
        {rules.map((rule, i) => (
          <div key={i}>
            <div className="bg-[var(--muted)] rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative quote mark */}
              <span
                className="absolute top-3 left-4 font-bricolage text-6xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(0, 153, 255, 0.2)" }}
                aria-hidden="true"
              >
                {"\u201C"}
              </span>

              <p className="font-montserrat text-lg md:text-xl font-medium italic text-[#1a1a1a] relative z-10 pl-6">
                {rule}
              </p>
            </div>

            {/* Separator between rules (not after the last) */}
            {i < rules.length - 1 && (
              <div className="mx-auto w-3/4 border-b" style={{ borderColor: "rgba(0, 153, 255, 0.2)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
