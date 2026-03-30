"use client";

import { useLanguage } from "@/lib/language-context";
import { zeigarnikData } from "@/lib/courses/zeigarnik-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import ZeigarnikLoop from "@/components/course/zeigarnik/ZeigarnikLoop";
import ZeigarnikToolbox from "@/components/course/zeigarnik/ZeigarnikToolbox";
import ZeigarnikEthics from "@/components/course/zeigarnik/ZeigarnikEthics";
import ZeigarnikDemo from "@/components/course/zeigarnik/ZeigarnikDemo";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import { dohertyData } from "@/lib/courses/doherty-data";

export default function ZeigarnikCoursePage() {
  const { language } = useLanguage();
  const course = zeigarnikData;
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

      {/* Hook */}
      <CourseSection id="hook">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[0].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[0].content[lang]}
        </p>
        {course.sections[0].highlight && (
          <div className="bg-[#0099FF] text-white rounded-2xl p-6 md:p-8">
            <p className="font-montserrat text-base md:text-lg font-medium leading-relaxed">
              {course.sections[0].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Origin — 1927 */}
      <CourseSection id="origin" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[1].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[1].content[lang]}
        </p>
        {course.sections[1].bullets && (
          <ul className="font-montserrat space-y-3">
            {course.sections[1].bullets[lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <span className="w-2 h-2 rounded-full bg-[#0099FF] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 bg-[#0099FF] text-white rounded-xl px-6 py-4">
          <p className="font-montserrat text-sm font-semibold">
            {lang === "fr"
              ? "La tâche inachevée monopolise la mémoire. Sa conclusion la libère."
              : "The unfinished task monopolizes memory. Its completion frees it."}
          </p>
        </div>
      </CourseSection>

      {/* Open Loop */}
      <CourseSection id="open-loop">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[2].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          {course.sections[2].content[lang]}
        </p>
        <ZeigarnikLoop />
        {course.sections[2].highlight && (
          <div className="mt-8 bg-[var(--muted)] border-l-4 border-[#0099FF] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[2].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Tipping Point */}
      <CourseSection id="tipping-point" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[3].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[3].content[lang]}
        </p>
        {course.sections[3].bullets && (
          <div className="space-y-3">
            {course.sections[3].bullets[lang].map((bullet, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border-l-4 ${
                  i === 0
                    ? "bg-[#E8F4FF] border-[#0099FF]"
                    : i === 1
                    ? "bg-[#FFF0F0] border-[#FF4444]"
                    : "bg-white border-[#0099FF]"
                }`}
              >
                <p className="font-montserrat text-sm md:text-base">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* UX Design */}
      <CourseSection id="ux-design">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[4].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[4].content[lang]}
        </p>
        {course.sections[4].highlight && (
          <div className="bg-[var(--muted)] border-l-4 border-[#0099FF] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {course.sections[4].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Toolbox */}
      <CourseSection id="toolbox" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {course.sections[5].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[5].content[lang]}
        </p>
        <ZeigarnikToolbox />
      </CourseSection>

      {/* Path vs Infinite Horizon */}
      <CourseSection id="path">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[6].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {course.sections[6].content[lang]}
        </p>
        {course.sections[6].bullets && (
          <ul className="font-montserrat space-y-3 mb-6">
            {course.sections[6].bullets[lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0099FF] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {course.sections[6].highlight && (
          <div className="bg-[#0099FF] text-white rounded-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base font-medium">
              {course.sections[6].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Interactive Demo */}
      <CourseSection id="demo" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
          {lang === "fr" ? "Ressentez la boucle ouverte" : "Feel the open loop"}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 text-center leading-relaxed">
          {lang === "fr"
            ? "Remplissez ce faux profil. Observez l'envie irrésistible de compléter à 100%."
            : "Fill in this fake profile. Notice the irresistible urge to reach 100%."}
        </p>
        <div className="max-w-md mx-auto">
          <ZeigarnikDemo />
        </div>
      </CourseSection>

      {/* Ethics */}
      <CourseSection id="ethics">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[7].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[7].content[lang]}
        </p>
        <ZeigarnikEthics />
      </CourseSection>

      {/* Creator Checklist */}
      <CourseSection id="checklist" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {course.sections[8].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[8].content[lang]}
        </p>
        {course.sections[8].bullets && (
          <div className="space-y-4">
            {course.sections[8].bullets[lang].map((bullet, i) => {
              const icons = ["👁", "⚖️", "✅"];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border border-[var(--border)]"
                >
                  <span className="text-2xl shrink-0">{icons[i]}</span>
                  <p className="font-montserrat text-sm md:text-base">{bullet}</p>
                </div>
              );
            })}
          </div>
        )}
      </CourseSection>

      {/* Conclusion */}
      <CourseSection id="conclusion">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {course.sections[9].title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {course.sections[9].content[lang]}
        </p>
        {course.sections[9].highlight && (
          <div className="bg-[#0099FF] text-white rounded-2xl p-8 md:p-10 text-center">
            <p className="font-bricolage text-xl md:text-3xl font-bold leading-snug">
              {course.sections[9].highlight[lang]}
            </p>
          </div>
        )}
      </CourseSection>

      <CourseSourcesList sources={course.sources} />

      <CourseNavFooter
        nextChapter={{
          slug: dohertyData.slug,
          title: dohertyData.title[lang],
        }}
      />
    </>
  );
}
