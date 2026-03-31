import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA & No-Code : Créer Sans Coder — Cours IA | Virabo Hoy",
  description: "Découvrez comment l'IA transforme le no-code : créer des applications, automatiser des workflows et prototyper sans écrire une ligne de code avec l'IA.",
  keywords: ["IA no-code", "no-code IA", "Bubble", "FlutterFlow", "Bolt", "v0", "prototypage IA", "applications sans code", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "IA & No-Code : Créer Sans Coder — Cours IA | Virabo Hoy",
    description: "Découvrez comment l'IA transforme le no-code : créer des applications et prototyper sans écrire une ligne de code.",
    type: "article",
  },
};

export default function IaNoCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
