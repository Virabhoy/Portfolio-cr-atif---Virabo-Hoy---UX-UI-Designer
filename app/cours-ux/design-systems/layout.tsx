import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Design Systems — Cours UX | Virabo Hoy",
  description:
    "Comprendre ce qui distingue un vrai design system d'une simple bibliothèque de composants, et comment construire un système vivant.",
  keywords: [
    "design system",
    "composants",
    "tokens",
    "Figma",
    "cohérence",
    "scalabilité",
    "atomic design",
  ],
  openGraph: {
    title: "Les Design Systems — Cours UX | Virabo Hoy",
    description:
      "Comprendre ce qui distingue un vrai design system d'une simple bibliothèque de composants, et comment construire un système vivant.",
    type: "article",
  },
};

export default function DesignSystemsCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
