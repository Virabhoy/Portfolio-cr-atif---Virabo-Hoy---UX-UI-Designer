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

export const iaNoCodeData: CourseData = {
  slug: "ia-no-code",
  chapter: 26,
  title: {
    fr: "IA & No-Code : Créer Sans Coder",
    en: "AI & No-Code: Create Without Coding",
  },
  subtitle: {
    fr: "v0, Bolt, Lovable et la Démocratisation du Dev",
    en: "v0, Bolt, Lovable and the Democratization of Dev",
  },
  readingTime: 15,
  description: {
    fr: "Comment les outils IA no-code (v0 by Vercel, Bolt, Lovable, Replit Agent) démocratisent le développement — ce qu'ils peuvent faire, leurs limites, quand les utiliser vs le développement traditionnel, et l'avenir du prototypage.",
    en: "How AI no-code tools (v0 by Vercel, Bolt, Lovable, Replit Agent) are democratizing development — what they can do, their limitations, when to use them vs real development, and the future of prototyping.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Tout le monde peut construire",
        en: "Everyone can build",
      },
      content: {
        fr: "Il y a deux ans, créer une application web nécessitait des mois d'apprentissage, la maîtrise de frameworks complexes et une compréhension profonde de l'architecture logicielle. Aujourd'hui, un designer peut décrire son interface en langage naturel et obtenir du code React fonctionnel en quelques secondes. Ce n'est pas de la science-fiction, c'est la réalité quotidienne de millions de créateurs qui utilisent les outils IA no-code. La barrière entre l'idée et le produit n'a jamais été aussi mince.",
        en: "Two years ago, creating a web application required months of learning, mastery of complex frameworks, and a deep understanding of software architecture. Today, a designer can describe their interface in natural language and get functional React code in seconds. This isn't science fiction — it's the daily reality of millions of creators using AI no-code tools. The barrier between idea and product has never been thinner.",
      },
      highlight: {
        fr: "En 2026, la question n'est plus 'savez-vous coder ?' mais 'savez-vous exprimer clairement ce que vous voulez construire ?'",
        en: "In 2026, the question is no longer 'can you code?' but 'can you clearly express what you want to build?'",
      },
    },
    {
      id: "what-is-ai-no-code",
      title: {
        fr: "Qu'est-ce que l'IA No-Code ?",
        en: "What is AI No-Code?",
      },
      content: {
        fr: "L'IA no-code représente une nouvelle catégorie d'outils qui combinent l'intelligence artificielle générative avec des environnements de développement visuels. Contrairement aux plateformes no-code traditionnelles comme Bubble ou Webflow qui proposent des blocs à assembler, ces outils comprennent vos intentions en langage naturel et génèrent le code correspondant. Le paradigme change radicalement : vous ne manipulez plus des composants visuels, vous conversez avec une IA qui traduit vos idées en applications fonctionnelles. C'est la convergence entre le prompt engineering et le développement logiciel.",
        en: "AI no-code represents a new category of tools that combine generative artificial intelligence with visual development environments. Unlike traditional no-code platforms like Bubble or Webflow that offer blocks to assemble, these tools understand your intentions in natural language and generate the corresponding code. The paradigm shifts radically: you no longer manipulate visual components, you converse with an AI that translates your ideas into functional applications. It's the convergence of prompt engineering and software development.",
      },
      bullets: {
        fr: [
          "Génération de code via langage naturel (prompts)",
          "Itération en temps réel avec preview instantané",
          "Stack technologique moderne générée automatiquement (React, Next.js, Tailwind)",
          "Déploiement intégré en un clic",
        ],
        en: [
          "Code generation via natural language (prompts)",
          "Real-time iteration with instant preview",
          "Automatically generated modern tech stack (React, Next.js, Tailwind)",
          "One-click integrated deployment",
        ],
      },
    },
    {
      id: "v0-vercel",
      title: {
        fr: "v0 by Vercel : Le Générateur de Composants React",
        en: "v0 by Vercel: The React Component Generator",
      },
      content: {
        fr: "v0 est probablement l'outil le plus élégant de cette nouvelle vague. Développé par Vercel, l'entreprise derrière Next.js, il génère des composants React avec Tailwind CSS et shadcn/ui à partir de simples descriptions textuelles ou même de captures d'écran. Sa force réside dans la qualité du code produit : propre, typé, suivant les meilleures pratiques du développement React moderne. Chaque composant est immédiatement utilisable dans un projet Next.js existant. v0 ne cherche pas à remplacer le développeur — il accélère considérablement la phase de prototypage et de construction d'interfaces.",
        en: "v0 is probably the most elegant tool in this new wave. Developed by Vercel, the company behind Next.js, it generates React components with Tailwind CSS and shadcn/ui from simple text descriptions or even screenshots. Its strength lies in the quality of the produced code: clean, typed, following the best practices of modern React development. Each component is immediately usable in an existing Next.js project. v0 doesn't seek to replace the developer — it considerably accelerates the prototyping and interface-building phase.",
      },
      highlight: {
        fr: "v0 excelle pour transformer une maquette Figma en composants React utilisables en production, réduisant des heures d'intégration à quelques minutes.",
        en: "v0 excels at transforming a Figma mockup into production-ready React components, reducing hours of integration to just minutes.",
      },
      bullets: {
        fr: [
          "Génération de composants React/Next.js avec TypeScript",
          "Intégration native de shadcn/ui et Tailwind CSS",
          "Import depuis des screenshots ou des descriptions textuelles",
          "Code exportable et modifiable directement",
        ],
        en: [
          "React/Next.js component generation with TypeScript",
          "Native shadcn/ui and Tailwind CSS integration",
          "Import from screenshots or text descriptions",
          "Directly exportable and editable code",
        ],
      },
    },
    {
      id: "bolt-new",
      title: {
        fr: "Bolt.new : Le Full-Stack dans le Navigateur",
        en: "Bolt.new: Full-Stack in the Browser",
      },
      content: {
        fr: "Bolt.new de StackBlitz pousse le concept encore plus loin en proposant un environnement de développement complet directement dans le navigateur. Là où v0 génère des composants isolés, Bolt crée des applications entières avec backend, base de données et authentification. L'expérience est saisissante : vous décrivez votre application en quelques phrases, et Bolt génère l'architecture complète, installe les dépendances, et lance un serveur de développement — le tout dans un onglet de navigateur grâce à WebContainers. C'est l'outil idéal pour passer d'une idée à un prototype fonctionnel en moins d'une heure.",
        en: "Bolt.new from StackBlitz pushes the concept even further by offering a complete development environment directly in the browser. Where v0 generates isolated components, Bolt creates entire applications with backend, database, and authentication. The experience is striking: you describe your application in a few sentences, and Bolt generates the complete architecture, installs dependencies, and launches a dev server — all in a browser tab thanks to WebContainers. It's the ideal tool for going from an idea to a working prototype in less than an hour.",
      },
      bullets: {
        fr: [
          "Environnement de développement complet dans le navigateur (WebContainers)",
          "Génération full-stack : frontend, backend, base de données",
          "Installation automatique des dépendances npm",
          "Déploiement direct vers Netlify ou autres hébergeurs",
        ],
        en: [
          "Complete development environment in the browser (WebContainers)",
          "Full-stack generation: frontend, backend, database",
          "Automatic npm dependency installation",
          "Direct deployment to Netlify or other hosts",
        ],
      },
    },
    {
      id: "lovable",
      title: {
        fr: "Lovable : Du Design au Code",
        en: "Lovable: From Design to Code",
      },
      content: {
        fr: "Lovable (anciennement GPT Engineer) se positionne comme le pont entre le design et le développement. Sa proposition de valeur est claire : vous décrivez votre vision produit, et Lovable génère une application complète avec une attention particulière portée à l'esthétique et l'expérience utilisateur. L'outil excelle dans la création d'applications visuellement soignées grâce à son intégration poussée avec des bibliothèques de composants modernes. Lovable intègre également Supabase pour le backend, offrant authentification, base de données et API en quelques clics. C'est l'outil qui parle le plus aux designers et aux product managers.",
        en: "Lovable (formerly GPT Engineer) positions itself as the bridge between design and development. Its value proposition is clear: you describe your product vision, and Lovable generates a complete application with particular attention to aesthetics and user experience. The tool excels at creating visually polished applications thanks to its deep integration with modern component libraries. Lovable also integrates Supabase for the backend, offering authentication, database, and API in a few clicks. It's the tool that speaks most to designers and product managers.",
      },
      highlight: {
        fr: "Lovable est particulièrement adapté aux designers qui veulent valider des concepts produits sans dépendre d'une équipe de développement.",
        en: "Lovable is particularly suited for designers who want to validate product concepts without depending on a development team.",
      },
    },
    {
      id: "replit-agent",
      title: {
        fr: "Replit Agent : L'Assistant Développeur Autonome",
        en: "Replit Agent: The Autonomous Developer Assistant",
      },
      content: {
        fr: "Replit Agent représente une approche différente : plutôt qu'un générateur de code, c'est un agent IA autonome capable de planifier, coder, débugger et déployer une application de bout en bout. Vous lui donnez un objectif, et il décompose le travail en étapes, écrit le code, teste les fonctionnalités et corrige les erreurs de manière itérative. La puissance de Replit réside dans son infrastructure cloud intégrée : l'agent a accès à un terminal, peut installer des packages, créer des bases de données et déployer l'application — le tout sans intervention humaine. C'est l'aperçu le plus concret de ce que sera le développement assisté par IA dans les années à venir.",
        en: "Replit Agent represents a different approach: rather than a code generator, it's an autonomous AI agent capable of planning, coding, debugging, and deploying an application end-to-end. You give it an objective, and it breaks down the work into steps, writes code, tests features, and fixes errors iteratively. Replit's power lies in its integrated cloud infrastructure: the agent has access to a terminal, can install packages, create databases, and deploy the application — all without human intervention. It's the most concrete preview of what AI-assisted development will look like in years to come.",
      },
      bullets: {
        fr: [
          "Agent IA autonome qui planifie et exécute le développement",
          "Accès au terminal, aux packages et aux bases de données",
          "Débogage automatique et correction itérative",
          "Infrastructure cloud intégrée avec déploiement instantané",
        ],
        en: [
          "Autonomous AI agent that plans and executes development",
          "Access to terminal, packages, and databases",
          "Automatic debugging and iterative correction",
          "Integrated cloud infrastructure with instant deployment",
        ],
      },
    },
    {
      id: "other-tools",
      title: {
        fr: "Autres Outils : Webflow AI, Framer AI et Claude Code",
        en: "Other Tools: Webflow AI, Framer AI, and Claude Code",
      },
      content: {
        fr: "L'écosystème ne se limite pas aux quatre grands. Webflow a intégré des fonctionnalités IA pour générer des layouts et du contenu directement dans son éditeur visuel, rendant la création de sites web encore plus accessible. Framer AI permet de créer des sites marketing sophistiqués avec des animations complexes à partir de prompts simples. Claude Code d'Anthropic offre une approche conversationnelle du développement, particulièrement efficace pour les projets qui nécessitent une compréhension contextuelle profonde. Cursor et GitHub Copilot, bien que ciblant les développeurs, font partie de ce même mouvement de démocratisation en rendant le code accessible à un public plus large.",
        en: "The ecosystem isn't limited to the big four. Webflow has integrated AI features to generate layouts and content directly in its visual editor, making website creation even more accessible. Framer AI enables creating sophisticated marketing sites with complex animations from simple prompts. Anthropic's Claude Code offers a conversational approach to development, particularly effective for projects requiring deep contextual understanding. Cursor and GitHub Copilot, while targeting developers, are part of this same democratization movement by making code accessible to a wider audience.",
      },
    },
    {
      id: "capabilities-limitations",
      title: {
        fr: "Capacités et Limites : Ce que l'IA Sait (et Ne Sait Pas) Faire",
        en: "Capabilities and Limitations: What AI Can (and Can't) Do",
      },
      content: {
        fr: "Soyons honnêtes sur ce que ces outils accomplissent réellement. Ils excellent pour générer des interfaces utilisateur, créer des CRUD basiques, assembler des composants existants et produire du code standard. En revanche, ils peinent face à la logique métier complexe, l'optimisation des performances, la sécurité avancée et l'architecture à grande échelle. Le code généré est souvent verbeux, parfois redondant, et manque de la finesse qu'un développeur expérimenté apporterait. Les applications générées fonctionnent en démonstration mais nécessitent un travail significatif pour atteindre un niveau de production robuste.",
        en: "Let's be honest about what these tools actually accomplish. They excel at generating user interfaces, creating basic CRUDs, assembling existing components, and producing standard code. However, they struggle with complex business logic, performance optimization, advanced security, and large-scale architecture. Generated code is often verbose, sometimes redundant, and lacks the finesse an experienced developer would bring. Generated applications work in demos but require significant work to reach a robust production level.",
      },
      highlight: {
        fr: "L'IA no-code est un accélérateur, pas un remplaçant. Elle multiplie la vitesse d'exécution mais ne remplace pas la réflexion architecturale.",
        en: "AI no-code is an accelerator, not a replacement. It multiplies execution speed but doesn't replace architectural thinking.",
      },
      bullets: {
        fr: [
          "Excellent : UI/UX, prototypage rapide, CRUD, landing pages",
          "Correct : Intégrations API simples, formulaires, authentification basique",
          "Limité : Logique métier complexe, performances, sécurité, scalabilité",
          "Insuffisant : Architecture distribuée, temps réel complexe, conformité réglementaire",
        ],
        en: [
          "Excellent: UI/UX, rapid prototyping, CRUD, landing pages",
          "Decent: Simple API integrations, forms, basic authentication",
          "Limited: Complex business logic, performance, security, scalability",
          "Insufficient: Distributed architecture, complex real-time, regulatory compliance",
        ],
      },
    },
    {
      id: "no-code-vs-dev",
      title: {
        fr: "Quand le No-Code Suffit vs Quand Vous Avez Besoin d'un Dev",
        en: "When No-Code Works vs When You Need a Dev",
      },
      content: {
        fr: "La décision entre no-code IA et développement traditionnel dépend de trois facteurs : la complexité, la durée de vie du projet et le niveau de qualité attendu. Pour un MVP, un prototype de validation, une landing page ou un outil interne simple, le no-code IA est imbattable en termes de rapport coût/vitesse. Pour un produit destiné à des milliers d'utilisateurs, une application avec des exigences de sécurité strictes ou un système devant évoluer pendant des années, le développement professionnel reste indispensable. La zone grise entre les deux se réduit chaque mois à mesure que les outils s'améliorent.",
        en: "The decision between AI no-code and traditional development depends on three factors: complexity, project lifespan, and expected quality level. For an MVP, validation prototype, landing page, or simple internal tool, AI no-code is unbeatable in cost/speed ratio. For a product destined for thousands of users, an application with strict security requirements, or a system that must evolve for years, professional development remains indispensable. The gray area between the two shrinks every month as tools improve.",
      },
      bullets: {
        fr: [
          "No-code IA : MVPs, prototypes, landing pages, outils internes, POCs",
          "Développement classique : Produits à fort trafic, fintech, healthtech, systèmes critiques",
          "Approche hybride : Prototyper en no-code, puis réécrire les parties critiques avec un dev",
        ],
        en: [
          "AI no-code: MVPs, prototypes, landing pages, internal tools, POCs",
          "Traditional dev: High-traffic products, fintech, healthtech, critical systems",
          "Hybrid approach: Prototype in no-code, then rewrite critical parts with a dev",
        ],
      },
    },
    {
      id: "prototyping",
      title: {
        fr: "Prototyper avec l'IA : Un Nouveau Workflow",
        en: "Prototyping with AI: A New Workflow",
      },
      content: {
        fr: "Le prototypage IA transforme fondamentalement le processus de conception produit. Là où un designer créait des maquettes statiques dans Figma avant de les transmettre à un développeur pour intégration, il peut désormais produire des prototypes interactifs et fonctionnels en quelques minutes. Ce changement a des implications profondes : les tests utilisateurs se font sur de vrais produits plutôt que sur des simulations, les itérations sont quasi instantanées, et le feedback loop entre idée et validation se compresse de semaines à quelques heures. Le designer devient un créateur de produits à part entière, pas seulement un concepteur d'interfaces.",
        en: "AI prototyping fundamentally transforms the product design process. Where a designer would create static mockups in Figma before handing them to a developer for integration, they can now produce interactive and functional prototypes in minutes. This change has profound implications: user testing happens on real products rather than simulations, iterations are nearly instant, and the feedback loop between idea and validation compresses from weeks to hours. The designer becomes a full-fledged product creator, not just an interface designer.",
      },
      highlight: {
        fr: "Le prototype IA n'est plus une maquette — c'est un produit fonctionnel qui peut être testé par de vrais utilisateurs dès le premier jour.",
        en: "The AI prototype is no longer a mockup — it's a functional product that can be tested by real users from day one.",
      },
    },
    {
      id: "building-mvps",
      title: {
        fr: "Construire des MVPs : De l'Idée au Marché en Jours",
        en: "Building MVPs: From Idea to Market in Days",
      },
      content: {
        fr: "La construction de MVPs (Minimum Viable Products) est peut-être le cas d'usage le plus transformateur du no-code IA. Des entrepreneurs solo lancent des produits SaaS complets en quelques jours, testent leur market fit, et itèrent à une vitesse qui était autrefois réservée aux startups bien financées. Le coût d'entrée pour tester une idée business est passé de dizaines de milliers d'euros à quelques centaines. Cette démocratisation crée une explosion de micro-SaaS et d'outils de niche qui n'auraient jamais vu le jour avec les modèles de développement traditionnels. Le risque entrepreneurial diminue quand le coût du prototype tend vers zéro.",
        en: "Building MVPs (Minimum Viable Products) is perhaps the most transformative use case for AI no-code. Solo entrepreneurs are launching complete SaaS products in days, testing their market fit, and iterating at a speed once reserved for well-funded startups. The entry cost to test a business idea has dropped from tens of thousands of euros to a few hundred. This democratization creates an explosion of micro-SaaS and niche tools that would never have existed with traditional development models. Entrepreneurial risk decreases when the cost of a prototype approaches zero.",
      },
      bullets: {
        fr: [
          "Étape 1 : Définir le problème et le persona cible",
          "Étape 2 : Décrire les fonctionnalités essentielles en langage naturel",
          "Étape 3 : Générer l'application avec Bolt, Lovable ou v0",
          "Étape 4 : Tester avec de vrais utilisateurs et itérer",
          "Étape 5 : Décider de scaler en no-code ou de migrer vers du code custom",
        ],
        en: [
          "Step 1: Define the problem and target persona",
          "Step 2: Describe essential features in natural language",
          "Step 3: Generate the application with Bolt, Lovable, or v0",
          "Step 4: Test with real users and iterate",
          "Step 5: Decide to scale in no-code or migrate to custom code",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : La Fin du Monopole du Code",
        en: "Conclusion: The End of Code's Monopoly",
      },
      content: {
        fr: "L'IA no-code ne va pas éliminer les développeurs — elle va éliminer les barrières inutiles entre la vision et la réalisation. Les meilleurs développeurs se concentreront sur les problèmes véritablement complexes tandis que les outils IA démocratiseront la création d'applications standards. Pour les designers, product managers et entrepreneurs, c'est une opportunité sans précédent d'augmenter leur impact. La compétence clé n'est plus de savoir coder, mais de savoir penser produit, comprendre les utilisateurs et articuler clairement une vision. Le code devient un détail d'implémentation, pas une barrière d'entrée.",
        en: "AI no-code won't eliminate developers — it will eliminate unnecessary barriers between vision and execution. The best developers will focus on truly complex problems while AI tools democratize the creation of standard applications. For designers, product managers, and entrepreneurs, it's an unprecedented opportunity to increase their impact. The key skill is no longer knowing how to code, but knowing how to think product, understand users, and clearly articulate a vision. Code becomes an implementation detail, not a barrier to entry.",
      },
      highlight: {
        fr: "L'avenir n'appartient pas à ceux qui savent coder, mais à ceux qui savent ce qu'il faut construire et pourquoi.",
        en: "The future doesn't belong to those who know how to code, but to those who know what to build and why.",
      },
    },
  ],
  sources: [
    { id: 1, label: "v0 by Vercel — Documentation officielle", url: "https://v0.dev" },
    { id: 2, label: "Bolt.new by StackBlitz", url: "https://bolt.new" },
    { id: 3, label: "Lovable (ex-GPT Engineer)", url: "https://lovable.dev" },
    { id: 4, label: "Replit Agent — Documentation", url: "https://replit.com" },
    { id: 5, label: "The State of AI No-Code Tools (2026)", url: "https://www.smashingmagazine.com" },
    { id: 6, label: "Webflow AI Features", url: "https://webflow.com/ai" },
    { id: 7, label: "Framer AI — Site Builder", url: "https://framer.com" },
  ],
};
