import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loi de Hick — Cours UX | Virabo Hoy",
  description:
    "De la surcharge à la conversion : comprendre et appliquer la Loi de Hick en UX Design. Maîtriser le paradoxe du choix pour concevoir des interfaces qui guident la décision.",
  keywords: [
    "Loi de Hick",
    "Hick's Law",
    "UX Design",
    "paradoxe du choix",
    "surcharge cognitive",
    "conversion",
    "design d'interface",
  ],
  openGraph: {
    title: "La Loi de Hick — Cours UX | Virabo Hoy",
    description:
      "Maîtriser le paradoxe du choix en UX Design. Un cours complet sur la loi qui transforme la surcharge en conversion.",
    type: "article",
  },
};

export default function HicksCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
