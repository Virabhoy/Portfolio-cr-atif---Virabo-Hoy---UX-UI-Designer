import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code : Le Setup de l'Expert — Cours IA | Virabo Hoy",
  description: "Guide complet pour maîtriser Claude Code : installation, configuration avancée, CLAUDE.md, commandes slash, et workflows professionnels pour développeurs et designers.",
  keywords: ["Claude Code", "Anthropic", "CLI", "assistant de code", "CLAUDE.md", "setup développeur", "IA développement", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Claude Code : Le Setup de l'Expert — Cours IA | Virabo Hoy",
    description: "Guide complet pour maîtriser Claude Code : installation, configuration avancée, CLAUDE.md, commandes slash, et workflows professionnels.",
    type: "article",
  },
};

export default function IaClaudeCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
