import type { CourseData } from "./fitts-data";

export const affordanceData: CourseData = {
  slug: "affordance-don-norman",
  chapter: 6,
  title: {
    fr: "L'Affordance selon Don Norman",
    en: "Don Norman's Affordance",
  },
  subtitle: {
    fr: "Ce que les Objets Nous Disent Sans un Mot",
    en: "What Objects Tell Us Without a Word",
  },
  readingTime: 16,
  category: "ux",
  description: {
    fr: "Comprendre la distinction cruciale entre affordance et signifiant, et pourquoi la plupart des designers confondent les deux au detriment de leurs utilisateurs.",
    en: "Understanding the crucial distinction between affordance and signifier, and why most designers confuse the two to their users' detriment.",
  },
  sections: [
    {
      id: "hook",
      title: {
        fr: "Pourquoi poussez-vous une porte qu'il faut tirer ?",
        en: "Why do you push a door that needs to be pulled?",
      },
      content: {
        fr: "Vous etes devant une porte vitrée dans un immeuble de bureaux. Vous poussez. Elle ne bouge pas. Vous tirez. Elle s'ouvre. Ce n'est pas votre faute. C'est un echec de design si fondamental qu'on l'appelle une \"Norman Door\" -- du nom de Don Norman lui-meme. Ce moment de confusion quotidien illustre un concept que 90% des designers utilisent mal : l'affordance. Et cette confusion n'est pas anecdotique. Elle coute des millions en support utilisateur, en abandons de parcours, et en frustration silencieuse.",
        en: "You are standing in front of a glass door in an office building. You push. It does not move. You pull. It opens. This is not your fault. It is a design failure so fundamental that it is called a \"Norman Door\" -- named after Don Norman himself. This daily moment of confusion illustrates a concept that 90% of designers misuse: affordance. And this confusion is not trivial. It costs millions in user support, journey abandonment, and silent frustration.",
      },
      highlight: {
        fr: "Si un utilisateur echoue a utiliser votre interface, ce n'est jamais un probleme d'utilisateur. C'est un probleme de design. Toujours.",
        en: "If a user fails to use your interface, it is never a user problem. It is a design problem. Always.",
      },
    },
    {
      id: "definition",
      title: {
        fr: "Affordance : ce que le mot signifie vraiment",
        en: "Affordance: what the word really means",
      },
      content: {
        fr: "L'affordance est la relation entre les proprietes d'un objet et les capacites de l'agent qui determine comment l'objet peut etre utilise. Une chaise afforde de s'asseoir -- pas parce qu'elle vous le dit, mais parce que sa surface plate, sa hauteur et sa solidite le permettent physiquement. Une affordance existe independamment de la perception de l'utilisateur. Que vous voyiez le bouton ou non, il afforde d'etre presse. C'est la ou la confusion commence, et c'est la ou Don Norman a apporte une clarification decisive que trop de designers ignorent encore.",
        en: "Affordance is the relationship between the properties of an object and the capabilities of the agent that determines how the object can be used. A chair affords sitting -- not because it tells you so, but because its flat surface, height, and solidity physically allow it. An affordance exists independently of user perception. Whether you see the button or not, it affords pressing. This is where the confusion begins, and this is where Don Norman brought a decisive clarification that too many designers still ignore.",
      },
      highlight: {
        fr: "L'affordance n'est pas ce qu'un objet suggere visuellement. C'est ce qu'il permet physiquement. La distinction est fondamentale.",
        en: "Affordance is not what an object visually suggests. It is what it physically allows. The distinction is fundamental.",
      },
    },
    {
      id: "norman-vs-gibson",
      title: {
        fr: "Gibson vs Norman : le debat qui a redéfini le design",
        en: "Gibson vs Norman: the debate that redefined design",
      },
      content: {
        fr: "James J. Gibson a introduit le terme en 1977 dans le cadre de la psychologie ecologique. Pour Gibson, les affordances sont des proprietes de l'environnement : elles existent objectivement, independamment de l'experience ou de la culture de l'observateur. Un sol plat afforde la marche, point. Don Norman a repris le concept en 1988 dans \"The Design of Everyday Things\" mais l'a transforme. Il a introduit la notion d'affordance percue : ce que l'utilisateur croit pouvoir faire avec un objet. Et c'est cette perception qui gouverne le comportement, pas la realite physique. Norman a ensuite admis que son usage initial du terme etait imprecis, et a introduit le concept de \"signifiant\" pour corriger cette ambiguite.",
        en: "James J. Gibson introduced the term in 1977 within the framework of ecological psychology. For Gibson, affordances are properties of the environment: they exist objectively, regardless of the observer's experience or culture. A flat floor affords walking, period. Don Norman adopted the concept in 1988 in \"The Design of Everyday Things\" but transformed it. He introduced the notion of perceived affordance: what the user believes they can do with an object. And it is this perception that governs behavior, not physical reality. Norman later admitted his initial use of the term was imprecise, and introduced the concept of \"signifier\" to correct this ambiguity.",
      },
      bullets: {
        fr: [
          "Gibson (1977) : L'affordance est une propriete physique objective de l'environnement.",
          "Norman (1988) : L'affordance percue -- ce que l'utilisateur croit possible -- est ce qui compte en design.",
          "Norman (2013, revision) : Le signifiant est le vrai outil du designer. L'affordance est la propriete, le signifiant est l'indice qui la communique.",
        ],
        en: [
          "Gibson (1977): Affordance is an objective physical property of the environment.",
          "Norman (1988): Perceived affordance -- what the user believes is possible -- is what matters in design.",
          "Norman (2013, revision): The signifier is the designer's real tool. Affordance is the property, the signifier is the cue that communicates it.",
        ],
      },
    },
    {
      id: "signifiers",
      title: {
        fr: "Les signifiants : le vrai outil du designer d'interface",
        en: "Signifiers: the real tool of the interface designer",
      },
      content: {
        fr: "Voici la verite que je defends : en tant que designer d'interface, vous ne concevez presque jamais des affordances. Vous concevez des signifiants. Un bouton dans une interface n'a pas d'affordance physique -- c'est un rectangle de pixels. Ce qui le rend cliquable dans l'esprit de l'utilisateur, c'est le signifiant : sa couleur, son ombre portee, son label, sa forme convexe qui evoque un objet physique pressable. Le signifiant est le signal perceptible qui indique a l'utilisateur quelles actions sont possibles, ou elles sont possibles, et comment les executer. Sans signifiant, l'affordance est invisible. Et une affordance invisible est inutile.",
        en: "Here is the truth I stand by: as an interface designer, you almost never design affordances. You design signifiers. A button in an interface has no physical affordance -- it is a rectangle of pixels. What makes it clickable in the user's mind is the signifier: its color, its drop shadow, its label, its convex shape that evokes a pressable physical object. The signifier is the perceivable signal that tells the user what actions are possible, where they are possible, and how to execute them. Without a signifier, the affordance is invisible. And an invisible affordance is useless.",
      },
      highlight: {
        fr: "Arretez de dire \"ce bouton a une bonne affordance\". Dites \"ce bouton a un bon signifiant\". La precision du vocabulaire est la precision de la pensee.",
        en: "Stop saying \"this button has good affordance.\" Say \"this button has a good signifier.\" Precision of vocabulary is precision of thought.",
      },
      bullets: {
        fr: [
          "Un lien souligne et bleu : signifiant de cliquabilite.",
          "Une poignee striee sur un tiroir : signifiant de prehension.",
          "Un champ de texte avec un placeholder : signifiant de saisie.",
          "Un curseur en forme de main au survol : signifiant d'interactivite.",
        ],
        en: [
          "An underlined blue link: signifier of clickability.",
          "A ribbed handle on a drawer: signifier of gripping.",
          "A text field with a placeholder: signifier of input.",
          "A hand-shaped cursor on hover: signifier of interactivity.",
        ],
      },
    },
    {
      id: "mapping",
      title: {
        fr: "Le mapping : quand la disposition parle d'elle-meme",
        en: "Mapping: when layout speaks for itself",
      },
      content: {
        fr: "Le mapping est un concept etroitement lie a l'affordance que Norman considere comme l'un des piliers du bon design. Il designe la relation spatiale entre une commande et son effet. Un bon mapping est naturel : il exploite des analogies physiques et des patterns culturels pour que l'utilisateur comprenne instantanement quel controle agit sur quel element. Les plaques de cuisson illustrent parfaitement le probleme. Quatre bruleurs disposes en carre, mais quatre boutons alignes : quel bouton controle quel bruleur ? Ce mauvais mapping force l'utilisateur a lire des etiquettes a chaque utilisation. Un mapping naturel disposerait les boutons dans la meme configuration spatiale que les bruleurs.",
        en: "Mapping is a concept closely tied to affordance that Norman considers one of the pillars of good design. It refers to the spatial relationship between a control and its effect. Good mapping is natural: it leverages physical analogies and cultural patterns so the user instantly understands which control acts on which element. Stovetops perfectly illustrate the problem. Four burners arranged in a square, but four knobs in a line: which knob controls which burner? This poor mapping forces the user to read labels every time. Natural mapping would arrange the knobs in the same spatial configuration as the burners.",
      },
      highlight: {
        fr: "Si votre interface necessite des etiquettes pour expliquer quel bouton fait quoi, votre mapping a echoue. Le meilleur design est celui qui n'a pas besoin d'explication.",
        en: "If your interface needs labels to explain which button does what, your mapping has failed. The best design is the one that needs no explanation.",
      },
      bullets: {
        fr: [
          "Bon mapping : un slider horizontal pour un volume, un scroll vertical pour une page verticale.",
          "Mauvais mapping : des boutons + et - pour controler un element que l'on pourrait manipuler directement.",
          "Mapping naturel en interface : les controles proches de l'element qu'ils affectent.",
        ],
        en: [
          "Good mapping: a horizontal slider for volume, vertical scroll for a vertical page.",
          "Bad mapping: + and - buttons to control an element that could be directly manipulated.",
          "Natural mapping in interfaces: controls close to the element they affect.",
        ],
      },
    },
    {
      id: "flat-design-crisis",
      title: {
        fr: "La crise du flat design : quand l'esthétique a tué l'utilisabilité",
        en: "The flat design crisis: when aesthetics killed usability",
      },
      content: {
        fr: "Je le dis sans detour : le flat design a provoque une regression massive de l'utilisabilite du web et du mobile. En supprimant les ombres, les degrades, les bordures et les textures -- tous des signifiants visuels d'interactivite -- les designers ont rendu les interfaces plus \"propres\" mais objectivement plus difficiles a utiliser. Les etudes du Nielsen Norman Group en 2015 l'ont demontre : les utilisateurs passent 22% plus de temps a identifier les elements cliquables dans les interfaces flat. Ce n'est pas un progres. C'est un recul. L'evolution vers iOS 7 en 2013 est l'exemple canonique. Apple a supprime le skeuomorphisme au profit d'un design ultra-plat ou les boutons n'avaient plus de contour, les liens n'etaient que du texte colore, et les zones interactives se fondaient dans le contenu statique.",
        en: "I will say it bluntly: flat design caused a massive regression in web and mobile usability. By removing shadows, gradients, borders, and textures -- all visual signifiers of interactivity -- designers made interfaces \"cleaner\" but objectively harder to use. Nielsen Norman Group studies in 2015 demonstrated this: users spend 22% more time identifying clickable elements in flat interfaces. This is not progress. It is regression. The shift to iOS 7 in 2013 is the canonical example. Apple removed skeuomorphism in favor of an ultra-flat design where buttons had no borders, links were just colored text, and interactive areas blended into static content.",
      },
      highlight: {
        fr: "Un design epure n'est pas un design efficace si l'utilisateur ne sait plus ou cliquer. La beaute sans utilisabilite n'est que de la decoration.",
        en: "A clean design is not an effective design if the user no longer knows where to click. Beauty without usability is just decoration.",
      },
    },
    {
      id: "mobile-affordance",
      title: {
        fr: "L'affordance mobile : le defi du toucher sans retour",
        en: "Mobile affordance: the challenge of touch without feedback",
      },
      content: {
        fr: "Le mobile a fondamentalement change la nature des signifiants. Sur desktop, le curseur de souris joue un role crucial de signifiant : il change de forme au survol d'un element interactif (fleche vers main, vers curseur de texte). Sur mobile, il n'y a pas de hover state. L'utilisateur n'a aucun moyen de \"sonder\" l'interface avant d'agir. Il doit deviner ou toucher, puis observer le resultat. Cela place une pression enorme sur les signifiants visuels statiques. Chaque element interactif doit communiquer son role sans aucune interaction prealable. Les conventions sont devenues le filet de securite : le hamburger menu, le swipe pour supprimer, le pull-to-refresh. Ces patterns ne sont pas des affordances -- ce sont des conventions sociales apprises.",
        en: "Mobile has fundamentally changed the nature of signifiers. On desktop, the mouse cursor plays a crucial signifier role: it changes shape when hovering over an interactive element (arrow to hand, to text cursor). On mobile, there is no hover state. The user has no way to \"probe\" the interface before acting. They must guess where to touch, then observe the result. This places enormous pressure on static visual signifiers. Every interactive element must communicate its role without any prior interaction. Conventions have become the safety net: the hamburger menu, swipe to delete, pull-to-refresh. These patterns are not affordances -- they are learned social conventions.",
      },
      bullets: {
        fr: [
          "Pas de hover state : l'utilisateur ne peut pas explorer avant d'agir.",
          "Le toucher est imprecis : les zones interactives doivent etre genereuses (minimum 44px selon Apple, 48dp selon Material).",
          "Les gestes caches (swipe, long press, pinch) sont des affordances sans signifiant -- dangereux pour la decouverte.",
          "Le retour haptique est le nouveau signifiant : il confirme l'action par le toucher.",
        ],
        en: [
          "No hover state: the user cannot explore before acting.",
          "Touch is imprecise: interactive areas must be generous (minimum 44px per Apple, 48dp per Material).",
          "Hidden gestures (swipe, long press, pinch) are affordances without signifiers -- dangerous for discoverability.",
          "Haptic feedback is the new signifier: it confirms action through touch.",
        ],
      },
    },
    {
      id: "ai-challenge",
      title: {
        fr: "L'IA brise les patterns d'affordance traditionnels",
        en: "AI breaks traditional affordance patterns",
      },
      content: {
        fr: "Les interfaces IA posent un probleme d'affordance inedit dans l'histoire du design. Un champ de prompt comme celui de ChatGPT ressemble a un champ de recherche. Mais ce qu'il afforde est radicalement different : il accepte des instructions complexes, du code, des demandes creatives, des analyses de documents. Aucun signifiant visuel ne communique cette richesse de possibilites. L'utilisateur projette ses modeles mentaux de la recherche Google sur un outil fondamentalement different. Resultat : la majorite des utilisateurs n'exploitent qu'une fraction des capacites de l'IA. Le design conversationnel amplifie le probleme. Quand l'interface est une page blanche avec un curseur clignotant, ou sont les signifiants ? Comment l'utilisateur sait-il ce qu'il peut faire ? C'est le defi d'affordance de notre generation.",
        en: "AI interfaces pose an affordance problem unprecedented in design history. A prompt field like ChatGPT's looks like a search field. But what it affords is radically different: it accepts complex instructions, code, creative requests, document analysis. No visual signifier communicates this richness of possibilities. Users project their mental models from Google search onto a fundamentally different tool. Result: the majority of users exploit only a fraction of AI capabilities. Conversational design amplifies the problem. When the interface is a blank page with a blinking cursor, where are the signifiers? How does the user know what they can do? This is the affordance challenge of our generation.",
      },
      highlight: {
        fr: "L'interface IA la plus repandue au monde -- un champ de texte vide -- est aussi la plus pauvre en signifiants. Nous avons construit des systemes extraordinaires derriere des portes invisibles.",
        en: "The most widespread AI interface in the world -- an empty text field -- is also the poorest in signifiers. We have built extraordinary systems behind invisible doors.",
      },
    },
    {
      id: "cultural-affordance",
      title: {
        fr: "L'affordance culturelle : ce qui est evident ici est opaque ailleurs",
        en: "Cultural affordance: what is obvious here is opaque elsewhere",
      },
      content: {
        fr: "Les signifiants ne sont pas universels. Ils sont profondement ancres dans la culture, l'age et l'experience technologique de l'utilisateur. L'icone de disquette pour \"sauvegarder\" est un signifiant qui fonctionne par convention pour une generation qui a connu les disquettes, mais qui est arbitraire pour la generation Z. Le hamburger menu (trois lignes horizontales) est devenu un standard, mais des etudes montrent que les utilisateurs de plus de 55 ans l'identifient beaucoup moins bien que les jeunes utilisateurs. La couleur rouge pour \"erreur\" ou \"danger\" n'a pas la meme signification dans toutes les cultures -- en Chine, le rouge est associe a la chance et a la prosperite.",
        en: "Signifiers are not universal. They are deeply rooted in the culture, age, and technological experience of the user. The floppy disk icon for \"save\" is a signifier that works by convention for a generation that knew floppy disks, but is arbitrary for Generation Z. The hamburger menu (three horizontal lines) has become a standard, but studies show that users over 55 identify it much less well than younger users. The color red for \"error\" or \"danger\" does not carry the same meaning in all cultures -- in China, red is associated with luck and prosperity.",
      },
      bullets: {
        fr: [
          "Les icones sans label sont des signifiants faibles : le taux d'erreur augmente de 34% sans texte d'accompagnement (NNG, 2019).",
          "Les patterns d'interaction occidentaux (gauche-a-droite, haut-en-bas) ne fonctionnent pas pour les langues RTL.",
          "L'age impacte la reconnaissance : les utilisateurs seniors percoivent mieux les boutons skeumorphiques que les boutons flat.",
          "Les tests d'utilisabilite inter-culturels ne sont pas un luxe -- ils sont une necessite pour tout produit a ambition internationale.",
        ],
        en: [
          "Icons without labels are weak signifiers: error rate increases by 34% without accompanying text (NNG, 2019).",
          "Western interaction patterns (left-to-right, top-to-bottom) do not work for RTL languages.",
          "Age impacts recognition: senior users perceive skeuomorphic buttons better than flat buttons.",
          "Cross-cultural usability tests are not a luxury -- they are a necessity for any product with international ambition.",
        ],
      },
    },
    {
      id: "anti-affordance",
      title: {
        fr: "L'anti-affordance : concevoir pour empecher l'action",
        en: "Anti-affordance: designing to prevent action",
      },
      content: {
        fr: "Un concept rarement enseigne mais essentiel : l'anti-affordance. Il ne s'agit pas seulement de communiquer ce que l'utilisateur peut faire, mais aussi ce qu'il ne peut pas ou ne devrait pas faire. Un bouton grise (disabled) est un signifiant d'anti-affordance : il communique que l'action existe mais n'est pas disponible actuellement. Les barrieres physiques dans l'espace urbain (poteaux anti-voiture, accoudoirs centraux sur les bancs publics) sont des anti-affordances deliberees. En interface, le design defensif utilise l'anti-affordance pour prevenir les erreurs : confirmations avant suppression, delai avant validation irreversible, impossibilite de soumettre un formulaire incomplet.",
        en: "A concept rarely taught but essential: anti-affordance. It is not just about communicating what the user can do, but also what they cannot or should not do. A grayed-out button (disabled) is a signifier of anti-affordance: it communicates that the action exists but is not currently available. Physical barriers in urban space (anti-car posts, central armrests on public benches) are deliberate anti-affordances. In interfaces, defensive design uses anti-affordance to prevent errors: confirmations before deletion, delays before irreversible validation, inability to submit an incomplete form.",
      },
      highlight: {
        fr: "Le bon design ne se contente pas de faciliter les bonnes actions. Il rend les mauvaises actions difficiles ou impossibles. L'anti-affordance est le bouclier invisible de l'experience utilisateur.",
        en: "Good design does not just facilitate good actions. It makes bad actions difficult or impossible. Anti-affordance is the invisible shield of user experience.",
      },
    },
    {
      id: "testing",
      title: {
        fr: "Tester l'affordance : la methode du test des 5 secondes",
        en: "Testing affordance: the 5-second test method",
      },
      content: {
        fr: "L'affordance percue ne se mesure pas en reunions d'equipe entre designers. Elle se mesure avec des utilisateurs reels. Le test des 5 secondes est l'outil le plus simple et le plus redoutable : montrez un ecran pendant 5 secondes, puis demandez a l'utilisateur \"Ou cliqueriez-vous pour faire X ?\". Si la reponse est systematiquement correcte, vos signifiants fonctionnent. Si plus de 20% des utilisateurs hesitent ou pointent au mauvais endroit, votre design a un probleme d'affordance. Au-dela du test des 5 secondes, le suivi oculaire (eye tracking) revele ce que les utilisateurs voient avant de voir ce qu'ils comprennent. Les heatmaps de clics montrent ou les utilisateurs cliquent effectivement, y compris les \"faux clics\" sur des elements non interactifs -- signe d'un signifiant mal place.",
        en: "Perceived affordance is not measured in team meetings between designers. It is measured with real users. The 5-second test is the simplest and most formidable tool: show a screen for 5 seconds, then ask the user \"Where would you click to do X?\". If the answer is consistently correct, your signifiers work. If more than 20% of users hesitate or point to the wrong place, your design has an affordance problem. Beyond the 5-second test, eye tracking reveals what users see before revealing what they understand. Click heatmaps show where users actually click, including \"false clicks\" on non-interactive elements -- a sign of a misplaced signifier.",
      },
      bullets: {
        fr: [
          "Test des 5 secondes : rapide, peu couteux, revele les problemes de signifiants immediats.",
          "Eye tracking : identifie les zones ignorees et les signifiants qui n'attirent pas l'attention.",
          "Heatmaps de clics : les faux clics sont la preuve directe de signifiants defaillants.",
          "Tests A/B sur les signifiants : comparez un bouton flat vs. un bouton avec ombre pour mesurer l'impact sur le taux de clic.",
        ],
        en: [
          "5-second test: fast, inexpensive, reveals immediate signifier problems.",
          "Eye tracking: identifies ignored areas and signifiers that fail to attract attention.",
          "Click heatmaps: false clicks are direct proof of failing signifiers.",
          "A/B tests on signifiers: compare a flat button vs. a shadowed button to measure click rate impact.",
        ],
      },
    },
    {
      id: "beyond-visual",
      title: {
        fr: "Au-dela du visuel : affordances sonores, haptiques et spatiales",
        en: "Beyond visual: sonic, haptic, and spatial affordances",
      },
      content: {
        fr: "L'affordance ne se limite pas au canal visuel, et c'est une erreur de penser uniquement en termes de pixels. Le retour haptique de l'iPhone (Taptic Engine) cree des signifiants tactiles : la vibration subtile quand vous activez un toggle communique le changement d'etat sans regarder l'ecran. Les signifiants sonores sont partout : le \"clic\" d'une photo prise, le son de l'email envoye, le bruit de la corbeille qui se vide. En VR et AR, les affordances spatiales deviennent critiques. Un objet 3D dans un casque Meta Quest doit communiquer sa saisissabilite, sa lourdeur apparente, sa fragilite. Les conventions du monde physique deviennent les signifiants du monde virtuel. L'accessibilite exige aussi des signifiants non-visuels : les lecteurs d'ecran s'appuient sur les roles ARIA pour communiquer l'affordance d'un element interactif a un utilisateur non-voyant.",
        en: "Affordance is not limited to the visual channel, and it is a mistake to think only in terms of pixels. iPhone haptic feedback (Taptic Engine) creates tactile signifiers: the subtle vibration when you toggle a switch communicates the state change without looking at the screen. Sonic signifiers are everywhere: the \"click\" of a photo taken, the sent email sound, the emptying trash noise. In VR and AR, spatial affordances become critical. A 3D object in a Meta Quest headset must communicate its graspability, apparent weight, fragility. Physical world conventions become signifiers of the virtual world. Accessibility also demands non-visual signifiers: screen readers rely on ARIA roles to communicate the affordance of an interactive element to a blind user.",
      },
      bullets: {
        fr: [
          "Haptique : le Taptic Engine d'Apple a cree un nouveau langage de signifiants tactiles que les utilisateurs reconnaissent inconsciemment.",
          "Son : le design sonore est un signifiant sous-exploite -- le son de succes vs. le son d'erreur guide l'utilisateur sans interface visuelle.",
          "Spatial (VR/AR) : les affordances physiques retrouvent leur pertinence en realite mixte, ou les objets virtuels doivent se comporter comme des objets reels.",
          "Accessibilite : les attributs ARIA (role=button, aria-expanded) sont des signifiants programmatiques qui rendent l'affordance perceptible aux technologies d'assistance.",
        ],
        en: [
          "Haptic: Apple's Taptic Engine created a new language of tactile signifiers that users recognize unconsciously.",
          "Sound: sonic design is an underexploited signifier -- success sound vs. error sound guides the user without a visual interface.",
          "Spatial (VR/AR): physical affordances regain relevance in mixed reality, where virtual objects must behave like real objects.",
          "Accessibility: ARIA attributes (role=button, aria-expanded) are programmatic signifiers that make affordance perceptible to assistive technologies.",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Maitriser l'affordance, c'est maitriser la communication silencieuse",
        en: "Mastering affordance means mastering silent communication",
      },
      content: {
        fr: "L'affordance selon Don Norman n'est pas un concept academique a citer en entretien. C'est une grille de lecture qui devrait gouverner chaque decision de design. Chaque element de votre interface communique quelque chose -- ou echoue a communiquer. Chaque bouton, chaque icone, chaque zone interactive est un message silencieux que l'utilisateur doit decoder en millisecondes. Votre travail de designer n'est pas de creer de jolies interfaces. C'est de creer des signifiants si clairs que l'utilisateur n'a jamais conscience de les avoir interpretes. Le meilleur design est invisible -- pas parce qu'il est minimaliste, mais parce qu'il est immediatement compris.",
        en: "Don Norman's affordance is not an academic concept to cite in interviews. It is a reading framework that should govern every design decision. Every element of your interface communicates something -- or fails to communicate. Every button, every icon, every interactive area is a silent message that the user must decode in milliseconds. Your job as a designer is not to create pretty interfaces. It is to create signifiers so clear that the user never realizes they interpreted them. The best design is invisible -- not because it is minimalist, but because it is immediately understood.",
      },
      highlight: {
        fr: "Ne confondez plus jamais affordance et signifiant. Concevez des signifiants. Testez des signifiants. Iterez sur des signifiants. L'affordance est la promesse de l'objet. Le signifiant est votre outil pour la tenir.",
        en: "Never again confuse affordance and signifier. Design signifiers. Test signifiers. Iterate on signifiers. Affordance is the object's promise. The signifier is your tool to keep it.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Norman, D.A. (2013). The Design of Everyday Things: Revised and Expanded Edition. Basic Books.",
      url: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
    },
    {
      id: 2,
      label: "Gibson, J.J. (1977). The Theory of Affordances. In R.E. Shaw & J. Bransford (Eds.), Perceiving, Acting, and Knowing.",
    },
    {
      id: 3,
      label: "Norman, D.A. (2008). Signifiers, Not Affordances. Interactions, 15(6), 18-19. ACM.",
      url: "https://doi.org/10.1145/1409040.1409044",
    },
    {
      id: 4,
      label: "Nielsen Norman Group (2015). Flat UI Elements Attract Less Attention and Cause Uncertainty.",
      url: "https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/",
    },
    {
      id: 5,
      label: "Nielsen Norman Group (2019). Icon Usability: The Impact of Labels on User Performance.",
      url: "https://www.nngroup.com/articles/icon-usability/",
    },
    {
      id: 6,
      label: "McGrenere, J. & Ho, W. (2000). Affordances: Clarifying and Evolving a Concept. Graphics Interface 2000.",
      url: "https://doi.org/10.20380/GI2000.24",
    },
    {
      id: 7,
      label: "Gaver, W.W. (1991). Technology Affordances. CHI '91: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems.",
      url: "https://doi.org/10.1145/108844.108856",
    },
    {
      id: 8,
      label: "Apple Human Interface Guidelines — Materials and Visual Design.",
      url: "https://developer.apple.com/design/human-interface-guidelines/materials",
    },
  ],
};
