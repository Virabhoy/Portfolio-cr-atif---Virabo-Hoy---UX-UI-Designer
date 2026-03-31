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

export const iaIntroductionData: CourseData = {
  slug: "ia-introduction",
  chapter: 16,
  title: {
    fr: "Introduction a l'IA Generative",
    en: "Introduction to Generative AI",
  },
  subtitle: {
    fr: "Comprendre les Fondamentaux pour Ne Plus Subir",
    en: "Understanding the Fundamentals to Take Control",
  },
  readingTime: 14,
  description: {
    fr: "Comprendre ce qu'est l'IA generative, comment fonctionnent les LLMs (transformers, tokens, fenetres de contexte), les differences entre GPT, Claude, Gemini et Llama, et pourquoi cela concerne tout le monde aujourd'hui.",
    en: "Understand what generative AI is, how LLMs work (transformers, tokens, context windows), the differences between GPT, Claude, Gemini and Llama, and why it matters for everyone today.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "L'IA est partout -- et vous l'utilisez deja sans le savoir",
        en: "AI is everywhere -- and you're already using it without knowing",
      },
      content: {
        fr: "Quand vous tapez un message et que votre clavier suggere la fin de votre phrase, quand Netflix vous recommande un film, quand Google Photos reconnait le visage de vos enfants : c'est de l'IA. Mais depuis fin 2022, une revolution silencieuse a change la donne. L'IA generative ne se contente plus de classer ou predire -- elle cree. Du texte, des images, du code, de la musique, des videos. En 2026, ne pas comprendre ces outils, c'est comme ne pas savoir utiliser un ordinateur en 2005. Ce n'est plus une option, c'est une competence de survie professionnelle.",
        en: "When you type a message and your keyboard suggests the end of your sentence, when Netflix recommends a movie, when Google Photos recognizes your children's faces: that's AI. But since late 2022, a silent revolution changed the game. Generative AI no longer just classifies or predicts -- it creates. Text, images, code, music, videos. In 2026, not understanding these tools is like not knowing how to use a computer in 2005. It's no longer optional, it's a professional survival skill.",
      },
      highlight: {
        fr: "En 2026, la question n'est plus 'faut-il utiliser l'IA ?' mais 'comment l'utiliser intelligemment ?'. Ceux qui refusent de comprendre ces outils se retrouveront marginalises, pas par la machine, mais par ceux qui savent s'en servir.",
        en: "In 2026, the question is no longer 'should we use AI?' but 'how to use it intelligently?'. Those who refuse to understand these tools will find themselves marginalized, not by the machine, but by those who know how to use it.",
      },
    },
    {
      id: "what-is-gen-ai",
      title: {
        fr: "Qu'est-ce que l'IA generative exactement ?",
        en: "What exactly is generative AI?",
      },
      content: {
        fr: "L'IA generative est une branche de l'intelligence artificielle capable de produire du contenu original : texte, images, code, audio, video. Contrairement a l'IA classique qui analyse et classifie des donnees existantes, l'IA generative synthetise de nouvelles informations a partir de patterns appris sur des milliards de documents. Le principe fondamental est simple : on entraine un modele sur une quantite massive de donnees, et ce modele apprend a predire statistiquement ce qui devrait venir ensuite. C'est ce mecanisme de prediction qui permet a ChatGPT d'ecrire un email, a Midjourney de generer une image, ou a Suno de composer une chanson.",
        en: "Generative AI is a branch of artificial intelligence capable of producing original content: text, images, code, audio, video. Unlike traditional AI that analyzes and classifies existing data, generative AI synthesizes new information from patterns learned across billions of documents. The fundamental principle is simple: you train a model on a massive amount of data, and that model learns to statistically predict what should come next. It's this prediction mechanism that allows ChatGPT to write an email, Midjourney to generate an image, or Suno to compose a song.",
      },
      bullets: {
        fr: [
          "IA discriminative : classe, detecte, predit (ex : filtre anti-spam, reconnaissance faciale)",
          "IA generative : cree, synthetise, produit du contenu nouveau (ex : ChatGPT, DALL-E, Midjourney)",
          "Foundation models : modeles massifs pre-entraines, adaptables a de multiples taches",
          "Fine-tuning : specialisation d'un modele general pour une tache ou un domaine specifique",
        ],
        en: [
          "Discriminative AI: classifies, detects, predicts (e.g., spam filter, facial recognition)",
          "Generative AI: creates, synthesizes, produces new content (e.g., ChatGPT, DALL-E, Midjourney)",
          "Foundation models: massive pre-trained models, adaptable to multiple tasks",
          "Fine-tuning: specializing a general model for a specific task or domain",
        ],
      },
    },
    {
      id: "how-llms-work",
      title: {
        fr: "Comment fonctionnent les LLMs : tokens, transformers et magie statistique",
        en: "How LLMs work: tokens, transformers and statistical magic",
      },
      content: {
        fr: "Un LLM (Large Language Model) ne 'comprend' pas le langage au sens humain. Il manipule des tokens -- des fragments de mots, typiquement 3-4 caracteres. Le mot 'comprendre' devient par exemple ['com', 'prend', 're']. L'architecture Transformer, inventee par Google en 2017 dans le papier 'Attention Is All You Need', est le coeur de cette revolution. Son mecanisme d'attention permet au modele de ponderer l'importance de chaque mot par rapport a tous les autres dans une phrase, capturant ainsi le contexte et les nuances. L'entrainement se fait en deux phases : le pre-training sur des teraoctets de texte (livres, sites web, code), puis l'alignement via RLHF (Reinforcement Learning from Human Feedback) pour rendre le modele utile et sur.",
        en: "An LLM (Large Language Model) doesn't 'understand' language in the human sense. It manipulates tokens -- word fragments, typically 3-4 characters. The word 'understand' becomes for example ['under', 'stand']. The Transformer architecture, invented by Google in 2017 in the paper 'Attention Is All You Need', is at the heart of this revolution. Its attention mechanism allows the model to weigh the importance of each word relative to all others in a sentence, thus capturing context and nuances. Training happens in two phases: pre-training on terabytes of text (books, websites, code), then alignment via RLHF (Reinforcement Learning from Human Feedback) to make the model useful and safe.",
      },
      highlight: {
        fr: "Un LLM n'est pas un moteur de recherche. Il ne 'sait' rien -- il predit le prochain token le plus probable. Cette distinction fondamentale explique a la fois sa puissance (creativite, synthese) et ses limites (hallucinations, absence de raisonnement formel).",
        en: "An LLM is not a search engine. It doesn't 'know' anything -- it predicts the most probable next token. This fundamental distinction explains both its power (creativity, synthesis) and its limitations (hallucinations, lack of formal reasoning).",
      },
    },
    {
      id: "major-models",
      title: {
        fr: "Le paysage des grands modeles : GPT, Claude, Gemini, Llama, Mistral",
        en: "The major models landscape: GPT, Claude, Gemini, Llama, Mistral",
      },
      content: {
        fr: "En 2026, cinq familles de modeles dominent le marche, chacune avec une philosophie et des forces distinctes. GPT-4o et GPT-4.5 d'OpenAI restent les plus connus du grand public, avec une force en generation creative et multimodale. Claude d'Anthropic (Sonnet 4, Opus 4) excelle en raisonnement, en suivi d'instructions complexes et en generation de code -- c'est mon choix personnel pour le travail professionnel. Gemini de Google brille par son integration native avec l'ecosysteme Google et sa fenetre de contexte massive (jusqu'a 2M de tokens). Llama de Meta democratise l'IA open-source avec des modeles performants que chacun peut deployer et adapter. Mistral, la pepite francaise, prouve qu'on peut rivaliser avec les geants avec des modeles plus petits mais remarquablement efficaces.",
        en: "In 2026, five model families dominate the market, each with a distinct philosophy and strengths. GPT-4o and GPT-4.5 from OpenAI remain the most well-known to the general public, with strength in creative and multimodal generation. Claude from Anthropic (Sonnet 4, Opus 4) excels at reasoning, complex instruction following, and code generation -- it's my personal choice for professional work. Gemini from Google shines through its native integration with the Google ecosystem and its massive context window (up to 2M tokens). Llama from Meta democratizes open-source AI with performant models anyone can deploy and adapt. Mistral, the French gem, proves you can compete with giants using smaller but remarkably efficient models.",
      },
      bullets: {
        fr: [
          "OpenAI (GPT-4o, GPT-4.5) : pionnier, fort en multimodal, le plus grand ecosysteme",
          "Anthropic (Claude Sonnet 4, Opus 4) : meilleur raisonnement, meilleur code, approche safety-first",
          "Google (Gemini 2.5 Pro) : contexte massif (2M tokens), integration Google native",
          "Meta (Llama 4) : open-source, deployable en local, ideal pour le fine-tuning",
          "Mistral (Mistral Large, Codestral) : excellence francaise, modeles compacts et efficaces",
        ],
        en: [
          "OpenAI (GPT-4o, GPT-4.5): pioneer, strong at multimodal, the largest ecosystem",
          "Anthropic (Claude Sonnet 4, Opus 4): best reasoning, best code, safety-first approach",
          "Google (Gemini 2.5 Pro): massive context (2M tokens), native Google integration",
          "Meta (Llama 4): open-source, locally deployable, ideal for fine-tuning",
          "Mistral (Mistral Large, Codestral): French excellence, compact and efficient models",
        ],
      },
    },
    {
      id: "context-windows",
      title: {
        fr: "Les fenetres de contexte : la memoire de travail de l'IA",
        en: "Context windows: the AI's working memory",
      },
      content: {
        fr: "La fenetre de contexte est peut-etre le concept le plus important et le plus mal compris de l'IA generative. C'est la quantite maximale de texte qu'un modele peut 'voir' simultanement lors d'une conversation. Imaginez-la comme la memoire de travail : tout ce qui depasse est oublie. En 2026, les tailles varient enormement : 128K tokens pour Claude Sonnet 4 (environ 300 pages), 200K pour Claude Opus 4, jusqu'a 2 millions pour Gemini 2.5. Mais plus grand ne signifie pas toujours mieux. Les recherches montrent que les modeles perdent en precision au milieu de tres longs contextes (le 'lost in the middle problem'). La gestion strategique du contexte est devenue une competence cle.",
        en: "The context window is perhaps the most important and most misunderstood concept in generative AI. It's the maximum amount of text a model can 'see' simultaneously during a conversation. Think of it as working memory: everything beyond it is forgotten. In 2026, sizes vary enormously: 128K tokens for Claude Sonnet 4 (about 300 pages), 200K for Claude Opus 4, up to 2 million for Gemini 2.5. But bigger doesn't always mean better. Research shows models lose accuracy in the middle of very long contexts (the 'lost in the middle problem'). Strategic context management has become a key skill.",
      },
      highlight: {
        fr: "La fenetre de contexte, c'est l'immobilier de l'IA. Chaque token compte. Les experts ne remplissent pas le contexte -- ils le curent strategiquement pour maximiser la pertinence de chaque reponse.",
        en: "The context window is AI's real estate. Every token counts. Experts don't fill the context -- they strategically curate it to maximize the relevance of every response.",
      },
    },
    {
      id: "temperature-parameters",
      title: {
        fr: "Temperature et parametres : piloter la creativite de l'IA",
        en: "Temperature and parameters: steering the AI's creativity",
      },
      content: {
        fr: "La temperature est le parametre qui controle le degre d'aleatoire dans les reponses de l'IA. A temperature 0, le modele choisit toujours le token le plus probable -- les reponses sont deterministes, repetables, mais potentiellement seches. A temperature 1, le modele explore des tokens moins probables -- les reponses sont plus creatives, surprenantes, mais aussi plus risquees. En pratique, temperature 0-0.3 pour du code ou des analyses factuelles, 0.5-0.7 pour de la redaction professionnelle, 0.8-1.0 pour du brainstorming ou de la creation. D'autres parametres comme top_p (nucleus sampling) et max_tokens affinent encore le comportement du modele.",
        en: "Temperature is the parameter that controls the degree of randomness in AI responses. At temperature 0, the model always picks the most probable token -- responses are deterministic, repeatable, but potentially dry. At temperature 1, the model explores less probable tokens -- responses are more creative, surprising, but also riskier. In practice, use temperature 0-0.3 for code or factual analyses, 0.5-0.7 for professional writing, 0.8-1.0 for brainstorming or creation. Other parameters like top_p (nucleus sampling) and max_tokens further refine the model's behavior.",
      },
      bullets: {
        fr: [
          "Temperature 0 : deterministe, ideal pour le code et l'analyse",
          "Temperature 0.5 : equilibre entre precision et creativite",
          "Temperature 1.0 : maximum de creativite, ideal pour le brainstorming",
          "top_p : controle la diversite du vocabulaire utilise",
          "max_tokens : limite la longueur de la reponse generee",
        ],
        en: [
          "Temperature 0: deterministic, ideal for code and analysis",
          "Temperature 0.5: balance between precision and creativity",
          "Temperature 1.0: maximum creativity, ideal for brainstorming",
          "top_p: controls the diversity of vocabulary used",
          "max_tokens: limits the length of the generated response",
        ],
      },
    },
    {
      id: "use-cases",
      title: {
        fr: "Les cas d'usage concrets en 2026 : texte, image, code, audio",
        en: "Concrete use cases in 2026: text, image, code, audio",
      },
      content: {
        fr: "L'IA generative n'est plus un jouet de demonstration. En 2026, elle est profondement integree dans les workflows professionnels. En generation de texte, Claude et GPT redigent des emails, synthetisent des rapports de 100 pages en 3 points cles, traduisent avec une nuance culturelle impressionnante. En image, Midjourney v7 et DALL-E 3 produisent des visuels indiscernables de photographies reelles. En code, Claude Code et GitHub Copilot ecrivent, debuggent et refactorisent du code a une vitesse qui aurait semble magique il y a trois ans. En audio, ElevenLabs clone des voix et Suno compose des chansons completes. La question n'est plus 'est-ce possible ?' mais 'quelle est la meilleure facon de l'integrer dans mon quotidien ?'.",
        en: "Generative AI is no longer a demo toy. In 2026, it's deeply integrated into professional workflows. In text generation, Claude and GPT write emails, synthesize 100-page reports into 3 key points, translate with impressive cultural nuance. In image, Midjourney v7 and DALL-E 3 produce visuals indistinguishable from real photographs. In code, Claude Code and GitHub Copilot write, debug, and refactor code at a speed that would have seemed magical three years ago. In audio, ElevenLabs clones voices and Suno composes complete songs. The question is no longer 'is it possible?' but 'what's the best way to integrate it into my daily routine?'.",
      },
      bullets: {
        fr: [
          "Texte : redaction, synthese, traduction, analyse de documents, chatbots",
          "Image : creation de visuels, retouche, design, generation de maquettes",
          "Code : ecriture, debug, refactoring, tests, documentation automatique",
          "Audio : synthese vocale, clonage de voix, composition musicale, transcription",
          "Video : generation de clips, montage automatise, deepfakes creatifs",
        ],
        en: [
          "Text: writing, synthesis, translation, document analysis, chatbots",
          "Image: visual creation, retouching, design, mockup generation",
          "Code: writing, debugging, refactoring, tests, automatic documentation",
          "Audio: speech synthesis, voice cloning, music composition, transcription",
          "Video: clip generation, automated editing, creative deepfakes",
        ],
      },
    },
    {
      id: "limitations",
      title: {
        fr: "Limites et hallucinations : ce que l'IA ne sait pas faire",
        en: "Limitations and hallucinations: what AI can't do",
      },
      content: {
        fr: "L'enthousiasme autour de l'IA generative ne doit pas masquer ses limites fondamentales. Les hallucinations -- ces reponses confidentes mais factuellement fausses -- restent le probleme numero un. Un LLM peut inventer des citations academiques, des precedents juridiques, des statistiques, le tout avec une assurance deconcertante. Le modele n'a aucune notion de verite : il optimise la plausibilite, pas l'exactitude. Autres limites critiques : l'absence de raisonnement causal reel, la difficulte avec les mathematiques complexes, le manque de connaissance des evenements recents (cutoff date), et les biais herites des donnees d'entrainement. Utiliser l'IA sans comprendre ces limites, c'est conduire une F1 sans connaitre les freins.",
        en: "The enthusiasm around generative AI shouldn't mask its fundamental limitations. Hallucinations -- those confident but factually wrong answers -- remain the number one problem. An LLM can invent academic citations, legal precedents, statistics, all with disconcerting confidence. The model has no concept of truth: it optimizes for plausibility, not accuracy. Other critical limitations: the absence of real causal reasoning, difficulty with complex mathematics, lack of knowledge about recent events (cutoff date), and biases inherited from training data. Using AI without understanding these limits is like driving an F1 car without knowing the brakes.",
      },
      highlight: {
        fr: "Regle d'or : ne jamais publier ou utiliser une sortie d'IA sans verification humaine. L'IA est un copilote extraordinaire, mais un pilote dangereux quand il est seul aux commandes.",
        en: "Golden rule: never publish or use an AI output without human verification. AI is an extraordinary copilot, but a dangerous pilot when left alone at the controls.",
      },
    },
    {
      id: "human-ai-paradigm",
      title: {
        fr: "Le paradigme Humain + IA : augmentation, pas remplacement",
        en: "The Human + AI paradigm: augmentation, not replacement",
      },
      content: {
        fr: "Le debat 'l'IA va-t-elle remplacer les humains ?' est mal pose. La bonne question est : 'comment les humains qui maitrisent l'IA vont-ils surpasser ceux qui ne la maitrisent pas ?'. Les etudes recentes montrent que les gains de productivite les plus spectaculaires viennent du travail hybride : un humain expert guide par l'IA pour les taches repetitives, la synthese et le premier jet, tout en gardant le controle sur la strategie, la creativite et le jugement critique. C'est le modele du centaure -- ni pur humain, ni pure machine, mais une symbiose ou chacun excelle dans son domaine. Les designers qui embrassent l'IA produisent 3x plus de prototypes. Les developpeurs assistes par l'IA livrent du code 40% plus vite. Mais la qualite du resultat depend entierement de la qualite du pilotage humain.",
        en: "The debate 'will AI replace humans?' is poorly framed. The right question is: 'how will humans who master AI outperform those who don't?'. Recent studies show the most spectacular productivity gains come from hybrid work: a human expert guided by AI for repetitive tasks, synthesis and first drafts, while maintaining control over strategy, creativity and critical judgment. This is the centaur model -- neither pure human nor pure machine, but a symbiosis where each excels in their domain. Designers who embrace AI produce 3x more prototypes. Developers assisted by AI deliver code 40% faster. But the quality of the result depends entirely on the quality of human piloting.",
      },
      highlight: {
        fr: "L'IA ne remplacera pas les designers et les developpeurs. Mais les designers et developpeurs qui maitrisent l'IA remplaceront ceux qui ne la maitrisent pas.",
        en: "AI won't replace designers and developers. But designers and developers who master AI will replace those who don't.",
      },
    },
    {
      id: "getting-started",
      title: {
        fr: "Par ou commencer : les premiers pas concrets",
        en: "Where to start: concrete first steps",
      },
      content: {
        fr: "Si vous n'avez jamais utilise d'IA generative, commencez par Claude (claude.ai) ou ChatGPT (chat.openai.com). Creez un compte gratuit et commencez par des taches simples : resumer un article, reformuler un email, expliquer un concept complexe. Ne vous arretez pas a la premiere reponse -- iterez, precisez votre demande, ajoutez du contexte. C'est dans l'iteration que la magie opere. En une semaine d'utilisation quotidienne, vous aurez developpe une intuition sur ce que l'IA fait bien et ce qu'elle fait mal. C'est cette intuition qui fera de vous un utilisateur expert, pas la connaissance theorique.",
        en: "If you've never used generative AI, start with Claude (claude.ai) or ChatGPT (chat.openai.com). Create a free account and begin with simple tasks: summarize an article, rephrase an email, explain a complex concept. Don't stop at the first response -- iterate, refine your request, add context. It's in the iteration that magic happens. In one week of daily use, you'll develop an intuition about what AI does well and what it does poorly. It's this intuition that will make you an expert user, not theoretical knowledge.",
      },
      bullets: {
        fr: [
          "Jour 1-3 : explorer les chatbots (Claude, ChatGPT) avec des questions simples",
          "Jour 4-7 : integrer l'IA dans une tache quotidienne reelle (emails, syntheses, redaction)",
          "Semaine 2 : experimenter avec la generation d'images (Midjourney, DALL-E)",
          "Semaine 3 : explorer les outils specialises de votre domaine (Copilot, Cursor, Figma AI)",
          "Semaine 4 : developper votre propre workflow hybride humain + IA",
        ],
        en: [
          "Day 1-3: explore chatbots (Claude, ChatGPT) with simple questions",
          "Day 4-7: integrate AI into a real daily task (emails, summaries, writing)",
          "Week 2: experiment with image generation (Midjourney, DALL-E)",
          "Week 3: explore specialized tools in your domain (Copilot, Cursor, Figma AI)",
          "Week 4: develop your own hybrid human + AI workflow",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : comprendre pour mieux piloter",
        en: "Conclusion: understand to better steer",
      },
      content: {
        fr: "L'IA generative n'est ni une menace ni une baguette magique. C'est un outil d'une puissance sans precedent qui amplifie les competences de ceux qui savent l'utiliser. Comprendre les fondamentaux -- comment les LLMs fonctionnent, leurs forces, leurs limites -- est la premiere etape indispensable pour passer du statut de spectateur a celui de pilote. Les chapitres suivants vous emmeneront plus loin : le prompt engineering pour obtenir exactement ce que vous voulez, les outils du marche pour choisir les bons, et les techniques avancees pour transformer l'IA en veritable partenaire de travail. La revolution est en marche. La seule question est : serez-vous aux commandes ou dans le public ?",
        en: "Generative AI is neither a threat nor a magic wand. It's a tool of unprecedented power that amplifies the skills of those who know how to use it. Understanding the fundamentals -- how LLMs work, their strengths, their limits -- is the essential first step to go from spectator to pilot. The following chapters will take you further: prompt engineering to get exactly what you want, market tools to choose the right ones, and advanced techniques to transform AI into a true work partner. The revolution is underway. The only question is: will you be at the controls or in the audience?",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Anthropic - Claude Documentation",
      url: "https://docs.anthropic.com",
    },
    {
      id: 2,
      label: "OpenAI - GPT-4 Technical Report",
      url: "https://openai.com/research/gpt-4",
    },
    {
      id: 3,
      label: "Google DeepMind - Gemini Technical Report",
      url: "https://deepmind.google/technologies/gemini/",
    },
    {
      id: 4,
      label: "Vaswani et al. - Attention Is All You Need (2017)",
      url: "https://arxiv.org/abs/1706.03762",
    },
    {
      id: 5,
      label: "Meta AI - Llama Model Card",
      url: "https://ai.meta.com/llama/",
    },
    {
      id: 6,
      label: "Mistral AI - Documentation",
      url: "https://docs.mistral.ai",
    },
  ],
};
