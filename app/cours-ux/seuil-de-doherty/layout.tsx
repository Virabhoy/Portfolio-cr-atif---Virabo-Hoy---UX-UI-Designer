import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Seuil de Doherty — Cours UX | Virabo Hoy",
  description:
    "Comprendre le seuil des 400ms, les mécanismes cérébraux de la latence et concevoir des interfaces qui semblent instantanées. Chapitre 5 du cours UX fondamentaux.",
  keywords: [
    "Doherty Threshold",
    "Seuil de Doherty",
    "UX performance",
    "latence",
    "perceived speed",
    "skeleton screen",
    "RAIL model",
    "UX design",
    "cours UX",
  ],
  openGraph: {
    title: "Le Seuil de Doherty : L'Anatomie d'une Milliseconde",
    description:
      "La neurobiologie de la vitesse perçue et l'illusion du temps réel. Chapitre 5 du cours UX fondamentaux.",
    type: "article",
  },
};

export default function DohertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
