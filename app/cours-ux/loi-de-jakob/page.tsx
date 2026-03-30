"use client";

import { useLanguage } from "@/lib/language-context";
import { jakobData } from "@/lib/courses/jakob-data";
import ReadingProgress from "@/components/course/ReadingProgress";
import CourseHero from "@/components/course/CourseHero";
import CourseTableOfContents from "@/components/course/CourseTableOfContents";
import CourseSection from "@/components/course/CourseSection";
import JakobBalance from "@/components/course/jakob/JakobBalance";
import JakobMentalModels from "@/components/course/jakob/JakobMentalModels";
import JakobSacredFree from "@/components/course/jakob/JakobSacredFree";
import JakobDisruption from "@/components/course/jakob/JakobDisruption";
import JakobConditions from "@/components/course/jakob/JakobConditions";
import JakobRuptureVsDisruption from "@/components/course/jakob/JakobRuptureVsDisruption";
import JakobVennMediator from "@/components/course/jakob/JakobVennMediator";
import JakobCompromise from "@/components/course/jakob/JakobCompromise";
import JakobGoldenRules from "@/components/course/jakob/JakobGoldenRules";
import JakobDemo from "@/components/course/jakob/JakobDemo";
import CourseSourcesList from "@/components/course/CourseSourcesList";
import CourseNavFooter from "@/components/course/CourseNavFooter";
import { zeigarnikData } from "@/lib/courses/zeigarnik-data";

export default function JakobCoursePage() {
  const { language } = useLanguage();
  const course = jakobData;
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

      {/* Hook — Équilibre Standard vs Innovation */}
      <CourseSection id="hook">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("hook").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("hook").content[lang]}
        </p>
        <JakobBalance />
      </CourseSection>

      {/* Stabilité — Citation Jakob Nielsen */}
      <CourseSection id="stability" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("stability").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {s("stability").content[lang]}
        </p>
        {s("stability").highlight && (
          <div className="bg-[var(--primary)] text-white rounded-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base font-medium">
              {s("stability").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Cerveau — Économie d'effort + Modèles Mentaux */}
      <CourseSection id="brain">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("brain").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
          {s("brain").content[lang]}
        </p>
        <JakobMentalModels />
        {s("brain").highlight && (
          <div className="mt-8 bg-[var(--muted)] border-l-4 border-[var(--primary)] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base italic">
              {s("brain").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Sacré vs Libre */}
      <CourseSection id="sacred-free" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {s("sacred-free").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {s("sacred-free").content[lang]}
        </p>
        <JakobSacredFree />
      </CourseSection>

      {/* Originalité Gratuite */}
      <CourseSection id="gratuitous">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("gratuitous").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {s("gratuitous").content[lang]}
        </p>
        {s("gratuitous").highlight && (
          <div className="bg-[var(--muted)] border-l-4 border-[#E8613C] rounded-r-xl p-5 md:p-6">
            <p className="font-montserrat text-sm md:text-base font-semibold">
              {s("gratuitous").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Design Disruptif — Valeur */}
      <CourseSection id="disruption-value" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("disruption-value").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          {s("disruption-value").content[lang]}
        </p>
        <JakobDisruption />
      </CourseSection>

      {/* Rupture vs Disruption — NEW */}
      <CourseSection id="rupture-vs-disruption">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {s("rupture-vs-disruption").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {s("rupture-vs-disruption").content[lang]}
        </p>
        <JakobRuptureVsDisruption />
      </CourseSection>

      {/* Demo Interactive */}
      <CourseSection id="demo" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {language === "fr"
            ? "Testez la Loi de Jakob"
            : "Test Jakob's Law"}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-8 text-center leading-relaxed">
          {language === "fr"
            ? "Les interfaces familières sont-elles vraiment plus rapides ? Vérifiez par vous-même."
            : "Are familiar interfaces really faster? See for yourself."}
        </p>
        <JakobDemo />
      </CourseSection>

      {/* Limites des deux modèles */}
      <CourseSection id="limits">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("limits").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {s("limits").content[lang]}
        </p>
        {s("limits").bullets && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {s("limits").bullets![lang].map((bullet, i) => (
              <div
                key={i}
                className="bg-[var(--muted)] rounded-xl p-5 shadow-sm border-l-4 border-[var(--primary)]"
              >
                <p className="font-montserrat text-sm md:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        )}
      </CourseSection>

      {/* Médiateur + Venn Diagram — NEW */}
      <CourseSection id="mediator" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {s("mediator").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {s("mediator").content[lang]}
        </p>
        <JakobVennMediator />
      </CourseSection>

      {/* Modèles Mentaux — Terrain de jeu */}
      <CourseSection id="mental-models">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("mental-models").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {s("mental-models").content[lang]}
        </p>
        {s("mental-models").bullets && (
          <ul className="font-montserrat space-y-3">
            {s("mental-models").bullets![lang].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2.5 shrink-0" />
                <span className="text-[var(--muted-foreground)]">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </CourseSection>

      {/* Quand casser les conventions — 3 conditions */}
      <CourseSection id="when-break" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {s("when-break").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          {s("when-break").content[lang]}
        </p>
        <JakobConditions />
      </CourseSection>

      {/* Le Bon Compromis — NEW */}
      <CourseSection id="compromise">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {s("compromise").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {s("compromise").content[lang]}
        </p>
        <JakobCompromise />
      </CourseSection>

      {/* Règles d'Or — NEW */}
      <CourseSection id="golden-rules" variant="muted">
        <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {s("golden-rules").title[lang]}
        </h2>
        <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-10 text-center leading-relaxed">
          {s("golden-rules").content[lang]}
        </p>
        <JakobGoldenRules />
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
          <div className="bg-[var(--primary)] text-white rounded-xl p-6 md:p-8">
            <p className="font-montserrat text-base md:text-lg font-medium leading-relaxed">
              {s("conclusion").highlight![lang]}
            </p>
          </div>
        )}
      </CourseSection>

      {/* Sources */}
      <CourseSourcesList sources={course.sources} />

      {/* Navigation Footer */}
      <CourseNavFooter
        nextChapter={{
          slug: zeigarnikData.slug,
          title: zeigarnikData.title[lang],
        }}
      />
    </>
  );
}
