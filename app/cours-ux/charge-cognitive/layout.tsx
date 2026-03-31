import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Charge Cognitive — Cours UX | Virabo Hoy",
  description:
    "Comprendre les mécanismes de la charge cognitive pour concevoir des interfaces qui respectent les limites de la mémoire de travail.",
  keywords: [
    "charge cognitive",
    "mémoire de travail",
    "UX design",
    "psychologie cognitive",
    "surcharge informationnelle",
    "Miller",
  ],
  openGraph: {
    title: "La Charge Cognitive — Cours UX | Virabo Hoy",
    description:
      "Comprendre les mécanismes de la charge cognitive pour concevoir des interfaces qui respectent les limites de la mémoire de travail.",
    type: "article",
  },
};

export default function CognitiveLoadCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
