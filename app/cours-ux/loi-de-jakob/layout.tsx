import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Loi de Jakob — Cours UX | Virabo Hoy",
  description:
    "Les utilisateurs veulent des standards, pas de l'originalité gratuite. Comprendre la Loi de Jakob et l'équilibre entre conventions et innovation en UX Design.",
  keywords: [
    "Loi de Jakob",
    "Jakob's Law",
    "Jakob Nielsen",
    "UX Design",
    "conventions",
    "design disruptif",
    "modèles mentaux",
    "standards d'interface",
  ],
  openGraph: {
    title: "La Loi de Jakob — Cours UX | Virabo Hoy",
    description:
      "Naviguer entre la Loi de Jakob et le Design Disruptif. Maîtriser les standards et les innovations en UX.",
    type: "article",
  },
};

export default function JakobCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
