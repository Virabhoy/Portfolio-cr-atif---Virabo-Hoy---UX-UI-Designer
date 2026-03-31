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

export const iaAutomationData: CourseData = {
  slug: "ia-automation",
  chapter: 27,
  title: {
    fr: "Automatisation IA : n8n, Make & Zapier",
    en: "AI Automation: n8n, Make & Zapier",
  },
  subtitle: {
    fr: "Orchestrer vos Processus avec l'Intelligence Artificielle",
    en: "Orchestrate Your Processes with Artificial Intelligence",
  },
  readingTime: 17,
  description: {
    fr: "Guide complet des plateformes d'automatisation IA — n8n (open source, self-hosted), Make (workflows visuels), Zapier (le plus simple), Dust (AI-native), construction d'automatisations alimentées par l'IA, triggers, actions, nœuds IA.",
    en: "Complete guide to AI automation platforms — n8n (open source, self-hosted), Make (visual workflows), Zapier (simplest), Dust (AI-native), building AI-powered automations, triggers, actions, AI nodes.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Les tâches répétitives sont mortes",
        en: "Repetitive tasks are dead",
      },
      content: {
        fr: "Chaque jour, des millions de professionnels passent des heures à copier-coller des données entre applications, à trier des emails, à mettre à jour des tableurs et à envoyer des notifications manuellement. Ce travail invisible mais chronophage représente jusqu'à 40% du temps de travail dans certaines organisations. L'automatisation IA ne se contente pas de relier des outils entre eux — elle comprend le contexte, prend des décisions et s'adapte aux situations imprévues. C'est la différence entre un script rigide et un assistant intelligent qui gère vos processus.",
        en: "Every day, millions of professionals spend hours copy-pasting data between applications, sorting emails, updating spreadsheets, and sending notifications manually. This invisible but time-consuming work represents up to 40% of working time in some organizations. AI automation doesn't just connect tools together — it understands context, makes decisions, and adapts to unforeseen situations. That's the difference between a rigid script and an intelligent assistant managing your processes.",
      },
      highlight: {
        fr: "L'automatisation IA ne remplace pas les humains — elle les libère des tâches que personne ne devrait faire manuellement en 2026.",
        en: "AI automation doesn't replace humans — it frees them from tasks nobody should be doing manually in 2026.",
      },
    },
    {
      id: "what-is-ai-automation",
      title: {
        fr: "Qu'est-ce que l'Automatisation IA ?",
        en: "What is AI Automation?",
      },
      content: {
        fr: "L'automatisation IA combine les plateformes d'intégration traditionnelles (iPaaS) avec des capacités d'intelligence artificielle. Concrètement, un workflow automatisé se déclenche sur un événement (un email reçu, un formulaire soumis, une date atteinte), exécute une série d'actions (transformer des données, appeler des APIs, envoyer des messages), et intègre désormais des nœuds IA capables d'analyser du texte, classifier des données, générer du contenu ou prendre des décisions basées sur le contexte. Cette combinaison transforme des workflows linéaires en processus intelligents capables de gérer des cas complexes sans intervention humaine.",
        en: "AI automation combines traditional integration platforms (iPaaS) with artificial intelligence capabilities. Concretely, an automated workflow triggers on an event (an email received, a form submitted, a date reached), executes a series of actions (transforming data, calling APIs, sending messages), and now integrates AI nodes capable of analyzing text, classifying data, generating content, or making decisions based on context. This combination transforms linear workflows into intelligent processes capable of handling complex cases without human intervention.",
      },
      bullets: {
        fr: [
          "Trigger : L'événement déclencheur (webhook, schedule, email, changement de données)",
          "Action : L'opération exécutée (API call, transformation, notification)",
          "Nœud IA : L'intelligence ajoutée (classification, génération, analyse de sentiment)",
          "Workflow : L'enchaînement logique de triggers, actions et nœuds IA",
        ],
        en: [
          "Trigger: The initiating event (webhook, schedule, email, data change)",
          "Action: The executed operation (API call, transformation, notification)",
          "AI Node: The added intelligence (classification, generation, sentiment analysis)",
          "Workflow: The logical chain of triggers, actions, and AI nodes",
        ],
      },
    },
    {
      id: "n8n-deep-dive",
      title: {
        fr: "n8n : L'Open Source Puissant",
        en: "n8n: The Powerful Open Source",
      },
      content: {
        fr: "n8n est la plateforme d'automatisation qui fait battre le cœur des développeurs et des équipes techniques. Open source et auto-hébergeable, elle offre un contrôle total sur vos données et vos workflows. Son éditeur visuel de nœuds est intuitif, mais c'est sous le capot que n8n brille vraiment : vous pouvez écrire du JavaScript ou Python dans n'importe quel nœud, créer des sous-workflows réutilisables, et intégrer des modèles IA via des nœuds dédiés pour OpenAI, Anthropic, ou des modèles locaux. Le self-hosting signifie que vos données sensibles ne quittent jamais votre infrastructure — un argument décisif pour les entreprises soucieuses de conformité.",
        en: "n8n is the automation platform that makes developers' and technical teams' hearts beat faster. Open source and self-hostable, it offers total control over your data and workflows. Its visual node editor is intuitive, but it's under the hood where n8n truly shines: you can write JavaScript or Python in any node, create reusable sub-workflows, and integrate AI models via dedicated nodes for OpenAI, Anthropic, or local models. Self-hosting means your sensitive data never leaves your infrastructure — a decisive argument for compliance-conscious companies.",
      },
      highlight: {
        fr: "n8n est le seul outil d'automatisation où vous possédez réellement vos workflows — aucun vendor lock-in, aucune limite artificielle.",
        en: "n8n is the only automation tool where you truly own your workflows — no vendor lock-in, no artificial limits.",
      },
      bullets: {
        fr: [
          "Open source avec communauté active (40k+ étoiles GitHub)",
          "Self-hosting ou cloud managé (n8n.cloud)",
          "Nœuds IA natifs : OpenAI, Anthropic, LangChain, modèles locaux",
          "Code custom en JavaScript/Python dans chaque nœud",
          "400+ intégrations natives + webhooks personnalisés",
        ],
        en: [
          "Open source with active community (40k+ GitHub stars)",
          "Self-hosting or managed cloud (n8n.cloud)",
          "Native AI nodes: OpenAI, Anthropic, LangChain, local models",
          "Custom JavaScript/Python code in every node",
          "400+ native integrations + custom webhooks",
        ],
      },
    },
    {
      id: "make",
      title: {
        fr: "Make : L'Automatisation Visuelle Avancée",
        en: "Make: Advanced Visual Automation",
      },
      content: {
        fr: "Make (anciennement Integromat) est la plateforme qui a redéfini ce que signifie 'automatisation visuelle'. Son interface de création de scénarios, avec ses modules circulaires reliés par des flux, est devenue iconique dans l'industrie. Make se distingue par sa capacité à gérer des workflows complexes avec des branches conditionnelles, des boucles, des agrégateurs et des routeurs — des fonctionnalités que Zapier ne propose tout simplement pas. L'intégration IA de Make permet d'ajouter des modules GPT-4, Claude ou d'autres LLMs directement dans vos scénarios, transformant des flux de données linéaires en pipelines de traitement intelligents.",
        en: "Make (formerly Integromat) is the platform that redefined what 'visual automation' means. Its scenario creation interface, with circular modules connected by flows, has become iconic in the industry. Make stands out for its ability to handle complex workflows with conditional branches, loops, aggregators, and routers — features Zapier simply doesn't offer. Make's AI integration allows adding GPT-4, Claude, or other LLM modules directly into your scenarios, transforming linear data flows into intelligent processing pipelines.",
      },
      bullets: {
        fr: [
          "Interface visuelle la plus avancée du marché",
          "Logique conditionnelle complexe (routeurs, filtres, itérateurs)",
          "Modules IA pour OpenAI, Anthropic, Hugging Face",
          "Excellent rapport qualité/prix pour les équipes moyennes",
          "1000+ intégrations avec mapping de données avancé",
        ],
        en: [
          "Most advanced visual interface on the market",
          "Complex conditional logic (routers, filters, iterators)",
          "AI modules for OpenAI, Anthropic, Hugging Face",
          "Excellent value for mid-size teams",
          "1000+ integrations with advanced data mapping",
        ],
      },
    },
    {
      id: "zapier",
      title: {
        fr: "Zapier : La Simplicité Avant Tout",
        en: "Zapier: Simplicity First",
      },
      content: {
        fr: "Zapier reste le roi incontesté de l'automatisation accessible. Avec plus de 6000 intégrations et une interface d'une simplicité désarmante, c'est l'outil idéal pour les non-techniciens qui veulent automatiser leurs processus sans courbe d'apprentissage. Les Zaps (workflows) sont linéaires et faciles à comprendre : un trigger déclenche une série d'actions séquentielles. L'ajout récent de fonctionnalités IA, notamment les AI Actions et la possibilité d'utiliser des LLMs comme étapes de workflow, a considérablement enrichi les possibilités. Zapier ne sera jamais aussi puissant que n8n ou Make pour les cas complexes, mais pour 80% des besoins d'automatisation, il est imbattable.",
        en: "Zapier remains the undisputed king of accessible automation. With over 6000 integrations and a disarmingly simple interface, it's the ideal tool for non-technical users who want to automate their processes without a learning curve. Zaps (workflows) are linear and easy to understand: a trigger fires a series of sequential actions. The recent addition of AI features, including AI Actions and the ability to use LLMs as workflow steps, has considerably enriched possibilities. Zapier will never be as powerful as n8n or Make for complex cases, but for 80% of automation needs, it's unbeatable.",
      },
      highlight: {
        fr: "Zapier est à l'automatisation ce que Canva est au design : pas le plus puissant, mais le plus accessible et souvent suffisant.",
        en: "Zapier is to automation what Canva is to design: not the most powerful, but the most accessible and often sufficient.",
      },
    },
    {
      id: "dust",
      title: {
        fr: "Dust : L'Automatisation AI-Native",
        en: "Dust: AI-Native Automation",
      },
      content: {
        fr: "Dust représente une nouvelle génération d'outils pensés dès le départ autour de l'IA. Plutôt que d'ajouter des nœuds IA à des workflows classiques, Dust place l'intelligence artificielle au centre de l'automatisation. La plateforme permet de créer des assistants IA connectés aux données de l'entreprise (Slack, Notion, Google Drive, GitHub) qui comprennent le contexte organisationnel et automatisent des tâches cognitives complexes. Dust ne fait pas que déplacer des données — il les comprend, les analyse et agit en conséquence. C'est l'outil qui se rapproche le plus d'un employé virtuel intelligent.",
        en: "Dust represents a new generation of tools designed from the ground up around AI. Rather than adding AI nodes to traditional workflows, Dust places artificial intelligence at the center of automation. The platform allows creating AI assistants connected to company data (Slack, Notion, Google Drive, GitHub) that understand organizational context and automate complex cognitive tasks. Dust doesn't just move data — it understands, analyzes, and acts on it. It's the tool that comes closest to an intelligent virtual employee.",
      },
      bullets: {
        fr: [
          "Assistants IA connectés aux données de l'entreprise",
          "RAG intégré pour une compréhension contextuelle",
          "Multi-modèles (GPT-4, Claude, Mistral)",
          "Conçu pour les équipes, pas les individus",
        ],
        en: [
          "AI assistants connected to company data",
          "Built-in RAG for contextual understanding",
          "Multi-model (GPT-4, Claude, Mistral)",
          "Designed for teams, not individuals",
        ],
      },
    },
    {
      id: "comparing-platforms",
      title: {
        fr: "Comparer les Plateformes : Laquelle Choisir ?",
        en: "Comparing Platforms: Which One to Choose?",
      },
      content: {
        fr: "Le choix de la bonne plateforme dépend de votre profil, de vos contraintes techniques et de la complexité de vos besoins. Zapier pour les équipes non-techniques qui veulent des résultats rapides. Make pour les power users qui ont besoin de logique conditionnelle avancée sans écrire de code. n8n pour les équipes techniques qui veulent le contrôle total et le self-hosting. Dust pour les organisations qui veulent des assistants IA plutôt que des workflows. La tendance est clairement à la convergence : chaque plateforme ajoute des capacités IA, et les frontières entre elles s'estompent progressivement.",
        en: "Choosing the right platform depends on your profile, technical constraints, and the complexity of your needs. Zapier for non-technical teams wanting quick results. Make for power users needing advanced conditional logic without writing code. n8n for technical teams wanting total control and self-hosting. Dust for organizations wanting AI assistants rather than workflows. The trend is clearly towards convergence: each platform is adding AI capabilities, and the boundaries between them are progressively blurring.",
      },
      bullets: {
        fr: [
          "Zapier : 6000+ intégrations, le plus simple, idéal pour débuter — à partir de 20€/mois",
          "Make : Logique avancée, excellent rapport qualité/prix — à partir de 9€/mois",
          "n8n : Open source, self-hosted, contrôle total — gratuit (self-hosted) ou 20€/mois (cloud)",
          "Dust : AI-native, assistants contextuels — tarification entreprise",
        ],
        en: [
          "Zapier: 6000+ integrations, simplest, ideal to start — from $20/month",
          "Make: Advanced logic, excellent value — from $9/month",
          "n8n: Open source, self-hosted, total control — free (self-hosted) or $20/month (cloud)",
          "Dust: AI-native, contextual assistants — enterprise pricing",
        ],
      },
    },
    {
      id: "first-automation",
      title: {
        fr: "Construire votre Première Automatisation IA",
        en: "Building Your First AI Automation",
      },
      content: {
        fr: "La meilleure façon d'apprendre est de commencer petit. Prenons un cas concret : automatiser le tri et la réponse aux emails de support. Le trigger est un nouvel email reçu. Un nœud IA analyse le contenu pour classifier la demande (bug, question, feature request, spam). Selon la classification, le workflow route vers différentes actions : réponse automatique pour les questions fréquentes, création d'un ticket Jira pour les bugs, notification Slack pour les demandes urgentes. En moins d'une heure, vous avez un assistant de support qui gère 70% des demandes entrantes sans intervention humaine.",
        en: "The best way to learn is to start small. Let's take a concrete case: automating support email triage and response. The trigger is a new email received. An AI node analyzes the content to classify the request (bug, question, feature request, spam). Based on the classification, the workflow routes to different actions: automatic response for FAQs, Jira ticket creation for bugs, Slack notification for urgent requests. In less than an hour, you have a support assistant handling 70% of incoming requests without human intervention.",
      },
      highlight: {
        fr: "Commencez par automatiser une tâche que vous faites plus de 5 fois par semaine. Le ROI sera immédiat et mesurable.",
        en: "Start by automating a task you do more than 5 times a week. The ROI will be immediate and measurable.",
      },
    },
    {
      id: "advanced-patterns",
      title: {
        fr: "Patterns Avancés : IA Conditionnelle et Multi-Modèles",
        en: "Advanced Patterns: Conditional AI and Multi-Model",
      },
      content: {
        fr: "Les automatisations les plus puissantes combinent plusieurs modèles IA dans un même workflow. Par exemple, un pipeline de création de contenu peut utiliser Claude pour la rédaction longue, GPT-4 pour l'optimisation SEO, DALL-E pour la génération d'images, et un modèle de classification fine-tuné pour la catégorisation. L'IA conditionnelle ajoute une couche d'intelligence supplémentaire : le workflow choisit dynamiquement le modèle le plus adapté en fonction du type de contenu, de la langue, ou du niveau de complexité requis. Cette orchestration multi-modèles est le futur de l'automatisation intelligente.",
        en: "The most powerful automations combine multiple AI models in a single workflow. For example, a content creation pipeline might use Claude for long-form writing, GPT-4 for SEO optimization, DALL-E for image generation, and a fine-tuned classification model for categorization. Conditional AI adds an extra layer of intelligence: the workflow dynamically chooses the most suitable model based on content type, language, or required complexity level. This multi-model orchestration is the future of intelligent automation.",
      },
      bullets: {
        fr: [
          "Chaînage de modèles : utiliser la sortie d'un LLM comme entrée d'un autre",
          "Routage intelligent : choisir le modèle selon le contexte",
          "Fallback automatique : basculer vers un modèle alternatif en cas d'erreur",
          "Validation croisée : comparer les résultats de plusieurs modèles",
        ],
        en: [
          "Model chaining: use one LLM's output as another's input",
          "Intelligent routing: choose the model based on context",
          "Automatic fallback: switch to an alternative model on error",
          "Cross-validation: compare results from multiple models",
        ],
      },
    },
    {
      id: "real-world-examples",
      title: {
        fr: "Exemples Concrets : Email, Contenu, Data",
        en: "Real-World Examples: Email, Content, Data",
      },
      content: {
        fr: "Passons aux cas d'usage qui changent véritablement la donne au quotidien. Le tri intelligent d'emails utilise un LLM pour classifier, prioriser et pré-rédiger des réponses — une entreprise de 50 personnes économise facilement 20 heures par semaine. Le pipeline de contenu automatisé transforme un brief en article de blog, le traduit en 5 langues, génère les visuels associés et publie le tout sur le CMS — le content manager passe de l'exécution à la supervision. L'enrichissement de données CRM analyse les profils LinkedIn, les actualités d'entreprise et les signaux d'achat pour scorer automatiquement les leads entrants.",
        en: "Let's move to use cases that truly change the game daily. Intelligent email triage uses an LLM to classify, prioritize, and pre-draft responses — a 50-person company easily saves 20 hours per week. The automated content pipeline transforms a brief into a blog post, translates it into 5 languages, generates associated visuals, and publishes everything to the CMS — the content manager shifts from execution to supervision. CRM data enrichment analyzes LinkedIn profiles, company news, and buying signals to automatically score incoming leads.",
      },
      bullets: {
        fr: [
          "Tri d'emails : Classification, priorisation, pré-réponse automatique",
          "Pipeline de contenu : Brief → Article → Traduction → Visuels → Publication",
          "Enrichissement CRM : Analyse de profils, scoring de leads, mise à jour automatique",
          "Veille concurrentielle : Monitoring web, analyse de sentiment, alertes intelligentes",
        ],
        en: [
          "Email triage: Classification, prioritization, automatic pre-response",
          "Content pipeline: Brief → Article → Translation → Visuals → Publication",
          "CRM enrichment: Profile analysis, lead scoring, automatic updates",
          "Competitive intelligence: Web monitoring, sentiment analysis, smart alerts",
        ],
      },
    },
    {
      id: "measuring-roi",
      title: {
        fr: "Mesurer le ROI de l'Automatisation",
        en: "Measuring Automation ROI",
      },
      content: {
        fr: "L'automatisation sans mesure n'est qu'un jouet technique. Pour justifier l'investissement, il faut quantifier les gains avec précision. Le temps économisé est le KPI le plus évident : combien d'heures humaines sont libérées chaque semaine ? Le taux d'erreur diminue-t-il ? La vitesse de traitement s'améliore-t-elle ? Mais le vrai ROI se mesure aussi en opportunités créées : les heures libérées permettent-elles à l'équipe de se concentrer sur des tâches à plus forte valeur ajoutée ? Un bon framework de mesure inclut le coût de la plateforme, le temps de mise en place, les heures économisées, et l'impact qualitatif sur le travail.",
        en: "Automation without measurement is just a technical toy. To justify the investment, you need to quantify gains precisely. Time saved is the most obvious KPI: how many human hours are freed each week? Does the error rate decrease? Does processing speed improve? But the real ROI is also measured in opportunities created: do the freed hours allow the team to focus on higher-value tasks? A good measurement framework includes platform cost, setup time, hours saved, and qualitative impact on work.",
      },
      highlight: {
        fr: "Une automatisation qui économise 2 heures par semaine se rembourse en moins d'un mois. Le calcul est toujours favorable.",
        en: "An automation saving 2 hours per week pays for itself in less than a month. The math always works.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : Automatiser pour Se Concentrer sur l'Essentiel",
        en: "Conclusion: Automate to Focus on What Matters",
      },
      content: {
        fr: "L'automatisation IA n'est plus un luxe réservé aux grandes entreprises — c'est un outil accessible qui transforme la productivité de toute organisation, quelle que soit sa taille. Les plateformes comme n8n, Make, Zapier et Dust rendent la création de workflows intelligents aussi simple que la création d'une présentation PowerPoint. La clé du succès n'est pas technique mais stratégique : identifier les bons processus à automatiser, commencer petit, mesurer les résultats, et itérer. Chaque tâche répétitive automatisée est du temps réinvesti dans la créativité, la stratégie et les relations humaines — ce que l'IA ne sait pas encore faire.",
        en: "AI automation is no longer a luxury reserved for large companies — it's an accessible tool that transforms the productivity of any organization, regardless of size. Platforms like n8n, Make, Zapier, and Dust make creating intelligent workflows as simple as creating a PowerPoint presentation. The key to success isn't technical but strategic: identify the right processes to automate, start small, measure results, and iterate. Every automated repetitive task is time reinvested in creativity, strategy, and human relationships — what AI still can't do.",
      },
    },
  ],
  sources: [
    { id: 1, label: "n8n — Documentation officielle", url: "https://docs.n8n.io" },
    { id: 2, label: "Make (ex-Integromat) — Academy", url: "https://www.make.com/en/academy" },
    { id: 3, label: "Zapier — AI Actions Documentation", url: "https://zapier.com/ai" },
    { id: 4, label: "Dust — Documentation", url: "https://dust.tt" },
    { id: 5, label: "n8n AI Nodes Guide", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain/" },
    { id: 6, label: "The Future of Workflow Automation — Gartner", url: "https://www.gartner.com" },
    { id: 7, label: "McKinsey — The State of AI Automation (2025)", url: "https://www.mckinsey.com" },
  ],
};
