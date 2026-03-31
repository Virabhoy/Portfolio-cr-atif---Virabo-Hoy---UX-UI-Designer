import type { CourseData } from "./fitts-data";

export const oneHandData: CourseData = {
  slug: "one-hand-pattern",
  chapter: 10,
  title: {
    fr: "Le One-Hand Pattern",
    en: "The One-Hand Pattern",
  },
  subtitle: {
    fr: "Designer pour une Seule Main dans un Monde en Mouvement",
    en: "Designing for One Hand in a World on the Move",
  },
  readingTime: 15,
  category: "ux",
  description: {
    fr: "75% des interactions mobiles se font à une main. Si votre interface exige deux mains, vous avez déjà perdu la moitié de vos utilisateurs.",
    en: "75% of mobile interactions happen one-handed. If your interface demands two hands, you've already lost half your users.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Vous designez pour un utilisateur qui n'existe pas",
        en: "You're designing for a user who doesn't exist",
      },
      content: {
        fr: "L'utilisateur assis confortablement, tenant son téléphone à deux mains, pleinement concentré sur votre interface — cet utilisateur est un fantasme. Dans la réalité, votre utilisateur est dans le métro, debout, agrippé à une barre avec une main, son téléphone dans l'autre. Il marche sur un trottoir bondé. Il mange un sandwich. Il porte un sac. 75% des interactions mobiles se font à une seule main, et pourtant la majorité des interfaces sont encore conçues comme si l'utilisateur disposait de ses deux mains et de toute son attention. C'est un échec fondamental de compréhension du contexte d'usage.",
        en: "The user sitting comfortably, holding their phone with both hands, fully focused on your interface — this user is a fantasy. In reality, your user is on the subway, standing, gripping a pole with one hand, phone in the other. They're walking on a crowded sidewalk. They're eating a sandwich. They're carrying a bag. 75% of mobile interactions happen with one hand, yet the majority of interfaces are still designed as if the user had both hands free and full attention. This is a fundamental failure to understand context of use.",
      },
      highlight: {
        fr: "Position forte : si votre interface nécessite deux mains pour effectuer une tâche courante, vous avez perdu la moitié de vos utilisateurs avant même qu'ils aient commencé.",
        en: "Strong position: if your interface requires two hands to complete a common task, you've lost half your users before they even started.",
      },
    },
    {
      id: "the-reality",
      title: {
        fr: "Les données : 75% d'utilisation à une main, et ce n'est pas un choix",
        en: "The data: 75% one-handed use, and it's not a choice",
      },
      content: {
        fr: "Les études de Google (2020) et du Baymard Institute (2023) convergent sur un chiffre : environ 75% des sessions mobiles impliquent une utilisation à une main pendant au moins une partie de la session. Ce n'est pas une préférence utilisateur — c'est une contrainte environnementale. Les utilisateurs n'utilisent pas leur téléphone à une main parce qu'ils le veulent, mais parce que leur autre main est occupée. Cette réalité n'est pas un cas limite à traiter en fin de projet. C'est le cas d'usage principal à partir duquel il faut concevoir.",
        en: "Studies from Google (2020) and the Baymard Institute (2023) converge on one number: approximately 75% of mobile sessions involve one-handed use for at least part of the session. This isn't a user preference — it's an environmental constraint. Users don't use their phone one-handed because they want to, but because their other hand is occupied. This reality isn't an edge case to handle at the end of a project. It's the primary use case from which to design.",
      },
      bullets: {
        fr: [
          "49% des sessions sont entièrement à une main (Hoober, 2017)",
          "26% supplémentaires passent d'une main à deux mains selon la tâche",
          "Les moments clés sont les transports (82% à une main), la marche (91%), et les repas (73%)",
          "L'utilisation à deux mains augmente uniquement pour la saisie de texte longue et le gaming",
        ],
        en: [
          "49% of sessions are entirely one-handed (Hoober, 2017)",
          "An additional 26% switch between one and two hands depending on the task",
          "Key moments are transit (82% one-handed), walking (91%), and meals (73%)",
          "Two-handed use increases only for long text input and gaming",
        ],
      },
    },
    {
      id: "context-of-use",
      title: {
        fr: "Le contexte d'usage : le facteur que 90% des designers ignorent",
        en: "Context of use: the factor 90% of designers ignore",
      },
      content: {
        fr: "Le contexte d'usage n'est pas une note en bas de page dans un rapport UX — c'est le paramètre qui invalide ou valide toutes vos décisions de design. Un utilisateur dans le métro parisien aux heures de pointe est soumis à des vibrations, des mouvements brusques, un éclairage variable, et un espace physique réduit. Son pouce est moins précis, sa patience est moindre, et sa capacité d'attention est fragmentée. Designer sans considérer ce contexte, c'est comme tester une voiture uniquement sur circuit et prétendre qu'elle est adaptée à la ville.",
        en: "Context of use isn't a footnote in a UX report — it's the parameter that invalidates or validates all your design decisions. A user in the Paris metro at rush hour is subjected to vibrations, sudden movements, variable lighting, and reduced physical space. Their thumb is less precise, their patience is shorter, and their attention is fragmented. Designing without considering this context is like testing a car only on a track and claiming it's suitable for the city.",
      },
      bullets: {
        fr: [
          "En mouvement : précision du pouce réduite de 20-30% par rapport à une position statique",
          "Luminosité variable : le contraste des boutons doit supporter des conditions extrêmes",
          "Attention fragmentée : chaque tâche doit pouvoir être interrompue et reprise sans perte",
          "Espace réduit : les gestes amples (swipe long, pinch-to-zoom) sont limités en environnement bondé",
        ],
        en: [
          "In motion: thumb precision reduced by 20-30% compared to static position",
          "Variable brightness: button contrast must support extreme conditions",
          "Fragmented attention: every task must be interruptible and resumable without loss",
          "Reduced space: broad gestures (long swipe, pinch-to-zoom) are limited in crowded environments",
        ],
      },
    },
    {
      id: "bottom-sheet-pattern",
      title: {
        fr: "Le Bottom Sheet : le pattern roi du one-hand design",
        en: "The Bottom Sheet: the king pattern of one-hand design",
      },
      content: {
        fr: "Le bottom sheet est devenu le pattern dominant du mobile pour une raison simple : il place le contenu et les actions exactement là où le pouce peut les atteindre. Apple Maps, Google Maps, Uber, Deliveroo — les apps les plus utilisées au monde ont fait du bottom sheet leur pattern de navigation principal. Le bottom sheet glisse depuis le bas, peut être étiré à différentes hauteurs, et concentre les actions dans la zone de confort du pouce. Il remplace avantageusement les modales centrées, les dropdown depuis le haut, et les pages entières pour des interactions secondaires.",
        en: "The bottom sheet has become the dominant mobile pattern for one simple reason: it places content and actions exactly where the thumb can reach them. Apple Maps, Google Maps, Uber, Deliveroo — the world's most-used apps have made the bottom sheet their primary navigation pattern. The bottom sheet slides up from the bottom, can be stretched to different heights, and concentrates actions in the thumb's comfort zone. It advantageously replaces centered modals, top dropdowns, and full pages for secondary interactions.",
      },
      highlight: {
        fr: "Règle d'or : si une information ou une action peut être présentée dans un bottom sheet plutôt qu'une page pleine ou une modale centrée, choisissez le bottom sheet. Votre taux de complétion vous remerciera.",
        en: "Golden rule: if information or an action can be presented in a bottom sheet rather than a full page or centered modal, choose the bottom sheet. Your completion rate will thank you.",
      },
    },
    {
      id: "swipe-gestures",
      title: {
        fr: "Les gestes de swipe : l'alphabet naturel du pouce",
        en: "Swipe gestures: the thumb's natural alphabet",
      },
      content: {
        fr: "Le swipe est le geste le plus naturel pour un pouce opérant seul. Il ne demande ni précision de ciblage ni pression spécifique — juste un mouvement directionnel. C'est pourquoi les interfaces les plus réussies du mobile s'appuient massivement sur le swipe : Tinder (swipe pour liker/rejeter), Instagram Stories (swipe pour naviguer), Mail (swipe pour archiver/supprimer). Mais attention : le swipe horizontal est nettement plus naturel que le swipe vertical pour un pouce seul, car l'arc de mouvement du pouce est naturellement latéral. Les gestes verticaux doivent être réservés au scroll, pas aux actions.",
        en: "The swipe is the most natural gesture for a thumb operating alone. It requires neither targeting precision nor specific pressure — just a directional movement. That's why the most successful mobile interfaces rely heavily on swiping: Tinder (swipe to like/reject), Instagram Stories (swipe to navigate), Mail (swipe to archive/delete). But beware: horizontal swipe is significantly more natural than vertical swipe for a single thumb, because the thumb's arc of movement is naturally lateral. Vertical gestures should be reserved for scrolling, not actions.",
      },
      bullets: {
        fr: [
          "Swipe horizontal : arc naturel du pouce, idéal pour les actions binaires (oui/non, suivant/précédent)",
          "Swipe vertical : réservé au scroll — l'utiliser pour des actions crée de la confusion",
          "Swipe depuis le bord : conflit potentiel avec les gestes système — à utiliser avec précaution",
          "Pull-to-refresh : geste devenu universel, mais son origine verticale le rend moins ergonomique qu'un swipe latéral",
        ],
        en: [
          "Horizontal swipe: natural thumb arc, ideal for binary actions (yes/no, next/previous)",
          "Vertical swipe: reserved for scrolling — using it for actions creates confusion",
          "Edge swipe: potential conflict with system gestures — use with caution",
          "Pull-to-refresh: universally adopted gesture, but its vertical nature makes it less ergonomic than lateral swipe",
        ],
      },
    },
    {
      id: "target-sizing",
      title: {
        fr: "La taille des cibles : 44px est un minimum, pas un objectif",
        en: "Target sizing: 44px is a minimum, not a goal",
      },
      content: {
        fr: "Apple recommande 44x44 points. Google recommande 48x48 dp. Les WCAG 2.2 recommandent 44x44 CSS pixels. Ces chiffres sont des MINIMUMS pour une utilisation à deux mains dans des conditions idéales. Pour une utilisation à une main en mouvement, ces tailles sont insuffisantes. Les données de terrain montrent que le taux d'erreur de tap augmente de 40% sur des cibles de 44px lorsque l'utilisateur est en mouvement. Pour le one-hand pattern, la cible recommandée est de 56px minimum pour les actions fréquentes, avec un espacement inter-cibles d'au moins 8px pour éviter les erreurs de fat finger.",
        en: "Apple recommends 44x44 points. Google recommends 48x48 dp. WCAG 2.2 recommends 44x44 CSS pixels. These numbers are MINIMUMS for two-handed use in ideal conditions. For one-handed use in motion, these sizes are insufficient. Field data shows that tap error rates increase by 40% on 44px targets when the user is in motion. For the one-hand pattern, the recommended target is 56px minimum for frequent actions, with inter-target spacing of at least 8px to avoid fat-finger errors.",
      },
      highlight: {
        fr: "Ne confondez pas la taille visuelle et la zone tactile. Un bouton peut paraître 40px mais avoir une zone de hit de 56px grâce au padding invisible. C'est la zone tactile qui compte, pas l'apparence.",
        en: "Don't confuse visual size with touch target. A button can look 40px but have a 56px hit zone thanks to invisible padding. It's the touch target that counts, not the appearance.",
      },
    },
    {
      id: "navigation-placement",
      title: {
        fr: "Le placement de la navigation : le bas, ou rien",
        en: "Navigation placement: the bottom, or nothing",
      },
      content: {
        fr: "C'est la règle la plus simple et la plus violée du design mobile. La navigation principale doit être en bas de l'écran. Point. Le hamburger menu en haut à gauche est un héritage du desktop qui n'a aucune justification ergonomique sur mobile. Il force un déplacement maximal du pouce, il masque les options de navigation (réduisant la discoverability de 50% selon le NNGroup), et il ajoute un tap supplémentaire à chaque navigation. En 2026, les données sont sans appel : les apps avec navigation inférieure ont un taux d'engagement supérieur de 25% à celles avec hamburger menu.",
        en: "This is the simplest and most violated rule of mobile design. Primary navigation must be at the bottom of the screen. Period. The hamburger menu in the top left is a desktop legacy with zero ergonomic justification on mobile. It forces maximum thumb displacement, hides navigation options (reducing discoverability by 50% according to NNGroup), and adds an extra tap to every navigation. In 2026, the data is clear: apps with bottom navigation have 25% higher engagement rates than those with hamburger menus.",
      },
      bullets: {
        fr: [
          "Tab bar en bas : accessible en < 200ms, toutes les options visibles en permanence",
          "Hamburger menu : 2 taps minimum, options cachées, taux d'utilisation 30% inférieur",
          "Maximum 5 items dans la barre inférieure — au-delà, les cibles deviennent trop petites",
          "L'item central peut être surdimensionné pour l'action principale (pattern Instagram/TikTok)",
        ],
        en: [
          "Bottom tab bar: accessible in < 200ms, all options permanently visible",
          "Hamburger menu: 2 taps minimum, hidden options, 30% lower usage rate",
          "Maximum 5 items in the bottom bar — beyond that, targets become too small",
          "The center item can be oversized for the primary action (Instagram/TikTok pattern)",
        ],
      },
    },
    {
      id: "form-design",
      title: {
        fr: "Les formulaires à une main : repenser chaque champ",
        en: "One-handed forms: rethinking every field",
      },
      content: {
        fr: "Les formulaires sont le cauchemar du one-hand design. La saisie de texte force souvent le passage à deux mains, le clavier masque la moitié de l'écran, et la navigation entre champs demande une précision que le pouce seul peine à fournir. La solution n'est pas de supprimer les formulaires — c'est de les repenser radicalement. Chaque champ de texte libre doit être questionné : peut-il être remplacé par un sélecteur, un toggle, un slider, ou un choix binaire ? Les formulaires les plus performants en one-hand remplacent 60% de la saisie par des interactions de sélection (tap, swipe, toggle).",
        en: "Forms are the nightmare of one-hand design. Text input often forces switching to two hands, the keyboard hides half the screen, and navigating between fields demands precision that the thumb alone struggles to provide. The solution isn't to eliminate forms — it's to radically rethink them. Every free-text field must be questioned: can it be replaced by a picker, toggle, slider, or binary choice? The best-performing one-handed forms replace 60% of typing with selection interactions (tap, swipe, toggle).",
      },
      bullets: {
        fr: [
          "Remplacer les champs de date par des date pickers natifs (roue iOS, calendrier Material)",
          "Utiliser des toggles et des radio buttons au lieu de dropdown selects",
          "Grouper les champs en étapes courtes (1 à 3 champs max par écran) pour réduire le scroll sous clavier",
          "Le bouton de validation doit rester visible au-dessus du clavier — jamais masqué en dessous",
          "Auto-complétion agressive : réduire chaque champ à 2-3 caractères saisis maximum",
        ],
        en: [
          "Replace date fields with native date pickers (iOS wheel, Material calendar)",
          "Use toggles and radio buttons instead of dropdown selects",
          "Group fields in short steps (1 to 3 fields max per screen) to reduce under-keyboard scrolling",
          "The submit button must remain visible above the keyboard — never hidden below",
          "Aggressive auto-completion: reduce each field to 2-3 typed characters maximum",
        ],
      },
    },
    {
      id: "modal-alternatives",
      title: {
        fr: "Alternatives aux modales : arrêtez de bloquer l'écran",
        en: "Modal alternatives: stop blocking the screen",
      },
      content: {
        fr: "Les modales centrées sont un anti-pattern du one-hand design. Elles apparaissent au centre de l'écran (zone la plus difficile à atteindre avec le pouce), elles demandent souvent un tap précis sur un petit bouton \"X\" dans le coin (zone quasi inaccessible), et elles bloquent tout le contenu derrière un overlay. En one-hand design, chaque modale doit être remplacée par une alternative plus ergonomique. Le bottom sheet pour les confirmations. Le toast notification pour les messages courts. L'inline expansion pour les détails. Le swipe-to-dismiss pour les alertes non critiques.",
        en: "Centered modals are an anti-pattern of one-hand design. They appear at the center of the screen (the hardest zone to reach with the thumb), they often require a precise tap on a small \"X\" button in the corner (nearly inaccessible zone), and they block all content behind an overlay. In one-hand design, every modal must be replaced with a more ergonomic alternative. Bottom sheet for confirmations. Toast notification for short messages. Inline expansion for details. Swipe-to-dismiss for non-critical alerts.",
      },
      highlight: {
        fr: "Chaque fois que vous êtes tenté de créer une modale, posez-vous la question : cet utilisateur a-t-il vraiment besoin de quitter son flux ? Dans 80% des cas, la réponse est non.",
        en: "Every time you're tempted to create a modal, ask yourself: does this user really need to leave their flow? In 80% of cases, the answer is no.",
      },
    },
    {
      id: "ios-vs-android",
      title: {
        fr: "iOS vs Android : deux philosophies du one-hand design",
        en: "iOS vs Android: two philosophies of one-hand design",
      },
      content: {
        fr: "Apple et Google ont adopté des approches radicalement différentes du design à une main, et ces différences doivent informer votre stratégie cross-platform. iOS a fait le choix radical de déplacer des éléments historiquement hauts vers le bas : la barre d'URL de Safari, la barre de recherche de Spotlight, les contrôles de l'appareil photo. Android avec Material Design 3 a opté pour une approche plus conservatrice, gardant certains éléments en haut mais introduisant le \"Large Top App Bar\" qui se réduit au scroll. Le bottom sheet est devenu commun aux deux plateformes, mais avec des comportements d'interaction différents.",
        en: "Apple and Google have adopted radically different approaches to one-hand design, and these differences must inform your cross-platform strategy. iOS made the radical choice to move historically top-placed elements to the bottom: Safari's URL bar, Spotlight search bar, camera controls. Android with Material Design 3 opted for a more conservative approach, keeping some elements at the top but introducing the \"Large Top App Bar\" that shrinks on scroll. The bottom sheet has become common to both platforms, but with different interaction behaviors.",
      },
      bullets: {
        fr: [
          "iOS : barre de recherche en bas, navigation en bas, Reachability intégré — philosophie \"tout en bas\"",
          "Android : top app bar persistent, FAB en bas à droite, bottom nav optionnel — philosophie hybride",
          "Bottom sheet iOS : swipe-to-dismiss natif avec détents multiples (quarter, half, full)",
          "Bottom sheet Android : comportement de drag plus libre mais moins prévisible",
          "Recommandation : suivre les conventions de chaque plateforme plutôt que d'imposer un design unique",
        ],
        en: [
          "iOS: search bar at bottom, navigation at bottom, built-in Reachability — \"everything at bottom\" philosophy",
          "Android: persistent top app bar, FAB at bottom right, optional bottom nav — hybrid philosophy",
          "iOS bottom sheet: native swipe-to-dismiss with multiple detents (quarter, half, full)",
          "Android bottom sheet: freer drag behavior but less predictable",
          "Recommendation: follow each platform's conventions rather than imposing a single design",
        ],
      },
    },
    {
      id: "accessibility-intersection",
      title: {
        fr: "One-hand et accessibilité : une convergence naturelle",
        en: "One-hand and accessibility: a natural convergence",
      },
      content: {
        fr: "Le one-hand design et l'accessibilité ne sont pas deux disciplines séparées — elles convergent naturellement. Une personne qui utilise son téléphone à une main parce qu'elle porte un café et une personne qui n'a qu'un bras fonctionnel ont les mêmes besoins ergonomiques. Les cibles larges, la navigation en bas, les gestes simples, les alternatives aux interactions complexes — tout ce qui rend une interface utilisable à une main la rend aussi plus accessible. C'est l'argument ultime pour convaincre un stakeholder réticent : le one-hand design n'est pas un luxe pour les usagers en mobilité, c'est un impératif d'accessibilité qui bénéficie à 100% de vos utilisateurs.",
        en: "One-hand design and accessibility aren't two separate disciplines — they converge naturally. A person using their phone one-handed because they're carrying a coffee and a person who only has one functional arm have the same ergonomic needs. Large targets, bottom navigation, simple gestures, alternatives to complex interactions — everything that makes an interface usable one-handed also makes it more accessible. This is the ultimate argument to convince a reluctant stakeholder: one-hand design isn't a luxury for users on the go, it's an accessibility imperative that benefits 100% of your users.",
      },
      highlight: {
        fr: "Le meilleur test d'accessibilité mobile ? Utilisez votre app d'une seule main pendant une journée entière. Chaque frustration que vous ressentez est multipliée par dix pour un utilisateur en situation de handicap.",
        en: "The best mobile accessibility test? Use your app with one hand for an entire day. Every frustration you feel is multiplied tenfold for a user with a disability.",
      },
    },
    {
      id: "performance-metrics",
      title: {
        fr: "Mesurer le one-hand design : les métriques qui comptent",
        en: "Measuring one-hand design: the metrics that matter",
      },
      content: {
        fr: "Comment savoir si votre interface est réellement optimisée pour une main ? Les métriques classiques (taux de conversion, temps sur page) ne suffisent pas. Il faut des métriques spécifiques au one-hand design. Le Thumb Travel Distance (distance totale parcourue par le pouce pour compléter une tâche) est la métrique la plus révélatrice. Un parcours optimisé doit maintenir le pouce dans un rayon de 5cm autour de sa position de repos. Le taux de grip-shift (nombre de fois où l'utilisateur doit repositionner sa main) est un indicateur direct de friction ergonomique. Au-delà de 2 grip-shifts par tâche, votre interface force le passage à deux mains.",
        en: "How do you know if your interface is truly optimized for one hand? Classic metrics (conversion rate, time on page) aren't enough. You need metrics specific to one-hand design. Thumb Travel Distance (total distance the thumb travels to complete a task) is the most revealing metric. An optimized journey should keep the thumb within a 5cm radius of its resting position. The grip-shift rate (number of times the user must reposition their hand) is a direct indicator of ergonomic friction. Beyond 2 grip-shifts per task, your interface is forcing two-handed use.",
      },
      bullets: {
        fr: [
          "Thumb Travel Distance : distance cumulée du pouce par tâche — objectif < 15cm pour les tâches courantes",
          "Grip-shift rate : nombre de repositionnements de main — objectif < 2 par tâche",
          "One-hand completion rate : % de tâches complétées sans passer à deux mains",
          "Tap accuracy in motion : taux de succès des taps en conditions de mobilité",
          "Time-to-target : temps entre l'intention et le contact avec la cible — corrélé à la Loi de Fitts",
        ],
        en: [
          "Thumb Travel Distance: cumulative thumb distance per task — target < 15cm for common tasks",
          "Grip-shift rate: number of hand repositions — target < 2 per task",
          "One-hand completion rate: % of tasks completed without switching to two hands",
          "Tap accuracy in motion: tap success rate in mobility conditions",
          "Time-to-target: time between intention and target contact — correlated with Fitts' Law",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Une main, un principe : l'empathie contextuelle",
        en: "One hand, one principle: contextual empathy",
      },
      content: {
        fr: "Le one-hand pattern n'est pas une collection de recettes — c'est une posture de design. C'est accepter que votre utilisateur n'est pas dans les conditions idéales de votre maquette Figma. C'est designer pour le pire scénario d'utilisation, parce que ce \"pire scénario\" est en réalité le scénario le plus fréquent. Le metro bondé, le trottoir en pente, la file d'attente qui avance — c'est là que vos interfaces sont réellement utilisées. Les designers qui intègrent cette réalité dès la conception produisent des interfaces qui fonctionnent pour tout le monde, dans toutes les conditions. C'est la définition même du bon design.",
        en: "The one-hand pattern isn't a collection of recipes — it's a design posture. It's accepting that your user isn't in the ideal conditions of your Figma mockup. It's designing for the worst-case usage scenario, because this \"worst case\" is actually the most frequent scenario. The crowded subway, the sloping sidewalk, the moving queue — that's where your interfaces are actually used. Designers who integrate this reality from the start produce interfaces that work for everyone, in all conditions. That's the very definition of good design.",
      },
      highlight: {
        fr: "Designez toujours en tenant votre téléphone d'une seule main. Si vous ne pouvez pas utiliser votre propre prototype confortablement dans le métro, retournez à la planche à dessin.",
        en: "Always design while holding your phone with one hand. If you can't comfortably use your own prototype on the subway, go back to the drawing board.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Hoober, S. (2017). Design for Fingers, Touch, and People, Part 1. UXmatters.",
      url: "https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php",
    },
    {
      id: 2,
      label: "Google Design (2020). Designing for Mobile: Context and Posture. Material Design Blog.",
      url: "https://material.io/blog",
    },
    {
      id: 3,
      label: "Baymard Institute (2023). Mobile Usability: Touch Interaction Patterns.",
      url: "https://baymard.com/blog",
    },
    {
      id: 4,
      label: "Nielsen Norman Group (2023). Hamburger Menus and Hidden Navigation Hurt UX Metrics.",
      url: "https://www.nngroup.com/articles/hamburger-menus/",
    },
    {
      id: 5,
      label: "Apple Human Interface Guidelines — Tab Bars and Navigation (2025).",
      url: "https://developer.apple.com/design/human-interface-guidelines/tab-bars",
    },
    {
      id: 6,
      label: "Material Design 3 — Bottom Sheets and Navigation Components (2025).",
      url: "https://m3.material.io/components/bottom-sheets/overview",
    },
    {
      id: 7,
      label: "WCAG 2.2 — Success Criterion 2.5.8: Target Size Minimum (2023).",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
    },
    {
      id: 8,
      label: "Wroblewski, L. (2011). Mobile First. A Book Apart.",
    },
    {
      id: 9,
      label: "Budiu, R. (2022). Mobile-First Is NOT Mobile-Only. Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/mobile-first-not-mobile-only/",
    },
  ],
};
