"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { iaIntroductionData } from "@/lib/courses/ia-introduction-data";
import { iaPromptEngineeringData } from "@/lib/courses/ia-prompt-engineering-data";
import { iaOutilsMarcheData } from "@/lib/courses/ia-outils-marche-data";
import { iaClaudeCodeData } from "@/lib/courses/ia-claude-code-data";
import { iaMcpData } from "@/lib/courses/ia-mcp-data";
import { iaAgentsData } from "@/lib/courses/ia-agents-data";
import { iaWorkflowsData } from "@/lib/courses/ia-workflows-data";
import { iaImageGenerationData } from "@/lib/courses/ia-image-generation-data";
import { iaCodingAssistantsData } from "@/lib/courses/ia-coding-assistants-data";
import { iaSecuriteEthiqueData } from "@/lib/courses/ia-securite-ethique-data";
import { iaNoCodeData } from "@/lib/courses/ia-no-code-data";
import { iaAutomationData } from "@/lib/courses/ia-automation-data";
import { iaRagData } from "@/lib/courses/ia-rag-data";
import { iaDataCultureData } from "@/lib/courses/ia-data-culture-data";
import { iaFuturMetiersData } from "@/lib/courses/ia-futur-metiers-data";

const courses = [
  iaIntroductionData,
  iaPromptEngineeringData,
  iaOutilsMarcheData,
  iaClaudeCodeData,
  iaMcpData,
  iaAgentsData,
  iaWorkflowsData,
  iaImageGenerationData,
  iaCodingAssistantsData,
  iaSecuriteEthiqueData,
  iaNoCodeData,
  iaAutomationData,
  iaRagData,
  iaDataCultureData,
  iaFuturMetiersData,
];

export default function CoursIaPage() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const title = lang === "fr" ? "Cours IA" : "AI Courses";
  const subtitle =
    lang === "fr"
      ? "Ma\u00eetriser les outils et techniques de l\u2019intelligence artificielle"
      : "Master AI tools and techniques";
  const description =
    lang === "fr"
      ? "Une s\u00e9rie de cours pour comprendre, ma\u00eetriser et appliquer l\u2019intelligence artificielle dans vos projets. Du prompt engineering aux agents autonomes, en passant par la g\u00e9n\u00e9ration d\u2019images et l\u2019automatisation, chaque chapitre vous donne les cl\u00e9s pour tirer le meilleur parti de l\u2019IA."
      : "A series of courses to understand, master, and apply artificial intelligence in your projects. From prompt engineering to autonomous agents, image generation and automation, each chapter gives you the keys to getting the most out of AI.";
  const readLabel = lang === "fr" ? "Lire le cours" : "Read the course";
  const chapterLabel = lang === "fr" ? "Chapitre" : "Chapter";
  const readingTimeLabel = lang === "fr" ? "min de lecture" : "min read";

  return (
    <>
      {/* Hero */}
      <section
        className="text-white pt-32 pb-16 md:pt-40 md:pb-20"
        style={{
          background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
        }}
      >
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="font-montserrat text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Course Cards */}
          <div className="grid gap-6">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/cours-ia/${course.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl shadow-lg border border-[var(--border)] p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-l-4 border-l-[#7C3AED]">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-montserrat text-xs font-semibold text-white px-3 py-1 rounded-full bg-[#7C3AED]">
                          {chapterLabel} {course.chapter}
                        </span>
                        <span className="font-montserrat text-xs text-[var(--muted-foreground)]">
                          {course.readingTime} {readingTimeLabel}
                        </span>
                      </div>
                      <h2 className="font-bricolage text-xl md:text-2xl font-bold mb-2 group-hover:text-[#7C3AED] transition-colors">
                        {course.title[lang]}
                      </h2>
                      <p className="font-montserrat text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {course.description[lang]}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-[#7C3AED] group-hover:translate-x-1 transition-transform">
                        {readLabel}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5L12.5 10L7.5 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
