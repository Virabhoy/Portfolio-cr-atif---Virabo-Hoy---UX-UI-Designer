import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loi de Fitts — Cours UX | Virabo Hoy",
  description:
    "Comprendre et appliquer la Loi de Fitts en UX Design. De l'ergonomie des cockpits au design mobile moderne. Cours illustré avec demo interactive.",
  keywords: [
    "Loi de Fitts",
    "Fitts Law",
    "UX Design",
    "ergonomie",
    "interface design",
    "touch targets",
    "mobile UX",
    "thumb zone",
  ],
  openGraph: {
    title: "La Loi de Fitts — Cours UX | Virabo Hoy",
    description:
      "De l'ergonomie des cockpits au design UX mobile. Un cours complet sur la loi scientifique qui guide le design d'interfaces intuitives.",
    type: "article",
  },
};

export default function FittsCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
