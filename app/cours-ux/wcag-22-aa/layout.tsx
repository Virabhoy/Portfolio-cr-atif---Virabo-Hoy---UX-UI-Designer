import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 2.2 AA : L'Accessibilite N'est Pas une Option — Cours UX | Virabo Hoy",
  description:
    "Un guide expert des standards WCAG 2.2 AA, des nouvelles exigences legales europeennes, et la preuve que l'accessibilite est une competence de design.",
  keywords: [
    "WCAG",
    "accessibilité",
    "RGAA",
    "design inclusif",
    "handicap",
    "standards web",
  ],
  openGraph: {
    title: "WCAG 2.2 AA : L'Accessibilite N'est Pas une Option — Cours UX | Virabo Hoy",
    description:
      "Un guide expert des standards WCAG 2.2 AA, des nouvelles exigences legales europeennes, et la preuve que l'accessibilite est une competence de design.",
    type: "article",
  },
};

export default function WcagCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
