import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Thumb Zone en 2026 — Cours UX | Virabo Hoy",
  description:
    "La carte de la thumb zone de 2013 est obsolète. Repenser l'ergonomie mobile pour les grands écrans de 2026.",
  keywords: [
    "thumb zone",
    "ergonomie mobile",
    "zone du pouce",
    "mobile UX",
    "grands écrans",
    "accessibilité mobile",
  ],
  openGraph: {
    title: "La Thumb Zone en 2026 — Cours UX | Virabo Hoy",
    description:
      "La carte de la thumb zone de 2013 est obsolète. Repenser l'ergonomie mobile pour les grands écrans de 2026.",
    type: "article",
  },
};

export default function ThumbZoneCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
