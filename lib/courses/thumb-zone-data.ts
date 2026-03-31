import type { CourseData } from "./fitts-data";

export const thumbZoneData: CourseData = {
  slug: "thumb-zone-2026",
  chapter: 9,
  title: {
    fr: "La Thumb Zone en 2026",
    en: "The Thumb Zone in 2026",
  },
  subtitle: {
    fr: "Repenser l'Ergonomie Mobile à l'Ère des Grands Écrans",
    en: "Rethinking Mobile Ergonomics in the Age of Large Screens",
  },
  readingTime: 14,
  category: "ux",
  description: {
    fr: "La carte de la thumb zone de 2013 est obsolète. Les écrans ont grandi, les usages ont muté, et l'ergonomie mobile doit être entièrement repensée pour 2026.",
    en: "The 2013 thumb zone map is obsolete. Screens have grown, usage patterns have shifted, and mobile ergonomics must be completely rethought for 2026.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "La carte que vous utilisez encore est celle d'un monde disparu",
        en: "The map you're still using belongs to a world that no longer exists",
      },
      content: {
        fr: "En 2013, Steven Hoober publiait sa célèbre carte de la thumb zone, basée sur l'observation de 1 333 utilisateurs. Cette carte est devenue un dogme du design mobile. Le problème : elle a été établie sur des écrans de 4 pouces. En 2026, l'écran moyen fait 6,7 pouces, les pliables atteignent 8 pouces, et la manière dont nous tenons nos téléphones a fondamentalement changé. Continuer à utiliser cette carte, c'est naviguer avec un GPS de 2013.",
        en: "In 2013, Steven Hoober published his famous thumb zone map, based on observing 1,333 users. This map became a dogma of mobile design. The problem: it was established on 4-inch screens. In 2026, the average screen is 6.7 inches, foldables reach 8 inches, and the way we hold our phones has fundamentally changed. Continuing to use this map is like navigating with a 2013 GPS.",
      },
      highlight: {
        fr: "La thumb zone de Hoober n'est pas fausse — elle est périmée. Les données de 2013 ne peuvent pas gouverner les interfaces de 2026.",
        en: "Hoober's thumb zone isn't wrong — it's expired. 2013 data cannot govern 2026 interfaces.",
      },
    },
    {
      id: "hoober-original",
      title: {
        fr: "L'étude originale de Hoober : ce qu'elle disait vraiment",
        en: "Hoober's original study: what it actually said",
      },
      content: {
        fr: "L'étude de Steven Hoober a révélé que 49% des utilisateurs tenaient leur téléphone d'une seule main, 36% utilisaient une prise en berceau (cradle grip), et 15% utilisaient les deux mains. Ce que beaucoup de designers oublient, c'est que Hoober lui-même a nuancé ses conclusions. Il a insisté sur le fait que les utilisateurs changent constamment de prise en main selon le contexte. La carte statique en trois zones (facile, acceptable, difficile) était une simplification pédagogique, pas une vérité absolue.",
        en: "Steven Hoober's study revealed that 49% of users held their phone with one hand, 36% used a cradle grip, and 15% used both hands. What many designers forget is that Hoober himself nuanced his conclusions. He insisted that users constantly change their grip depending on context. The static three-zone map (easy, acceptable, hard) was a pedagogical simplification, not an absolute truth.",
      },
      bullets: {
        fr: [
          "49% d'utilisation à une main — mais ce chiffre fluctue selon la tâche",
          "La prise en main change en moyenne 3 fois par session d'utilisation",
          "L'étude portait sur des iPhone 4/5 et des Galaxy S3 — des écrans de 3,5 à 4,8 pouces",
          "Les zones ne sont pas fixes : elles dépendent de la taille de la main, de la posture et du contexte",
        ],
        en: [
          "49% one-handed use — but this number fluctuates depending on the task",
          "Grip changes an average of 3 times per usage session",
          "The study covered iPhone 4/5 and Galaxy S3 — screens from 3.5 to 4.8 inches",
          "Zones are not fixed: they depend on hand size, posture, and context",
        ],
      },
    },
    {
      id: "phones-grew",
      title: {
        fr: "Les téléphones ont grandi, pas nos mains",
        en: "Phones grew, our hands didn't",
      },
      content: {
        fr: "Entre 2013 et 2026, la taille moyenne des écrans de smartphones a augmenté de 67%. L'iPhone 5 faisait 4 pouces. L'iPhone 16 Pro Max fait 6,9 pouces. Mais l'envergure moyenne du pouce humain n'a pas changé : elle reste d'environ 7 cm pour un adulte. Cela signifie qu'une proportion croissante de l'écran est devenue physiquement inaccessible sans repositionner la main. La zone \"facile\" d'accès de Hoober ne couvre plus qu'environ 30% de l'écran sur un appareil moderne, contre 60% en 2013.",
        en: "Between 2013 and 2026, average smartphone screen size increased by 67%. The iPhone 5 was 4 inches. The iPhone 16 Pro Max is 6.9 inches. But the average human thumb span hasn't changed: it remains about 7cm for an adult. This means a growing proportion of the screen has become physically unreachable without repositioning the hand. Hoober's \"easy\" access zone now covers only about 30% of the screen on a modern device, compared to 60% in 2013.",
      },
      highlight: {
        fr: "Sur un écran de 6,7 pouces, le coin supérieur gauche est à 12 cm du pouce droit. C'est 70% au-delà de la portée confortable. Tout élément placé là est un choix d'exclusion.",
        en: "On a 6.7-inch screen, the top-left corner is 12cm from the right thumb. That's 70% beyond comfortable reach. Any element placed there is a choice of exclusion.",
      },
    },
    {
      id: "new-grip-data",
      title: {
        fr: "Les nouvelles données de prise en main en 2026",
        en: "New grip data in 2026",
      },
      content: {
        fr: "Les études récentes de 2024-2025 montrent une réalité très différente de 2013. L'utilisation à une main a chuté à environ 35% sur les grands écrans, tandis que la prise en berceau est montée à 45%. Mais le changement le plus significatif est l'émergence du \"pinky shelf\" — cette habitude de poser le petit doigt sous le téléphone pour le stabiliser. Cette prise modifie complètement l'axe de rotation du pouce et donc la forme de la zone accessible. Le modèle circulaire de Hoober doit être remplacé par un modèle elliptique asymétrique.",
        en: "Recent 2024-2025 studies show a very different reality from 2013. One-handed use has dropped to about 35% on large screens, while the cradle grip has risen to 45%. But the most significant change is the emergence of the \"pinky shelf\" — the habit of resting the little finger under the phone to stabilize it. This grip completely changes the thumb's axis of rotation and therefore the shape of the accessible zone. Hoober's circular model must be replaced with an asymmetric elliptical model.",
      },
      bullets: {
        fr: [
          "Le \"pinky shelf\" est utilisé par 62% des utilisateurs de grands téléphones",
          "La zone accessible se déplace vers le bas et le centre, pas en arc de cercle",
          "Les utilisateurs de plus de 50 ans utilisent davantage la prise à deux mains (68%)",
          "Le contexte (debout, assis, couché) change radicalement la zone de confort",
        ],
        en: [
          "The \"pinky shelf\" is used by 62% of large phone users",
          "The accessible zone shifts downward and center, not in a circular arc",
          "Users over 50 use two-handed grip more often (68%)",
          "Context (standing, sitting, lying down) radically changes the comfort zone",
        ],
      },
    },
    {
      id: "bottom-nav-revolution",
      title: {
        fr: "La révolution de la navigation en bas d'écran",
        en: "The bottom navigation revolution",
      },
      content: {
        fr: "L'adoption massive de la bottom navigation n'est pas une mode — c'est une réponse directe à l'agrandissement des écrans. Apple a migré Safari, Mail et Plans vers des barres de navigation inférieures. Google a déplacé la barre de recherche Chrome en bas sur mobile. Instagram, TikTok, et la quasi-totalité des apps à succès utilisent des tab bars inférieures. Ce n'est pas un choix esthétique, c'est un impératif ergonomique. Les apps qui persistent avec des hamburger menus en haut à gauche ignorent délibérément 13 ans de données sur l'accessibilité du pouce.",
        en: "The massive adoption of bottom navigation isn't a trend — it's a direct response to screen enlargement. Apple migrated Safari, Mail, and Maps to bottom navigation bars. Google moved Chrome's search bar to the bottom on mobile. Instagram, TikTok, and virtually all successful apps use bottom tab bars. This isn't an aesthetic choice, it's an ergonomic imperative. Apps that persist with hamburger menus in the top left are deliberately ignoring 13 years of thumb accessibility data.",
      },
      highlight: {
        fr: "Position forte : si votre navigation principale est encore en haut de l'écran en 2026, vous avez pris du retard sur l'ergonomie de base. Le bas de l'écran est le nouveau \"above the fold\".",
        en: "Strong position: if your primary navigation is still at the top of the screen in 2026, you've fallen behind on basic ergonomics. The bottom of the screen is the new \"above the fold\".",
      },
    },
    {
      id: "floating-buttons-debate",
      title: {
        fr: "Le Floating Action Button est-il mort ?",
        en: "Is the Floating Action Button dead?",
      },
      content: {
        fr: "Le FAB (Floating Action Button) introduit par Material Design en 2014 était une réponse élégante à l'accessibilité du pouce : un bouton flottant dans le coin inférieur droit, pile dans la zone confortable. Mais en 2026, le FAB pose de sérieux problèmes. Il entre en conflit avec les gestes de navigation système (swipe depuis le bord). Il masque du contenu, particulièrement sur les listes et les feeds. Sur les écrans pliables, sa position devient incohérente entre mode plié et déplié. Google lui-même l'a progressivement abandonné dans ses propres apps au profit de barres d'action contextuelles en bas d'écran.",
        en: "The FAB (Floating Action Button) introduced by Material Design in 2014 was an elegant answer to thumb accessibility: a floating button in the bottom-right corner, right in the comfort zone. But in 2026, the FAB has serious problems. It conflicts with system navigation gestures (edge swipes). It obscures content, especially on lists and feeds. On foldable screens, its position becomes inconsistent between folded and unfolded modes. Google itself has progressively abandoned it in its own apps in favor of contextual bottom action bars.",
      },
      bullets: {
        fr: [
          "Conflit avec les gestes système sur Android 15 et iOS 18",
          "Masquage de contenu : jusqu'à 8% de la surface utile sur un écran standard",
          "Problème de discoverability : les nouveaux utilisateurs ne comprennent pas toujours l'icône \"+\"",
          "Alternative recommandée : actions contextuelles intégrées dans la bottom bar ou bottom sheet",
        ],
        en: [
          "Conflicts with system gestures on Android 15 and iOS 18",
          "Content obstruction: up to 8% of usable area on a standard screen",
          "Discoverability problem: new users don't always understand the \"+\" icon",
          "Recommended alternative: contextual actions integrated into bottom bar or bottom sheet",
        ],
      },
    },
    {
      id: "gesture-navigation",
      title: {
        fr: "La navigation gestuelle a redessiné la carte",
        en: "Gesture navigation has redrawn the map",
      },
      content: {
        fr: "L'abandon des boutons physiques (Home, Back, Recents) au profit de la navigation gestuelle a eu un impact profond sur la thumb zone. Le swipe depuis le bas pour rentrer à l'accueil, le swipe depuis les bords pour revenir en arrière — ces gestes occupent désormais des zones qui étaient autrefois disponibles pour l'interface. Cela crée des \"zones mortes\" ergonomiques : des régions de l'écran où placer des éléments interactifs génère des conflits avec le système. En 2026, un designer doit connaître les safe insets de chaque plateforme aussi bien qu'un développeur.",
        en: "The abandonment of physical buttons (Home, Back, Recents) in favor of gesture navigation has had a profound impact on the thumb zone. Swiping from the bottom to go home, swiping from the edges to go back — these gestures now occupy zones that were previously available for the interface. This creates ergonomic \"dead zones\": screen regions where placing interactive elements creates conflicts with the system. In 2026, a designer must know each platform's safe insets as well as a developer does.",
      },
      highlight: {
        fr: "Les 20 pixels inférieurs et les 16 pixels latéraux sont désormais réservés au système. Placer un bouton dans ces zones, c'est garantir des faux positifs et une frustration utilisateur maximale.",
        en: "The bottom 20 pixels and side 16 pixels are now reserved for the system. Placing a button in these zones guarantees false positives and maximum user frustration.",
      },
    },
    {
      id: "foldables-challenge",
      title: {
        fr: "Les pliables : quand la thumb zone se dédouble",
        en: "Foldables: when the thumb zone splits in two",
      },
      content: {
        fr: "Les smartphones pliables comme le Samsung Galaxy Z Fold ou le Google Pixel Fold posent un défi inédit : la thumb zone change radicalement entre le mode plié (écran externe compact) et le mode déplié (écran tablette). En mode plié, l'utilisateur est dans une configuration classique de grand smartphone. En mode déplié, les pouces ne peuvent atteindre que les bords latéraux et le bas de l'écran — le centre devient une zone morte. Cela exige une approche de design adaptatif qui va bien au-delà du simple responsive : il faut repenser la disposition des actions selon le facteur de forme actif.",
        en: "Foldable smartphones like the Samsung Galaxy Z Fold or Google Pixel Fold pose an unprecedented challenge: the thumb zone changes radically between folded mode (compact external screen) and unfolded mode (tablet screen). In folded mode, the user is in a classic large smartphone configuration. In unfolded mode, thumbs can only reach the lateral edges and bottom of the screen — the center becomes a dead zone. This demands an adaptive design approach that goes well beyond simple responsive: action placement must be rethought based on the active form factor.",
      },
      bullets: {
        fr: [
          "En mode déplié, la zone \"facile\" se concentre sur les 30% inférieurs latéraux",
          "Le centre de l'écran déplié est la zone la plus difficile à atteindre",
          "Les apps optimisées pliables (comme Samsung One UI) utilisent des panneaux latéraux accessibles au pouce",
          "La charnière crée une zone de pli que les utilisateurs évitent instinctivement pour les interactions",
        ],
        en: [
          "In unfolded mode, the \"easy\" zone concentrates on the lower 30% laterally",
          "The center of the unfolded screen is the hardest zone to reach",
          "Foldable-optimized apps (like Samsung One UI) use thumb-accessible side panels",
          "The hinge creates a fold zone that users instinctively avoid for interactions",
        ],
      },
    },
    {
      id: "reachability-solutions",
      title: {
        fr: "Les solutions de reachability : nécessité ou aveu d'échec ?",
        en: "Reachability solutions: necessity or admission of failure?",
      },
      content: {
        fr: "Apple a introduit Reachability sur l'iPhone 6 Plus en 2014 : un double-tap sur le bouton Home fait glisser l'interface vers le bas. En 2026, Android et iOS proposent tous deux des mécanismes similaires. Mais soyons honnêtes : le recours à Reachability est l'aveu qu'une interface a été mal conçue pour l'écran qu'elle occupe. C'est un pansement système sur un problème de design. Une interface bien pensée ne devrait jamais forcer l'utilisateur à activer un raccourci d'accessibilité pour atteindre un bouton courant. Si vos utilisateurs utilisent Reachability fréquemment, c'est votre placement qui est en cause, pas leurs mains.",
        en: "Apple introduced Reachability on the iPhone 6 Plus in 2014: a double-tap on the Home button slides the interface down. In 2026, both Android and iOS offer similar mechanisms. But let's be honest: relying on Reachability is an admission that an interface was poorly designed for the screen it occupies. It's a system band-aid on a design problem. A well-designed interface should never force the user to activate an accessibility shortcut to reach a common button. If your users are using Reachability frequently, it's your placement that's at fault, not their hands.",
      },
      highlight: {
        fr: "Position forte : Reachability n'est pas une feature — c'est un symptôme. Si votre interface en a besoin, redesignez-la.",
        en: "Strong position: Reachability isn't a feature — it's a symptom. If your interface needs it, redesign it.",
      },
    },
    {
      id: "safe-zones-2026",
      title: {
        fr: "La carte des safe zones en 2026",
        en: "The 2026 safe zone map",
      },
      content: {
        fr: "En intégrant les données de prise en main actuelles, les contraintes gestuelles des OS, et la réalité des grands écrans, on peut redéfinir une carte ergonomique pour 2026. Cette carte n'est plus statique — elle est contextuelle. La zone premium (actions principales, navigation) occupe les 25% inférieurs de l'écran, centrés. La zone secondaire (contenu scrollable, actions moins fréquentes) couvre le tiers médian. La zone tertiaire (haut de l'écran) est réservée au contenu passif : titres, statuts, informations non interactives. Les actions dans cette zone doivent avoir des alternatives accessibles en bas.",
        en: "By integrating current grip data, OS gesture constraints, and the reality of large screens, we can redefine an ergonomic map for 2026. This map is no longer static — it's contextual. The premium zone (main actions, navigation) occupies the bottom 25% of the screen, centered. The secondary zone (scrollable content, less frequent actions) covers the middle third. The tertiary zone (top of screen) is reserved for passive content: titles, statuses, non-interactive information. Actions in this zone must have accessible alternatives at the bottom.",
      },
      bullets: {
        fr: [
          "Zone premium (bas 25%) : CTA principal, navigation, actions fréquentes — accessibles en < 200ms",
          "Zone secondaire (milieu 40%) : contenu principal, listes, cartes — accessible par scroll",
          "Zone tertiaire (haut 35%) : titres, statuts, infos contextuelles — PAS d'actions critiques",
          "Zone système (bords extrêmes) : réservée aux gestes OS — AUCUN élément interactif",
        ],
        en: [
          "Premium zone (bottom 25%): main CTA, navigation, frequent actions — accessible in < 200ms",
          "Secondary zone (middle 40%): main content, lists, cards — accessible via scroll",
          "Tertiary zone (top 35%): titles, statuses, contextual info — NO critical actions",
          "System zone (extreme edges): reserved for OS gestures — NO interactive elements",
        ],
      },
    },
    {
      id: "one-thumb-myth",
      title: {
        fr: "Le mythe du \"tout au pouce\" : pourquoi le dogme est dangereux",
        en: "The \"everything within thumb reach\" myth: why dogma is dangerous",
      },
      content: {
        fr: "Il serait tentant de conclure que TOUT doit être accessible au pouce. C'est un piège. Certaines actions bénéficient d'être délibérément hors de la zone de confort — les actions destructives par exemple. Supprimer un compte, annuler une commande, vider un panier : ces actions doivent résister à l'activation accidentelle. Les placer dans une zone qui demande un effort conscient est une décision UX intentionnelle, pas un oubli ergonomique. La Loi de Fitts nous enseigne que la facilité d'accès doit être proportionnelle à la fréquence et à la réversibilité de l'action.",
        en: "It would be tempting to conclude that EVERYTHING must be thumb-accessible. That's a trap. Certain actions benefit from being deliberately outside the comfort zone — destructive actions, for example. Deleting an account, canceling an order, emptying a cart: these actions must resist accidental activation. Placing them in a zone that requires conscious effort is an intentional UX decision, not an ergonomic oversight. Fitts' Law teaches us that ease of access should be proportional to the frequency and reversibility of the action.",
      },
      highlight: {
        fr: "L'accessibilité ergonomique doit servir l'intention, pas la facilité aveugle. Un bouton \"Supprimer tout\" facile à atteindre est un danger, pas un progrès.",
        en: "Ergonomic accessibility must serve intention, not blind ease. A \"Delete all\" button that's easy to reach is a danger, not progress.",
      },
    },
    {
      id: "testing-methodology",
      title: {
        fr: "Tester la thumb zone : méthodes et outils en 2026",
        en: "Testing the thumb zone: methods and tools in 2026",
      },
      content: {
        fr: "Les heatmaps de touch ne suffisent plus. En 2026, tester l'ergonomie du pouce exige une approche multi-couche. Le suivi de la prise en main (grip tracking) via les capteurs de pression et les gyroscopes des smartphones modernes permet de comprendre comment l'utilisateur tient réellement son appareil. Les outils comme Lookback et Maze intègrent désormais des analyses de reach (portée du pouce) croisées avec les taux de complétion des tâches. L'approche recommandée combine des tests en laboratoire contrôlé et des tests in-the-wild, car la posture de laboratoire (assis, concentré) ne reflète pas la réalité (debout dans le métro, une main occupée).",
        en: "Touch heatmaps are no longer enough. In 2026, testing thumb ergonomics requires a multi-layered approach. Grip tracking via pressure sensors and gyroscopes in modern smartphones helps understand how users actually hold their devices. Tools like Lookback and Maze now integrate reach analysis (thumb reach) cross-referenced with task completion rates. The recommended approach combines controlled lab tests and in-the-wild tests, because lab posture (seated, focused) doesn't reflect reality (standing in the subway, one hand occupied).",
      },
      bullets: {
        fr: [
          "Heatmaps de touch : où les utilisateurs tapent réellement (vs. où vous pensez qu'ils tapent)",
          "Grip tracking : comment la prise en main évolue au cours d'une session",
          "Tests in-the-wild : mesurer l'ergonomie en conditions réelles (transport, marche, file d'attente)",
          "Analyse de reach : croiser la portée du pouce avec les taux de succès par zone",
          "A/B testing positionnel : comparer les performances d'un même CTA en haut vs. en bas",
        ],
        en: [
          "Touch heatmaps: where users actually tap (vs. where you think they tap)",
          "Grip tracking: how grip evolves during a session",
          "In-the-wild tests: measuring ergonomics in real conditions (transit, walking, queuing)",
          "Reach analysis: cross-referencing thumb reach with success rates by zone",
          "Positional A/B testing: comparing performance of the same CTA at top vs. bottom",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "La thumb zone n'est pas une carte — c'est un modèle vivant",
        en: "The thumb zone isn't a map — it's a living model",
      },
      content: {
        fr: "Le modèle statique de la thumb zone de 2013 a rendu un immense service au design mobile en imposant la réflexion sur l'accessibilité physique. Mais en 2026, ce modèle doit évoluer vers quelque chose de dynamique : une carte qui s'adapte à la taille de l'écran, au type de prise en main détecté, au contexte d'utilisation, et aux contraintes gestuelles de l'OS. Les meilleurs designers mobiles de 2026 ne placent plus leurs éléments en fonction d'une carte figée — ils conçoivent des interfaces qui s'adaptent à la main qui les utilise. C'est la différence entre appliquer une règle et comprendre un principe.",
        en: "The static thumb zone model from 2013 did an immense service to mobile design by imposing consideration of physical accessibility. But in 2026, this model must evolve into something dynamic: a map that adapts to screen size, detected grip type, usage context, and OS gesture constraints. The best mobile designers of 2026 no longer place their elements based on a fixed map — they design interfaces that adapt to the hand using them. That's the difference between applying a rule and understanding a principle.",
      },
      highlight: {
        fr: "Cessez de designer pour une carte statique de 2013. Designez pour la main réelle de l'utilisateur, dans son contexte réel, sur son écran réel. C'est la seule thumb zone qui compte.",
        en: "Stop designing for a static 2013 map. Design for the user's actual hand, in their actual context, on their actual screen. That's the only thumb zone that matters.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Hoober, S. (2013). How Do Users Really Hold Mobile Devices? UXmatters.",
      url: "https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php",
    },
    {
      id: 2,
      label: "Hoober, S. (2017). Design for Fingers, Touch, and People. UXmatters.",
      url: "https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php",
    },
    {
      id: 3,
      label: "Bergstrom-Lehtovirta, J. & Oulasvirta, A. (2014). Modeling the functional area of the thumb on mobile touchscreen surfaces. CHI '14.",
      url: "https://doi.org/10.1145/2556288.2557354",
    },
    {
      id: 4,
      label: "Apple Human Interface Guidelines — Gestures and Navigation (2025).",
      url: "https://developer.apple.com/design/human-interface-guidelines/gestures",
    },
    {
      id: 5,
      label: "Material Design 3 — Navigation patterns and bottom navigation (2025).",
      url: "https://m3.material.io/components/navigation-bar/overview",
    },
    {
      id: 6,
      label: "Fitts, P.M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. Journal of Experimental Psychology, 47(6), 381-391.",
      url: "https://doi.org/10.1037/h0055392",
    },
    {
      id: 7,
      label: "Chang, Y. & Nesbitt, K.V. (2019). Developing a thumb interaction model for handheld touchscreen devices. International Journal of Human-Computer Studies.",
    },
    {
      id: 8,
      label: "Wobbrock, J.O. et al. (2008). The effects of task and device on touch-target accuracy. MobileHCI '08.",
      url: "https://doi.org/10.1145/1409240.1409267",
    },
  ],
};
