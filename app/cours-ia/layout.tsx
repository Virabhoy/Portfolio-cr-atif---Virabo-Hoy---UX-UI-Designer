import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cours IA — Intelligence Artificielle | Virabo Hoy",
  description:
    "Cours complets sur l'intelligence artificielle : prompt engineering, agents IA, automatisation, g\u00e9n\u00e9ration d'images, RAG, MCP et plus. Par Virabo Hoy, UX/UI Designer.",
  keywords: [
    "Cours IA",
    "Intelligence Artificielle",
    "AI Courses",
    "Prompt Engineering",
    "Agents IA",
    "Claude Code",
    "MCP",
    "RAG",
    "Automatisation IA",
    "No-Code IA",
    "Virabo Hoy",
  ],
  openGraph: {
    title: "Cours IA — Intelligence Artificielle | Virabo Hoy",
    description:
      "Ma\u00eetrisez les outils et techniques de l'intelligence artificielle. Du prompt engineering aux agents autonomes, une s\u00e9rie de cours pratiques et illustr\u00e9s.",
    type: "website",
  },
};

export default function CoursIaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
