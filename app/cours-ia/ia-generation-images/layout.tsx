import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Génération d'Images par IA : Guide Complet — Cours IA | Virabo Hoy",
  description: "Maîtrisez la génération d'images par IA : Midjourney, DALL-E, Stable Diffusion. Techniques de prompting visuel, cas d'usage design et bonnes pratiques créatives.",
  keywords: ["génération images IA", "Midjourney", "DALL-E", "Stable Diffusion", "IA créative", "prompt engineering visuel", "design IA", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "Génération d'Images par IA : Guide Complet — Cours IA | Virabo Hoy",
    description: "Maîtrisez la génération d'images par IA : Midjourney, DALL-E, Stable Diffusion. Techniques de prompting visuel et bonnes pratiques créatives.",
    type: "article",
  },
};

export default function IaImageGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
