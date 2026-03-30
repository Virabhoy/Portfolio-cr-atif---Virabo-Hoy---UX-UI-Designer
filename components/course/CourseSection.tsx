"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CourseSectionProps {
  id: string;
  children: ReactNode;
  variant?: "white" | "muted";
  className?: string;
}

export default function CourseSection({
  id,
  children,
  variant = "white",
  className,
}: CourseSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        variant === "muted" ? "bg-[var(--muted)]" : "bg-white",
        className
      )}
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="container-custom max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
