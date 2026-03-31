"use client";

import { useLanguage } from "@/lib/language-context";
import { cognitiveLoadData } from "@/lib/courses/cognitive-load-data";
import { emotionalDesignData } from "@/lib/courses/emotional-design-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import CognitiveLoadTypes from "@/components/course/cognitive/CognitiveLoadTypes";
import MillerMagicNumber from "@/components/course/cognitive/MillerMagicNumber";
import CognitiveBeforeAfter from "@/components/course/cognitive/CognitiveBeforeAfter";

// Section IDs that get an illustration inserted after their content
const illustrationMap: Record<string, React.ReactNode> = {
  "three-types": <CognitiveLoadTypes />,
  "miller-revisited": <MillerMagicNumber />,
  "visual-noise": <CognitiveBeforeAfter />,
};

export default function CognitiveLoadCoursePage() {
  const { language } = useLanguage();
  const course = cognitiveLoadData;
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

          {/* Illustration insert */}
          {illustrationMap[section.id] && (
            <div className="mb-8">{illustrationMap[section.id]}</div>
          )}

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
      ))}

      <CourseSourcesList sources={course.sources} />
      <CourseNavFooter
        nextChapter={{
          slug: emotionalDesignData.slug,
          title: emotionalDesignData.title[lang],
        }}
      />
    </>
  );
}
