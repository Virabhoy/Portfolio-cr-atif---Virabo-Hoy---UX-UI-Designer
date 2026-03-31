import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vers une Culture Data & IA — Cours IA | Virabo Hoy",
  description: "Construire une culture data et IA en entreprise : data literacy, gouvernance des données, adoption de l'IA et transformation des organisations.",
  keywords: ["culture data", "data literacy", "gouvernance données", "adoption IA", "transformation digitale", "data-driven", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Vers une Culture Data & IA — Cours IA | Virabo Hoy",
    description: "Construire une culture data et IA en entreprise : data literacy, gouvernance des données et transformation des organisations.",
    type: "article",
  },
};

export default function IaDataCultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
