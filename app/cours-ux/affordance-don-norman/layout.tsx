import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Affordance selon Don Norman — Cours UX | Virabo Hoy",
  description:
    "Comprendre la distinction cruciale entre affordance et signifiant, et pourquoi la plupart des designers confondent les deux au detriment de leurs utilisateurs.",
  keywords: [
    "affordance",
    "Don Norman",
    "signifiant",
    "UX Design",
    "design d'interaction",
    "utilisabilité",
  ],
  openGraph: {
    title: "L'Affordance selon Don Norman — Cours UX | Virabo Hoy",
    description:
      "Comprendre la distinction entre affordance et signifiant en UX Design.",
    type: "article",
  },
};

export default function AffordanceCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
