import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Effet Zeigarnik — Cours UX | Virabo Hoy",
  description:
    "Le pouvoir de l'inachevé : comprendre et appliquer l'Effet Zeigarnik en UX Design. Barres de progression, checklists, profils incomplets — décrypter les mécaniques d'engagement éthique.",
  keywords: [
    "Effet Zeigarnik",
    "Zeigarnik Effect",
    "UX Design",
    "Boucle ouverte",
    "Barre de progression",
    "Design éthique",
    "Dark patterns",
    "Psychologie cognitive",
  ],
  openGraph: {
    title: "L'Effet Zeigarnik — Cours UX | Virabo Hoy",
    description:
      "Pourquoi votre cerveau déteste les tâches incomplètes et comment le design l'exploite.",
    type: "article",
  },
};

export default function ZeigarnikCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
