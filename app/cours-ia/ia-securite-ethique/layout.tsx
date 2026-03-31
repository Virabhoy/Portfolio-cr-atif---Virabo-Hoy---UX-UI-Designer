import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité & Éthique de l'IA — Cours IA | Virabo Hoy",
  description: "Comprendre les enjeux de sécurité et d'éthique de l'IA : biais algorithmiques, protection des données, régulation européenne (AI Act) et IA responsable.",
  keywords: ["sécurité IA", "éthique IA", "biais algorithmiques", "AI Act", "RGPD", "IA responsable", "protection données", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Sécurité & Éthique de l'IA — Cours IA | Virabo Hoy",
    description: "Comprendre les enjeux de sécurité et d'éthique de l'IA : biais algorithmiques, protection des données et régulation européenne.",
    type: "article",
  },
};

export default function IaSecuriteEthiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
