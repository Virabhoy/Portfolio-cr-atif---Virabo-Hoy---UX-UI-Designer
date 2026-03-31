import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatisation IA : n8n, Make & Zapier — Cours IA | Virabo Hoy",
  description: "Maîtrisez l'automatisation IA avec n8n, Make et Zapier : créer des workflows intelligents, connecter des APIs et automatiser des tâches répétitives grâce à l'IA.",
  keywords: ["automatisation IA", "n8n", "Make", "Zapier", "workflows IA", "automatisation tâches", "APIs IA", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Automatisation IA : n8n, Make & Zapier — Cours IA | Virabo Hoy",
    description: "Maîtrisez l'automatisation IA avec n8n, Make et Zapier : workflows intelligents et automatisation des tâches répétitives.",
    type: "article",
  },
};

export default function IaAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
