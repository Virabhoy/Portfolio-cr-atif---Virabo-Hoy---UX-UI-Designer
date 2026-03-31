import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le One-Hand Pattern — Cours UX | Virabo Hoy",
  description:
    "75% des interactions mobiles se font à une main. Designer pour une seule main dans un monde en mouvement.",
  keywords: [
    "one-hand pattern",
    "mobile UX",
    "ergonomie",
    "interaction à une main",
    "design mobile",
    "accessibilité",
  ],
  openGraph: {
    title: "Le One-Hand Pattern — Cours UX | Virabo Hoy",
    description:
      "75% des interactions mobiles se font à une main. Designer pour une seule main dans un monde en mouvement.",
    type: "article",
  },
};

export default function OneHandCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
