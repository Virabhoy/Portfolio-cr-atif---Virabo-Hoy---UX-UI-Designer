"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface CourseTableOfContentsProps {
  sections: Section[];
}

export default function CourseTableOfContents({
  sections,
}: CourseTableOfContentsProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-l-4 border-[#0099FF] pl-6 sm:pl-8">
        {/* Desktop title (always visible) */}
        <h2 className="hidden md:block font-bricolage text-xl font-bold text-gray-900 mb-4">
          {t("course.tableOfContents")}
        </h2>

        {/* Mobile toggle button */}
        <button
          type="button"
          className="flex md:hidden items-center justify-between w-full font-bricolage text-xl font-bold text-gray-900 mb-4"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span>{t("course.tableOfContents")}</span>
          <span className="ml-2 text-base">{isOpen ? "\u25B2" : "\u25BC"}</span>
        </button>

        {/* Section list: always visible on md+, toggled on mobile */}
        <nav
          className={cn(
            "flex flex-col gap-2",
            isOpen ? "block" : "hidden md:flex"
          )}
          aria-label={t("course.tableOfContents")}
        >
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className="group flex items-baseline gap-3 py-1.5 font-montserrat text-gray-600 transition-colors duration-200 hover:text-[#0099FF]"
            >
              <span className="text-sm font-semibold text-[#0099FF] opacity-60 group-hover:opacity-100 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base">{section.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
