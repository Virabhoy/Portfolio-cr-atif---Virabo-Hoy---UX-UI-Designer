"use client";

import { useLanguage } from "@/lib/language-context";
import { darkPatternsData } from "@/lib/courses/dark-patterns-data";
import { designSystemsData } from "@/lib/courses/design-systems-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import DarkPatternsTaxonomy from "@/components/course/dark-patterns/DarkPatternsTaxonomy";
import DarkVsEthical from "@/components/course/dark-patterns/DarkVsEthical";

export default function DarkPatternsCoursePage() {
  const { language } = useLanguage();
  const course = darkPatternsData;
  const lang = language as "fr" | "en";

  const tocSections = course.sections.map((s) => ({
    id: s.id,
    title: s.title[lang],
  }));

  // Sections that get an illustration inserted after them
  const illustrationAfter: Record<string, React.ReactNode> = {
    taxonomy: <DarkPatternsTaxonomy />,
    "ethical-persuasion": <DarkVsEthical />,
  };

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
        <CourseSection
          key={section.id}
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
          {illustrationAfter[section.id] && (
            <div className="mt-8 md:mt-12">
              {illustrationAfter[section.id]}
            </div>
          )}
        </CourseSection>
      ))}

      <CourseSourcesList sources={course.sources} />
      <CourseNavFooter
        nextChapter={{
          slug: designSystemsData.slug,
          title: designSystemsData.title[lang],
        }}
      />
    </>
  );
}
