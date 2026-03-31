import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Assistants Code IA : Comparatif 2026 — Cours IA | Virabo Hoy",
  description: "Comparatif des assistants code IA en 2026 : GitHub Copilot, Claude Code, Cursor, Windsurf. Productivité développeur, pair programming IA et bonnes pratiques.",
  keywords: ["assistants code IA", "GitHub Copilot", "Claude Code", "Cursor", "Windsurf", "pair programming IA", "productivité développeur", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Les Assistants Code IA : Comparatif 2026 — Cours IA | Virabo Hoy",
    description: "Comparatif des assistants code IA en 2026 : GitHub Copilot, Claude Code, Cursor, Windsurf. Productivité et pair programming IA.",
    type: "article",
  },
};

export default function IaCodingAssistantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
