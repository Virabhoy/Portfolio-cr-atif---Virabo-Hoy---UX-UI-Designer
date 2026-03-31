import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systèmes Agentiques — Cours IA | Virabo Hoy",
  description: "Explorez les systèmes agentiques : agents autonomes, orchestration multi-agents, boucles de raisonnement, et applications concrètes en entreprise.",
  keywords: ["agents IA", "systèmes agentiques", "multi-agents", "autonomie IA", "orchestration", "raisonnement", "Claude", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Systèmes Agentiques — Cours IA | Virabo Hoy",
    description: "Explorez les systèmes agentiques : agents autonomes, orchestration multi-agents, boucles de raisonnement, et applications concrètes en entreprise.",
    type: "article",
  },
};

export default function IaAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
