"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

interface CourseNavFooterProps {
  nextChapter?: {
    slug: string;
    title: string;
  };
  basePath?: string;
}

export default function CourseNavFooter({ nextChapter, basePath = "/cours-ux" }: CourseNavFooterProps) {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={basePath}
            className="font-montserrat text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("course.backToCourses")}
          </Link>
          {nextChapter ? (
            <Link
              href={`${basePath}/${nextChapter.slug}`}
              className="font-montserrat text-sm font-medium text-[var(--primary)] bg-[var(--muted)] px-4 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors flex items-center gap-2"
            >
              {t("course.nextChapter")} — {nextChapter.title}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <span className="font-montserrat text-sm text-[var(--muted-foreground)] bg-[var(--muted)] px-4 py-2 rounded-full">
              {t("course.nextChapter")} — {t("course.comingSoon")}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
