import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction à l'IA Générative — Cours IA | Virabo Hoy",
  description: "Découvrez les fondamentaux de l'intelligence artificielle générative : histoire, fonctionnement des LLM, et impact sur les métiers du design et du développement.",
  keywords: ["IA générative", "intelligence artificielle", "LLM", "machine learning", "deep learning", "GPT", "Claude", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Introduction à l'IA Générative — Cours IA | Virabo Hoy",
    description: "Découvrez les fondamentaux de l'intelligence artificielle générative : histoire, fonctionnement des LLM, et impact sur les métiers du design et du développement.",
    type: "article",
  },
};

export default function IaIntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
