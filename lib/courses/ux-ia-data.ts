import type { CourseData } from "./fitts-data";

export const uxIaData: CourseData = {
  slug: "ux-ere-ia",
  chapter: 8,
  title: {
    fr: "UX a l'Ere de l'IA : Ce Qui Change, Ce Qui Reste",
    en: "UX in the AI Era: What Changes, What Stays",
  },
  subtitle: {
    fr: "Le Designer Face a l'Intelligence Artificielle",
    en: "The Designer Facing Artificial Intelligence",
  },
  readingTime: 20,
  category: "ux",
  description: {
    fr: "Une analyse sans concession de la transformation du metier de designer UX par l'intelligence artificielle, et les competences critiques a developper des maintenant.",
    en: "An uncompromising analysis of how artificial intelligence is transforming the UX design profession, and the critical skills to develop right now.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Le designer UX est-il en voie de disparition ?",
        en: "Is the UX designer going extinct?",
      },
      content: {
        fr: "En 2024, Figma a lance une fonctionnalite de generation d'interfaces par IA. En quelques secondes, un prompt produit une maquette complete avec navigation, composants, et contenu. Les titres des articles tech ont ete immediats : \"L'IA va remplacer les designers UX\". Ces predictions sont a la fois comprehensibles et fondamentalement erronees. Comprehensibles parce que les outils de generation visuelle progressent a une vitesse stupéfiante. Erronees parce qu'elles confondent la production d'artefacts visuels avec le travail de design. Generer un ecran n'est pas designer une experience. La maquette est un livrable, pas le travail. Le travail, c'est la recherche, la comprehension, la structuration, les arbitrages, les tests. Et ca, aucune IA ne le fait. Pas encore. Peut-etre jamais.",
        en: "In 2024, Figma launched an AI-powered interface generation feature. In seconds, a prompt produces a complete mockup with navigation, components, and content. Tech article headlines were immediate: \"AI will replace UX designers.\" These predictions are both understandable and fundamentally wrong. Understandable because visual generation tools are progressing at a staggering pace. Wrong because they confuse the production of visual artifacts with design work. Generating a screen is not designing an experience. The mockup is a deliverable, not the work. The work is research, understanding, structuring, trade-offs, testing. And that, no AI does. Not yet. Perhaps never.",
      },
      highlight: {
        fr: "L'IA genere des ecrans. Les designers resolvent des problemes humains. Si vous reduisez votre metier a la production de maquettes, oui, vous etes remplacable. Sinon, vous etes plus indispensable que jamais.",
        en: "AI generates screens. Designers solve human problems. If you reduce your profession to producing mockups, yes, you are replaceable. Otherwise, you are more indispensable than ever.",
      },
    },
    {
      id: "evolution-timeline",
      title: {
        fr: "2020-2026 : la chronologie d'une revolution silencieuse",
        en: "2020-2026: the timeline of a silent revolution",
      },
      content: {
        fr: "La transformation de l'UX par l'IA n'a pas commence avec ChatGPT. Elle s'est construite progressivement. En 2020, les systemes de recommandation (Netflix, Spotify, Amazon) utilisaient deja l'IA pour personnaliser l'experience sans intervention de designer. En 2022, GPT-3 et DALL-E ont demontre que l'IA pouvait generer du contenu textuel et visuel de qualite. En 2023, ChatGPT a atteint 100 millions d'utilisateurs en 2 mois, imposant l'interface conversationnelle comme nouveau paradigme. En 2024, les agents IA autonomes (comme Devin, Copilot Workspace) ont commence a executer des taches complexes sans supervision humaine directe. En 2025-2026, nous entrons dans l'ere des interfaces adaptatives ou l'IA modifie l'interface en temps reel selon l'utilisateur, son contexte, et ses objectifs.",
        en: "The transformation of UX by AI did not start with ChatGPT. It was built progressively. In 2020, recommendation systems (Netflix, Spotify, Amazon) were already using AI to personalize experience without designer intervention. In 2022, GPT-3 and DALL-E demonstrated that AI could generate quality textual and visual content. In 2023, ChatGPT reached 100 million users in 2 months, imposing the conversational interface as a new paradigm. In 2024, autonomous AI agents (like Devin, Copilot Workspace) began executing complex tasks without direct human supervision. In 2025-2026, we are entering the era of adaptive interfaces where AI modifies the interface in real-time based on the user, their context, and their goals.",
      },
      bullets: {
        fr: [
          "2020 : Personnalisation algorithmique invisible (recommandations, feed curation).",
          "2022 : Generation de contenu (texte, image) par IA generative.",
          "2023 : Interface conversationnelle comme paradigme dominant (ChatGPT, Bard).",
          "2024 : Agents IA autonomes et generation d'interfaces (Figma AI, v0.dev, Galileo AI).",
          "2025-2026 : Interfaces adaptatives, UX predictif, design systeme pilote par IA.",
        ],
        en: [
          "2020: Invisible algorithmic personalization (recommendations, feed curation).",
          "2022: AI-generated content (text, image) via generative AI.",
          "2023: Conversational interface as dominant paradigm (ChatGPT, Bard).",
          "2024: Autonomous AI agents and interface generation (Figma AI, v0.dev, Galileo AI).",
          "2025-2026: Adaptive interfaces, predictive UX, AI-driven design systems.",
        ],
      },
    },
    {
      id: "what-changed",
      title: {
        fr: "Ce qui a fondamentalement change : la fin du determinisme en interface",
        en: "What has fundamentally changed: the end of determinism in interfaces",
      },
      content: {
        fr: "Avant l'IA, les interfaces etaient deterministes. L'utilisateur cliquait sur un bouton, le meme resultat se produisait a chaque fois. Le designer controlait chaque pixel, chaque etat, chaque transition. Avec l'IA generative, cette certitude a disparu. Un meme prompt dans ChatGPT produit des reponses differentes. Un meme utilisateur recoit des recommandations differentes selon le moment de la journee. L'interface n'est plus un systeme ferme. Elle est probabiliste. Cela change fondamentalement notre role. Nous ne concevons plus des ecrans figes. Nous concevons des systemes de regles, des contraintes de qualite, des garde-fous. Nous sommes passes du design de destinations au design de corridors. L'utilisateur traversera toujours le corridor, mais le paysage qu'il voit peut changer.",
        en: "Before AI, interfaces were deterministic. The user clicked a button, the same result occurred every time. The designer controlled every pixel, every state, every transition. With generative AI, this certainty is gone. The same prompt in ChatGPT produces different responses. The same user receives different recommendations depending on the time of day. The interface is no longer a closed system. It is probabilistic. This fundamentally changes our role. We no longer design static screens. We design rule systems, quality constraints, guardrails. We have moved from designing destinations to designing corridors. The user will always walk through the corridor, but the landscape they see can change.",
      },
      highlight: {
        fr: "L'UX traditionnel designait des pages. L'UX moderne designe des systemes. Si vous pensez encore en ecrans, vous etes deja en retard.",
        en: "Traditional UX designed pages. Modern UX designs systems. If you still think in screens, you are already behind.",
      },
    },
    {
      id: "what-stays",
      title: {
        fr: "Ce qui ne changera jamais : l'humain au centre",
        en: "What will never change: the human at the center",
      },
      content: {
        fr: "Dans le bruit de l'innovation technologique, il est crucial de rappeler ce qui ne change pas. La psychologie humaine ne change pas. La charge cognitive reste limitee. Les biais cognitifs restent les memes. Les besoins fondamentaux (securite, comprehension, controle, accomplissement) restent identiques. Les principes de Gestalt fonctionnent toujours. La loi de Hick s'applique toujours. La loi de Miller sur la memoire de travail s'applique toujours. L'empathie -- la capacite a comprendre profondement les besoins, frustrations, et motivations des utilisateurs -- reste la competence fondamentale du designer. Aucune IA ne peut s'asseoir en face d'un utilisateur, observer ses micro-expressions, comprendre le non-dit, et reformuler le vrai probleme derriere la plainte exprimee.",
        en: "In the noise of technological innovation, it is crucial to remember what does not change. Human psychology does not change. Cognitive load remains limited. Cognitive biases remain the same. Fundamental needs (security, understanding, control, accomplishment) remain identical. Gestalt principles still work. Hick's law still applies. Miller's law on working memory still applies. Empathy -- the ability to deeply understand the needs, frustrations, and motivations of users -- remains the designer's fundamental skill. No AI can sit across from a user, observe their micro-expressions, understand the unspoken, and reformulate the real problem behind the expressed complaint.",
      },
      bullets: {
        fr: [
          "La recherche utilisateur reste irremplacable. L'IA peut analyser des donnees, pas comprendre des emotions.",
          "La pensee systemique reste critique. Les problemes complexes ne se resolvent pas avec des prompts.",
          "L'ethique du design reste humaine. L'IA n'a pas de boussole morale -- c'est votre responsabilite.",
          "La collaboration interprofessionnelle reste essentielle. Convaincre un PM, negocier avec un dev, presenter a un CEO -- ce sont des competences humaines.",
        ],
        en: [
          "User research remains irreplaceable. AI can analyze data, not understand emotions.",
          "Systems thinking remains critical. Complex problems are not solved with prompts.",
          "Design ethics remains human. AI has no moral compass -- that is your responsibility.",
          "Cross-functional collaboration remains essential. Convincing a PM, negotiating with a dev, presenting to a CEO -- these are human skills.",
        ],
      },
    },
    {
      id: "conversation-design",
      title: {
        fr: "Le design conversationnel : le nouveau paradigme d'interaction",
        en: "Conversation design: the new interaction paradigm",
      },
      content: {
        fr: "L'interface conversationnelle n'est pas un chatbot ameliore. C'est un changement de paradigme fondamental. Pendant 40 ans, les interfaces WIMP (Window, Icon, Menu, Pointer) ont domine. L'utilisateur navigait dans une structure predefinée par le designer. Avec l'interface conversationnelle, l'utilisateur exprime son intention en langage naturel, et le systeme interprete, planifie, et execute. Le designer ne controle plus le chemin. Il controle la qualite de l'interpretation, la pertinence de la reponse, et l'elegance de la presentation des resultats. Cela exige de nouvelles competences : comprendre les modeles de tours de parole, concevoir des strategies de desambiguisation, gerer les echecs de comprehension avec grace, et creer des mecanismes de feedback qui construisent la confiance.",
        en: "The conversational interface is not an improved chatbot. It is a fundamental paradigm shift. For 40 years, WIMP interfaces (Window, Icon, Menu, Pointer) dominated. The user navigated a structure predefined by the designer. With conversational interfaces, the user expresses their intent in natural language, and the system interprets, plans, and executes. The designer no longer controls the path. They control the quality of interpretation, the relevance of the response, and the elegance of result presentation. This demands new skills: understanding turn-taking models, designing disambiguation strategies, handling comprehension failures gracefully, and creating feedback mechanisms that build trust.",
      },
      highlight: {
        fr: "Le meilleur design conversationnel ne ressemble pas a une conversation avec un humain. Il ressemble a une conversation avec un assistant extraordinairement competent qui connait ses propres limites.",
        en: "The best conversational design does not look like a conversation with a human. It looks like a conversation with an extraordinarily competent assistant who knows its own limitations.",
      },
    },
    {
      id: "trust-problem",
      title: {
        fr: "Le probleme de la confiance : le plus grand defi UX de l'IA",
        en: "The trust problem: AI's biggest UX challenge",
      },
      content: {
        fr: "La confiance est le probleme UX central de l'ere IA, et nous n'avons pas encore trouve les bonnes solutions. Les utilisateurs font face a un dilemme : l'IA est suffisamment bonne pour etre utile, mais suffisamment imparfaite pour etre dangereuse si on lui fait confiance aveuglément. Les hallucinations des LLM (reponses factuellement fausses mais presentees avec assurance) sont le symptome le plus visible. Mais le probleme est plus profond. Comment un utilisateur sait-il si la recommandation de l'IA est biaisee ? Comment verifie-t-il une traduction dans une langue qu'il ne parle pas ? Comment fait-il confiance a un diagnostic medical suggere par un algorithme ? Le design de la confiance dans les systemes IA est le probleme le plus important que notre discipline doit resoudre dans la prochaine decennie.",
        en: "Trust is the central UX problem of the AI era, and we have not yet found the right solutions. Users face a dilemma: AI is good enough to be useful, but imperfect enough to be dangerous if blindly trusted. LLM hallucinations (factually wrong answers presented with confidence) are the most visible symptom. But the problem runs deeper. How does a user know if the AI's recommendation is biased? How do they verify a translation in a language they do not speak? How do they trust a medical diagnosis suggested by an algorithm? Designing trust in AI systems is the most important problem our discipline must solve in the next decade.",
      },
      bullets: {
        fr: [
          "Afficher les niveaux de confiance : \"Je suis sur a 85% de cette reponse\" est plus honnete qu'une affirmation absolue.",
          "Citer les sources : l'IA doit montrer d'ou vient l'information pour permettre la verification.",
          "Signaler les incertitudes : le design doit differencier visuellement les faits verifies des inferences.",
          "Permettre le controle : l'utilisateur doit pouvoir corriger, refuser, ou demander une explication a tout moment.",
        ],
        en: [
          "Display confidence levels: \"I am 85% sure of this answer\" is more honest than an absolute assertion.",
          "Cite sources: AI must show where information comes from to enable verification.",
          "Flag uncertainties: design must visually differentiate verified facts from inferences.",
          "Enable control: the user must be able to correct, reject, or request an explanation at any time.",
        ],
      },
    },
    {
      id: "explainability",
      title: {
        fr: "L'explicabilite : montrer le \"pourquoi\" derriere la recommandation",
        en: "Explainability: showing the \"why\" behind the recommendation",
      },
      content: {
        fr: "L'explicabilite (ou XAI -- Explainable AI) est la capacite d'un systeme IA a communiquer son raisonnement de maniere comprehensible pour l'utilisateur. C'est un enjeu UX majeur, pas seulement technique. Les systemes de recommandation de Netflix ou Spotify illustrent bien le spectre. \"Parce que vous avez regarde Breaking Bad\" est une explication simple et efficace. Mais la plupart des systemes IA sont des boites noires. Le defi du designer est de creer des interfaces qui exposent le raisonnement sans submerger l'utilisateur. C'est un equilibre delicat entre transparence et simplicite. Trop d'explication paralyse. Pas assez d'explication detruit la confiance. La strategie du \"progressive disclosure\" s'applique parfaitement : montrer un resume par defaut, avec la possibilite d'explorer les details.",
        en: "Explainability (or XAI -- Explainable AI) is the ability of an AI system to communicate its reasoning in a way that is understandable to the user. This is a major UX challenge, not just a technical one. Netflix or Spotify recommendation systems illustrate the spectrum well. \"Because you watched Breaking Bad\" is a simple and effective explanation. But most AI systems are black boxes. The designer's challenge is to create interfaces that expose reasoning without overwhelming the user. It is a delicate balance between transparency and simplicity. Too much explanation paralyzes. Not enough explanation destroys trust. The \"progressive disclosure\" strategy applies perfectly: show a summary by default, with the ability to explore details.",
      },
      highlight: {
        fr: "Un systeme IA qui ne peut pas expliquer ses decisions ne merite pas la confiance de l'utilisateur. L'explicabilite n'est pas un bonus technique. C'est un droit de l'utilisateur.",
        en: "An AI system that cannot explain its decisions does not deserve user trust. Explainability is not a technical bonus. It is a user right.",
      },
    },
    {
      id: "prompt-as-interface",
      title: {
        fr: "Le prompt comme interface : la nouvelle interaction homme-machine",
        en: "Prompt as interface: the new human-machine interaction",
      },
      content: {
        fr: "Le prompt engineering n'est pas reserve aux developpeurs. C'est une nouvelle forme de design d'interaction. Quand un utilisateur ecrit un prompt, il formule une intention dans un langage ambigu, contextuel, et souvent imprecis. Le systeme doit interpreter cette intention et produire un resultat pertinent. Le design du champ de prompt, des suggestions, des examples, des constraints visibles, et du feedback post-generation est un enjeu UX critique. Les meilleurs systemes ne demandent pas a l'utilisateur de devenir un expert en prompt. Ils l'aident a formuler son intention par des scaffoldings : templates, suggestions contextuelles, reformulations automatiques, et iterations guidees. Midjourney a compris cela avec ses boutons de variation, d'upscale, et de remix. ChatGPT avec ses suggestions de prompts.",
        en: "Prompt engineering is not reserved for developers. It is a new form of interaction design. When a user writes a prompt, they formulate an intent in ambiguous, contextual, and often imprecise language. The system must interpret this intent and produce a relevant result. The design of the prompt field, suggestions, examples, visible constraints, and post-generation feedback is a critical UX challenge. The best systems do not ask the user to become a prompt expert. They help formulate intent through scaffolding: templates, contextual suggestions, automatic reformulations, and guided iterations. Midjourney understood this with its variation, upscale, and remix buttons. ChatGPT with its prompt suggestions.",
      },
      bullets: {
        fr: [
          "Montrez des exemples de prompts efficaces directement dans l'interface -- le placeholder est votre meilleur outil pedagogique.",
          "Offrez des suggestions contextuelles basees sur l'historique et le contexte de l'utilisateur.",
          "Permettez l'iteration : \"Refais mais en plus court\", \"Change le ton\", \"Ajoute des exemples\" doivent etre des actions en un clic.",
          "Rendez les parametres avances accessibles mais non obligatoires. La complexite doit etre optionnelle.",
        ],
        en: [
          "Show examples of effective prompts directly in the interface -- the placeholder is your best pedagogical tool.",
          "Offer contextual suggestions based on user history and context.",
          "Enable iteration: \"Redo but shorter,\" \"Change the tone,\" \"Add examples\" should be one-click actions.",
          "Make advanced parameters accessible but not required. Complexity should be optional.",
        ],
      },
    },
    {
      id: "ai-generated-ui",
      title: {
        fr: "Les interfaces generees par IA : opportunite ou menace ?",
        en: "AI-generated interfaces: opportunity or threat?",
      },
      content: {
        fr: "Les outils comme v0.dev (Vercel), Galileo AI, et les fonctionnalites IA de Figma peuvent generer des interfaces completes a partir d'un prompt textuel. La qualite est deja impressionnante pour du prototypage rapide. Mais je suis categorique : ces outils ne remplaceront pas les designers. Ils remplaceront les taches repetitives des designers. Generer un ecran de login standard, un tableau de bord generique, un formulaire classique -- oui, l'IA fait ca tres bien. Mais concevoir un parcours d'onboarding qui prend en compte les differents niveaux de maturite technique des utilisateurs, qui s'adapte au contexte culturel, qui equilibre les objectifs business et les besoins utilisateurs -- ca, l'IA ne le fait pas. Le vrai danger n'est pas que l'IA remplace les designers. C'est que les entreprises croient que l'IA remplace les designers et cessent d'investir dans la recherche utilisateur et la reflexion strategique.",
        en: "Tools like v0.dev (Vercel), Galileo AI, and Figma's AI features can generate complete interfaces from a text prompt. The quality is already impressive for rapid prototyping. But I am categorical: these tools will not replace designers. They will replace designers' repetitive tasks. Generating a standard login screen, a generic dashboard, a classic form -- yes, AI does that very well. But designing an onboarding flow that accounts for users' different levels of technical maturity, adapts to cultural context, balances business objectives and user needs -- AI does not do that. The real danger is not that AI replaces designers. It is that companies believe AI replaces designers and stop investing in user research and strategic thinking.",
      },
      highlight: {
        fr: "L'IA est le meilleur stagiaire du monde : rapide, infatigable, et incapable de poser les bonnes questions. Le role du designer senior est de poser les bonnes questions. C'est irremplacable.",
        en: "AI is the world's best intern: fast, tireless, and incapable of asking the right questions. The senior designer's role is to ask the right questions. That is irreplaceable.",
      },
    },
    {
      id: "new-skills",
      title: {
        fr: "Les competences critiques du designer UX en 2026",
        en: "Critical UX designer skills in 2026",
      },
      content: {
        fr: "Le metier evolue, et avec lui le profil de competences requis. Les designers qui prosperent dans l'ere IA ne sont pas ceux qui maitrisent le plus d'outils. Ce sont ceux qui combinent pensee strategique, expertise en recherche, et fluidite avec les systemes IA. La maitrise des outils IA (prompting efficace, comprehension des limites, integration dans le workflow) est desormais un prerequis, pas un differenciateur. Ce qui differencie, c'est la capacite a formuler les bons problemes, a structurer la complexite, a evaluer de maniere critique les outputs IA, et a prendre des decisions de design qui tiennent compte de facteurs que l'IA ne peut pas mesurer : l'emotion, la culture, l'ethique, le contexte humain.",
        en: "The profession is evolving, and with it the required skill profile. Designers who thrive in the AI era are not those who master the most tools. They are those who combine strategic thinking, research expertise, and fluency with AI systems. Mastery of AI tools (effective prompting, understanding limitations, workflow integration) is now a prerequisite, not a differentiator. What differentiates is the ability to formulate the right problems, structure complexity, critically evaluate AI outputs, and make design decisions that account for factors AI cannot measure: emotion, culture, ethics, human context.",
      },
      bullets: {
        fr: [
          "Pensee systemique : comprendre comment les composants d'un produit interagissent dans un ecosysteme complexe.",
          "Design d'interaction conversationnelle : concevoir des flux de dialogue naturels, gerer les erreurs, construire la confiance.",
          "Literacy IA : comprendre les capacites et limites des modeles, savoir quand l'IA est pertinente et quand elle ne l'est pas.",
          "Evaluation critique : savoir detecter les biais, les hallucinations, les reponses superficiellement correctes mais fondamentalement erronees.",
          "Ethique appliquee : anticiper les consequences non-intentionnelles des systemes IA sur les utilisateurs vulnerables.",
          "Prototypage rapide avec IA : utiliser l'IA pour generer, iterer, et tester plus vite -- pas pour remplacer la reflexion.",
        ],
        en: [
          "Systems thinking: understanding how product components interact in a complex ecosystem.",
          "Conversational interaction design: designing natural dialogue flows, handling errors, building trust.",
          "AI literacy: understanding model capabilities and limitations, knowing when AI is relevant and when it is not.",
          "Critical evaluation: detecting biases, hallucinations, superficially correct but fundamentally wrong answers.",
          "Applied ethics: anticipating unintended consequences of AI systems on vulnerable users.",
          "Rapid prototyping with AI: using AI to generate, iterate, and test faster -- not to replace thinking.",
        ],
      },
    },
    {
      id: "ethics",
      title: {
        fr: "L'ethique de l'IA en UX : notre responsabilite de designers",
        en: "AI ethics in UX: our responsibility as designers",
      },
      content: {
        fr: "L'ethique n'est pas un sujet theorique reserve aux conferences. C'est une responsabilite quotidienne du designer. Chaque decision de design dans un systeme IA a des consequences. Un algorithme de recommandation qui optimise l'engagement peut aussi amplifier la desinformation et creer des bulles de filtre. Un systeme de scoring automatise peut reproduire et amplifier les biais sociaux presents dans les donnees d'entrainement. Une interface qui rend l'IA trop \"humaine\" peut creer une dependance emotionnelle chez les utilisateurs vulnerables. En tant que designers, nous sommes les gardiens de l'experience utilisateur. Si nous concevons des interfaces qui masquent la nature IA du systeme, qui rendent l'opt-out difficile, ou qui exploitent la confiance pour maximiser l'engagement, nous sommes complices.",
        en: "Ethics is not a theoretical topic reserved for conferences. It is a daily responsibility of the designer. Every design decision in an AI system has consequences. A recommendation algorithm optimizing engagement can also amplify misinformation and create filter bubbles. An automated scoring system can reproduce and amplify social biases present in training data. An interface that makes AI too \"human\" can create emotional dependency in vulnerable users. As designers, we are the guardians of user experience. If we design interfaces that hide the AI nature of the system, make opting out difficult, or exploit trust to maximize engagement, we are complicit.",
      },
      highlight: {
        fr: "Vous n'etes pas un executant qui \"fait ce qu'on lui demande\". Vous etes un designer. Si le brief est contraire a l'ethique, votre responsabilite est de le dire. A voix haute.",
        en: "You are not an executor who \"does what they are told.\" You are a designer. If the brief is unethical, your responsibility is to say so. Out loud.",
      },
      bullets: {
        fr: [
          "Transparence : l'utilisateur doit toujours savoir qu'il interagit avec une IA. Les dark patterns IA sont inacceptables.",
          "Consentement : la collecte de donnees pour l'entrainement de modeles doit etre explicite et revocable.",
          "Inclusion : les systemes IA doivent etre testes sur des populations diverses pour detecter les biais avant le deploiement.",
          "Controle : l'utilisateur doit pouvoir desactiver les fonctionnalites IA, corriger les erreurs, et obtenir un recours humain.",
        ],
        en: [
          "Transparency: the user must always know they are interacting with AI. AI dark patterns are unacceptable.",
          "Consent: data collection for model training must be explicit and revocable.",
          "Inclusion: AI systems must be tested on diverse populations to detect biases before deployment.",
          "Control: the user must be able to disable AI features, correct errors, and access human recourse.",
        ],
      },
    },
    {
      id: "designer-role-2026",
      title: {
        fr: "Le designer UX en 2026 : orchestrateur, pas operateur",
        en: "The UX designer in 2026: orchestrator, not operator",
      },
      content: {
        fr: "Le role du designer UX a toujours evolue. Du webmaster des annees 2000 au designer d'experience des annees 2010, au product designer des annees 2020. En 2026, le designer devient un orchestrateur de systemes intelligents. Il ne dessine plus chaque ecran. Il definit les regles, les contraintes, les principes que les systemes IA respectent pour generer des experiences pertinentes. Il arbitre entre personnalisation et vie privee, entre efficacite et comprehension, entre automatisation et controle utilisateur. C'est un role plus strategique, plus intellectuel, et objectivement plus difficile que celui de \"pixel pusher\" que certains regrettent. Le designer de 2026 travaille a l'intersection de la technologie, de la psychologie, du business, et de l'ethique. Il est le traducteur entre les capacites de l'IA et les besoins humains.",
        en: "The UX designer's role has always evolved. From the webmaster of the 2000s to the experience designer of the 2010s, to the product designer of the 2020s. In 2026, the designer becomes an orchestrator of intelligent systems. They no longer draw every screen. They define the rules, constraints, and principles that AI systems follow to generate relevant experiences. They arbitrate between personalization and privacy, between efficiency and comprehension, between automation and user control. This is a more strategic, more intellectual, and objectively more difficult role than the \"pixel pusher\" some miss. The 2026 designer works at the intersection of technology, psychology, business, and ethics. They are the translator between AI capabilities and human needs.",
      },
      highlight: {
        fr: "Le designer de 2026 ne dit plus \"voici la maquette\". Il dit \"voici le systeme de regles qui garantit que l'experience sera pertinente, quelle que soit la reponse de l'IA.\"",
        en: "The 2026 designer no longer says \"here is the mockup.\" They say \"here is the rule system that ensures the experience will be relevant, regardless of the AI's response.\"",
      },
    },
    {
      id: "future-vision",
      title: {
        fr: "Vision prospective : l'UX dans un monde d'agents autonomes",
        en: "Forward vision: UX in a world of autonomous agents",
      },
      content: {
        fr: "A moyen terme, les agents IA autonomes vont transformer la nature meme de l'interface utilisateur. Quand un agent peut reserver un voyage, comparer des assurances, negocier un prix, et coordonner un planning a votre place, quel est le role de l'interface ? L'interface ne disparait pas. Elle se transforme. Elle devient un tableau de bord de supervision ou l'utilisateur observe, valide, et corrige les actions de l'agent. Le design de cette supervision est un territoire vierge : comment representer les actions en cours, comment signaler les incertitudes, comment permettre l'intervention sans friction. Les interfaces agent-a-humain remplaceront progressivement certaines interfaces humain-a-systeme. Le designer qui comprend cette transition et se positionne des maintenant aura un avantage competitif enorme dans les 5 prochaines annees.",
        en: "In the medium term, autonomous AI agents will transform the very nature of the user interface. When an agent can book a trip, compare insurance, negotiate a price, and coordinate a schedule on your behalf, what is the role of the interface? The interface does not disappear. It transforms. It becomes a supervision dashboard where the user observes, validates, and corrects the agent's actions. Designing this supervision is uncharted territory: how to represent ongoing actions, how to signal uncertainties, how to enable intervention without friction. Agent-to-human interfaces will progressively replace some human-to-system interfaces. The designer who understands this transition and positions themselves now will have an enormous competitive advantage in the next 5 years.",
      },
      bullets: {
        fr: [
          "Design de supervision : tableaux de bord qui montrent ce que l'agent fait, a fait, et prevoit de faire.",
          "Design de delegation : interfaces qui permettent de calibrer le niveau d'autonomie de l'agent (\"decide seul\" vs \"demande-moi avant\").",
          "Design de recuperation : mecanismes pour annuler, corriger, ou reprendre le controle quand l'agent se trompe.",
          "Design de confiance progressive : systemes qui augmentent l'autonomie de l'agent a mesure que la confiance de l'utilisateur grandit.",
        ],
        en: [
          "Supervision design: dashboards showing what the agent is doing, has done, and plans to do.",
          "Delegation design: interfaces that allow calibrating the agent's autonomy level (\"decide alone\" vs. \"ask me first\").",
          "Recovery design: mechanisms to undo, correct, or take back control when the agent makes mistakes.",
          "Progressive trust design: systems that increase agent autonomy as user trust grows.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "L'IA ne remplace pas les designers. Elle revele les vrais designers.",
        en: "AI does not replace designers. It reveals the real designers.",
      },
      content: {
        fr: "L'intelligence artificielle est le plus grand filtre de competences que notre metier ait connu. Les designers qui se definissent par leur maitrise de Figma seront progressivement automatises. Ceux qui se definissent par leur capacite a comprendre les humains, structurer des problemes complexes, et prendre des decisions ethiques dans l'incertitude -- ceux-la seront plus demandes que jamais. Le metier ne meurt pas. Il mue. Et cette mutation est une opportunite extraordinaire pour ceux qui acceptent de se reinventer. Apprenez a travailler avec l'IA, pas contre elle. Utilisez-la pour accelerer votre execution et liberer du temps pour ce qui compte vraiment : la recherche, la reflexion, l'empathie, et le jugement. La machine calcule. Le designer pense. C'est la ligne de demarcation. Elle ne bougera pas.",
        en: "Artificial intelligence is the greatest skills filter our profession has ever known. Designers who define themselves by their mastery of Figma will be progressively automated. Those who define themselves by their ability to understand humans, structure complex problems, and make ethical decisions under uncertainty -- they will be more in demand than ever. The profession is not dying. It is molting. And this transformation is an extraordinary opportunity for those who accept reinvention. Learn to work with AI, not against it. Use it to accelerate your execution and free up time for what truly matters: research, reflection, empathy, and judgment. The machine calculates. The designer thinks. That is the dividing line. It will not move.",
      },
      highlight: {
        fr: "L'IA est un amplificateur. Elle amplifie les bons designers et expose les mauvais. La question n'est pas \"L'IA va-t-elle me remplacer ?\" La question est : \"Suis-je le type de designer que l'IA rend plus puissant ?\"",
        en: "AI is an amplifier. It amplifies good designers and exposes bad ones. The question is not \"Will AI replace me?\" The question is: \"Am I the kind of designer that AI makes more powerful?\"",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Nielsen, J. (2023). AI and the Future of UX. Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/ai-paradigm/",
    },
    {
      id: 2,
      label: "Google PAIR (People + AI Research). Guidelines for Human-AI Interaction.",
      url: "https://pair.withgoogle.com/guidebook/",
    },
    {
      id: 3,
      label: "Microsoft (2024). HAX Toolkit — Human-AI Experience Design Guidelines.",
      url: "https://www.microsoft.com/en-us/haxtoolkit/",
    },
    {
      id: 4,
      label: "Amershi, S. et al. (2019). Guidelines for Human-AI Interaction. CHI '19: Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems.",
      url: "https://doi.org/10.1145/3290605.3300233",
    },
    {
      id: 5,
      label: "Nielsen Norman Group (2024). UX for AI: Design Guidelines for AI-Powered Features.",
      url: "https://www.nngroup.com/articles/ux-ai/",
    },
    {
      id: 6,
      label: "Figma (2024). Introducing AI-Powered Design Features.",
      url: "https://www.figma.com/ai/",
    },
    {
      id: 7,
      label: "Vercel (2024). v0 — Generative UI with AI.",
      url: "https://v0.dev/",
    },
    {
      id: 8,
      label: "Shneiderman, B. (2022). Human-Centered AI. Oxford University Press.",
    },
    {
      id: 9,
      label: "EU AI Act (2024). Regulation (EU) 2024/1689 — Artificial Intelligence Act.",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    },
    {
      id: 10,
      label: "Norman, D.A. (2023). Design for a Better World: Meaningful, Sustainable, Humanity Centered. MIT Press.",
    },
  ],
};
