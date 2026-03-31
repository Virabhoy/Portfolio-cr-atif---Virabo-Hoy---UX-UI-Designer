import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Art du Prompt Engineering — Cours IA | Virabo Hoy",
  description: "Maîtrisez les techniques de prompt engineering : structuration, few-shot, chain-of-thought, et bonnes pratiques pour obtenir des résultats optimaux avec les LLM.",
  keywords: ["prompt engineering", "prompting", "few-shot", "chain-of-thought", "LLM", "ChatGPT", "Claude", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "L'Art du Prompt Engineering — Cours IA | Virabo Hoy",
    description: "Maîtrisez les techniques de prompt engineering : structuration, few-shot, chain-of-thought, et bonnes pratiques pour obtenir des résultats optimaux avec les LLM.",
    type: "article",
  },
};

export default function IaPromptEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
