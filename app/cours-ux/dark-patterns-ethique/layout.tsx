import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark Patterns : L'Éthique du Designer — Cours UX | Virabo Hoy",
  description:
    "Identifier, comprendre et combattre les dark patterns pour pratiquer un design éthique qui respecte l'autonomie de l'utilisateur.",
  keywords: [
    "dark patterns",
    "éthique",
    "deceptive design",
    "manipulation",
    "UX éthique",
    "consentement",
    "RGPD",
  ],
  openGraph: {
    title: "Dark Patterns : L'Éthique du Designer — Cours UX | Virabo Hoy",
    description:
      "Identifier, comprendre et combattre les dark patterns pour pratiquer un design éthique qui respecte l'autonomie de l'utilisateur.",
    type: "article",
  },
};

export default function DarkPatternsCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
