"use client";

import Link from "next/link";
import { ArrowRight, Palette, Brain } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { fittsData } from "@/lib/courses/fitts-data";
import { hicksData } from "@/lib/courses/hicks-data";
import { jakobData } from "@/lib/courses/jakob-data";
import { iaIntroductionData } from "@/lib/courses/ia-introduction-data";
import { iaClaudeCodeData } from "@/lib/courses/ia-claude-code-data";
import { iaMcpData } from "@/lib/courses/ia-mcp-data";

const uxPreview = [fittsData, hicksData, jakobData];
const iaPreview = [iaIntroductionData, iaClaudeCodeData, iaMcpData];

export default function CoursUxSection() {
  const { language, t } = useLanguage();
  const lang = language as "fr" | "en";

  return (
    <section id="cours" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4">
            {t("coursux.section.title")}
          </h2>
          <p className="font-montserrat text-lg text-[#888888] max-w-2xl mx-auto">
            {t("coursux.section.subtitle")}
          </p>
        </div>

        {/* Two Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* UX Design Category */}
          <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="bg-gradient-to-r from-[#0099FF] to-[#0066CC] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Palette className="w-6 h-6 text-white" />
                <span className="font-montserrat text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                  15 {t("course.courses")}
                </span>
              </div>
              <h3 className="font-bricolage text-2xl md:text-3xl font-bold text-white mb-1">
                {t("coursux.section.ux.label")}
              </h3>
              <p className="font-montserrat text-sm text-white/80">
                {t("coursux.section.ux.desc")}
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 space-y-3">
              {uxPreview.map((course) => (
                <Link
                  key={course.slug}
                  href={`/cours-ux/${course.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F5F5] transition-colors group/item"
                >
                  <span className="font-montserrat text-[10px] font-bold bg-[#0099FF] text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                    {course.chapter}
                  </span>
                  <span className="font-montserrat text-sm font-medium flex-1 group-hover/item:text-[#0099FF] transition-colors">
                    {course.title[lang]}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888] group-hover/item:text-[#0099FF] transition-colors" />
                </Link>
              ))}
              <Link
                href="/cours-ux"
                className="flex items-center justify-center gap-2 font-montserrat text-sm font-semibold text-[#0099FF] hover:underline pt-2"
              >
                {language === "fr" ? "Voir les 15 cours UX" : "See all 15 UX courses"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* IA Category */}
          <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-white" />
                <span className="font-montserrat text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                  15 {t("course.courses")}
                </span>
              </div>
              <h3 className="font-bricolage text-2xl md:text-3xl font-bold text-white mb-1">
                {t("coursux.section.ia.label")}
              </h3>
              <p className="font-montserrat text-sm text-white/80">
                {t("coursux.section.ia.desc")}
              </p>
            </div>
            <div className="bg-white p-5 md:p-6 space-y-3">
              {iaPreview.map((course) => (
                <Link
                  key={course.slug}
                  href={`/cours-ia/${course.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F5F5] transition-colors group/item"
                >
                  <span className="font-montserrat text-[10px] font-bold bg-[#7C3AED] text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                    {course.chapter}
                  </span>
                  <span className="font-montserrat text-sm font-medium flex-1 group-hover/item:text-[#7C3AED] transition-colors">
                    {course.title[lang]}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888] group-hover/item:text-[#7C3AED] transition-colors" />
                </Link>
              ))}
              <Link
                href="/cours-ia"
                className="flex items-center justify-center gap-2 font-montserrat text-sm font-semibold text-[#7C3AED] hover:underline pt-2"
              >
                {language === "fr" ? "Voir les 15 cours IA" : "See all 15 AI courses"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
