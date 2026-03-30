"use client";

import { useLanguage } from "@/lib/language-context";

interface CourseHeroProps {
  title: string;
  subtitle: string;
  chapter: number;
  readingTime: number;
}

export default function CourseHero({
  title,
  subtitle,
  chapter,
  readingTime,
}: CourseHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0099FF] text-white overflow-hidden pt-32 pb-20">
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: "white", filter: "blur(60px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "white", filter: "blur(50px)" }}
        aria-hidden="true"
      />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        {/* Chapter badge */}
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-montserrat font-medium bg-white/20 backdrop-blur-sm mb-6">
          {t("course.chapter")} {chapter}
        </span>

        {/* Title */}
        <h1 className="font-bricolage text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-montserrat text-lg md:text-xl opacity-90 max-w-2xl mb-8">
          {subtitle}
        </p>

        {/* Reading time badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-sm font-montserrat">
          {/* Clock icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="8"
              y1="4"
              x2="8"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="8"
              x2="11"
              y2="10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>
            {readingTime} {t("course.readingTime")}
          </span>
        </div>
      </div>
    </section>
  );
}
