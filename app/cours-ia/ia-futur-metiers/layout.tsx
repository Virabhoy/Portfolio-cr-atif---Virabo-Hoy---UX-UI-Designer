import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'IA et le Futur des Métiers Créatifs — Cours IA | Virabo Hoy",
  description: "Comment l'IA transforme les métiers créatifs : design, développement, rédaction. Compétences clés pour rester pertinent et tirer parti de l'IA dans sa carrière.",
  keywords: ["futur métiers IA", "métiers créatifs IA", "designer IA", "développeur IA", "compétences IA", "carrière IA", "transformation métiers", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "L'IA et le Futur des Métiers Créatifs — Cours IA | Virabo Hoy",
    description: "Comment l'IA transforme les métiers créatifs : compétences clés pour rester pertinent et tirer parti de l'IA dans sa carrière.",
    type: "article",
  },
};

export default function IaFuturMetiersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
