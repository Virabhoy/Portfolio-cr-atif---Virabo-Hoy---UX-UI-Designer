"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { fittsData } from "@/lib/courses/fitts-data";
import { hicksData } from "@/lib/courses/hicks-data";
import { jakobData } from "@/lib/courses/jakob-data";
import { zeigarnikData } from "@/lib/courses/zeigarnik-data";
import { dohertyData } from "@/lib/courses/doherty-data";

const courses = [fittsData, hicksData, jakobData, zeigarnikData, dohertyData];

export default function CoursUxSection() {
  const { language, t } = useLanguage();
  const lang = language as "fr" | "en";

  return (
    <section id="cours-ux" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("coursux.section.title")}
          </h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            {t("coursux.section.subtitle")}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/cours-ux/${course.slug}`}
              className="group block"
            >
              <article className="bg-[#F5F5F5] rounded-2xl border border-[var(--border)] p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-[#0099FF]">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-montserrat text-xs font-semibold bg-[#0099FF] text-white px-3 py-1 rounded-full">
                        {t("course.chapter")} {course.chapter}
                      </span>
                      <span className="font-montserrat text-xs text-[#888888]">
                        {course.readingTime} {t("course.readingTime")}
                      </span>
                    </div>
                    <h3 className="font-bricolage text-xl md:text-2xl font-bold mb-2 group-hover:text-[#0099FF] transition-colors">
                      {course.title[lang]}
                    </h3>
                    <p className="font-montserrat text-sm md:text-base text-[#888888] leading-relaxed">
                      {course.description[lang]}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-[#0099FF] group-hover:translate-x-1 transition-transform">
                      {language === "fr" ? "Lire le cours" : "Read the course"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/cours-ux"
            className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#0099FF] hover:underline"
          >
            {t("coursux.section.cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
