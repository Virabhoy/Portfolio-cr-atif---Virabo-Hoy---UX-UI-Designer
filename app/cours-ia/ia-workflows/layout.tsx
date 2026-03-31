import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflows IA Avancés — Cours IA | Virabo Hoy",
  description: "Construisez des workflows IA avancés : chaînage de prompts, automatisation multi-étapes, intégration d'outils, et pipelines de production pour projets complexes.",
  keywords: ["workflows IA", "automatisation", "chaînage de prompts", "pipelines IA", "intégration", "productivité IA", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Workflows IA Avancés — Cours IA | Virabo Hoy",
    description: "Construisez des workflows IA avancés : chaînage de prompts, automatisation multi-étapes, et pipelines de production pour projets complexes.",
    type: "article",
  },
};

export default function IaWorkflowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
