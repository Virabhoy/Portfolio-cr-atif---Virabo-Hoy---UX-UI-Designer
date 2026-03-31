import { CourseData } from "./fitts-data";

export const zeigarnikData: CourseData = {
  slug: "effet-zeigarnik",
  chapter: 4,
  title: {
    fr: "L'Effet Zeigarnik : Le Pouvoir de l'Inachevé",
    en: "The Zeigarnik Effect: The Power of the Unfinished",
  },
  subtitle: {
    fr: "Pourquoi votre cerveau déteste les tâches incomplètes — et comment le design l'exploite",
    en: "Why your brain hates incomplete tasks — and how design exploits it",
  },
  readingTime: 14,
  category: "ux",
  description: {
    fr: "Comprendre l'Effet Zeigarnik pour concevoir des interfaces qui motivent sans manipuler.",
    en: "Understanding the Zeigarnik Effect to design interfaces that motivate without manipulating.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi impossible d'oublier ce qu'on n'a pas terminé ?",
        en: "Why is it impossible to forget what we haven't finished?",
      },
      content: {
        fr: "Vous avez abandonné une série à mi-chemin mais le cliffhanger vous obsède. Votre profil LinkedIn indique « 70% complété » et vous ressentez l'envie de finir. Une barre de progression à 3 étapes sur 4 vous pousse à cliquer. Ce n'est pas un hasard. C'est votre cerveau qui répond à une loi psychologique découverte dans un café viennois en 1927.",
        en: "You abandoned a series halfway through but the cliffhanger haunts you. Your LinkedIn profile says '70% complete' and you feel the urge to finish. A progress bar at 3 of 4 steps pushes you to click. This is no coincidence. It's your brain responding to a psychological law discovered in a Viennese café in 1927.",
      },
      highlight: {
        fr: "Notre cerveau retient beaucoup mieux les tâches incomplètes ou interrompues que celles qui sont terminées. La tension de l'inachevé monopolise l'attention — jusqu'à sa résolution.",
        en: "Our brain retains incomplete or interrupted tasks far better than completed ones. The tension of the unfinished monopolizes attention — until its resolution.",
      },
    },
    {
      id: "origin",
      title: {
        fr: "Vienne, 1927 : Le mystère des serveurs de café",
        en: "Vienna, 1927: The mystery of café waiters",
      },
      content: {
        fr: "La psychologue Bluma Zeigarnik observe un phénomène étrange dans un restaurant viennois. Les serveurs mémorisent des commandes ultra-complexes sans jamais les noter, mais dès que le client règle l'addition, la commande s'efface instantanément de leur mémoire. La tâche ouverte crée une tension active. La tâche fermée libère la mémoire.",
        en: "Psychologist Bluma Zeigarnik observes a strange phenomenon in a Viennese restaurant. Waiters memorize ultra-complex orders without ever writing them down, but as soon as the customer pays, the order instantly erases from their memory. The open task creates active tension. The closed task frees memory.",
      },
      bullets: {
        fr: [
          "Mémoire intacte : les serveurs retiennent les commandes en cours sans noter, tant que l'addition n'est pas réglée.",
          "Effacement immédiat : dès que le client paie (fermeture de la boucle), la commande disparaît de la mémoire de travail.",
          "Résultat de l'expérience : les sujets se souviennent 90% mieux des tâches interrompues que des tâches terminées.",
        ],
        en: [
          "Intact memory: waiters remember ongoing orders without notes, as long as the bill isn't settled.",
          "Immediate erasure: once the customer pays (loop closed), the order disappears from working memory.",
          "Experimental result: subjects remember interrupted tasks 90% better than completed ones.",
        ],
      },
    },
    {
      id: "open-loop",
      title: {
        fr: "L'anatomie d'une boucle ouverte",
        en: "The anatomy of an open loop",
      },
      content: {
        fr: "L'Effet Zeigarnik repose sur un mécanisme cognitif en trois temps. Une action initiée crée une intention active. L'interruption laisse cette intention en suspens. Le cerveau, qui déteste l'ambiguïté, maintient une tension cognitive jusqu'à la résolution. Cette tension n'est pas un stress — c'est un ressort. Elle maintient l'attention et pousse irrésistiblement à vouloir finir.",
        en: "The Zeigarnik Effect rests on a three-stage cognitive mechanism. An initiated action creates an active intention. Interruption leaves this intention suspended. The brain, which hates ambiguity, maintains cognitive tension until resolution. This tension isn't stress — it's a spring. It maintains attention and irresistibly pushes us to want to finish.",
      },
      highlight: {
        fr: "L'action commence → L'interruption crée la tension → La tension pousse à la complétion. C'est le moteur de toute interface d'engagement.",
        en: "Action starts → Interruption creates tension → Tension drives completion. This is the engine behind every engagement interface.",
      },
    },
    {
      id: "tipping-point",
      title: {
        fr: "Le point de bascule : modération vs. excès",
        en: "The tipping point: moderation vs. excess",
      },
      content: {
        fr: "L'Effet Zeigarnik n'est pas linéaire. Il possède un point de bascule critique : la progression doit sembler atteignable. Si la fin paraît invisible ou hors de portée, l'effet s'effondre et laisse place à l'abandon. Un utilisateur face à un objectif flou ou une tâche qui semble infinie ne ressent plus la tension motivante — il ressent une charge mentale paralysante.",
        en: "The Zeigarnik Effect is not linear. It has a critical tipping point: progress must seem achievable. If the end seems invisible or out of reach, the effect collapses and gives way to abandonment. A user facing a vague objective or an seemingly infinite task no longer feels motivating tension — they feel paralyzing mental load.",
      },
      bullets: {
        fr: [
          "Engagement : l'objectif est visible, l'effort est perçu comme un défi motivant, la fin est en vue.",
          "Abandon : la tâche paraît infinie, la charge mentale dépasse la motivation, l'utilisateur décroche.",
          "Règle d'or : toujours montrer que la fin est proche. La barre de progression doit avancer plus vite au début qu'à la fin.",
        ],
        en: [
          "Engagement: the objective is visible, the effort is perceived as a motivating challenge, the end is in sight.",
          "Abandonment: the task seems infinite, mental load exceeds motivation, the user drops off.",
          "Golden rule: always show that the end is near. The progress bar should advance faster at the start than at the end.",
        ],
      },
    },
    {
      id: "ux-design",
      title: {
        fr: "De la psychologie au design d'interface",
        en: "From psychology to interface design",
      },
      content: {
        fr: "Le design UX exploite cette faille cognitive pour guider les comportements numériques. Chaque fois qu'une interface montre une tâche commencée mais non terminée, elle ouvre délibérément une boucle dans l'esprit de l'utilisateur. Duolingo, LinkedIn, GitHub, Spotify — tous utilisent l'Effet Zeigarnik comme levier d'engagement fondamental.",
        en: "UX design exploits this cognitive bias to guide digital behaviors. Every time an interface shows a started but unfinished task, it deliberately opens a loop in the user's mind. Duolingo, LinkedIn, GitHub, Spotify — all use the Zeigarnik Effect as a fundamental engagement lever.",
      },
      highlight: {
        fr: "L'inachevé est devenu l'un des outils de rétention les plus puissants du design numérique. Le design ne crée pas le besoin — il exploite un mécanisme cérébral qui existe depuis toujours.",
        en: "The unfinished has become one of the most powerful retention tools in digital design. Design doesn't create the need — it exploits a brain mechanism that has always existed.",
      },
    },
    {
      id: "toolbox",
      title: {
        fr: "La boîte à outils Zeigarnik",
        en: "The Zeigarnik Toolkit",
      },
      content: {
        fr: "Trois techniques omniprésentes exploitent directement la tension de l'inachevé dans les interfaces modernes. Elles sont présentes dans presque toutes les applications que vous utilisez quotidiennement, souvent sans que vous en ayez conscience.",
        en: "Three ubiquitous techniques directly exploit the tension of the unfinished in modern interfaces. They're present in almost every application you use daily, often without you being aware of it.",
      },
      bullets: {
        fr: [
          "La barre de progression : rend le chemin restant visuellement plus court que le chemin parcouru — l'illusion de proximité de la fin pousse à continuer.",
          "La checklist : capitalise sur le besoin compulsif du cerveau de voir toutes les cases remplies — chaque case vide est une boucle ouverte.",
          "Le profil utilisateur incomplet : afficher \"Profil complété à 80%\" incite à fournir les dernières données personnelles — LinkedIn a augmenté ses données de 40% grâce à cette seule technique.",
        ],
        en: [
          "The progress bar: makes the remaining path visually shorter than the path already covered — the illusion of proximity to the end pushes forward.",
          "The checklist: capitalizes on the brain's compulsive need to see all boxes filled — each empty box is an open loop.",
          "The incomplete user profile: showing 'Profile 80% complete' encourages providing the last personal data — LinkedIn increased its data by 40% through this technique alone.",
        ],
      },
    },
    {
      id: "path",
      title: {
        fr: "Le chemin vs. l'horizon infini",
        en: "The path vs. the infinite horizon",
      },
      content: {
        fr: "Visualiser la progression étape par étape est le seul moyen de rendre un effort long acceptable. L'horizon infini — une tâche sans repères visibles — tue la motivation car le cerveau ne peut pas calculer la distance à parcourir. La segmentation Zeigarnik divise l'effort en boucles courtes et satisfaisantes, chacune déclenchant une micro-récompense à la complétion.",
        en: "Visualizing progress step by step is the only way to make a long effort acceptable. The infinite horizon — a task without visible markers — kills motivation because the brain can't calculate the distance to travel. Zeigarnik segmentation divides effort into short, satisfying loops, each triggering a micro-reward at completion.",
      },
      highlight: {
        fr: "Sans repères, la motivation chute face à l'inconnu. Avec des étapes visibles, chaque complétion renforce l'envie de continuer vers la suivante.",
        en: "Without markers, motivation falls in the face of the unknown. With visible steps, each completion reinforces the desire to continue to the next.",
      },
    },
    {
      id: "ethics",
      title: {
        fr: "La ligne rouge : engagement vs. manipulation",
        en: "The red line: engagement vs. manipulation",
      },
      content: {
        fr: "L'Effet Zeigarnik est une arme à double tranchant. La même mécanique qui guide l'utilisateur vers ses objectifs peut être détournée pour le piéger. La différence entre engagement éthique et dark pattern tient à une seule question : est-ce que cette boucle ouverte sert l'utilisateur ou l'exploite-t-elle ?",
        en: "The Zeigarnik Effect is a double-edged sword. The same mechanism that guides users toward their goals can be hijacked to trap them. The difference between ethical engagement and dark patterns comes down to one question: does this open loop serve the user or exploit them?",
      },
      bullets: {
        fr: [
          "L'engagement : guider l'utilisateur avec bienveillance vers un objectif qu'il a lui-même choisi, avec une progression honnête et une fin clairement définie.",
          "Le dark pattern : piéger l'attention par l'anxiété de l'inachevé — fausse progression, objectifs inaccessibles délibérément flous, nouvelles étapes créées à l'infini pour retenir artificiellement.",
          "Matrice éthique : bonne pratique = progression réelle + objectif atteignable. Dark pattern = fausse progression + objectif délibérément inaccessible.",
        ],
        en: [
          "Engagement: benevolently guiding the user toward an objective they chose, with honest progress and a clearly defined end.",
          "Dark pattern: trapping attention through anxiety of the unfinished — fake progress, deliberately vague inaccessible goals, new steps created infinitely to artificially retain users.",
          "Ethics matrix: good practice = real progress + achievable goal. Dark pattern = fake progress + deliberately inaccessible goal.",
        ],
      },
    },
    {
      id: "checklist",
      title: {
        fr: "La check-list du créateur",
        en: "The creator's checklist",
      },
      content: {
        fr: "Avant d'intégrer l'Effet Zeigarnik dans vos projets, posez-vous ces 3 questions. Elles permettent de distinguer un design motivant d'une manipulation psychologique — et de concevoir des expériences qui respectent l'utilisateur tout en atteignant vos objectifs.",
        en: "Before integrating the Zeigarnik Effect into your projects, ask yourself these 3 questions. They help distinguish motivating design from psychological manipulation — and to create experiences that respect the user while achieving your goals.",
      },
      bullets: {
        fr: [
          "Visibilité : Ai-je montré une ligne d'arrivée claire à mon utilisateur ? La fin doit être visible dès le début.",
          "Faisabilité : Les étapes intermédiaires sont-elles de taille raisonnable ? Chaque étape doit sembler atteignable en une session.",
          "Honnêteté : Mon indicateur de progression dit-il l'exacte vérité ? Pas de faux 80%, pas d'étapes cachées.",
        ],
        en: [
          "Visibility: Have I shown a clear finish line to my user? The end must be visible from the start.",
          "Feasibility: Are the intermediate steps of a reasonable size? Each step should seem achievable in one session.",
          "Honesty: Does my progress indicator tell the exact truth? No fake 80%, no hidden steps.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "L'inachevé n'est pas une frustration",
        en: "The unfinished is not frustration",
      },
      content: {
        fr: "L'Effet Zeigarnik révèle une vérité fondamentale sur la cognition humaine : notre cerveau est biologiquement programmé pour chercher la clôture. Le designer qui comprend ce mécanisme dispose d'un levier extraordinaire — à condition de l'utiliser pour guider, jamais pour piéger. La progression visible, les étapes courtes, et l'honnêteté dans les indicateurs sont les trois piliers d'un design Zeigarnik éthique.",
        en: "The Zeigarnik Effect reveals a fundamental truth about human cognition: our brain is biologically programmed to seek closure. The designer who understands this mechanism has an extraordinary lever — provided they use it to guide, never to trap. Visible progress, short steps, and honesty in indicators are the three pillars of ethical Zeigarnik design.",
      },
      highlight: {
        fr: "L'inachevé n'est pas une frustration... c'est le moteur de l'action.",
        en: "The unfinished is not frustration... it's the engine of action.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label:
        "Zeigarnik, B. (1927). Über das Behalten von erledigten und unerledigten Handlungen. Psychologische Forschung, 9, 1-85.",
    },
    {
      id: 2,
      label:
        "Lewin, K. (1935). A Dynamic Theory of Personality. McGraw-Hill. (Théorie du champ et tension psychologique)",
    },
    {
      id: 3,
      label:
        "Ovsiankina, M. (1928). Die Wiederaufnahme unterbrochener Handlungen. Psychologische Forschung, 11, 302-379.",
    },
    {
      id: 4,
      label:
        "Baumeister, R.F. & Bushman, B.J. (2014). Social Psychology and Human Nature. Cengage Learning. (Closure and cognitive tension)",
    },
    {
      id: 5,
      label:
        "Fogg, B.J. (2003). Persuasive Technology: Using Computers to Change What We Think and Do. Morgan Kaufmann.",
    },
    {
      id: 6,
      label: "Laws of UX — Zeigarnik Effect. lawsofux.com/zeigarnik-effect/",
      url: "https://lawsofux.com/zeigarnik-effect/",
    },
  ],
};
