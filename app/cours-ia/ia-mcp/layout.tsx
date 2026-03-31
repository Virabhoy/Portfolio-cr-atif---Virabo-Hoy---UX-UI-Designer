import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP : Connecter l'IA à Votre Stack — Cours IA | Virabo Hoy",
  description: "Apprenez le Model Context Protocol (MCP) : architecture client-serveur, création de serveurs MCP, intégration avec Claude Code, et connexion à vos outils existants.",
  keywords: ["MCP", "Model Context Protocol", "Anthropic", "serveur MCP", "intégration IA", "Claude Code", "API", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "MCP : Connecter l'IA à Votre Stack — Cours IA | Virabo Hoy",
    description: "Apprenez le Model Context Protocol (MCP) : architecture client-serveur, création de serveurs MCP, et connexion à vos outils existants.",
    type: "article",
  },
};

export default function IaMcpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
