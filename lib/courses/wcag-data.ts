import type { CourseData } from "./fitts-data";

export const wcagData: CourseData = {
  slug: "wcag-22-aa",
  chapter: 7,
  title: {
    fr: "WCAG 2.2 AA : L'Accessibilite N'est Pas une Option",
    en: "WCAG 2.2 AA: Accessibility Is Not Optional",
  },
  subtitle: {
    fr: "Concevoir pour Tous, sans Compromis sur l'Esthetique",
    en: "Designing for Everyone, Without Compromising Aesthetics",
  },
  readingTime: 18,
  category: "ux",
  description: {
    fr: "Un guide expert des standards WCAG 2.2 AA, des nouvelles exigences legales europeennes, et de la preuve que l'accessibilite est une competence de design, pas une contrainte technique.",
    en: "An expert guide to WCAG 2.2 AA standards, new European legal requirements, and the proof that accessibility is a design skill, not a technical constraint.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "1,3 milliard de personnes. Vous les ignorez encore ?",
        en: "1.3 billion people. Are you still ignoring them?",
      },
      content: {
        fr: "Selon l'Organisation mondiale de la sante, 16% de la population mondiale vit avec un handicap significatif. En France, 12 millions de personnes sont en situation de handicap. Et pourtant, en 2026, moins de 3% des sites web francais sont conformes aux standards d'accessibilite. Ce n'est pas un probleme technique. Les outils existent. Les standards sont documentes. Les frameworks modernes le supportent nativement. C'est un probleme de culture design. L'accessibilite est encore percue comme une contrainte, un ajout, une case a cocher en fin de projet. Je le dis clairement : cette vision est obsolete, moralement discutable, et desormais illegale en Europe.",
        en: "According to the World Health Organization, 16% of the global population lives with a significant disability. In France, 12 million people have a disability. And yet, in 2026, fewer than 3% of French websites comply with accessibility standards. This is not a technical problem. The tools exist. The standards are documented. Modern frameworks support it natively. It is a cultural design problem. Accessibility is still seen as a constraint, an add-on, a checkbox at the end of a project. I will say it clearly: this vision is obsolete, morally questionable, and now illegal in Europe.",
      },
      highlight: {
        fr: "L'accessibilite n'est pas ce que vous faites pour \"les autres\". C'est ce que vous faites pour tout le monde, y compris votre futur vous-meme.",
        en: "Accessibility is not what you do for \"others.\" It is what you do for everyone, including your future self.",
      },
    },
    {
      id: "what-is-wcag",
      title: {
        fr: "WCAG : le standard mondial, pas une recommandation",
        en: "WCAG: the global standard, not a recommendation",
      },
      content: {
        fr: "Les Web Content Accessibility Guidelines (WCAG) sont publiees par le W3C et constituent le standard de reference mondial pour l'accessibilite du contenu web. Ce ne sont pas des suggestions. Dans de nombreuses juridictions, y compris l'Union Europeenne et les Etats-Unis, elles ont force de loi. Le standard est organise en trois niveaux de conformite : A (minimum), AA (standard recommande), et AAA (optimal). Le niveau AA est celui que la legislation europeenne impose. Il represente l'equilibre entre exigence et faisabilite. Les WCAG reposent sur quatre principes fondamentaux -- POUR : Percevable, Operable, Understandable (comprehensible), Robust. Chaque critere de succes est rattache a l'un de ces principes.",
        en: "The Web Content Accessibility Guidelines (WCAG) are published by the W3C and constitute the global reference standard for web content accessibility. These are not suggestions. In many jurisdictions, including the European Union and the United States, they carry the force of law. The standard is organized into three conformance levels: A (minimum), AA (recommended standard), and AAA (optimal). Level AA is what European legislation mandates. It represents the balance between requirement and feasibility. WCAG rests on four fundamental principles -- POUR: Perceivable, Operable, Understandable, Robust. Each success criterion is tied to one of these principles.",
      },
      bullets: {
        fr: [
          "Niveau A : le strict minimum. Ne pas le respecter cree des barrieres infranchissables.",
          "Niveau AA : le standard impose par la loi europeenne et la plupart des legislations. C'est votre objectif.",
          "Niveau AAA : l'ideal, rarement atteint integralement, mais a viser pour les fonctionnalites critiques.",
          "Les 4 principes POUR sont le cadre conceptuel : chaque decision de design devrait etre evaluee a travers eux.",
        ],
        en: [
          "Level A: the bare minimum. Not meeting it creates insurmountable barriers.",
          "Level AA: the standard mandated by European law and most legislation. This is your target.",
          "Level AAA: the ideal, rarely fully achieved, but to aim for on critical features.",
          "The 4 POUR principles are the conceptual framework: every design decision should be evaluated through them.",
        ],
      },
    },
    {
      id: "new-in-22",
      title: {
        fr: "WCAG 2.2 : les 9 nouveaux criteres qui changent la donne",
        en: "WCAG 2.2: the 9 new criteria that change the game",
      },
      content: {
        fr: "WCAG 2.2, publie en octobre 2023, apporte 9 nouveaux criteres de succes et en retire un (4.1.1 Parsing, devenu obsolete avec HTML5). Ces ajouts ne sont pas mineurs. Ils adressent des problemes reels que les versions precedentes ignoraient, notamment autour de la navigation mobile, du controle moteur, et de l'authentification. Les changements les plus impactants pour les designers sont les criteres sur la taille des cibles (2.5.8), l'apparence du focus (2.4.11/2.4.12), les mouvements de glissement (2.5.7), et l'aide accessible (3.3.7). Ces criteres traduisent enfin en norme ce que les bons designers faisaient deja par intuition.",
        en: "WCAG 2.2, published in October 2023, introduces 9 new success criteria and removes one (4.1.1 Parsing, made obsolete by HTML5). These additions are not minor. They address real problems that previous versions ignored, particularly around mobile navigation, motor control, and authentication. The most impactful changes for designers are the criteria on target size (2.5.8), focus appearance (2.4.11/2.4.12), dragging movements (2.5.7), and accessible help (3.3.7). These criteria finally standardize what good designers were already doing by intuition.",
      },
      bullets: {
        fr: [
          "2.4.11 Focus Not Obscured (Minimum) [AA] : le focus clavier ne doit pas etre completement cache par d'autres elements.",
          "2.4.12 Focus Not Obscured (Enhanced) [AAA] : le focus ne doit pas etre partiellement cache non plus.",
          "2.4.13 Focus Appearance [AAA] : le focus doit avoir un indicateur visible de taille et contraste suffisants.",
          "2.5.7 Dragging Movements [AA] : toute fonctionnalite utilisant le glissement doit offrir une alternative par clic simple.",
          "2.5.8 Target Size (Minimum) [AA] : les cibles interactives doivent faire au moins 24x24 CSS pixels.",
          "3.2.6 Consistent Help [A] : les mecanismes d'aide doivent etre au meme endroit sur chaque page.",
          "3.3.7 Redundant Entry [A] : ne pas demander a l'utilisateur de re-saisir des informations deja fournies.",
          "3.3.8 Accessible Authentication (Minimum) [AA] : pas de tests cognitifs (captcha complexe) comme unique methode d'authentification.",
          "3.3.9 Accessible Authentication (Enhanced) [AAA] : pas de reconnaissance d'objets ou de contenu personnel.",
        ],
        en: [
          "2.4.11 Focus Not Obscured (Minimum) [AA]: keyboard focus must not be completely hidden by other elements.",
          "2.4.12 Focus Not Obscured (Enhanced) [AAA]: focus must not be partially hidden either.",
          "2.4.13 Focus Appearance [AAA]: focus must have a visible indicator of sufficient size and contrast.",
          "2.5.7 Dragging Movements [AA]: any functionality using dragging must offer a single-click alternative.",
          "2.5.8 Target Size (Minimum) [AA]: interactive targets must be at least 24x24 CSS pixels.",
          "3.2.6 Consistent Help [A]: help mechanisms must be in the same location on each page.",
          "3.3.7 Redundant Entry [A]: do not ask users to re-enter information already provided.",
          "3.3.8 Accessible Authentication (Minimum) [AA]: no cognitive tests (complex captcha) as the only authentication method.",
          "3.3.9 Accessible Authentication (Enhanced) [AAA]: no object recognition or personal content tests.",
        ],
      },
    },
    {
      id: "perceivable",
      title: {
        fr: "Percevable : si l'utilisateur ne le voit pas, il n'existe pas",
        en: "Perceivable: if the user cannot see it, it does not exist",
      },
      content: {
        fr: "Le premier principe WCAG exige que toute information et tout composant d'interface soit presentable de maniere perceptible pour tous les utilisateurs. Cela signifie fournir des alternatives textuelles pour le contenu non textuel, des sous-titres pour les medias audiovisuels, et un contenu adaptable a differents modes de presentation. Ce principe est le plus viole dans la pratique. Des images sans attribut alt, des videos sans sous-titres, des informations transmises uniquement par la couleur -- ces erreurs sont omnipresentes. Et elles ne sont pas de simples oublis techniques. Elles revelent une incapacite a penser au-dela de sa propre experience sensorielle.",
        en: "The first WCAG principle requires that all information and interface components be presentable in a perceivable way for all users. This means providing text alternatives for non-text content, captions for audiovisual media, and content adaptable to different presentation modes. This principle is the most violated in practice. Images without alt attributes, videos without captions, information conveyed only by color -- these errors are ubiquitous. And they are not simple technical oversights. They reveal an inability to think beyond one's own sensory experience.",
      },
      highlight: {
        fr: "Un alt=\"image\" ou alt=\"photo\" est pire qu'un alt vide. Si vous ne decrivez pas ce que l'image communique, vous ajoutez du bruit pour les lecteurs d'ecran sans apporter de valeur.",
        en: "An alt=\"image\" or alt=\"photo\" is worse than an empty alt. If you do not describe what the image communicates, you add noise for screen readers without providing value.",
      },
      bullets: {
        fr: [
          "Textes alternatifs : decrivez la fonction, pas l'apparence. \"Bouton d'envoi du formulaire\", pas \"fleche bleue\".",
          "Contraste : ratio minimum de 4.5:1 pour le texte normal, 3:1 pour le texte large (>18pt ou >14pt bold).",
          "Couleur : ne jamais utiliser la couleur comme seul vecteur d'information. Ajoutez du texte, des icones, des patterns.",
          "Redimensionnement : le contenu doit rester fonctionnel a 200% de zoom sans perte d'information.",
        ],
        en: [
          "Alt text: describe the function, not the appearance. \"Form submit button,\" not \"blue arrow.\"",
          "Contrast: minimum ratio of 4.5:1 for normal text, 3:1 for large text (>18pt or >14pt bold).",
          "Color: never use color as the only information vector. Add text, icons, patterns.",
          "Resizing: content must remain functional at 200% zoom without information loss.",
        ],
      },
    },
    {
      id: "operable",
      title: {
        fr: "Operable : chaque action doit etre executable par tous",
        en: "Operable: every action must be executable by everyone",
      },
      content: {
        fr: "Le principe d'operabilite exige que tous les composants d'interface et la navigation soient utilisables. Concretement : tout doit etre accessible au clavier, les utilisateurs doivent avoir assez de temps pour lire et interagir, le contenu ne doit pas provoquer de crises epileptiques, et la navigation doit etre previsible. Les pieges au clavier sont l'un des problemes les plus graves : quand un utilisateur naviguant au clavier entre dans un composant (modale, menu deroulant, widget personnalise) et ne peut plus en sortir. C'est l'equivalent numerique d'enfermer quelqu'un dans une piece. Les animations automatiques sont un autre point critique. Les carousels qui defilent seuls, les videos en autoplay, les animations en boucle -- ils doivent tous pouvoir etre mis en pause, arretes, ou masques.",
        en: "The operability principle requires that all interface components and navigation be usable. Concretely: everything must be keyboard accessible, users must have enough time to read and interact, content must not cause seizures, and navigation must be predictable. Keyboard traps are one of the most serious problems: when a keyboard user enters a component (modal, dropdown, custom widget) and cannot exit. It is the digital equivalent of locking someone in a room. Automatic animations are another critical point. Auto-scrolling carousels, autoplay videos, looping animations -- they must all be pausable, stoppable, or hideable.",
      },
      bullets: {
        fr: [
          "Navigation clavier : Tab, Shift+Tab, Enter, Espace, fleches. Testez TOUT votre parcours sans souris.",
          "Indicateur de focus visible : c'est le curseur des utilisateurs clavier. Le supprimer avec outline:none est un crime d'accessibilite.",
          "Skip links : un lien \"aller au contenu\" en haut de page pour eviter de tabuler a travers 50 liens de navigation.",
          "Timeout : si une session expire, prevenez l'utilisateur et offrez la possibilite de prolonger.",
        ],
        en: [
          "Keyboard navigation: Tab, Shift+Tab, Enter, Space, arrows. Test ALL your user flow without a mouse.",
          "Visible focus indicator: it is the cursor for keyboard users. Removing it with outline:none is an accessibility crime.",
          "Skip links: a \"skip to content\" link at the top of the page to avoid tabbing through 50 navigation links.",
          "Timeout: if a session expires, warn the user and offer the ability to extend.",
        ],
      },
    },
    {
      id: "understandable",
      title: {
        fr: "Comprehensible : la clarte n'est pas un bonus",
        en: "Understandable: clarity is not a bonus",
      },
      content: {
        fr: "Le troisieme principe WCAG exige que l'information et le fonctionnement de l'interface soient comprehensibles. La langue de la page doit etre declaree en HTML (lang=\"fr\"), les changements de langue dans le contenu doivent etre balises, les formulaires doivent fournir des instructions claires et des messages d'erreur explicites. Ce principe va plus loin que la simple lisibilite. Il impose que le comportement de l'interface soit previsible. Un lien qui ouvre un nouvel onglet sans prevenir viole ce principe. Un formulaire qui se soumet automatiquement sans confirmation viole ce principe. Un menu dont le contenu change quand on survole un element viole ce principe. La previsibilite est une forme d'accessibilite cognitive que nous negligeons systematiquement.",
        en: "The third WCAG principle requires that information and interface operation be understandable. The page language must be declared in HTML (lang=\"en\"), language changes within content must be tagged, forms must provide clear instructions and explicit error messages. This principle goes beyond simple readability. It requires that interface behavior be predictable. A link that opens a new tab without warning violates this principle. A form that auto-submits without confirmation violates this principle. A menu whose content changes on hover violates this principle. Predictability is a form of cognitive accessibility that we systematically neglect.",
      },
      highlight: {
        fr: "Un message d'erreur qui dit \"Champ invalide\" est inutile. \"Veuillez entrer un email au format nom@domaine.fr\" est accessible. La precision est une forme de respect.",
        en: "An error message that says \"Invalid field\" is useless. \"Please enter an email in the format name@domain.com\" is accessible. Precision is a form of respect.",
      },
    },
    {
      id: "robust",
      title: {
        fr: "Robuste : votre code doit parler aux machines aussi",
        en: "Robust: your code must speak to machines too",
      },
      content: {
        fr: "Le quatrieme principe exige que le contenu soit suffisamment robuste pour etre interprete de maniere fiable par une grande variete d'agents utilisateurs, y compris les technologies d'assistance. Cela signifie un HTML semantique correct, des roles ARIA bien utilises, et des composants personnalises qui exposent correctement leur etat et leurs proprietes. Les designers ont tendance a ignorer ce principe en le considerant comme \"technique\". C'est une erreur grave. Quand vous concevez un composant personnalise -- un accordeon, un systeme d'onglets, un selecteur de date -- vous devez specifier son comportement accessible dans vos maquettes. Si le developpeur ne sait pas que votre accordeon doit annoncer \"section 2 sur 5, depiee\" au lecteur d'ecran, il ne l'implementera pas.",
        en: "The fourth principle requires that content be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies. This means correct semantic HTML, properly used ARIA roles, and custom components that correctly expose their state and properties. Designers tend to ignore this principle, considering it \"technical.\" This is a serious mistake. When you design a custom component -- an accordion, a tab system, a date picker -- you must specify its accessible behavior in your mockups. If the developer does not know that your accordion should announce \"section 2 of 5, expanded\" to the screen reader, they will not implement it.",
      },
      bullets: {
        fr: [
          "HTML semantique : utilisez <button> pour un bouton, pas un <div> avec un onclick. La semantique est gratuite.",
          "ARIA : la premiere regle d'ARIA est \"ne pas utiliser ARIA si un element HTML natif fait le travail\".",
          "Annotations d'accessibilite : integrez les roles, etats et proprietes ARIA directement dans vos maquettes Figma.",
          "Tests avec lecteur d'ecran : VoiceOver (macOS/iOS) et NVDA (Windows) sont gratuits. Aucune excuse.",
        ],
        en: [
          "Semantic HTML: use <button> for a button, not a <div> with onclick. Semantics are free.",
          "ARIA: the first rule of ARIA is \"do not use ARIA if a native HTML element does the job.\"",
          "Accessibility annotations: integrate ARIA roles, states, and properties directly in your Figma mockups.",
          "Screen reader testing: VoiceOver (macOS/iOS) and NVDA (Windows) are free. No excuses.",
        ],
      },
    },
    {
      id: "target-size",
      title: {
        fr: "Taille des cibles : 24px minimum, 44px recommande",
        en: "Target size: 24px minimum, 44px recommended",
      },
      content: {
        fr: "Le critere 2.5.8 de WCAG 2.2 impose une taille minimale de 24x24 CSS pixels pour les cibles interactives au niveau AA. Mais soyons clairs : 24px est un minimum legal, pas un objectif de design. Apple recommande 44pt, Google recommande 48dp, et les recherches du MIT montrent que la taille optimale pour un doigt adulte est de 57px. Les exceptions existent : les liens dans un texte continu, les cibles dont la taille est determinee par l'agent utilisateur, et les cibles avec un espacement suffisant. Mais ces exceptions ne sont pas des excuses pour des boutons minuscules. En tant que designer senior, je considere que toute cible en dessous de 44px sur mobile est un compromis qui doit etre justifie par ecrit dans les specs.",
        en: "WCAG 2.2 criterion 2.5.8 requires a minimum size of 24x24 CSS pixels for interactive targets at the AA level. But let us be clear: 24px is a legal minimum, not a design goal. Apple recommends 44pt, Google recommends 48dp, and MIT research shows the optimal size for an adult finger is 57px. Exceptions exist: links in continuous text, targets whose size is determined by the user agent, and targets with sufficient spacing. But these exceptions are not excuses for tiny buttons. As a senior designer, I consider any target below 44px on mobile a compromise that must be justified in writing in the specs.",
      },
      highlight: {
        fr: "Chaque pixel en dessous de 44px sur mobile est une exclusion potentielle. Les utilisateurs avec des tremblements, de l'arthrite, ou simplement de gros doigts ne sont pas des cas limites. Ils sont vos utilisateurs.",
        en: "Every pixel below 44px on mobile is a potential exclusion. Users with tremors, arthritis, or simply large fingers are not edge cases. They are your users.",
      },
    },
    {
      id: "focus-appearance",
      title: {
        fr: "L'apparence du focus : le critere le plus trahi du web",
        en: "Focus appearance: the most betrayed criterion on the web",
      },
      content: {
        fr: "Combien de sites avez-vous visites ou le focus clavier est invisible ? La reponse est : presque tous. La ligne de code la plus destructrice en accessibilite est \"*:focus { outline: none; }\". Elle est presente dans d'innombrables templates et reset CSS. Elle supprime le seul indicateur de navigation pour les utilisateurs clavier. WCAG 2.2 renforce les exigences avec le critere 2.4.11 (Focus Not Obscured) au niveau AA : le focus ne doit jamais etre completement cache par d'autres elements (sticky headers, modales, tooltips). Et le critere 2.4.13 (Focus Appearance) au niveau AAA specifie que l'indicateur de focus doit avoir un contraste suffisant et une taille minimale perceptible.",
        en: "How many websites have you visited where keyboard focus is invisible? The answer is: almost all of them. The most destructive line of code in accessibility is \"*:focus { outline: none; }\". It is present in countless templates and CSS resets. It removes the only navigation indicator for keyboard users. WCAG 2.2 strengthens requirements with criterion 2.4.11 (Focus Not Obscured) at the AA level: focus must never be completely hidden by other elements (sticky headers, modals, tooltips). And criterion 2.4.13 (Focus Appearance) at the AAA level specifies that the focus indicator must have sufficient contrast and a minimum perceptible size.",
      },
      bullets: {
        fr: [
          "Designez un focus visible et esthetique : un anneau de 2px avec un offset de 2px dans votre couleur primaire fonctionne parfaitement.",
          "Utilisez :focus-visible au lieu de :focus pour n'afficher le focus qu'aux utilisateurs clavier, pas aux clics souris.",
          "Verifiez que vos sticky headers et modales ne recouvrent pas l'element focus. C'est le nouveau critere AA 2.4.11.",
          "Le focus fait partie de votre systeme de design. Documentez-le dans votre design system au meme titre que vos couleurs et typographies.",
        ],
        en: [
          "Design a visible and aesthetic focus: a 2px ring with 2px offset in your primary color works perfectly.",
          "Use :focus-visible instead of :focus to show focus only to keyboard users, not mouse clicks.",
          "Verify that your sticky headers and modals do not cover the focused element. This is the new AA criterion 2.4.11.",
          "Focus is part of your design system. Document it in your design system alongside your colors and typography.",
        ],
      },
    },
    {
      id: "color-contrast",
      title: {
        fr: "Le contraste des couleurs : la science derriere les ratios",
        en: "Color contrast: the science behind the ratios",
      },
      content: {
        fr: "Le contraste n'est pas une question d'opinion esthetique. C'est de la physique perceptive. Le ratio de contraste WCAG est calcule selon la luminance relative des couleurs, definie par la formule du W3C. Au niveau AA, le texte normal necessite un ratio de 4.5:1 et le texte large (18pt+ ou 14pt+ bold) necessite 3:1. WCAG 2.2 maintient egalement le critere 1.4.11 sur les composants d'interface : les elements interactifs (bordures de champs, icones fonctionnelles, indicateurs de focus) doivent avoir un ratio de 3:1 avec l'arriere-plan adjacent. Cela signifie que vos champs de formulaire gris clair sur fond blanc sont probablement non conformes. Vos icones gris moyen aussi.",
        en: "Contrast is not a matter of aesthetic opinion. It is perceptive physics. The WCAG contrast ratio is calculated using relative luminance of colors, defined by the W3C formula. At the AA level, normal text requires a 4.5:1 ratio and large text (18pt+ or 14pt+ bold) requires 3:1. WCAG 2.2 also maintains criterion 1.4.11 on interface components: interactive elements (field borders, functional icons, focus indicators) must have a 3:1 ratio with the adjacent background. This means your light gray form fields on a white background are probably non-compliant. Your medium gray icons too.",
      },
      highlight: {
        fr: "\"Le gris clair sur blanc c'est elegant\" est l'excuse la plus repandue pour un design inaccessible. L'elegance qui exclut n'est pas de l'elegance. C'est de la negligence.",
        en: "\"Light gray on white is elegant\" is the most common excuse for inaccessible design. Elegance that excludes is not elegance. It is negligence.",
      },
      bullets: {
        fr: [
          "Utilisez des outils de verification : Contrast Checker de WebAIM, le plugin Stark pour Figma, l'inspecteur d'accessibilite de Chrome DevTools.",
          "Concevez en dark mode ET light mode : les ratios de contraste changent et doivent etre verifies dans les deux modes.",
          "Ne vous fiez pas a votre ecran Retina calibre. Testez sur des ecrans bas de gamme, en plein soleil, a luminosite reduite.",
          "Le daltonisme affecte 8% des hommes. Simulez avec les filtres de daltonisme dans Figma ou Chrome DevTools.",
        ],
        en: [
          "Use verification tools: WebAIM's Contrast Checker, the Stark plugin for Figma, Chrome DevTools accessibility inspector.",
          "Design in dark mode AND light mode: contrast ratios change and must be verified in both modes.",
          "Do not trust your calibrated Retina screen. Test on low-end screens, in sunlight, at reduced brightness.",
          "Color blindness affects 8% of men. Simulate with color blindness filters in Figma or Chrome DevTools.",
        ],
      },
    },
    {
      id: "legal-obligation",
      title: {
        fr: "L'Acte Europeen d'Accessibilite : la loi change tout en 2025",
        en: "The European Accessibility Act: the law changes everything in 2025",
      },
      content: {
        fr: "Le 28 juin 2025, l'European Accessibility Act (EAA) entre en application dans tous les Etats membres de l'UE. Ce n'est plus une directive optionnelle. C'est une obligation legale qui concerne les sites e-commerce, les services bancaires en ligne, les plateformes de streaming, les services de transport, les livres numeriques, et bien d'autres. Les sanctions varient par pays mais peuvent inclure des amendes significatives et des injonctions de mise en conformite. En France, le RGAA (Referentiel General d'Amelioration de l'Accessibilite) s'aligne sur WCAG 2.2 AA. Les entreprises de plus de 250 millions d'euros de chiffre d'affaires sont deja soumises a des obligations de declaration.",
        en: "On June 28, 2025, the European Accessibility Act (EAA) comes into force across all EU member states. This is no longer an optional directive. It is a legal obligation that covers e-commerce websites, online banking services, streaming platforms, transport services, e-books, and much more. Penalties vary by country but can include significant fines and compliance injunctions. In France, the RGAA (General Accessibility Improvement Framework) aligns with WCAG 2.2 AA. Companies with over 250 million euros in revenue are already subject to declaration requirements.",
      },
      highlight: {
        fr: "Apres le 28 juin 2025, l'inaccessibilite n'est plus un choix de design. C'est une infraction legale. Les entreprises qui attendent le dernier moment vont payer le prix -- en amendes et en dettes techniques.",
        en: "After June 28, 2025, inaccessibility is no longer a design choice. It is a legal infraction. Companies that wait until the last moment will pay the price -- in fines and technical debt.",
      },
      bullets: {
        fr: [
          "L'EAA couvre les produits ET les services numeriques. Votre application mobile est concernee.",
          "Les micro-entreprises (moins de 10 employes ET moins de 2M de CA) sont exemptees, mais le marche va exiger la conformite de tous.",
          "Aux Etats-Unis, l'ADA est deja utilisee pour des poursuites judiciaires sur l'accessibilite web. Plus de 4000 plaintes en 2023.",
          "L'accessibilite est desormais un risque juridique que les directions generales prennent au serieux. Utilisez cet argument.",
        ],
        en: [
          "The EAA covers digital products AND services. Your mobile app is covered.",
          "Micro-enterprises (fewer than 10 employees AND under 2M revenue) are exempt, but the market will demand compliance from everyone.",
          "In the United States, the ADA is already used for lawsuits on web accessibility. Over 4,000 complaints in 2023.",
          "Accessibility is now a legal risk that C-suites take seriously. Use this argument.",
        ],
      },
    },
    {
      id: "myth-busting",
      title: {
        fr: "Detruire les mythes : l'accessibilite n'est PAS laide",
        en: "Busting myths: accessibility is NOT ugly",
      },
      content: {
        fr: "Le mythe le plus tenace dans notre industrie est que l'accessibilite et le beau design sont incompatibles. C'est faux. C'est empiriquement, demonstrablement faux. Apple, l'entreprise la plus associee au design premium, est aussi l'une des plus avancees en accessibilite. VoiceOver est integre nativement a chaque appareil Apple depuis 2005. Stripe, reference du design SaaS, est conforme WCAG AA. Gov.uk, l'un des systemes de design les plus respectes au monde, est ne de l'accessibilite. Le vrai probleme n'est pas que l'accessibilite limite la creativite. C'est que les designers n'ont jamais appris a etre creatifs dans le cadre de l'accessibilite. Les contraintes ne tuent pas la creativite. Elles la catalysent.",
        en: "The most persistent myth in our industry is that accessibility and beautiful design are incompatible. This is false. It is empirically, demonstrably false. Apple, the company most associated with premium design, is also one of the most advanced in accessibility. VoiceOver has been natively integrated into every Apple device since 2005. Stripe, the SaaS design reference, is WCAG AA compliant. Gov.uk, one of the most respected design systems in the world, was born from accessibility. The real problem is not that accessibility limits creativity. It is that designers have never learned to be creative within the framework of accessibility. Constraints do not kill creativity. They catalyze it.",
      },
      highlight: {
        fr: "Si vous ne pouvez pas creer un design beau ET accessible, le probleme n'est pas l'accessibilite. Le probleme est vos competences en design.",
        en: "If you cannot create a design that is beautiful AND accessible, the problem is not accessibility. The problem is your design skills.",
      },
    },
    {
      id: "implementation",
      title: {
        fr: "Guide pratique : integrer l'accessibilite dans votre workflow",
        en: "Practical guide: integrating accessibility into your workflow",
      },
      content: {
        fr: "L'accessibilite ne peut pas etre ajoutee en fin de projet. C'est une methode structurelle qui doit etre integree a chaque etape du processus de design. Pendant la recherche, incluez des utilisateurs en situation de handicap dans vos panels. Pendant le design, utilisez des plugins comme Stark ou axe pour Figma. Pendant le developpement, executez des audits automatises avec axe-core, Lighthouse, et WAVE. Apres le lancement, faites des audits manuels avec des utilisateurs de lecteurs d'ecran et de navigation clavier.",
        en: "Accessibility cannot be added at the end of a project. It is a structural method that must be integrated at every stage of the design process. During research, include users with disabilities in your panels. During design, use plugins like Stark or axe for Figma. During development, run automated audits with axe-core, Lighthouse, and WAVE. After launch, conduct manual audits with screen reader and keyboard navigation users.",
      },
      bullets: {
        fr: [
          "Etape 1 - Recherche : incluez au moins 1 utilisateur en situation de handicap par etude qualitative.",
          "Etape 2 - Design : annotez chaque maquette avec les informations d'accessibilite (ordre de tab, alt texts, roles ARIA, messages d'erreur).",
          "Etape 3 - Specs : documentez le comportement clavier de chaque composant interactif.",
          "Etape 4 - Dev : integrez axe-core dans votre CI/CD. Aucun merge sans score d'accessibilite satisfaisant.",
          "Etape 5 - QA : testez manuellement avec VoiceOver + Safari, NVDA + Firefox, TalkBack + Chrome.",
          "Etape 6 - Monitoring : utilisez des outils comme Siteimprove ou Deque pour surveiller la conformite en continu.",
        ],
        en: [
          "Step 1 - Research: include at least 1 user with a disability per qualitative study.",
          "Step 2 - Design: annotate every mockup with accessibility information (tab order, alt texts, ARIA roles, error messages).",
          "Step 3 - Specs: document the keyboard behavior of every interactive component.",
          "Step 4 - Dev: integrate axe-core into your CI/CD. No merge without a satisfactory accessibility score.",
          "Step 5 - QA: manually test with VoiceOver + Safari, NVDA + Firefox, TalkBack + Chrome.",
          "Step 6 - Monitoring: use tools like Siteimprove or Deque to continuously monitor compliance.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "L'accessibilite est une competence de design, pas un fardeau",
        en: "Accessibility is a design skill, not a burden",
      },
      content: {
        fr: "L'accessibilite n'est pas un compromis. C'est une discipline. Les rampes de trottoir concues pour les fauteuils roulants beneficient aux parents avec poussettes, aux livreurs avec chariots, aux personnes agees avec cannes. C'est le \"curb cut effect\" : ce qui est concu pour les personnes en situation de handicap ameliore l'experience de tout le monde. Les sous-titres beneficient a ceux qui regardent une video sans son dans le metro. Le contraste eleve beneficie a ceux qui utilisent leur telephone en plein soleil. Les grandes cibles tactiles beneficient a tous ceux qui ont les mains mouillees, gantees, ou fatiguees. En tant que designer, l'accessibilite est la preuve ultime de votre maitrise. Elle demontre que vous savez concevoir pour la diversite humaine, pas seulement pour des personas idealises dans des conditions parfaites.",
        en: "Accessibility is not a compromise. It is a discipline. Curb cuts designed for wheelchairs benefit parents with strollers, delivery workers with carts, elderly people with canes. This is the \"curb cut effect\": what is designed for people with disabilities improves the experience for everyone. Captions benefit those watching a video without sound on the subway. High contrast benefits those using their phone in direct sunlight. Large touch targets benefit everyone with wet, gloved, or tired hands. As a designer, accessibility is the ultimate proof of your mastery. It demonstrates that you know how to design for human diversity, not just for idealized personas in perfect conditions.",
      },
      highlight: {
        fr: "WCAG 2.2 AA n'est pas un obstacle a franchir. C'est un plancher de qualite en dessous duquel un designer professionnel ne devrait jamais descendre.",
        en: "WCAG 2.2 AA is not an obstacle to clear. It is a quality floor below which a professional designer should never fall.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "W3C (2023). Web Content Accessibility Guidelines (WCAG) 2.2. W3C Recommendation.",
      url: "https://www.w3.org/TR/WCAG22/",
    },
    {
      id: 2,
      label: "European Parliament (2019). European Accessibility Act — Directive (EU) 2019/882.",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882",
    },
    {
      id: 3,
      label: "WebAIM (2024). The WebAIM Million — Annual accessibility analysis of the top 1,000,000 home pages.",
      url: "https://webaim.org/projects/million/",
    },
    {
      id: 4,
      label: "Nielsen Norman Group (2023). Accessibility Standards and Guidelines for UX Designers.",
      url: "https://www.nngroup.com/articles/accessibility-guidelines/",
    },
    {
      id: 5,
      label: "Deque Systems. axe — The Standard in Accessibility Testing.",
      url: "https://www.deque.com/axe/",
    },
    {
      id: 6,
      label: "W3C WAI (2023). What's New in WCAG 2.2.",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/",
    },
    {
      id: 7,
      label: "UsableNet (2024). 2023 Year End Digital Accessibility Lawsuit Report.",
      url: "https://blog.usablenet.com/2023-year-end-digital-accessibility-lawsuit-report",
    },
    {
      id: 8,
      label: "DINUM (2024). RGAA 4.1 — Referentiel General d'Amelioration de l'Accessibilite.",
      url: "https://accessibilite.numerique.gouv.fr/",
    },
    {
      id: 9,
      label: "World Health Organization (2023). Disability and Health — Key Facts.",
      url: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
    },
  ],
};
