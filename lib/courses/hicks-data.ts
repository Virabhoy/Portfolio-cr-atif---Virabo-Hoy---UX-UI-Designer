import type { CourseSection, CourseSource, CourseData } from "./fitts-data";

export const hicksData: CourseData = {
  slug: "loi-de-hick",
  chapter: 2,
  title: {
    fr: "La Loi de Hick : De la Surcharge à la Conversion",
    en: "Hick's Law: From Overload to Conversion",
  },
  subtitle: {
    fr: "Maîtriser le paradoxe du choix en UX Design",
    en: "Mastering the paradox of choice in UX Design",
  },
  readingTime: 14,
  category: "ux",
  description: {
    fr: "Comprendre pourquoi trop de choix paralyse l'utilisateur et comment concevoir des interfaces qui guident la décision.",
    en: "Understanding why too many choices paralyze users and how to design interfaces that guide decisions.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Plus de choix, c'est mieux... n'est-ce pas ?",
        en: "More choices is better... right?",
      },
      content: {
        fr: "Un sentiment familier ? L'abondance d'options peut paralyser, pas aider. Face à un menu de restaurant interminable, une télécommande aux 50 boutons ou une application surchargée d'icônes, le cerveau sature. Chaque option ajoutée demande un effort mental supplémentaire.",
        en: "A familiar feeling? The abundance of options can paralyze, not help. Facing an endless restaurant menu, a remote with 50 buttons, or an app overloaded with icons, the brain saturates. Each added option requires additional mental effort.",
      },
      highlight: {
        fr: "L'abondance d'options peut paralyser, pas aider.",
        en: "The abundance of options can paralyze, not help.",
      },
    },
    {
      id: "cost",
      title: {
        fr: "Le Coût Caché de l'Abondance",
        en: "The Hidden Cost of Abundance",
      },
      content: {
        fr: "Chaque option ajoutée demande à l'utilisateur d'analyser, de comparer et d'anticiper. C'est un effort mental qui a un coût direct sur l'expérience utilisateur et les objectifs business.",
        en: "Each added option requires the user to analyze, compare, and anticipate. It's a mental effort with a direct cost on user experience and business objectives.",
      },
      highlight: {
        fr: "Trop de choix → Surcharge mentale → Décision plus lente",
        en: "Too many choices → Mental overload → Slower decision",
      },
    },
    {
      id: "origin",
      title: {
        fr: "La Boussole de la Décision : La Loi de Hick-Hyman",
        en: "The Decision Compass: The Hick-Hyman Law",
      },
      content: {
        fr: "Formulée dans les années 1950 par les psychologues William Edmund Hick et Ray Hyman, cette loi est un principe fondamental pour concevoir des interfaces qui guident l'utilisateur au lieu de le submerger.",
        en: "Formulated in the 1950s by psychologists William Edmund Hick and Ray Hyman, this law is a fundamental principle for designing interfaces that guide users instead of overwhelming them.",
      },
      bullets: {
        fr: [
          "Origine : Formulée dans les années 1950 par les psychologues William Edmund Hick et Ray Hyman.",
          "La Découverte : Ils ont démontré que le temps nécessaire pour prendre une décision augmente proportionnellement au nombre de choix disponibles.",
          "La Promesse en UX : Un principe fondamental pour concevoir des interfaces qui guident l'utilisateur au lieu de le submerger.",
        ],
        en: [
          "Origin: Formulated in the 1950s by psychologists William Edmund Hick and Ray Hyman.",
          "The Discovery: They demonstrated that decision time increases proportionally with the number of available choices.",
          "The UX Promise: A fundamental principle for designing interfaces that guide users instead of overwhelming them.",
        ],
      },
    },
    {
      id: "formula",
      title: {
        fr: "La Formule Expliquée : Une Croissance Non-Linéaire",
        en: "The Formula Explained: Non-Linear Growth",
      },
      content: {
        fr: "La formule de Hick prédit le temps de décision en fonction du nombre d'options. L'impact de chaque nouvelle option diminue : passer de 2 à 4 choix est beaucoup plus coûteux mentalement que de passer de 10 à 12.",
        en: "Hick's formula predicts decision time based on the number of options. The impact of each new option diminishes: going from 2 to 4 choices is much more mentally costly than going from 10 to 12.",
      },
      highlight: {
        fr: "L'impact de chaque nouvelle option diminue. Passer de 2 à 4 choix est beaucoup plus coûteux mentalement que de passer de 10 à 12.",
        en: "The impact of each new option diminishes. Going from 2 to 4 choices is much more mentally costly than going from 10 to 12.",
      },
    },
    {
      id: "toolkit",
      title: {
        fr: "Le Toolkit Anti-Surcharge : 5 Stratégies Essentielles",
        en: "The Anti-Overload Toolkit: 5 Essential Strategies",
      },
      content: {
        fr: "Pour appliquer la Loi de Hick concrètement, voici 5 stratégies complémentaires qui permettent de réduire la charge cognitive sans appauvrir l'interface.",
        en: "To apply Hick's Law concretely, here are 5 complementary strategies that reduce cognitive load without impoverishing the interface.",
      },
      bullets: {
        fr: [
          "Réduire avec intelligence : Ne pas supprimer, mais prioritiser ce qui compte.",
          "Révélation Progressive : Montrer uniquement ce qui est utile, maintenant.",
          "Catégories Claires : Le cerveau traite les groupes logiques beaucoup plus vite.",
          "La Barre de Recherche : L'outil anti-Hick ultime.",
          "Hiérarchie Visuelle : Guider l'œil pour guider la décision.",
        ],
        en: [
          "Reduce with intelligence: Don't remove, prioritize what matters.",
          "Progressive Disclosure: Show only what's useful, now.",
          "Clear Categories: The brain processes logical groups much faster.",
          "The Search Bar: The ultimate anti-Hick tool.",
          "Visual Hierarchy: Guide the eye to guide the decision.",
        ],
      },
    },
    {
      id: "prioritize",
      title: {
        fr: "Prioriser et Séquencer l'Information",
        en: "Prioritize and Sequence Information",
      },
      content: {
        fr: "La clé n'est pas de supprimer, mais de prioritiser ce qui compte. L'utilisateur n'a pas besoin de tout voir d'un coup. Diminuer la charge cognitive, pas appauvrir l'interface.",
        en: "The key is not to remove, but to prioritize what matters. The user doesn't need to see everything at once. Reduce cognitive load, don't impoverish the interface.",
      },
      bullets: {
        fr: [
          "Réduire avec intelligence : Menus à 5 items maximum, CTAs principaux mis en avant.",
          "Révélation Progressive : Montrer uniquement ce qui est utile, maintenant. Découper les formulaires en étapes.",
        ],
        en: [
          "Reduce with intelligence: Menus with 5 items maximum, main CTAs highlighted.",
          "Progressive Disclosure: Show only what's useful now. Break forms into steps.",
        ],
      },
    },
    {
      id: "organize",
      title: {
        fr: "Organiser le Chaos, Offrir un Raccourci",
        en: "Organize the Chaos, Offer a Shortcut",
      },
      content: {
        fr: "Le cerveau traite les groupes logiques beaucoup plus vite que des éléments en vrac. Organiser les options en catégories claires et offrir des raccourcis comme la barre de recherche réduit instantanément la charge cognitive.",
        en: "The brain processes logical groups much faster than scattered elements. Organizing options into clear categories and offering shortcuts like the search bar instantly reduces cognitive load.",
      },
      bullets: {
        fr: [
          "Catégories Claires : 20 filtres en vrac deviennent 4 catégories cliquables qui révèlent les options secondaires. La charge cognitive chute instantanément.",
          "La Barre de Recherche : C'est l'outil anti-Hick ultime. Une liste de 500 pays devient un champ de recherche et 3 résultats pertinents. La décision est immédiate.",
        ],
        en: [
          "Clear Categories: 20 scattered filters become 4 clickable categories that reveal secondary options. Cognitive load drops instantly.",
          "The Search Bar: The ultimate anti-Hick tool. A list of 500 countries becomes a search field and 3 relevant results. The decision is immediate.",
        ],
      },
    },
    {
      id: "hierarchy",
      title: {
        fr: "Guider l'Œil pour Guider la Décision",
        en: "Guide the Eye to Guide the Decision",
      },
      content: {
        fr: "La Loi de Hick est amplifiée ou atténuée par la hiérarchie visuelle. L'utilisateur est naturellement attiré par ce qui est lumineux, contrasté, ou qui ressemble à un CTA. Sans hiérarchie, l'œil ne sait pas où se poser. Avec hiérarchie, la décision est pré-orientée.",
        en: "Hick's Law is amplified or attenuated by visual hierarchy. The user is naturally attracted to what is bright, contrasted, or looks like a CTA. Without hierarchy, the eye doesn't know where to land. With hierarchy, the decision is pre-oriented.",
      },
    },
    {
      id: "case-study",
      title: {
        fr: "Cas Pratique : L'Impact sur un Menu E-commerce",
        en: "Case Study: The Impact on an E-commerce Menu",
      },
      content: {
        fr: "Un exemple concret de l'application de la Loi de Hick sur un méga-menu e-commerce montre des résultats spectaculaires.",
        en: "A concrete example of applying Hick's Law to an e-commerce mega-menu shows spectacular results.",
      },
      bullets: {
        fr: [
          "AVANT (anti-Hick) : Un méga-menu affichant 23 catégories de produits en même temps. L'utilisateur met en moyenne 6-7 secondes pour comprendre où aller. Confusion et paralysie.",
          "APRÈS (optimisation Hick) : Regroupement en 5 catégories principales. Les sous-catégories n'apparaissent qu'au survol ou au clic. Décision en 1-2 secondes. Navigation fluide, hausse des conversions.",
        ],
        en: [
          "BEFORE (anti-Hick): A mega-menu displaying 23 product categories at once. Users average 6-7 seconds to understand where to go. Confusion and paralysis.",
          "AFTER (Hick optimization): Grouped into 5 main categories. Sub-categories only appear on hover or click. Decision in 1-2 seconds. Smooth navigation, higher conversions.",
        ],
      },
    },
    {
      id: "beyond",
      title: {
        fr: "Au-delà de la Règle : Quand Ignorer (ou Adapter) la Loi de Hick",
        en: "Beyond the Rule: When to Ignore (or Adapt) Hick's Law",
      },
      content: {
        fr: "La Loi de Hick est précieuse, mais un designer expérimenté sait qu'elle n'est pas une vérité absolue. La simplifier à outrance est une erreur. Analysons 5 contextes où 'moins de choix' n'est pas la meilleure solution.",
        en: "Hick's Law is valuable, but an experienced designer knows it's not an absolute truth. Over-simplifying is a mistake. Let's analyze 5 contexts where 'fewer choices' isn't the best solution.",
      },
    },
    {
      id: "context",
      title: {
        fr: "Le Contexte est Roi : L'Intention et l'Environnement Priment",
        en: "Context is King: Intention and Environment Take Priority",
      },
      content: {
        fr: "L'impact de la Loi de Hick varie selon le contexte d'utilisation. Il faut adapter l'application de la loi au contexte réel de l'utilisateur.",
        en: "The impact of Hick's Law varies depending on the context of use. You must adapt the law's application to the user's real context.",
      },
      bullets: {
        fr: [
          "La Motivation de l'Utilisateur : Une action fortement désirée (ex: finaliser un achat) ne souffre presque pas de la complexité. L'utilisateur est concentré sur son but.",
          "Les Utilisateurs Avancés : Supprimer trop d'options frustre l'expert. Pensez aux modes 'pro' des appareils photo ou aux logiciels créatifs. Simplifier partout = mauvais design.",
          "Le Support (Device) : L'impact de la loi varie. Très fort sur mobile, plus léger sur desktop, et quasiment nul en UI vocale.",
        ],
        en: [
          "User Motivation: A highly desired action (e.g., completing a purchase) barely suffers from complexity. The user is focused on their goal.",
          "Advanced Users: Removing too many options frustrates experts. Think about 'pro' modes in cameras or creative software. Simplifying everywhere = bad design.",
          "The Device: The law's impact varies. Very strong on mobile, lighter on desktop, and almost null in voice UI.",
        ],
      },
    },
    {
      id: "clarity",
      title: {
        fr: "La Clarté Bat le Nombre",
        en: "Clarity Beats Quantity",
      },
      content: {
        fr: "La loi de Hick ignore la sémantique. La qualité des libellés et la familiarité de l'interface comptent autant, sinon plus, que le nombre d'options.",
        en: "Hick's Law ignores semantics. The quality of labels and interface familiarity matter as much, if not more, than the number of options.",
      },
      bullets: {
        fr: [
          "La Qualité des Libellés : Si les options sont mal nommées ou ambiguës, 3 choix peuvent être plus lents à traiter que 10 choix parfaitement clairs. Hick n'est pas une excuse pour éviter un vrai travail sur le wording.",
          "La Familiarité de l'Interface : La loi est surtout valable pour les premières utilisations. Sur une plateforme qu'un utilisateur connaît par cœur, il navigue par automatisme. 12 catégories peuvent être aussi rapides que 4.",
        ],
        en: [
          "Label Quality: If options are poorly named or ambiguous, 3 choices can be slower to process than 10 perfectly clear ones. Hick is no excuse to avoid real work on wording.",
          "Interface Familiarity: The law is mainly valid for first-time use. On a platform a user knows by heart, they navigate automatically. 12 categories can be as fast as 4.",
        ],
      },
    },
    {
      id: "philosophy",
      title: {
        fr: "La Vraie Force de la Loi de Hick : Une Philosophie de Guidage",
        en: "The True Power of Hick's Law: A Guiding Philosophy",
      },
      content: {
        fr: "La loi n'est pas un appel à la réduction, mais à la clarification. La Loi de Hick n'est pas une règle stricte. C'est une boussole pour éviter la surcharge cognitive.",
        en: "The law is not a call for reduction, but for clarification. Hick's Law is not a strict rule. It's a compass to avoid cognitive overload.",
      },
      bullets: {
        fr: [
          "Structurer l'information",
          "Clarifier les options",
          "Guider l'utilisateur",
          "Hiérarchiser les actions",
          "Révéler progressivement",
        ],
        en: [
          "Structure information",
          "Clarify options",
          "Guide the user",
          "Prioritize actions",
          "Reveal progressively",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Votre prochaine interface sera-t-elle un labyrinthe ou une boussole ?",
        en: "Will your next interface be a labyrinth or a compass?",
      },
      content: {
        fr: "Comme toute boussole, la Loi de Hick fonctionne mieux lorsqu'on connaît le terrain : le public, l'usage, le contexte, et la motivation. Ne réduisez pas les choix. Clarifiez-les.",
        en: "Like any compass, Hick's Law works better when you know the terrain: the audience, the usage, the context, and the motivation. Don't reduce choices. Clarify them.",
      },
      highlight: {
        fr: "Ne réduisez pas les choix. Clarifiez-les. La Loi de Hick est une boussole, pas un couteau.",
        en: "Don't reduce choices. Clarify them. Hick's Law is a compass, not a knife.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Hick, W.E. (1952). On the rate of gain of information. Quarterly Journal of Experimental Psychology, 4(1), 11-26.",
      url: "https://doi.org/10.1080/17470215208416600",
    },
    {
      id: 2,
      label: "Hyman, R. (1953). Stimulus information as a determinant of reaction time. Journal of Experimental Psychology, 45(3), 188-196.",
      url: "https://doi.org/10.1037/h0056940",
    },
    {
      id: 3,
      label: "Schwartz, B. (2004). The Paradox of Choice: Why More Is Less. HarperCollins.",
    },
    {
      id: 4,
      label: "Iyengar, S.S. & Lepper, M.R. (2000). When choice is demotivating. Journal of Personality and Social Psychology, 79(6), 995-1006.",
      url: "https://doi.org/10.1037/0022-3514.79.6.995",
    },
    {
      id: 5,
      label: "Nielsen Norman Group — Simplicity Wins Over Abundance of Choice.",
      url: "https://www.nngroup.com/articles/simplicity-vs-choice/",
    },
    {
      id: 6,
      label: "Laws of UX — Hick's Law.",
      url: "https://lawsofux.com/hicks-law/",
    },
  ],
};
