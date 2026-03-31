"use client";

import { useLanguage } from "@/lib/language-context";
import { iaWorkflowsData } from "@/lib/courses/ia-workflows-data";
import { iaImageGenerationData } from "@/lib/courses/ia-image-generation-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import WorkflowPipeline from "@/components/course/ia-workflows/WorkflowPipeline";
import WorkflowPatterns from "@/components/course/ia-workflows/WorkflowPatterns";

const illustrationAfterSection: Record<string, React.ComponentType> = {
  "what-is-workflow": WorkflowPipeline,
  "simple-chains": WorkflowPatterns,
};

export default function IaWorkflowsPage() {
  const { language } = useLanguage();
  const course = iaWorkflowsData;
  const lang = language as "fr" | "en";

  const tocSections = course.sections.map((s) => ({
    id: s.id,
    title: s.title[lang],
  }));

  return (
    <>
      <ReadingProgress />
      <CourseHero
        title={course.title[lang]}
        subtitle={course.subtitle[lang]}
        chapter={course.chapter}
        readingTime={course.readingTime}
      />
      <CourseTableOfContents sections={tocSections} />

      {course.sections.map((section, i) => {
        const Illustration = illustrationAfterSection[section.id];
        return (
          <div key={section.id}>
            <CourseSection
              id={section.id}
              variant={i % 2 === 1 ? "muted" : undefined}
            >
              <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                {section.title[lang]}
              </h2>
              <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
                {section.content[lang]}
              </p>
              {section.highlight && (
                <div className={`rounded-xl p-5 md:p-6 ${i % 2 === 1 ? "bg-white border-l-4 border-[var(--primary)]" : "bg-[var(--primary)] text-white"}`}>
                  <p className={`font-montserrat text-sm md:text-base ${i % 2 === 1 ? "font-bold font-bricolage text-lg md:text-xl" : "font-medium"}`}>
                    {section.highlight[lang]}
                  </p>
                </div>
              )}
              {section.bullets && (
                <div className="space-y-4 mt-6">
                  {section.bullets[lang].map((bullet, j) => (
                    <div
                      key={j}
                      className={`rounded-xl p-5 border-l-4 border-[var(--primary)] ${i % 2 === 1 ? "bg-white shadow-sm" : "bg-[var(--muted)]"}`}
                    >
                      <p className="font-montserrat text-sm md:text-base">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CourseSection>
            {Illustration && (
              <div className="py-12 md:py-16 px-4">
                <Illustration />
              </div>
            )}
          </div>
        );
      })}

      <CourseSourcesList sources={course.sources} />
      <CourseNavFooter basePath="/cours-ia"
        nextChapter={{
          slug: "ia-generation-images",
          title: iaImageGenerationData.title[lang],
        }}
      />
    </>
  );
}
