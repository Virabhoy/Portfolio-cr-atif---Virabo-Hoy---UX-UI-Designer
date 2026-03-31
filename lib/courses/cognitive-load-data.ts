import type { CourseData } from "./fitts-data";

export const cognitiveLoadData: CourseData = {
  slug: "charge-cognitive",
  chapter: 12,
  title: {
    fr: "La Charge Cognitive : Le Poids Invisible de l'Interface",
    en: "Cognitive Load: The Invisible Weight of Interface",
  },
  subtitle: {
    fr: "Alléger l'Esprit pour Libérer l'Action",
    en: "Lighten the Mind to Unleash Action",
  },
  readingTime: 16,
  category: "ux",
  description: {
    fr: "Comprendre les mécanismes de la charge cognitive pour concevoir des interfaces qui respectent les limites de la mémoire de travail et libèrent l'utilisateur.",
    en: "Understanding cognitive load mechanisms to design interfaces that respect working memory limits and free the user.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi votre interface épuise vos utilisateurs sans qu'ils le sachent",
        en: "Why your interface exhausts users without them knowing",
      },
      content: {
        fr: "Chaque écran que vous concevez impose un coût invisible à l'utilisateur : le coût cognitif. Ce n'est pas une question de pixels ou de couleurs, c'est une question de charge mentale. Quand un utilisateur abandonne un formulaire, quitte une page ou hésite devant un menu, ce n'est presque jamais un problème moteur. C'est son cerveau qui dit stop. La charge cognitive est le tueur silencieux de l'expérience utilisateur, et la majorité des designers l'ignorent complètement.",
        en: "Every screen you design imposes an invisible cost on the user: cognitive cost. It's not about pixels or colors, it's about mental load. When a user abandons a form, leaves a page, or hesitates before a menu, it's almost never a motor problem. It's their brain saying stop. Cognitive load is the silent killer of user experience, and the majority of designers completely ignore it.",
      },
      highlight: {
        fr: "Un utilisateur ne vous dira jamais \"votre interface m'épuise mentalement\". Il dira simplement \"c'est compliqué\" — ou pire, il partira sans rien dire.",
        en: "A user will never tell you \"your interface mentally exhausts me.\" They'll simply say \"it's complicated\" — or worse, they'll leave without saying anything.",
      },
    },
    {
      id: "three-types",
      title: {
        fr: "Les trois types de charge cognitive selon Sweller",
        en: "Sweller's three types of cognitive load",
      },
      content: {
        fr: "John Sweller a établi en 1988 une distinction fondamentale que tout designer devrait connaître par coeur. La charge intrinsèque est liée à la complexité inhérente de la tâche — vous ne pouvez pas la supprimer, seulement la gérer. La charge extrinsèque est le bruit ajouté par un mauvais design — c'est celle que vous devez éliminer impitoyablement. La charge germane est l'effort mental positif qui construit la compréhension et les schémas mentaux. Votre travail de designer se résume à ceci : minimiser l'extrinsèque, gérer l'intrinsèque, maximiser la germane.",
        en: "John Sweller established in 1988 a fundamental distinction that every designer should know by heart. Intrinsic load is tied to the inherent complexity of the task — you can't remove it, only manage it. Extraneous load is the noise added by bad design — that's the one you must ruthlessly eliminate. Germane load is the positive mental effort that builds understanding and mental schemas. Your job as a designer comes down to this: minimize extraneous, manage intrinsic, maximize germane.",
      },
      bullets: {
        fr: [
          "Charge intrinsèque : la complexité de la tâche elle-même (remplir une déclaration d'impôts sera toujours complexe).",
          "Charge extrinsèque : tout ce que le design ajoute inutilement (labels ambigus, navigation confuse, animations distrayantes).",
          "Charge germane : l'effort qui aide l'utilisateur à comprendre et apprendre (bons exemples, feedback clair, métaphores visuelles).",
        ],
        en: [
          "Intrinsic load: the complexity of the task itself (filing a tax return will always be complex).",
          "Extraneous load: everything design adds unnecessarily (ambiguous labels, confusing navigation, distracting animations).",
          "Germane load: effort that helps the user understand and learn (good examples, clear feedback, visual metaphors).",
        ],
      },
    },
    {
      id: "miller-revisited",
      title: {
        fr: "Miller's 7±2 : la règle la plus mal comprise du design",
        en: "Miller's 7±2: the most misunderstood rule in design",
      },
      content: {
        fr: "En 1956, George Miller publie son article fondateur sur la capacité de la mémoire à court terme. Depuis, des générations de designers ont interprété cette règle de manière simpliste : \"ne mettez pas plus de 7 items dans un menu\". C'est un contresens total. Miller parlait de chunks — des unités de sens regroupées — pas d'éléments visuels. Un menu de 12 items bien organisés en 3 catégories de 4 est souvent plus facile à traiter qu'un menu de 7 items sans structure. Ce qui compte, ce n'est pas le nombre brut, c'est la structure qui permet le chunking.",
        en: "In 1956, George Miller published his seminal paper on short-term memory capacity. Since then, generations of designers have interpreted this rule simplistically: \"don't put more than 7 items in a menu.\" This is a total misreading. Miller was talking about chunks — grouped units of meaning — not visual elements. A menu of 12 items well-organized in 3 categories of 4 is often easier to process than a menu of 7 unstructured items. What matters isn't the raw number, it's the structure that enables chunking.",
      },
      highlight: {
        fr: "Arrêtez de compter les items. Commencez à structurer l'information. Le cerveau ne compte pas, il catégorise.",
        en: "Stop counting items. Start structuring information. The brain doesn't count, it categorizes.",
      },
    },
    {
      id: "working-memory",
      title: {
        fr: "La mémoire de travail : votre véritable contrainte de design",
        en: "Working memory: your real design constraint",
      },
      content: {
        fr: "La mémoire de travail est l'espace mental où l'utilisateur manipule activement l'information. Les recherches récentes de Cowan (2001) suggèrent que sa capacité réelle est encore plus limitée que ce que Miller pensait : environ 4 éléments, pas 7. C'est minuscule. Chaque champ de formulaire visible, chaque option de navigation, chaque notification qui clignote consomme une partie de cette ressource précieuse. Et contrairement à la RAM d'un ordinateur, la mémoire de travail humaine est volatile, fragile, et se dégrade sous le stress.",
        en: "Working memory is the mental space where the user actively manipulates information. Recent research by Cowan (2001) suggests its actual capacity is even more limited than Miller thought: about 4 items, not 7. That's tiny. Every visible form field, every navigation option, every blinking notification consumes part of this precious resource. And unlike computer RAM, human working memory is volatile, fragile, and degrades under stress.",
      },
      bullets: {
        fr: [
          "Capacité réelle : ~4 éléments simultanés (Cowan, 2001), pas 7.",
          "Durée de rétention : 15-30 secondes sans répétition active.",
          "Sensibilité au contexte : le stress, la fatigue et les distractions réduisent encore cette capacité.",
          "Implication design : chaque information affichée doit justifier sa place à l'écran.",
        ],
        en: [
          "Actual capacity: ~4 simultaneous items (Cowan, 2001), not 7.",
          "Retention duration: 15-30 seconds without active rehearsal.",
          "Context sensitivity: stress, fatigue, and distractions further reduce this capacity.",
          "Design implication: every displayed piece of information must justify its place on screen.",
        ],
      },
    },
    {
      id: "progressive-disclosure",
      title: {
        fr: "La divulgation progressive : montrer moins pour permettre plus",
        en: "Progressive disclosure: show less to enable more",
      },
      content: {
        fr: "La divulgation progressive est l'arme la plus puissante du designer contre la surcharge cognitive. Le principe est simple mais contre-intuitif pour beaucoup de stakeholders : ne montrez que ce dont l'utilisateur a besoin à l'instant T, et révélez la complexité progressivement. Ce n'est pas cacher de l'information, c'est la séquencer intelligemment. Gmail ne montre pas tous les paramètres de filtrage au premier clic. Figma ne révèle pas toutes ses options de calques dès l'ouverture. Les interfaces qui tentent de tout montrer d'un coup échouent systématiquement.",
        en: "Progressive disclosure is the designer's most powerful weapon against cognitive overload. The principle is simple but counterintuitive for many stakeholders: only show what the user needs right now, and reveal complexity progressively. It's not hiding information, it's sequencing it intelligently. Gmail doesn't show all filtering parameters on the first click. Figma doesn't reveal all its layer options on launch. Interfaces that try to show everything at once systematically fail.",
      },
      highlight: {
        fr: "La divulgation progressive n'est pas un compromis. C'est un acte de respect envers l'attention limitée de vos utilisateurs.",
        en: "Progressive disclosure is not a compromise. It's an act of respect toward your users' limited attention.",
      },
    },
    {
      id: "chunking",
      title: {
        fr: "Le chunking : l'art de regrouper pour mieux comprendre",
        en: "Chunking: the art of grouping for better comprehension",
      },
      content: {
        fr: "Le chunking est la technique qui transforme un flux d'informations brutes en unités digestes. Un numéro de téléphone sans espaces (0612345678) est presque impossible à retenir. Avec des espaces (06 12 34 56 78), il devient gérable. Le même principe s'applique à chaque écran que vous concevez. Regroupez les champs de formulaire par thème. Séparez les sections par des espaces blancs généreux. Utilisez des titres de section comme ancres mentales. Le whitespace n'est pas du vide, c'est de l'oxygène cognitif.",
        en: "Chunking is the technique that transforms a stream of raw information into digestible units. A phone number without spaces (0612345678) is nearly impossible to remember. With spaces (06 12 34 56 78), it becomes manageable. The same principle applies to every screen you design. Group form fields by theme. Separate sections with generous whitespace. Use section headings as mental anchors. Whitespace isn't emptiness, it's cognitive oxygen.",
      },
      bullets: {
        fr: [
          "Regroupez les éléments liés visuellement (loi de proximité de la Gestalt).",
          "Utilisez des titres de section pour créer des repères mentaux.",
          "Limitez les groupes à 3-5 éléments par chunk.",
          "Le whitespace entre les groupes est fonctionnel, pas décoratif.",
        ],
        en: [
          "Visually group related elements (Gestalt law of proximity).",
          "Use section headings to create mental landmarks.",
          "Limit groups to 3-5 items per chunk.",
          "Whitespace between groups is functional, not decorative.",
        ],
      },
    },
    {
      id: "visual-noise",
      title: {
        fr: "Le bruit visuel : l'ennemi invisible de la compréhension",
        en: "Visual noise: the invisible enemy of comprehension",
      },
      content: {
        fr: "Chaque élément visuel sur un écran a un coût cognitif, même s'il n'est pas consciemment perçu. Les bordures inutiles, les ombres excessives, les dégradés gratuits, les icônes décoratives sans fonction — tout cela s'accumule en un bruit de fond qui érode la capacité de traitement. J'ai vu des interfaces où la suppression de 40% des éléments visuels a augmenté le taux de complétion de 25%. Le minimalisme n'est pas une tendance esthétique, c'est une nécessité cognitive. Chaque pixel doit gagner sa place à l'écran.",
        en: "Every visual element on a screen has a cognitive cost, even if it's not consciously perceived. Unnecessary borders, excessive shadows, gratuitous gradients, decorative icons without function — all of it accumulates into background noise that erodes processing capacity. I've seen interfaces where removing 40% of visual elements increased completion rates by 25%. Minimalism isn't an aesthetic trend, it's a cognitive necessity. Every pixel must earn its place on screen.",
      },
      highlight: {
        fr: "Le test ultime : si vous retirez un élément et que personne ne le remarque, il n'aurait jamais dû être là.",
        en: "The ultimate test: if you remove an element and nobody notices, it should never have been there.",
      },
    },
    {
      id: "decision-fatigue",
      title: {
        fr: "La fatigue décisionnelle : quand trop de choix paralyse",
        en: "Decision fatigue: when too many choices paralyze",
      },
      content: {
        fr: "L'étude célèbre de Sheena Iyengar sur les confitures (2000) a montré que proposer 24 variétés au lieu de 6 réduisait les achats de 90%. Cette paralysie du choix est omniprésente en design digital. Chaque bouton, chaque lien, chaque option dans un dropdown est une micro-décision qui consomme de l'énergie cognitive. Les formulaires avec 15 options de titre de civilité. Les pages d'accueil avec 8 call-to-actions concurrents. Les dashboards avec 20 widgets tous \"prioritaires\". La fatigue décisionnelle est cumulative : chaque choix que vous imposez rend le suivant plus difficile.",
        en: "Sheena Iyengar's famous jam study (2000) showed that offering 24 varieties instead of 6 reduced purchases by 90%. This choice paralysis is everywhere in digital design. Every button, every link, every dropdown option is a micro-decision consuming cognitive energy. Forms with 15 title options. Landing pages with 8 competing CTAs. Dashboards with 20 \"priority\" widgets. Decision fatigue is cumulative: each choice you impose makes the next one harder.",
      },
      bullets: {
        fr: [
          "Réduisez les options au strict nécessaire (recommandation forte > choix libre).",
          "Proposez des valeurs par défaut intelligentes qui conviennent à 80% des utilisateurs.",
          "Hiérarchisez clairement : une action principale, une secondaire, le reste en overflow.",
          "Les smart defaults ne sont pas de la manipulation — ils sont de la considération.",
        ],
        en: [
          "Reduce options to the strict minimum (strong recommendation > free choice).",
          "Offer smart defaults that suit 80% of users.",
          "Clearly hierarchize: one primary action, one secondary, the rest in overflow.",
          "Smart defaults aren't manipulation — they're consideration.",
        ],
      },
    },
    {
      id: "ai-paradox",
      title: {
        fr: "Le paradoxe de l'IA : quand l'automatisation ajoute de la charge",
        en: "The AI paradox: when automation adds cognitive load",
      },
      content: {
        fr: "Voici une opinion que peu de designers osent exprimer : la plupart des interfaces IA augmentent la charge cognitive au lieu de la réduire. ChatGPT génère des réponses de 500 mots quand l'utilisateur cherche un fait en 10 mots. Les assistants IA proposent 5 suggestions simultanées qui créent plus de confusion que d'aide. Les interfaces de génération d'images offrent tellement de paramètres que l'utilisateur passe plus de temps à configurer qu'à créer. L'IA devrait absorber la complexité, pas la redistribuer. Si votre interface IA nécessite un tutoriel, vous avez échoué.",
        en: "Here's an opinion few designers dare to express: most AI interfaces increase cognitive load instead of reducing it. ChatGPT generates 500-word responses when the user is looking for a 10-word fact. AI assistants offer 5 simultaneous suggestions that create more confusion than help. Image generation interfaces offer so many parameters that users spend more time configuring than creating. AI should absorb complexity, not redistribute it. If your AI interface requires a tutorial, you've failed.",
      },
      highlight: {
        fr: "L'IA la plus intelligente est celle qui fait le travail cognitif à la place de l'utilisateur, pas celle qui lui donne plus de choses à évaluer.",
        en: "The smartest AI is the one that does the cognitive work for the user, not the one that gives them more things to evaluate.",
      },
    },
    {
      id: "simplicity-vs-simplistic",
      title: {
        fr: "Simple vs simpliste : la distinction cruciale",
        en: "Simple vs simplistic: the crucial distinction",
      },
      content: {
        fr: "Réduire la charge cognitive ne signifie pas appauvrir l'interface. C'est une erreur que je vois constamment : des équipes qui confondent \"simple\" et \"simpliste\". Supprimer des fonctionnalités essentielles au nom de la simplicité est aussi nocif que la surcharge. Google Search est simple, pas simpliste — il y a une puissance immense derrière un champ de texte unique. L'art du designer est de gérer la complexité, pas de la nier. La vraie simplicité demande un travail de design considérable pour séquencer, hiérarchiser et révéler l'information au bon moment.",
        en: "Reducing cognitive load doesn't mean impoverishing the interface. It's a mistake I see constantly: teams confusing \"simple\" with \"simplistic.\" Removing essential features in the name of simplicity is as harmful as overload. Google Search is simple, not simplistic — there's immense power behind a single text field. The designer's art is managing complexity, not denying it. True simplicity requires considerable design work to sequence, hierarchize, and reveal information at the right moment.",
      },
      bullets: {
        fr: [
          "Simple : la complexité est gérée pour l'utilisateur (Google Search, iPhone d'origine).",
          "Simpliste : la complexité est supprimée, au détriment de l'utilisateur (features cachées introuvables).",
          "Le bon test : l'utilisateur peut-il accomplir sa tâche complète sans frustration ?",
        ],
        en: [
          "Simple: complexity is managed for the user (Google Search, original iPhone).",
          "Simplistic: complexity is removed, to the user's detriment (hidden features that can't be found).",
          "The right test: can the user complete their full task without frustration?",
        ],
      },
    },
    {
      id: "measuring-load",
      title: {
        fr: "Mesurer la charge cognitive : des outils concrets",
        en: "Measuring cognitive load: concrete tools",
      },
      content: {
        fr: "La charge cognitive est invisible, mais elle est mesurable. Le NASA-TLX (Task Load Index) est un questionnaire standardisé qui évalue la charge mentale perçue selon 6 dimensions. L'eye-tracking révèle les patterns de fixation erratiques qui signalent une surcharge. Les métriques de temps sur tâche et de taux d'erreur sont des indicateurs indirects mais fiables. En recherche utilisateur, la technique du \"think aloud\" capture les moments de confusion cognitive en temps réel. Ne devinez jamais la charge cognitive — mesurez-la.",
        en: "Cognitive load is invisible, but it's measurable. The NASA-TLX (Task Load Index) is a standardized questionnaire evaluating perceived mental load across 6 dimensions. Eye-tracking reveals erratic fixation patterns that signal overload. Time-on-task and error rate metrics are indirect but reliable indicators. In user research, the think-aloud technique captures moments of cognitive confusion in real time. Never guess cognitive load — measure it.",
      },
      bullets: {
        fr: [
          "NASA-TLX : questionnaire post-tâche en 6 dimensions (effort mental, temporel, performance, etc.).",
          "Eye-tracking : les fixations longues et les saccades erratiques signalent la surcharge.",
          "Temps sur tâche : un temps anormalement long indique une charge cognitive élevée.",
          "Think-aloud : les pauses, les soupirs et les \"euh\" sont des marqueurs de charge cognitive.",
        ],
        en: [
          "NASA-TLX: post-task questionnaire across 6 dimensions (mental, temporal, performance effort, etc.).",
          "Eye-tracking: long fixations and erratic saccades signal overload.",
          "Time on task: abnormally long times indicate high cognitive load.",
          "Think-aloud: pauses, sighs, and 'uhh' sounds are markers of cognitive load.",
        ],
      },
    },
    {
      id: "reducing-load",
      title: {
        fr: "12 techniques pour réduire la charge cognitive immédiatement",
        en: "12 techniques to reduce cognitive load immediately",
      },
      content: {
        fr: "Après des années de pratique, voici les techniques que j'applique systématiquement sur chaque projet. Elles ne sont pas théoriques — elles sont testées, validées et mesurées. Chacune attaque directement la charge extrinsèque, celle que le design ajoute inutilement. Certaines paraissent évidentes, mais je suis constamment surpris de voir combien d'interfaces professionnelles les ignorent.",
        en: "After years of practice, here are the techniques I systematically apply on every project. They're not theoretical — they're tested, validated, and measured. Each one directly attacks extraneous load, the one that design adds unnecessarily. Some seem obvious, but I'm constantly surprised by how many professional interfaces ignore them.",
      },
      bullets: {
        fr: [
          "Éliminez tout élément visuel qui n'aide pas directement la tâche en cours.",
          "Utilisez des valeurs par défaut intelligentes pour pré-remplir les formulaires.",
          "Regroupez l'information en chunks de 3-5 éléments maximum.",
          "Appliquez la divulgation progressive : le bon contenu au bon moment.",
          "Réduisez le nombre de choix simultanés (règle des 3 options maximum).",
          "Utilisez la reconnaissance plutôt que le rappel (icônes + labels, pas l'un ou l'autre).",
          "Maintenez la cohérence visuelle pour créer des automatismes cognitifs.",
          "Offrez un feedback immédiat pour chaque action utilisateur.",
          "Réduisez la distance entre information et action (labels proches des champs).",
          "Utilisez le contraste et la hiérarchie typographique pour guider l'oeil.",
          "Évitez les interruptions non sollicitées (modales, notifications push abusives).",
          "Testez avec des utilisateurs en condition réelle (stress, multitâche, mobile).",
        ],
        en: [
          "Eliminate every visual element that doesn't directly help the current task.",
          "Use smart defaults to pre-fill forms.",
          "Group information into chunks of 3-5 items maximum.",
          "Apply progressive disclosure: the right content at the right time.",
          "Reduce the number of simultaneous choices (3-option maximum rule).",
          "Use recognition over recall (icons + labels, not one or the other).",
          "Maintain visual consistency to create cognitive automatisms.",
          "Provide immediate feedback for every user action.",
          "Reduce distance between information and action (labels close to fields).",
          "Use contrast and typographic hierarchy to guide the eye.",
          "Avoid unsolicited interruptions (modals, abusive push notifications).",
          "Test with users in real conditions (stress, multitasking, mobile).",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Le design invisible est le meilleur design",
        en: "Invisible design is the best design",
      },
      content: {
        fr: "La charge cognitive est la variable cachée qui sépare les interfaces excellentes des interfaces médiocres. Les meilleurs designs sont ceux dont on ne remarque pas le design — parce qu'ils ont absorbé toute la complexité à votre place. Chaque décision que vous prenez en tant que designer ajoute ou retire du poids mental. Les applications qui échouent sont presque toujours celles qui ont front-loadé leur complexité : tout est là, tout est visible, tout est accessible, et rien n'est utilisable. Respectez les limites cognitives de vos utilisateurs. Ils ne sont pas stupides — ils sont humains.",
        en: "Cognitive load is the hidden variable that separates excellent interfaces from mediocre ones. The best designs are those where you don't notice the design — because they've absorbed all the complexity for you. Every decision you make as a designer adds or removes mental weight. Applications that fail are almost always those that front-loaded their complexity: everything is there, everything is visible, everything is accessible, and nothing is usable. Respect your users' cognitive limits. They're not stupid — they're human.",
      },
      highlight: {
        fr: "La prochaine fois que vous ajoutez un élément à un écran, posez-vous cette question : est-ce que cela aide l'utilisateur à atteindre son objectif, ou est-ce que cela me rassure moi en tant que designer ?",
        en: "Next time you add an element to a screen, ask yourself this question: does this help the user reach their goal, or does it reassure me as a designer?",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Sweller, J. (1988). Cognitive Load During Problem Solving: Effects on Learning. Cognitive Science, 12(2), 257-285.",
      url: "https://doi.org/10.1207/s15516709cog1202_4",
    },
    {
      id: 2,
      label: "Miller, G.A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information. Psychological Review, 63(2), 81-97.",
      url: "https://doi.org/10.1037/h0043158",
    },
    {
      id: 3,
      label: "Cowan, N. (2001). The Magical Number 4 in Short-Term Memory: A Reconsideration of Mental Storage Capacity. Behavioral and Brain Sciences, 24(1), 87-114.",
      url: "https://doi.org/10.1017/S0140525X01003922",
    },
    {
      id: 4,
      label: "Iyengar, S.S. & Lepper, M.R. (2000). When Choice is Demotivating: Can One Desire Too Much of a Good Thing? Journal of Personality and Social Psychology, 79(6), 995-1006.",
      url: "https://doi.org/10.1037/0022-3514.79.6.995",
    },
    {
      id: 5,
      label: "Hart, S.G. & Staveland, L.E. (1988). Development of NASA-TLX: Results of Empirical and Theoretical Research. Advances in Psychology, 52, 139-183.",
      url: "https://doi.org/10.1016/S0166-4115(08)62386-9",
    },
    {
      id: 6,
      label: "Norman, D.A. (2013). The Design of Everyday Things: Revised and Expanded Edition. Basic Books.",
    },
    {
      id: 7,
      label: "Krug, S. (2014). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. New Riders.",
    },
    {
      id: 8,
      label: "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
    },
  ],
};
