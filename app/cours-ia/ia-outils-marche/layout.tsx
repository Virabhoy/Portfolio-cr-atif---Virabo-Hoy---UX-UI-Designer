import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Outils IA sur le Marché en 2026 — Cours IA | Virabo Hoy",
  description: "Panorama complet des outils IA disponibles en 2026 : assistants de code, générateurs d'images, outils de productivité, et comparatif des principales solutions.",
  keywords: ["outils IA", "ChatGPT", "Claude", "Midjourney", "Copilot", "Cursor", "outils intelligence artificielle", "comparatif IA", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Les Outils IA sur le Marché en 2026 — Cours IA | Virabo Hoy",
    description: "Panorama complet des outils IA disponibles en 2026 : assistants de code, générateurs d'images, outils de productivité, et comparatif des principales solutions.",
    type: "article",
  },
};

export default function IaOutilsMarcheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
