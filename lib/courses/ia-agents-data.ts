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

export const iaAgentsData: CourseData = {
  slug: "ia-agents",
  chapter: 21,
  title: {
    fr: "Systèmes Agentiques : Construire une Équipe IA",
    en: "Agentic Systems: Building an AI Team",
  },
  subtitle: {
    fr: "Quand l'IA Passe de l'Assistant au Collaborateur",
    en: "When AI Moves from Assistant to Collaborator",
  },
  readingTime: 20,
  description: {
    fr: "Comprendre les agents IA, les architectures multi-agents, les patterns d'orchestration (LangGraph, n8n), les workflows autonomes, la mémoire d'agent, l'utilisation d'outils, et quand utiliser des agents vs des prompts simples.",
    en: "Understanding AI agents, multi-agent architectures, orchestration patterns (LangGraph, n8n), autonomous workflows, agent memory, tool use, and when to use agents vs simple prompts.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Au-delà des chatbots : l'ère des agents",
        en: "Beyond chatbots: the era of agents",
      },
      content: {
        fr: "Pendant des années, l'IA conversationnelle se résumait à un échange question-réponse. Vous posiez une question, le modèle répondait, et le cycle recommençait. Mais en 2025-2026, un changement fondamental s'est opéré : les modèles de langage ne se contentent plus de répondre, ils agissent. Ils naviguent sur le web, exécutent du code, appellent des API, et orchestrent des tâches complexes de bout en bout. C'est la révolution agentique, et elle change radicalement notre rapport à l'automatisation.",
        en: "For years, conversational AI boiled down to a question-answer exchange. You asked a question, the model answered, and the cycle repeated. But in 2025-2026, a fundamental shift occurred: language models no longer just respond, they act. They browse the web, execute code, call APIs, and orchestrate complex tasks end-to-end. This is the agentic revolution, and it radically changes our relationship with automation.",
      },
      highlight: {
        fr: "Un agent IA n'est pas un chatbot amélioré. C'est un système capable de planifier, décider, et exécuter des actions de manière autonome pour atteindre un objectif donné.",
        en: "An AI agent is not an improved chatbot. It is a system capable of planning, deciding, and executing actions autonomously to achieve a given objective.",
      },
    },
    {
      id: "what-is-agent",
      title: {
        fr: "Qu'est-ce qu'un agent IA ?",
        en: "What is an AI agent?",
      },
      content: {
        fr: "Un agent IA est un système logiciel qui utilise un modèle de langage comme \"cerveau\" pour prendre des décisions et accomplir des tâches de manière autonome. Contrairement à un simple appel API qui renvoie une réponse textuelle, un agent peut observer son environnement, raisonner sur la meilleure action à entreprendre, exécuter cette action via des outils, puis évaluer le résultat pour décider de la prochaine étape. Ce cycle perception-raisonnement-action est ce qui distingue fondamentalement un agent d'un modèle de langage classique.",
        en: "An AI agent is a software system that uses a language model as its \"brain\" to make decisions and accomplish tasks autonomously. Unlike a simple API call that returns a text response, an agent can observe its environment, reason about the best action to take, execute that action via tools, and then evaluate the result to decide the next step. This perception-reasoning-action cycle is what fundamentally distinguishes an agent from a classic language model.",
      },
      bullets: {
        fr: [
          "Perception : l'agent reçoit des informations (prompt utilisateur, résultats d'outils, état du contexte)",
          "Raisonnement : le LLM analyse la situation et planifie la prochaine action",
          "Action : l'agent exécute une action concrète (appel API, lecture de fichier, requête base de données)",
          "Évaluation : l'agent vérifie le résultat et décide s'il doit continuer ou s'arrêter",
        ],
        en: [
          "Perception: the agent receives information (user prompt, tool results, context state)",
          "Reasoning: the LLM analyzes the situation and plans the next action",
          "Action: the agent executes a concrete action (API call, file read, database query)",
          "Evaluation: the agent checks the result and decides whether to continue or stop",
        ],
      },
    },
    {
      id: "agent-vs-assistant",
      title: {
        fr: "Agent vs Assistant : une différence cruciale",
        en: "Agent vs Assistant: a crucial difference",
      },
      content: {
        fr: "La confusion entre \"assistant IA\" et \"agent IA\" est fréquente, mais la distinction est essentielle. Un assistant répond à vos questions dans le cadre d'une conversation : il est réactif, attend vos instructions, et ne prend pas d'initiative. Un agent, en revanche, reçoit un objectif de haut niveau et décompose lui-même les étapes nécessaires pour l'atteindre. Il peut décider quels outils utiliser, dans quel ordre, et adapter sa stratégie en fonction des résultats intermédiaires. L'assistant est un employé qui attend qu'on lui dise quoi faire à chaque étape ; l'agent est un collaborateur à qui vous donnez une mission.",
        en: "The confusion between \"AI assistant\" and \"AI agent\" is common, but the distinction is essential. An assistant answers your questions within a conversation: it is reactive, waits for your instructions, and does not take initiative. An agent, on the other hand, receives a high-level objective and breaks down the necessary steps to achieve it on its own. It can decide which tools to use, in what order, and adapt its strategy based on intermediate results. The assistant is an employee waiting to be told what to do at each step; the agent is a collaborator you give a mission to.",
      },
      highlight: {
        fr: "Demander à ChatGPT de rédiger un email, c'est utiliser un assistant. Demander à un agent de surveiller votre boîte mail, identifier les urgences, rédiger des réponses et les envoyer après validation, c'est de l'agentique.",
        en: "Asking ChatGPT to write an email is using an assistant. Asking an agent to monitor your inbox, identify urgencies, draft responses and send them after validation is agentic.",
      },
    },
    {
      id: "architecture",
      title: {
        fr: "Architecture d'un agent : la boucle perception-raisonnement-action",
        en: "Agent architecture: the perception-reasoning-action loop",
      },
      content: {
        fr: "L'architecture fondamentale d'un agent repose sur une boucle itérative. À chaque itération, l'agent perçoit l'état actuel (résultats précédents, contexte utilisateur, données externes), utilise le LLM pour raisonner et choisir la prochaine action, exécute cette action via un outil, puis réinjecte le résultat dans la boucle. Cette architecture, souvent appelée \"ReAct\" (Reasoning + Acting), est devenue le standard de facto. Le modèle alterne entre des étapes de réflexion (\"Je dois d'abord vérifier...\") et des étapes d'action (appel d'outil), créant une trace de raisonnement transparente et debuggable.",
        en: "The fundamental architecture of an agent relies on an iterative loop. At each iteration, the agent perceives the current state (previous results, user context, external data), uses the LLM to reason and choose the next action, executes that action via a tool, then feeds the result back into the loop. This architecture, often called \"ReAct\" (Reasoning + Acting), has become the de facto standard. The model alternates between reflection steps (\"I need to first check...\") and action steps (tool calls), creating a transparent and debuggable reasoning trace.",
      },
      bullets: {
        fr: [
          "System prompt : définit le rôle, les contraintes et les objectifs de l'agent",
          "Outils disponibles : liste des fonctions que l'agent peut appeler (APIs, fichiers, bases de données)",
          "Mémoire de travail : historique des actions et résultats dans la conversation courante",
          "Condition d'arrêt : critère qui détermine quand l'agent a terminé sa mission",
        ],
        en: [
          "System prompt: defines the agent's role, constraints, and objectives",
          "Available tools: list of functions the agent can call (APIs, files, databases)",
          "Working memory: history of actions and results in the current conversation",
          "Stop condition: criterion that determines when the agent has completed its mission",
        ],
      },
    },
    {
      id: "multi-agent",
      title: {
        fr: "Systèmes multi-agents : quand un seul ne suffit pas",
        en: "Multi-agent systems: when one is not enough",
      },
      content: {
        fr: "Pour des tâches complexes, un seul agent atteint vite ses limites. Les systèmes multi-agents permettent de décomposer un problème en sous-tâches spécialisées, chacune gérée par un agent dédié. Un agent \"chef de projet\" peut coordonner un agent \"chercheur\" qui collecte des données, un agent \"analyste\" qui les interprète, et un agent \"rédacteur\" qui produit le livrable final. Cette approche reflète naturellement le fonctionnement d'une équipe humaine et permet une spécialisation qui améliore considérablement la qualité des résultats. Les architectures les plus courantes sont le modèle hiérarchique (un superviseur coordonne des sous-agents) et le modèle collaboratif (les agents communiquent entre eux).",
        en: "For complex tasks, a single agent quickly reaches its limits. Multi-agent systems allow breaking down a problem into specialized sub-tasks, each managed by a dedicated agent. A \"project manager\" agent can coordinate a \"researcher\" agent that collects data, an \"analyst\" agent that interprets it, and a \"writer\" agent that produces the final deliverable. This approach naturally reflects how human teams work and enables specialization that significantly improves result quality. The most common architectures are the hierarchical model (a supervisor coordinates sub-agents) and the collaborative model (agents communicate with each other).",
      },
      highlight: {
        fr: "Pensez à un système multi-agents comme une équipe de consultants spécialisés : chacun excelle dans son domaine, et c'est leur collaboration orchestrée qui produit un résultat supérieur à ce qu'un généraliste seul pourrait accomplir.",
        en: "Think of a multi-agent system as a team of specialized consultants: each excels in their domain, and it's their orchestrated collaboration that produces a result superior to what a single generalist could achieve.",
      },
    },
    {
      id: "orchestration",
      title: {
        fr: "Outils d'orchestration : LangGraph, CrewAI, n8n",
        en: "Orchestration tools: LangGraph, CrewAI, n8n",
      },
      content: {
        fr: "L'écosystème des outils d'orchestration d'agents a explosé en 2025-2026. LangGraph, construit sur LangChain, offre un contrôle granulaire via des graphes d'état où chaque noeud représente une étape de l'agent. CrewAI simplifie la création d'équipes d'agents avec des rôles et des objectifs définis en langage naturel. Pour les non-développeurs, n8n et Make permettent de construire des workflows agentiques visuellement, en connectant des noeuds de LLM à des actions concrètes (envoi d'email, mise à jour CRM, génération de documents). Le choix de l'outil dépend du niveau de contrôle nécessaire et des compétences techniques de l'équipe.",
        en: "The ecosystem of agent orchestration tools exploded in 2025-2026. LangGraph, built on LangChain, offers granular control via state graphs where each node represents an agent step. CrewAI simplifies creating agent teams with roles and objectives defined in natural language. For non-developers, n8n and Make allow building agentic workflows visually, connecting LLM nodes to concrete actions (sending email, CRM updates, document generation). The tool choice depends on the level of control needed and the team's technical skills.",
      },
      bullets: {
        fr: [
          "LangGraph : pour les développeurs Python, contrôle fin des flux, gestion d'état avancée, idéal pour des agents complexes",
          "CrewAI : abstraction haut niveau, définition d'agents par rôle/objectif, parfait pour du prototypage rapide",
          "n8n : orchestration visuelle no-code/low-code, connecteurs natifs vers 400+ services, accessible aux non-développeurs",
          "Autogen (Microsoft) : framework multi-agents conversationnel, agents qui dialoguent entre eux pour résoudre des problèmes",
        ],
        en: [
          "LangGraph: for Python developers, fine-grained flow control, advanced state management, ideal for complex agents",
          "CrewAI: high-level abstraction, agent definition by role/objective, perfect for rapid prototyping",
          "n8n: visual no-code/low-code orchestration, native connectors to 400+ services, accessible to non-developers",
          "Autogen (Microsoft): conversational multi-agent framework, agents that dialogue with each other to solve problems",
        ],
      },
    },
    {
      id: "memory",
      title: {
        fr: "Mémoire et état : le talon d'Achille des agents",
        en: "Memory and state: the Achilles heel of agents",
      },
      content: {
        fr: "La mémoire est l'un des défis les plus critiques dans la conception d'agents. Un agent efficace doit gérer trois types de mémoire : la mémoire de travail (le contexte de la conversation courante), la mémoire épisodique (le souvenir des interactions passées), et la mémoire sémantique (les connaissances persistantes). Sans mémoire à long terme, un agent recommence à zéro à chaque session, perdant tout le contexte accumulé. Les solutions actuelles combinent des bases vectorielles (comme Pinecone ou Weaviate) pour le stockage sémantique, des fichiers de résumé pour la mémoire épisodique, et des systèmes de cache pour optimiser les appels au LLM.",
        en: "Memory is one of the most critical challenges in agent design. An effective agent must manage three types of memory: working memory (current conversation context), episodic memory (recall of past interactions), and semantic memory (persistent knowledge). Without long-term memory, an agent starts from scratch each session, losing all accumulated context. Current solutions combine vector databases (like Pinecone or Weaviate) for semantic storage, summary files for episodic memory, and caching systems to optimize LLM calls.",
      },
      highlight: {
        fr: "Un agent sans mémoire persistante est comme un employé qui oublie tout chaque matin. La vraie puissance agentique émerge quand l'agent apprend de ses expériences passées et s'améliore au fil du temps.",
        en: "An agent without persistent memory is like an employee who forgets everything each morning. True agentic power emerges when the agent learns from past experiences and improves over time.",
      },
    },
    {
      id: "tool-use",
      title: {
        fr: "Tool use et function calling : les mains de l'agent",
        en: "Tool use and function calling: the agent's hands",
      },
      content: {
        fr: "Le \"tool use\" (ou \"function calling\") est ce qui transforme un modèle de langage passif en un agent capable d'agir sur le monde réel. Le principe est simple : on fournit au LLM une liste de fonctions disponibles avec leurs paramètres, et le modèle décide quand et comment les appeler. Un agent peut ainsi lire des fichiers, interroger des bases de données, envoyer des emails, créer des tickets Jira, ou même contrôler un navigateur web. La qualité du tool use dépend directement de la clarté des descriptions de fonctions : plus elles sont précises et bien documentées, plus l'agent les utilisera correctement. C'est un art en soi que de concevoir un bon \"tool schema\".",
        en: "\"Tool use\" (or \"function calling\") is what transforms a passive language model into an agent capable of acting on the real world. The principle is simple: you provide the LLM with a list of available functions with their parameters, and the model decides when and how to call them. An agent can thus read files, query databases, send emails, create Jira tickets, or even control a web browser. The quality of tool use directly depends on the clarity of function descriptions: the more precise and well-documented they are, the more correctly the agent will use them. Designing a good \"tool schema\" is an art in itself.",
      },
      bullets: {
        fr: [
          "Définir des noms de fonctions explicites et des descriptions détaillées",
          "Typer rigoureusement les paramètres avec des exemples",
          "Prévoir des messages d'erreur clairs pour guider l'agent en cas d'échec",
          "Limiter le nombre d'outils disponibles pour éviter la confusion du modèle (10-15 max idéalement)",
        ],
        en: [
          "Define explicit function names and detailed descriptions",
          "Strictly type parameters with examples",
          "Provide clear error messages to guide the agent in case of failure",
          "Limit the number of available tools to avoid model confusion (10-15 max ideally)",
        ],
      },
    },
    {
      id: "real-world",
      title: {
        fr: "Workflows agentiques dans le monde réel",
        en: "Real-world agentic workflows",
      },
      content: {
        fr: "Les agents IA ne sont plus un concept théorique : ils sont déployés en production dans des centaines d'entreprises. Un agent de support client peut analyser un ticket, chercher dans la base de connaissances, diagnostiquer le problème, proposer une solution, et escalader au support humain si nécessaire. Un agent de veille concurrentielle peut surveiller les sites concurrents, extraire les changements de prix, analyser les tendances et générer un rapport hebdomadaire automatique. Un agent de recrutement peut parser des CV, les scorer selon des critères définis, rédiger des emails personnalisés aux candidats, et planifier des entretiens. La clé du succès est de commencer petit, avec un workflow bien défini, et d'élargir progressivement le périmètre d'autonomie.",
        en: "AI agents are no longer a theoretical concept: they are deployed in production in hundreds of companies. A customer support agent can analyze a ticket, search the knowledge base, diagnose the problem, propose a solution, and escalate to human support if needed. A competitive intelligence agent can monitor competitor websites, extract price changes, analyze trends, and generate an automatic weekly report. A recruitment agent can parse resumes, score them against defined criteria, draft personalized emails to candidates, and schedule interviews. The key to success is to start small, with a well-defined workflow, and progressively expand the scope of autonomy.",
      },
      bullets: {
        fr: [
          "Support client automatisé avec escalade intelligente",
          "Veille concurrentielle et génération de rapports",
          "Automatisation du recrutement (parsing CV, scoring, communication)",
          "Analyse de données et création de dashboards à la demande",
          "Gestion de projet agile (création de tickets, suivi, reporting)",
        ],
        en: [
          "Automated customer support with intelligent escalation",
          "Competitive intelligence and report generation",
          "Recruitment automation (CV parsing, scoring, communication)",
          "Data analysis and on-demand dashboard creation",
          "Agile project management (ticket creation, tracking, reporting)",
        ],
      },
    },
    {
      id: "autonomous-vs-supervised",
      title: {
        fr: "Agents autonomes vs supervisés : trouver l'équilibre",
        en: "Autonomous vs supervised agents: finding the balance",
      },
      content: {
        fr: "Le spectre de l'autonomie des agents va du mode \"human-in-the-loop\" (l'humain valide chaque action) au mode totalement autonome (l'agent agit sans supervision). En pratique, le bon niveau d'autonomie dépend du risque associé aux actions. Envoyer un email interne peut être automatisé ; envoyer une proposition commerciale à un client nécessite une validation humaine. La tendance actuelle est au \"supervised autonomy\" : l'agent agit librement dans un périmètre défini, mais demande une approbation pour les actions à fort impact. C'est la même logique qu'un manager qui délègue des tâches courantes mais veut valider les décisions stratégiques.",
        en: "The agent autonomy spectrum ranges from \"human-in-the-loop\" mode (the human validates each action) to fully autonomous mode (the agent acts without supervision). In practice, the right level of autonomy depends on the risk associated with actions. Sending an internal email can be automated; sending a commercial proposal to a client requires human validation. The current trend is \"supervised autonomy\": the agent acts freely within a defined perimeter but asks for approval for high-impact actions. It's the same logic as a manager who delegates routine tasks but wants to validate strategic decisions.",
      },
      highlight: {
        fr: "La règle d'or : automatisez les actions réversibles, supervisez les actions irréversibles. Un agent qui supprime un fichier doit demander confirmation ; un agent qui lit un fichier peut agir seul.",
        en: "The golden rule: automate reversible actions, supervise irreversible ones. An agent that deletes a file should ask for confirmation; an agent that reads a file can act alone.",
      },
    },
    {
      id: "risks",
      title: {
        fr: "Risques et garde-fous : les pièges à éviter",
        en: "Risks and guardrails: pitfalls to avoid",
      },
      content: {
        fr: "Les systèmes agentiques introduisent des risques spécifiques qu'il faut anticiper. Les boucles infinies sont le danger numéro un : un agent mal configuré peut tourner en rond, consommant des tokens et du temps sans progresser. L'injection de prompt via des données externes (un email malveillant, un document piégé) peut détourner le comportement de l'agent. L'hallucination est amplifiée car l'agent peut agir sur des informations fausses, avec des conséquences réelles. Les garde-fous essentiels incluent des limites de budget (tokens et appels API), des timeouts, des listes blanches d'actions autorisées, et une journalisation complète de toutes les actions pour l'audit.",
        en: "Agentic systems introduce specific risks that must be anticipated. Infinite loops are the number one danger: a misconfigured agent can spin in circles, consuming tokens and time without progressing. Prompt injection via external data (a malicious email, a trapped document) can hijack the agent's behavior. Hallucination is amplified because the agent can act on false information with real consequences. Essential guardrails include budget limits (tokens and API calls), timeouts, whitelists of authorized actions, and complete logging of all actions for auditing.",
      },
      bullets: {
        fr: [
          "Limiter le nombre maximum d'itérations de la boucle agent (ex: 25 tours max)",
          "Définir un budget token par exécution pour éviter les coûts incontrôlés",
          "Implémenter des sandboxes pour les actions dangereuses (exécution de code, accès fichiers)",
          "Logger chaque action et décision pour permettre le debug et l'audit",
          "Valider les entrées externes avant de les injecter dans le contexte de l'agent",
        ],
        en: [
          "Limit the maximum number of agent loop iterations (e.g., 25 turns max)",
          "Define a token budget per execution to avoid uncontrolled costs",
          "Implement sandboxes for dangerous actions (code execution, file access)",
          "Log every action and decision for debugging and auditing",
          "Validate external inputs before injecting them into the agent's context",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : l'avenir est agentique",
        en: "Conclusion: the future is agentic",
      },
      content: {
        fr: "Les systèmes agentiques représentent la prochaine évolution majeure de l'IA appliquée. En passant du paradigme \"question-réponse\" au paradigme \"objectif-exécution\", ils transforment les modèles de langage en véritables collaborateurs numériques. La clé du succès n'est pas de construire l'agent le plus autonome possible, mais de concevoir le bon niveau d'autonomie pour chaque cas d'usage. Commencez par des workflows simples et bien définis, ajoutez des garde-fous solides, et élargissez progressivement. Les praticiens qui maîtrisent la conception de systèmes agentiques aujourd'hui auront un avantage décisif dans le monde professionnel de demain.",
        en: "Agentic systems represent the next major evolution of applied AI. By moving from the \"question-answer\" paradigm to the \"objective-execution\" paradigm, they transform language models into true digital collaborators. The key to success is not building the most autonomous agent possible, but designing the right level of autonomy for each use case. Start with simple, well-defined workflows, add solid guardrails, and expand progressively. Practitioners who master agentic system design today will have a decisive advantage in tomorrow's professional world.",
      },
      highlight: {
        fr: "Ne demandez plus \"Que peut faire l'IA pour moi ?\". Demandez plutôt \"Quel objectif puis-je confier à un agent IA ?\". C'est un changement de mentalité qui fera la différence entre les utilisateurs passifs et les architectes de systèmes intelligents.",
        en: "Stop asking \"What can AI do for me?\" Instead ask \"What objective can I delegate to an AI agent?\" This mindset shift will make the difference between passive users and architects of intelligent systems.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "LangGraph Documentation — Building Stateful Agents",
      url: "https://langchain-ai.github.io/langgraph/",
    },
    {
      id: 2,
      label: "CrewAI — Multi-Agent Orchestration Framework",
      url: "https://www.crewai.com/",
    },
    {
      id: 3,
      label: "n8n — Workflow Automation with AI Agents",
      url: "https://n8n.io/",
    },
    {
      id: 4,
      label: "Anthropic — Building Effective Agents (2024)",
      url: "https://www.anthropic.com/research/building-effective-agents",
    },
    {
      id: 5,
      label: "Microsoft Autogen — Multi-Agent Conversation Framework",
      url: "https://microsoft.github.io/autogen/",
    },
    {
      id: 6,
      label: "Yao et al. — ReAct: Synergizing Reasoning and Acting in LLMs (2023)",
      url: "https://arxiv.org/abs/2210.03629",
    },
    {
      id: 7,
      label: "Andrew Ng — Agentic Design Patterns (2024)",
      url: "https://www.deeplearning.ai/the-batch/agentic-design-patterns-part-1/",
    },
    {
      id: 8,
      label: "Harrison Chase — The Future of Agents (LangChain Blog)",
      url: "https://blog.langchain.dev/",
    },
  ],
};
