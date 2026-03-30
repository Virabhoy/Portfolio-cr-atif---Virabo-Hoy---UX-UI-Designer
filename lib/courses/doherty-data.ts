import { CourseData } from "./fitts-data";

export const dohertyData: CourseData = {
  slug: "seuil-de-doherty",
  chapter: 5,
  title: {
    fr: "Le Seuil de Doherty : L'Anatomie d'une Milliseconde",
    en: "The Doherty Threshold: The Anatomy of a Millisecond",
  },
  subtitle: {
    fr: "La neurobiologie de la vitesse perçue et l'illusion du temps réel",
    en: "The neurobiology of perceived speed and the illusion of real time",
  },
  readingTime: 14,
  description: {
    fr: "Comprendre le seuil des 400ms, les mécanismes cérébraux de la latence et les techniques pour concevoir des interfaces qui semblent instantanées.",
    en: "Understanding the 400ms threshold, brain mechanisms of latency, and techniques to design interfaces that feel instantaneous.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Quand l'attente brise le flux",
        en: "When waiting breaks the flow",
      },
      content: {
        fr: "Il y a un moment précis — mesuré à la milliseconde — où l'expérience bascule. En dessous de ce seuil, l'utilisateur est dans un état de flux : il pense, l'interface répond, il avance. Au-delà, quelque chose se brise. Le cerveau décroche. La frustration s'installe. Ce seuil a été découvert en 1982 par deux ingénieurs d'IBM.",
        en: "There is a precise moment — measured in milliseconds — when the experience shifts. Below this threshold, the user is in a flow state: they think, the interface responds, they move forward. Beyond it, something breaks. The brain disengages. Frustration sets in. This threshold was discovered in 1982 by two IBM engineers.",
      },
      highlight: {
        fr: "Chaque 100ms de latence supplémentaire coûte 1% de ventes à Amazon. Le temps n'est pas un détail technique — c'est une décision de design.",
        en: "Every additional 100ms of latency costs Amazon 1% in sales. Time is not a technical detail — it's a design decision.",
      },
    },
    {
      id: "ibm-1982",
      title: {
        fr: "IBM, 1982 : La Découverte du Seuil",
        en: "IBM, 1982: The Discovery of the Threshold",
      },
      content: {
        fr: "Walter Doherty et Ahrvind Thadani ont mené une étude exhaustive sur la productivité humaine face aux délais de réponse. Leur conclusion a redéfini la conception logicielle : en dessous de 400ms, les utilisateurs restent engagés et productifs. Au-delà, leur attention se fragmente.",
        en: "Walter Doherty and Ahrvind Thadani conducted an exhaustive study on human productivity under response delays. Their conclusion redefined software design: below 400ms, users remain engaged and productive. Beyond it, their attention fragments.",
      },
      bullets: {
        fr: [
          "< 400ms : l'utilisateur perçoit la réponse comme instantanée — état de flux maintenu",
          "400ms – 2s : conscience de la latence — l'attention commence à se fragmenter",
          "2s – 10s : frustration active — l'utilisateur envisage d'abandonner",
          "> 10s : décrochage cognitif — le cerveau cherche une autre tâche",
        ],
        en: [
          "< 400ms: user perceives response as instant — flow state maintained",
          "400ms – 2s: awareness of latency — attention begins to fragment",
          "2s – 10s: active frustration — user considers abandoning",
          "> 10s: cognitive disengagement — brain seeks another task",
        ],
      },
    },
    {
      id: "neuroscience",
      title: {
        fr: "Le Cerveau Face à la Latence",
        en: "The Brain Under Latency",
      },
      content: {
        fr: "La neurologie explique pourquoi ce seuil est universel. En dessous de 400ms, le cortex préfrontal traite l'interaction comme un mouvement naturel : l'interface devient une extension du corps. Au-delà, le cerveau émet un signal d'alerte électrique mesuurable : la composante P300.",
        en: "Neurology explains why this threshold is universal. Below 400ms, the prefrontal cortex processes the interaction as a natural movement — the interface becomes an extension of the body. Beyond it, the brain emits a measurable electrical alert signal: the P300 component.",
      },
      highlight: {
        fr: "La composante P300 — une onde EEG mesurée à 300-400ms — est le signal électrique de la surprise cognitive. Chaque latence visible déclenche cette alarme dans le cerveau de l'utilisateur.",
        en: "The P300 component — an EEG wave measured at 300-400ms — is the electrical signal of cognitive surprise. Every visible latency triggers this alarm in the user's brain.",
      },
    },
    {
      id: "rail",
      title: {
        fr: "Le Spectre RAIL : Quatre Seuils Critiques",
        en: "The RAIL Spectrum: Four Critical Thresholds",
      },
      content: {
        fr: "Google a formalisé le modèle RAIL (Response, Animation, Idle, Load) pour organiser les seuils temporels selon le contexte d'interaction. Chaque seuil correspond à un état cognitif différent, et donc à une stratégie de design différente.",
        en: "Google formalized the RAIL model (Response, Animation, Idle, Load) to organize temporal thresholds according to interaction context. Each threshold corresponds to a different cognitive state, and therefore a different design strategy.",
      },
      bullets: {
        fr: [
          "16ms (60fps) : seuil d'animation fluide — en dessous, le mouvement semble mécanique",
          "100ms : seuil de réponse immédiate — retour visuel requis dans cette fenêtre",
          "400ms : seuil de Doherty — limite du flux cognitif",
          "1 000ms : seuil de continuité — au-delà, l'utilisateur perd le fil",
          "10 000ms : seuil d'abandon — décrochage total",
        ],
        en: [
          "16ms (60fps): smooth animation threshold — below this, motion feels mechanical",
          "100ms: immediate response threshold — visual feedback required in this window",
          "400ms: Doherty threshold — cognitive flow limit",
          "1,000ms: continuity threshold — beyond this, the user loses the thread",
          "10,000ms: abandonment threshold — total disengagement",
        ],
      },
    },
    {
      id: "illusion",
      title: {
        fr: "Concevoir l'Illusion de la Vitesse",
        en: "Designing the Illusion of Speed",
      },
      content: {
        fr: "La vitesse perçue n'est pas la vitesse réelle. C'est là que le design intervient. Deux équipes peuvent avoir le même temps de chargement côté serveur, mais des expériences utilisateur radicalement différentes selon la façon dont elles gèrent le temps visuel. La formule est simple : Vitesse Perçue = Vitesse Réelle + Rétroaction Visuelle.",
        en: "Perceived speed is not actual speed. This is where design intervenes. Two teams can have the same server-side loading time, but radically different user experiences depending on how they manage visual time. The formula is simple: Perceived Speed = Actual Speed + Visual Feedback.",
      },
      highlight: {
        fr: "Un indicateur de progression fait paraître une attente de 8 secondes plus courte qu'une attente silencieuse de 3 secondes. La perception prime sur la réalité.",
        en: "A progress indicator makes an 8-second wait feel shorter than a silent 3-second wait. Perception overrides reality.",
      },
    },
    {
      id: "skeletons",
      title: {
        fr: "Spinners vs Squelettes : Le Débat Décidé par les Données",
        en: "Spinners vs Skeletons: The Data-Settled Debate",
      },
      content: {
        fr: "Le spinner (roue tournante) est l'indicateur de chargement le plus répandu — et l'un des moins efficaces. Il communique une seule information : « attend ». L'écran squelette, lui, projette la structure du contenu à venir, ancrant l'attention de l'utilisateur dans la continuité.",
        en: "The spinner (spinning wheel) is the most common loading indicator — and one of the least effective. It communicates only one thing: 'wait'. The skeleton screen projects the structure of incoming content, anchoring user attention in continuity.",
      },
      bullets: {
        fr: [
          "Les squelettes sont perçus 20 à 30% plus rapides que les spinners, à temps réel identique",
          "Les écrans squelettes réduisent le taux de rebond de 9 à 20% sur les pages à fort contenu",
          "Facebook, LinkedIn, YouTube et Slack ont tous migré vers les squelettes entre 2014 et 2018",
          "La règle : si le contenu a une structure prévisible, utiliser un squelette — sinon, un spinner avec progression",
        ],
        en: [
          "Skeletons are perceived 20-30% faster than spinners at identical actual load times",
          "Skeleton screens reduce bounce rate by 9-20% on content-heavy pages",
          "Facebook, LinkedIn, YouTube, and Slack all migrated to skeletons between 2014 and 2018",
          "The rule: if content has a predictable structure, use a skeleton — otherwise, a spinner with progress",
        ],
      },
    },
    {
      id: "anatomy-skeleton",
      title: {
        fr: "Anatomie d'un Écran Squelette",
        en: "Anatomy of a Skeleton Screen",
      },
      content: {
        fr: "Un écran squelette efficace suit trois phases précises qui correspondent aux états cognitifs de l'utilisateur. Chaque phase a un rôle : ancrer, engager, résoudre. La transition entre elles doit être imperceptible.",
        en: "An effective skeleton screen follows three precise phases corresponding to the user's cognitive states. Each phase has a role: anchor, engage, resolve. The transition between them must be imperceptible.",
      },
      bullets: {
        fr: [
          "Phase 1 — Structure (0–300ms) : afficher immédiatement la mise en page — blocs gris là où le contenu apparaîtra",
          "Phase 2 — Animation (300ms–1s) : ajouter un effet shimmer (brillance glissante) pour signaler que le chargement est actif",
          "Phase 3 — Résolution (> 1s) : dissoudre le squelette avec une transition douce vers le contenu réel",
        ],
        en: [
          "Phase 1 — Structure (0–300ms): immediately display the layout — gray blocks where content will appear",
          "Phase 2 — Animation (300ms–1s): add a shimmer effect to signal that loading is active",
          "Phase 3 — Resolution (> 1s): dissolve the skeleton with a smooth transition to real content",
        ],
      },
    },
    {
      id: "economic-impact",
      title: {
        fr: "L'Impact Économique de la Milliseconde",
        en: "The Economic Impact of the Millisecond",
      },
      content: {
        fr: "La vitesse n'est pas un critère esthétique. C'est une variable économique directement mesurable. Les données des plus grandes plateformes numériques convergent vers la même conclusion : chaque milliseconde de latence a un coût réel.",
        en: "Speed is not an aesthetic criterion. It is a directly measurable economic variable. Data from the largest digital platforms converges on the same conclusion: every millisecond of latency has a real cost.",
      },
      bullets: {
        fr: [
          "Google : +100ms de latence = +32% de taux de rebond sur les résultats de recherche",
          "Amazon : +100ms de latence = -1% de chiffre d'affaires (soit des milliards annuels)",
          "Netflix : migration vers les squelettes sur le streaming adaptatif = réduction mesurable du churn",
          "Walmart : chaque seconde de chargement économisée = +2% de conversions",
        ],
        en: [
          "Google: +100ms latency = +32% bounce rate on search results",
          "Amazon: +100ms latency = -1% revenue (billions annually)",
          "Netflix: migration to skeletons on adaptive streaming = measurable churn reduction",
          "Walmart: every second of loading saved = +2% conversions",
        ],
      },
    },
    {
      id: "checklist",
      title: {
        fr: "La Check-list du Designer Rapide",
        en: "The Fast Designer's Checklist",
      },
      content: {
        fr: "Concevoir pour la vitesse perçue ne nécessite pas d'optimisations serveur. Ce sont des décisions de design, applicables dès la maquette.",
        en: "Designing for perceived speed requires no server optimizations. These are design decisions, applicable from the first wireframe.",
      },
      bullets: {
        fr: [
          "Retour visuel immédiat (< 100ms) sur chaque action utilisateur — même si le résultat prend plus longtemps",
          "Squelettes plutôt que spinners pour tout contenu à structure prévisible",
          "Optimistic UI : afficher le résultat supposé avant confirmation serveur, annuler si erreur",
          "Progression visible avec étapes nommées pour les processus > 3 secondes",
          "Animations fluides à 60fps pour masquer les transitions de chargement",
        ],
        en: [
          "Immediate visual feedback (< 100ms) on every user action — even if the result takes longer",
          "Skeletons instead of spinners for all content with a predictable structure",
          "Optimistic UI: display the assumed result before server confirmation, revert on error",
          "Visible progress with named steps for processes > 3 seconds",
          "Smooth 60fps animations to mask loading transitions",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Le Temps est un Matériau de Design",
        en: "Time is a Design Material",
      },
      content: {
        fr: "Le Seuil de Doherty révèle quelque chose de fondamental sur la relation entre les humains et les machines : l'expérience ne se joue pas dans les pixels, mais dans les intervalles entre eux. La latence n'est pas une contrainte technique à subir — c'est une dimension à sculpter.",
        en: "The Doherty Threshold reveals something fundamental about the relationship between humans and machines: experience doesn't happen in the pixels, but in the intervals between them. Latency is not a technical constraint to endure — it is a dimension to sculpt.",
      },
      highlight: {
        fr: "L'objectif n'est pas de construire des serveurs plus rapides. C'est de concevoir pour les rythmes cognitifs naturels du cerveau.",
        en: "The goal is not to build faster servers. It is to design for the brain's natural cognitive rhythms.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Doherty, W. & Thadani, A. (1982). The Economic Value of Rapid Response Time. IBM Systems Journal.",
    },
    {
      id: 2,
      label: "Sutcliffe, A. (1995). Human-Computer Interface Design. Macmillan.",
    },
    {
      id: 3,
      label: "Google Developers. (2018). RAIL Model — A user-centric performance model. web.dev.",
    },
    {
      id: 4,
      label: "Perlin, B. (2017). The Perception of Skeleton Screens vs. Spinners. Luke Wroblewski's research series.",
    },
    {
      id: 5,
      label: "Amazon. (2007). Latency and Revenue — internal performance study. Cited in: The Performance Inequality Gap.",
    },
    {
      id: 6,
      label: "Nielsen, J. (1993). Usability Engineering. Academic Press. Chapter 5: Responsiveness.",
    },
  ],
};
