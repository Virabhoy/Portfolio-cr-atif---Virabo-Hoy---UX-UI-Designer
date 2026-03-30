"use client";

import { useLanguage } from "@/lib/language-context";
import { fittsData } from "@/lib/courses/fitts-data";
import { hicksData } from "@/lib/courses/hicks-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import FittsComparison from "@/components/course/fitts/FittsComparison";
import FittsFormula from "@/components/course/fitts/FittsFormula";
import FittsTimeline from "@/components/course/fitts/FittsTimeline";
import FittsThumbZone from "@/components/course/fitts/FittsThumbZone";
import FittsIceberg from "@/components/course/fitts/FittsIceberg";
import FittsDemo from "@/components/course/fitts/FittsDemo";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";

export default function FittsCoursePage() {
  const { language } = useLanguage();
  const course = fittsData;
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

      {/* Hook — Frustrant vs Fluide */}
      <CourseSection id="hook">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[0].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[0].content[lang]}
        </p>
        <FittsComparison />
        {course.sections[0].highlight && (
          <div className="mt-8 bg-[var(--muted)] border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[0].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Origin — 1954 Paul Fitts */}
      <CourseSection id="origin" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[1].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[1].content[lang]}
        </p>
        {course.sections[1].bullets && (
          <ul className="font-montserrat space-y-2 mb-4">
            {course.sections[1].bullets[lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </CourseSection>

      {/* Science — Formula */}
      <CourseSection id="science">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[2].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[2].content[lang]}
        </p>
        <FittsFormula />
        {course.sections[2].highlight && (
          <div className="mt-8 bg-[var(--muted)] border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[2].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Timeline */}
      <CourseSection id="timeline" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[3].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          {course.sections[3].content[lang]}
        </p>
        <FittsTimeline />
        {course.sections[3].highlight && (
          <div className="mt-10 bg-white border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[3].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Daily Questions */}
      <CourseSection id="daily-questions">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[4].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[4].content[lang]}
        </p>
        {course.sections[4].bullets && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.sections[4].bullets[lang].map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[var(--muted)] rounded-xl p-4"
              >
                <span className="text-[var(--primary)] font-bold text-lg shrink-0">
                  ?
                </span>
                <span className="font-montserrat text-sm md:text-base">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Rule 1 — Size & Proximity */}
      <CourseSection id="rule-size" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[5].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[5].content[lang]}
        </p>
        {course.sections[5].highlight && (
          <div className="bg-[var(--primary)] text-white rounded-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base font-medium">
              {course.sections[5].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Rule 2 — Screen Edges */}
      <CourseSection id="rule-edges">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[6].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[6].content[lang]}
        </p>
        {course.sections[6].bullets && (
          <ul className="font-montserrat space-y-2">
            {course.sections[6].bullets[lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </CourseSection>

      {/* Rule 3 — Thumb Zone */}
      <CourseSection id="rule-thumb" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[7].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[7].content[lang]}
        </p>
        <FittsThumbZone />
        {course.sections[7].highlight && (
          <div className="mt-8 bg-white border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[7].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Forms & Lists */}
      <CourseSection id="forms">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[8].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[8].content[lang]}
        </p>
        {course.sections[8].bullets && (
          <div className="space-y-4">
            {course.sections[8].bullets[lang].map((bullet, i) => (
              <div
                key={i}
                className="bg-[var(--muted)] rounded-xl p-5 border-l-4 border-[var(--primary)]"
              >
                <p className="font-montserrat text-sm md:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Interactive Demo */}
      <CourseSection id="demo" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {language === "fr"
            ? "Testez la Loi de Fitts"
            : "Test Fitts' Law"}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 text-center leading-relaxed">
          {language === "fr"
            ? "Expérimentez par vous-même la relation entre taille, distance et temps."
            : "Experience the relationship between size, distance and time for yourself."}
        </p>
        <FittsDemo />
      </CourseSection>

      {/* Limits */}
      <CourseSection id="limits">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[9].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
          {course.sections[9].content[lang]}
        </p>
      </CourseSection>

      {/* Iceberg */}
      <CourseSection id="iceberg" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {course.sections[10].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {course.sections[10].content[lang]}
        </p>
        <FittsIceberg />
      </CourseSection>

      {/* Context */}
      <CourseSection id="context">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[11].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[11].content[lang]}
        </p>
        {course.sections[11].bullets && (
          <ul className="font-montserrat space-y-3">
            {course.sections[11].bullets[lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </CourseSection>

      {/* Bending Rules */}
      <CourseSection id="bending-rules" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[12].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[12].content[lang]}
        </p>
        {course.sections[12].bullets && (
          <div className="space-y-4">
            {course.sections[12].bullets[lang].map((bullet, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-montserrat text-sm md:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Conclusion */}
      <CourseSection id="conclusion">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[13].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[13].content[lang]}
        </p>
        {course.sections[13].highlight && (
          <div className="bg-[var(--primary)] text-white rounded-xl p-6 md:p-8">
            <p className="font-montserrat text-base md:text-lg font-medium leading-relaxed">
              {course.sections[13].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Sources */}
      <CourseSourcesList sources={course.sources} />

      {/* Navigation Footer */}
      <CourseNavFooter
        nextChapter={{
          slug: hicksData.slug,
          title: hicksData.title[lang],
        }}
      />
    </>
  );
}
