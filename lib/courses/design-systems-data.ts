import type { CourseData } from "./fitts-data";

export const designSystemsData: CourseData = {
  slug: "design-systems",
  chapter: 15,
  title: {
    fr: "Les Design Systems : Scaler ses Décisions",
    en: "Design Systems: Scaling Your Decisions",
  },
  subtitle: {
    fr: "De la Cohérence au Système Vivant",
    en: "From Consistency to a Living System",
  },
  readingTime: 19,
  category: "ux",
  description: {
    fr: "Comprendre ce qui distingue un vrai design system d'une simple bibliothèque de composants, et comment construire un système vivant qui scale les décisions de design.",
    en: "Understanding what distinguishes a real design system from a simple component library, and how to build a living system that scales design decisions.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Votre \"design system\" n'en est probablement pas un",
        en: "Your \"design system\" is probably not one",
      },
      content: {
        fr: "Soyons directs : la majorité de ce que l'industrie appelle \"design systems\" sont des bibliothèques de composants Figma avec un fichier de documentation que personne ne lit. Un dossier de composants bien organisé n'est pas un design system. Un kit UI acheté sur le Figma Community n'est pas un design system. Même un Storybook complet avec tous vos composants React n'est pas un design system. Un design system est un ensemble de standards, de principes et de composants interconnectés qui permettent à une organisation de prendre des décisions de design cohérentes à grande échelle. Sans principes, sans gouvernance, sans processus de contribution, vous avez une librairie — pas un système.",
        en: "Let's be direct: the majority of what the industry calls \"design systems\" are Figma component libraries with a documentation file nobody reads. A well-organized component folder is not a design system. A UI kit bought from the Figma Community is not a design system. Even a complete Storybook with all your React components is not a design system. A design system is a set of interconnected standards, principles, and components that enable an organization to make consistent design decisions at scale. Without principles, without governance, without a contribution process, you have a library — not a system.",
      },
      highlight: {
        fr: "Un design system sans gouvernance est juste un fichier Figma qui prend de la place. Et un fichier Figma obsolète est pire que pas de fichier du tout.",
        en: "A design system without governance is just a Figma file taking up space. And an obsolete Figma file is worse than no file at all.",
      },
    },
    {
      id: "not-a-library",
      title: {
        fr: "Ce qu'un design system est réellement (et ce qu'il n'est pas)",
        en: "What a design system really is (and what it isn't)",
      },
      content: {
        fr: "Un design system est composé de trois couches distinctes et complémentaires. La couche fondation contient les design tokens (couleurs, typographies, espacements, ombres), les principes de design et les guidelines de voix et ton. La couche composants contient les éléments d'interface réutilisables, documentés avec leurs variantes, états et cas d'usage. La couche patterns contient les solutions récurrentes aux problèmes d'expérience utilisateur — comment on gère les erreurs, comment on structure un formulaire, comment on navigue. La plupart des équipes construisent la couche composants et ignorent les deux autres. C'est comme construire des murs sans fondations ni plan d'architecte.",
        en: "A design system is composed of three distinct and complementary layers. The foundation layer contains design tokens (colors, typography, spacing, shadows), design principles, and voice and tone guidelines. The component layer contains reusable interface elements, documented with their variants, states, and use cases. The pattern layer contains recurring solutions to user experience problems — how to handle errors, how to structure a form, how to navigate. Most teams build the component layer and ignore the other two. It's like building walls without foundations or an architect's plan.",
      },
      bullets: {
        fr: [
          "Fondations : tokens, principes, voix et ton, grilles, accessibilité.",
          "Composants : boutons, inputs, modales, cartes — avec documentation d'usage.",
          "Patterns : flows d'authentification, gestion d'erreurs, navigation, recherche.",
          "Gouvernance : qui décide, qui contribue, qui maintient, qui fait évoluer.",
        ],
        en: [
          "Foundations: tokens, principles, voice and tone, grids, accessibility.",
          "Components: buttons, inputs, modals, cards — with usage documentation.",
          "Patterns: authentication flows, error handling, navigation, search.",
          "Governance: who decides, who contributes, who maintains, who evolves.",
        ],
      },
    },
    {
      id: "atomic-design",
      title: {
        fr: "L'Atomic Design de Brad Frost : penser en systèmes, pas en pages",
        en: "Brad Frost's Atomic Design: thinking in systems, not pages",
      },
      content: {
        fr: "En 2013, Brad Frost a proposé une méthodologie qui a transformé notre façon de penser les interfaces. L'Atomic Design structure les composants en cinq niveaux : atomes (bouton, input, label), molécules (champ de recherche = input + bouton), organismes (header = logo + nav + search), templates (structures de page) et pages (instances réelles avec du contenu). Cette hiérarchie n'est pas un dogme — c'est un modèle mental. Son vrai apport est de forcer les designers à penser en termes de composition plutôt qu'en termes de pages. Les pages sont éphémères ; les composants qui les constituent sont durables. Investir dans les atomes et les molécules, c'est investir dans la scalabilité.",
        en: "In 2013, Brad Frost proposed a methodology that transformed how we think about interfaces. Atomic Design structures components into five levels: atoms (button, input, label), molecules (search field = input + button), organisms (header = logo + nav + search), templates (page structures), and pages (real instances with content). This hierarchy isn't dogma — it's a mental model. Its real contribution is forcing designers to think in terms of composition rather than pages. Pages are ephemeral; the components that constitute them are durable. Investing in atoms and molecules is investing in scalability.",
      },
      highlight: {
        fr: "Arrêtez de designer des pages. Commencez à designer des systèmes de composants qui génèrent des pages. C'est la différence entre artisan et architecte.",
        en: "Stop designing pages. Start designing component systems that generate pages. That's the difference between craftsman and architect.",
      },
    },
    {
      id: "design-tokens",
      title: {
        fr: "Les design tokens : le langage commun entre design et code",
        en: "Design tokens: the shared language between design and code",
      },
      content: {
        fr: "Les design tokens sont peut-être l'innovation la plus importante des design systems modernes. Un token est une variable qui stocke une décision de design : `color.primary.500 = #0099FF`, `spacing.md = 16px`, `font.heading.weight = 700`. Au lieu d'encoder des valeurs brutes dans chaque composant, vous référencez des tokens. Cela crée un niveau d'abstraction qui rend le système entier modifiable de manière centralisée. Changer votre couleur primaire n'est plus un cauchemar de find-and-replace dans 200 fichiers — c'est une modification d'une seule valeur qui cascade dans tout le produit. Salesforce a popularisé le concept, et des outils comme Style Dictionary, Figma Variables et Tokens Studio l'ont rendu pratique.",
        en: "Design tokens are perhaps the most important innovation in modern design systems. A token is a variable that stores a design decision: `color.primary.500 = #0099FF`, `spacing.md = 16px`, `font.heading.weight = 700`. Instead of hard-coding raw values in each component, you reference tokens. This creates an abstraction layer that makes the entire system centrally modifiable. Changing your primary color is no longer a find-and-replace nightmare across 200 files — it's a single value change that cascades through the entire product. Salesforce popularized the concept, and tools like Style Dictionary, Figma Variables, and Tokens Studio made it practical.",
      },
      bullets: {
        fr: [
          "Tokens globaux : valeurs brutes (blue-500 = #0099FF, space-4 = 16px).",
          "Tokens alias : sémantiques (color-primary = blue-500, spacing-component = space-4).",
          "Tokens composant : spécifiques (button-bg-primary = color-primary).",
          "Multi-plateforme : un seul fichier de tokens génère CSS, iOS Swift, Android Kotlin.",
        ],
        en: [
          "Global tokens: raw values (blue-500 = #0099FF, space-4 = 16px).",
          "Alias tokens: semantic (color-primary = blue-500, spacing-component = space-4).",
          "Component tokens: specific (button-bg-primary = color-primary).",
          "Multi-platform: a single token file generates CSS, iOS Swift, Android Kotlin.",
        ],
      },
    },
    {
      id: "component-api",
      title: {
        fr: "L'API des composants : concevoir pour les autres designers",
        en: "Component API: designing for other designers",
      },
      content: {
        fr: "Un composant de design system n'est pas un composant de projet. Il est conçu pour être utilisé par des dizaines de designers et développeurs qui ne l'ont pas créé. Cela change radicalement la façon dont il doit être pensé. Chaque composant a besoin d'une API claire : quelles props/variantes accepte-t-il ? Quels sont ses états (default, hover, focus, disabled, error, loading) ? Quelles sont ses contraintes (taille minimum, contenu maximum) ? Quels sont ses cas d'usage et ses anti-patterns ? Un bouton dans un design system n'est pas juste un rectangle avec du texte. C'est un contrat entre le créateur du composant et ses utilisateurs. Un contrat mal défini crée du chaos à grande échelle.",
        en: "A design system component is not a project component. It's designed to be used by dozens of designers and developers who didn't create it. This radically changes how it should be conceived. Each component needs a clear API: what props/variants does it accept? What are its states (default, hover, focus, disabled, error, loading)? What are its constraints (minimum size, maximum content)? What are its use cases and anti-patterns? A button in a design system isn't just a rectangle with text. It's a contract between the component creator and its users. A poorly defined contract creates chaos at scale.",
      },
      highlight: {
        fr: "Un composant de design system est un produit dont les utilisateurs sont vos collègues. Traitez-les avec la même rigueur que vos utilisateurs finaux.",
        en: "A design system component is a product whose users are your colleagues. Treat them with the same rigor as your end users.",
      },
    },
    {
      id: "documentation",
      title: {
        fr: "La documentation : le composant le plus important du système",
        en: "Documentation: the most important component of the system",
      },
      content: {
        fr: "Voici une vérité que peu de designers veulent entendre : la documentation est plus importante que les composants eux-mêmes. Un composant sans documentation est un composant qui sera mal utilisé, dupliqué, ou ignoré. Les meilleurs design systems — Material Design, Polaris de Shopify, Carbon d'IBM — investissent autant dans leur documentation que dans leurs composants. Chaque composant doit documenter : son usage (quand l'utiliser et quand NE PAS l'utiliser), ses variantes avec des exemples visuels, ses états et comportements, ses guidelines d'accessibilité, et son code d'implémentation. La documentation doit être vivante, co-localisée avec les composants, et mise à jour à chaque changement.",
        en: "Here's a truth few designers want to hear: documentation is more important than the components themselves. A component without documentation is a component that will be misused, duplicated, or ignored. The best design systems — Material Design, Shopify's Polaris, IBM's Carbon — invest as much in their documentation as in their components. Each component must document: its usage (when to use it and when NOT to), its variants with visual examples, its states and behaviors, its accessibility guidelines, and its implementation code. Documentation must be alive, co-located with components, and updated with every change.",
      },
      bullets: {
        fr: [
          "Do / Don't : montrez les bons et mauvais usages avec des exemples visuels.",
          "Playground interactif : laissez les utilisateurs expérimenter les variantes en direct.",
          "Changelog : documentez chaque changement avec la raison et l'impact.",
          "Guidelines d'accessibilité : chaque composant doit documenter ses exigences WCAG.",
          "Code snippets : fournissez du code copy-paste pour chaque variante.",
        ],
        en: [
          "Do / Don't: show good and bad usages with visual examples.",
          "Interactive playground: let users experiment with variants live.",
          "Changelog: document every change with reason and impact.",
          "Accessibility guidelines: each component must document its WCAG requirements.",
          "Code snippets: provide copy-paste code for each variant.",
        ],
      },
    },
    {
      id: "governance",
      title: {
        fr: "La gouvernance : le secret des design systems qui survivent",
        en: "Governance: the secret of design systems that survive",
      },
      content: {
        fr: "C'est ici que je prends ma position la plus tranchée : un design system sans modèle de gouvernance est condamné à mourir. J'ai vu des dizaines de design systems lancés avec enthousiasme et abandonnés en moins d'un an. La raison n'est jamais technique — c'est toujours un échec de gouvernance. Qui décide d'ajouter un nouveau composant ? Qui valide les modifications ? Comment les contributions sont-elles soumises, revues et intégrées ? Quel est le processus de deprecation ? Il existe trois modèles principaux : centralisé (une équipe dédiée contrôle tout), fédéré (des contributeurs dans chaque équipe produit), et communautaire (open contribution avec review). Le modèle fédéré est généralement le plus viable car il répartit la charge tout en maintenant la qualité.",
        en: "This is where I take my strongest position: a design system without a governance model is doomed to die. I've seen dozens of design systems launched with enthusiasm and abandoned within a year. The reason is never technical — it's always a governance failure. Who decides to add a new component? Who validates changes? How are contributions submitted, reviewed, and integrated? What is the deprecation process? There are three main models: centralized (a dedicated team controls everything), federated (contributors in each product team), and community (open contribution with review). The federated model is generally the most viable because it distributes the load while maintaining quality.",
      },
      highlight: {
        fr: "Le design system le plus beau du monde mourra sans gouvernance. Le design system le plus modeste survivra s'il a un processus de contribution clair et des responsables identifiés.",
        en: "The most beautiful design system in the world will die without governance. The most modest design system will survive if it has a clear contribution process and identified maintainers.",
      },
    },
    {
      id: "adoption",
      title: {
        fr: "L'adoption : le vrai défi n'est pas technique, il est humain",
        en: "Adoption: the real challenge isn't technical, it's human",
      },
      content: {
        fr: "Vous pouvez construire le design system le plus élégant du monde — s'il n'est pas adopté, il ne vaut rien. L'adoption est un problème de changement management, pas un problème de design. Les designers et développeurs résistent à l'adoption pour des raisons légitimes : le système ne couvre pas leurs cas d'usage, il est trop rigide, trop complexe, pas assez documenté, ou ils n'ont simplement pas été consultés lors de sa création. La clé de l'adoption est l'implication précoce des utilisateurs du système (designers et devs), la couverture des cas d'usage réels (pas théoriques), et la création de valeur immédiate (gagner du temps dès le premier usage).",
        en: "You can build the most elegant design system in the world — if it's not adopted, it's worth nothing. Adoption is a change management problem, not a design problem. Designers and developers resist adoption for legitimate reasons: the system doesn't cover their use cases, it's too rigid, too complex, not documented enough, or they simply weren't consulted during its creation. The key to adoption is early involvement of system users (designers and devs), coverage of real (not theoretical) use cases, and creating immediate value (saving time from the very first use).",
      },
      bullets: {
        fr: [
          "Impliquez les futurs utilisateurs dès la phase de conception du système.",
          "Commencez par les composants les plus fréquemment utilisés (boutons, inputs, typographie).",
          "Fournissez des templates et des starter kits pour réduire la barrière d'entrée.",
          "Créez un canal de support dédié (Slack, Teams) pour répondre aux questions.",
          "Mesurez l'adoption : taux d'utilisation des composants, nombre de composants custom vs système.",
        ],
        en: [
          "Involve future users from the system design phase.",
          "Start with the most frequently used components (buttons, inputs, typography).",
          "Provide templates and starter kits to lower the entry barrier.",
          "Create a dedicated support channel (Slack, Teams) to answer questions.",
          "Measure adoption: component usage rate, number of custom vs system components.",
        ],
      },
    },
    {
      id: "versioning",
      title: {
        fr: "Le versioning : gérer l'évolution sans casser la production",
        en: "Versioning: managing evolution without breaking production",
      },
      content: {
        fr: "Un design system est un produit vivant qui évolue constamment. Le versioning sémantique (SemVer) est essentiel pour communiquer l'impact des changements. Un changement majeur (v2.0) peut casser des implémentations existantes — il exige une migration. Un changement mineur (v1.1) ajoute des fonctionnalités sans casser l'existant. Un patch (v1.0.1) corrige des bugs. Sans versioning rigoureux, chaque mise à jour du design system devient un risque pour les équipes produit. Et un système que les équipes ont peur de mettre à jour est un système qu'elles finiront par forker ou abandonner. Le versioning n'est pas un détail technique — c'est un contrat de confiance avec vos utilisateurs internes.",
        en: "A design system is a living product that constantly evolves. Semantic versioning (SemVer) is essential for communicating the impact of changes. A major change (v2.0) can break existing implementations — it requires migration. A minor change (v1.1) adds features without breaking existing ones. A patch (v1.0.1) fixes bugs. Without rigorous versioning, every design system update becomes a risk for product teams. And a system that teams are afraid to update is a system they'll eventually fork or abandon. Versioning isn't a technical detail — it's a trust contract with your internal users.",
      },
      bullets: {
        fr: [
          "Major (v2.0) : breaking changes — migration guide obligatoire.",
          "Minor (v1.1) : nouvelles features rétro-compatibles.",
          "Patch (v1.0.1) : corrections de bugs, pas de changement d'API.",
          "Deprecation : annoncez les composants obsolètes au moins 2 versions avant suppression.",
          "Release notes : documentez chaque changement avec visuel avant/après.",
        ],
        en: [
          "Major (v2.0): breaking changes — migration guide mandatory.",
          "Minor (v1.1): backward-compatible new features.",
          "Patch (v1.0.1): bug fixes, no API changes.",
          "Deprecation: announce obsolete components at least 2 versions before removal.",
          "Release notes: document every change with before/after visuals.",
        ],
      },
    },
    {
      id: "ai-and-systems",
      title: {
        fr: "L'IA et les design systems : révolution ou disruption ?",
        en: "AI and design systems: revolution or disruption?",
      },
      content: {
        fr: "L'intelligence artificielle est en train de transformer radicalement la façon dont nous construisons et utilisons les design systems. Des outils comme Figma AI peuvent déjà suggérer des composants, détecter les inconsistances et générer des variantes automatiquement. Les LLMs peuvent générer du code conforme au design system à partir de spécifications en langage naturel. Mais voici le paradoxe : l'IA rend les design systems encore plus nécessaires, pas moins. Sans système de référence, l'IA génère du design incohérent. Les tokens deviennent les \"instructions\" que l'IA suit pour produire du output conforme. Un design system bien documenté est le meilleur prompt pour une IA de génération d'interface. Les équipes qui n'ont pas de design system structuré seront les plus pénalisées par l'adoption de l'IA.",
        en: "Artificial intelligence is radically transforming how we build and use design systems. Tools like Figma AI can already suggest components, detect inconsistencies, and generate variants automatically. LLMs can generate design-system-compliant code from natural language specifications. But here's the paradox: AI makes design systems even more necessary, not less. Without a reference system, AI generates inconsistent design. Tokens become the \"instructions\" AI follows to produce compliant output. A well-documented design system is the best prompt for an interface generation AI. Teams without a structured design system will be the most penalized by AI adoption.",
      },
      highlight: {
        fr: "L'IA ne remplace pas le design system — elle l'amplifie. Un bon système + l'IA = productivité exponentielle. Pas de système + l'IA = chaos exponentiel.",
        en: "AI doesn't replace the design system — it amplifies it. A good system + AI = exponential productivity. No system + AI = exponential chaos.",
      },
    },
    {
      id: "measuring-success",
      title: {
        fr: "Mesurer le succès d'un design system",
        en: "Measuring a design system's success",
      },
      content: {
        fr: "Un design system est un investissement significatif — il doit prouver sa valeur avec des métriques concrètes. Le taux d'adoption (pourcentage de composants système vs custom dans les produits) est l'indicateur le plus direct. Le time-to-ship (temps entre le design et la mise en production) devrait diminuer significativement. La consistance cross-produit (audit visuel et fonctionnel) devrait s'améliorer. La satisfaction des utilisateurs internes (designers et développeurs) est un leading indicator crucial. Et le nombre de bugs liés à l'interface devrait chuter. Un design system qui ne peut pas démontrer son impact en chiffres est un design system qui perdra son budget au prochain exercice fiscal.",
        en: "A design system is a significant investment — it must prove its value with concrete metrics. The adoption rate (percentage of system vs custom components in products) is the most direct indicator. Time-to-ship (time between design and production deployment) should decrease significantly. Cross-product consistency (visual and functional audit) should improve. Internal user satisfaction (designers and developers) is a crucial leading indicator. And the number of interface-related bugs should drop. A design system that can't demonstrate its impact in numbers is a design system that will lose its budget in the next fiscal year.",
      },
      bullets: {
        fr: [
          "Taux d'adoption : % de composants système utilisés vs composants custom créés.",
          "Time-to-ship : réduction mesurable du temps de développement des nouvelles features.",
          "Consistency score : audit régulier de la cohérence visuelle entre les produits.",
          "Developer Experience (DX) : satisfaction des développeurs mesurée par survey trimestriel.",
          "Réduction des bugs UI : moins de tickets liés à l'incohérence visuelle ou fonctionnelle.",
        ],
        en: [
          "Adoption rate: % of system components used vs custom components created.",
          "Time-to-ship: measurable reduction in development time for new features.",
          "Consistency score: regular visual consistency audit across products.",
          "Developer Experience (DX): developer satisfaction measured by quarterly survey.",
          "UI bug reduction: fewer tickets related to visual or functional inconsistency.",
        ],
      },
    },
    {
      id: "anti-patterns",
      title: {
        fr: "Les anti-patterns : les erreurs qui tuent un design system",
        en: "Anti-patterns: the mistakes that kill a design system",
      },
      content: {
        fr: "Après avoir contribué à plusieurs design systems et observé des dizaines d'autres, voici les erreurs les plus fatales. Le \"design system fantôme\" : un système magnifique que personne n'utilise parce qu'il a été conçu en silo. Le \"design system perfectionniste\" : un système qui n'est jamais lancé parce qu'il n'est jamais \"assez complet\". Le \"design system musée\" : un système figé que personne n'ose modifier. Le \"design system dictatorial\" : un système imposé sans consultation qui génère du ressentiment. Le \"design system orphelin\" : un système dont l'équipe fondatrice est partie et que personne ne maintient. Chacun de ces anti-patterns est évitable avec une gouvernance appropriée et une culture de collaboration.",
        en: "After contributing to several design systems and observing dozens of others, here are the most fatal mistakes. The \"ghost design system\": a magnificent system nobody uses because it was designed in a silo. The \"perfectionist design system\": a system that never launches because it's never \"complete enough.\" The \"museum design system\": a frozen system nobody dares modify. The \"dictatorial design system\": a system imposed without consultation that generates resentment. The \"orphan design system\": a system whose founding team left and nobody maintains. Each of these anti-patterns is avoidable with appropriate governance and a culture of collaboration.",
      },
      highlight: {
        fr: "Le pire design system n'est pas celui qui a des lacunes — c'est celui qui est parfait mais que personne n'utilise. Lancez imparfait, itérez vite, écoutez vos utilisateurs.",
        en: "The worst design system isn't the one with gaps — it's the one that's perfect but nobody uses. Launch imperfect, iterate fast, listen to your users.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Un design system est un produit, pas un projet",
        en: "A design system is a product, not a project",
      },
      content: {
        fr: "La différence fondamentale entre les design systems qui réussissent et ceux qui échouent tient en une phrase : les premiers sont traités comme des produits, les seconds comme des projets. Un projet a un début et une fin. Un produit évolue continuellement avec ses utilisateurs. Material Design de Google est en version 3 après 10 ans d'évolution. Le Human Interface Guidelines d'Apple évolue à chaque release d'iOS. Polaris de Shopify est maintenu par une équipe dédiée permanente. Si votre organisation traite le design system comme un projet one-shot à livrer puis \"maintenir\", il mourra. Traitez-le comme un produit avec des utilisateurs (vos designers et développeurs), un roadmap, des sprints, des user feedbacks et des métriques de succès. C'est le seul chemin vers un système vivant.",
        en: "The fundamental difference between design systems that succeed and those that fail comes down to one sentence: the former are treated as products, the latter as projects. A project has a beginning and an end. A product evolves continuously with its users. Google's Material Design is on version 3 after 10 years of evolution. Apple's Human Interface Guidelines evolves with every iOS release. Shopify's Polaris is maintained by a permanent dedicated team. If your organization treats the design system as a one-shot project to deliver then \"maintain,\" it will die. Treat it as a product with users (your designers and developers), a roadmap, sprints, user feedback, and success metrics. It's the only path to a living system.",
      },
      highlight: {
        fr: "Les meilleures décisions de design sont celles qui n'ont pas besoin d'être prises deux fois. C'est exactement ce qu'un design system bien conçu permet : scaler vos meilleures décisions à travers toute l'organisation.",
        en: "The best design decisions are those that don't need to be made twice. That's exactly what a well-designed design system enables: scaling your best decisions across the entire organization.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Frost, B. (2016). Atomic Design. Brad Frost.",
      url: "https://atomicdesign.bradfrost.com/",
    },
    {
      id: 2,
      label: "Curtis, N. (2010). Modular Web Design: Creating Reusable Components for User Experience Design and Documentation. New Riders.",
    },
    {
      id: 3,
      label: "Suarez, M., Anne, J., Sylor-Miller, K., Mounter, D., & Stanfield, R. (2017). Design Systems Handbook. InVision.",
      url: "https://www.designbetter.co/design-systems-handbook",
    },
    {
      id: 4,
      label: "Google Material Design (2014-2024). Material Design Guidelines.",
      url: "https://m3.material.io/",
    },
    {
      id: 5,
      label: "Apple (2024). Human Interface Guidelines.",
      url: "https://developer.apple.com/design/human-interface-guidelines/",
    },
    {
      id: 6,
      label: "Shopify (2024). Polaris Design System.",
      url: "https://polaris.shopify.com/",
    },
    {
      id: 7,
      label: "Salesforce (2014). Lightning Design System — Introduction of Design Tokens.",
      url: "https://www.lightningdesignsystem.com/design-tokens/",
    },
    {
      id: 8,
      label: "Vesselov, S. & Davis, T. (2019). Building Design Systems: Unify User Experiences through a Shared Design Language. Apress.",
    },
    {
      id: 9,
      label: "W3C Design Tokens Community Group (2023). Design Tokens Format Module.",
      url: "https://design-tokens.github.io/community-group/format/",
    },
  ],
};
