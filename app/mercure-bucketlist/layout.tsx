import type { Metadata } from "next";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mercure Bucket List — Discover Local",
  description:
    "Curated local experiences that reveal the soul of every destination. Taste, explore, and connect with Mercure hotels worldwide.",
  keywords: [
    "Mercure",
    "Bucket List",
    "Travel",
    "Local Experiences",
    "Accor",
    "Gastronomy",
    "Wine",
  ],
  openGraph: {
    title: "Mercure Bucket List — Discover Local",
    description:
      "Curated local experiences that reveal the soul of every destination.",
    type: "website",
  },
};

export default function MercureBucketListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${spectral.variable} bg-white`}>{children}</div>;
}
