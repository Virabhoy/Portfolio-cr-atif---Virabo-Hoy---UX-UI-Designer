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

export const iaWorkflowsData: CourseData = {
  slug: "ia-workflows",
  chapter: 22,
  title: {
    fr: "Workflows IA Avancés & Productivité",
    en: "Advanced AI Workflows & Productivity",
  },
  subtitle: {
    fr: "Automatiser l'Intelligence pour Gagner 10x",
    en: "Automating Intelligence to Gain 10x",
  },
  readingTime: 16,
  description: {
    fr: "Workflows IA avancés pour la productivité — enchaînement de prompts, construction de pipelines avec n8n/Make/Zapier, RAG (Retrieval Augmented Generation), traitement de documents, automatisation d'emails, pipelines de génération de contenu.",
    en: "Advanced AI workflows for productivity — chaining prompts, building pipelines with n8n/Make/Zapier, RAG (Retrieval Augmented Generation), document processing, email automation, content generation pipelines.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Manuel vs automatisé : le gouffre de productivité",
        en: "Manual vs automated: the productivity gap",
      },
      content: {
        fr: "Chaque jour, des millions de professionnels utilisent ChatGPT de la même façon : un prompt, une réponse, copier-coller dans un autre outil, reformater, envoyer. Ce processus artisanal gaspille un temps considérable. Les workflows IA automatisés éliminent ces frictions en connectant les modèles de langage directement à vos outils de travail. Au lieu de 20 minutes pour rédiger, formater et envoyer un rapport, un workflow IA le fait en 30 secondes. Ce n'est pas un gain marginal — c'est un changement d'ordre de grandeur dans votre productivité.",
        en: "Every day, millions of professionals use ChatGPT the same way: one prompt, one response, copy-paste into another tool, reformat, send. This artisanal process wastes considerable time. Automated AI workflows eliminate this friction by connecting language models directly to your work tools. Instead of 20 minutes to draft, format, and send a report, an AI workflow does it in 30 seconds. This is not a marginal gain — it's an order-of-magnitude change in your productivity.",
      },
      highlight: {
        fr: "La différence entre utiliser l'IA manuellement et l'intégrer dans des workflows automatisés, c'est la différence entre taper une lettre à la machine et envoyer un email. Le résultat est similaire, mais l'échelle change tout.",
        en: "The difference between using AI manually and integrating it into automated workflows is the difference between typing a letter on a typewriter and sending an email. The result is similar, but scale changes everything.",
      },
    },
    {
      id: "what-is-workflow",
      title: {
        fr: "Qu'est-ce qu'un workflow IA ?",
        en: "What is an AI workflow?",
      },
      content: {
        fr: "Un workflow IA est une séquence d'étapes automatisées où au moins une étape implique un modèle d'intelligence artificielle. Contrairement à un simple prompt envoyé à ChatGPT, un workflow connecte le LLM à des sources de données, des outils de transformation, et des canaux de sortie. Le déclencheur peut être un email reçu, un fichier déposé dans un dossier, un webhook, ou un horaire programmé. Chaque étape transforme les données : extraction, analyse par IA, enrichissement, mise en forme, et distribution. Le tout sans intervention humaine, ou avec une validation minimale aux points critiques.",
        en: "An AI workflow is an automated sequence of steps where at least one step involves an artificial intelligence model. Unlike a simple prompt sent to ChatGPT, a workflow connects the LLM to data sources, transformation tools, and output channels. The trigger can be a received email, a file dropped in a folder, a webhook, or a scheduled time. Each step transforms data: extraction, AI analysis, enrichment, formatting, and distribution. All without human intervention, or with minimal validation at critical points.",
      },
      bullets: {
        fr: [
          "Déclencheur : l'événement qui lance le workflow (email, webhook, horaire, action manuelle)",
          "Étapes de traitement : extraction, nettoyage, transformation des données",
          "Étape IA : appel au LLM pour analyse, rédaction, classification ou décision",
          "Sortie : action finale (envoi d'email, mise à jour base de données, notification Slack)",
        ],
        en: [
          "Trigger: the event that launches the workflow (email, webhook, schedule, manual action)",
          "Processing steps: extraction, cleaning, data transformation",
          "AI step: LLM call for analysis, writing, classification or decision",
          "Output: final action (email send, database update, Slack notification)",
        ],
      },
    },
    {
      id: "simple-chains",
      title: {
        fr: "Chaînes de prompts : le workflow IA le plus simple",
        en: "Prompt chains: the simplest AI workflow",
      },
      content: {
        fr: "La forme la plus élémentaire de workflow IA est la chaîne de prompts : la sortie d'un prompt devient l'entrée du suivant. Au lieu de demander à un LLM de \"rédiger un article de blog optimisé SEO sur le design system\", vous décomposez en étapes : d'abord générer un plan avec les mots-clés, puis rédiger chaque section individuellement, puis optimiser les titres, puis générer la meta-description. Chaque étape produit un résultat plus ciblé et de meilleure qualité qu'un prompt monolithique. Cette approche \"divide and conquer\" est le fondement de tous les workflows IA plus complexes, et elle fonctionne avec n'importe quel LLM via une simple boucle de code.",
        en: "The most basic form of AI workflow is prompt chaining: the output of one prompt becomes the input of the next. Instead of asking an LLM to \"write an SEO-optimized blog post about design systems,\" you break it into steps: first generate an outline with keywords, then write each section individually, then optimize headings, then generate the meta-description. Each step produces a more targeted, higher-quality result than a monolithic prompt. This \"divide and conquer\" approach is the foundation of all more complex AI workflows, and it works with any LLM via a simple code loop.",
      },
      highlight: {
        fr: "Un prompt unique qui demande tout produit un résultat moyen. Cinq prompts enchaînés, chacun spécialisé, produisent un résultat professionnel. C'est la même logique qu'un processus éditorial avec plusieurs passes de révision.",
        en: "A single prompt that asks for everything produces an average result. Five chained prompts, each specialized, produce a professional result. It's the same logic as an editorial process with multiple revision passes.",
      },
    },
    {
      id: "pipelines",
      title: {
        fr: "Pipelines complexes avec n8n, Make et Zapier",
        en: "Complex pipelines with n8n, Make, and Zapier",
      },
      content: {
        fr: "Pour les workflows qui dépassent le simple enchaînement de prompts, les plateformes d'automatisation visuelles sont devenues incontournables. n8n (open source, auto-hébergeable) offre la plus grande flexibilité avec son éditeur visuel de nœuds et ses 400+ connecteurs. Make (anciennement Integromat) excelle par sa gestion des flux de données complexes et ses scénarios visuels intuitifs. Zapier, le plus accessible, propose une approche linéaire \"quand X arrive, fais Y\" avec une intégration native d'OpenAI. Ces outils permettent de construire des pipelines IA sans écrire une ligne de code : connectez un trigger Gmail, ajoutez un nœud OpenAI pour analyser le contenu, puis un nœud Notion pour stocker le résultat.",
        en: "For workflows that go beyond simple prompt chaining, visual automation platforms have become essential. n8n (open source, self-hostable) offers the greatest flexibility with its visual node editor and 400+ connectors. Make (formerly Integromat) excels at complex data flow management and intuitive visual scenarios. Zapier, the most accessible, offers a linear \"when X happens, do Y\" approach with native OpenAI integration. These tools let you build AI pipelines without writing a single line of code: connect a Gmail trigger, add an OpenAI node to analyze the content, then a Notion node to store the result.",
      },
      bullets: {
        fr: [
          "n8n : open source, auto-hébergeable, idéal pour les données sensibles (RGPD), communauté active",
          "Make : interface visuelle élégante, excellente gestion des erreurs, bon rapport qualité-prix",
          "Zapier : le plus simple à prendre en main, énorme bibliothèque d'intégrations, mais coûteux à l'échelle",
          "Pipedream : orienté développeurs, exécution de code natif, gratuit pour les petits volumes",
        ],
        en: [
          "n8n: open source, self-hostable, ideal for sensitive data (GDPR), active community",
          "Make: elegant visual interface, excellent error handling, good value for money",
          "Zapier: easiest to get started, huge integration library, but expensive at scale",
          "Pipedream: developer-oriented, native code execution, free for small volumes",
        ],
      },
    },
    {
      id: "rag",
      title: {
        fr: "RAG expliqué simplement : donner de la mémoire à l'IA",
        en: "RAG explained simply: giving AI memory",
      },
      content: {
        fr: "Le Retrieval Augmented Generation (RAG) est peut-être le pattern le plus puissant des workflows IA. Le principe : au lieu de compter uniquement sur les connaissances internes du modèle, on lui fournit des documents pertinents récupérés dynamiquement avant qu'il génère sa réponse. Concrètement, quand un utilisateur pose une question, le système cherche d'abord les passages les plus pertinents dans votre base documentaire (via des embeddings et une recherche vectorielle), puis injecte ces passages dans le contexte du LLM. Résultat : des réponses précises, à jour, et ancrées dans vos données propriétaires. C'est ainsi que vous pouvez créer un chatbot expert sur la documentation interne de votre entreprise.",
        en: "Retrieval Augmented Generation (RAG) is perhaps the most powerful pattern in AI workflows. The principle: instead of relying solely on the model's internal knowledge, you provide it with relevant documents dynamically retrieved before it generates its response. Concretely, when a user asks a question, the system first searches for the most relevant passages in your document base (via embeddings and vector search), then injects these passages into the LLM's context. Result: precise, up-to-date answers grounded in your proprietary data. This is how you can create an expert chatbot on your company's internal documentation.",
      },
      highlight: {
        fr: "Un LLM sans RAG est comme un expert brillant qui n'a pas lu vos documents. Avec RAG, il a lu exactement les pages pertinentes avant de vous répondre. C'est la différence entre une réponse générique et une réponse experte et contextualisée.",
        en: "An LLM without RAG is like a brilliant expert who hasn't read your documents. With RAG, it has read exactly the relevant pages before answering. That's the difference between a generic answer and an expert, contextualized one.",
      },
    },
    {
      id: "document-processing",
      title: {
        fr: "Workflows de traitement de documents",
        en: "Document processing workflows",
      },
      content: {
        fr: "Le traitement automatisé de documents est l'un des cas d'usage les plus rentables des workflows IA. Imaginez : un contrat PDF arrive par email, un workflow l'extrait automatiquement, l'OCR convertit le scan en texte, le LLM identifie les clauses clés (durée, montant, conditions de résiliation), structure les données en JSON, et les injecte dans votre CRM ou votre outil de gestion. Ce qui prenait 30 minutes à un juriste prend désormais 10 secondes. Les mêmes principes s'appliquent aux factures, CV, rapports financiers, formulaires administratifs — tout document structuré ou semi-structuré peut être traité par un pipeline IA.",
        en: "Automated document processing is one of the most profitable use cases for AI workflows. Imagine: a PDF contract arrives by email, a workflow automatically extracts it, OCR converts the scan to text, the LLM identifies key clauses (duration, amount, termination conditions), structures the data as JSON, and injects it into your CRM or management tool. What took a lawyer 30 minutes now takes 10 seconds. The same principles apply to invoices, resumes, financial reports, administrative forms — any structured or semi-structured document can be processed by an AI pipeline.",
      },
      bullets: {
        fr: [
          "Extraction de données de factures : montant, date, fournisseur, numéro de facture",
          "Analyse de contrats : clauses clés, risques, dates d'échéance",
          "Parsing de CV : compétences, expérience, formation, scoring automatique",
          "Classification de documents : tri automatique par type, urgence, département",
        ],
        en: [
          "Invoice data extraction: amount, date, supplier, invoice number",
          "Contract analysis: key clauses, risks, due dates",
          "Resume parsing: skills, experience, education, automatic scoring",
          "Document classification: automatic sorting by type, urgency, department",
        ],
      },
    },
    {
      id: "content-generation",
      title: {
        fr: "Pipelines de génération de contenu",
        en: "Content generation pipelines",
      },
      content: {
        fr: "Les équipes marketing et éditoriales sont les premières bénéficiaires des pipelines de génération de contenu. Un pipeline typique commence par une veille automatisée (scraping de tendances, analyse de mots-clés), passe par une étape de planification éditoriale (le LLM propose des sujets et angles), puis génère des brouillons structurés, les optimise pour le SEO, crée des variantes pour les réseaux sociaux, et publie automatiquement via les API des plateformes. Le tout peut être orchestré dans n8n avec une validation humaine à l'étape du brouillon. Un seul pipeline peut produire un article de blog, 5 posts LinkedIn, 3 tweets et une newsletter à partir d'une seule idée de départ.",
        en: "Marketing and editorial teams are the primary beneficiaries of content generation pipelines. A typical pipeline starts with automated monitoring (trend scraping, keyword analysis), goes through an editorial planning stage (the LLM proposes topics and angles), then generates structured drafts, optimizes them for SEO, creates social media variants, and automatically publishes via platform APIs. Everything can be orchestrated in n8n with human validation at the draft stage. A single pipeline can produce a blog post, 5 LinkedIn posts, 3 tweets, and a newsletter from a single starting idea.",
      },
      highlight: {
        fr: "Un pipeline de contenu IA ne remplace pas la créativité humaine — il l'amplifie. L'humain définit la stratégie, la voix et les idées ; l'IA gère la production, le formatage et la distribution à l'échelle.",
        en: "An AI content pipeline doesn't replace human creativity — it amplifies it. The human defines strategy, voice, and ideas; AI handles production, formatting, and distribution at scale.",
      },
    },
    {
      id: "email-automation",
      title: {
        fr: "Automatisation des emails et de la communication",
        en: "Email and communication automation",
      },
      content: {
        fr: "L'email reste le canal de communication professionnel dominant, et c'est aussi l'un des plus chronophages. Un workflow IA peut transformer votre gestion d'emails : classification automatique par priorité et catégorie, génération de brouillons de réponse adaptés au ton et au contexte, résumé des fils de discussion longs, extraction des actions à mener et création automatique de tâches dans votre outil de gestion. Les workflows les plus avancés intègrent une analyse de sentiment pour détecter les emails urgents ou négatifs et les escalader immédiatement. Avec des outils comme n8n connecté à Gmail et Slack, vous pouvez créer ces automatisations en quelques heures.",
        en: "Email remains the dominant professional communication channel, and it's also one of the most time-consuming. An AI workflow can transform your email management: automatic classification by priority and category, draft response generation adapted to tone and context, long thread summarization, extraction of action items and automatic task creation in your management tool. The most advanced workflows integrate sentiment analysis to detect urgent or negative emails and escalate them immediately. With tools like n8n connected to Gmail and Slack, you can create these automations in a few hours.",
      },
      bullets: {
        fr: [
          "Tri automatique : classification par priorité, catégorie, et urgence",
          "Réponses assistées : brouillons contextuels générés en temps réel",
          "Résumé de fils : condensation des conversations longues en points clés",
          "Extraction d'actions : création automatique de tâches dans Notion/Asana/Jira",
        ],
        en: [
          "Automatic sorting: classification by priority, category, and urgency",
          "Assisted responses: contextual drafts generated in real time",
          "Thread summaries: condensation of long conversations into key points",
          "Action extraction: automatic task creation in Notion/Asana/Jira",
        ],
      },
    },
    {
      id: "data-analysis",
      title: {
        fr: "Workflows d'analyse de données",
        en: "Data analysis workflows",
      },
      content: {
        fr: "L'analyse de données est un domaine où les workflows IA brillent particulièrement. Un pipeline typique ingère des données brutes (CSV, API, base de données), les nettoie et les normalise, puis utilise le LLM pour identifier des patterns, générer des insights, et produire des visualisations ou des rapports narratifs. Ce qui distingue un workflow IA d'un simple script d'analyse, c'est la capacité du LLM à interpréter les résultats en langage naturel et à adapter son analyse en fonction du contexte métier. Un même jeu de données peut générer un rapport technique pour l'équipe data et un résumé exécutif pour la direction, automatiquement.",
        en: "Data analysis is a domain where AI workflows particularly shine. A typical pipeline ingests raw data (CSV, API, database), cleans and normalizes it, then uses the LLM to identify patterns, generate insights, and produce visualizations or narrative reports. What distinguishes an AI workflow from a simple analysis script is the LLM's ability to interpret results in natural language and adapt its analysis based on business context. The same dataset can generate a technical report for the data team and an executive summary for management, automatically.",
      },
      highlight: {
        fr: "L'IA ne remplace pas l'analyste de données — elle élimine les 80% de travail répétitif (nettoyage, formatage, visualisation basique) pour lui permettre de se concentrer sur les 20% à forte valeur ajoutée : l'interprétation et les recommandations stratégiques.",
        en: "AI doesn't replace the data analyst — it eliminates the 80% of repetitive work (cleaning, formatting, basic visualization) to allow them to focus on the 20% with high added value: interpretation and strategic recommendations.",
      },
    },
    {
      id: "first-workflow",
      title: {
        fr: "Construire votre premier workflow IA",
        en: "Building your first AI workflow",
      },
      content: {
        fr: "Pour démarrer, choisissez un processus que vous répétez au moins 3 fois par semaine et qui prend plus de 10 minutes à chaque fois. Commencez par le documenter : quel est le déclencheur, quelles sont les étapes, quel est le livrable final ? Ensuite, identifiez l'étape qui bénéficierait le plus de l'IA (généralement la rédaction, l'analyse, ou la classification). Construisez un prototype minimal dans n8n ou Make : un trigger, un nœud IA, une sortie. Testez avec des données réelles, itérez sur le prompt jusqu'à obtenir une qualité satisfaisante, puis ajoutez progressivement les étapes d'automatisation autour. En une journée, vous pouvez avoir un workflow fonctionnel qui vous fait gagner plusieurs heures par semaine.",
        en: "To get started, choose a process you repeat at least 3 times per week and that takes more than 10 minutes each time. Start by documenting it: what's the trigger, what are the steps, what's the final deliverable? Then identify the step that would benefit most from AI (usually writing, analysis, or classification). Build a minimal prototype in n8n or Make: a trigger, an AI node, an output. Test with real data, iterate on the prompt until you achieve satisfactory quality, then progressively add automation steps around it. In one day, you can have a functional workflow that saves you several hours per week.",
      },
      bullets: {
        fr: [
          "Étape 1 : Identifier un processus répétitif et chronophage",
          "Étape 2 : Documenter le flux actuel (déclencheur → étapes → livrable)",
          "Étape 3 : Prototyper avec un outil no-code (n8n, Make, Zapier)",
          "Étape 4 : Tester, itérer sur le prompt, valider la qualité",
          "Étape 5 : Déployer et monitorer les résultats",
        ],
        en: [
          "Step 1: Identify a repetitive, time-consuming process",
          "Step 2: Document the current flow (trigger → steps → deliverable)",
          "Step 3: Prototype with a no-code tool (n8n, Make, Zapier)",
          "Step 4: Test, iterate on the prompt, validate quality",
          "Step 5: Deploy and monitor results",
        ],
      },
    },
    {
      id: "roi",
      title: {
        fr: "Mesurer le ROI de vos workflows IA",
        en: "Measuring the ROI of your AI workflows",
      },
      content: {
        fr: "Le ROI d'un workflow IA se mesure sur trois axes : le temps gagné, la qualité améliorée, et les erreurs évitées. Pour le temps, calculez simplement le nombre de minutes économisées par exécution multiplié par la fréquence. Un workflow qui économise 15 minutes et s'exécute 20 fois par semaine libère 5 heures hebdomadaires — soit 260 heures par an. Côté coûts, un workflow n8n avec des appels GPT-4 coûte typiquement entre 5 et 50 euros par mois selon le volume. La qualité se mesure par la réduction des erreurs et la consistance des résultats. Un bon workflow IA se rembourse en moins d'une semaine et continue de générer de la valeur indéfiniment.",
        en: "The ROI of an AI workflow is measured on three axes: time saved, quality improved, and errors avoided. For time, simply calculate the minutes saved per execution multiplied by frequency. A workflow that saves 15 minutes and runs 20 times per week frees up 5 hours weekly — or 260 hours per year. Cost-wise, an n8n workflow with GPT-4 calls typically costs between 5 and 50 euros per month depending on volume. Quality is measured by error reduction and result consistency. A good AI workflow pays for itself in less than a week and continues generating value indefinitely.",
      },
      highlight: {
        fr: "Ne sous-estimez pas les gains indirects : un workflow IA qui automatise les tâches ennuyeuses améliore aussi la satisfaction et la rétention de vos équipes. Personne ne veut passer sa journée à copier-coller des données entre des outils.",
        en: "Don't underestimate indirect gains: an AI workflow that automates boring tasks also improves team satisfaction and retention. Nobody wants to spend their day copy-pasting data between tools.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : l'automatisation intelligente à portée de tous",
        en: "Conclusion: intelligent automation within everyone's reach",
      },
      content: {
        fr: "Les workflows IA ne sont plus réservés aux ingénieurs. Avec les outils no-code actuels, n'importe quel professionnel peut construire des automatisations intelligentes qui transforment sa productivité. La clé est de commencer petit, de mesurer les résultats, et d'itérer. Ne cherchez pas à automatiser toute votre activité d'un coup — identifiez les 2-3 processus les plus répétitifs et les plus chronophages, automatisez-les, puis passez aux suivants. En 2026, ne pas utiliser de workflows IA dans son travail quotidien, c'est comme ne pas utiliser de tableur : techniquement possible, mais objectivement un handicap compétitif.",
        en: "AI workflows are no longer reserved for engineers. With current no-code tools, any professional can build intelligent automations that transform their productivity. The key is to start small, measure results, and iterate. Don't try to automate your entire activity at once — identify the 2-3 most repetitive and time-consuming processes, automate them, then move on to the next ones. In 2026, not using AI workflows in your daily work is like not using a spreadsheet: technically possible, but objectively a competitive handicap.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "n8n Documentation — AI Workflow Templates",
      url: "https://docs.n8n.io/",
    },
    {
      id: 2,
      label: "Make (Integromat) — AI Automation Scenarios",
      url: "https://www.make.com/",
    },
    {
      id: 3,
      label: "Zapier — AI Actions & Integrations",
      url: "https://zapier.com/ai",
    },
    {
      id: 4,
      label: "LangChain — RAG Tutorial (2024)",
      url: "https://python.langchain.com/docs/tutorials/rag/",
    },
    {
      id: 5,
      label: "Pinecone — Vector Database for RAG",
      url: "https://www.pinecone.io/",
    },
    {
      id: 6,
      label: "OpenAI — Prompt Engineering Best Practices",
      url: "https://platform.openai.com/docs/guides/prompt-engineering",
    },
    {
      id: 7,
      label: "Tina Huang — AI Automation for Knowledge Workers (2025)",
    },
    {
      id: 8,
      label: "McKinsey — The State of AI in 2025",
      url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    },
  ],
};
