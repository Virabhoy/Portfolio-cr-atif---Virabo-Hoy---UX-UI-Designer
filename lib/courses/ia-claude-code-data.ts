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

export const iaClaudeCodeData: CourseData = {
  slug: "ia-claude-code",
  chapter: 19,
  title: {
    fr: "Claude Code : Le Setup de l'Expert",
    en: "Claude Code: The Expert Setup",
  },
  subtitle: {
    fr: "Transformer un Chatbot en Cockpit de Pilote",
    en: "Transform a Chatbot into a Pilot's Cockpit",
  },
  readingTime: 22,
  description: {
    fr: "Deep dive dans Claude Code -- installation terminal, CLAUDE.md, memoire persistante, skills et slash commands, hooks, context engineering, workflow expert pour chaque nouveau projet.",
    en: "Deep dive into Claude Code -- terminal installation, CLAUDE.md, persistent memory, skills and slash commands, hooks, context engineering, expert workflow for every new project.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Un outil vs un ecosysteme : le vrai pouvoir de Claude Code",
        en: "A tool vs an ecosystem: the real power of Claude Code",
      },
      content: {
        fr: "La plupart des gens utilisent Claude comme un chatbot : ils posent une question, obtiennent une reponse, copient-collent. C'est comme utiliser une Ferrari pour aller chercher le pain. Claude Code n'est pas un chatbot -- c'est un agent autonome qui vit dans votre terminal, lit votre codebase, execute des commandes, modifie des fichiers, lance des tests, et peut mener a bien des taches complexes de bout en bout. La difference entre utiliser Claude.ai et Claude Code, c'est la difference entre envoyer un SMS a un architecte et l'avoir physiquement dans votre bureau avec acces a tous vos plans. Ce chapitre vous montre comment configurer cet ecosysteme pour en tirer le maximum, pas comme un debutant qui decouvre, mais comme un expert qui pilote.",
        en: "Most people use Claude as a chatbot: they ask a question, get an answer, copy-paste. That's like using a Ferrari to get bread. Claude Code is not a chatbot -- it's an autonomous agent that lives in your terminal, reads your codebase, executes commands, modifies files, runs tests, and can carry out complex tasks end to end. The difference between using Claude.ai and Claude Code is the difference between texting an architect and having them physically in your office with access to all your blueprints. This chapter shows you how to configure this ecosystem to get the maximum out of it, not as a beginner discovering it, but as an expert piloting it.",
      },
      highlight: {
        fr: "Claude Code n'est pas un meilleur ChatGPT. C'est une categorie d'outil completement differente. Un agent qui agit dans votre environnement, pas un chatbot qui repond dans une bulle.",
        en: "Claude Code is not a better ChatGPT. It's a completely different tool category. An agent that acts in your environment, not a chatbot that responds in a bubble.",
      },
    },
    {
      id: "installation",
      title: {
        fr: "Installation : terminal, npm et cle API",
        en: "Installation: terminal, npm and API key",
      },
      content: {
        fr: "L'installation de Claude Code se fait en quelques minutes via npm. La commande `npm install -g @anthropic-ai/claude-code` installe l'outil globalement. Ensuite, vous lancez `claude` dans n'importe quel repertoire de projet et vous etes pret. La premiere fois, Claude Code vous demandera de vous authentifier -- soit via votre compte Anthropic (abonnement Max), soit via une cle API. Pour un usage professionnel serieux, je recommande la cle API : elle offre plus de controle sur les couts et la consommation. Une fois installe, Claude Code a acces a votre systeme de fichiers, peut executer des commandes shell, et comprend le contexte de votre projet. C'est cette integration profonde avec l'environnement local qui le rend si puissant.",
        en: "Installing Claude Code takes a few minutes via npm. The command `npm install -g @anthropic-ai/claude-code` installs the tool globally. Then you run `claude` in any project directory and you're ready. The first time, Claude Code will ask you to authenticate -- either via your Anthropic account (Max subscription) or via an API key. For serious professional use, I recommend the API key: it offers more control over costs and consumption. Once installed, Claude Code has access to your file system, can execute shell commands, and understands your project context. It's this deep integration with the local environment that makes it so powerful.",
      },
      bullets: {
        fr: [
          "Prerequis : Node.js 18+, npm, un terminal (iTerm2, Warp, ou le terminal VS Code)",
          "Installation : npm install -g @anthropic-ai/claude-code",
          "Authentification : cle API Anthropic ou abonnement Claude Max",
          "Lancement : taper `claude` dans le repertoire de votre projet",
          "Mise a jour : npm update -g @anthropic-ai/claude-code",
        ],
        en: [
          "Prerequisites: Node.js 18+, npm, a terminal (iTerm2, Warp, or VS Code terminal)",
          "Installation: npm install -g @anthropic-ai/claude-code",
          "Authentication: Anthropic API key or Claude Max subscription",
          "Launch: type `claude` in your project directory",
          "Update: npm update -g @anthropic-ai/claude-code",
        ],
      },
    },
    {
      id: "claude-md",
      title: {
        fr: "CLAUDE.md : le fichier le plus important de votre projet",
        en: "CLAUDE.md: the most important file in your project",
      },
      content: {
        fr: "Le CLAUDE.md est le fichier de configuration qui transforme Claude Code d'un assistant generique en un expert de votre projet. C'est un fichier Markdown place a la racine de votre repository qui contient toutes les instructions, conventions, et connaissances que Claude doit avoir pour travailler efficacement sur votre codebase. Pensez-y comme le README ultime, non pas pour les humains, mais pour l'IA. Un bon CLAUDE.md contient les commandes de build/test/lint, l'architecture du projet, les conventions de code, les patterns a suivre, les erreurs a eviter, et les decisions architecturales cles. C'est le fichier qui fait la difference entre un agent qui tatonne et un agent qui execute avec precision. Si vous ne retenez qu'une seule chose de ce chapitre, que ce soit celle-ci : investissez du temps dans votre CLAUDE.md.",
        en: "The CLAUDE.md is the configuration file that transforms Claude Code from a generic assistant into an expert on your project. It's a Markdown file placed at the root of your repository that contains all the instructions, conventions, and knowledge Claude needs to work effectively on your codebase. Think of it as the ultimate README, not for humans, but for AI. A good CLAUDE.md contains build/test/lint commands, project architecture, code conventions, patterns to follow, mistakes to avoid, and key architectural decisions. It's the file that makes the difference between an agent that fumbles and an agent that executes with precision. If you take only one thing from this chapter, let it be this: invest time in your CLAUDE.md.",
      },
      highlight: {
        fr: "Le CLAUDE.md est votre ROI le plus eleve en IA. 30 minutes investies dans un bon CLAUDE.md vous font gagner des heures sur chaque interaction avec Claude Code. C'est du context engineering applique.",
        en: "The CLAUDE.md is your highest ROI in AI. 30 minutes invested in a good CLAUDE.md saves you hours on every interaction with Claude Code. It's applied context engineering.",
      },
    },
    {
      id: "anatomy-claude-md",
      title: {
        fr: "Anatomie d'un CLAUDE.md efficace",
        en: "Anatomy of an effective CLAUDE.md",
      },
      content: {
        fr: "Un CLAUDE.md efficace suit une structure precise. Il commence par les commandes essentielles : comment lancer le serveur de dev, builder le projet, lancer les tests, et linter le code. Ensuite vient l'architecture : structure des repertoires, patterns utilises, technologies et leurs versions. Puis les conventions : style de code, conventions de nommage, patterns obligatoires, anti-patterns a eviter. Enfin, les specificites du projet : decisions architecturales, workarounds connus, APIs externes, variables d'environnement. L'erreur classique est d'ecrire un CLAUDE.md trop generique ou trop exhaustif. Le fichier doit etre actionnable : chaque information doit aider Claude a prendre de meilleures decisions. Testez votre CLAUDE.md en donnant une tache a Claude Code -- si le resultat est mauvais, c'est votre CLAUDE.md qui est insuffisant.",
        en: "An effective CLAUDE.md follows a precise structure. It starts with essential commands: how to start the dev server, build the project, run tests, and lint code. Then comes architecture: directory structure, patterns used, technologies and their versions. Then conventions: code style, naming conventions, required patterns, anti-patterns to avoid. Finally, project specifics: architectural decisions, known workarounds, external APIs, environment variables. The classic mistake is writing a CLAUDE.md that's too generic or too exhaustive. The file must be actionable: every piece of information should help Claude make better decisions. Test your CLAUDE.md by giving Claude Code a task -- if the result is poor, it's your CLAUDE.md that's insufficient.",
      },
      bullets: {
        fr: [
          "Section 1 - Commands : dev, build, test, lint (les commandes que Claude executera)",
          "Section 2 - Architecture : structure des dossiers, patterns, stack technique",
          "Section 3 - Conventions : nommage, style, imports, formatage",
          "Section 4 - Key Patterns : patterns recurrents avec exemples de code",
          "Section 5 - Specifics : variables d'env, APIs, workarounds, decisions architecturales",
        ],
        en: [
          "Section 1 - Commands: dev, build, test, lint (commands Claude will execute)",
          "Section 2 - Architecture: folder structure, patterns, tech stack",
          "Section 3 - Conventions: naming, style, imports, formatting",
          "Section 4 - Key Patterns: recurring patterns with code examples",
          "Section 5 - Specifics: env variables, APIs, workarounds, architectural decisions",
        ],
      },
    },
    {
      id: "team-vs-project",
      title: {
        fr: "CLAUDE.md d'equipe vs CLAUDE.md de projet",
        en: "Team CLAUDE.md vs Project CLAUDE.md",
      },
      content: {
        fr: "Claude Code supporte plusieurs niveaux de CLAUDE.md, et comprendre cette hierarchie est crucial pour une utilisation en equipe. Le CLAUDE.md a la racine du projet (commite dans le repo) contient les instructions partagees par toute l'equipe : architecture, conventions, commandes. Mais chaque developpeur peut aussi avoir un CLAUDE.md personnel dans ~/.claude/ qui contient ses preferences individuelles : style de commit, raccourcis personnels, workflows specifiques. Il existe aussi des CLAUDE.md au niveau des sous-repertoires pour des instructions specifiques a un module. Cette hierarchie permet de separer ce qui est collectif (architecture, conventions) de ce qui est personnel (preferences, workflow). En equipe, le CLAUDE.md du projet devient un artefact de documentation vivante que tout le monde maintient -- c'est souvent mieux maintenu que le README classique parce que son impact est immediat et mesurable.",
        en: "Claude Code supports multiple levels of CLAUDE.md, and understanding this hierarchy is crucial for team use. The CLAUDE.md at the project root (committed to the repo) contains instructions shared by the whole team: architecture, conventions, commands. But each developer can also have a personal CLAUDE.md in ~/.claude/ containing individual preferences: commit style, personal shortcuts, specific workflows. There are also CLAUDE.md files at subdirectory levels for module-specific instructions. This hierarchy separates what's collective (architecture, conventions) from what's personal (preferences, workflow). In a team, the project CLAUDE.md becomes a living documentation artifact everyone maintains -- it's often better maintained than the classic README because its impact is immediate and measurable.",
      },
      highlight: {
        fr: "Le CLAUDE.md de projet est commite et partage. Le CLAUDE.md personnel (~/.claude/) contient vos preferences. Les CLAUDE.md de sous-dossiers ajoutent du contexte specifique a chaque module. Utilisez les trois.",
        en: "The project CLAUDE.md is committed and shared. The personal CLAUDE.md (~/.claude/) contains your preferences. Subdirectory CLAUDE.md files add specific context per module. Use all three.",
      },
    },
    {
      id: "persistent-memory",
      title: {
        fr: "Memoire persistante : comment Claude se souvient",
        en: "Persistent memory: how Claude remembers",
      },
      content: {
        fr: "L'un des problemes fondamentaux des chatbots IA est l'absence de memoire entre les conversations. Claude Code resout ce probleme avec un systeme de memoire persistante sophistique. Il existe quatre types de memoire. Premierement, le CLAUDE.md qui est charge automatiquement a chaque session. Deuxiemement, la memoire automatique : quand vous dites a Claude 'souviens-toi de ca', il l'ecrit dans un fichier de memoire persistant (~/.claude/projects/). Troisiemement, les fichiers du projet eux-memes qui servent de memoire contextuelle. Quatriemement, les conversations passees accessibles via l'historique. Cette memoire multicouche signifie que Claude Code apprend et s'ameliore au fil du temps sur votre projet. Plus vous travaillez avec lui, plus il comprend vos preferences, votre architecture, et vos patterns. C'est un cercle vertueux que les simples chatbots ne peuvent pas reproduire.",
        en: "One of the fundamental problems with AI chatbots is the lack of memory between conversations. Claude Code solves this with a sophisticated persistent memory system. There are four types of memory. First, the CLAUDE.md which is automatically loaded at each session. Second, automatic memory: when you tell Claude 'remember this', it writes it to a persistent memory file (~/.claude/projects/). Third, the project files themselves which serve as contextual memory. Fourth, past conversations accessible via history. This multi-layered memory means Claude Code learns and improves over time on your project. The more you work with it, the better it understands your preferences, architecture, and patterns. It's a virtuous circle that simple chatbots cannot reproduce.",
      },
      bullets: {
        fr: [
          "CLAUDE.md : instructions statiques, chargees a chaque session",
          "Auto-memory (~/.claude/projects/) : notes dynamiques, ajoutees via 'souviens-toi'",
          "Fichiers projet : le code et la documentation comme memoire contextuelle",
          "Historique : conversations passees accessibles et reutilisables",
        ],
        en: [
          "CLAUDE.md: static instructions, loaded at each session",
          "Auto-memory (~/.claude/projects/): dynamic notes, added via 'remember this'",
          "Project files: code and documentation as contextual memory",
          "History: past conversations accessible and reusable",
        ],
      },
    },
    {
      id: "skills-slash-commands",
      title: {
        fr: "Skills et slash commands : etendre Claude Code",
        en: "Skills and slash commands: extending Claude Code",
      },
      content: {
        fr: "Les skills et slash commands sont le systeme d'extension de Claude Code. Les slash commands natifs (/commit, /review-pr, /init) offrent des workflows pre-construits pour les taches courantes. Mais le vrai pouvoir vient des skills custom : des prompts parametres que vous pouvez creer et partager. Un skill est essentiellement un prompt template avec des instructions specifiques que Claude execute quand vous l'invoquez. Par exemple, vous pouvez creer un skill /audit-perf qui analyse systematiquement la performance d'un composant React selon vos criteres, ou un skill /create-component qui genere un nouveau composant selon vos conventions exactes. Les skills sont stockes dans des fichiers Markdown et peuvent etre partages avec votre equipe via le repository. C'est le moyen le plus puissant de standardiser les workflows IA dans une equipe de developpement.",
        en: "Skills and slash commands are Claude Code's extension system. Native slash commands (/commit, /review-pr, /init) offer pre-built workflows for common tasks. But the real power comes from custom skills: parameterized prompts you can create and share. A skill is essentially a prompt template with specific instructions that Claude executes when you invoke it. For example, you can create an /audit-perf skill that systematically analyzes a React component's performance according to your criteria, or a /create-component skill that generates a new component following your exact conventions. Skills are stored in Markdown files and can be shared with your team via the repository. It's the most powerful way to standardize AI workflows in a development team.",
      },
      bullets: {
        fr: [
          "/commit : genere un message de commit structure a partir des changements",
          "/review-pr : analyse une pull request avec des suggestions detaillees",
          "/init : genere un CLAUDE.md initial pour un nouveau projet",
          "Skills custom : vos propres workflows parametres, partageables en equipe",
          "Combinaison : chainez plusieurs skills pour des workflows complexes",
        ],
        en: [
          "/commit: generates a structured commit message from changes",
          "/review-pr: analyzes a pull request with detailed suggestions",
          "/init: generates an initial CLAUDE.md for a new project",
          "Custom skills: your own parameterized workflows, shareable with the team",
          "Combination: chain multiple skills for complex workflows",
        ],
      },
    },
    {
      id: "hooks",
      title: {
        fr: "Hooks : automatiser avant et apres chaque action",
        en: "Hooks: automating before and after each action",
      },
      content: {
        fr: "Les hooks de Claude Code sont un mecanisme d'automatisation qui execute des actions avant ou apres certains evenements. Pensez-y comme les git hooks, mais pour l'agent IA. Un hook PreToolUse peut valider ou modifier une commande avant son execution -- par exemple, empecher Claude de modifier certains fichiers sensibles ou forcer un format de commit specifique. Un hook PostToolUse peut declencher des actions apres une modification -- lancer automatiquement les tests apres chaque edition de fichier, ou notifier l'equipe via Slack quand un fichier critique est touche. Les hooks se configurent dans le fichier settings.json de Claude Code et s'executent dans le contexte du projet. C'est le mecanisme qui permet de passer d'un agent autonome a un agent supervise avec des garde-fous automatiques. Pour un usage professionnel, les hooks sont non-negociables.",
        en: "Claude Code hooks are an automation mechanism that executes actions before or after certain events. Think of them like git hooks, but for the AI agent. A PreToolUse hook can validate or modify a command before execution -- for example, preventing Claude from modifying certain sensitive files or forcing a specific commit format. A PostToolUse hook can trigger actions after a modification -- automatically running tests after each file edit, or notifying the team via Slack when a critical file is touched. Hooks are configured in Claude Code's settings.json file and execute in the project's context. It's the mechanism that allows going from an autonomous agent to a supervised agent with automatic guardrails. For professional use, hooks are non-negotiable.",
      },
      highlight: {
        fr: "Les hooks sont les garde-fous de votre agent IA. Sans eux, vous donnez les cles de votre codebase a un agent autonome sans supervision. Avec eux, vous avez un agent puissant ET controle.",
        en: "Hooks are the guardrails of your AI agent. Without them, you're giving the keys to your codebase to an unsupervised autonomous agent. With them, you have a powerful AND controlled agent.",
      },
    },
    {
      id: "context-engineering",
      title: {
        fr: "Context engineering : le vrai game changer de 2026",
        en: "Context engineering: the real game changer of 2026",
      },
      content: {
        fr: "Si le prompt engineering est l'art de poser la bonne question, le context engineering est l'art de creer l'environnement dans lequel la question est posee. Avec Claude Code, le context engineering prend une dimension completement nouvelle. Votre CLAUDE.md, votre memoire persistante, vos skills, vos hooks -- tout cela constitue le contexte dans lequel Claude opere. Un expert en context engineering ne se contente pas d'ecrire de bons prompts : il configure un ecosysteme entier ou meme un prompt mediocre produit d'excellents resultats. C'est la difference entre donner des instructions a un stagiaire (prompt engineering) et creer un environnement de travail ou meme un stagiaire moyen performe bien (context engineering). En 2026, le context engineering est devenu la competence numero un pour tirer parti de l'IA, surpassant largement le simple prompt engineering.",
        en: "If prompt engineering is the art of asking the right question, context engineering is the art of creating the environment in which the question is asked. With Claude Code, context engineering takes on a completely new dimension. Your CLAUDE.md, your persistent memory, your skills, your hooks -- all of this constitutes the context in which Claude operates. A context engineering expert doesn't just write good prompts: they configure an entire ecosystem where even a mediocre prompt produces excellent results. It's the difference between giving instructions to an intern (prompt engineering) and creating a work environment where even an average intern performs well (context engineering). In 2026, context engineering has become the number one skill for leveraging AI, far surpassing simple prompt engineering.",
      },
      highlight: {
        fr: "Le prompt engineering optimise une question. Le context engineering optimise tout l'environnement. C'est la difference entre ameliorer une recette et construire une cuisine professionnelle.",
        en: "Prompt engineering optimizes a question. Context engineering optimizes the entire environment. It's the difference between improving a recipe and building a professional kitchen.",
      },
    },
    {
      id: "prompt-to-context-shift",
      title: {
        fr: "Du prompt engineering au context engineering : le changement de paradigme",
        en: "From prompt engineering to context engineering: the paradigm shift",
      },
      content: {
        fr: "Le prompt engineering vous dit 'ecrivez de meilleurs prompts'. Le context engineering vous dit 'construisez un meilleur environnement pour que n'importe quel prompt fonctionne bien'. Ce changement de paradigme est fondamental. Avec Claude Code, vous n'ecrivez plus des prompts isoles -- vous construisez un systeme. Votre CLAUDE.md definit les regles du jeu. Vos fichiers de memoire stockent les lecons apprises. Vos skills encapsulent les workflows repetes. Vos hooks assurent la qualite et la securite. Quand tout cela est en place, vous pouvez donner des instructions simples et obtenir des resultats exceptionnels, parce que le contexte fait le travail lourd. C'est comme la difference entre crier des ordres a un etranger dans la rue et parler a un collegue qui connait votre entreprise, vos processus et vos preferences depuis 5 ans.",
        en: "Prompt engineering tells you 'write better prompts'. Context engineering tells you 'build a better environment so that any prompt works well'. This paradigm shift is fundamental. With Claude Code, you no longer write isolated prompts -- you build a system. Your CLAUDE.md defines the rules of the game. Your memory files store lessons learned. Your skills encapsulate repeated workflows. Your hooks ensure quality and security. When all of this is in place, you can give simple instructions and get exceptional results, because the context does the heavy lifting. It's like the difference between shouting orders at a stranger on the street and talking to a colleague who has known your company, processes, and preferences for 5 years.",
      },
      bullets: {
        fr: [
          "Prompt engineering : optimiser chaque interaction individuellement",
          "Context engineering : optimiser l'environnement pour que toutes les interactions soient meilleures",
          "CLAUDE.md = les regles du jeu permanentes",
          "Memoire persistante = les lecons apprises accumulees",
          "Skills + hooks = les workflows automatises et les garde-fous",
        ],
        en: [
          "Prompt engineering: optimize each interaction individually",
          "Context engineering: optimize the environment so all interactions are better",
          "CLAUDE.md = the permanent rules of the game",
          "Persistent memory = accumulated lessons learned",
          "Skills + hooks = automated workflows and guardrails",
        ],
      },
    },
    {
      id: "expert-workflow",
      title: {
        fr: "Workflow expert pour chaque nouveau projet",
        en: "Expert workflow for every new project",
      },
      content: {
        fr: "Voici le workflow que j'applique systematiquement quand je demarre un nouveau projet avec Claude Code. Etape 1 : creer le CLAUDE.md avec les commandes, l'architecture, les conventions et les patterns cles. Etape 2 : configurer la memoire persistante avec les preferences recurrentes (style de code, format de commit, stack technique). Etape 3 : installer les skills pertinents pour le type de projet (web, mobile, API). Etape 4 : configurer les hooks de securite (protection des fichiers sensibles, tests automatiques). Etape 5 : faire une premiere tache simple pour verifier que tout fonctionne. Etape 6 : iterer sur le CLAUDE.md en fonction des resultats. Ce workflow prend environ 30 minutes a mettre en place, mais il change fondamentalement la qualite de chaque interaction qui suit. C'est un investissement initial qui se rembourse des la premiere heure de travail avec Claude Code.",
        en: "Here's the workflow I systematically apply when starting a new project with Claude Code. Step 1: create the CLAUDE.md with commands, architecture, conventions, and key patterns. Step 2: configure persistent memory with recurring preferences (code style, commit format, tech stack). Step 3: install relevant skills for the project type (web, mobile, API). Step 4: configure security hooks (sensitive file protection, automatic tests). Step 5: do a first simple task to verify everything works. Step 6: iterate on the CLAUDE.md based on results. This workflow takes about 30 minutes to set up, but it fundamentally changes the quality of every interaction that follows. It's an initial investment that pays back within the first hour of work with Claude Code.",
      },
      bullets: {
        fr: [
          "Etape 1 : CLAUDE.md -- commandes, architecture, conventions (15 min)",
          "Etape 2 : Memoire persistante -- preferences, stack, patterns (5 min)",
          "Etape 3 : Skills -- installer/creer les skills pertinents (5 min)",
          "Etape 4 : Hooks -- securite, tests auto, garde-fous (5 min)",
          "Etape 5 : Test -- une tache simple pour valider le setup",
          "Etape 6 : Iteration -- affiner le CLAUDE.md en continu",
        ],
        en: [
          "Step 1: CLAUDE.md -- commands, architecture, conventions (15 min)",
          "Step 2: Persistent memory -- preferences, stack, patterns (5 min)",
          "Step 3: Skills -- install/create relevant skills (5 min)",
          "Step 4: Hooks -- security, auto tests, guardrails (5 min)",
          "Step 5: Test -- a simple task to validate the setup",
          "Step 6: Iteration -- continuously refine the CLAUDE.md",
        ],
      },
    },
    {
      id: "real-world-example",
      title: {
        fr: "Exemple concret : ce portfolio",
        en: "Real-world example: this portfolio",
      },
      content: {
        fr: "Ce portfolio que vous consultez en ce moment a ete developpe en grande partie avec Claude Code. Le CLAUDE.md a la racine du projet contient toute l'architecture Next.js 16, les conventions de code, les commandes de build et de test, les patterns de composants, et les specificites de l'integration Vercel Blob. Quand je demande a Claude Code 'cree un nouveau chapitre de cours UX', il sait exactement quelle structure de fichiers creer, quel format de donnees utiliser, quels composants reutiliser, et comment integrer le tout dans le systeme de navigation existant. Ce n'est pas de la magie -- c'est un CLAUDE.md bien ecrit. Le resultat : chaque nouveau chapitre prend 10 minutes de setup technique au lieu de 2 heures. Le temps economise est reinvesti dans la qualite du contenu, pas dans la plomberie technique.",
        en: "This portfolio you're currently viewing was largely developed with Claude Code. The CLAUDE.md at the project root contains the entire Next.js 16 architecture, code conventions, build and test commands, component patterns, and Vercel Blob integration specifics. When I ask Claude Code to 'create a new UX course chapter', it knows exactly which file structure to create, which data format to use, which components to reuse, and how to integrate everything into the existing navigation system. It's not magic -- it's a well-written CLAUDE.md. The result: each new chapter takes 10 minutes of technical setup instead of 2 hours. The time saved is reinvested in content quality, not technical plumbing.",
      },
      highlight: {
        fr: "Ce portfolio est la preuve vivante de l'approche context engineering. Chaque page de cours que vous lisez a ete scaffoldee par Claude Code en quelques minutes grace a un CLAUDE.md de 50 lignes.",
        en: "This portfolio is living proof of the context engineering approach. Every course page you're reading was scaffolded by Claude Code in minutes thanks to a 50-line CLAUDE.md.",
      },
    },
    {
      id: "advanced-tips",
      title: {
        fr: "Astuces avancees : devenir un power user",
        en: "Advanced tips: becoming a power user",
      },
      content: {
        fr: "Quelques techniques avancees qui separent les utilisateurs reguliers des power users de Claude Code. Premierement, utilisez le mode headless (`claude -p 'votre prompt'`) pour integrer Claude Code dans des scripts et des pipelines CI/CD -- vous pouvez automatiser des code reviews, des generations de documentation, ou des migrations de code. Deuxiemement, utilisez les conversations longues strategiquement : au lieu de demarrer une nouvelle conversation pour chaque tache, gardez le contexte d'une session de travail complete pour que Claude comprenne l'evolution du projet. Troisiemement, exploitez le multi-turn : decomposez les taches complexes en etapes et validez chaque etape avant de passer a la suivante. Quatriemement, connectez Claude Code a vos outils externes via MCP (le chapitre suivant). Cinquiemement, creez des templates de CLAUDE.md par type de projet pour bootstrapper encore plus vite.",
        en: "A few advanced techniques that separate regular users from Claude Code power users. First, use headless mode (`claude -p 'your prompt'`) to integrate Claude Code into scripts and CI/CD pipelines -- you can automate code reviews, documentation generation, or code migrations. Second, use long conversations strategically: instead of starting a new conversation for each task, maintain the context of a complete work session so Claude understands the project's evolution. Third, exploit multi-turn: decompose complex tasks into steps and validate each step before moving to the next. Fourth, connect Claude Code to your external tools via MCP (next chapter). Fifth, create CLAUDE.md templates by project type to bootstrap even faster.",
      },
      bullets: {
        fr: [
          "Mode headless : `claude -p` pour l'integration dans des scripts et CI/CD",
          "Conversations longues : garder le contexte d'une session de travail complete",
          "Multi-turn : decomposer, valider, iterer etape par etape",
          "MCP : connecter Claude Code a GitHub, Figma, Slack, bases de donnees",
          "Templates CLAUDE.md : un template par type de projet (web, API, mobile)",
        ],
        en: [
          "Headless mode: `claude -p` for integration into scripts and CI/CD",
          "Long conversations: maintain context across a complete work session",
          "Multi-turn: decompose, validate, iterate step by step",
          "MCP: connect Claude Code to GitHub, Figma, Slack, databases",
          "CLAUDE.md templates: one template per project type (web, API, mobile)",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : Claude Code comme cockpit de developpement",
        en: "Conclusion: Claude Code as a development cockpit",
      },
      content: {
        fr: "Claude Code n'est pas un outil de plus dans votre boite a outils -- c'est un changement de paradigme dans la facon de developper. Avec un CLAUDE.md bien ecrit, une memoire persistante configuree, des skills custom et des hooks de securite, vous transformez un chatbot generique en cockpit de pilote sur mesure pour votre projet. L'investissement initial de 30 minutes de configuration se rembourse exponentiellement : chaque interaction est plus rapide, plus precise, plus alignee avec vos standards. Le prochain chapitre explore MCP, le protocole qui permet de connecter Claude Code a l'ensemble de votre stack technique -- GitHub, Figma, Slack, bases de donnees -- et de le transformer en orchestrateur central de votre workflow de developpement.",
        en: "Claude Code is not just another tool in your toolbox -- it's a paradigm shift in how you develop. With a well-written CLAUDE.md, configured persistent memory, custom skills, and security hooks, you transform a generic chatbot into a custom-built pilot's cockpit for your project. The initial 30-minute configuration investment pays back exponentially: every interaction is faster, more precise, more aligned with your standards. The next chapter explores MCP, the protocol that connects Claude Code to your entire technical stack -- GitHub, Figma, Slack, databases -- and transforms it into the central orchestrator of your development workflow.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Anthropic - Claude Code Documentation",
      url: "https://docs.anthropic.com/en/docs/claude-code",
    },
    {
      id: 2,
      label: "Anthropic - CLAUDE.md Best Practices",
      url: "https://docs.anthropic.com/en/docs/claude-code/claude-md",
    },
    {
      id: 3,
      label: "Anthropic - Claude Code Hooks",
      url: "https://docs.anthropic.com/en/docs/claude-code/hooks",
    },
    {
      id: 4,
      label: "Anthropic - Claude Code Memory",
      url: "https://docs.anthropic.com/en/docs/claude-code/memory",
    },
    {
      id: 5,
      label: "Anthropic - Claude Code Skills",
      url: "https://docs.anthropic.com/en/docs/claude-code/skills",
    },
    {
      id: 6,
      label: "Simon Willison - Context Engineering (2025)",
      url: "https://simonwillison.net/2025/Jun/27/context-engineering/",
    },
  ],
};
