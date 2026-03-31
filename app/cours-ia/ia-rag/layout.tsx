import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG : Donner de la Mémoire à l'IA — Cours IA | Virabo Hoy",
  description: "Comprendre le RAG (Retrieval-Augmented Generation) : comment enrichir les LLM avec vos données, embeddings, bases vectorielles et architectures RAG.",
  keywords: ["RAG", "Retrieval-Augmented Generation", "embeddings", "base vectorielle", "LLM mémoire", "Pinecone", "ChromaDB", "cours IA", "Virabo Hoy"],
  openGraph: {
    title: "RAG : Donner de la Mémoire à l'IA — Cours IA | Virabo Hoy",
    description: "Comprendre le RAG (Retrieval-Augmented Generation) : enrichir les LLM avec vos données grâce aux embeddings et bases vectorielles.",
    type: "article",
  },
};

export default function IaRagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
