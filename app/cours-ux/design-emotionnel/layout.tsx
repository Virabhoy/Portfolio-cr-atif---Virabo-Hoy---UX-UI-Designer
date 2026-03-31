import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Design Émotionnel — Cours UX | Virabo Hoy",
  description:
    "Explorer les trois niveaux du design émotionnel pour créer des interfaces mémorables et attachantes.",
  keywords: [
    "design émotionnel",
    "Don Norman",
    "trois niveaux",
    "UX émotionnel",
    "expérience utilisateur",
    "attachement",
  ],
  openGraph: {
    title: "Le Design Émotionnel — Cours UX | Virabo Hoy",
    description:
      "Explorer les trois niveaux du design émotionnel pour créer des interfaces mémorables et attachantes.",
    type: "article",
  },
};

export default function EmotionalDesignCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
