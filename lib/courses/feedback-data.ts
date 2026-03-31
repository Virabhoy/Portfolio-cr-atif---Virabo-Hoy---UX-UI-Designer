import type { CourseData } from "./fitts-data";

export const feedbackData: CourseData = {
  slug: "feedback-instantane",
  chapter: 11,
  title: {
    fr: "Le Feedback Instantané",
    en: "Instant Feedback",
  },
  subtitle: {
    fr: "L'Interface Qui Répond en Temps Réel",
    en: "The Interface That Responds in Real Time",
  },
  readingTime: 16,
  category: "ux",
  description: {
    fr: "Chaque action utilisateur DOIT avoir une réponse visible en moins de 100ms. Le feedback instantané n'est pas un détail de polish — c'est le fondement de toute bonne expérience.",
    en: "Every user action MUST have a visible response within 100ms. Instant feedback isn't a polish detail — it's the foundation of every good experience.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Le silence est la pire réponse qu'une interface puisse donner",
        en: "Silence is the worst response an interface can give",
      },
      content: {
        fr: "Vous appuyez sur un bouton. Rien ne se passe. Vous appuyez à nouveau. Toujours rien. Vous appuyez une troisième fois, plus fort, comme si la pression allait changer quelque chose. Puis trois commandes s'exécutent simultanément. Ce scénario se produit des millions de fois par jour dans des interfaces mal conçues. La cause est toujours la même : l'absence de feedback instantané. Quand une interface ne répond pas immédiatement à une action, elle brise le contrat fondamental entre l'humain et la machine. L'utilisateur perd confiance, perd patience, et perd le fil de sa tâche.",
        en: "You tap a button. Nothing happens. You tap again. Still nothing. You tap a third time, harder, as if pressure would change something. Then three commands execute simultaneously. This scenario happens millions of times daily in poorly designed interfaces. The cause is always the same: the absence of instant feedback. When an interface doesn't immediately respond to an action, it breaks the fundamental contract between human and machine. The user loses confidence, loses patience, and loses track of their task.",
      },
      highlight: {
        fr: "Position forte : une interface sans feedback instantané n'est pas une interface — c'est un mur. Chaque action sans réponse visible est une micro-trahison de la confiance utilisateur.",
        en: "Strong position: an interface without instant feedback isn't an interface — it's a wall. Every action without a visible response is a micro-betrayal of user trust.",
      },
    },
    {
      id: "100ms-rule",
      title: {
        fr: "La règle des 100ms : le seuil Doherty et la perception humaine",
        en: "The 100ms rule: the Doherty threshold and human perception",
      },
      content: {
        fr: "En 1982, Walter Doherty et Ahrvind Thadani publiaient chez IBM une recherche qui allait définir un standard encore valide 44 ans plus tard : le seuil de 400ms pour le temps de réponse système. Mais les recherches ultérieures en psychologie cognitive ont affiné ce seuil. Jakob Nielsen a établi trois paliers critiques : 100ms est la limite pour que l'utilisateur perçoive la réponse comme instantanée, 1 seconde est la limite pour maintenir le flux de pensée, et 10 secondes est la limite absolue d'attention. En 2026, le seuil qui compte est le premier : 100ms. Au-delà, le cerveau détecte un délai et commence à douter.",
        en: "In 1982, Walter Doherty and Ahrvind Thadani published research at IBM that would define a standard still valid 44 years later: the 400ms threshold for system response time. But subsequent cognitive psychology research refined this threshold. Jakob Nielsen established three critical tiers: 100ms is the limit for the user to perceive the response as instantaneous, 1 second is the limit to maintain the flow of thought, and 10 seconds is the absolute attention limit. In 2026, the threshold that matters is the first: 100ms. Beyond that, the brain detects a delay and begins to doubt.",
      },
      bullets: {
        fr: [
          "0-100ms : perception d'instantanéité — l'interface semble répondre directement à l'intention",
          "100-300ms : délai perceptible mais acceptable — l'utilisateur sent que quelque chose se passe",
          "300ms-1s : délai notable — un indicateur de chargement devient nécessaire",
          "1-10s : attente significative — un indicateur de progression est obligatoire",
          "10s+ : abandon — 50% des utilisateurs quittent si aucun feedback n'est visible",
        ],
        en: [
          "0-100ms: perception of instantaneity — the interface seems to respond directly to intention",
          "100-300ms: perceptible but acceptable delay — the user senses something is happening",
          "300ms-1s: notable delay — a loading indicator becomes necessary",
          "1-10s: significant wait — a progress indicator is mandatory",
          "10s+: abandonment — 50% of users leave if no feedback is visible",
        ],
      },
    },
    {
      id: "feedback-spectrum",
      title: {
        fr: "Le spectre du feedback : visuel, auditif, haptique",
        en: "The feedback spectrum: visual, auditory, haptic",
      },
      content: {
        fr: "Le feedback n'est pas uniquement visuel. Les interfaces les plus réussies utilisent un spectre complet de canaux sensoriels pour confirmer les actions. Le feedback visuel (changement de couleur, animation, état actif) est le canal principal et le seul qui soit universellement accessible. Le feedback auditif (son de confirmation, clic) renforce la perception mais dépend du contexte sonore. Le feedback haptique (vibration, retour tactile) est le canal le plus sous-exploité et pourtant le plus puissant sur mobile : il confirme une action sans exiger que l'utilisateur regarde l'écran. Le trio visuel + haptique + auditif crée une expérience de feedback que le cerveau interprète comme une interaction physique réelle.",
        en: "Feedback isn't only visual. The most successful interfaces use a complete spectrum of sensory channels to confirm actions. Visual feedback (color change, animation, active state) is the primary channel and the only one that's universally accessible. Auditory feedback (confirmation sound, click) reinforces perception but depends on the sound environment. Haptic feedback (vibration, tactile return) is the most underused yet most powerful channel on mobile: it confirms an action without requiring the user to look at the screen. The visual + haptic + auditory trio creates a feedback experience that the brain interprets as a real physical interaction.",
      },
      highlight: {
        fr: "Le feedback visuel est nécessaire mais pas suffisant. Le feedback haptique est le canal qui transforme une interface plate en une expérience qui semble réelle sous les doigts.",
        en: "Visual feedback is necessary but not sufficient. Haptic feedback is the channel that transforms a flat interface into an experience that feels real under your fingers.",
      },
    },
    {
      id: "micro-interactions",
      title: {
        fr: "Les micro-interactions : le feedback invisible qui change tout",
        en: "Micro-interactions: the invisible feedback that changes everything",
      },
      content: {
        fr: "Les micro-interactions sont des animations de feedback subtiles qui confirment une action sans interrompre le flux. Un bouton qui s'enfonce légèrement au tap. Un toggle qui glisse avec une courbe d'accélération naturelle. Un like qui pulse brièvement. Une carte qui se soulève quand on la sélectionne. Ces animations durent entre 150ms et 400ms et passent largement inaperçues consciemment — mais leur absence est immédiatement ressentie. Une interface sans micro-interactions semble morte, robotique, déconnectée. Les études montrent que les interfaces avec micro-interactions bien calibrées augmentent la perception de qualité de 60% et la confiance utilisateur de 35%.",
        en: "Micro-interactions are subtle feedback animations that confirm an action without interrupting the flow. A button that slightly depresses on tap. A toggle that slides with a natural acceleration curve. A like that briefly pulses. A card that lifts when selected. These animations last between 150ms and 400ms and go largely unnoticed consciously — but their absence is immediately felt. An interface without micro-interactions feels dead, robotic, disconnected. Studies show that interfaces with well-calibrated micro-interactions increase perceived quality by 60% and user trust by 35%.",
      },
      bullets: {
        fr: [
          "Durée idéale : 150-300ms pour les confirmations, 300-500ms pour les transitions",
          "Courbe d'animation : ease-out pour les réponses (rapide au départ, doux à l'arrivée)",
          "L'animation doit suivre l'action, pas la précéder — le feedback est réactif, jamais proactif",
          "Moins c'est plus : une seule propriété animée (scale, opacity, position) par micro-interaction",
          "Performance : les micro-interactions doivent tourner à 60fps — une animation qui lag est pire que pas d'animation",
        ],
        en: [
          "Ideal duration: 150-300ms for confirmations, 300-500ms for transitions",
          "Animation curve: ease-out for responses (fast at start, gentle at end)",
          "Animation must follow the action, not precede it — feedback is reactive, never proactive",
          "Less is more: a single animated property (scale, opacity, position) per micro-interaction",
          "Performance: micro-interactions must run at 60fps — a lagging animation is worse than no animation",
        ],
      },
    },
    {
      id: "loading-states",
      title: {
        fr: "Les loading states : ce qui se passe quand 100ms ne suffit pas",
        en: "Loading states: what happens when 100ms isn't enough",
      },
      content: {
        fr: "Toutes les opérations ne peuvent pas se compléter en 100ms. Les requêtes réseau, les calculs complexes, les téléchargements — ces opérations prennent du temps. L'erreur fatale est de ne rien montrer pendant ce temps. Les spinners classiques sont mieux que rien, mais ils sont pauvres en information : ils disent \"quelque chose se passe\" sans dire quoi ni combien de temps ça prendra. En 2026, le standard minimum est un indicateur de progression déterminé (barre de progression, pourcentage) pour les opérations dont on connaît la durée, et un indicateur indéterminé avec une estimation textuelle pour les autres. L'utilisateur doit toujours savoir OÙ il en est.",
        en: "Not all operations can complete in 100ms. Network requests, complex calculations, downloads — these operations take time. The fatal error is showing nothing during this time. Classic spinners are better than nothing, but they're information-poor: they say \"something is happening\" without saying what or how long it will take. In 2026, the minimum standard is a determinate progress indicator (progress bar, percentage) for operations with known duration, and an indeterminate indicator with a textual estimate for others. The user must always know WHERE they stand.",
      },
      highlight: {
        fr: "Un spinner sans contexte est presque aussi mauvais que pas de feedback du tout. Dites à l'utilisateur CE QUI se charge et COMBIEN de temps ça prendra. \"Chargement...\" est paresseux. \"Synchronisation de vos 47 photos (2/47)\" est respectueux.",
        en: "A spinner without context is almost as bad as no feedback at all. Tell the user WHAT is loading and HOW LONG it will take. \"Loading...\" is lazy. \"Syncing your 47 photos (2/47)\" is respectful.",
      },
    },
    {
      id: "skeleton-screens",
      title: {
        fr: "Les skeleton screens : le feedback qui anticipe le contenu",
        en: "Skeleton screens: the feedback that anticipates content",
      },
      content: {
        fr: "Les skeleton screens (écrans squelettes) sont des représentations visuelles de la structure d'une page avant que le contenu réel ne soit chargé. Au lieu d'un écran vide ou d'un spinner, l'utilisateur voit des formes grises pulsantes qui représentent les blocs de contenu à venir. Facebook a popularisé ce pattern, et pour cause : les skeleton screens réduisent le temps de chargement perçu de 10 à 20% par rapport à un spinner classique. Le mécanisme psychologique est simple — le cerveau interprète le skeleton comme un début de contenu, pas comme une attente. Il passe en mode \"lecture\" plutôt qu'en mode \"attente\", ce qui réduit l'impatience perçue.",
        en: "Skeleton screens are visual representations of a page's structure before the actual content loads. Instead of an empty screen or a spinner, the user sees pulsing gray shapes representing the content blocks to come. Facebook popularized this pattern, and for good reason: skeleton screens reduce perceived loading time by 10 to 20% compared to classic spinners. The psychological mechanism is simple — the brain interprets the skeleton as the beginning of content, not as waiting. It shifts to \"reading\" mode rather than \"waiting\" mode, which reduces perceived impatience.",
      },
      bullets: {
        fr: [
          "Skeleton > Spinner : réduction de 10-20% du temps de chargement perçu",
          "La forme du skeleton doit correspondre fidèlement au contenu réel — pas de surprise à l'affichage",
          "Animation pulse subtile (opacity 0.3 → 0.7) à 1.5s de cycle — jamais de flash brutal",
          "Charger progressivement : le texte d'abord, les images ensuite — ne pas tout afficher d'un coup",
          "Éviter les skeletons pour les chargements < 300ms — l'apparition/disparition flash est pire que l'attente",
        ],
        en: [
          "Skeleton > Spinner: 10-20% reduction in perceived loading time",
          "Skeleton shape must faithfully match actual content — no surprises on display",
          "Subtle pulse animation (opacity 0.3 → 0.7) at 1.5s cycle — never a harsh flash",
          "Load progressively: text first, images after — don't display everything at once",
          "Avoid skeletons for loads < 300ms — the flash of appearing/disappearing is worse than waiting",
        ],
      },
    },
    {
      id: "optimistic-ui",
      title: {
        fr: "L'Optimistic UI : mentir pour mieux servir",
        en: "Optimistic UI: lying to serve better",
      },
      content: {
        fr: "L'optimistic UI est la technique de feedback la plus audacieuse et la plus controversée : elle affiche le résultat d'une action AVANT que le serveur ne la confirme. Quand vous likez un post sur Instagram, le coeur devient rouge instantanément. La requête au serveur se fait en arrière-plan. Si elle échoue (ce qui arrive dans moins de 0,1% des cas), le like est silencieusement annulé. Pour l'utilisateur, l'interaction est instantanée — zéro attente, zéro friction. Cette technique est appropriée uniquement pour les actions à haute probabilité de succès (> 99%) et réversibles. L'utiliser pour un paiement ou une suppression serait irresponsable.",
        en: "Optimistic UI is the most daring and controversial feedback technique: it displays the result of an action BEFORE the server confirms it. When you like a post on Instagram, the heart turns red instantly. The server request happens in the background. If it fails (which happens in less than 0.1% of cases), the like is silently reversed. For the user, the interaction is instantaneous — zero wait, zero friction. This technique is appropriate only for actions with high probability of success (> 99%) and that are reversible. Using it for a payment or deletion would be irresponsible.",
      },
      highlight: {
        fr: "L'optimistic UI est la preuve que le feedback parfait n'est pas la vérité — c'est la confiance. Si vous êtes sûr à 99,9% que l'action va réussir, montrez le résultat immédiatement. L'honnêteté différée est un meilleur UX que l'attente honnête.",
        en: "Optimistic UI is proof that perfect feedback isn't truth — it's confidence. If you're 99.9% sure the action will succeed, show the result immediately. Deferred honesty is better UX than honest waiting.",
      },
    },
    {
      id: "haptic-design",
      title: {
        fr: "Le design haptique : le feedback que vous ressentez sans regarder",
        en: "Haptic design: the feedback you feel without looking",
      },
      content: {
        fr: "Le Taptic Engine d'Apple et les moteurs haptiques avancés d'Android ont ouvert un canal de feedback longtemps négligé. Le retour haptique permet de confirmer une action sans exiger l'attention visuelle de l'utilisateur. Un léger \"tick\" quand vous activez un toggle. Une vibration progressive quand vous scrollez au bout d'une liste. Un impact net quand vous supprimez un élément. Ces sensations créent un lien physique entre l'action et le résultat qui n'a pas d'équivalent visuel. En 2026, les apps premium utilisent systématiquement 3 niveaux de feedback haptique : léger (confirmation), moyen (sélection/transition), et fort (action irréversible/erreur).",
        en: "Apple's Taptic Engine and advanced Android haptic motors have opened a feedback channel long neglected. Haptic feedback confirms an action without requiring the user's visual attention. A light \"tick\" when you activate a toggle. A progressive vibration when you scroll to the end of a list. A sharp impact when you delete an item. These sensations create a physical link between action and result that has no visual equivalent. In 2026, premium apps systematically use 3 levels of haptic feedback: light (confirmation), medium (selection/transition), and strong (irreversible action/error).",
      },
      bullets: {
        fr: [
          "Haptique léger (UIImpactFeedbackGenerator.light) : confirmations courantes — toggle, tap, sélection",
          "Haptique moyen (UIImpactFeedbackGenerator.medium) : transitions, glissements, changements d'état",
          "Haptique fort (UINotificationFeedbackGenerator.error) : erreurs, alertes, actions destructives",
          "Ne JAMAIS utiliser l'haptique pour le scroll courant — la fatigue haptique est réelle",
          "L'haptique doit être synchronisé à la frame avec l'animation visuelle — un décalage de 50ms suffit à créer un malaise",
        ],
        en: [
          "Light haptic (UIImpactFeedbackGenerator.light): common confirmations — toggle, tap, selection",
          "Medium haptic (UIImpactFeedbackGenerator.medium): transitions, slides, state changes",
          "Strong haptic (UINotificationFeedbackGenerator.error): errors, alerts, destructive actions",
          "NEVER use haptics for regular scrolling — haptic fatigue is real",
          "Haptics must be frame-synchronized with visual animation — a 50ms offset is enough to create unease",
        ],
      },
    },
    {
      id: "inline-validation",
      title: {
        fr: "La validation inline : corriger en temps réel, pas après coup",
        en: "Inline validation: correcting in real time, not after the fact",
      },
      content: {
        fr: "La validation de formulaire après soumission est une relique des années 2000. En 2026, chaque champ doit valider son contenu en temps réel, pendant que l'utilisateur saisit. La validation inline réduit les erreurs de formulaire de 22% (étude Luke Wroblewski, 2009, confirmée par Baymard Institute en 2023). Mais attention au timing : valider PENDANT la saisie (on-keypress) est anxiogène — l'utilisateur voit du rouge avant même d'avoir fini de taper. La validation doit se déclencher on-blur (quand le champ perd le focus) pour les erreurs, et on-keypress uniquement pour les confirmations positives (checkmark vert quand le format est valide).",
        en: "Form validation after submission is a relic of the 2000s. In 2026, every field must validate its content in real time, while the user types. Inline validation reduces form errors by 22% (Luke Wroblewski study, 2009, confirmed by Baymard Institute in 2023). But beware the timing: validating DURING input (on-keypress) is anxiety-inducing — the user sees red before they've even finished typing. Validation must trigger on-blur (when the field loses focus) for errors, and on-keypress only for positive confirmations (green checkmark when format is valid).",
      },
      bullets: {
        fr: [
          "Validation positive on-keypress : checkmark vert dès que le format est valide (email, téléphone)",
          "Validation négative on-blur : message d'erreur uniquement quand l'utilisateur quitte le champ",
          "Message d'erreur contextualisé : \"Le format attendu est +33 6 XX XX XX XX\" — pas juste \"Format invalide\"",
          "Position du message : directement sous le champ, pas dans un toast ou une bannière en haut de page",
          "Couleur : rouge pour les erreurs (#DC2626), vert pour les succès (#16A34A) — pas d'ambiguïté",
        ],
        en: [
          "Positive validation on-keypress: green checkmark as soon as format is valid (email, phone)",
          "Negative validation on-blur: error message only when user leaves the field",
          "Contextualized error message: \"Expected format is +33 6 XX XX XX XX\" — not just \"Invalid format\"",
          "Message position: directly under the field, not in a toast or banner at the top of the page",
          "Color: red for errors (#DC2626), green for success (#16A34A) — no ambiguity",
        ],
      },
    },
    {
      id: "error-states",
      title: {
        fr: "Les états d'erreur : transformer l'échec en guidance",
        en: "Error states: turning failure into guidance",
      },
      content: {
        fr: "Un message d'erreur n'est pas une punition — c'est une opportunité de guidage. Les pires erreurs UX sont les messages système non traduits (\"Error 500: Internal Server Error\"), les messages vagues (\"Une erreur est survenue\"), et les messages culpabilisants (\"Vous avez entré un email invalide\"). En 2026, chaque état d'erreur doit suivre trois principes : dire CE QUI s'est passé en langage humain, dire POURQUOI ça s'est passé si possible, et proposer COMMENT résoudre le problème. Le feedback d'erreur doit être immédiat (pas de redirection vers une page d'erreur), contextuel (à côté de l'élément en cause), et actionnable (un bouton pour réessayer ou corriger).",
        en: "An error message isn't a punishment — it's a guidance opportunity. The worst UX errors are untranslated system messages (\"Error 500: Internal Server Error\"), vague messages (\"An error occurred\"), and guilt-tripping messages (\"You entered an invalid email\"). In 2026, every error state must follow three principles: say WHAT happened in human language, say WHY it happened if possible, and suggest HOW to fix the problem. Error feedback must be immediate (no redirect to an error page), contextual (next to the element in question), and actionable (a button to retry or correct).",
      },
      highlight: {
        fr: "Le test ultime d'un message d'erreur : votre grand-mère peut-elle comprendre ce qui s'est passé ET savoir quoi faire ensuite ? Si non, réécrivez-le.",
        en: "The ultimate test of an error message: can your grandmother understand what happened AND know what to do next? If not, rewrite it.",
      },
    },
    {
      id: "success-celebration",
      title: {
        fr: "Célébrer le succès : le feedback positif qui fidélise",
        en: "Celebrating success: the positive feedback that builds loyalty",
      },
      content: {
        fr: "Le feedback ne sert pas uniquement à signaler les erreurs et les chargements — il doit aussi célébrer les succès. Et pas avec un simple checkmark vert. Les moments de célébration sont des opportunités de connexion émotionnelle avec l'utilisateur. Duolingo l'a compris mieux que quiconque : chaque leçon terminée déclenche une animation de confettis, un son de victoire, et un message d'encouragement. Stripe fait apparaître des confettis quand un développeur réussit sa première intégration API. Mailchimp affiche une main de singe qui high-five quand une campagne est envoyée. Ces moments créent un ancrage émotionnel positif qui pousse au retour.",
        en: "Feedback doesn't only serve to signal errors and loading — it must also celebrate successes. And not with a simple green checkmark. Celebration moments are opportunities for emotional connection with the user. Duolingo understood this better than anyone: every completed lesson triggers a confetti animation, a victory sound, and an encouraging message. Stripe displays confetti when a developer succeeds their first API integration. Mailchimp shows a monkey hand high-fiving when a campaign is sent. These moments create positive emotional anchoring that drives return visits.",
      },
      bullets: {
        fr: [
          "Micro-célébration (complétion de tâche courante) : checkmark animé + haptique léger — 300ms max",
          "Célébration moyenne (milestone, étape importante) : animation spéciale + son + message personnalisé",
          "Grande célébration (onboarding terminé, objectif atteint) : confettis, animation plein écran, gamification",
          "La célébration doit être proportionnelle à l'effort — surjouer un simple toggle est irritant",
          "Permettre de désactiver les animations de célébration (accessibilité, préférences prefers-reduced-motion)",
        ],
        en: [
          "Micro-celebration (common task completion): animated checkmark + light haptic — 300ms max",
          "Medium celebration (milestone, important step): special animation + sound + personalized message",
          "Big celebration (onboarding complete, goal reached): confetti, full-screen animation, gamification",
          "Celebration must be proportional to effort — overplaying a simple toggle is irritating",
          "Allow disabling celebration animations (accessibility, prefers-reduced-motion preferences)",
        ],
      },
    },
    {
      id: "over-feedback",
      title: {
        fr: "Le sur-feedback : quand trop de feedback tue le feedback",
        en: "Over-feedback: when too much feedback kills feedback",
      },
      content: {
        fr: "Le piège inverse du manque de feedback est le sur-feedback. Quand chaque micro-action déclenche une animation, un son, une vibration et une notification, l'utilisateur subit une surcharge sensorielle qui est tout aussi néfaste que le silence. Le sur-feedback crée de la fatigue cognitive, de l'irritation, et paradoxalement, de l'insensibilisation — l'utilisateur finit par ignorer TOUS les feedbacks, y compris les importants. Le principe est simple : le feedback doit être inversement proportionnel à la fréquence de l'action. Une action qu'on fait 100 fois par jour (scroll, navigation, fermeture) a besoin d'un feedback minimal. Une action qu'on fait une fois par mois (suppression de compte, paiement) mérite un feedback riche.",
        en: "The opposite trap of lacking feedback is over-feedback. When every micro-action triggers an animation, a sound, a vibration, and a notification, the user suffers sensory overload that is just as harmful as silence. Over-feedback creates cognitive fatigue, irritation, and paradoxically, desensitization — the user ends up ignoring ALL feedback, including the important ones. The principle is simple: feedback should be inversely proportional to the frequency of the action. An action performed 100 times a day (scroll, navigation, closing) needs minimal feedback. An action performed once a month (account deletion, payment) deserves rich feedback.",
      },
      highlight: {
        fr: "Règle du feedback proportionnel : l'intensité du feedback doit être proportionnelle à l'importance et à la rareté de l'action, jamais à votre envie de montrer vos talents d'animation.",
        en: "Proportional feedback rule: feedback intensity must be proportional to the importance and rarity of the action, never to your desire to show off your animation skills.",
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Le feedback instantané n'est pas une feature — c'est du respect",
        en: "Instant feedback isn't a feature — it's respect",
      },
      content: {
        fr: "Derrière chaque décision de feedback, il y a une question fondamentale : respectez-vous le temps et l'attention de votre utilisateur ? Un bouton qui ne réagit pas dit : \"Je ne sais pas si j'ai entendu votre demande.\" Un spinner sans contexte dit : \"Attendez, mais je ne vous dirai pas combien de temps.\" Un message d'erreur technique dit : \"Débrouillez-vous.\" À l'inverse, un feedback instantané bien conçu dit : \"J'ai compris, voici ce qui se passe, et voici ce qui va suivre.\" C'est cette conversation silencieuse entre l'interface et l'utilisateur qui sépare les produits médiocres des produits exceptionnels. Le feedback instantané n'est pas du polish qu'on ajoute à la fin — c'est le premier langage de votre interface.",
        en: "Behind every feedback decision, there's a fundamental question: do you respect your user's time and attention? A button that doesn't react says: \"I don't know if I heard your request.\" A spinner without context says: \"Wait, but I won't tell you how long.\" A technical error message says: \"Figure it out yourself.\" Conversely, well-designed instant feedback says: \"I understood, here's what's happening, and here's what comes next.\" It's this silent conversation between the interface and the user that separates mediocre products from exceptional ones. Instant feedback isn't polish you add at the end — it's your interface's first language.",
      },
      highlight: {
        fr: "Chaque milliseconde de silence entre une action et sa réponse est une milliseconde où votre utilisateur doute. Éliminez le doute, et vous éliminerez la friction. C'est aussi simple — et aussi difficile — que ça.",
        en: "Every millisecond of silence between an action and its response is a millisecond where your user doubts. Eliminate doubt, and you eliminate friction. It's that simple — and that difficult.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Doherty, W.J. & Thadani, A.J. (1982). The Economic Value of Rapid Response Time. IBM Systems Journal, 21(3), 282-300.",
      url: "https://doi.org/10.1147/sj.213.0282",
    },
    {
      id: 2,
      label: "Nielsen, J. (1993). Response Times: The 3 Important Limits. Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/response-times-3-important-limits/",
    },
    {
      id: 3,
      label: "Wroblewski, L. (2009). Inline Validation in Web Forms. A List Apart.",
      url: "https://alistapart.com/article/inline-validation-in-web-forms/",
    },
    {
      id: 4,
      label: "Saffer, D. (2013). Microinteractions: Designing with Details. O'Reilly Media.",
    },
    {
      id: 5,
      label: "Apple Human Interface Guidelines — Feedback and Haptics (2025).",
      url: "https://developer.apple.com/design/human-interface-guidelines/playing-haptics",
    },
    {
      id: 6,
      label: "Material Design 3 — Motion and Interaction States (2025).",
      url: "https://m3.material.io/styles/motion/overview",
    },
    {
      id: 7,
      label: "Baymard Institute (2023). Form Field Validation: Best Practices for Inline Feedback.",
      url: "https://baymard.com/blog/inline-form-validation",
    },
    {
      id: 8,
      label: "Harrison, C., Amento, B., Kuznetsov, S. & Bell, R. (2009). Skinput: Appropriating the Body as an Input Surface. CHI '10.",
      url: "https://doi.org/10.1145/1753326.1753394",
    },
    {
      id: 9,
      label: "Seow, S.C. (2008). Designing and Engineering Time: The Psychology of Time Perception in Software. Addison-Wesley.",
    },
    {
      id: 10,
      label: "Nielsen, J. (2014). Skeleton Screens, Lazy Loading, and Perceived Performance. Nielsen Norman Group.",
      url: "https://www.nngroup.com/articles/skeleton-screens/",
    },
  ],
};
