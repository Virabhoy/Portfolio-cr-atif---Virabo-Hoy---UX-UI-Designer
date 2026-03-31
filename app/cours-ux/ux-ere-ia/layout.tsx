import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX a l'Ere de l'IA — Cours UX | Virabo Hoy",
  description:
    "Une analyse de la transformation du metier de designer UX par l'intelligence artificielle, et les competences critiques a developper.",
  keywords: [
    "UX design",
    "intelligence artificielle",
    "IA",
    "product design",
    "futur du design",
    "transformation digitale",
  ],
  openGraph: {
    title: "UX a l'Ere de l'IA — Cours UX | Virabo Hoy",
    description:
      "Une analyse de la transformation du metier de designer UX par l'intelligence artificielle, et les competences critiques a developper.",
    type: "article",
  },
};

export default function UxIaCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
