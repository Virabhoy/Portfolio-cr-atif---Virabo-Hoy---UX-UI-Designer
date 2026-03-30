"use client";

import { useLanguage } from "@/lib/language-context";
import { hicksData } from "@/lib/courses/hicks-data";
import { jakobData } from "@/lib/courses/jakob-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import HicksFormula from "@/components/course/hicks/HicksFormula";
import HicksStrategies from "@/components/course/hicks/HicksStrategies";
import HicksComparison from "@/components/course/hicks/HicksComparison";
import HicksHierarchy from "@/components/course/hicks/HicksHierarchy";
import HicksCompass from "@/components/course/hicks/HicksCompass";
import HicksDemo from "@/components/course/hicks/HicksDemo";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";

export default function HicksCoursePage() {
  const { language } = useLanguage();
  const course = hicksData;
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

      {/* Hook — Plus de choix, c'est mieux ? */}
      <CourseSection id="hook">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[0].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[0].content[lang]}
        </p>
        {course.sections[0].highlight && (
          <div className="bg-[var(--primary)] text-white rounded-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base font-medium">
              {course.sections[0].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Coût Caché de l'Abondance */}
      <CourseSection id="cost" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[1].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[1].content[lang]}
        </p>
        {course.sections[1].highlight && (
          <div className="bg-white border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-bricolage text-lg md:text-xl font-bold">
              {course.sections[1].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Origine — Hick-Hyman */}
      <CourseSection id="origin">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[2].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[2].content[lang]}
        </p>
        {course.sections[2].bullets && (
          <div className="space-y-4">
            {course.sections[2].bullets[lang].map((bullet, i) => (
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

      {/* Formule */}
      <CourseSection id="formula" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[3].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[3].content[lang]}
        </p>
        <HicksFormula />
      </CourseSection>

      {/* Toolkit — 5 Stratégies */}
      <CourseSection id="toolkit">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {course.sections[4].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {course.sections[4].content[lang]}
        </p>
        <HicksStrategies />
      </CourseSection>

      {/* Prioriser et Séquencer */}
      <CourseSection id="prioritize" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[5].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[5].content[lang]}
        </p>
        {course.sections[5].bullets && (
          <div className="space-y-4">
            {course.sections[5].bullets[lang].map((bullet, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[var(--primary)]"
              >
                <p className="font-montserrat text-sm md:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Organiser le Chaos */}
      <CourseSection id="organize">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[6].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[6].content[lang]}
        </p>
        {course.sections[6].bullets && (
          <div className="space-y-4">
            {course.sections[6].bullets[lang].map((bullet, i) => (
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

      {/* Hiérarchie Visuelle */}
      <CourseSection id="hierarchy" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {course.sections[7].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {course.sections[7].content[lang]}
        </p>
        <HicksHierarchy />
      </CourseSection>

      {/* Cas Pratique — E-commerce */}
      <CourseSection id="case-study">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {course.sections[8].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {course.sections[8].content[lang]}
        </p>
        <HicksComparison />
      </CourseSection>

      {/* Demo Interactive */}
      <CourseSection id="demo" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {language === "fr"
            ? "Testez la Loi de Hick"
            : "Test Hick's Law"}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 text-center leading-relaxed">
          {language === "fr"
            ? "Expérimentez par vous-même : plus il y a de choix, plus la décision est lente."
            : "Experience it yourself: the more choices, the slower the decision."}
        </p>
        <HicksDemo />
      </CourseSection>

      {/* Au-delà de la Règle */}
      <CourseSection id="beyond">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[9].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
          {course.sections[9].content[lang]}
        </p>
      </CourseSection>

      {/* Contexte est Roi */}
      <CourseSection id="context" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[10].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[10].content[lang]}
        </p>
        {course.sections[10].bullets && (
          <div className="space-y-4">
            {course.sections[10].bullets[lang].map((bullet, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-montserrat text-sm md:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* La Clarté Bat le Nombre */}
      <CourseSection id="clarity">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[11].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[11].content[lang]}
        </p>
        {course.sections[11].bullets && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.sections[11].bullets[lang].map((bullet, i) => (
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

      {/* Philosophie de Guidage — Compass */}
      <CourseSection id="philosophy" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {course.sections[12].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {course.sections[12].content[lang]}
        </p>
        <HicksCompass />
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
          slug: jakobData.slug,
          title: jakobData.title[lang],
        }}
      />
    </>
  );
}
