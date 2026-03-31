"use client";

import { useLanguage } from "@/lib/language-context";
import { uxIaData } from "@/lib/courses/ux-ia-data";
import { thumbZoneData } from "@/lib/courses/thumb-zone-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import UxEvolutionTimeline from "@/components/course/ux-ia/UxEvolutionTimeline";
import AiDesignerVenn from "@/components/course/ux-ia/AiDesignerVenn";
import DesignerSkillsRadar from "@/components/course/ux-ia/DesignerSkillsRadar";

export default function UxIaCoursePage() {
  const { language } = useLanguage();
  const course = uxIaData;
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

      {course.sections.map((section, i) => (
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

          {section.id === "evolution-timeline" && (
            <div className="py-10 md:py-14 bg-[var(--muted)]">
              <UxEvolutionTimeline />
            </div>
          )}
          {section.id === "what-stays" && (
            <div className="py-10 md:py-14">
              <AiDesignerVenn />
            </div>
          )}
          {section.id === "new-skills" && (
            <div className="py-10 md:py-14 bg-[var(--muted)]">
              <DesignerSkillsRadar />
            </div>
          )}
        </div>
      ))}

      <CourseSourcesList sources={course.sources} />
      <CourseNavFooter
        nextChapter={{
          slug: thumbZoneData.slug,
          title: thumbZoneData.title[lang],
        }}
      />
    </>
  );
}
