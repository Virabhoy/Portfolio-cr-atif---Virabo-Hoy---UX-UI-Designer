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
  category: string;
  description: { fr: string; en: string };
  sections: CourseSection[];
  sources: CourseSource[];
}

export const fittsData: CourseData = {
  slug: "loi-de-fitts",
  chapter: 1,
  title: {
    fr: "La Loi de Fitts : Le Code Scientifique des Interfaces Intuitives",
    en: "Fitts' Law: The Scientific Code Behind Intuitive Interfaces",
  },
  subtitle: {
    fr: "De l'ergonomie des cockpits au design UX mobile",
    en: "From cockpit ergonomics to mobile UX design",
  },
  readingTime: 12,
  category: "ux",
  description: {
    fr: "Comprendre et appliquer la Loi de Fitts pour concevoir des interfaces plus ergonomiques et intuitives.",
    en: "Understanding and applying Fitts' Law to design more ergonomic and intuitive interfaces.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi certaines interactions semblent-elles fluides, et d'autres frustrantes ?",
        en: "Why do some interactions feel fluid, while others feel frustrating?",
      },
      content: {
        fr: "Un geste humain n'est jamais instantané. Il est limité par la distance et la difficulté à viser. La réponse à cette frustration se trouve dans une loi de la psychologie humaine vieille de 70 ans.",
        en: "A human gesture is never instantaneous. It is limited by distance and the difficulty of aiming. The answer to this frustration lies in a 70-year-old law of human psychology.",
      },
      highlight: {
        fr: "Sur mobile, un bouton placé en haut de l'écran dans une pop-up force l'utilisateur à un mouvement long et imprécis. Un bouton large, en bas de l'écran, est accessible immédiatement.",
        en: "On mobile, a button placed at the top of the screen in a pop-up forces a long, imprecise movement. A wide button at the bottom of the screen is immediately accessible.",
      },
    },
    {
      id: "origin",
      title: {
        fr: "1954 : Paul Fitts et la performance du geste humain",
        en: "1954: Paul Fitts and the performance of human gestures",
      },
      content: {
        fr: "L'origine de la loi n'est pas numérique. Le psychologue Paul Fitts étudiait les mouvements humains face à des commandes physiques : leviers, boutons, panneaux de contrôle. L'enjeu était d'optimiser la précision et la rapidité dans des contextes critiques où l'erreur n'était pas permise.",
        en: "The law's origin is not digital. Psychologist Paul Fitts studied human movements with physical controls: levers, buttons, control panels. The goal was to optimize precision and speed in critical contexts where errors were not allowed.",
      },
      bullets: {
        fr: [
          "Aviation et cockpits d'avion",
          "Équipements militaires",
          "Contrôles industriels",
        ],
        en: [
          "Aviation and aircraft cockpits",
          "Military equipment",
          "Industrial controls",
        ],
      },
    },
    {
      id: "science",
      title: {
        fr: "La science du geste : deux variables qui expliquent tout",
        en: "The science of gesture: two variables that explain everything",
      },
      content: {
        fr: "La loi prédit le temps nécessaire pour atteindre une cible. Ce temps dépend de deux facteurs clés :",
        en: "The law predicts the time needed to reach a target. This time depends on two key factors:",
      },
      bullets: {
        fr: [
          "Distance (D) : L'effort physique. Plus la cible est éloignée, plus le geste est long.",
          "Largeur (W) : La précision nécessaire. Plus la cible est petite, plus le geste est difficile et lent.",
        ],
        en: [
          "Distance (D): The physical effort. The farther the target, the longer the gesture.",
          "Width (W): The precision required. The smaller the target, the harder and slower the gesture.",
        ],
      },
      highlight: {
        fr: "Un bouton grand et proche sera toujours sélectionné plus vite et avec moins d'erreurs.",
        en: "A large, nearby button will always be selected faster and with fewer errors.",
      },
    },
    {
      id: "timeline",
      title: {
        fr: "Des leviers aux pixels : la loi qui a conquis le numérique",
        en: "From levers to pixels: the law that conquered the digital world",
      },
      content: {
        fr: "Dans les années 70/80, des chercheurs (Card, Moran & Newell) ont démontré que la loi s'appliquait parfaitement aux interactions numériques. Elle est devenue un pilier pour l'ergonomie et la psychologie cognitive, l'informatique et les interfaces WIMP (Window, Icon, Menu, Pointer), et l'UX Design moderne.",
        en: "In the 70s/80s, researchers (Card, Moran & Newell) demonstrated that the law applied perfectly to digital interactions. It became a pillar for ergonomics and cognitive psychology, computing and WIMP interfaces (Window, Icon, Menu, Pointer), and modern UX Design.",
      },
      highlight: {
        fr: "La loi est pertinente sur toutes les plateformes : Clic (souris) → Toucher (mobile) → Sélection (tablette, TV, VR).",
        en: "The law is relevant across all platforms: Click (mouse) → Touch (mobile) → Selection (tablet, TV, VR).",
      },
    },
    {
      id: "daily-questions",
      title: {
        fr: "Les questions auxquelles la Loi de Fitts répond chaque jour",
        en: "The questions Fitts' Law answers every day",
      },
      content: {
        fr: "La loi permet d'expliquer scientifiquement pourquoi certaines interfaces fonctionnent mieux que d'autres. Elle répond à des questions fondamentales que tout designer se pose.",
        en: "The law scientifically explains why some interfaces work better than others. It answers fundamental questions every designer asks.",
      },
      bullets: {
        fr: [
          "Où placer le bouton d'action principal ?",
          "Quelle taille minimale pour une zone cliquable ?",
          "Comment structurer un formulaire pour réduire la friction ?",
          "Pourquoi les actions en bas d'écran sont-elles plus efficaces sur mobile ?",
        ],
        en: [
          "Where to place the main action button?",
          "What minimum size for a clickable area?",
          "How to structure a form to reduce friction?",
          "Why are bottom-of-screen actions more effective on mobile?",
        ],
      },
    },
    {
      id: "rule-size",
      title: {
        fr: "Règle n°1 : La puissance de la taille et de la proximité",
        en: "Rule #1: The power of size and proximity",
      },
      content: {
        fr: "Les boutons importants doivent être grands, car la précision motrice est limitée. Leur position doit réduire la distance à parcourir.",
        en: "Important buttons must be large, as motor precision is limited. Their position must reduce the distance to travel.",
      },
      highlight: {
        fr: "Sur mobile, un bouton placé en bas de l'écran peut être atteint 2x plus vite qu'un bouton équivalent placé en haut.",
        en: "On mobile, a button placed at the bottom of the screen can be reached 2x faster than an equivalent button placed at the top.",
      },
    },
    {
      id: "rule-edges",
      title: {
        fr: "Règle n°2 : Utilisez les bords de l'écran comme des aimants",
        en: "Rule #2: Use screen edges as magnets",
      },
      content: {
        fr: "Pour un pointeur de souris, les bords et les coins de l'écran sont des cibles de taille \"infinie\" dans une direction. L'utilisateur ne peut pas les dépasser. Cela les rend extrêmement rapides à acquérir. C'est pourquoi les éléments placés sur les bords sont si efficaces.",
        en: "For a mouse pointer, screen edges and corners are targets of \"infinite\" size in one direction. The user cannot overshoot them. This makes them extremely fast to acquire. That's why elements placed on edges are so effective.",
      },
      bullets: {
        fr: [
          "Menu principal (macOS)",
          "Bouton Démarrer (Windows)",
          "Barre des tâches / Dock",
        ],
        en: [
          "Main menu (macOS)",
          "Start button (Windows)",
          "Taskbar / Dock",
        ],
      },
    },
    {
      id: "rule-thumb",
      title: {
        fr: "Règle n°3 : Concevoir pour le pouce en mobile",
        en: "Rule #3: Design for the thumb on mobile",
      },
      content: {
        fr: "La 'thumb zone' n'est pas une simple recommandation, c'est une application directe de la Loi de Fitts. Les actions placées dans l'arc naturel du pouce minimisent la distance (D) et la friction motrice.",
        en: "The 'thumb zone' is not just a recommendation, it's a direct application of Fitts' Law. Actions placed in the thumb's natural arc minimize distance (D) and motor friction.",
      },
      highlight: {
        fr: "Pour garantir une sélection facile et limiter les erreurs, les zones cliquables doivent être élargies. Les standards recommandent une taille minimale de 44px.",
        en: "To ensure easy selection and limit errors, clickable areas must be enlarged. Standards recommend a minimum size of 44px.",
      },
    },
    {
      id: "forms",
      title: {
        fr: "Réduire la friction dans les formulaires et les listes",
        en: "Reducing friction in forms and lists",
      },
      content: {
        fr: "Chaque déplacement inutile entre deux actions ajoute de la friction. La Loi de Fitts nous incite à regrouper les actions liées pour minimiser les \"sauts\".",
        en: "Every unnecessary movement between two actions adds friction. Fitts' Law encourages us to group related actions to minimize \"jumps\".",
      },
      bullets: {
        fr: [
          "Formulaires : Placer les labels au-dessus des champs (pas à côté) pour un parcours vertical direct et rapide.",
          "Listes : Utiliser des zones cliquables larges (>44px) et bien espacées pour éviter les erreurs d'appui.",
        ],
        en: [
          "Forms: Place labels above fields (not beside) for a direct, fast vertical path.",
          "Lists: Use wide clickable areas (>44px) and good spacing to avoid tap errors.",
        ],
      },
    },
    {
      id: "limits",
      title: {
        fr: "Une loi puissante, mais pas une baguette magique",
        en: "A powerful law, but not a magic wand",
      },
      content: {
        fr: "La Loi de Fitts est un outil brillant pour prédire l'effort moteur et optimiser l'ergonomie physique d'une interface. Mais le mouvement n'est qu'une partie infime de l'expérience utilisateur. Pour atteindre la maîtrise, il faut comprendre ce que la loi ne mesure PAS.",
        en: "Fitts' Law is a brilliant tool for predicting motor effort and optimizing the physical ergonomics of an interface. But movement is only a tiny part of user experience. To achieve mastery, you need to understand what the law does NOT measure.",
      },
    },
    {
      id: "iceberg",
      title: {
        fr: "L'iceberg de l'UX : Ce que Fitts ne mesure pas",
        en: "The UX Iceberg: What Fitts doesn't measure",
      },
      content: {
        fr: "La Loi de Fitts ne mesure QUE le mouvement physique. Elle ignore des facteurs clés comme la compréhension, la motivation, la hiérarchie visuelle, le contexte d'usage, la lisibilité et les émotions.",
        en: "Fitts' Law ONLY measures physical movement. It ignores key factors like comprehension, motivation, visual hierarchy, context of use, readability, and emotions.",
      },
      bullets: {
        fr: [
          "Compréhension",
          "Motivation",
          "Hiérarchie visuelle",
          "Contexte d'usage",
          "Lisibilité & émotions",
        ],
        en: [
          "Comprehension",
          "Motivation",
          "Visual hierarchy",
          "Context of use",
          "Readability & emotions",
        ],
      },
    },
    {
      id: "context",
      title: {
        fr: "Le contexte d'usage change toutes les distances",
        en: "Context of use changes all distances",
      },
      content: {
        fr: "La loi de Fitts a été établie dans un contexte de \"laboratoire\". Or, les utilisateurs réels ne sont pas dans des conditions idéales.",
        en: "Fitts' Law was established in a \"laboratory\" context. But real users are not in ideal conditions.",
      },
      bullets: {
        fr: [
          "Ils tiennent leur téléphone d'une seule main.",
          "Ils sont en mouvement (dans les transports, en marchant).",
          "La posture change constamment, et donc la distance réelle du pouce.",
          "L'environnement (luminosité, distractions) a un impact.",
        ],
        en: [
          "They hold their phone with one hand.",
          "They are in motion (in transit, walking).",
          "Posture changes constantly, and so does the real thumb distance.",
          "The environment (brightness, distractions) has an impact.",
        ],
      },
    },
    {
      id: "bending-rules",
      title: {
        fr: "Savoir quand plier les règles pour un meilleur design",
        en: "Knowing when to bend the rules for better design",
      },
      content: {
        fr: "L'application de la Loi de Fitts doit être nuancée. Parfois, d'autres principes prennent le dessus.",
        en: "Applying Fitts' Law must be nuanced. Sometimes, other principles take precedence.",
      },
      bullets: {
        fr: [
          "Hiérarchie Visuelle : Si tous les boutons sont grands et proches, rien n'est prioritaire. Une interface efficace utilise la taille et la distance pour guider l'attention.",
          "Motivation : La motivation de l'utilisateur peut largement compenser la distance. Un client très motivé traversera tout l'écran pour cliquer sur 'Acheter'.",
          "Pour les chemins étroits (menus déroulants, sliders), la Steering Law est une loi complémentaire qui mesure mieux la difficulté.",
        ],
        en: [
          "Visual Hierarchy: If all buttons are large and close, nothing is prioritized. An effective interface uses size and distance to guide attention.",
          "Motivation: User motivation can largely compensate for distance. A highly motivated customer will cross the entire screen to click 'Buy'.",
          "For narrow paths (dropdowns, sliders), the Steering Law is a complementary law that better measures difficulty.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Fitts est un point de départ. L'utilisateur est la destination.",
        en: "Fitts is a starting point. The user is the destination.",
      },
      content: {
        fr: "La Loi de Fitts fournit un cadre scientifique pour comprendre la difficulté physique d'une interaction. Elle explique pourquoi certaines interfaces sont plus ergonomiques que d'autres. C'est une loi à intégrer avec nuance. Elle doit être équilibrée avec la psychologie utilisateur, la hiérarchie visuelle, les objectifs business et le contexte d'usage.",
        en: "Fitts' Law provides a scientific framework for understanding the physical difficulty of an interaction. It explains why some interfaces are more ergonomic than others. It's a law to integrate with nuance. It must be balanced with user psychology, visual hierarchy, business objectives, and context of use.",
      },
      highlight: {
        fr: "Utilisez la Loi de Fitts pour construire des fondations solides et scientifiquement justifiées. Mais validez toujours vos choix avec des tests utilisateurs, car ils sont la seule vérité absolue.",
        en: "Use Fitts' Law to build solid, scientifically justified foundations. But always validate your choices with user testing, as it is the only absolute truth.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Fitts, P.M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. Journal of Experimental Psychology, 47(6), 381-391.",
      url: "https://doi.org/10.1037/h0055392",
    },
    {
      id: 2,
      label: "MacKenzie, I.S. (1992). Fitts' law as a research and design tool in human-computer interaction. Human-Computer Interaction, 7(1), 91-139.",
      url: "https://doi.org/10.1207/s15327051hci0701_3",
    },
    {
      id: 3,
      label: "Card, S.K., Moran, T.P., & Newell, A. (1983). The Psychology of Human-Computer Interaction. Lawrence Erlbaum Associates.",
    },
    {
      id: 4,
      label: "Accot, J. & Zhai, S. (1997). Beyond Fitts' Law: Models for Trajectory-Based HCI Tasks. CHI '97.",
      url: "https://doi.org/10.1145/258549.258760",
    },
    {
      id: 5,
      label: "Apple Human Interface Guidelines — Touch target sizes (minimum 44pt).",
      url: "https://developer.apple.com/design/human-interface-guidelines/accessibility",
    },
    {
      id: 6,
      label: "Material Design — Touch targets (minimum 48dp).",
      url: "https://m3.material.io/foundations/accessible-design/accessibility-basics",
    },
    {
      id: 7,
      label: "WCAG 2.1 — Success Criterion 2.5.5: Target Size (minimum 44×44 CSS pixels).",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/target-size.html",
    },
  ],
};
