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

export const iaPromptEngineeringData: CourseData = {
  slug: "ia-prompt-engineering",
  chapter: 17,
  title: {
    fr: "L'Art du Prompt Engineering",
    en: "The Art of Prompt Engineering",
  },
  subtitle: {
    fr: "De la Question Naive au Prompt d'Expert",
    en: "From Naive Question to Expert Prompt",
  },
  readingTime: 18,
  description: {
    fr: "Maitriser les techniques de prompt engineering -- framework TCREI (Task, Context, References, Evaluate, Iterate), few-shot, chain-of-thought, system prompts, role prompting et sorties structurees.",
    en: "Master prompt engineering techniques -- TCREI framework (Task, Context, References, Evaluate, Iterate), few-shot, chain-of-thought, system prompts, role prompting, and structured outputs.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi 90% des gens utilisent l'IA de travers",
        en: "Why 90% of people use AI wrong",
      },
      content: {
        fr: "La plupart des utilisateurs traitent l'IA comme un moteur de recherche : une question vague, une reponse mediocre, et la conclusion que 'l'IA c'est nul'. Le probleme n'est jamais le modele -- c'est le prompt. Un meme modele peut produire une reponse banale ou brillante selon la facon dont vous formulez votre demande. La difference entre un utilisateur amateur et un expert ne se mesure pas en connaissances techniques, mais en qualite de communication avec la machine. Le prompt engineering est la competence numero un de l'ere de l'IA, et pourtant, presque personne ne l'enseigne correctement.",
        en: "Most users treat AI like a search engine: a vague question, a mediocre answer, and the conclusion that 'AI is bad'. The problem is never the model -- it's the prompt. The same model can produce a banal or brilliant response depending on how you frame your request. The difference between an amateur and an expert user isn't measured in technical knowledge, but in quality of communication with the machine. Prompt engineering is the number one skill of the AI era, yet almost nobody teaches it properly.",
      },
      highlight: {
        fr: "Le prompt engineering n'est pas de la programmation. C'est de la communication structuree. Et comme toute communication, elle s'apprend, se pratique et se perfectionne.",
        en: "Prompt engineering is not programming. It's structured communication. And like all communication, it can be learned, practiced, and perfected.",
      },
    },
    {
      id: "what-is-prompt-engineering",
      title: {
        fr: "Qu'est-ce que le prompt engineering ?",
        en: "What is prompt engineering?",
      },
      content: {
        fr: "Le prompt engineering est l'art de formuler des instructions pour obtenir les meilleurs resultats possibles d'un modele de langage. Ce n'est pas simplement 'poser une question' -- c'est construire un cadre de communication qui guide le modele vers exactement ce que vous attendez. Un bon prompt definit la tache, fournit le contexte necessaire, specifie le format de sortie, et anticipe les ambiguites. C'est la difference entre dire 'fais-moi un gateau' et donner une recette detaillee avec les ingredients, les quantites, les temps de cuisson et la presentation attendue. Le premier donnera un resultat aleatoire, le second donnera exactement ce que vous voulez.",
        en: "Prompt engineering is the art of crafting instructions to get the best possible results from a language model. It's not simply 'asking a question' -- it's building a communication framework that guides the model toward exactly what you expect. A good prompt defines the task, provides necessary context, specifies the output format, and anticipates ambiguities. It's the difference between saying 'make me a cake' and giving a detailed recipe with ingredients, quantities, cooking times, and expected presentation. The first will give a random result, the second will give exactly what you want.",
      },
      bullets: {
        fr: [
          "Un prompt n'est pas une question -- c'est un brief creatif",
          "La qualite de la sortie est directement proportionnelle a la qualite de l'entree",
          "Le prompt engineering est une competence transversale, utile dans tous les metiers",
          "Un bon prompt peut transformer un modele moyen en outil extraordinaire",
        ],
        en: [
          "A prompt is not a question -- it's a creative brief",
          "Output quality is directly proportional to input quality",
          "Prompt engineering is a cross-functional skill, useful in all professions",
          "A good prompt can transform an average model into an extraordinary tool",
        ],
      },
    },
    {
      id: "tcrei-framework",
      title: {
        fr: "Le framework TCREI : la methode qui change tout",
        en: "The TCREI framework: the method that changes everything",
      },
      content: {
        fr: "TCREI est le framework que j'utilise et que j'enseigne pour structurer chaque interaction avec l'IA. T pour Task (definir clairement ce qu'on attend), C pour Context (donner toutes les informations pertinentes), R pour References (fournir des exemples ou des modeles), E pour Evaluate (demander au modele de s'auto-evaluer), I pour Iterate (affiner en plusieurs echanges). Ce framework n'est pas academique -- il est ne de centaines d'heures de pratique professionnelle. Il fonctionne avec tous les modeles, toutes les taches, et il transforme systematiquement la qualite des resultats obtenus.",
        en: "TCREI is the framework I use and teach to structure every interaction with AI. T for Task (clearly define what you expect), C for Context (give all relevant information), R for References (provide examples or templates), E for Evaluate (ask the model to self-evaluate), I for Iterate (refine through multiple exchanges). This framework isn't academic -- it was born from hundreds of hours of professional practice. It works with all models, all tasks, and it systematically transforms the quality of results obtained.",
      },
      highlight: {
        fr: "TCREI n'est pas un acronyme de plus a memoriser. C'est une checklist mentale qui devrait preceder chaque interaction avec l'IA. Manquer une seule lettre, c'est se priver d'une part significative du potentiel du modele.",
        en: "TCREI is not just another acronym to memorize. It's a mental checklist that should precede every interaction with AI. Missing a single letter means depriving yourself of a significant portion of the model's potential.",
      },
    },
    {
      id: "task-definition",
      title: {
        fr: "T - Task : definir la tache avec precision chirurgicale",
        en: "T - Task: defining the task with surgical precision",
      },
      content: {
        fr: "La premiere etape et la plus critique : definir exactement ce que vous attendez. 'Ecris-moi un article sur le marketing' est un mauvais prompt. 'Redige un article de 800 mots pour un blog B2B SaaS, cible sur les CMOs de PME francaises, qui explique les 5 erreurs les plus courantes en email marketing, avec un ton professionnel mais accessible, et une conclusion avec un CTA vers un livre blanc' est un excellent prompt. La precision de la tache determine la precision du resultat. Chaque mot ambigu dans votre prompt produira une interpretation aleatoire par le modele. Soyez explicite sur le format (liste, paragraphe, tableau), la longueur, le public cible, le ton, et le resultat attendu.",
        en: "The first and most critical step: define exactly what you expect. 'Write me an article about marketing' is a bad prompt. 'Write an 800-word article for a B2B SaaS blog, targeting CMOs of French SMEs, explaining the 5 most common email marketing mistakes, with a professional but accessible tone, and a conclusion with a CTA to a white paper' is an excellent prompt. Task precision determines result precision. Every ambiguous word in your prompt will produce a random interpretation by the model. Be explicit about format (list, paragraph, table), length, target audience, tone, and expected outcome.",
      },
      bullets: {
        fr: [
          "Definir le format de sortie : article, email, code, liste, tableau, JSON",
          "Preciser la longueur attendue : nombre de mots, de paragraphes, de points",
          "Identifier le public cible : qui lira ce contenu ?",
          "Specifier le ton : formel, conversationnel, technique, pedagogique",
          "Decrire le resultat ideal : a quoi ressemble le succes ?",
        ],
        en: [
          "Define the output format: article, email, code, list, table, JSON",
          "Specify expected length: number of words, paragraphs, points",
          "Identify the target audience: who will read this content?",
          "Specify the tone: formal, conversational, technical, pedagogical",
          "Describe the ideal result: what does success look like?",
        ],
      },
    },
    {
      id: "context-engineering",
      title: {
        fr: "C - Context : l'ingredient secret des prompts d'expert",
        en: "C - Context: the secret ingredient of expert prompts",
      },
      content: {
        fr: "Le contexte est ce qui separe un resultat generique d'un resultat sur mesure. Donner du contexte a l'IA, c'est lui donner les lunettes a travers lesquelles elle doit voir le probleme. Qui etes-vous ? Quel est votre secteur ? Qui est votre audience ? Quelles sont vos contraintes ? Quel est l'historique du projet ? Plus vous donnez de contexte pertinent, plus la reponse sera adaptee. Attention cependant : le contexte doit etre pertinent, pas exhaustif. Noyer le modele dans des informations inutiles dilue la qualite de la reponse. L'art du contexte, c'est donner exactement ce dont le modele a besoin -- ni plus, ni moins. En 2026, on parle de plus en plus de 'context engineering' plutot que de 'prompt engineering', car c'est le contexte qui fait vraiment la difference.",
        en: "Context is what separates a generic result from a tailored one. Giving context to AI is like giving it the lenses through which it should see the problem. Who are you? What's your industry? Who's your audience? What are your constraints? What's the project history? The more relevant context you provide, the more adapted the response. However, beware: context must be relevant, not exhaustive. Drowning the model in useless information dilutes response quality. The art of context is giving exactly what the model needs -- no more, no less. In 2026, we increasingly talk about 'context engineering' rather than 'prompt engineering', because context is what truly makes the difference.",
      },
      highlight: {
        fr: "En 2026, le vrai game-changer n'est plus le prompt engineering mais le context engineering. La qualite du contexte que vous fournissez a l'IA determine 80% de la qualite de sa reponse.",
        en: "In 2026, the real game-changer is no longer prompt engineering but context engineering. The quality of context you provide to AI determines 80% of its response quality.",
      },
    },
    {
      id: "few-shot-prompting",
      title: {
        fr: "Few-shot prompting : apprendre par l'exemple",
        en: "Few-shot prompting: learning by example",
      },
      content: {
        fr: "Le few-shot prompting consiste a donner au modele quelques exemples du resultat attendu avant de lui demander de produire le sien. C'est l'equivalent de montrer un modele a un artisan avant de lui passer commande. Au lieu de decrire abstraitement ce que vous voulez, vous montrez concretement ce que 'bien' ressemble. Cette technique est devastatrice d'efficacite pour les taches de classification, de reformulation, de generation de donnees structurees, ou tout format personnalise. Un zero-shot prompt (sans exemple) donne un resultat a 60%. Un few-shot avec 2-3 exemples bien choisis monte a 90%. Les exemples doivent etre representatifs, varier suffisamment pour couvrir les cas limites, et illustrer les nuances que vous attendez.",
        en: "Few-shot prompting means giving the model a few examples of the expected result before asking it to produce its own. It's the equivalent of showing a model to an artisan before placing an order. Instead of abstractly describing what you want, you concretely show what 'good' looks like. This technique is devastatingly effective for classification, reformulation, structured data generation, or any custom format. A zero-shot prompt (without examples) gives a 60% result. A few-shot with 2-3 well-chosen examples reaches 90%. Examples should be representative, vary enough to cover edge cases, and illustrate the nuances you expect.",
      },
      bullets: {
        fr: [
          "Zero-shot : pas d'exemple, resultat aleatoire",
          "One-shot : un seul exemple, le modele comprend le format",
          "Few-shot (2-5 exemples) : le sweet spot pour la plupart des taches",
          "Many-shot (10+) : utile pour des taches tres specifiques ou complexes",
        ],
        en: [
          "Zero-shot: no example, random result",
          "One-shot: single example, the model understands the format",
          "Few-shot (2-5 examples): the sweet spot for most tasks",
          "Many-shot (10+): useful for very specific or complex tasks",
        ],
      },
    },
    {
      id: "chain-of-thought",
      title: {
        fr: "Chain-of-thought : forcer l'IA a raisonner etape par etape",
        en: "Chain-of-thought: forcing AI to reason step by step",
      },
      content: {
        fr: "Le chain-of-thought (CoT) est une technique qui consiste a demander au modele de detailler son raisonnement avant de donner sa reponse finale. Au lieu de demander directement 'quelle est la meilleure stack pour ce projet ?', vous dites 'analyse d'abord les contraintes du projet, puis evalue chaque option technique, et enfin recommande la meilleure stack en justifiant ton choix'. Cette simple instruction transforme radicalement la qualite du raisonnement. Les modeles qui 'pensent a voix haute' commettent significativement moins d'erreurs, surtout sur les taches de logique, d'analyse, et de prise de decision. Le CoT est particulierement puissant quand il est combine avec le role prompting : 'En tant qu'architecte senior avec 15 ans d'experience, raisonne etape par etape...'",
        en: "Chain-of-thought (CoT) is a technique that asks the model to detail its reasoning before giving its final answer. Instead of directly asking 'what's the best stack for this project?', you say 'first analyze the project constraints, then evaluate each technical option, and finally recommend the best stack while justifying your choice'. This simple instruction radically transforms reasoning quality. Models that 'think out loud' make significantly fewer errors, especially on logic, analysis, and decision-making tasks. CoT is particularly powerful when combined with role prompting: 'As a senior architect with 15 years of experience, reason step by step...'",
      },
      highlight: {
        fr: "Ajouter 'raisonne etape par etape' ou 'explique ton raisonnement avant de conclure' a n'importe quel prompt analytique ameliore la qualite de la reponse de 30 a 50%. C'est gratuit et ca marche a chaque fois.",
        en: "Adding 'reason step by step' or 'explain your reasoning before concluding' to any analytical prompt improves response quality by 30 to 50%. It's free and it works every time.",
      },
    },
    {
      id: "role-prompting",
      title: {
        fr: "Role prompting : donner une identite a l'IA",
        en: "Role prompting: giving AI an identity",
      },
      content: {
        fr: "Le role prompting consiste a attribuer un role ou une expertise specifique au modele avant de lui poser votre question. 'Tu es un directeur marketing senior specialise en B2B SaaS' ou 'Tu es un avocat specialise en droit du travail francais' change fondamentalement le registre, la profondeur et la pertinence de la reponse. Ce n'est pas de la magie -- c'est de l'activation selective. En assignant un role, vous activez les patterns lies a ce domaine dans le modele. L'IA puise alors dans un sous-ensemble plus pertinent de ses connaissances. Le role prompting fonctionne particulierement bien quand il est specifique ('UX researcher senior chez une fintech') plutot que generique ('expert en design'). Combinez-le avec des contraintes ('tu dois repondre comme si tu etais en reunion avec le CEO') pour des resultats encore plus cibles.",
        en: "Role prompting means assigning a specific role or expertise to the model before asking your question. 'You are a senior marketing director specialized in B2B SaaS' or 'You are a lawyer specialized in French labor law' fundamentally changes the register, depth, and relevance of the response. It's not magic -- it's selective activation. By assigning a role, you activate patterns related to that domain in the model. The AI then draws from a more relevant subset of its knowledge. Role prompting works particularly well when specific ('senior UX researcher at a fintech') rather than generic ('design expert'). Combine it with constraints ('you must respond as if in a meeting with the CEO') for even more targeted results.",
      },
      bullets: {
        fr: [
          "Specifique > generique : 'architecte cloud AWS certifie' > 'expert en informatique'",
          "Ajouter des contraintes de contexte : experience, secteur, taille d'entreprise",
          "Combiner role + audience : 'explique comme si tu presentais au board'",
          "Varier les roles pour obtenir des perspectives differentes sur un meme sujet",
        ],
        en: [
          "Specific > generic: 'AWS certified cloud architect' > 'IT expert'",
          "Add context constraints: experience, industry, company size",
          "Combine role + audience: 'explain as if presenting to the board'",
          "Vary roles to get different perspectives on the same topic",
        ],
      },
    },
    {
      id: "structured-outputs",
      title: {
        fr: "Sorties structurees : obtenir exactement le format voulu",
        en: "Structured outputs: getting exactly the format you want",
      },
      content: {
        fr: "L'une des forces les plus sous-exploitees des LLMs est leur capacite a produire des sorties parfaitement structurees. JSON, Markdown, XML, CSV, tableaux, YAML -- vous pouvez obtenir n'importe quel format en le specifiant dans votre prompt. La technique la plus efficace : montrer le schema exact attendu. 'Reponds en JSON avec cette structure : { \"titre\": string, \"resume\": string, \"points_cles\": string[], \"score\": number }'. Pour les taches complexes, utiliser des delimiteurs explicites (```json, ---, ===) aide le modele a separer les sections. Les sorties structurees sont essentielles pour l'automatisation : elles permettent de chainer les sorties de l'IA avec d'autres outils, APIs ou scripts sans parsing manuel.",
        en: "One of the most underexploited strengths of LLMs is their ability to produce perfectly structured outputs. JSON, Markdown, XML, CSV, tables, YAML -- you can get any format by specifying it in your prompt. The most effective technique: show the exact expected schema. 'Respond in JSON with this structure: { \"title\": string, \"summary\": string, \"key_points\": string[], \"score\": number }'. For complex tasks, using explicit delimiters (```json, ---, ===) helps the model separate sections. Structured outputs are essential for automation: they allow chaining AI outputs with other tools, APIs, or scripts without manual parsing.",
      },
      highlight: {
        fr: "Astuce pro : terminez votre prompt par 'Reponds UNIQUEMENT avec le JSON demande, sans texte avant ou apres'. Ca elimine les introductions et conclusions parasites que le modele ajoute par defaut.",
        en: "Pro tip: end your prompt with 'Respond ONLY with the requested JSON, no text before or after'. This eliminates the parasitic introductions and conclusions the model adds by default.",
      },
    },
    {
      id: "common-mistakes",
      title: {
        fr: "Les erreurs qui ruinent vos prompts",
        en: "The mistakes that ruin your prompts",
      },
      content: {
        fr: "Apres avoir observe des centaines d'utilisateurs, les memes erreurs reviennent systematiquement. Erreur n1 : le prompt trop vague ('aide-moi avec mon projet'). Erreur n2 : surcharger un seul prompt avec 10 taches differentes au lieu de decomposer. Erreur n3 : ne pas specifier le format de sortie et obtenir un pave de texte quand on voulait une liste. Erreur n4 : ne jamais iterer -- accepter la premiere reponse comme definitive. Erreur n5 : oublier de donner le contexte metier ('redige un email' sans preciser a qui, pourquoi, dans quel ton). Erreur n6 : copier-coller des 'mega prompts' trouves sur Internet sans les adapter a son contexte. Chacune de ces erreurs reduit la qualite de la sortie de 20-30%. Cumulees, elles expliquent pourquoi tant de gens pensent que l'IA est inutile.",
        en: "After observing hundreds of users, the same mistakes come back systematically. Mistake #1: the overly vague prompt ('help me with my project'). Mistake #2: overloading a single prompt with 10 different tasks instead of decomposing. Mistake #3: not specifying output format and getting a wall of text when you wanted a list. Mistake #4: never iterating -- accepting the first response as final. Mistake #5: forgetting to give business context ('write an email' without specifying to whom, why, in what tone). Mistake #6: copy-pasting 'mega prompts' found on the Internet without adapting them to your context. Each mistake reduces output quality by 20-30%. Combined, they explain why so many people think AI is useless.",
      },
      bullets: {
        fr: [
          "Vague : 'fais-moi un truc bien' → Precis : 'redige un email de relance client de 150 mots, ton cordial mais ferme'",
          "Surcharge : 10 taches en 1 prompt → Decomposer en etapes sequentielles",
          "Sans format : texte libre → Specifier : liste, tableau, JSON, Markdown",
          "Sans iteration : 1 prompt = 1 reponse finale → Iterer 3-5 fois minimum",
          "Sans contexte : prompt generique → Ajouter secteur, audience, contraintes",
        ],
        en: [
          "Vague: 'make me something good' → Precise: 'write a 150-word client follow-up email, cordial but firm tone'",
          "Overload: 10 tasks in 1 prompt → Decompose into sequential steps",
          "No format: free text → Specify: list, table, JSON, Markdown",
          "No iteration: 1 prompt = 1 final answer → Iterate 3-5 times minimum",
          "No context: generic prompt → Add industry, audience, constraints",
        ],
      },
    },
    {
      id: "advanced-techniques",
      title: {
        fr: "Techniques avancees : meta-prompting et auto-evaluation",
        en: "Advanced techniques: meta-prompting and self-evaluation",
      },
      content: {
        fr: "Les techniques avancees de prompt engineering exploitent les capacites reflexives des modeles. Le meta-prompting consiste a demander au modele de generer lui-meme le meilleur prompt pour une tache donnee : 'Quel serait le prompt ideal pour obtenir X ? Genere ce prompt, puis execute-le.' L'auto-evaluation demande au modele de critiquer sa propre reponse : 'Maintenant, identifie 3 faiblesses dans ta reponse et propose une version amelioree.' Le tree-of-thought explore plusieurs pistes de raisonnement en parallele avant de selectionner la meilleure. Le self-consistency genere plusieurs reponses et identifie le consensus. Ces techniques transforment un outil passif en partenaire de reflexion actif. Elles sont particulierement puissantes pour les taches d'analyse strategique, de redaction complexe et de resolution de problemes.",
        en: "Advanced prompt engineering techniques exploit the reflexive capabilities of models. Meta-prompting asks the model to generate the best prompt for a given task itself: 'What would be the ideal prompt to get X? Generate this prompt, then execute it.' Self-evaluation asks the model to critique its own response: 'Now identify 3 weaknesses in your response and propose an improved version.' Tree-of-thought explores multiple reasoning paths in parallel before selecting the best one. Self-consistency generates multiple responses and identifies consensus. These techniques transform a passive tool into an active thinking partner. They're particularly powerful for strategic analysis, complex writing, and problem-solving tasks.",
      },
      bullets: {
        fr: [
          "Meta-prompting : faire generer le prompt optimal par l'IA elle-meme",
          "Auto-evaluation : demander a l'IA de critiquer et ameliorer sa propre reponse",
          "Tree-of-thought : explorer plusieurs chemins de raisonnement en parallele",
          "Self-consistency : generer N reponses et extraire le consensus",
          "Prompt chaining : enchainer plusieurs prompts pour des taches complexes",
        ],
        en: [
          "Meta-prompting: have the AI generate the optimal prompt itself",
          "Self-evaluation: ask the AI to critique and improve its own response",
          "Tree-of-thought: explore multiple reasoning paths in parallel",
          "Self-consistency: generate N responses and extract consensus",
          "Prompt chaining: chain multiple prompts for complex tasks",
        ],
      },
    },
    {
      id: "system-prompts",
      title: {
        fr: "System prompts : le cadre invisible qui change tout",
        en: "System prompts: the invisible framework that changes everything",
      },
      content: {
        fr: "Le system prompt (ou instructions systeme) est le message invisible qui definit le comportement global du modele avant meme que l'utilisateur ne pose sa question. C'est le 'brief permanent' de l'IA. Dans l'API, il se distingue du user prompt et a priorite sur les messages de l'utilisateur. Un system prompt bien concu definit la personnalite, les regles, les formats par defaut, les interdictions, et le style de reponse. C'est la difference entre un assistant generique et un assistant sur mesure. Les applications professionnelles les plus impressionnantes reposent toutes sur un system prompt soigneusement craft : chatbots de support, assistants de redaction, outils d'analyse. En tant que designer ou developpeur, maitriser l'ecriture de system prompts vous donne un avantage competitif massif.",
        en: "The system prompt (or system instructions) is the invisible message that defines the model's overall behavior before the user even asks a question. It's the AI's 'permanent brief'. In the API, it's distinct from the user prompt and has priority over user messages. A well-designed system prompt defines personality, rules, default formats, prohibitions, and response style. It's the difference between a generic assistant and a custom-built assistant. The most impressive professional applications all rely on a carefully crafted system prompt: support chatbots, writing assistants, analysis tools. As a designer or developer, mastering system prompt writing gives you a massive competitive advantage.",
      },
      highlight: {
        fr: "Le system prompt est votre arme secrete. C'est ce qui transforme un LLM generique en assistant specialise. 80% des produits IA impressionnants que vous voyez ne sont qu'un bon modele + un excellent system prompt.",
        en: "The system prompt is your secret weapon. It's what transforms a generic LLM into a specialized assistant. 80% of the impressive AI products you see are just a good model + an excellent system prompt.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : le prompt engineering est un super-pouvoir",
        en: "Conclusion: prompt engineering is a superpower",
      },
      content: {
        fr: "Le prompt engineering n'est pas une mode passagere -- c'est une competence fondamentale qui restera pertinente tant que nous interagirons avec des modeles de langage. Meme si les modeles deviennent plus intelligents et plus tolerants aux prompts mediocres, un expert en prompt engineering obtiendra toujours des resultats superieurs. C'est comme la photographie : un bon appareil photo ne fait pas un bon photographe. Pratiquez le framework TCREI quotidiennement, experimentez avec le few-shot et le chain-of-thought, iterez systematiquement, et en quelques semaines vous verrez une transformation radicale dans la qualite de vos interactions avec l'IA. Le prochain chapitre vous presentera les outils concrets du marche pour mettre ces techniques en application.",
        en: "Prompt engineering is not a passing fad -- it's a fundamental skill that will remain relevant as long as we interact with language models. Even as models become smarter and more tolerant of mediocre prompts, a prompt engineering expert will always achieve superior results. It's like photography: a good camera doesn't make a good photographer. Practice the TCREI framework daily, experiment with few-shot and chain-of-thought, iterate systematically, and in a few weeks you'll see a radical transformation in the quality of your AI interactions. The next chapter will introduce you to the concrete market tools to put these techniques into practice.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Anthropic - Prompt Engineering Documentation",
      url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering",
    },
    {
      id: 2,
      label: "Google Cloud - Introduction to Prompt Design",
      url: "https://cloud.google.com/vertex-ai/docs/generative-ai/learn/introduction-prompt-design",
    },
    {
      id: 3,
      label: "OpenAI - Prompt Engineering Guide",
      url: "https://platform.openai.com/docs/guides/prompt-engineering",
    },
    {
      id: 4,
      label: "Wei et al. - Chain-of-Thought Prompting (2022)",
      url: "https://arxiv.org/abs/2201.11903",
    },
    {
      id: 5,
      label: "Brown et al. - Language Models are Few-Shot Learners (2020)",
      url: "https://arxiv.org/abs/2005.14165",
    },
    {
      id: 6,
      label: "Yao et al. - Tree of Thoughts (2023)",
      url: "https://arxiv.org/abs/2305.10601",
    },
  ],
};
