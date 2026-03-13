import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virabo Hoy | Product Builder Digital & UX/UI Designer",
  description:
    "Je conçois des interfaces qui ne cherchent pas à impressionner, mais à être vraiment efficaces. Portfolio de Virabo Hoy - UX/UI Designer & Product Builder basé à Paris.",
  keywords: [
    "UX Design",
    "UI Design",
    "Product Builder",
    "Web Design",
    "Paris",
    "Freelance",
  ],
  authors: [{ name: "Virabo Hoy" }],
  openGraph: {
    title: "Virabo Hoy | Product Builder Digital & UX/UI Designer",
    description:
      "Je conçois des interfaces qui ne cherchent pas à impressionner, mais à être vraiment efficaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={bricolage.variable}>
      <body className="font-bricolage antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
