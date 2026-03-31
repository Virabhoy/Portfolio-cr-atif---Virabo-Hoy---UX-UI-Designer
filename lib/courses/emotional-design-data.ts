import type { CourseData } from "./fitts-data";

export const emotionalDesignData: CourseData = {
  slug: "design-emotionnel",
  chapter: 13,
  title: {
    fr: "Le Design Émotionnel : Au-delà de l'Utilisabilité",
    en: "Emotional Design: Beyond Usability",
  },
  subtitle: {
    fr: "Quand l'Interface Fait Ressentir, Pas Seulement Fonctionner",
    en: "When the Interface Makes You Feel, Not Just Function",
  },
  readingTime: 17,
  category: "ux",
  description: {
    fr: "Explorer les trois niveaux du design émotionnel pour créer des interfaces qui ne sont pas seulement utilisables, mais mémorables et attachantes.",
    en: "Exploring the three levels of emotional design to create interfaces that are not just usable, but memorable and endearing.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi utilisons-nous des produits que nous aimons, même quand ils sont imparfaits ?",
        en: "Why do we use products we love, even when they're imperfect?",
      },
      content: {
        fr: "Pensez à votre application préférée. Ce n'est probablement pas la plus performante, ni la plus complète. Mais elle vous procure quelque chose que les autres ne donnent pas : un sentiment. Les utilisateurs ne choisissent pas les produits les plus fonctionnels — ils choisissent ceux qui les font se sentir bien. L'utilisabilité est une condition nécessaire mais radicalement insuffisante. Un produit utilisable mais sans âme est un produit jetable, remplaçable par le prochain concurrent qui coche les mêmes cases fonctionnelles.",
        en: "Think about your favorite app. It's probably not the most performant, nor the most feature-complete. But it gives you something the others don't: a feeling. Users don't choose the most functional products — they choose the ones that make them feel good. Usability is a necessary but radically insufficient condition. A usable product without soul is a disposable product, replaceable by the next competitor checking the same functional boxes.",
      },
      highlight: {
        fr: "L'utilisabilité vous fait rester. L'émotion vous fait revenir. Et dans l'économie de l'attention, revenir est tout ce qui compte.",
        en: "Usability makes you stay. Emotion makes you come back. And in the attention economy, coming back is all that matters.",
      },
    },
    {
      id: "three-levels",
      title: {
        fr: "Les trois niveaux de Norman : viscéral, comportemental, réflectif",
        en: "Norman's three levels: visceral, behavioral, reflective",
      },
      content: {
        fr: "Don Norman a identifié en 2004 trois niveaux de traitement émotionnel qui s'appliquent à tout ce que nous concevons. Le niveau viscéral est la réaction instinctive, pré-consciente — le \"wow\" ou le \"beurk\" en un dixième de seconde. Le niveau comportemental est le plaisir de l'usage, la satisfaction d'une interaction fluide. Le niveau réflectif est le sens, l'identité, ce que le produit dit de moi quand je l'utilise. Ces trois niveaux ne sont pas hiérarchiques — ils sont simultanés. Un bon design les active tous les trois.",
        en: "Don Norman identified in 2004 three levels of emotional processing that apply to everything we design. The visceral level is the instinctive, pre-conscious reaction — the \"wow\" or \"ugh\" in a tenth of a second. The behavioral level is the pleasure of use, the satisfaction of a fluid interaction. The reflective level is meaning, identity, what the product says about me when I use it. These three levels are not hierarchical — they are simultaneous. Good design activates all three.",
      },
      bullets: {
        fr: [
          "Viscéral : apparence, première impression, attractivité immédiate.",
          "Comportemental : efficacité, prévisibilité, plaisir d'utilisation.",
          "Réflectif : image de soi, fierté de possession, recommandation aux autres.",
        ],
        en: [
          "Visceral: appearance, first impression, immediate attractiveness.",
          "Behavioral: efficiency, predictability, pleasure of use.",
          "Reflective: self-image, pride of ownership, recommending to others.",
        ],
      },
    },
    {
      id: "hierarchy-of-needs",
      title: {
        fr: "La hiérarchie des besoins d'Aarron Walter",
        en: "Aarron Walter's hierarchy of needs",
      },
      content: {
        fr: "Aarron Walter a transposé la pyramide de Maslow au design d'interface dans son livre \"Designing for Emotion\" (2011). À la base : la fonctionnalité. Ensuite : la fiabilité. Puis : l'utilisabilité. Et au sommet : le plaisir. La plupart des équipes produit s'arrêtent au troisième niveau. Elles livrent des interfaces fonctionnelles, fiables et utilisables — et se demandent pourquoi les utilisateurs n'en parlent jamais. C'est parce que personne ne recommande un produit en disant \"il fonctionne correctement\". On recommande les produits qui nous ont fait ressentir quelque chose.",
        en: "Aarron Walter transposed Maslow's pyramid to interface design in his book \"Designing for Emotion\" (2011). At the base: functionality. Then: reliability. Then: usability. And at the top: pleasure. Most product teams stop at the third level. They deliver functional, reliable, and usable interfaces — and wonder why users never talk about them. That's because nobody recommends a product by saying \"it works correctly.\" We recommend products that made us feel something.",
      },
      highlight: {
        fr: "Un produit dont on dit \"ça marche bien\" est un produit qu'on remplacera sans regret. Un produit dont on dit \"je l'adore\" est un produit qu'on défendra.",
        en: "A product people say \"works well\" is a product they'll replace without regret. A product people say \"I love it\" is a product they'll defend.",
      },
    },
    {
      id: "visceral-design",
      title: {
        fr: "Design viscéral : la première impression n'est pas superficielle",
        en: "Visceral design: the first impression is not superficial",
      },
      content: {
        fr: "Les recherches de Tractinsky et al. (2000) ont démontré un lien direct entre la beauté perçue d'une interface et sa facilité d'utilisation perçue. Les utilisateurs jugent une interface belle comme étant plus facile à utiliser — même quand elle ne l'est objectivement pas. Ce n'est pas de la superficialité, c'est de la neuropsychologie. Le plaisir esthétique active les mêmes circuits de récompense que le plaisir fonctionnel. La typographie, les couleurs, les proportions, le mouvement — tout cela n'est pas de la décoration. C'est un investissement dans la perception de qualité.",
        en: "Research by Tractinsky et al. (2000) demonstrated a direct link between an interface's perceived beauty and its perceived ease of use. Users judge a beautiful interface as easier to use — even when it objectively isn't. This isn't superficiality, it's neuropsychology. Aesthetic pleasure activates the same reward circuits as functional pleasure. Typography, colors, proportions, motion — none of this is decoration. It's an investment in perceived quality.",
      },
      bullets: {
        fr: [
          "La typographie soignée signale la crédibilité et le professionnalisme.",
          "Les micro-animations bien calibrées créent un sentiment de réactivité et de vie.",
          "Les couleurs cohérentes activent des associations émotionnelles automatiques.",
          "Les proportions harmonieuses génèrent un confort cognitif inconscient.",
        ],
        en: [
          "Careful typography signals credibility and professionalism.",
          "Well-calibrated micro-animations create a feeling of responsiveness and life.",
          "Consistent colors activate automatic emotional associations.",
          "Harmonious proportions generate unconscious cognitive comfort.",
        ],
      },
    },
    {
      id: "behavioral-design",
      title: {
        fr: "Design comportemental : le plaisir invisible de la fluidité",
        en: "Behavioral design: the invisible pleasure of fluidity",
      },
      content: {
        fr: "Le plaisir comportemental est le plus subtil et le plus puissant. C'est la satisfaction silencieuse quand un swipe-to-delete fonctionne exactement comme attendu. Le soulagement quand l'auto-complétion propose exactement ce que vous alliez taper. La joie discrète quand une transition vous guide naturellement vers l'étape suivante. Ce niveau émotionnel ne crie pas, il murmure. Et c'est précisément pour cela qu'il est si efficace. Les utilisateurs ne peuvent souvent pas verbaliser pourquoi une interface \"se sent bien\" — c'est le design comportemental qui opère sous le seuil de conscience.",
        en: "Behavioral pleasure is the most subtle and the most powerful. It's the silent satisfaction when a swipe-to-delete works exactly as expected. The relief when auto-complete suggests exactly what you were about to type. The quiet joy when a transition naturally guides you to the next step. This emotional level doesn't shout, it whispers. And that's precisely why it's so effective. Users often can't verbalize why an interface \"feels right\" — it's behavioral design operating below the threshold of consciousness.",
      },
      highlight: {
        fr: "Le meilleur design comportemental est celui que l'utilisateur ne remarque jamais — jusqu'à ce qu'il utilise un produit qui ne l'a pas.",
        en: "The best behavioral design is the one users never notice — until they use a product that doesn't have it.",
      },
    },
    {
      id: "reflective-design",
      title: {
        fr: "Design réflectif : quand le produit raconte qui nous sommes",
        en: "Reflective design: when the product tells who we are",
      },
      content: {
        fr: "Pourquoi des millions de personnes utilisent Notion plutôt qu'un simple éditeur de texte ? Pourquoi certains préfèrent Arc à Chrome malgré la courbe d'apprentissage ? La réponse est réflective : ces produits font partie de leur identité. \"Je suis quelqu'un qui utilise Notion\" véhicule une image de productivité, d'organisation, de modernité. Le design réflectif est celui qui transforme un utilisateur en ambassadeur. Il ne s'agit plus de ce que le produit fait, mais de ce qu'il dit sur la personne qui l'utilise. C'est le niveau le plus difficile à atteindre, mais c'est celui qui crée la fidélité irrationnelle.",
        en: "Why do millions of people use Notion rather than a simple text editor? Why do some prefer Arc to Chrome despite the learning curve? The answer is reflective: these products are part of their identity. \"I'm someone who uses Notion\" conveys an image of productivity, organization, modernity. Reflective design is what transforms a user into an ambassador. It's no longer about what the product does, but what it says about the person using it. It's the hardest level to reach, but it's the one that creates irrational loyalty.",
      },
      bullets: {
        fr: [
          "Le branding cohérent crée un sentiment d'appartenance à une communauté.",
          "Les fonctionnalités de personnalisation renforcent l'appropriation.",
          "Le storytelling du produit permet à l'utilisateur de s'y projeter.",
          "Le partage social transforme l'usage en expression identitaire.",
        ],
        en: [
          "Consistent branding creates a sense of community belonging.",
          "Personalization features strengthen ownership.",
          "Product storytelling allows users to project themselves into it.",
          "Social sharing transforms usage into identity expression.",
        ],
      },
    },
    {
      id: "micro-copy",
      title: {
        fr: "Le micro-copy : chaque mot est une opportunité émotionnelle",
        en: "Micro-copy: every word is an emotional opportunity",
      },
      content: {
        fr: "Le micro-copy est l'endroit où le design émotionnel se joue à l'échelle du mot. \"Mot de passe oublié ?\" ou \"On arrive tous à l'oublier\" — même fonction, émotion radicalement différente. \"Envoyer\" ou \"Partager mon message\" — même action, implication radicalement différente. Chaque label, chaque placeholder, chaque message de confirmation est une micro-interaction textuelle qui construit ou détruit la relation émotionnelle avec l'utilisateur. Le ton de voix n'est pas un luxe réservé aux marques B2C. C'est un outil de design fondamental.",
        en: "Micro-copy is where emotional design plays out at the word level. \"Forgot your password?\" vs \"We all forget sometimes\" — same function, radically different emotion. \"Submit\" vs \"Share my message\" — same action, radically different implication. Every label, every placeholder, every confirmation message is a textual micro-interaction that builds or destroys the emotional relationship with the user. Tone of voice isn't a luxury reserved for B2C brands. It's a fundamental design tool.",
      },
      highlight: {
        fr: "Le micro-copy est le langage corporel de votre interface. Il peut rassurer, accompagner et humaniser — ou aliéner, stresser et déshumaniser.",
        en: "Micro-copy is your interface's body language. It can reassure, accompany, and humanize — or alienate, stress, and dehumanize.",
      },
    },
    {
      id: "empty-states",
      title: {
        fr: "Les états vides : transformer l'absence en opportunité",
        en: "Empty states: turning absence into opportunity",
      },
      content: {
        fr: "Les empty states sont les moments les plus sous-estimés du design émotionnel. Un inbox vide, un dashboard sans données, une recherche sans résultat — ce sont des moments de vulnérabilité utilisateur où l'émotion est à vif. La plupart des designers les traitent comme des afterthoughts : un texte gris sur fond blanc, \"Aucun résultat\". C'est un gaspillage monumental. Ces moments sont des opportunités en or pour établir la personnalité de votre produit, guider l'utilisateur vers sa première action, et transformer un moment potentiellement frustrant en moment de connexion.",
        en: "Empty states are the most underestimated moments in emotional design. An empty inbox, a dashboard without data, a search with no results — these are moments of user vulnerability where emotion is raw. Most designers treat them as afterthoughts: gray text on white background, \"No results.\" This is a monumental waste. These moments are golden opportunities to establish your product's personality, guide the user toward their first action, and transform a potentially frustrating moment into a moment of connection.",
      },
      bullets: {
        fr: [
          "Utilisez une illustration ou une mascotte pour humaniser le vide.",
          "Proposez toujours une action claire : que peut faire l'utilisateur maintenant ?",
          "Adaptez le ton au contexte : encourageant pour un premier usage, rassurant pour une erreur.",
          "Les empty states de Slack, Mailchimp et Headspace sont des références de design émotionnel.",
        ],
        en: [
          "Use an illustration or mascot to humanize the emptiness.",
          "Always propose a clear action: what can the user do now?",
          "Adapt the tone to context: encouraging for first use, reassuring for errors.",
          "Empty states from Slack, Mailchimp, and Headspace are emotional design references.",
        ],
      },
    },
    {
      id: "error-personality",
      title: {
        fr: "Messages d'erreur : la personnalité dans l'adversité",
        en: "Error messages: personality in adversity",
      },
      content: {
        fr: "Un message d'erreur est le moment de vérité d'une interface. C'est quand les choses vont mal que le vrai caractère d'un produit se révèle — exactement comme les humains. \"Error 404\" est l'équivalent digital d'un haussement d'épaules. C'est froid, impersonnel, et ça communique implicitement que le problème est celui de l'utilisateur. À l'inverse, les meilleures pages 404 reconnaissent l'erreur, maintiennent le ton de la marque, et proposent un chemin de retour clair. La page 404 de GitHub avec son Octocat perdu dans l'espace ne résout pas le problème, mais elle transforme une frustration en sourire.",
        en: "An error message is an interface's moment of truth. It's when things go wrong that a product's true character is revealed — exactly like humans. \"Error 404\" is the digital equivalent of a shrug. It's cold, impersonal, and implicitly communicates that the problem is the user's. Conversely, the best 404 pages acknowledge the error, maintain brand tone, and offer a clear path back. GitHub's 404 page with its Octocat lost in space doesn't solve the problem, but it transforms frustration into a smile.",
      },
      highlight: {
        fr: "Chaque erreur est une occasion de prouver que votre produit se soucie de l'utilisateur. Ne la gaspillez pas avec un \"Une erreur est survenue\".",
        en: "Every error is a chance to prove your product cares about the user. Don't waste it with \"An error has occurred.\"",
      },
    },
    {
      id: "delight-vs-manipulation",
      title: {
        fr: "Enchanter vs manipuler : la ligne rouge du design émotionnel",
        en: "Delight vs manipulation: emotional design's red line",
      },
      content: {
        fr: "Voici la position la plus importante de ce chapitre : le design émotionnel doit enchanter, jamais manipuler. La frontière semble floue mais elle est en réalité très claire. L'enchantement sert l'utilisateur — il le rend plus efficace, plus confiant, plus satisfait. La manipulation sert l'entreprise au détriment de l'utilisateur — elle exploite ses biais cognitifs pour extraire de la valeur. Les streaks de Snapchat exploitent la peur de perdre (loss aversion). Les notifications \"Untel regarde votre profil\" exploitent le FOMO. Le compteur de \"X personnes regardent cet article\" exploite la rareté perçue. Ce n'est pas du design émotionnel. C'est de la manipulation émotionnelle.",
        en: "Here's the most important position in this chapter: emotional design must delight, never manipulate. The boundary seems blurry but it's actually very clear. Delight serves the user — it makes them more efficient, more confident, more satisfied. Manipulation serves the company at the user's expense — it exploits cognitive biases to extract value. Snapchat streaks exploit fear of loss (loss aversion). \"Someone is viewing your profile\" notifications exploit FOMO. The \"X people are looking at this item\" counter exploits perceived scarcity. This is not emotional design. It's emotional manipulation.",
      },
      bullets: {
        fr: [
          "Test décisif : l'utilisateur remercierait-il le designer s'il savait comment ça fonctionne ?",
          "L'enchantement crée de la confiance à long terme ; la manipulation crée de la dépendance à court terme.",
          "Si votre métrique de succès est le temps passé plutôt que la valeur obtenue, questionnez vos motifs.",
          "Les dark patterns émotionnels sont les plus dangereux car ils sont les plus difficiles à détecter.",
        ],
        en: [
          "Decisive test: would the user thank the designer if they knew how it works?",
          "Delight creates long-term trust; manipulation creates short-term dependency.",
          "If your success metric is time spent rather than value gained, question your motives.",
          "Emotional dark patterns are the most dangerous because they're the hardest to detect.",
        ],
      },
    },
    {
      id: "cultural-emotion",
      title: {
        fr: "Les émotions sont culturelles : concevoir pour un monde divers",
        en: "Emotions are cultural: designing for a diverse world",
      },
      content: {
        fr: "Une erreur fréquente du design émotionnel est de croire que les émotions sont universelles. Le rouge signifie le danger en Occident et la prospérité en Chine. L'humour qui fonctionne dans une interface américaine peut être perçu comme déplacé dans un contexte japonais. Les illustrations avec des pouces levés sont offensantes dans certaines cultures du Moyen-Orient. Le design émotionnel efficace exige une sensibilité culturelle profonde. Ce n'est pas juste traduire les textes — c'est adapter le registre émotionnel tout entier. Les grandes marques globales comme Airbnb et Spotify investissent massivement dans la localisation émotionnelle, pas seulement linguistique.",
        en: "A frequent mistake in emotional design is believing emotions are universal. Red means danger in the West and prosperity in China. Humor that works in an American interface can feel inappropriate in a Japanese context. Illustrations with thumbs up are offensive in some Middle Eastern cultures. Effective emotional design demands deep cultural sensitivity. It's not just translating text — it's adapting the entire emotional register. Global brands like Airbnb and Spotify invest massively in emotional localization, not just linguistic.",
      },
      highlight: {
        fr: "Le design émotionnel qui ignore les différences culturelles n'est pas universel — il est ethnocentrique.",
        en: "Emotional design that ignores cultural differences isn't universal — it's ethnocentric.",
      },
    },
    {
      id: "measuring-emotion",
      title: {
        fr: "Mesurer l'émotion : au-delà du NPS et des surveys",
        en: "Measuring emotion: beyond NPS and surveys",
      },
      content: {
        fr: "Comment mesurer quelque chose d'aussi subjectif que l'émotion ? C'est possible, et c'est nécessaire. Le System Usability Scale (SUS) mesure la satisfaction perçue. Le Net Promoter Score capture la dimension réflective (\"le recommanderiez-vous ?\"). Mais les outils les plus révélateurs sont qualitatifs : l'analyse des micro-expressions en user testing, le tone mapping des verbatims utilisateurs, et surtout la mesure du désir de retour (retention naturelle vs forcée). Un produit qui crée une émotion positive génère une rétention organique. Un produit qui manipule génère une rétention artificielle qui s'effondre dès qu'une alternative apparaît.",
        en: "How do you measure something as subjective as emotion? It's possible, and it's necessary. The System Usability Scale (SUS) measures perceived satisfaction. Net Promoter Score captures the reflective dimension (\"would you recommend it?\"). But the most revealing tools are qualitative: micro-expression analysis in user testing, tone mapping of user verbatims, and especially measuring desire to return (natural vs forced retention). A product that creates positive emotion generates organic retention. A product that manipulates generates artificial retention that collapses as soon as an alternative appears.",
      },
      bullets: {
        fr: [
          "SUS (System Usability Scale) : score de satisfaction perçue sur 100.",
          "NPS (Net Promoter Score) : mesure la dimension réflective et la recommandation.",
          "Analyse des micro-expressions : détecter frustration, surprise et plaisir en user testing.",
          "Taux de rétention organique vs forcée : l'indicateur le plus honnête du design émotionnel.",
          "Verbatims utilisateurs : les mots émotionnels (\"j'adore\", \"ça m'agace\") sont des données.",
        ],
        en: [
          "SUS (System Usability Scale): perceived satisfaction score out of 100.",
          "NPS (Net Promoter Score): measures the reflective dimension and recommendation.",
          "Micro-expression analysis: detecting frustration, surprise, and pleasure in user testing.",
          "Organic vs forced retention rate: the most honest indicator of emotional design.",
          "User verbatims: emotional words (\"I love it\", \"it annoys me\") are data.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "L'émotion n'est pas un bonus — c'est le produit",
        en: "Emotion is not a bonus — it is the product",
      },
      content: {
        fr: "L'utilisabilité sans émotion est oubliable. L'émotion sans utilisabilité est frustrante. Le design qui gagne est celui qui maîtrise les deux. Dans un marché où chaque catégorie de produit a des dizaines de concurrents fonctionnellement équivalents, l'émotion est le seul différenciateur durable. Les fonctionnalités se copient en quelques mois. L'émotion ne se copie jamais, parce qu'elle naît d'une intention authentique et d'une exécution cohérente à chaque point de contact. Concevez des interfaces qui font ressentir, pas seulement fonctionner. Vos utilisateurs ne s'en souviendront pas autrement.",
        en: "Usability without emotion is forgettable. Emotion without usability is frustrating. The design that wins masters both. In a market where every product category has dozens of functionally equivalent competitors, emotion is the only lasting differentiator. Features can be copied in months. Emotion can never be copied, because it's born from authentic intention and consistent execution at every touchpoint. Design interfaces that make people feel, not just function. Your users won't remember them otherwise.",
      },
      highlight: {
        fr: "Les gens oublieront ce que votre interface faisait. Ils n'oublieront jamais ce qu'elle leur a fait ressentir.",
        en: "People will forget what your interface did. They will never forget how it made them feel.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Norman, D.A. (2004). Emotional Design: Why We Love (or Hate) Everyday Things. Basic Books.",
    },
    {
      id: 2,
      label: "Walter, A. (2011). Designing for Emotion. A Book Apart.",
      url: "https://abookapart.com/products/designing-for-emotion",
    },
    {
      id: 3,
      label: "Tractinsky, N., Katz, A.S., & Ikar, D. (2000). What is beautiful is usable. Interacting with Computers, 13(2), 127-145.",
      url: "https://doi.org/10.1016/S0953-5438(00)00031-X",
    },
    {
      id: 4,
      label: "Desmet, P.M.A. & Hekkert, P. (2007). Framework of Product Experience. International Journal of Design, 1(1), 57-66.",
      url: "http://www.ijdesign.org/index.php/IJDesign/article/view/66",
    },
    {
      id: 5,
      label: "Hassenzahl, M. (2010). Experience Design: Technology for All the Right Reasons. Morgan & Claypool.",
      url: "https://doi.org/10.2200/S00261ED1V01Y201003HCI008",
    },
    {
      id: 6,
      label: "Kurosu, M. & Kashimura, K. (1995). Apparent usability vs. inherent usability. CHI '95 Conference Companion.",
      url: "https://doi.org/10.1145/223355.223680",
    },
    {
      id: 7,
      label: "Picard, R.W. (1997). Affective Computing. MIT Press.",
    },
    {
      id: 8,
      label: "Jordan, P.W. (2000). Designing Pleasurable Products: An Introduction to the New Human Factors. Taylor & Francis.",
    },
  ],
};
