"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { fittsData } from "@/lib/courses/fitts-data";
import { hicksData } from "@/lib/courses/hicks-data";
import { jakobData } from "@/lib/courses/jakob-data";
import { zeigarnikData } from "@/lib/courses/zeigarnik-data";
import { dohertyData } from "@/lib/courses/doherty-data";

const courses = [fittsData, hicksData, jakobData, zeigarnikData, dohertyData];

export default function CoursUxPage() {
  const { language, t } = useLanguage();
  const lang = language as "fr" | "en";

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("course.listing.title")}
          </h1>
          <p className="font-montserrat text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {t("course.listing.subtitle")}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <p className="font-montserrat text-base md:text-lg text-[var(--muted-foreground)] mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            {t("course.listing.description")}
          </p>

          {/* Course Cards */}
          <div className="grid gap-6">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/cours-ux/${course.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl shadow-lg border border-[var(--border)] p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-l-4 border-l-[var(--primary)]">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-montserrat text-xs font-semibold bg-[var(--primary)] text-white px-3 py-1 rounded-full">
                          {t("course.chapter")} {course.chapter}
                        </span>
                        <span className="font-montserrat text-xs text-[var(--muted-foreground)]">
                          {course.readingTime} {t("course.readingTime")}
                        </span>
                      </div>
                      <h2 className="font-bricolage text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {course.title[lang]}
                      </h2>
                      <p className="font-montserrat text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
                        {course.description[lang]}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-[var(--primary)] group-hover:translate-x-1 transition-transform">
                        {language === "fr" ? "Lire le cours" : "Read the course"}
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
