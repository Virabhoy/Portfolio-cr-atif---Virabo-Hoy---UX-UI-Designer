export interface CourseSection {
  id: string;
  title: { fr: string; en: string };
  content: { fr: string; en: string };
  highlight?: { fr: string; en: string };
  bullets?: { fr: string[]; en: string[] };
}

export interface CourseSource {
  id: number;
  label: string;
  url?: string;
}

export interface CourseData {
  slug: string;
  chapter: number;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  readingTime: number;
  description: { fr: string; en: string };
  category: "ux" | "ia";
  sections: CourseSection[];
  sources: CourseSource[];
}

export const iaDataCultureData: CourseData = {
  slug: "ia-data-culture",
  chapter: 29,
  title: {
    fr: "Vers une Culture Data & IA",
    en: "Towards a Data & AI Culture",
  },
  subtitle: {
    fr: "Transformer l'Organisation par la Donnée",
    en: "Transforming the Organization Through Data",
  },
  readingTime: 16,
  description: {
    fr: "Inspiré de la masterclass Sisley — construire une culture data & IA dans les organisations, casser les silos, prise de décision data-driven, conduite du changement, stratégies de formation, mesure de l'adoption.",
    en: "Based on the Sisley masterclass — building a data & AI culture in organizations, breaking silos, data-driven decision making, change management, training strategies, measuring adoption.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "Le Paradoxe de la Data",
        en: "The Data Paradox",
      },
      content: {
        fr: "Les entreprises n'ont jamais eu autant de données à leur disposition. CRM, analytics, IoT, réseaux sociaux — les sources se multiplient exponentiellement. Pourtant, la majorité des décisions stratégiques sont encore prises à l'instinct, au feeling, ou sur la base de rapports Excel obsolètes. Ce paradoxe révèle une vérité inconfortable : le problème n'est pas technologique, il est culturel. Avoir des données ne sert à rien si l'organisation n'a pas la culture pour les exploiter. La transformation data ne commence pas par un outil — elle commence par un changement de mentalité à tous les niveaux de l'entreprise.",
        en: "Companies have never had so much data at their disposal. CRM, analytics, IoT, social media — sources are multiplying exponentially. Yet, the majority of strategic decisions are still made on instinct, gut feeling, or based on outdated Excel reports. This paradox reveals an uncomfortable truth: the problem isn't technological, it's cultural. Having data is useless if the organization doesn't have the culture to exploit it. Data transformation doesn't start with a tool — it starts with a mindset shift at every level of the company.",
      },
      highlight: {
        fr: "90% des projets data échouent non pas pour des raisons techniques, mais parce que l'organisation n'était pas prête culturellement.",
        en: "90% of data projects fail not for technical reasons, but because the organization wasn't culturally ready.",
      },
    },
    {
      id: "what-is-data-culture",
      title: {
        fr: "Qu'est-ce qu'une Culture Data ?",
        en: "What is Data Culture?",
      },
      content: {
        fr: "Une culture data est un ensemble de valeurs, de pratiques et de comportements qui placent la donnée au cœur de chaque décision. Ce n'est pas un département ni un outil — c'est une manière de penser qui imprègne toute l'organisation. Dans une entreprise data-driven, un commercial ne dit pas 'je pense que ce marché est porteur' mais 'les données montrent une croissance de 23% sur ce segment'. Un designer ne dit pas 'j'aime ce layout' mais 'les tests A/B montrent 15% de conversion en plus'. La culture data transforme les opinions en hypothèses testables et les intuitions en insights vérifiables.",
        en: "Data culture is a set of values, practices, and behaviors that place data at the heart of every decision. It's not a department or a tool — it's a way of thinking that permeates the entire organization. In a data-driven company, a salesperson doesn't say 'I think this market has potential' but 'data shows 23% growth in this segment.' A designer doesn't say 'I like this layout' but 'A/B tests show 15% more conversion.' Data culture transforms opinions into testable hypotheses and intuitions into verifiable insights.",
      },
      bullets: {
        fr: [
          "Chaque décision s'appuie sur des données vérifiables",
          "L'expérimentation est encouragée et les échecs sont des apprentissages",
          "Les données sont accessibles à tous, pas réservées aux data analysts",
          "La literacy data est une compétence attendue à tous les niveaux",
        ],
        en: [
          "Every decision is backed by verifiable data",
          "Experimentation is encouraged and failures are learning opportunities",
          "Data is accessible to everyone, not reserved for data analysts",
          "Data literacy is an expected skill at every level",
        ],
      },
    },
    {
      id: "data-as-lever",
      title: {
        fr: "La Data comme Levier de Décision",
        en: "Data as a Decision Lever",
      },
      content: {
        fr: "Trop d'organisations confondent reporting et culture data. Produire des dashboards que personne ne consulte n'est pas de la data culture — c'est du théâtre analytique. La vraie valeur de la data émerge quand elle influence concrètement les décisions opérationnelles et stratégiques. Chez Sisley, la transformation a commencé par un constat simple : les équipes marketing prenaient des décisions média basées sur des habitudes historiques plutôt que sur la performance réelle. En rendant les données de performance accessibles et compréhensibles, les équipes ont pu réallouer les budgets vers les canaux les plus performants, augmentant le ROI marketing de 35% en un an.",
        en: "Too many organizations confuse reporting with data culture. Producing dashboards nobody consults isn't data culture — it's analytics theater. The real value of data emerges when it concretely influences operational and strategic decisions. At Sisley, the transformation began with a simple observation: marketing teams were making media decisions based on historical habits rather than actual performance. By making performance data accessible and understandable, teams could reallocate budgets to the highest-performing channels, increasing marketing ROI by 35% in one year.",
      },
      highlight: {
        fr: "Un dashboard que personne n'utilise est un échec coûteux. La data n'a de valeur que si elle change une décision.",
        en: "A dashboard nobody uses is an expensive failure. Data only has value if it changes a decision.",
      },
    },
    {
      id: "breaking-silos",
      title: {
        fr: "Casser les Silos : Data Mesh et Champions",
        en: "Breaking Silos: Data Mesh and Champions",
      },
      content: {
        fr: "Le plus grand obstacle à une culture data est organisationnel : les silos. Chaque département possède ses propres données, ses propres outils, ses propres définitions des KPIs. Le marketing mesure le succès différemment des ventes, qui le mesurent différemment du support client. Le data mesh est une approche qui décentralise la propriété des données : chaque domaine métier est responsable de ses propres données, les expose comme des 'produits data' standardisés, et garantit leur qualité. Les data champions — des ambassadeurs data dans chaque équipe — assurent le lien entre les équipes techniques et les métiers, traduisant les besoins business en questions data et vice versa.",
        en: "The biggest obstacle to data culture is organizational: silos. Each department owns its own data, its own tools, its own KPI definitions. Marketing measures success differently from sales, which measures it differently from customer support. Data mesh is an approach that decentralizes data ownership: each business domain is responsible for its own data, exposes it as standardized 'data products,' and guarantees its quality. Data champions — data ambassadors in each team — ensure the link between technical and business teams, translating business needs into data questions and vice versa.",
      },
      bullets: {
        fr: [
          "Data Mesh : Décentraliser la propriété des données par domaine métier",
          "Data Champions : Ambassadeurs data dans chaque département",
          "Glossaire commun : Définitions partagées des KPIs et métriques",
          "Data contracts : Accords formels sur la qualité et le format des données échangées",
        ],
        en: [
          "Data Mesh: Decentralize data ownership by business domain",
          "Data Champions: Data ambassadors in each department",
          "Common glossary: Shared definitions of KPIs and metrics",
          "Data contracts: Formal agreements on quality and format of exchanged data",
        ],
      },
    },
    {
      id: "ai-adoption",
      title: {
        fr: "Stratégie d'Adoption de l'IA",
        en: "AI Adoption Strategy",
      },
      content: {
        fr: "L'adoption de l'IA dans une organisation ne peut pas être un big bang. Les entreprises qui réussissent suivent une approche progressive en trois phases. Phase 1 : l'expérimentation contrôlée — identifier 2 ou 3 cas d'usage à fort impact et faible risque, constituer une petite équipe pilote, et démontrer des résultats tangibles en 3 mois. Phase 2 : l'industrialisation — standardiser les outils, former les équipes, mettre en place la gouvernance des données et de l'IA. Phase 3 : la démocratisation — rendre l'IA accessible à tous les collaborateurs via des outils internes, des templates et un support dédié. Chaque phase doit produire des 'quick wins' visibles qui créent l'adhésion et justifient l'investissement suivant.",
        en: "AI adoption in an organization cannot be a big bang. Successful companies follow a progressive three-phase approach. Phase 1: controlled experimentation — identify 2 to 3 high-impact, low-risk use cases, assemble a small pilot team, and demonstrate tangible results in 3 months. Phase 2: industrialization — standardize tools, train teams, establish data and AI governance. Phase 3: democratization — make AI accessible to all employees via internal tools, templates, and dedicated support. Each phase must produce visible 'quick wins' that create buy-in and justify the next investment.",
      },
      bullets: {
        fr: [
          "Phase 1 — Expérimenter : POCs ciblés, équipe pilote, résultats en 3 mois",
          "Phase 2 — Industrialiser : Standards, formation, gouvernance, infrastructure",
          "Phase 3 — Démocratiser : Outils accessibles à tous, templates, self-service",
          "Principe clé : chaque phase doit produire un ROI mesurable avant de passer à la suivante",
        ],
        en: [
          "Phase 1 — Experiment: Targeted POCs, pilot team, results in 3 months",
          "Phase 2 — Industrialize: Standards, training, governance, infrastructure",
          "Phase 3 — Democratize: Tools accessible to all, templates, self-service",
          "Key principle: each phase must produce measurable ROI before moving to the next",
        ],
      },
    },
    {
      id: "change-management",
      title: {
        fr: "Conduite du Changement : La Clé Humaine",
        en: "Change Management: The Human Key",
      },
      content: {
        fr: "La technologie est la partie facile de la transformation data. La vraie difficulté est humaine. Les collaborateurs résistent au changement pour des raisons légitimes : peur de perdre leur expertise intuitive, crainte d'être remplacés par des algorithmes, ou simplement surcharge cognitive face à de nouveaux outils. Une conduite du changement efficace commence par l'écoute et l'empathie. Il faut comprendre les résistances avant de les adresser. Les early adopters enthousiastes sont vos meilleurs alliés — identifiez-les, équipez-les et laissez-les évangéliser naturellement. Les success stories internes sont cent fois plus convaincantes que n'importe quelle présentation de la direction.",
        en: "Technology is the easy part of data transformation. The real difficulty is human. Employees resist change for legitimate reasons: fear of losing their intuitive expertise, fear of being replaced by algorithms, or simply cognitive overload from new tools. Effective change management starts with listening and empathy. You must understand resistance before addressing it. Enthusiastic early adopters are your best allies — identify them, equip them, and let them evangelize naturally. Internal success stories are a hundred times more convincing than any management presentation.",
      },
      highlight: {
        fr: "On ne transforme pas une culture par décret. On la transforme par l'exemple, la preuve et la patience.",
        en: "You don't transform a culture by decree. You transform it through example, proof, and patience.",
      },
    },
    {
      id: "training",
      title: {
        fr: "Formation et Montée en Compétences",
        en: "Training and Upskilling",
      },
      content: {
        fr: "La formation est le pilier invisible d'une culture data réussie. Mais attention : la formation traditionnelle (3 jours en salle, slides PowerPoint, exercices déconnectés) ne fonctionne pas pour la data literacy. Les approches qui marchent sont contextuelles et pratiques. Les 'data dojos' — des sessions courtes où les équipes travaillent sur leurs propres données avec un coach — produisent des résultats immédiats. Les parcours d'apprentissage personnalisés selon le rôle (marketing, finance, RH) sont plus efficaces que les formations génériques. L'objectif n'est pas de transformer tout le monde en data scientist, mais de donner à chacun les compétences pour lire, interpréter et questionner les données de son périmètre.",
        en: "Training is the invisible pillar of a successful data culture. But beware: traditional training (3 days in a room, PowerPoint slides, disconnected exercises) doesn't work for data literacy. Approaches that work are contextual and practical. 'Data dojos' — short sessions where teams work on their own data with a coach — produce immediate results. Personalized learning paths by role (marketing, finance, HR) are more effective than generic training. The goal isn't to turn everyone into a data scientist, but to give each person the skills to read, interpret, and question the data in their scope.",
      },
      bullets: {
        fr: [
          "Data Dojos : Sessions pratiques sur les données réelles de l'équipe",
          "Parcours par rôle : Marketing, Finance, RH, Produit — chacun ses besoins",
          "Micro-learning : Modules de 15 minutes intégrés dans le flux de travail",
          "Certifications internes : Reconnaissance des compétences data acquises",
          "Communauté de pratique : Partage de savoirs entre pairs, pas top-down",
        ],
        en: [
          "Data Dojos: Practical sessions on the team's real data",
          "Role-based paths: Marketing, Finance, HR, Product — each has unique needs",
          "Micro-learning: 15-minute modules integrated into workflow",
          "Internal certifications: Recognition of acquired data skills",
          "Community of practice: Peer knowledge sharing, not top-down",
        ],
      },
    },
    {
      id: "measuring-success",
      title: {
        fr: "Mesurer le Succès : KPIs de la Culture Data",
        en: "Measuring Success: Data Culture KPIs",
      },
      content: {
        fr: "Si vous ne pouvez pas mesurer votre culture data, vous ne pouvez pas l'améliorer. Les KPIs doivent couvrir trois dimensions : l'adoption (combien de personnes utilisent activement les outils data), la qualité (les données sont-elles fiables, à jour et complètes), et l'impact (les décisions basées sur les données produisent-elles de meilleurs résultats). Le taux d'adoption des dashboards, le nombre de requêtes self-service, la fréquence des tests A/B, et la corrélation entre data-driven decisions et performance business sont des indicateurs concrets. L'enquête de maturité data, menée annuellement, complète le tableau en mesurant les perceptions et les comportements.",
        en: "If you can't measure your data culture, you can't improve it. KPIs must cover three dimensions: adoption (how many people actively use data tools), quality (is data reliable, up-to-date, and complete), and impact (do data-driven decisions produce better results). Dashboard adoption rates, number of self-service queries, A/B test frequency, and correlation between data-driven decisions and business performance are concrete indicators. The annual data maturity survey completes the picture by measuring perceptions and behaviors.",
      },
      bullets: {
        fr: [
          "Adoption : % d'employés utilisant les outils data chaque semaine",
          "Qualité : Score de qualité des données (complétude, fraîcheur, exactitude)",
          "Impact : Corrélation entre décisions data-driven et résultats business",
          "Maturité : Score de l'enquête de maturité data annuelle",
          "Self-service : % de questions data résolues sans l'équipe analytics",
        ],
        en: [
          "Adoption: % of employees using data tools weekly",
          "Quality: Data quality score (completeness, freshness, accuracy)",
          "Impact: Correlation between data-driven decisions and business outcomes",
          "Maturity: Annual data maturity survey score",
          "Self-service: % of data questions resolved without the analytics team",
        ],
      },
    },
    {
      id: "leadership",
      title: {
        fr: "Leadership et Sponsorship",
        en: "Leadership and Sponsorship",
      },
      content: {
        fr: "Aucune transformation data ne réussit sans un sponsorship fort du leadership. Le CEO ou le COMEX doit non seulement soutenir l'initiative mais la porter activement. Quand le directeur général commence ses réunions par 'que disent les données ?', le signal envoyé à l'organisation est puissant. Le rôle du Chief Data Officer (CDO) est crucial mais insuffisant s'il est isolé : il doit être intégré au COMEX et avoir un mandat transversal. Les leaders doivent aussi accepter d'être vulnérables — admettre quand les données contredisent leur intuition et changer de direction en conséquence. C'est cet exemple par le haut qui crée le changement culturel le plus durable.",
        en: "No data transformation succeeds without strong leadership sponsorship. The CEO or executive committee must not only support the initiative but actively champion it. When the CEO starts meetings with 'what does the data say?', the signal sent to the organization is powerful. The Chief Data Officer (CDO) role is crucial but insufficient if isolated: they must be integrated into the executive committee with a cross-functional mandate. Leaders must also accept being vulnerable — admitting when data contradicts their intuition and changing direction accordingly. It's this top-down example that creates the most lasting cultural change.",
      },
      highlight: {
        fr: "La culture data se diffuse du haut vers le bas. Si le COMEX ne l'incarne pas, personne ne suivra.",
        en: "Data culture spreads from top to bottom. If the executive team doesn't embody it, nobody will follow.",
      },
    },
    {
      id: "transformation-examples",
      title: {
        fr: "Exemples de Transformation Réussie",
        en: "Successful Transformation Examples",
      },
      content: {
        fr: "Les transformations data les plus réussies partagent des caractéristiques communes. Sisley a commencé par un audit de maturité data qui a révélé que 15 départements utilisaient des définitions différentes du mot 'client'. La création d'un glossaire commun et d'un référentiel client unique a été le premier chantier — pas un projet technique glamour, mais une fondation indispensable. L'Oréal a misé sur les data champions : un réseau de 200 ambassadeurs formés dans 30 pays qui ont adapté la stratégie data aux réalités locales. Netflix est l'exemple ultime : chaque décision, du contenu produit aux miniatures affichées, est guidée par les données, créant une organisation où l'expérimentation est dans l'ADN.",
        en: "The most successful data transformations share common characteristics. Sisley started with a data maturity audit that revealed 15 departments used different definitions of the word 'customer.' Creating a common glossary and a single customer reference was the first project — not a glamorous technical project, but an indispensable foundation. L'Oreal invested in data champions: a network of 200 trained ambassadors in 30 countries who adapted the data strategy to local realities. Netflix is the ultimate example: every decision, from produced content to displayed thumbnails, is guided by data, creating an organization where experimentation is in the DNA.",
      },
      bullets: {
        fr: [
          "Sisley : Glossaire commun, référentiel client unique, ROI marketing +35%",
          "L'Oréal : 200 data champions dans 30 pays, personnalisation locale",
          "Netflix : Culture d'expérimentation totale, 300+ tests A/B simultanés",
          "Spotify : Squads data-driven, Discover Weekly comme produit data emblématique",
        ],
        en: [
          "Sisley: Common glossary, single customer reference, +35% marketing ROI",
          "L'Oreal: 200 data champions in 30 countries, local personalization",
          "Netflix: Total experimentation culture, 300+ simultaneous A/B tests",
          "Spotify: Data-driven squads, Discover Weekly as iconic data product",
        ],
      },
    },
    {
      id: "common-failures",
      title: {
        fr: "Les Échecs les Plus Fréquents",
        en: "The Most Common Failures",
      },
      content: {
        fr: "Apprendre des échecs est aussi important que s'inspirer des succès. Le premier échec classique est le 'data lake syndrome' : acheter une infrastructure massive sans cas d'usage clairs, résultat un data swamp coûteux que personne n'utilise. Le deuxième est le 'dashboard cemetery' : créer des dizaines de tableaux de bord que personne ne consulte après la première semaine. Le troisième est la centralisation excessive : une équipe data centrale qui devient un goulot d'étranglement plutôt qu'un accélérateur. Le quatrième, et peut-être le plus pernicieux, est de traiter la transformation data comme un projet IT plutôt que comme un programme de changement organisationnel.",
        en: "Learning from failures is as important as drawing inspiration from successes. The first classic failure is the 'data lake syndrome': buying massive infrastructure without clear use cases, resulting in an expensive data swamp nobody uses. The second is the 'dashboard cemetery': creating dozens of dashboards nobody consults after the first week. The third is excessive centralization: a central data team that becomes a bottleneck rather than an accelerator. The fourth, and perhaps most insidious, is treating data transformation as an IT project rather than an organizational change program.",
      },
      bullets: {
        fr: [
          "Data Lake Syndrome : Infrastructure sans cas d'usage = data swamp coûteux",
          "Dashboard Cemetery : Dashboards créés puis abandonnés — pas de valeur générée",
          "Bottleneck central : Équipe data surchargée, time-to-insight de plusieurs semaines",
          "Projet IT : Traiter la data comme un problème technique ignore la dimension humaine",
        ],
        en: [
          "Data Lake Syndrome: Infrastructure without use cases = expensive data swamp",
          "Dashboard Cemetery: Dashboards created then abandoned — no value generated",
          "Central bottleneck: Overloaded data team, time-to-insight of several weeks",
          "IT project: Treating data as a technical problem ignores the human dimension",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : La Data est un Sport d'Équipe",
        en: "Conclusion: Data is a Team Sport",
      },
      content: {
        fr: "Construire une culture data & IA est un marathon, pas un sprint. C'est un voyage de transformation qui touche la technologie, les processus, et surtout les personnes. Les organisations qui réussissent sont celles qui comprennent que la data n'est pas un projet — c'est une compétence organisationnelle qui se développe dans la durée. Commencez petit, prouvez la valeur, formez les équipes, cassez les silos, et laissez la culture se diffuser organiquement. La data n'est pas le territoire des data scientists — c'est un sport d'équipe où chaque collaborateur a un rôle à jouer. L'IA amplifie cette dynamique en rendant les insights accessibles à tous, pas seulement aux experts.",
        en: "Building a data & AI culture is a marathon, not a sprint. It's a transformation journey that touches technology, processes, and above all people. Organizations that succeed understand that data isn't a project — it's an organizational capability that develops over time. Start small, prove value, train teams, break silos, and let culture spread organically. Data isn't the territory of data scientists — it's a team sport where every employee has a role to play. AI amplifies this dynamic by making insights accessible to everyone, not just experts.",
      },
      highlight: {
        fr: "La meilleure technologie data du monde ne sert à rien dans une organisation qui n'a pas la culture pour l'utiliser.",
        en: "The best data technology in the world is useless in an organization that doesn't have the culture to use it.",
      },
    },
  ],
  sources: [
    { id: 1, label: "Sisley — Masterclass Culture Data & IA (2025)" },
    { id: 2, label: "Zhamak Dehghani — Data Mesh: Delivering Data-Driven Value at Scale (O'Reilly, 2022)", url: "https://www.oreilly.com/library/view/data-mesh/9781492092384/" },
    { id: 3, label: "McKinsey — Building a Data Culture That Lasts", url: "https://www.mckinsey.com" },
    { id: 4, label: "Harvard Business Review — Data-Driven Decision Making", url: "https://hbr.org" },
    { id: 5, label: "Gartner — CDO Survey: Data Culture as Competitive Advantage", url: "https://www.gartner.com" },
    { id: 6, label: "Thoughtworks — Data Mesh Architecture", url: "https://www.thoughtworks.com" },
    { id: 7, label: "Bernard Marr — Data Strategy (Kogan Page, 2023)" },
  ],
};
