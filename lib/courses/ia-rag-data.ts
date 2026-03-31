export interface CourseSection {
  id: string;
  title: { fr: string; en: string };
  content: { fr: string; en: string };
  highlight?: { fr: string; en: string };
  bullets?: { fr: string[]; en: string[] };
}

export interface CourseSource {
  id: number;
  label: string;
  url?: string;
}

export interface CourseData {
  slug: string;
  chapter: number;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  readingTime: number;
  description: { fr: string; en: string };
  category: "ux" | "ia";
  sections: CourseSection[];
  sources: CourseSource[];
}

export const iaRagData: CourseData = {
  slug: "ia-rag",
  chapter: 28,
  title: {
    fr: "RAG : Donner de la Mémoire à l'IA",
    en: "RAG: Giving Memory to AI",
  },
  subtitle: {
    fr: "Retrieval Augmented Generation Démystifié",
    en: "Retrieval Augmented Generation Demystified",
  },
  readingTime: 18,
  description: {
    fr: "Comprendre le RAG (Retrieval Augmented Generation) — fonctionnement, embeddings, bases vectorielles, stratégies de chunking, construction d'un pipeline RAG, applications réelles, quand utiliser le RAG vs le fine-tuning.",
    en: "Understanding RAG (Retrieval Augmented Generation) — how it works, embeddings, vector databases, chunking strategies, building a RAG pipeline, real-world applications, when to use RAG vs fine-tuning.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Une IA qui connaît votre entreprise",
        en: "An AI that knows your company",
      },
      content: {
        fr: "Imaginez un assistant IA qui connaît chaque document interne de votre entreprise, chaque procédure, chaque décision passée — et qui peut répondre à n'importe quelle question en citant ses sources avec précision. Ce n'est pas un rêve de science-fiction, c'est exactement ce que permet le RAG (Retrieval Augmented Generation). Sans RAG, un LLM comme GPT-4 ou Claude ne connaît que ses données d'entraînement. Avec RAG, il accède à votre base de connaissances spécifique et produit des réponses contextualisées, sourcées et pertinentes. C'est la technologie qui transforme un chatbot générique en expert de votre domaine.",
        en: "Imagine an AI assistant that knows every internal document in your company, every procedure, every past decision — and can answer any question by citing its sources precisely. This isn't a science fiction dream, it's exactly what RAG (Retrieval Augmented Generation) enables. Without RAG, an LLM like GPT-4 or Claude only knows its training data. With RAG, it accesses your specific knowledge base and produces contextualized, sourced, and relevant answers. It's the technology that transforms a generic chatbot into an expert in your domain.",
      },
      highlight: {
        fr: "Le RAG résout le problème fondamental des LLMs : ils savent tout en général, mais rien sur votre entreprise en particulier.",
        en: "RAG solves the fundamental problem of LLMs: they know everything in general, but nothing about your company in particular.",
      },
    },
    {
      id: "what-is-rag",
      title: {
        fr: "Qu'est-ce que le RAG ?",
        en: "What is RAG?",
      },
      content: {
        fr: "Le RAG (Retrieval Augmented Generation) est une architecture qui enrichit les réponses d'un LLM en lui fournissant des informations pertinentes extraites d'une base de connaissances externe avant la génération de texte. Le concept est élégant dans sa simplicité : plutôt que de ré-entraîner un modèle (coûteux et complexe), on lui donne accès à des documents pertinents au moment de la requête. Le LLM utilise ces documents comme contexte pour formuler une réponse précise et sourcée. C'est comme donner à un expert accès à une bibliothèque spécialisée juste avant de répondre à votre question.",
        en: "RAG (Retrieval Augmented Generation) is an architecture that enriches an LLM's responses by providing it with relevant information extracted from an external knowledge base before text generation. The concept is elegant in its simplicity: rather than retraining a model (expensive and complex), you give it access to relevant documents at query time. The LLM uses these documents as context to formulate a precise and sourced answer. It's like giving an expert access to a specialized library just before answering your question.",
      },
      bullets: {
        fr: [
          "Retrieval : Recherche des documents pertinents dans une base de connaissances",
          "Augmented : Enrichissement du prompt avec les documents trouvés",
          "Generation : Production d'une réponse contextuelle par le LLM",
        ],
        en: [
          "Retrieval: Searching for relevant documents in a knowledge base",
          "Augmented: Enriching the prompt with found documents",
          "Generation: Producing a contextual response by the LLM",
        ],
      },
    },
    {
      id: "how-it-works",
      title: {
        fr: "Comment ça Marche : Embed, Retrieve, Generate",
        en: "How it Works: Embed, Retrieve, Generate",
      },
      content: {
        fr: "Le pipeline RAG fonctionne en trois étapes distinctes. Premièrement, l'indexation : vos documents sont découpés en chunks (morceaux), convertis en embeddings (représentations vectorielles) et stockés dans une base de données vectorielle. Deuxièmement, la recherche : quand un utilisateur pose une question, celle-ci est également convertie en embedding, et les chunks les plus similaires sémantiquement sont récupérés. Troisièmement, la génération : les chunks pertinents sont injectés dans le prompt du LLM comme contexte, et le modèle génère une réponse basée sur ces informations spécifiques. Ce processus se déroule en quelques secondes et produit des réponses d'une précision remarquable.",
        en: "The RAG pipeline works in three distinct steps. First, indexing: your documents are split into chunks, converted into embeddings (vector representations), and stored in a vector database. Second, retrieval: when a user asks a question, it's also converted into an embedding, and the most semantically similar chunks are retrieved. Third, generation: the relevant chunks are injected into the LLM's prompt as context, and the model generates a response based on this specific information. This process takes just seconds and produces remarkably precise answers.",
      },
      highlight: {
        fr: "Le RAG transforme la question 'que sait l'IA ?' en 'quelles informations l'IA peut-elle trouver dans vos données ?'",
        en: "RAG transforms the question 'what does AI know?' into 'what information can AI find in your data?'",
      },
    },
    {
      id: "embeddings",
      title: {
        fr: "Les Embeddings Expliqués",
        en: "Embeddings Explained",
      },
      content: {
        fr: "Les embeddings sont le cœur mathématique du RAG. Un embedding transforme un texte en un vecteur — une liste de nombres (typiquement 768 à 3072 dimensions) qui capture le sens sémantique du texte. Deux phrases ayant un sens similaire produiront des vecteurs proches dans cet espace multidimensionnel, même si elles utilisent des mots complètement différents. Par exemple, 'Le chat dort sur le canapé' et 'Le félin se repose sur le sofa' produiront des embeddings très proches. Cette propriété est fondamentale : elle permet de trouver des documents pertinents par similarité de sens, pas juste par correspondance de mots-clés.",
        en: "Embeddings are the mathematical heart of RAG. An embedding transforms text into a vector — a list of numbers (typically 768 to 3072 dimensions) that captures the semantic meaning of the text. Two sentences with similar meanings will produce nearby vectors in this multidimensional space, even if they use completely different words. For example, 'The cat sleeps on the couch' and 'The feline rests on the sofa' will produce very similar embeddings. This property is fundamental: it enables finding relevant documents by meaning similarity, not just keyword matching.",
      },
      bullets: {
        fr: [
          "text-embedding-3-large (OpenAI) : 3072 dimensions, le plus précis",
          "voyage-3 (Anthropic/Voyage AI) : Excellent pour les documents techniques",
          "BGE-M3 (BAAI) : Open source, multilingue, performant",
          "Cohere Embed v3 : Optimisé pour la recherche sémantique",
        ],
        en: [
          "text-embedding-3-large (OpenAI): 3072 dimensions, most precise",
          "voyage-3 (Anthropic/Voyage AI): Excellent for technical documents",
          "BGE-M3 (BAAI): Open source, multilingual, performant",
          "Cohere Embed v3: Optimized for semantic search",
        ],
      },
    },
    {
      id: "vector-databases",
      title: {
        fr: "Les Bases Vectorielles : Pinecone, Weaviate, Chroma",
        en: "Vector Databases: Pinecone, Weaviate, Chroma",
      },
      content: {
        fr: "Une base de données vectorielle est conçue spécifiquement pour stocker et rechercher des embeddings de manière efficace. Contrairement à une base SQL classique qui recherche par correspondance exacte, une base vectorielle effectue des recherches par similarité — elle trouve les vecteurs les plus proches de votre requête dans un espace à haute dimension. Pinecone est le leader managed, offrant une infrastructure serverless avec des performances exceptionnelles et une simplicité d'utilisation remarquable. Weaviate combine recherche vectorielle et recherche traditionnelle dans un framework open source puissant. Chroma est la solution minimaliste parfaite pour les prototypes et les applications de taille moyenne.",
        en: "A vector database is designed specifically to store and search embeddings efficiently. Unlike a classic SQL database that searches by exact match, a vector database performs similarity searches — it finds the vectors closest to your query in a high-dimensional space. Pinecone is the managed leader, offering serverless infrastructure with exceptional performance and remarkable ease of use. Weaviate combines vector search and traditional search in a powerful open-source framework. Chroma is the perfect minimalist solution for prototypes and medium-sized applications.",
      },
      bullets: {
        fr: [
          "Pinecone : Managed, serverless, le plus simple à intégrer — idéal pour la production",
          "Weaviate : Open source, hybrid search (vectoriel + keyword), très flexible",
          "Chroma : Léger, open source, parfait pour prototyper et les projets de taille moyenne",
          "Qdrant : Rust-based, performant, bon compromis open source / managed",
          "pgvector : Extension PostgreSQL — si vous utilisez déjà Postgres",
        ],
        en: [
          "Pinecone: Managed, serverless, simplest to integrate — ideal for production",
          "Weaviate: Open source, hybrid search (vector + keyword), very flexible",
          "Chroma: Lightweight, open source, perfect for prototyping and mid-size projects",
          "Qdrant: Rust-based, performant, good open source / managed compromise",
          "pgvector: PostgreSQL extension — if you already use Postgres",
        ],
      },
    },
    {
      id: "chunking",
      title: {
        fr: "Stratégies de Chunking : L'Art du Découpage",
        en: "Chunking Strategies: The Art of Splitting",
      },
      content: {
        fr: "Le chunking — la manière dont vous découpez vos documents en morceaux — est probablement le facteur le plus déterminant de la qualité d'un système RAG. Un chunk trop petit perd le contexte, un chunk trop grand dilue l'information pertinente. La stratégie optimale dépend du type de document et du cas d'usage. Pour des documents structurés (manuels, documentation), le découpage par section ou par paragraphe fonctionne bien. Pour du texte libre (emails, conversations), un découpage par fenêtre glissante avec chevauchement préserve mieux le contexte. La taille idéale se situe généralement entre 256 et 1024 tokens, avec un chevauchement de 10 à 20%.",
        en: "Chunking — how you split your documents into pieces — is probably the most determining factor in a RAG system's quality. A chunk too small loses context, a chunk too large dilutes relevant information. The optimal strategy depends on document type and use case. For structured documents (manuals, documentation), splitting by section or paragraph works well. For free text (emails, conversations), sliding window splitting with overlap better preserves context. The ideal size is generally between 256 and 1024 tokens, with 10 to 20% overlap.",
      },
      highlight: {
        fr: "80% des problèmes de qualité RAG viennent d'un mauvais chunking. C'est la première chose à optimiser avant de toucher au reste.",
        en: "80% of RAG quality issues come from poor chunking. It's the first thing to optimize before touching anything else.",
      },
      bullets: {
        fr: [
          "Chunking par taille fixe : Simple mais perd le contexte sémantique",
          "Chunking par paragraphe/section : Respecte la structure du document",
          "Chunking récursif : Découpe hiérarchique (titre → section → paragraphe)",
          "Chunking sémantique : Utilise un modèle pour détecter les ruptures de sens",
        ],
        en: [
          "Fixed-size chunking: Simple but loses semantic context",
          "Paragraph/section chunking: Respects document structure",
          "Recursive chunking: Hierarchical splitting (title → section → paragraph)",
          "Semantic chunking: Uses a model to detect meaning breaks",
        ],
      },
    },
    {
      id: "building-pipeline",
      title: {
        fr: "Construire un Pipeline RAG Étape par Étape",
        en: "Building a RAG Pipeline Step by Step",
      },
      content: {
        fr: "Construire un pipeline RAG fonctionnel requiert une approche méthodique. La première étape est la collecte et le nettoyage des données : rassemblez vos documents, supprimez le bruit (headers, footers, formatting), et normalisez le texte. Ensuite, choisissez votre stratégie de chunking et découpez les documents. Puis, générez les embeddings avec un modèle adapté et stockez-les dans votre base vectorielle. Configurez la chaîne de recherche : quand une question arrive, convertissez-la en embedding, recherchez les K chunks les plus pertinents (typiquement K=3 à 5), et construisez le prompt avec ces chunks comme contexte. Enfin, envoyez le prompt enrichi au LLM pour la génération.",
        en: "Building a functional RAG pipeline requires a methodical approach. The first step is data collection and cleaning: gather your documents, remove noise (headers, footers, formatting), and normalize text. Next, choose your chunking strategy and split the documents. Then, generate embeddings with a suitable model and store them in your vector database. Configure the retrieval chain: when a question arrives, convert it to an embedding, search for the K most relevant chunks (typically K=3 to 5), and build the prompt with these chunks as context. Finally, send the enriched prompt to the LLM for generation.",
      },
      bullets: {
        fr: [
          "Étape 1 : Collecter et nettoyer les documents sources",
          "Étape 2 : Chunker avec la stratégie adaptée au type de contenu",
          "Étape 3 : Générer les embeddings et les indexer dans la base vectorielle",
          "Étape 4 : Configurer la recherche sémantique (top-K, seuil de similarité)",
          "Étape 5 : Construire le prompt template avec injection de contexte",
          "Étape 6 : Tester, évaluer et itérer sur la qualité des réponses",
        ],
        en: [
          "Step 1: Collect and clean source documents",
          "Step 2: Chunk with strategy adapted to content type",
          "Step 3: Generate embeddings and index in vector database",
          "Step 4: Configure semantic search (top-K, similarity threshold)",
          "Step 5: Build prompt template with context injection",
          "Step 6: Test, evaluate, and iterate on response quality",
        ],
      },
    },
    {
      id: "advanced-rag",
      title: {
        fr: "RAG Avancé : Hybrid Search et Reranking",
        en: "Advanced RAG: Hybrid Search and Reranking",
      },
      content: {
        fr: "Le RAG basique fonctionne bien, mais les systèmes de production exigent des techniques plus sophistiquées. L'hybrid search combine la recherche vectorielle (sémantique) avec la recherche par mots-clés (BM25) pour capturer à la fois le sens et les termes exacts — crucial pour les noms propres, les codes produit ou les acronymes que la recherche sémantique seule peut manquer. Le reranking ajoute une étape de reclassement après la recherche initiale : un modèle cross-encoder évalue la pertinence de chaque chunk par rapport à la question, améliorant significativement la précision des résultats. Ces deux techniques combinées peuvent augmenter la qualité des réponses de 20 à 40%.",
        en: "Basic RAG works well, but production systems demand more sophisticated techniques. Hybrid search combines vector search (semantic) with keyword search (BM25) to capture both meaning and exact terms — crucial for proper nouns, product codes, or acronyms that semantic search alone might miss. Reranking adds a re-scoring step after the initial search: a cross-encoder model evaluates each chunk's relevance to the question, significantly improving result accuracy. These two techniques combined can increase response quality by 20 to 40%.",
      },
      bullets: {
        fr: [
          "Hybrid Search : Combine vectoriel (sens) + BM25 (mots-clés exacts)",
          "Reranking : Cross-encoder qui reclasse les résultats par pertinence",
          "Query expansion : Reformuler la question en plusieurs variantes pour élargir la recherche",
          "HyDE : Générer une réponse hypothétique et l'utiliser pour la recherche",
        ],
        en: [
          "Hybrid Search: Combines vector (meaning) + BM25 (exact keywords)",
          "Reranking: Cross-encoder that re-scores results by relevance",
          "Query expansion: Reformulate the question into multiple variants to broaden search",
          "HyDE: Generate a hypothetical answer and use it for retrieval",
        ],
      },
    },
    {
      id: "rag-vs-finetuning",
      title: {
        fr: "RAG vs Fine-Tuning : Quand Utiliser Quoi ?",
        en: "RAG vs Fine-Tuning: When to Use What?",
      },
      content: {
        fr: "La question revient constamment : faut-il utiliser le RAG ou le fine-tuning pour adapter un LLM à son domaine ? La réponse est nuancée mais claire dans la plupart des cas. Le RAG excelle quand vos données changent fréquemment, quand vous avez besoin de citer vos sources, et quand la précision factuelle est critique. Le fine-tuning est préférable quand vous voulez modifier le style ou le comportement du modèle, quand vos données sont stables, ou quand la latence est un enjeu majeur. En pratique, les meilleurs systèmes combinent les deux : un modèle fine-tuné sur le style de votre domaine, enrichi par du RAG pour les données factuelles à jour.",
        en: "The question comes up constantly: should you use RAG or fine-tuning to adapt an LLM to your domain? The answer is nuanced but clear in most cases. RAG excels when your data changes frequently, when you need to cite sources, and when factual accuracy is critical. Fine-tuning is preferable when you want to modify the model's style or behavior, when your data is stable, or when latency is a major concern. In practice, the best systems combine both: a model fine-tuned on your domain's style, enriched by RAG for up-to-date factual data.",
      },
      highlight: {
        fr: "Le RAG donne de nouvelles connaissances au modèle. Le fine-tuning change sa personnalité. Les deux sont complémentaires, pas concurrents.",
        en: "RAG gives the model new knowledge. Fine-tuning changes its personality. The two are complementary, not competing.",
      },
      bullets: {
        fr: [
          "RAG : Données dynamiques, traçabilité des sources, mise à jour sans ré-entraînement",
          "Fine-tuning : Style/ton spécifique, données stables, latence réduite",
          "Hybride : Fine-tuning pour le comportement + RAG pour les connaissances à jour",
        ],
        en: [
          "RAG: Dynamic data, source traceability, updates without retraining",
          "Fine-tuning: Specific style/tone, stable data, reduced latency",
          "Hybrid: Fine-tuning for behavior + RAG for up-to-date knowledge",
        ],
      },
    },
    {
      id: "applications",
      title: {
        fr: "Applications Réelles du RAG",
        en: "Real-World RAG Applications",
      },
      content: {
        fr: "Le RAG est déjà déployé massivement dans des cas d'usage très variés. Les chatbots de support client alimentés par RAG répondent aux questions en se basant sur la documentation produit, les FAQ et les tickets précédents — avec un taux de résolution au premier contact qui dépasse souvent les 60%. Les assistants juridiques utilisent le RAG pour parcourir des milliers de documents légaux et fournir des analyses contextualisées. Les systèmes de knowledge management d'entreprise permettent aux employés de trouver instantanément l'information pertinente dispersée dans des centaines de documents internes, Confluence, Notion ou Google Drive.",
        en: "RAG is already massively deployed across highly varied use cases. RAG-powered customer support chatbots answer questions based on product documentation, FAQs, and previous tickets — with a first-contact resolution rate often exceeding 60%. Legal assistants use RAG to browse thousands of legal documents and provide contextualized analyses. Enterprise knowledge management systems allow employees to instantly find relevant information scattered across hundreds of internal documents, Confluence, Notion, or Google Drive.",
      },
      bullets: {
        fr: [
          "Support client : Chatbot alimenté par la documentation et les tickets passés",
          "Juridique : Analyse de contrats, recherche de jurisprudence, conformité",
          "Knowledge management : Assistant interne connecté à toutes les bases documentaires",
          "RH : Réponses aux questions sur les politiques, avantages, procédures internes",
          "R&D : Exploration de la littérature scientifique et des brevets",
        ],
        en: [
          "Customer support: Chatbot powered by documentation and past tickets",
          "Legal: Contract analysis, case law research, compliance",
          "Knowledge management: Internal assistant connected to all document bases",
          "HR: Answers about policies, benefits, internal procedures",
          "R&D: Exploration of scientific literature and patents",
        ],
      },
    },
    {
      id: "pitfalls",
      title: {
        fr: "Pièges Courants et Comment les Éviter",
        en: "Common Pitfalls and How to Avoid Them",
      },
      content: {
        fr: "Les échecs RAG sont rarement spectaculaires mais souvent insidieux. Le piège le plus courant est le 'garbage in, garbage out' : si vos documents sources sont mal structurés, incomplets ou contradictoires, le système RAG amplifiera ces défauts. Le deuxième piège est le chunking inadapté qui découpe le contexte au mauvais endroit. Le troisième est la confiance aveugle dans les résultats sans évaluation systématique : un système RAG peut halluciner malgré le contexte fourni, surtout quand la question sort du périmètre des documents indexés. Enfin, négliger la mise à jour de l'index quand les documents sources changent crée un décalage dangereux entre la réalité et les réponses du système.",
        en: "RAG failures are rarely spectacular but often insidious. The most common pitfall is 'garbage in, garbage out': if your source documents are poorly structured, incomplete, or contradictory, the RAG system will amplify these flaws. The second pitfall is inappropriate chunking that splits context at the wrong place. The third is blind trust in results without systematic evaluation: a RAG system can hallucinate despite provided context, especially when the question falls outside the scope of indexed documents. Finally, neglecting to update the index when source documents change creates a dangerous gap between reality and the system's answers.",
      },
      bullets: {
        fr: [
          "Nettoyer les données sources avant l'indexation — la qualité est non-négociable",
          "Tester différentes stratégies de chunking et mesurer la qualité des réponses",
          "Implémenter une évaluation continue (RAGAS, DeepEval) pour détecter les dérives",
          "Mettre en place un pipeline de mise à jour automatique de l'index",
          "Toujours inclure un mécanisme de feedback utilisateur",
        ],
        en: [
          "Clean source data before indexing — quality is non-negotiable",
          "Test different chunking strategies and measure response quality",
          "Implement continuous evaluation (RAGAS, DeepEval) to detect drift",
          "Set up an automatic index update pipeline",
          "Always include a user feedback mechanism",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : Le RAG, Fondation de l'IA d'Entreprise",
        en: "Conclusion: RAG, the Foundation of Enterprise AI",
      },
      content: {
        fr: "Le RAG n'est pas une simple technique — c'est la fondation sur laquelle repose l'IA d'entreprise moderne. Il résout le problème fondamental de la personnalisation des LLMs sans les coûts et la complexité du fine-tuning. Pour tout professionnel travaillant avec l'IA, comprendre le RAG est devenu aussi essentiel que comprendre les bases de données l'était il y a vingt ans. La technologie continue d'évoluer rapidement : agentic RAG, graph RAG, multi-modal RAG ouvrent de nouvelles possibilités chaque mois. Maîtriser les fondamentaux aujourd'hui, c'est être prêt pour les innovations de demain.",
        en: "RAG isn't just a technique — it's the foundation upon which modern enterprise AI rests. It solves the fundamental problem of LLM personalization without the costs and complexity of fine-tuning. For any professional working with AI, understanding RAG has become as essential as understanding databases was twenty years ago. The technology continues to evolve rapidly: agentic RAG, graph RAG, multi-modal RAG open new possibilities every month. Mastering the fundamentals today means being ready for tomorrow's innovations.",
      },
      highlight: {
        fr: "Le RAG est à l'IA d'entreprise ce que SQL est aux bases de données : un fondamental que tout professionnel tech doit comprendre.",
        en: "RAG is to enterprise AI what SQL is to databases: a fundamental that every tech professional must understand.",
      },
    },
  ],
  sources: [
    { id: 1, label: "Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (2020)", url: "https://arxiv.org/abs/2005.11401" },
    { id: 2, label: "Pinecone — RAG Documentation", url: "https://docs.pinecone.io/guides/get-started/rag" },
    { id: 3, label: "Weaviate — Vector Database Documentation", url: "https://weaviate.io/developers/weaviate" },
    { id: 4, label: "ChromaDB — Documentation", url: "https://docs.trychroma.com" },
    { id: 5, label: "LangChain — RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" },
    { id: 6, label: "OpenAI — Embeddings Guide", url: "https://platform.openai.com/docs/guides/embeddings" },
    { id: 7, label: "RAGAS — RAG Evaluation Framework", url: "https://docs.ragas.io" },
    { id: 8, label: "Anthropic — RAG Best Practices", url: "https://docs.anthropic.com" },
  ],
};
