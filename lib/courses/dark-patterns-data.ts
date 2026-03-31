import type { CourseData } from "./fitts-data";

export const darkPatternsData: CourseData = {
  slug: "dark-patterns-ethique",
  chapter: 14,
  title: {
    fr: "Dark Patterns : L'Éthique du Designer",
    en: "Dark Patterns: The Designer's Ethics",
  },
  subtitle: {
    fr: "La Responsabilité de Celui Qui Dessine les Choix",
    en: "The Responsibility of the One Who Designs Choices",
  },
  readingTime: 18,
  category: "ux",
  description: {
    fr: "Identifier, comprendre et combattre les dark patterns pour pratiquer un design éthique qui respecte l'autonomie de l'utilisateur.",
    en: "Identifying, understanding, and fighting dark patterns to practice ethical design that respects user autonomy.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Chaque interface est un choix moral",
        en: "Every interface is a moral choice",
      },
      content: {
        fr: "Chaque bouton que vous placez, chaque flux que vous dessinez, chaque option que vous mettez en avant ou que vous cachez est un acte de pouvoir. Le designer d'interface décide ce que des millions de personnes verront, comprendront et choisiront. Ce pouvoir vient avec une responsabilité immense que notre industrie a trop longtemps ignorée. Les dark patterns ne sont pas des bugs — ce sont des features délibérément conçues pour tromper. Et chaque designer qui les implémente, qu'il en soit l'auteur ou le simple exécutant, est complice.",
        en: "Every button you place, every flow you design, every option you highlight or hide is an act of power. The interface designer decides what millions of people will see, understand, and choose. This power comes with an immense responsibility that our industry has ignored for too long. Dark patterns are not bugs — they are features deliberately designed to deceive. And every designer who implements them, whether they authored them or simply executed them, is complicit.",
      },
      highlight: {
        fr: "\"Je ne faisais qu'exécuter les demandes du Product Manager\" n'est pas une défense acceptable. Le designer est le dernier rempart entre le business et l'utilisateur.",
        en: "\"I was just executing the Product Manager's requests\" is not an acceptable defense. The designer is the last line of defense between the business and the user.",
      },
    },
    {
      id: "what-are-dark-patterns",
      title: {
        fr: "Qu'est-ce qu'un dark pattern ? Définition et origine",
        en: "What is a dark pattern? Definition and origin",
      },
      content: {
        fr: "Le terme \"dark pattern\" a été forgé par Harry Brignull en 2010 pour décrire les interfaces conçues pour tromper ou manipuler l'utilisateur, le poussant à effectuer des actions qu'il n'aurait pas choisies en toute connaissance de cause. Ce ne sont pas des erreurs de design ou des interfaces mal pensées. Ce sont des mécanismes délibérés, souvent testés et optimisés via A/B testing pour maximiser leur efficacité manipulatoire. La différence fondamentale entre persuasion et manipulation est le consentement éclairé : la persuasion fonctionne quand l'utilisateur comprend ce qu'il fait ; le dark pattern fonctionne parce qu'il ne comprend pas.",
        en: "The term \"dark pattern\" was coined by Harry Brignull in 2010 to describe interfaces designed to trick or manipulate users, pushing them to take actions they wouldn't have chosen with full knowledge. These are not design mistakes or poorly thought-out interfaces. They are deliberate mechanisms, often tested and optimized through A/B testing to maximize their manipulative effectiveness. The fundamental difference between persuasion and manipulation is informed consent: persuasion works when the user understands what they're doing; a dark pattern works because they don't.",
      },
      bullets: {
        fr: [
          "Dark pattern ≠ mauvais design. Un dark pattern est intentionnel, testé et optimisé.",
          "L'objectif est toujours le même : faire faire à l'utilisateur quelque chose qui sert l'entreprise à ses dépens.",
          "Harry Brignull maintient une base de données publique sur darkpatterns.org (maintenant deceptive.design).",
          "En 2024, l'Union Européenne a rendu certains dark patterns explicitement illégaux via le DSA et le DMA.",
        ],
        en: [
          "Dark pattern ≠ bad design. A dark pattern is intentional, tested, and optimized.",
          "The goal is always the same: make the user do something that serves the company at their expense.",
          "Harry Brignull maintains a public database at darkpatterns.org (now deceptive.design).",
          "In 2024, the European Union made certain dark patterns explicitly illegal through the DSA and DMA.",
        ],
      },
    },
    {
      id: "taxonomy",
      title: {
        fr: "Taxonomie des dark patterns : connaître l'ennemi",
        en: "Dark pattern taxonomy: know the enemy",
      },
      content: {
        fr: "Brignull a identifié une douzaine de catégories de dark patterns, chacune exploitant un biais cognitif ou une limite attentionnelle différente. Connaître cette taxonomie est essentiel pour tout designer éthique — non pas pour les implémenter, mais pour les reconnaître et les refuser. Ces patterns sont omniprésents : des géants de la tech aux startups, des e-commerces aux services publics. La normalisation est le plus grand danger — quand un dark pattern devient si courant qu'il semble \"normal\", il devient invisible, et donc encore plus efficace.",
        en: "Brignull identified about a dozen categories of dark patterns, each exploiting a different cognitive bias or attentional limitation. Knowing this taxonomy is essential for every ethical designer — not to implement them, but to recognize and refuse them. These patterns are omnipresent: from tech giants to startups, from e-commerce to public services. Normalization is the greatest danger — when a dark pattern becomes so common it seems \"normal,\" it becomes invisible, and therefore even more effective.",
      },
      bullets: {
        fr: [
          "Confirmshaming : culpabiliser l'utilisateur pour son choix (\"Non, je ne veux pas économiser\").",
          "Roach Motel : facile d'entrer, quasi impossible de sortir (résiliation d'abonnement kafkaïenne).",
          "Trick Questions : formulations confuses qui inversent le sens attendu des cases à cocher.",
          "Disguised Ads : publicités déguisées en contenu ou en boutons de navigation.",
          "Forced Continuity : l'essai gratuit qui prélève automatiquement sans rappel clair.",
          "Hidden Costs : frais révélés à la dernière étape du tunnel de conversion.",
          "Misdirection : détourner l'attention vers une action que l'entreprise préfère.",
          "Privacy Zuckering : pousser l'utilisateur à partager plus de données qu'il ne le souhaite.",
        ],
        en: [
          "Confirmshaming: guilt-tripping users for their choice (\"No, I don't want to save money\").",
          "Roach Motel: easy to enter, nearly impossible to leave (Kafkaesque subscription cancellation).",
          "Trick Questions: confusing wording that reverses the expected meaning of checkboxes.",
          "Disguised Ads: ads disguised as content or navigation buttons.",
          "Forced Continuity: the free trial that charges automatically without clear reminder.",
          "Hidden Costs: fees revealed at the final step of the conversion funnel.",
          "Misdirection: diverting attention toward an action the company prefers.",
          "Privacy Zuckering: pushing users to share more data than they intend.",
        ],
      },
    },
    {
      id: "confirmshaming",
      title: {
        fr: "Le confirmshaming : la culpabilité comme outil de conversion",
        en: "Confirmshaming: guilt as a conversion tool",
      },
      content: {
        fr: "\"Non merci, je préfère payer le prix fort.\" \"Non, je ne veux pas améliorer ma vie.\" \"Non, je n'aime pas les économies.\" Ces formulations sont partout sur le web, et elles représentent l'une des formes les plus insidieuses de dark pattern. Le confirmshaming exploite un biais psychologique puissant : l'aversion à la perte et le besoin de cohérence identitaire. Personne ne veut se percevoir comme quelqu'un qui refuse une bonne affaire. Cette technique fonctionne — les données le prouvent — et c'est précisément pour cela qu'elle est si néfaste. Elle génère des inscriptions et des conversions qui ne reflètent pas un choix libre mais une pression émotionnelle.",
        en: "\"No thanks, I prefer to pay full price.\" \"No, I don't want to improve my life.\" \"No, I don't like savings.\" These phrasings are everywhere on the web, and they represent one of the most insidious forms of dark pattern. Confirmshaming exploits a powerful psychological bias: loss aversion and the need for identity consistency. Nobody wants to see themselves as someone who refuses a good deal. This technique works — the data proves it — and that's precisely why it's so harmful. It generates sign-ups and conversions that don't reflect free choice but emotional pressure.",
      },
      highlight: {
        fr: "Si votre taux de conversion repose sur la culpabilisation de vos utilisateurs, votre produit n'est pas assez bon pour convaincre honnêtement.",
        en: "If your conversion rate relies on guilt-tripping your users, your product isn't good enough to convince honestly.",
      },
    },
    {
      id: "roach-motel",
      title: {
        fr: "Le Roach Motel : entrer en un clic, partir en un calvaire",
        en: "The Roach Motel: one click to enter, an ordeal to leave",
      },
      content: {
        fr: "Le Roach Motel est peut-être le dark pattern le plus répandu et le plus directement nuisible. S'abonner prend 30 secondes. Se désabonner prend 45 minutes, trois pages de \"êtes-vous sûr ?\", un appel téléphonique obligatoire, et un e-mail de confirmation qui n'arrive jamais. Amazon Prime a fait l'objet de procédures de la FTC pour ce pattern exact. Le New York Times nécessitait un appel téléphonique pour annuler un abonnement digital. Ce n'est pas du mauvais UX — c'est du design délibérément hostile. Le raisonnement business est simple : chaque friction ajoutée au processus de résiliation retient un pourcentage d'utilisateurs. Mais ce raisonnement est profondément toxique car il traite la rétention comme une prison, pas comme une valeur.",
        en: "The Roach Motel is perhaps the most widespread and directly harmful dark pattern. Subscribing takes 30 seconds. Unsubscribing takes 45 minutes, three pages of \"are you sure?\", a mandatory phone call, and a confirmation email that never arrives. Amazon Prime faced FTC proceedings for this exact pattern. The New York Times required a phone call to cancel a digital subscription. This isn't bad UX — it's deliberately hostile design. The business reasoning is simple: every friction added to the cancellation process retains a percentage of users. But this reasoning is deeply toxic because it treats retention as a prison, not as value.",
      },
      bullets: {
        fr: [
          "Règle éthique : la résiliation doit être aussi simple que l'inscription. Point.",
          "Les utilisateurs retenus par la friction deviennent des détracteurs actifs de votre marque.",
          "La FTC et l'UE sévissent de plus en plus contre les processus de résiliation abusifs.",
          "Un utilisateur qui part facilement peut revenir. Un utilisateur piégé ne revient jamais.",
        ],
        en: [
          "Ethical rule: cancellation must be as simple as sign-up. Period.",
          "Users retained through friction become active detractors of your brand.",
          "The FTC and EU are increasingly cracking down on abusive cancellation processes.",
          "A user who leaves easily may come back. A trapped user never returns.",
        ],
      },
    },
    {
      id: "privacy-zuckering",
      title: {
        fr: "Le Privacy Zuckering : vos données contre votre gré",
        en: "Privacy Zuckering: your data against your will",
      },
      content: {
        fr: "Nommé d'après Mark Zuckerberg pour des raisons évidentes, le Privacy Zuckering décrit les techniques qui poussent l'utilisateur à partager plus de données personnelles qu'il ne le souhaite. Les paramètres de confidentialité enfouis sous 7 niveaux de menus. Les options de partage activées par défaut. Les formulations qui rendent le refus de partage plus effrayant que le partage lui-même (\"Si vous désactivez cette option, votre expérience sera dégradée\"). Facebook a été condamné à des milliards de dollars d'amendes pour ces pratiques. Google a restructuré ses paramètres de confidentialité sous pression réglementaire. Mais le problème persiste car l'économie de la donnée récompense structurellement la collecte maximale.",
        en: "Named after Mark Zuckerberg for obvious reasons, Privacy Zuckering describes techniques that push users to share more personal data than they intend. Privacy settings buried under 7 levels of menus. Sharing options enabled by default. Wording that makes refusing to share scarier than sharing itself (\"If you disable this option, your experience will be degraded\"). Facebook was fined billions of dollars for these practices. Google restructured its privacy settings under regulatory pressure. But the problem persists because the data economy structurally rewards maximum collection.",
      },
      highlight: {
        fr: "Le privacy by design n'est pas un obstacle au business — c'est un avantage compétitif. Apple l'a prouvé en faisant de la vie privée un argument de vente.",
        en: "Privacy by design is not a business obstacle — it's a competitive advantage. Apple proved it by making privacy a selling point.",
      },
    },
    {
      id: "cookie-nightmare",
      title: {
        fr: "Les cookie banners : le plus grand dark pattern collectif de l'histoire",
        en: "Cookie banners: the greatest collective dark pattern in history",
      },
      content: {
        fr: "Je prends une position forte ici : les cookie banners tels qu'ils existent aujourd'hui sont le plus grand échec collectif du design éthique. Le RGPD exigeait un consentement libre, spécifique, éclairé et univoque. Ce que l'industrie a livré : des pop-ups où \"Tout accepter\" est un gros bouton vert et \"Gérer mes choix\" est un lien gris en 10px qui mène à un labyrinthe de 47 toggles pré-cochés. C'est un dark pattern à l'échelle industrielle, et il touche des milliards d'utilisateurs quotidiennement. Le résultat est un désastre pour tout le monde : les utilisateurs souffrent de consent fatigue et cliquent \"Tout accepter\" par épuisement, ce qui rend le consentement juridiquement discutable et éthiquement vide.",
        en: "I'll take a strong position here: cookie banners as they exist today are the greatest collective failure of ethical design. GDPR required consent that is freely given, specific, informed, and unambiguous. What the industry delivered: pop-ups where \"Accept All\" is a big green button and \"Manage Choices\" is a gray 10px link leading to a maze of 47 pre-checked toggles. This is an industrial-scale dark pattern, and it affects billions of users daily. The result is a disaster for everyone: users suffer from consent fatigue and click \"Accept All\" out of exhaustion, making consent legally questionable and ethically empty.",
      },
      bullets: {
        fr: [
          "\"Tout accepter\" et \"Tout refuser\" doivent avoir exactement la même visibilité et la même facilité d'accès.",
          "Les toggles doivent être désactivés par défaut (opt-in, pas opt-out).",
          "Le refus ne doit jamais être plus laborieux que l'acceptation.",
          "La CNIL sanctionne de plus en plus ces pratiques — Google a reçu 150M€ d'amende en 2022.",
        ],
        en: [
          "\"Accept All\" and \"Reject All\" must have exactly the same visibility and ease of access.",
          "Toggles must be off by default (opt-in, not opt-out).",
          "Rejection must never be more laborious than acceptance.",
          "The CNIL increasingly sanctions these practices — Google received a 150M euro fine in 2022.",
        ],
      },
    },
    {
      id: "business-pressure",
      title: {
        fr: "La pression business : quand on vous demande de manipuler",
        en: "Business pressure: when you're asked to manipulate",
      },
      content: {
        fr: "Soyons honnêtes : la plupart des dark patterns ne naissent pas de la malveillance des designers mais de la pression business. \"On doit augmenter les inscriptions de 20% ce trimestre.\" \"Le taux de désabonnement est trop élevé, rends la résiliation plus difficile.\" \"Ajoute une pop-up de rétention.\" Chaque designer a été confronté à ces demandes. La question n'est pas de savoir si ça arrivera — c'est de savoir comment vous répondrez. Ma position est claire : le designer a le devoir professionnel de refuser les dark patterns, même sous pression hiérarchique. Pas en claquant la porte, mais en proposant des alternatives éthiques qui servent le même objectif business.",
        en: "Let's be honest: most dark patterns don't come from designer malice but from business pressure. \"We need to increase sign-ups by 20% this quarter.\" \"The churn rate is too high, make cancellation harder.\" \"Add a retention pop-up.\" Every designer has faced these demands. The question isn't whether it will happen — it's how you'll respond. My position is clear: the designer has a professional duty to refuse dark patterns, even under hierarchical pressure. Not by slamming the door, but by proposing ethical alternatives that serve the same business objective.",
      },
      highlight: {
        fr: "Chaque dark pattern est un emprunt sur la confiance. Il booste les métriques aujourd'hui et détruit la marque demain. C'est de la dette UX à taux usuraire.",
        en: "Every dark pattern is a loan against trust. It boosts metrics today and destroys the brand tomorrow. It's UX debt at usurious rates.",
      },
    },
    {
      id: "legal-landscape",
      title: {
        fr: "Le paysage légal : le droit rattrape enfin le design",
        en: "The legal landscape: law finally catches up with design",
      },
      content: {
        fr: "Pendant longtemps, les dark patterns ont opéré dans un vide juridique. Ce n'est plus le cas. Le Digital Services Act (DSA) de l'UE interdit explicitement les \"interfaces trompeuses\" sur les plateformes. Le Digital Markets Act (DMA) impose des obligations spécifiques aux gatekeepers. La FTC américaine a engagé des poursuites contre Amazon, Epic Games et d'autres pour des dark patterns spécifiques. La CNIL française sanctionne les cookie banners non conformes. Le California Privacy Rights Act (CPRA) inclut des provisions anti-dark patterns. Le message est clair : ce qui était toléré hier est sanctionné aujourd'hui. Les designers et les entreprises qui continuent d'implémenter des dark patterns prennent un risque juridique croissant.",
        en: "For a long time, dark patterns operated in a legal vacuum. That's no longer the case. The EU's Digital Services Act (DSA) explicitly prohibits \"deceptive interfaces\" on platforms. The Digital Markets Act (DMA) imposes specific obligations on gatekeepers. The US FTC has pursued legal action against Amazon, Epic Games, and others for specific dark patterns. The French CNIL sanctions non-compliant cookie banners. The California Privacy Rights Act (CPRA) includes anti-dark pattern provisions. The message is clear: what was tolerated yesterday is sanctioned today. Designers and companies that continue implementing dark patterns face increasing legal risk.",
      },
      bullets: {
        fr: [
          "DSA (2024) : interdit les interfaces trompeuses sur les plateformes de plus de 45M d'utilisateurs EU.",
          "DMA (2024) : obligations pour les gatekeepers (Google, Apple, Meta, Amazon, Microsoft).",
          "FTC : amendes record contre Amazon (25M$) pour dark patterns sur Alexa et Ring.",
          "CNIL : amendes contre Google (150M€) et Microsoft (60M€) pour cookie banners manipulateurs.",
        ],
        en: [
          "DSA (2024): prohibits deceptive interfaces on platforms with over 45M EU users.",
          "DMA (2024): obligations for gatekeepers (Google, Apple, Meta, Amazon, Microsoft).",
          "FTC: record fines against Amazon ($25M) for dark patterns on Alexa and Ring.",
          "CNIL: fines against Google (150M euro) and Microsoft (60M euro) for manipulative cookie banners.",
        ],
      },
    },
    {
      id: "ethical-persuasion",
      title: {
        fr: "La persuasion éthique : l'alternative qui fonctionne",
        en: "Ethical persuasion: the alternative that works",
      },
      content: {
        fr: "La bonne nouvelle : il existe des techniques de persuasion parfaitement éthiques qui servent à la fois l'utilisateur et le business. La preuve sociale authentique (\"12 000 designers utilisent déjà cet outil\") est transparente et vérifiable. Les valeurs par défaut intelligentes aident l'utilisateur à prendre de meilleures décisions sans le tromper. La gamification bien conçue (Duolingo) motive sans manipuler. Les recommandations personnalisées pertinentes créent de la valeur pour l'utilisateur, pas seulement pour l'entreprise. Le design éthique n'est pas du design naïf — c'est du design intelligent qui aligne les intérêts de l'utilisateur et du business sur le long terme.",
        en: "The good news: there are perfectly ethical persuasion techniques that serve both the user and the business. Authentic social proof (\"12,000 designers already use this tool\") is transparent and verifiable. Smart defaults help users make better decisions without deceiving them. Well-designed gamification (Duolingo) motivates without manipulating. Relevant personalized recommendations create value for the user, not just the company. Ethical design isn't naive design — it's intelligent design that aligns user and business interests in the long term.",
      },
      bullets: {
        fr: [
          "Preuve sociale authentique : données réelles, vérifiables, contextualisées.",
          "Defaults intelligents : pré-sélectionnez l'option qui sert le mieux l'utilisateur, pas l'entreprise.",
          "Transparence radicale : montrez clairement ce que chaque choix implique.",
          "Gamification éthique : récompensez le progrès réel, pas l'engagement artificiel.",
          "Urgence réelle : signalez les délais authentiques, jamais les fausses raretés.",
        ],
        en: [
          "Authentic social proof: real, verifiable, contextualized data.",
          "Smart defaults: pre-select the option that best serves the user, not the company.",
          "Radical transparency: clearly show what each choice entails.",
          "Ethical gamification: reward real progress, not artificial engagement.",
          "Real urgency: signal authentic deadlines, never fake scarcity.",
        ],
      },
    },
    {
      id: "designer-responsibility",
      title: {
        fr: "La responsabilité du designer : un devoir professionnel",
        en: "The designer's responsibility: a professional duty",
      },
      content: {
        fr: "Les médecins ont le serment d'Hippocrate. Les avocats ont le secret professionnel. Les architectes ont la responsabilité de la sécurité structurelle. Et les designers ? Nous concevons les choix de milliards de personnes sans aucun cadre déontologique contraignant. C'est un problème fondamental. En attendant qu'un tel cadre émerge — et il émergera, c'est une certitude — chaque designer porte une responsabilité individuelle. Refuser de concevoir un dark pattern est un acte professionnel, pas un acte de rébellion. Former vos collègues à les reconnaître est un investissement dans la qualité du produit. Documenter et communiquer les alternatives éthiques est votre valeur ajoutée en tant que senior designer.",
        en: "Doctors have the Hippocratic oath. Lawyers have professional secrecy. Architects have structural safety responsibility. And designers? We design the choices of billions of people without any binding ethical framework. This is a fundamental problem. Until such a framework emerges — and it will, that's certain — every designer bears individual responsibility. Refusing to design a dark pattern is a professional act, not an act of rebellion. Training your colleagues to recognize them is an investment in product quality. Documenting and communicating ethical alternatives is your added value as a senior designer.",
      },
      highlight: {
        fr: "Votre portfolio ne devrait pas seulement montrer ce que vous avez conçu. Il devrait aussi montrer ce que vous avez refusé de concevoir.",
        en: "Your portfolio shouldn't just show what you designed. It should also show what you refused to design.",
      },
    },
    {
      id: "bright-patterns",
      title: {
        fr: "Les bright patterns : concevoir pour l'autonomie de l'utilisateur",
        en: "Bright patterns: designing for user autonomy",
      },
      content: {
        fr: "Si les dark patterns manipulent, les bright patterns émancipent. Un bright pattern est un choix de design qui aide activement l'utilisateur à prendre des décisions éclairées, même quand cela va à l'encontre de l'intérêt immédiat de l'entreprise. La fonctionnalité \"Screen Time\" d'Apple aide les utilisateurs à réduire leur usage — contre l'intérêt à court terme d'Apple. Le résumé des conditions d'utilisation de certaines apps transforme un mur de texte juridique en information actionnable. Les comparateurs de prix intégrés montrent quand un concurrent est moins cher. Ces choix semblent contre-intuitifs pour le business, mais ils construisent une confiance qui est la ressource la plus précieuse de l'économie numérique.",
        en: "If dark patterns manipulate, bright patterns emancipate. A bright pattern is a design choice that actively helps users make informed decisions, even when it goes against the company's immediate interest. Apple's Screen Time feature helps users reduce their usage — against Apple's short-term interest. Terms of service summaries in some apps transform a wall of legal text into actionable information. Built-in price comparators show when a competitor is cheaper. These choices seem counterintuitive for business, but they build trust, which is the most precious resource in the digital economy.",
      },
      bullets: {
        fr: [
          "Screen Time / Digital Wellbeing : aider l'utilisateur à maîtriser son usage.",
          "Résumés de confidentialité lisibles : transformer le jargon juridique en langage humain.",
          "Options de suppression de compte claires et accessibles.",
          "Indicateurs de qualité de mot de passe : protéger l'utilisateur contre lui-même.",
          "Export de données facile : laisser l'utilisateur partir avec ses données.",
        ],
        en: [
          "Screen Time / Digital Wellbeing: help users control their usage.",
          "Readable privacy summaries: transform legal jargon into human language.",
          "Clear and accessible account deletion options.",
          "Password strength indicators: protect users against themselves.",
          "Easy data export: let users leave with their data.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Le designer éthique est un designer courageux",
        en: "The ethical designer is a courageous designer",
      },
      content: {
        fr: "Le design éthique n'est pas un luxe réservé aux entreprises qui peuvent se le permettre. C'est un standard professionnel minimum, au même titre que l'accessibilité ou la sécurité. Chaque dark pattern que vous refusez de concevoir est une victoire pour les millions d'utilisateurs qui ne savent même pas qu'ils sont manipulés. Le courage du designer éthique ne réside pas dans la dénonciation publique — il réside dans les conversations quotidiennes avec les stakeholders, dans les propositions d'alternatives éthiques aussi performantes, dans l'éducation patiente de ses équipes. Le futur du design sera éthique ou ne sera pas. Et ce futur commence par les choix que vous faites aujourd'hui dans votre prochain Figma.",
        en: "Ethical design is not a luxury reserved for companies that can afford it. It's a minimum professional standard, just like accessibility or security. Every dark pattern you refuse to design is a victory for the millions of users who don't even know they're being manipulated. The ethical designer's courage doesn't lie in public denunciation — it lies in daily conversations with stakeholders, in proposing ethical alternatives that perform just as well, in patiently educating their teams. The future of design will be ethical or it won't be. And that future starts with the choices you make today in your next Figma file.",
      },
      highlight: {
        fr: "Dans dix ans, les dark patterns seront vus comme les publicités mensongères des années 50 : une pratique honteuse que toute une industrie a normalisée. Soyez du bon côté de l'histoire.",
        en: "In ten years, dark patterns will be seen like the deceptive advertising of the 1950s: a shameful practice that an entire industry normalized. Be on the right side of history.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Brignull, H. (2010). Dark Patterns: Deception vs. Honesty in UI Design. Deceptive Design (formerly darkpatterns.org).",
      url: "https://www.deceptive.design/",
    },
    {
      id: 2,
      label: "Gray, C.M., Kou, Y., Battles, B., Hoggatt, J., & Toombs, A.L. (2018). The Dark (Patterns) Side of UX Design. CHI '18.",
      url: "https://doi.org/10.1145/3173574.3174108",
    },
    {
      id: 3,
      label: "Mathur, A., Acar, G., Friedman, M.J., et al. (2019). Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites. CSCW '19.",
      url: "https://doi.org/10.1145/3359183",
    },
    {
      id: 4,
      label: "European Commission (2022). Digital Services Act (DSA) — Regulation (EU) 2022/2065.",
      url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj",
    },
    {
      id: 5,
      label: "European Commission (2022). Digital Markets Act (DMA) — Regulation (EU) 2022/1925.",
      url: "https://eur-lex.europa.eu/eli/reg/2022/1925/oj",
    },
    {
      id: 6,
      label: "Federal Trade Commission (2022). Bringing Dark Patterns to Light. FTC Staff Report.",
      url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
    },
    {
      id: 7,
      label: "CNIL (2022). Délibération SAN-2022-008 du 29 décembre 2022 à l'encontre de MICROSOFT IRELAND OPERATIONS LIMITED.",
      url: "https://www.cnil.fr/fr/cookies-la-cnil-sanctionne-microsoft-ireland-operations-limited",
    },
    {
      id: 8,
      label: "Narayanan, A., Mathur, A., Chetty, M., & Kshirsagar, M. (2020). Dark Patterns: Past, Present, and Future. Queue, 18(2), 67-92.",
      url: "https://doi.org/10.1145/3400899.3400901",
    },
  ],
};
