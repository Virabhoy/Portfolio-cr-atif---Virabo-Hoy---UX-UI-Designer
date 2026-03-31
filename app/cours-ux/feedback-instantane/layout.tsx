import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Feedback Instantané — Cours UX | Virabo Hoy",
  description:
    "Chaque action utilisateur doit avoir une réponse visible en moins de 100ms. Le feedback instantané est le fondement de toute bonne expérience.",
  keywords: [
    "feedback instantané",
    "micro-interactions",
    "temps de réponse",
    "UX design",
    "animation",
    "retour utilisateur",
  ],
  openGraph: {
    title: "Le Feedback Instantané — Cours UX | Virabo Hoy",
    description:
      "Chaque action utilisateur doit avoir une réponse visible en moins de 100ms. Le feedback instantané est le fondement de toute bonne expérience.",
    type: "article",
  },
};

export default function FeedbackCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
