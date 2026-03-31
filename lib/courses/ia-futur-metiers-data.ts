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

export const iaFuturMetiersData: CourseData = {
  slug: "ia-futur-metiers",
  chapter: 30,
  title: {
    fr: "L'IA et le Futur des Métiers Créatifs",
    en: "AI and the Future of Creative Jobs",
  },
  subtitle: {
    fr: "S'Adapter, Se Réinventer, Exceller",
    en: "Adapt, Reinvent, Excel",
  },
  readingTime: 15,
  description: {
    fr: "Comment l'IA transforme les métiers créatifs — UX designers, product designers, développeurs, marketeurs, créateurs de contenu. Quelles compétences développer, ce qui sera automatisé, comment rester pertinent et prospérer.",
    en: "How AI is reshaping creative professions — UX designers, product designers, developers, marketers, content creators. What skills to develop, what will be automated, how to stay relevant and thrive.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Votre Métier est en Train de Changer",
        en: "Your Job is Changing",
      },
      content: {
        fr: "Ce n'est plus une hypothèse, c'est un fait observable au quotidien. L'IA génère des interfaces utilisateur en quelques secondes, écrit du code fonctionnel, crée des visuels photoréalistes, rédige des articles de blog et automatise des campagnes marketing entières. Pour la première fois dans l'histoire, les métiers créatifs — longtemps considérés comme immunisés contre l'automatisation — sont directement impactés par l'intelligence artificielle. La question n'est pas de savoir si votre métier va changer, mais comment vous allez naviguer cette transformation pour en sortir plus fort, plus pertinent et plus indispensable qu'avant.",
        en: "It's no longer a hypothesis, it's an observable daily fact. AI generates user interfaces in seconds, writes functional code, creates photorealistic visuals, drafts blog articles, and automates entire marketing campaigns. For the first time in history, creative professions — long considered immune to automation — are directly impacted by artificial intelligence. The question isn't whether your job will change, but how you'll navigate this transformation to emerge stronger, more relevant, and more indispensable than before.",
      },
      highlight: {
        fr: "L'IA ne remplace pas les créatifs — elle redéfinit ce que 'créatif' signifie. Les gagnants seront ceux qui s'adaptent le plus vite.",
        en: "AI doesn't replace creatives — it redefines what 'creative' means. The winners will be those who adapt fastest.",
      },
    },
    {
      id: "disruption-timeline",
      title: {
        fr: "La Timeline de la Disruption IA",
        en: "The AI Disruption Timeline",
      },
      content: {
        fr: "L'impact de l'IA sur les métiers créatifs ne se produit pas en un seul choc mais en vagues successives. La première vague (2023-2024) a touché la génération de contenu : textes, images, code basique. La deuxième vague (2025-2026) automatise les workflows complets : du brief au livrable, en passant par la recherche, l'idéation et l'itération. La troisième vague (2027+) verra l'émergence d'agents IA autonomes capables de gérer des projets entiers avec une supervision humaine minimale. Chaque vague ne supprime pas des emplois — elle transforme les rôles, élève les standards et crée de nouvelles opportunités pour ceux qui maîtrisent les outils.",
        en: "AI's impact on creative jobs doesn't happen in a single shock but in successive waves. The first wave (2023-2024) hit content generation: text, images, basic code. The second wave (2025-2026) automates complete workflows: from brief to deliverable, including research, ideation, and iteration. The third wave (2027+) will see the emergence of autonomous AI agents capable of managing entire projects with minimal human supervision. Each wave doesn't eliminate jobs — it transforms roles, raises standards, and creates new opportunities for those who master the tools.",
      },
      bullets: {
        fr: [
          "Vague 1 (2023-2024) : Génération de contenu — textes, images, code simple",
          "Vague 2 (2025-2026) : Automatisation de workflows — du brief au livrable",
          "Vague 3 (2027+) : Agents autonomes — gestion de projets avec supervision minimale",
        ],
        en: [
          "Wave 1 (2023-2024): Content generation — text, images, simple code",
          "Wave 2 (2025-2026): Workflow automation — from brief to deliverable",
          "Wave 3 (2027+): Autonomous agents — project management with minimal supervision",
        ],
      },
    },
    {
      id: "jobs-impact",
      title: {
        fr: "Les Métiers les Plus Impactés (et les Moins)",
        en: "Jobs Most Impacted (and Least)",
      },
      content: {
        fr: "Tous les métiers créatifs ne sont pas égaux face à l'IA. Les rôles les plus impactés sont ceux centrés sur l'exécution répétitive : intégrateurs web, rédacteurs SEO, graphistes de production, testeurs QA manuels. Ces tâches sont déjà largement automatisables par les outils actuels. À l'inverse, les rôles qui impliquent une compréhension profonde des humains — recherche utilisateur, stratégie produit, direction artistique, leadership d'équipe — restent difficilement automatisables. La nuance est importante : ce ne sont pas des métiers entiers qui disparaissent, ce sont des tâches au sein de chaque métier qui sont automatisées, libérant du temps pour les activités à plus forte valeur ajoutée.",
        en: "Not all creative jobs face AI equally. The most impacted roles are those centered on repetitive execution: web integrators, SEO writers, production graphic designers, manual QA testers. These tasks are already largely automatable by current tools. Conversely, roles involving deep understanding of humans — user research, product strategy, art direction, team leadership — remain difficult to automate. The nuance is important: it's not entire jobs that disappear, it's tasks within each job that get automated, freeing time for higher-value activities.",
      },
      highlight: {
        fr: "L'IA n'élimine pas des métiers — elle élimine des tâches. Les professionnels qui ne font que des tâches automatisables sont les plus vulnérables.",
        en: "AI doesn't eliminate jobs — it eliminates tasks. Professionals who only do automatable tasks are the most vulnerable.",
      },
      bullets: {
        fr: [
          "Forte exposition : Intégration web, rédaction SEO basique, design de production, test QA manuel",
          "Exposition moyenne : Développement frontend, création de contenu, design d'interface",
          "Faible exposition : Recherche utilisateur, stratégie produit, direction artistique, leadership",
          "Opportunité : Prompt engineering, AI ops, product AI management, design d'expériences IA",
        ],
        en: [
          "High exposure: Web integration, basic SEO writing, production design, manual QA testing",
          "Medium exposure: Frontend development, content creation, interface design",
          "Low exposure: User research, product strategy, art direction, leadership",
          "Opportunity: Prompt engineering, AI ops, product AI management, AI experience design",
        ],
      },
    },
    {
      id: "designer-evolution",
      title: {
        fr: "L'Évolution du Designer",
        en: "The Designer's Evolution",
      },
      content: {
        fr: "Le métier de designer connaît sa plus grande transformation depuis l'avènement du numérique. Le designer de 2020 passait 60% de son temps en exécution (maquettes, prototypes, spécifications) et 40% en réflexion (recherche, stratégie, tests). Le designer de 2026 inverse ce ratio : l'IA gère l'exécution tandis que le designer se concentre sur la compréhension des problèmes, la définition de la vision produit et la validation avec les utilisateurs. Les compétences qui prennent de la valeur sont le design thinking, la facilitation d'ateliers, la recherche qualitative, et la capacité à orchestrer des outils IA pour produire rapidement des solutions de haute qualité. Le designer devient un chef d'orchestre créatif.",
        en: "The design profession is experiencing its greatest transformation since the advent of digital. The 2020 designer spent 60% of their time on execution (mockups, prototypes, specifications) and 40% on thinking (research, strategy, testing). The 2026 designer inverts this ratio: AI handles execution while the designer focuses on understanding problems, defining product vision, and validating with users. Skills gaining value are design thinking, workshop facilitation, qualitative research, and the ability to orchestrate AI tools to rapidly produce high-quality solutions. The designer becomes a creative conductor.",
      },
      bullets: {
        fr: [
          "Avant : Exécution 60%, Réflexion 40% → Après : Exécution 20%, Réflexion 80%",
          "Compétence clé : Orchestrer les outils IA pour accélérer sans sacrifier la qualité",
          "Le prompt design devient une compétence de design à part entière",
          "La recherche utilisateur et le design thinking deviennent les différenciateurs",
        ],
        en: [
          "Before: Execution 60%, Thinking 40% → After: Execution 20%, Thinking 80%",
          "Key skill: Orchestrating AI tools to accelerate without sacrificing quality",
          "Prompt design becomes a design skill in its own right",
          "User research and design thinking become the differentiators",
        ],
      },
    },
    {
      id: "developer-evolution",
      title: {
        fr: "L'Évolution du Développeur",
        en: "The Developer's Evolution",
      },
      content: {
        fr: "Le développeur de 2026 ne code plus comme celui de 2020. GitHub Copilot, Claude Code, Cursor et les agents de développement IA ont transformé le quotidien : le code boilerplate est généré automatiquement, les bugs sont détectés et corrigés en temps réel, et les tests sont écrits par l'IA. Le développeur passe moins de temps à taper du code et plus de temps à architecturer, reviewer, et prendre des décisions techniques critiques. Les développeurs juniors sont les plus impactés car les tâches d'apprentissage (écrire des composants simples, corriger des bugs basiques) sont automatisées. Paradoxalement, la barre d'entrée monte : pour être pertinent, un développeur doit comprendre l'architecture, la sécurité et le design système — pas juste la syntaxe.",
        en: "The 2026 developer no longer codes like the 2020 one. GitHub Copilot, Claude Code, Cursor, and AI development agents have transformed daily work: boilerplate code is generated automatically, bugs are detected and fixed in real-time, and tests are written by AI. Developers spend less time typing code and more time architecting, reviewing, and making critical technical decisions. Junior developers are most impacted because learning tasks (writing simple components, fixing basic bugs) are automated. Paradoxically, the entry bar rises: to be relevant, a developer must understand architecture, security, and system design — not just syntax.",
      },
      highlight: {
        fr: "Le meilleur développeur de demain n'est pas celui qui tape le plus vite, mais celui qui pense le mieux et dirige l'IA avec précision.",
        en: "Tomorrow's best developer isn't the one who types fastest, but the one who thinks best and directs AI with precision.",
      },
    },
    {
      id: "marketer-evolution",
      title: {
        fr: "L'Évolution du Marketeur",
        en: "The Marketer's Evolution",
      },
      content: {
        fr: "Le marketing est peut-être le domaine créatif le plus transformé par l'IA. La création de contenu — articles de blog, posts réseaux sociaux, emails, scripts vidéo — est désormais assistée ou entièrement générée par l'IA. L'analyse de données marketing, autrefois réservée aux data analysts, est accessible à tout marketeur via des outils conversationnels. La personnalisation à l'échelle, rêve depuis des années, devient enfin réalité grâce aux LLMs qui peuvent adapter chaque message à chaque segment. Le marketeur de demain est un stratège qui définit les objectifs, le ton et la direction créative, puis orchestre des outils IA pour exécuter à une échelle et une vitesse impossibles manuellement.",
        en: "Marketing is perhaps the creative domain most transformed by AI. Content creation — blog posts, social media posts, emails, video scripts — is now assisted or entirely generated by AI. Marketing data analysis, once reserved for data analysts, is accessible to any marketer via conversational tools. Personalization at scale, a dream for years, is finally becoming reality thanks to LLMs that can adapt each message to each segment. Tomorrow's marketer is a strategist who defines objectives, tone, and creative direction, then orchestrates AI tools to execute at a scale and speed impossible manually.",
      },
      bullets: {
        fr: [
          "Contenu : De la rédaction à la direction éditoriale et au quality control",
          "Analytics : De l'analyse manuelle à la conversation avec les données",
          "Personnalisation : De segments larges à l'hyper-personnalisation individuelle",
          "Stratégie : Plus de temps pour la vision, moins pour l'exécution",
        ],
        en: [
          "Content: From writing to editorial direction and quality control",
          "Analytics: From manual analysis to conversing with data",
          "Personalization: From broad segments to individual hyper-personalization",
          "Strategy: More time for vision, less for execution",
        ],
      },
    },
    {
      id: "new-roles",
      title: {
        fr: "Les Nouveaux Métiers AI-Native",
        en: "New AI-Native Roles",
      },
      content: {
        fr: "L'IA ne fait pas que transformer les métiers existants — elle en crée de nouveaux. Le Prompt Engineer conçoit et optimise les interactions humain-IA pour maximiser la qualité des outputs. L'AI Ops Engineer gère l'infrastructure, le monitoring et le déploiement des systèmes IA en production. L'AI Product Manager définit la stratégie produit pour les fonctionnalités IA, en naviguant les contraintes techniques et éthiques. Le Conversation Designer crée les parcours d'interaction pour les chatbots et assistants IA. Le Data Curator s'assure que les données d'entraînement et de RAG sont de qualité optimale. Ces rôles n'existaient pas il y a trois ans et sont aujourd'hui parmi les plus recherchés du marché.",
        en: "AI doesn't just transform existing jobs — it creates new ones. The Prompt Engineer designs and optimizes human-AI interactions to maximize output quality. The AI Ops Engineer manages infrastructure, monitoring, and deployment of AI systems in production. The AI Product Manager defines product strategy for AI features, navigating technical and ethical constraints. The Conversation Designer creates interaction journeys for chatbots and AI assistants. The Data Curator ensures training and RAG data are of optimal quality. These roles didn't exist three years ago and are now among the most sought-after on the market.",
      },
      bullets: {
        fr: [
          "Prompt Engineer : Conception et optimisation des interactions avec les LLMs",
          "AI Ops Engineer : Infrastructure, monitoring et déploiement des systèmes IA",
          "AI Product Manager : Stratégie produit pour les fonctionnalités IA",
          "Conversation Designer : Parcours d'interaction pour chatbots et assistants",
          "Data Curator : Qualité et gouvernance des données pour l'IA",
          "AI Ethics Officer : Conformité éthique et réglementaire de l'IA",
        ],
        en: [
          "Prompt Engineer: Designing and optimizing interactions with LLMs",
          "AI Ops Engineer: Infrastructure, monitoring, and deployment of AI systems",
          "AI Product Manager: Product strategy for AI features",
          "Conversation Designer: Interaction journeys for chatbots and assistants",
          "Data Curator: Data quality and governance for AI",
          "AI Ethics Officer: Ethical and regulatory AI compliance",
        ],
      },
    },
    {
      id: "skills-that-matter",
      title: {
        fr: "Les Compétences qui Comptent Plus que Jamais",
        en: "Skills That Matter More Than Ever",
      },
      content: {
        fr: "Dans un monde où l'IA peut exécuter rapidement, les compétences humaines deviennent le vrai différenciateur. La pensée critique — la capacité à évaluer, questionner et améliorer les outputs de l'IA — est fondamentale. La communication et la narration permettent de transformer des données et des analyses en histoires convaincantes qui inspirent l'action. L'empathie et la compréhension des besoins humains restent impossibles à automatiser et sont au cœur du design, du marketing et du product management. La capacité d'apprentissage continu — s'adapter à de nouveaux outils tous les six mois — distingue ceux qui surfent la vague de ceux qui la subissent.",
        en: "In a world where AI can execute quickly, human skills become the real differentiator. Critical thinking — the ability to evaluate, question, and improve AI outputs — is fundamental. Communication and storytelling allow transforming data and analyses into compelling stories that inspire action. Empathy and understanding of human needs remain impossible to automate and are at the heart of design, marketing, and product management. The ability for continuous learning — adapting to new tools every six months — distinguishes those who ride the wave from those who are swept by it.",
      },
      highlight: {
        fr: "Les compétences les plus précieuses en 2026 sont celles que l'IA ne peut pas reproduire : empathie, jugement, créativité originale et leadership.",
        en: "The most valuable skills in 2026 are those AI cannot replicate: empathy, judgment, original creativity, and leadership.",
      },
      bullets: {
        fr: [
          "Pensée critique : Évaluer et améliorer les outputs IA",
          "Communication : Transformer les insights en récits convaincants",
          "Empathie : Comprendre les besoins humains profonds",
          "Adaptabilité : Apprendre de nouveaux outils en continu",
          "Vision stratégique : Voir au-delà de l'exécution quotidienne",
          "Collaboration humain-IA : Orchestrer efficacement les outils IA",
        ],
        en: [
          "Critical thinking: Evaluating and improving AI outputs",
          "Communication: Transforming insights into compelling narratives",
          "Empathy: Understanding deep human needs",
          "Adaptability: Continuously learning new tools",
          "Strategic vision: Seeing beyond daily execution",
          "Human-AI collaboration: Effectively orchestrating AI tools",
        ],
      },
    },
    {
      id: "ai-augmented-career",
      title: {
        fr: "Construire une Carrière Augmentée par l'IA",
        en: "Building an AI-Augmented Career",
      },
      content: {
        fr: "Construire une carrière augmentée par l'IA ne signifie pas devenir un expert en machine learning. Cela signifie intégrer l'IA dans votre workflow quotidien pour multiplier votre impact. Un designer qui maîtrise v0, Midjourney et Claude produit en une journée ce qu'un designer classique produit en une semaine — pas parce qu'il est meilleur, mais parce qu'il est mieux outillé. La clé est de construire un stack d'outils IA personnel adapté à votre métier et de l'optimiser continuellement. Documentez vos workflows augmentés, partagez-les avec votre communauté, et positionnez-vous comme un expert de la collaboration humain-IA dans votre domaine.",
        en: "Building an AI-augmented career doesn't mean becoming a machine learning expert. It means integrating AI into your daily workflow to multiply your impact. A designer who masters v0, Midjourney, and Claude produces in one day what a traditional designer produces in a week — not because they're better, but because they're better equipped. The key is to build a personal AI tool stack adapted to your profession and continuously optimize it. Document your augmented workflows, share them with your community, and position yourself as an expert in human-AI collaboration in your field.",
      },
      bullets: {
        fr: [
          "Construire un stack IA personnel adapté à votre métier",
          "Documenter et partager vos workflows augmentés",
          "Se positionner comme expert de la collaboration humain-IA",
          "Mesurer votre productivité avant/après pour quantifier l'impact",
        ],
        en: [
          "Build a personal AI stack adapted to your profession",
          "Document and share your augmented workflows",
          "Position yourself as a human-AI collaboration expert",
          "Measure your before/after productivity to quantify impact",
        ],
      },
    },
    {
      id: "continuous-learning",
      title: {
        fr: "Stratégies d'Apprentissage Continu",
        en: "Continuous Learning Strategies",
      },
      content: {
        fr: "Dans un domaine qui évolue aussi vite que l'IA, l'apprentissage continu n'est pas un luxe — c'est une nécessité de survie professionnelle. Mais attention au piège du 'shiny object syndrome' : courir après chaque nouvel outil sans en maîtriser aucun est contre-productif. La stratégie optimale est le 'T-shape learning' : une compréhension large de l'écosystème IA (la barre horizontale du T) combinée à une expertise profonde sur 2-3 outils clés pour votre métier (la barre verticale). Consacrez 30 minutes par jour à la veille IA — newsletters, podcasts, expérimentation — et réservez un créneau hebdomadaire plus long pour approfondir un outil ou une technique spécifique.",
        en: "In a field evolving as fast as AI, continuous learning isn't a luxury — it's a professional survival necessity. But beware the 'shiny object syndrome' trap: chasing every new tool without mastering any is counterproductive. The optimal strategy is 'T-shape learning': broad understanding of the AI ecosystem (the T's horizontal bar) combined with deep expertise in 2-3 key tools for your profession (the vertical bar). Dedicate 30 minutes daily to AI monitoring — newsletters, podcasts, experimentation — and reserve a longer weekly slot to deepen a specific tool or technique.",
      },
      bullets: {
        fr: [
          "Veille quotidienne : 30 min/jour (newsletters, podcasts, Twitter/X)",
          "Deep dive hebdomadaire : 2h/semaine sur un outil ou une technique",
          "Projet personnel mensuel : Appliquer les apprentissages sur un cas concret",
          "Communauté : Rejoindre des groupes de pairs pour partager et apprendre",
          "T-shape : Large compréhension + expertise profonde sur 2-3 outils",
        ],
        en: [
          "Daily monitoring: 30 min/day (newsletters, podcasts, Twitter/X)",
          "Weekly deep dive: 2h/week on a tool or technique",
          "Monthly personal project: Apply learnings to a concrete case",
          "Community: Join peer groups to share and learn",
          "T-shape: Broad understanding + deep expertise on 2-3 tools",
        ],
      },
    },
    {
      id: "human-advantage",
      title: {
        fr: "L'Avantage Humain : Ce que l'IA Ne Sait Pas Faire",
        en: "The Human Advantage: What AI Can't Do",
      },
      content: {
        fr: "Malgré ses capacités impressionnantes, l'IA a des limites fondamentales qui constituent votre avantage compétitif durable. L'IA ne comprend pas véritablement les émotions humaines — elle les simule. Elle ne peut pas construire de relations authentiques avec les clients et les utilisateurs. Elle ne sait pas naviguer les dynamiques politiques d'une organisation ou inspirer une équipe dans un moment difficile. Elle ne peut pas avoir l'intuition créative qui vient d'années d'expérience vécue, de lectures, de voyages et de rencontres. Elle excelle dans l'exécution mais peine dans le jugement, l'éthique et la vision long terme. Ces compétences humaines ne sont pas un vestige du passé — elles sont votre superpouvoir futur.",
        en: "Despite its impressive capabilities, AI has fundamental limitations that constitute your lasting competitive advantage. AI doesn't truly understand human emotions — it simulates them. It can't build authentic relationships with clients and users. It doesn't know how to navigate an organization's political dynamics or inspire a team during difficult moments. It can't have the creative intuition that comes from years of lived experience, reading, travel, and encounters. It excels in execution but struggles with judgment, ethics, and long-term vision. These human skills aren't a vestige of the past — they're your future superpower.",
      },
      highlight: {
        fr: "L'IA est le meilleur exécutant jamais créé. Mais elle reste un outil sans intention, sans empathie et sans vision. C'est là que vous intervenez.",
        en: "AI is the best executor ever created. But it remains a tool without intention, empathy, or vision. That's where you come in.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : Prospérer dans l'Ère de l'IA",
        en: "Conclusion: Thriving in the AI Era",
      },
      content: {
        fr: "L'IA ne marque pas la fin des métiers créatifs — elle marque le début d'une nouvelle ère créative. Les professionnels qui prospéreront sont ceux qui embrassent la technologie sans perdre leur humanité. Ceux qui utilisent l'IA pour amplifier leur créativité plutôt que la remplacer. Ceux qui investissent dans les compétences que l'IA ne peut pas reproduire tout en maîtrisant les outils qu'elle met à leur disposition. L'avenir appartient aux créatifs augmentés — des professionnels qui combinent expertise humaine profonde et maîtrise des outils IA pour produire un travail d'une qualité et d'une rapidité sans précédent. Votre métier ne disparaît pas. Il évolue. Et c'est à vous de décider si vous subissez cette évolution ou si vous la menez.",
        en: "AI doesn't mark the end of creative professions — it marks the beginning of a new creative era. The professionals who will thrive are those who embrace technology without losing their humanity. Those who use AI to amplify their creativity rather than replace it. Those who invest in skills AI cannot replicate while mastering the tools it provides. The future belongs to augmented creatives — professionals who combine deep human expertise and AI tool mastery to produce work of unprecedented quality and speed. Your job isn't disappearing. It's evolving. And it's up to you to decide whether you endure this evolution or lead it.",
      },
      highlight: {
        fr: "Ne soyez pas remplacé par l'IA. Soyez le professionnel augmenté que l'IA ne pourra jamais être seule.",
        en: "Don't be replaced by AI. Be the augmented professional that AI can never be alone.",
      },
    },
  ],
  sources: [
    { id: 1, label: "World Economic Forum — Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
    { id: 2, label: "McKinsey — The State of AI in 2025", url: "https://www.mckinsey.com" },
    { id: 3, label: "Stanford HAI — AI Index Report 2025", url: "https://aiindex.stanford.edu" },
    { id: 4, label: "Jakob Nielsen — AI and UX Design", url: "https://www.nngroup.com" },
    { id: 5, label: "GitHub — Octoverse Report: AI Impact on Development", url: "https://github.blog/news-insights/octoverse/" },
    { id: 6, label: "Harvard Business Review — How AI Is Changing Creative Work", url: "https://hbr.org" },
    { id: 7, label: "IDEO — Design in the Age of AI", url: "https://www.ideo.com" },
    { id: 8, label: "Anthropic — The Responsible Development of AI", url: "https://www.anthropic.com" },
  ],
};
