import type { CourseSection, CourseSource, CourseData } from "./fitts-data";

export const jakobData: CourseData = {
  slug: "loi-de-jakob",
  chapter: 3,
  title: {
    fr: "La Loi de Jakob : Les Utilisateurs Veulent des Standards, Pas de l'Originalité Gratuite",
    en: "Jakob's Law: Users Want Standards, Not Gratuitous Originality",
  },
  subtitle: {
    fr: "Naviguer entre la Loi de Jakob et le Design Disruptif",
    en: "Navigating between Jakob's Law and Disruptive Design",
  },
  readingTime: 15,
  description: {
    fr: "Comprendre pourquoi les utilisateurs préfèrent les interfaces familières et comment innover sans les perdre.",
    en: "Understanding why users prefer familiar interfaces and how to innovate without losing them.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "L'Équilibre entre Standard et Innovation",
        en: "The Balance Between Standards and Innovation",
      },
      content: {
        fr: "En design d'expérience utilisateur, une tension existe entre le respect des conventions (Loi de Jakob) et la volonté d'innover (Design Disruptif). Loin d'être opposés, ces deux principes sont les deux faces d'une même pièce : créer des produits à la fois intuitifs et mémorables. Le rôle du designer est de trouver le juste équilibre.",
        en: "In user experience design, a tension exists between respecting conventions (Jakob's Law) and the desire to innovate (Disruptive Design). Far from being opposed, these two principles are two sides of the same coin: creating products that are both intuitive and memorable. The designer's role is to find the right balance.",
      },
    },
    {
      id: "stability",
      title: {
        fr: "La Stabilité : Le respect du capital cognitif utilisateur",
        en: "Stability: Respecting the user's cognitive capital",
      },
      content: {
        fr: "Les utilisateurs passent la majorité de leur temps sur d'autres produits que le vôtre. Ils s'attendent donc à ce que votre interface fonctionne comme celles qu'ils connaissent déjà. C'est le cœur de la Loi de Jakob, formulée par Jakob Nielsen, co-fondateur du Nielsen Norman Group.",
        en: "Users spend most of their time on other products, not yours. They therefore expect your interface to work like the ones they already know. This is the heart of Jakob's Law, formulated by Jakob Nielsen, co-founder of the Nielsen Norman Group.",
      },
      highlight: {
        fr: "Ce n'est pas une loi de design visuel, mais une loi sur la mémoire, l'apprentissage et l'effort cognitif.",
        en: "It's not a visual design law, but a law about memory, learning, and cognitive effort.",
      },
    },
    {
      id: "brain",
      title: {
        fr: "Le cerveau cherche l'économie d'effort",
        en: "The brain seeks to minimize effort",
      },
      content: {
        fr: "Le cerveau fonctionne par reconnaissance (rapide, automatique), pas par raisonnement (lent, coûteux). Une interface standardisée active la reconnaissance. L'utilisateur arrive avec des représentations internes — des modèles mentaux — apprises ailleurs.",
        en: "The brain works through recognition (fast, automatic), not reasoning (slow, costly). A standardized interface activates recognition. Users arrive with internal representations — mental models — learned elsewhere.",
      },
      bullets: {
        fr: [
          "L'icône Maison → Retour à l'accueil",
          "L'icône Loupe → Recherche",
          "L'icône Panier → Achats / Commande",
          "Le menu hamburger → Navigation mobile",
          "Le logo en haut à gauche → Retour à l'accueil",
        ],
        en: [
          "Home icon → Return to homepage",
          "Magnifying glass → Search",
          "Cart icon → Shopping / Order",
          "Hamburger menu → Mobile navigation",
          "Top-left logo → Return to homepage",
        ],
      },
      highlight: {
        fr: "Chaque écart inutile à ces modèles augmente la charge cognitive.",
        en: "Every unnecessary deviation from these models increases cognitive load.",
      },
    },
    {
      id: "sacred-free",
      title: {
        fr: "La loi protège les usages, pas le style",
        en: "The law protects usage patterns, not style",
      },
      content: {
        fr: "Il est essentiel de comprendre ce que la Loi de Jakob protège (le sacré) et ce qu'elle n'interdit pas (le libre). L'originalité doit s'exprimer dans le visuel, pas dans la navigation de base.",
        en: "It's essential to understand what Jakob's Law protects (the sacred) and what it doesn't forbid (the free). Originality should be expressed in visuals, not in basic navigation.",
      },
      bullets: {
        fr: [
          "Ce que la loi protège (Le sacré) : Navigation, Patterns d'interaction, Gestes connus, Raccourcis cognitifs.",
          "Ce qu'elle n'interdit pas (Le libre) : Direction artistique, Storytelling, Ton éditorial, Visuels mémorables.",
        ],
        en: [
          "What the law protects (Sacred): Navigation, Interaction patterns, Known gestures, Cognitive shortcuts.",
          "What it doesn't forbid (Free): Art direction, Storytelling, Editorial tone, Memorable visuals.",
        ],
      },
      highlight: {
        fr: "L'erreur classique : être original sur la navigation au lieu de l'être sur l'expression.",
        en: "The classic mistake: being original with navigation instead of expression.",
      },
    },
    {
      id: "gratuitous",
      title: {
        fr: "Le coût de \"l'originalité gratuite\"",
        en: "The cost of \"gratuitous originality\"",
      },
      content: {
        fr: "L'originalité gratuite est l'ajout de nouveauté sans bénéfice fonctionnel ou cognitif clair pour l'utilisateur. Elle impose un coût d'apprentissage sans bénéfice perçu. Le cerveau se pose une question implicite : « Pourquoi devrais-je faire un effort ici ? » Sans réponse immédiate → Frustration, abandon, rejet.",
        en: "Gratuitous originality is adding novelty without clear functional or cognitive benefit for the user. It imposes a learning cost without perceived benefit. The brain asks an implicit question: 'Why should I make an effort here?' Without an immediate answer → Frustration, abandonment, rejection.",
      },
      highlight: {
        fr: "En UX, tout effort doit être justifié par une valeur perçue immédiate.",
        en: "In UX, every effort must be justified by immediate perceived value.",
      },
    },
    {
      id: "disruption-value",
      title: {
        fr: "Le vrai moteur du design disruptif : la valeur",
        en: "The real driver of disruptive design: value",
      },
      content: {
        fr: "Un design n'est disruptif que s'il résout MIEUX un problème réel. Le but est de justifier un nouvel apprentissage par un bénéfice évident. Si aucun de ces leviers n'est activé, on parle d'originalité gratuite, pas de disruption.",
        en: "A design is only disruptive if it solves a real problem BETTER. The goal is to justify new learning through an obvious benefit. If none of these levers are activated, it's gratuitous originality, not disruption.",
      },
      bullets: {
        fr: [
          "Réduction massive de friction : Le scroll infini vs. la pagination. Moins de clics, plus de fluidité.",
          "Simplification radicale d'un parcours : Le 'drag & drop' de fichiers. Un geste naturel remplace une procédure complexe.",
          "Révélation d'un besoin latent : Les 'stories' sur les réseaux sociaux. Un format éphémère que personne n'avait demandé, mais que tout le monde a adopté.",
        ],
        en: [
          "Massive friction reduction: Infinite scroll vs. pagination. Fewer clicks, more fluidity.",
          "Radical path simplification: Drag & drop files. A natural gesture replaces a complex procedure.",
          "Revealing a latent need: Stories on social media. An ephemeral format nobody asked for, but everyone adopted.",
        ],
      },
    },
    {
      id: "rupture-vs-disruption",
      title: {
        fr: "Disruption ≠ Rupture Brutale",
        en: "Disruption ≠ Brutal Break",
      },
      content: {
        fr: "Il est essentiel de distinguer une rupture brutale d'une vraie disruption. La rupture casse les repères, impose un nouveau modèle, est forcée et coûteuse cognitivement. La disruption, elle, déplace progressivement les repères, propose un meilleur modèle, est acceptée et justifiée par la valeur.",
        en: "It's essential to distinguish a brutal break from true disruption. A break shatters reference points, imposes a new model, is forced and cognitively costly. Disruption gradually shifts reference points, proposes a better model, is accepted and justified by value.",
      },
      highlight: {
        fr: "Une rupture peut être disruptive. Une disruption n'est jamais brutale.",
        en: "A break can be disruptive. A disruption is never brutal.",
      },
    },
    {
      id: "limits",
      title: {
        fr: "Chaque modèle a ses limites",
        en: "Every model has its limits",
      },
      content: {
        fr: "Ni la Loi de Jakob ni le Design Disruptif ne sont des vérités absolues. Chacun a ses pièges qu'il faut connaître pour mieux les éviter.",
        en: "Neither Jakob's Law nor Disruptive Design are absolute truths. Each has its pitfalls that must be known to better avoid them.",
      },
      bullets: {
        fr: [
          "Limites de Jakob : Risque de standardisation excessive → Produits interchangeables, fades. Ignore l'évolution des usages → Ce qui était original hier (swipe, scroll infini) est standard aujourd'hui. Dépend du profil utilisateur → La tolérance à la nouveauté n'est pas la même pour un novice et un expert.",
          "Risques du Design Disruptif : Le mythe de l'innovation permanente → L'innovation devient un objectif marketing, pas utilisateur. Le mépris de l'existant → Disrupter sans comprendre pourquoi l'existant fonctionne. Inadapté aux contextes critiques → Dans la santé ou la finance, Jakob prime.",
        ],
        en: [
          "Jakob's Limits: Risk of excessive standardization → Interchangeable, bland products. Ignores usage evolution → Yesterday's original (swipe, infinite scroll) is today's standard. Depends on user profile → Novelty tolerance differs between novice and expert.",
          "Disruptive Design Risks: The myth of permanent innovation → Innovation becomes a marketing goal, not user-focused. Contempt for the existing → Disrupting without understanding why the current approach works. Unsuited to critical contexts → In healthcare or finance, Jakob prevails.",
        ],
      },
    },
    {
      id: "mediator",
      title: {
        fr: "La Maîtrise : Le designer comme médiateur",
        en: "Mastery: The designer as mediator",
      },
      content: {
        fr: "Jakob stabilise l'interaction et la structure. Il protège la cognition humaine, la stabilité, la continuité. La Disruption fait évoluer les usages, la transformation, l'augmentation de valeur. Ils n'agissent pas au même niveau. Le designer UX travaille entre les deux : il est le médiateur entre la stabilité et la transformation.",
        en: "Jakob stabilizes interaction and structure. It protects human cognition, stability, continuity. Disruption evolves usage, transformation, value increase. They don't operate at the same level. The UX designer works between both: mediating between stability and transformation.",
      },
      highlight: {
        fr: "Le standard rassure. L'originalité doit récompenser, jamais pénaliser.",
        en: "Standards reassure. Originality must reward, never penalize.",
      },
    },
    {
      id: "mental-models",
      title: {
        fr: "Les modèles mentaux : le vrai terrain de jeu",
        en: "Mental models: the real playing field",
      },
      content: {
        fr: "Un modèle mental est la représentation interne qu'un utilisateur se fait du fonctionnement d'un système. C'est la somme de toutes ses expériences passées avec des interfaces similaires. Quand votre interface correspond au modèle mental de l'utilisateur, tout semble intuitif. Quand elle s'en écarte, l'utilisateur doit fournir un effort cognitif pour reconstruire sa compréhension.",
        en: "A mental model is the internal representation a user has of how a system works. It's the sum of all their past experiences with similar interfaces. When your interface matches the user's mental model, everything feels intuitive. When it deviates, the user must invest cognitive effort to rebuild their understanding.",
      },
      bullets: {
        fr: [
          "Le logo en haut à gauche ramène à l'accueil — convention universelle depuis les années 2000.",
          "Le panier e-commerce est en haut à droite — Amazon, Zalando, FNAC utilisent tous cette position.",
          "Glisser vers la gauche pour supprimer — modèle mental ancré par iOS depuis 2007.",
          "Le bouton de retour en haut à gauche — reflet du sens de lecture occidental.",
        ],
        en: [
          "Top-left logo returns to homepage — universal convention since the 2000s.",
          "Shopping cart is top-right — Amazon, Zalando, all use this position.",
          "Swipe left to delete — mental model anchored by iOS since 2007.",
          "Back button top-left — reflects Western reading direction.",
        ],
      },
    },
    {
      id: "when-break",
      title: {
        fr: "Quand casser les conventions ? Le test des 3 conditions",
        en: "When to break conventions? The 3-condition test",
      },
      content: {
        fr: "Avant de s'écarter d'un standard, un designer expérimenté vérifie que trois conditions sont réunies. Si une seule manque, le risque de frustration utilisateur est trop élevé.",
        en: "Before departing from a standard, an experienced designer verifies that three conditions are met. If even one is missing, the risk of user frustration is too high.",
      },
      bullets: {
        fr: [
          "Condition 1 — La valeur est évidente : L'utilisateur comprend immédiatement pourquoi le changement existe. Le bénéfice est visible en moins de 5 secondes.",
          "Condition 2 — L'apprentissage est minimal : Le nouveau pattern peut être compris en une seule interaction. Pas de tutoriel nécessaire, pas de texte explicatif.",
          "Condition 3 — Le contexte le permet : L'audience est tolérante à la nouveauté (app créative vs. app bancaire). Le coût de l'erreur est faible.",
        ],
        en: [
          "Condition 1 — Value is obvious: The user immediately understands why the change exists. The benefit is visible within 5 seconds.",
          "Condition 2 — Learning is minimal: The new pattern can be understood in a single interaction. No tutorial needed, no explanatory text.",
          "Condition 3 — Context allows it: The audience tolerates novelty (creative app vs. banking app). The cost of error is low.",
        ],
      },
    },
    {
      id: "compromise",
      title: {
        fr: "L'objectif n'est pas le respect ou la rupture, mais le bon compromis",
        en: "The goal is not compliance or break, but the right compromise",
      },
      content: {
        fr: "Le respect strict de Jakob donne une interface immédiatement compréhensible mais peu mémorable. La rupture totale crée une identité forte mais un apprentissage long et un risque de rejet. Le bon compromis — l'objectif UX — conserve les standards de navigation tout en apportant de l'originalité dans l'expression et la valeur, pour une adoption rapide et un attachement émotionnel.",
        en: "Strict Jakob compliance gives an immediately understandable but unmemorable interface. Total break creates strong identity but long learning and rejection risk. The right compromise — the UX goal — preserves navigation standards while bringing originality in expression and value, for fast adoption and emotional attachment.",
      },
    },
    {
      id: "golden-rules",
      title: {
        fr: "Les Règles d'Or du Navigateur",
        en: "The Navigator's Golden Rules",
      },
      content: {
        fr: "Trois principes fondamentaux guident le designer dans sa navigation entre standards et innovation.",
        en: "Three fundamental principles guide the designer in navigating between standards and innovation.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Un bon produit n'est pas celui qui surprend, mais celui qui transforme les habitudes sans les brutaliser",
        en: "A good product doesn't surprise, it transforms habits without brutalizing them",
      },
      content: {
        fr: "Le rôle du designer est d'accompagner l'évolution des usages avec respect. Respecter les standards ne signifie pas manquer d'ambition. C'est reconnaître que chaque utilisateur arrive avec un bagage cognitif précieux, forgé par des années d'expérience numérique. Le vrai talent est de faire évoluer les habitudes tout en préservant le confort.",
        en: "The designer's role is to accompany the evolution of usage with respect. Respecting standards doesn't mean lacking ambition. It's recognizing that every user arrives with precious cognitive baggage, forged by years of digital experience. True talent is evolving habits while preserving comfort.",
      },
      highlight: {
        fr: "Le standard rassure. L'originalité doit récompenser, jamais pénaliser. Le designer fait le pont entre la stabilité cognitive et la transformation.",
        en: "Standards reassure. Originality must reward, never penalize. The designer bridges cognitive stability and transformation.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Nielsen, J. (2000). Jakob's Law of Internet User Experience. Nielsen Norman Group.",
      url: "https://www.nngroup.com/videos/jakobs-law-internet-ux/",
    },
    {
      id: 2,
      label: "Nielsen, J. (1994). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
    },
    {
      id: 3,
      label: "Norman, D.A. (2013). The Design of Everyday Things: Revised and Expanded Edition. Basic Books.",
    },
    {
      id: 4,
      label: "Krug, S. (2014). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. New Riders.",
    },
    {
      id: 5,
      label: "Yablonski, J. (2020). Laws of UX: Using Psychology to Design Better Products & Services. O'Reilly Media.",
      url: "https://lawsofux.com/jakobs-law/",
    },
    {
      id: 6,
      label: "Christensen, C.M. (1997). The Innovator's Dilemma. Harvard Business Review Press.",
    },
    {
      id: 7,
      label: "Johnson, J. (2020). Designing with the Mind in Mind: Simple Guide to Understanding User Interface Design Guidelines. Morgan Kaufmann.",
    },
    {
      id: 8,
      label: "Norman, D.A. & Nielsen, J. — The Definition of User Experience (UX). Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/definition-user-experience/",
    },
  ],
};
