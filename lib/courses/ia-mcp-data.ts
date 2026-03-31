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

export const iaMcpData: CourseData = {
  slug: "ia-mcp",
  chapter: 20,
  title: {
    fr: "MCP : Connecter l'IA a Votre Stack",
    en: "MCP: Connecting AI to Your Stack",
  },
  subtitle: {
    fr: "Le Protocole Qui Rend l'IA Operationnelle",
    en: "The Protocol That Makes AI Operational",
  },
  readingTime: 18,
  description: {
    fr: "Deep dive dans le Model Context Protocol -- ce que c'est, comment ca marche, les serveurs disponibles (GitHub, Slack, Figma, bases de donnees, etc.), construire des serveurs MCP custom, et les considerations de securite.",
    en: "Deep dive into Model Context Protocol -- what it is, how it works, available servers (GitHub, Slack, Figma, databases, etc.), building custom MCP servers, and security considerations.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "L'IA piegee dans une boite de texte",
        en: "AI trapped in a text box",
      },
      content: {
        fr: "Pendant des annees, l'IA generative a ete piegee dans une boite de texte. Vous copiez des donnees, les collez dans un chatbot, obtenez une reponse, puis la recopiez dans un autre outil. Ce va-et-vient permanent entre les outils est le goulot d'etranglement numero un de la productivite IA. Imaginez un chirurgien qui devrait sortir du bloc operatoire pour aller chercher chaque instrument un par un dans un autre batiment -- c'est exactement ce que nous faisons avec l'IA aujourd'hui. Le Model Context Protocol (MCP) est la solution a ce probleme. Il permet a l'IA de se connecter directement a vos outils, vos donnees, vos services, sans copier-coller, sans quitter le contexte de travail. MCP est aux LLMs ce que USB a ete aux peripheriques : un protocole universel qui connecte tout.",
        en: "For years, generative AI has been trapped in a text box. You copy data, paste it into a chatbot, get an answer, then copy it back into another tool. This permanent back-and-forth between tools is the number one AI productivity bottleneck. Imagine a surgeon who has to leave the operating room to go get each instrument one by one from another building -- that's exactly what we do with AI today. The Model Context Protocol (MCP) is the solution to this problem. It allows AI to connect directly to your tools, your data, your services, without copy-pasting, without leaving the work context. MCP is to LLMs what USB was to peripherals: a universal protocol that connects everything.",
      },
      highlight: {
        fr: "MCP est le 'USB de l'IA'. Avant USB, chaque peripherique avait son propre connecteur. Avant MCP, chaque integration IA etait un developpement custom. MCP standardise la connexion entre l'IA et le monde reel.",
        en: "MCP is the 'USB of AI'. Before USB, every peripheral had its own connector. Before MCP, every AI integration was custom development. MCP standardizes the connection between AI and the real world.",
      },
    },
    {
      id: "what-is-mcp",
      title: {
        fr: "Qu'est-ce que MCP exactement ?",
        en: "What is MCP exactly?",
      },
      content: {
        fr: "Le Model Context Protocol (MCP) est un protocole ouvert cree par Anthropic qui standardise la facon dont les applications d'IA se connectent a des sources de donnees et des outils externes. Concretement, MCP definit un langage commun pour que n'importe quel LLM puisse interagir avec n'importe quel service : lire des fichiers GitHub, envoyer des messages Slack, interroger une base de donnees, modifier un design Figma, tout cela directement depuis la conversation IA. Avant MCP, chaque integration etait un developpement sur mesure -- un plugin ChatGPT ne fonctionnait pas avec Claude, un connecteur Gemini ne fonctionnait pas avec Copilot. MCP casse ces silos en creant un standard universel. C'est un protocole open-source, soutenu par une communaute croissante, et adopte par la majorite des acteurs majeurs de l'ecosysteme IA.",
        en: "The Model Context Protocol (MCP) is an open protocol created by Anthropic that standardizes how AI applications connect to external data sources and tools. Concretely, MCP defines a common language so any LLM can interact with any service: read GitHub files, send Slack messages, query a database, modify a Figma design, all directly from the AI conversation. Before MCP, each integration was custom development -- a ChatGPT plugin didn't work with Claude, a Gemini connector didn't work with Copilot. MCP breaks these silos by creating a universal standard. It's an open-source protocol, supported by a growing community, and adopted by the majority of major players in the AI ecosystem.",
      },
      bullets: {
        fr: [
          "Protocole ouvert et open-source, cree par Anthropic",
          "Standardise la connexion entre LLMs et outils externes",
          "Agnostique du modele : fonctionne avec Claude, GPT, Gemini, etc.",
          "Supporte trois types de capacites : tools, resources, prompts",
          "Adopte par Claude Code, Cursor, Windsurf, et de nombreux clients IA",
        ],
        en: [
          "Open and open-source protocol, created by Anthropic",
          "Standardizes the connection between LLMs and external tools",
          "Model-agnostic: works with Claude, GPT, Gemini, etc.",
          "Supports three types of capabilities: tools, resources, prompts",
          "Adopted by Claude Code, Cursor, Windsurf, and many AI clients",
        ],
      },
    },
    {
      id: "architecture",
      title: {
        fr: "Architecture : client, serveur et transport",
        en: "Architecture: client, server and transport",
      },
      content: {
        fr: "L'architecture MCP repose sur trois composants fondamentaux. Le client MCP est l'application IA qui consomme les services -- Claude Code, Cursor, ou tout client compatible. Le serveur MCP est le programme qui expose les capacites d'un outil externe -- un serveur GitHub MCP expose les actions GitHub (lire les issues, creer des PRs, merger des branches), un serveur Figma MCP expose les actions Figma (lire les designs, exporter des assets). Le transport est le mecanisme de communication entre client et serveur, generalement stdio (communication locale via stdin/stdout) ou SSE (Server-Sent Events pour les serveurs distants). Cette architecture decouplée signifie que n'importe qui peut creer un serveur MCP pour n'importe quel service, et il fonctionnera automatiquement avec tous les clients compatibles. C'est cette modularite qui rend MCP si puissant.",
        en: "The MCP architecture rests on three fundamental components. The MCP client is the AI application that consumes services -- Claude Code, Cursor, or any compatible client. The MCP server is the program that exposes an external tool's capabilities -- a GitHub MCP server exposes GitHub actions (read issues, create PRs, merge branches), a Figma MCP server exposes Figma actions (read designs, export assets). The transport is the communication mechanism between client and server, usually stdio (local communication via stdin/stdout) or SSE (Server-Sent Events for remote servers). This decoupled architecture means anyone can create an MCP server for any service, and it will automatically work with all compatible clients. It's this modularity that makes MCP so powerful.",
      },
      highlight: {
        fr: "L'analogie parfaite : le client MCP est votre navigateur, le serveur MCP est le site web, et le transport est HTTP. Comme pour le web, n'importe qui peut creer un serveur et n'importe quel client peut s'y connecter.",
        en: "The perfect analogy: the MCP client is your browser, the MCP server is the website, and the transport is HTTP. Like the web, anyone can create a server and any client can connect to it.",
      },
    },
    {
      id: "available-servers",
      title: {
        fr: "Les serveurs MCP disponibles : officiels et communautaires",
        en: "Available MCP servers: official and community",
      },
      content: {
        fr: "L'ecosysteme de serveurs MCP a explose en 2025-2026. Les serveurs officiels maintenus par les equipes des services incluent GitHub (gestion complete de repositories), Slack (lecture et envoi de messages), Google Drive (acces aux documents), et Sentry (monitoring d'erreurs). La communaute a cree des centaines de serveurs additionnels : Figma (lecture de designs et extraction de tokens), PostgreSQL et MySQL (requetes base de donnees en langage naturel), Notion (lecture et ecriture de pages), Jira (gestion de tickets), AWS (operations cloud), et bien d'autres. Le registre MCP (mcp.so) repertorie tous les serveurs disponibles avec leur niveau de maturite. La qualite varie -- certains serveurs communautaires sont excellents, d'autres sont des prototypes fragiles. Privilegiez les serveurs avec une maintenance active et une documentation claire.",
        en: "The MCP server ecosystem exploded in 2025-2026. Official servers maintained by service teams include GitHub (complete repository management), Slack (reading and sending messages), Google Drive (document access), and Sentry (error monitoring). The community has created hundreds of additional servers: Figma (reading designs and extracting tokens), PostgreSQL and MySQL (natural language database queries), Notion (reading and writing pages), Jira (ticket management), AWS (cloud operations), and many more. The MCP registry (mcp.so) lists all available servers with their maturity level. Quality varies -- some community servers are excellent, others are fragile prototypes. Prefer servers with active maintenance and clear documentation.",
      },
      bullets: {
        fr: [
          "GitHub MCP : issues, PRs, branches, code review, deployments",
          "Figma MCP : lecture de designs, extraction de tokens, inspection de composants",
          "Slack MCP : lecture de canaux, envoi de messages, recherche",
          "PostgreSQL/MySQL MCP : requetes en langage naturel, schema inspection",
          "Google Drive MCP : lecture, recherche et organisation de documents",
          "Registre complet : mcp.so et modelcontextprotocol.io",
        ],
        en: [
          "GitHub MCP: issues, PRs, branches, code review, deployments",
          "Figma MCP: reading designs, extracting tokens, inspecting components",
          "Slack MCP: reading channels, sending messages, searching",
          "PostgreSQL/MySQL MCP: natural language queries, schema inspection",
          "Google Drive MCP: reading, searching and organizing documents",
          "Complete registry: mcp.so and modelcontextprotocol.io",
        ],
      },
    },
    {
      id: "connecting-github",
      title: {
        fr: "Connecter Claude Code a GitHub : le workflow ultime",
        en: "Connecting Claude Code to GitHub: the ultimate workflow",
      },
      content: {
        fr: "La connexion Claude Code + GitHub via MCP est probablement le cas d'usage le plus transformateur. Une fois le serveur GitHub MCP configure, Claude Code peut directement lire les issues ouvertes, analyser les pull requests, ecrire du code, creer des commits, pousser des branches, et ouvrir des PRs -- le tout sans quitter votre terminal. Le workflow devient : vous ouvrez une issue GitHub, vous dites a Claude Code 'resous l'issue #42', il lit l'issue, analyse le code concerne, ecrit le fix, lance les tests, cree un commit avec un message structure, pousse la branche et ouvre une PR avec une description detaillee. Ce workflow qui prenait 2 heures se fait en 5 minutes avec verification humaine. La configuration se fait en ajoutant le serveur GitHub dans votre fichier de configuration Claude Code avec votre token GitHub personnel.",
        en: "The Claude Code + GitHub connection via MCP is probably the most transformative use case. Once the GitHub MCP server is configured, Claude Code can directly read open issues, analyze pull requests, write code, create commits, push branches, and open PRs -- all without leaving your terminal. The workflow becomes: you open a GitHub issue, you tell Claude Code 'resolve issue #42', it reads the issue, analyzes the relevant code, writes the fix, runs tests, creates a commit with a structured message, pushes the branch and opens a PR with a detailed description. This workflow that took 2 hours is done in 5 minutes with human verification. Configuration is done by adding the GitHub server to your Claude Code configuration file with your personal GitHub token.",
      },
      highlight: {
        fr: "Claude Code + GitHub MCP = le workflow de reve. Issue → analyse → code → tests → commit → PR, le tout en une seule conversation. La verification humaine reste essentielle, mais 90% du travail mecanique est automatise.",
        en: "Claude Code + GitHub MCP = the dream workflow. Issue → analysis → code → tests → commit → PR, all in a single conversation. Human verification remains essential, but 90% of mechanical work is automated.",
      },
    },
    {
      id: "connecting-figma",
      title: {
        fr: "Connecter Claude Code a Figma : du design au code",
        en: "Connecting Claude Code to Figma: from design to code",
      },
      content: {
        fr: "La connexion Figma via MCP ouvre une possibilite extraordinaire : Claude Code peut lire vos maquettes Figma et generer le code correspondant en respectant exactement votre design system. Le serveur Figma MCP permet d'inspecter les composants, d'extraire les proprietes visuelles (couleurs, espacements, typographies, bordures), de lire la hierarchie des layers, et d'acceder aux design tokens. En combinaison avec un CLAUDE.md qui decrit vos conventions de composants, Claude Code peut transformer une maquette Figma en composant React fonctionnel en quelques secondes. Ce n'est pas du pixel-perfect automatique -- c'est un premier jet precis a 80-90% que vous affinez ensuite. Pour les designers qui codent ou les equipes design-dev, c'est un gain de temps considerable sur la phase d'integration.",
        en: "The Figma connection via MCP opens an extraordinary possibility: Claude Code can read your Figma mockups and generate corresponding code while exactly respecting your design system. The Figma MCP server allows inspecting components, extracting visual properties (colors, spacing, typography, borders), reading the layer hierarchy, and accessing design tokens. Combined with a CLAUDE.md that describes your component conventions, Claude Code can transform a Figma mockup into a functional React component in seconds. It's not automatic pixel-perfect -- it's an 80-90% accurate first draft that you then refine. For designers who code or design-dev teams, it's a considerable time saver on the integration phase.",
      },
      bullets: {
        fr: [
          "Inspection de composants : proprietes, styles, variants, auto-layout",
          "Extraction de tokens : couleurs, typographies, espacements, ombres",
          "Hierarchie de layers : comprendre la structure du design",
          "Screenshots de composants : reference visuelle pour la generation de code",
          "Workflow ideal : maquette Figma → Claude Code → composant React → ajustement humain",
        ],
        en: [
          "Component inspection: properties, styles, variants, auto-layout",
          "Token extraction: colors, typography, spacing, shadows",
          "Layer hierarchy: understand the design structure",
          "Component screenshots: visual reference for code generation",
          "Ideal workflow: Figma mockup → Claude Code → React component → human adjustment",
        ],
      },
    },
    {
      id: "connecting-databases",
      title: {
        fr: "Connecter Claude Code aux bases de donnees",
        en: "Connecting Claude Code to databases",
      },
      content: {
        fr: "Les serveurs MCP pour bases de donnees (PostgreSQL, MySQL, SQLite, Supabase) permettent a Claude Code d'interroger vos donnees en langage naturel. Au lieu d'ecrire des requetes SQL complexes, vous dites 'montre-moi les 10 utilisateurs les plus actifs ce mois-ci avec leur nombre de commandes' et Claude Code genere et execute la requete SQL appropriee. Mais le vrai pouvoir va au-dela des requetes : Claude Code peut analyser votre schema, identifier les problemes de performance (index manquants, requetes N+1), generer des migrations, et meme proposer des optimisations architecturales. Attention cependant : connecter une IA a une base de donnees de production requiert des precautions serieuses. Utilisez toujours un utilisateur en lecture seule pour les analyses, et ne donnez les droits d'ecriture que sur des environnements de dev/staging avec des sauvegardes recentes.",
        en: "MCP servers for databases (PostgreSQL, MySQL, SQLite, Supabase) allow Claude Code to query your data in natural language. Instead of writing complex SQL queries, you say 'show me the 10 most active users this month with their order count' and Claude Code generates and executes the appropriate SQL query. But the real power goes beyond queries: Claude Code can analyze your schema, identify performance issues (missing indexes, N+1 queries), generate migrations, and even propose architectural optimizations. However, beware: connecting an AI to a production database requires serious precautions. Always use a read-only user for analyses, and only give write access on dev/staging environments with recent backups.",
      },
      highlight: {
        fr: "Regle absolue : JAMAIS de connexion IA en ecriture sur une base de donnees de production. Utilisez un utilisateur en lecture seule. Les analyses IA sont puissantes, mais une requete DELETE mal formulee est irreversible.",
        en: "Absolute rule: NEVER give AI write access to a production database. Use a read-only user. AI analyses are powerful, but a poorly formulated DELETE query is irreversible.",
      },
    },
    {
      id: "connecting-slack",
      title: {
        fr: "Connecter Claude Code a Slack et email",
        en: "Connecting Claude Code to Slack and email",
      },
      content: {
        fr: "La connexion a Slack via MCP permet a Claude Code de lire les messages de canaux specifiques, de rechercher dans l'historique des conversations, et d'envoyer des messages. Les cas d'usage sont multiples : generer un resume quotidien des discussions d'un canal, rediger des reponses contextuelles en se basant sur l'historique du thread, ou automatiser des notifications de deploiement. Pour l'email (via Gmail MCP), Claude Code peut lire, rechercher et rediger des emails directement. Imaginez : vous demandez 'resume tous les emails de ce client cette semaine et redige une reponse qui adresse tous les points souleves' -- Claude Code lit les emails, synthetise, et prepare un brouillon que vous n'avez qu'a relire et envoyer. Ces integrations de communication sont parmi les plus utiles au quotidien car elles automatisent la partie la plus chronophage du travail de knowledge worker : la gestion de la communication.",
        en: "The Slack connection via MCP allows Claude Code to read messages from specific channels, search conversation history, and send messages. Use cases are multiple: generate a daily summary of channel discussions, draft contextual replies based on thread history, or automate deployment notifications. For email (via Gmail MCP), Claude Code can read, search, and draft emails directly. Imagine: you ask 'summarize all emails from this client this week and draft a response addressing all points raised' -- Claude Code reads the emails, synthesizes, and prepares a draft you just need to review and send. These communication integrations are among the most useful daily because they automate the most time-consuming part of knowledge worker work: communication management.",
      },
      bullets: {
        fr: [
          "Slack MCP : lecture de canaux, recherche d'historique, envoi de messages",
          "Gmail MCP : lecture, recherche, redaction de brouillons",
          "Resume quotidien : synthese automatique des discussions d'equipe",
          "Reponses contextuelles : reponses basees sur l'historique du thread",
          "Notifications automatiques : alertes de deploiement, rapports de bugs",
        ],
        en: [
          "Slack MCP: channel reading, history search, message sending",
          "Gmail MCP: reading, searching, draft writing",
          "Daily summary: automatic synthesis of team discussions",
          "Contextual replies: responses based on thread history",
          "Automatic notifications: deployment alerts, bug reports",
        ],
      },
    },
    {
      id: "building-custom",
      title: {
        fr: "Construire un serveur MCP custom",
        en: "Building a custom MCP server",
      },
      content: {
        fr: "Quand aucun serveur MCP existant ne repond a votre besoin, vous pouvez en construire un. Les SDK officiels existent en Python (FastMCP) et TypeScript, et rendent la creation d'un serveur MCP remarquablement simple. Un serveur MCP basique ne fait que definir des 'tools' (fonctions que l'IA peut appeler) et des 'resources' (donnees que l'IA peut lire). Par exemple, pour connecter un CRM interne, vous creez des tools comme `search_clients`, `get_client_details`, `update_client_status` qui encapsulent vos appels API internes. Le serveur gere l'authentification, la validation des parametres, et la transformation des reponses dans un format que l'IA peut comprendre. Un serveur MCP basique peut etre cree en moins d'une heure. Pour les cas avancees, vous pouvez ajouter des resources (fichiers, schemas), des prompts (templates pre-configures), et de la gestion d'etat.",
        en: "When no existing MCP server meets your need, you can build one. Official SDKs exist in Python (FastMCP) and TypeScript, making MCP server creation remarkably simple. A basic MCP server just defines 'tools' (functions the AI can call) and 'resources' (data the AI can read). For example, to connect an internal CRM, you create tools like `search_clients`, `get_client_details`, `update_client_status` that encapsulate your internal API calls. The server handles authentication, parameter validation, and response transformation into a format the AI can understand. A basic MCP server can be created in less than an hour. For advanced cases, you can add resources (files, schemas), prompts (pre-configured templates), and state management.",
      },
      bullets: {
        fr: [
          "SDK Python (FastMCP) : le plus rapide pour prototyper un serveur",
          "SDK TypeScript : ideal pour les equipes JavaScript/Node.js",
          "Tools : fonctions que l'IA peut appeler (CRUD, recherche, actions)",
          "Resources : donnees que l'IA peut lire (fichiers, schemas, configs)",
          "Prompts : templates pre-configures pour des taches specifiques",
        ],
        en: [
          "Python SDK (FastMCP): fastest for prototyping a server",
          "TypeScript SDK: ideal for JavaScript/Node.js teams",
          "Tools: functions the AI can call (CRUD, search, actions)",
          "Resources: data the AI can read (files, schemas, configs)",
          "Prompts: pre-configured templates for specific tasks",
        ],
      },
    },
    {
      id: "security",
      title: {
        fr: "Securite et permissions : les garde-fous essentiels",
        en: "Security and permissions: essential guardrails",
      },
      content: {
        fr: "Connecter une IA a vos systemes internes souleve des questions de securite fondamentales. La regle numero un : le principe du moindre privilege. Chaque serveur MCP ne doit avoir acces qu'aux donnees et actions strictement necessaires. Un serveur GitHub pour la lecture de code n'a pas besoin de droits d'ecriture. Un serveur de base de donnees pour l'analyse n'a pas besoin de droits DELETE. Deuxiemement, l'audit trail : loggez chaque action executee via MCP pour pouvoir tracer qui a fait quoi et quand. Troisiemement, la validation des inputs : un serveur MCP doit valider et sanitizer tous les parametres recus de l'IA -- n'oubliez pas que l'IA peut etre manipulee via prompt injection. Quatriemement, les secrets : ne hardcodez jamais de tokens ou credentials dans les configurations MCP -- utilisez des variables d'environnement ou un gestionnaire de secrets. Enfin, testez votre serveur MCP comme n'importe quel code critique : tests unitaires, tests d'integration, revue de code.",
        en: "Connecting an AI to your internal systems raises fundamental security questions. Rule number one: the principle of least privilege. Each MCP server should only have access to strictly necessary data and actions. A GitHub server for code reading doesn't need write access. A database server for analysis doesn't need DELETE rights. Second, audit trail: log every action executed via MCP to trace who did what and when. Third, input validation: an MCP server must validate and sanitize all parameters received from the AI -- remember that AI can be manipulated via prompt injection. Fourth, secrets: never hardcode tokens or credentials in MCP configurations -- use environment variables or a secrets manager. Finally, test your MCP server like any critical code: unit tests, integration tests, code review.",
      },
      highlight: {
        fr: "Chaque serveur MCP est une porte d'entree dans vos systemes. Traitez-le avec le meme niveau de securite qu'une API publique : authentification, autorisation, validation, logging, et principe du moindre privilege.",
        en: "Every MCP server is a gateway into your systems. Treat it with the same security level as a public API: authentication, authorization, validation, logging, and the principle of least privilege.",
      },
    },
    {
      id: "mcp-production",
      title: {
        fr: "MCP en production : patterns et bonnes pratiques",
        en: "MCP in production: patterns and best practices",
      },
      content: {
        fr: "Deployer MCP en production dans une equipe ou une organisation requiert une approche structuree. Premier pattern : le serveur MCP centralise. Au lieu de laisser chaque developpeur configurer ses propres serveurs, deployez des serveurs MCP partages et securises accessibles par toute l'equipe. Deuxieme pattern : le gateway MCP. Un proxy qui centralise les logs, gere les permissions par role, et applique des rate limits. Troisieme pattern : les serveurs MCP containerises (Docker) pour un deploiement reproductible et isole. Quatrieme pattern : la configuration as code -- toute la configuration MCP doit etre versionnee et revue comme du code. En 2026, des plateformes comme Cloudflare proposent des solutions MCP hebergees qui simplifient considerablement le deploiement. L'adoption de MCP en entreprise suit la meme trajectoire que l'adoption des APIs REST il y a 15 ans : les early adopters construisent des avantages competitifs significatifs.",
        en: "Deploying MCP in production in a team or organization requires a structured approach. First pattern: the centralized MCP server. Instead of letting each developer configure their own servers, deploy shared, secured MCP servers accessible by the whole team. Second pattern: the MCP gateway. A proxy that centralizes logs, manages role-based permissions, and applies rate limits. Third pattern: containerized MCP servers (Docker) for reproducible, isolated deployment. Fourth pattern: configuration as code -- all MCP configuration should be versioned and reviewed like code. In 2026, platforms like Cloudflare offer hosted MCP solutions that considerably simplify deployment. Enterprise MCP adoption follows the same trajectory as REST API adoption 15 years ago: early adopters build significant competitive advantages.",
      },
      bullets: {
        fr: [
          "Serveurs centralises : deploiement partage, securise, maintenu par l'equipe infra",
          "MCP gateway : proxy avec logs, permissions par role, rate limiting",
          "Containerisation : Docker pour un deploiement reproductible et isole",
          "Config as code : toute la configuration versionnee et revue",
          "Solutions hebergees : Cloudflare Workers, solutions SaaS emergentes",
        ],
        en: [
          "Centralized servers: shared deployment, secured, maintained by infra team",
          "MCP gateway: proxy with logs, role-based permissions, rate limiting",
          "Containerization: Docker for reproducible, isolated deployment",
          "Config as code: all configuration versioned and reviewed",
          "Hosted solutions: Cloudflare Workers, emerging SaaS solutions",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : MCP, le pont entre l'IA et le monde reel",
        en: "Conclusion: MCP, the bridge between AI and the real world",
      },
      content: {
        fr: "MCP represente un tournant dans l'evolution de l'IA generative. En passant d'un chatbot isole a un agent connecte a votre stack technique complete, l'IA cesse d'etre un outil de question-reponse pour devenir un veritable membre operationnel de votre equipe. Les organisations qui maitrisent MCP aujourd'hui construisent des avantages competitifs qui seront difficiles a rattraper. La courbe d'apprentissage est accessible : configurer un serveur GitHub MCP prend 10 minutes, connecter Figma prend 15 minutes, et les benefices sont immediats. Le vrai defi n'est pas technique -- c'est organisationnel. Il s'agit de definir quels outils connecter, quelles permissions accorder, et comment former les equipes. MCP complete le triptyque du professionnel IA moderne : le prompt engineering pour communiquer, le context engineering (CLAUDE.md) pour configurer, et MCP pour connecter. Avec ces trois competences, vous etes equipe pour l'ere de l'IA operationnelle.",
        en: "MCP represents a turning point in the evolution of generative AI. By moving from an isolated chatbot to an agent connected to your complete technical stack, AI stops being a Q&A tool to become a true operational team member. Organizations mastering MCP today are building competitive advantages that will be hard to catch up to. The learning curve is accessible: configuring a GitHub MCP server takes 10 minutes, connecting Figma takes 15 minutes, and benefits are immediate. The real challenge isn't technical -- it's organizational. It's about defining which tools to connect, which permissions to grant, and how to train teams. MCP completes the triptych of the modern AI professional: prompt engineering to communicate, context engineering (CLAUDE.md) to configure, and MCP to connect. With these three skills, you're equipped for the era of operational AI.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Anthropic - Model Context Protocol Specification",
      url: "https://modelcontextprotocol.io",
    },
    {
      id: 2,
      label: "Anthropic - MCP Documentation",
      url: "https://docs.anthropic.com/en/docs/claude-code/mcp",
    },
    {
      id: 3,
      label: "MCP Server Registry",
      url: "https://mcp.so",
    },
    {
      id: 4,
      label: "GitHub - Model Context Protocol Organization",
      url: "https://github.com/modelcontextprotocol",
    },
    {
      id: 5,
      label: "Anthropic - Building MCP Servers (Guide)",
      url: "https://modelcontextprotocol.io/quickstart/server",
    },
    {
      id: 6,
      label: "Cloudflare - MCP on Workers",
      url: "https://developers.cloudflare.com/agents/guides/remote-mcp-server/",
    },
  ],
};
