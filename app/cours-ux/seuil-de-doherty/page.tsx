"use client";

import { useLanguage } from "@/lib/language-context";
import { dohertyData } from "@/lib/courses/doherty-data";
import { affordanceData } from "@/lib/courses/affordance-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import DohertyRAIL from "@/components/course/doherty/DohertyRAIL";
import DohertyFrustrationCycle from "@/components/course/doherty/DohertyFrustrationCycle";
import DohertySkeleton from "@/components/course/doherty/DohertySkeleton";
import DohertyDemo from "@/components/course/doherty/DohertyDemo";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";

export default function DohertyCoursePage() {
  const { language } = useLanguage();
  const course = dohertyData;
  const lang = language as "fr" | "en";

  const s = (id: string) => course.sections.find((sec) => sec.id === id)!;

  const tocSections = course.sections.map((sec) => ({
    id: sec.id,
    title: sec.title[lang],
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
          {s("hook").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("hook").content[lang]}
        </p>
        {s("hook").highlight && (
          <div className="bg-[#0099FF] text-white rounded-2xl p-6 md:p-8">
            <p className="font-montserrat text-base md:text-lg font-medium leading-relaxed">
              {s("hook").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* IBM 1982 */}
      <CourseSection id="ibm-1982" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("ibm-1982").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {s("ibm-1982").content[lang]}
        </p>
        {s("ibm-1982").bullets && (
          <div className="space-y-3">
            {s("ibm-1982").bullets![lang].map((bullet, i) => {
              const colors = ["#22C55E", "#F59E0B", "#F97316", "#EF4444"];
              const bgs = ["#F0FDF4", "#FFFBEB", "#FFF7ED", "#FEF2F2"];
              return (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ borderLeft: `4px solid ${colors[i]}`, backgroundColor: bgs[i] }}
                >
                  <p className="font-montserrat text-sm md:text-base">{bullet}</p>
                </div>
              );
            })}
          </div>
        )}
      </CourseSection>

      {/* Neuroscience */}
      <CourseSection id="neuroscience">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("neuroscience").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("neuroscience").content[lang]}
        </p>
        <DohertyFrustrationCycle />
        {s("neuroscience").highlight && (
          <div className="mt-8 bg-[var(--muted)] border-l-4 border-[#0099FF] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {s("neuroscience").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* RAIL */}
      <CourseSection id="rail" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("rail").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("rail").content[lang]}
        </p>
        <DohertyRAIL />
      </CourseSection>

      {/* Illusion de vitesse */}
      <CourseSection id="illusion">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("illusion").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("illusion").content[lang]}
        </p>
        {s("illusion").highlight && (
          <div className="bg-[var(--muted)] border-l-4 border-[#0099FF] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {s("illusion").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Spinners vs Squelettes */}
      <CourseSection id="skeletons" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("skeletons").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("skeletons").content[lang]}
        </p>
        <DohertySkeleton />
        {s("skeletons").bullets && (
          <ul className="font-montserrat space-y-3 mt-8">
            {s("skeletons").bullets![lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0099FF] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)] text-sm md:text-base">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </CourseSection>

      {/* Anatomie d'un squelette */}
      <CourseSection id="anatomy-skeleton">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("anatomy-skeleton").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("anatomy-skeleton").content[lang]}
        </p>
        {s("anatomy-skeleton").bullets && (
          <div className="space-y-4">
            {s("anatomy-skeleton").bullets![lang].map((bullet, i) => {
              const labels = [
                { fr: "Structure", en: "Structure", color: "#0099FF" },
                { fr: "Animation", en: "Animation", color: "#F59E0B" },
                { fr: "Résolution", en: "Resolution", color: "#22C55E" },
              ];
              const item = labels[i];
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 flex items-start gap-4 bg-white border border-[var(--border)] shadow-sm"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-montserrat text-xs font-bold mb-1" style={{ color: item.color }}>
                      {item[lang === "fr" ? "fr" : "en"]}
                    </p>
                    <p className="font-montserrat text-sm md:text-base">{bullet}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CourseSection>

      {/* Demo interactive */}
      <CourseSection id="demo" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
          {lang === "fr" ? "Ressentez le seuil" : "Feel the threshold"}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 text-center leading-relaxed">
          {lang === "fr"
            ? "Simulez différents temps de réponse. Observez comment votre perception change de chaque côté du seuil de 400ms."
            : "Simulate different response times. Notice how your perception changes on each side of the 400ms threshold."}
        </p>
        <div className="max-w-md mx-auto">
          <DohertyDemo />
        </div>
      </CourseSection>

      {/* Impact économique */}
      <CourseSection id="economic-impact">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("economic-impact").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("economic-impact").content[lang]}
        </p>
        {s("economic-impact").bullets && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {s("economic-impact").bullets![lang].map((bullet, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-[var(--border)] border-l-4 border-l-[#0099FF]"
              >
                <p className="font-montserrat text-sm md:text-base">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Checklist */}
      <CourseSection id="checklist" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {s("checklist").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("checklist").content[lang]}
        </p>
        {s("checklist").bullets && (
          <div className="space-y-4">
            {s("checklist").bullets![lang].map((bullet, i) => {
              const icons = ["⚡", "🦴", "🔮", "📊", "🎬"];
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
          {s("conclusion").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("conclusion").content[lang]}
        </p>
        {s("conclusion").highlight && (
          <div className="bg-[#0099FF] text-white rounded-2xl p-8 md:p-10 text-center">
            <p className="font-bricolage text-xl md:text-3xl font-bold leading-snug">
              {s("conclusion").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      <CourseSourcesList sources={course.sources} />

      <CourseNavFooter
        nextChapter={{
          slug: affordanceData.slug,
          title: affordanceData.title[lang],
        }}
      />
    </>
  );
}
