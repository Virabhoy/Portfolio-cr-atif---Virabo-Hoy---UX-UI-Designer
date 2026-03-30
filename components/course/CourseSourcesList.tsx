"use client";

import { useLanguage } from "@/lib/language-context";
import type { CourseSource } from "@/lib/courses/fitts-data";

interface CourseSourcesListProps {
  sources: CourseSource[];
}

export default function CourseSourcesList({ sources }: CourseSourcesListProps) {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom max-w-4xl mx-auto">
        <h2 className="font-bricolage text-2xl md:text-3xl font-bold mb-8">
          {t("course.sources")}
        </h2>
        <ol className="space-y-4 font-montserrat text-sm md:text-base text-[var(--muted-foreground)]">
          {sources.map((source) => (
            <li key={source.id} className="flex gap-3">
              <span className="font-bold text-[var(--foreground)] shrink-0">
                [{source.id}]
              </span>
              <span>
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors underline underline-offset-2"
                  >
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
