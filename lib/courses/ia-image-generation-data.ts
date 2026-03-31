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

export const iaImageGenerationData: CourseData = {
  slug: "ia-generation-images",
  chapter: 23,
  title: {
    fr: "Génération d'Images par IA : Guide Complet",
    en: "AI Image Generation: Complete Guide",
  },
  subtitle: {
    fr: "De Midjourney à DALL-E, Maîtriser le Visuel",
    en: "From Midjourney to DALL-E, Mastering the Visual",
  },
  readingTime: 16,
  description: {
    fr: "Guide complet de la génération d'images par IA — Midjourney v6, DALL-E 3, Stable Diffusion, Flux, prompting pour images, contrôle du style, cohérence, cas d'usage pour designers, considérations éthiques, copyright.",
    en: "Complete guide to AI image generation — Midjourney v6, DALL-E 3, Stable Diffusion, Flux, prompting for images, style control, consistency, use cases for designers, ethical considerations, copyright.",
  },
  category: "ia",
  sections: [
    {
      id: "hook",
      title: {
        fr: "La révolution visuelle est en marche",
        en: "The visual revolution is underway",
      },
      content: {
        fr: "En 2022, les premières images générées par IA ressemblaient à des rêves flous avec des mains à six doigts. En 2026, les modèles génératifs produisent des visuels photoréalistes indiscernables de photographies professionnelles, des illustrations stylisées dignes d'un directeur artistique chevronné, et des concepts 3D prêts pour la production. Cette évolution n'est pas incrémentale — c'est un saut qualitatif qui redéfinit les métiers créatifs. Pour les designers, la question n'est plus \"l'IA peut-elle créer de belles images ?\" mais \"comment intégrer ces outils dans mon processus créatif pour aller plus vite et plus loin ?\".",
        en: "In 2022, the first AI-generated images looked like blurry dreams with six-fingered hands. In 2026, generative models produce photorealistic visuals indistinguishable from professional photographs, stylized illustrations worthy of a seasoned art director, and 3D concepts ready for production. This evolution is not incremental — it's a qualitative leap that redefines creative professions. For designers, the question is no longer \"can AI create beautiful images?\" but \"how do I integrate these tools into my creative process to go faster and further?\".",
      },
      highlight: {
        fr: "La génération d'images par IA ne remplace pas les créatifs — elle démocratise la création visuelle et transforme le designer en directeur artistique de machines. Votre oeil et votre jugement esthétique deviennent plus précieux que jamais.",
        en: "AI image generation doesn't replace creatives — it democratizes visual creation and transforms the designer into an art director of machines. Your eye and aesthetic judgment become more precious than ever.",
      },
    },
    {
      id: "landscape",
      title: {
        fr: "Panorama des outils de génération d'images IA",
        en: "Landscape of AI image generation tools",
      },
      content: {
        fr: "Le paysage des outils de génération d'images IA est riche et en constante évolution. On distingue trois grandes catégories : les services cloud propriétaires (Midjourney, DALL-E, Ideogram), les modèles open source (Stable Diffusion, Flux), et les outils intégrés dans des logiciels existants (Adobe Firefly dans Photoshop, Canva Magic Media). Chaque catégorie a ses forces : les services cloud offrent la meilleure qualité avec le moins d'effort, les modèles open source donnent un contrôle total et une confidentialité des données, et les outils intégrés s'insèrent naturellement dans les workflows existants des designers.",
        en: "The landscape of AI image generation tools is rich and constantly evolving. There are three main categories: proprietary cloud services (Midjourney, DALL-E, Ideogram), open-source models (Stable Diffusion, Flux), and tools integrated into existing software (Adobe Firefly in Photoshop, Canva Magic Media). Each category has its strengths: cloud services offer the best quality with the least effort, open-source models give total control and data privacy, and integrated tools naturally fit into designers' existing workflows.",
      },
      bullets: {
        fr: [
          "Services cloud : Midjourney (qualité artistique), DALL-E 3 (intégration ChatGPT), Ideogram (typographie)",
          "Open source : Stable Diffusion XL/3, Flux (Black Forest Labs), modèles communautaires sur Civitai",
          "Intégrés : Adobe Firefly (Photoshop/Illustrator), Canva Magic Media, Figma AI",
          "Spécialisés : Leonardo.ai (game assets), Runway (vidéo), Krea (design)",
        ],
        en: [
          "Cloud services: Midjourney (artistic quality), DALL-E 3 (ChatGPT integration), Ideogram (typography)",
          "Open source: Stable Diffusion XL/3, Flux (Black Forest Labs), community models on Civitai",
          "Integrated: Adobe Firefly (Photoshop/Illustrator), Canva Magic Media, Figma AI",
          "Specialized: Leonardo.ai (game assets), Runway (video), Krea (design)",
        ],
      },
    },
    {
      id: "midjourney",
      title: {
        fr: "Midjourney : la référence artistique",
        en: "Midjourney: the artistic reference",
      },
      content: {
        fr: "Midjourney reste en 2026 l'outil de référence pour la qualité esthétique des images générées. Sa version 6 a apporté des améliorations majeures : meilleure compréhension des prompts longs, rendu des mains et des visages quasi parfait, et une cohérence stylistique remarquable. L'accès via Discord a cédé la place à une application web dédiée, rendant l'outil plus accessible. La force de Midjourney réside dans son \"style maison\" : même un prompt basique produit un résultat esthétiquement plaisant avec un éclairage cinématographique naturel. Pour les designers, c'est l'outil idéal pour le moodboarding, l'exploration de concepts, et la génération de visuels marketing haut de gamme.",
        en: "Midjourney remains in 2026 the reference tool for aesthetic quality of generated images. Its version 6 brought major improvements: better understanding of long prompts, near-perfect hand and face rendering, and remarkable stylistic consistency. Discord access gave way to a dedicated web application, making the tool more accessible. Midjourney's strength lies in its \"house style\": even a basic prompt produces an aesthetically pleasing result with natural cinematic lighting. For designers, it's the ideal tool for moodboarding, concept exploration, and high-end marketing visual generation.",
      },
      highlight: {
        fr: "Astuce Midjourney : utilisez le paramètre --style raw pour un rendu plus neutre et photographique, ou --stylize 750 pour maximiser l'interprétation artistique du modèle. Le sweet spot est souvent entre 250 et 500.",
        en: "Midjourney tip: use the --style raw parameter for a more neutral, photographic rendering, or --stylize 750 to maximize the model's artistic interpretation. The sweet spot is often between 250 and 500.",
      },
    },
    {
      id: "dalle",
      title: {
        fr: "DALL-E et l'intégration ChatGPT",
        en: "DALL-E and ChatGPT integration",
      },
      content: {
        fr: "DALL-E 3, intégré directement dans ChatGPT, a changé la donne en rendant la génération d'images conversationnelle. Au lieu de maîtriser une syntaxe de prompt complexe, vous décrivez ce que vous voulez en langage naturel et ChatGPT reformule automatiquement votre demande en un prompt optimisé pour le modèle de génération. L'itération est naturelle : \"rends l'arrière-plan plus sombre\", \"ajoute un reflet sur le sol\", \"change le style en aquarelle\". Cette accessibilité en fait l'outil de choix pour les non-designers et pour le prototypage rapide. Les limitations principales sont un contrôle stylistique moins fin que Midjourney et des restrictions de contenu plus strictes.",
        en: "DALL-E 3, integrated directly into ChatGPT, changed the game by making image generation conversational. Instead of mastering complex prompt syntax, you describe what you want in natural language and ChatGPT automatically reformulates your request into an optimized prompt for the generation model. Iteration is natural: \"make the background darker,\" \"add a reflection on the floor,\" \"change the style to watercolor.\" This accessibility makes it the tool of choice for non-designers and rapid prototyping. The main limitations are less fine stylistic control than Midjourney and stricter content restrictions.",
      },
      bullets: {
        fr: [
          "Force : itération conversationnelle naturelle, pas besoin de syntaxe spéciale",
          "Force : excellent pour le texte dans les images (meilleur que Midjourney)",
          "Limite : moins de contrôle artistique fin, style parfois \"plastique\"",
          "Limite : restrictions de contenu strictes (pas de personnages publics, marques)",
        ],
        en: [
          "Strength: natural conversational iteration, no special syntax needed",
          "Strength: excellent for text in images (better than Midjourney)",
          "Limitation: less fine artistic control, sometimes \"plastic\" style",
          "Limitation: strict content restrictions (no public figures, brands)",
        ],
      },
    },
    {
      id: "stable-diffusion",
      title: {
        fr: "Stable Diffusion et l'open source",
        en: "Stable Diffusion and open source",
      },
      content: {
        fr: "Stable Diffusion représente l'alternative open source majeure aux services cloud. Exécutable localement sur un GPU consommateur (à partir d'une RTX 3060), il offre un contrôle total sur le processus de génération : choix du modèle de base, application de LoRA (petits modèles de fine-tuning spécialisés), contrôle précis via ControlNet (pose, profondeur, contours), et aucune restriction de contenu. L'écosystème autour de Stable Diffusion est massif : des milliers de modèles communautaires sur Civitai, des interfaces comme ComfyUI pour construire des pipelines visuels complexes, et une communauté active qui repousse constamment les limites. Pour les designers qui ont besoin de cohérence de marque, la possibilité de fine-tuner un modèle sur votre charte graphique est un avantage décisif.",
        en: "Stable Diffusion represents the major open-source alternative to cloud services. Runnable locally on a consumer GPU (from an RTX 3060), it offers total control over the generation process: choice of base model, application of LoRA (small specialized fine-tuning models), precise control via ControlNet (pose, depth, edges), and no content restrictions. The ecosystem around Stable Diffusion is massive: thousands of community models on Civitai, interfaces like ComfyUI for building complex visual pipelines, and an active community constantly pushing boundaries. For designers who need brand consistency, the ability to fine-tune a model on your brand guidelines is a decisive advantage.",
      },
      highlight: {
        fr: "ComfyUI transforme Stable Diffusion en un véritable outil professionnel : construisez des workflows visuels qui combinent inpainting, upscaling, style transfer et ControlNet dans un seul pipeline reproductible.",
        en: "ComfyUI transforms Stable Diffusion into a true professional tool: build visual workflows that combine inpainting, upscaling, style transfer, and ControlNet in a single reproducible pipeline.",
      },
    },
    {
      id: "flux",
      title: {
        fr: "Flux et les nouveaux acteurs",
        en: "Flux and new players",
      },
      content: {
        fr: "Flux, développé par Black Forest Labs (fondé par d'anciens chercheurs de Stability AI), a bousculé le marché en 2025 avec une qualité d'image rivale de Midjourney en open source. Sa gestion du texte dans les images, longtemps le talon d'Achille des modèles génératifs, est remarquable. Ideogram s'est également distingué avec une spécialisation dans la typographie et le design graphique, produisant des logos et des compositions textuelles d'une qualité impressionnante. Google Imagen 3 et les modèles de Meta (Emu) complètent le tableau avec des approches différenciées. Cette compétition intense bénéficie aux utilisateurs : la qualité progresse rapidement et les prix baissent.",
        en: "Flux, developed by Black Forest Labs (founded by former Stability AI researchers), disrupted the market in 2025 with image quality rivaling Midjourney in open source. Its handling of text in images, long the Achilles heel of generative models, is remarkable. Ideogram also distinguished itself with specialization in typography and graphic design, producing logos and text compositions of impressive quality. Google Imagen 3 and Meta's models (Emu) complete the picture with differentiated approaches. This intense competition benefits users: quality progresses rapidly and prices drop.",
      },
      bullets: {
        fr: [
          "Flux : open source, excellent rendu de texte, qualité rivalisant avec Midjourney",
          "Ideogram : spécialiste de la typographie dans les images, idéal pour les logos",
          "Google Imagen 3 : intégré à Gemini, fort en photoréalisme",
          "Recraft v3 : orienté design professionnel, export vectoriel, cohérence de marque",
        ],
        en: [
          "Flux: open source, excellent text rendering, quality rivaling Midjourney",
          "Ideogram: typography specialist in images, ideal for logos",
          "Google Imagen 3: integrated with Gemini, strong in photorealism",
          "Recraft v3: oriented toward professional design, vector export, brand consistency",
        ],
      },
    },
    {
      id: "prompting",
      title: {
        fr: "L'art du prompt visuel : structure, style, composition",
        en: "The art of visual prompting: structure, style, composition",
      },
      content: {
        fr: "Le prompting pour la génération d'images est fondamentalement différent du prompting textuel. Un bon prompt visuel se structure en couches : le sujet principal (quoi), le style artistique (comment), la composition (où dans l'image), l'éclairage (quelle ambiance), et les détails techniques (résolution, ratio, rendu). L'ordre des mots compte : les éléments en début de prompt ont plus de poids. Les adjectifs qualificatifs et les références à des styles artistiques connus (\"style Art Nouveau\", \"éclairage Rembrandt\", \"composition règle des tiers\") sont des leviers puissants. Évitez les prompts trop longs et contradictoires — la clarté et la spécificité battent toujours la complexité.",
        en: "Prompting for image generation is fundamentally different from text prompting. A good visual prompt is structured in layers: the main subject (what), the artistic style (how), the composition (where in the image), the lighting (what mood), and technical details (resolution, ratio, rendering). Word order matters: elements at the beginning of the prompt carry more weight. Qualifying adjectives and references to known artistic styles (\"Art Nouveau style,\" \"Rembrandt lighting,\" \"rule of thirds composition\") are powerful levers. Avoid overly long and contradictory prompts — clarity and specificity always beat complexity.",
      },
      highlight: {
        fr: "Structure de prompt efficace : [Sujet] + [Action/Pose] + [Environnement] + [Style artistique] + [Éclairage] + [Paramètres techniques]. Exemple : \"Portrait of a female architect, looking at blueprints, modern glass office, editorial photography, soft natural window light, 85mm lens, shallow depth of field\".",
        en: "Effective prompt structure: [Subject] + [Action/Pose] + [Environment] + [Artistic style] + [Lighting] + [Technical parameters]. Example: \"Portrait of a female architect, looking at blueprints, modern glass office, editorial photography, soft natural window light, 85mm lens, shallow depth of field\".",
      },
    },
    {
      id: "advanced-techniques",
      title: {
        fr: "Techniques avancées : références et cohérence",
        en: "Advanced techniques: references and consistency",
      },
      content: {
        fr: "Au-delà du prompting basique, les techniques avancées permettent un contrôle professionnel sur les résultats. Les style references (--sref dans Midjourney) permettent de fournir une image de référence dont le modèle reproduira l'atmosphère et le style. La cohérence de personnages (--cref) maintient l'apparence d'un même personnage à travers plusieurs générations — essentiel pour les storyboards et les chartes de personnages. ControlNet dans Stable Diffusion permet de guider la génération avec des croquis, des cartes de profondeur, ou des poses OpenPose. L'inpainting et l'outpainting permettent de modifier ou d'étendre des images existantes avec une cohérence impressionnante.",
        en: "Beyond basic prompting, advanced techniques enable professional-level control over results. Style references (--sref in Midjourney) let you provide a reference image whose atmosphere and style the model will reproduce. Character consistency (--cref) maintains a character's appearance across multiple generations — essential for storyboards and character sheets. ControlNet in Stable Diffusion allows guiding generation with sketches, depth maps, or OpenPose poses. Inpainting and outpainting allow modifying or extending existing images with impressive consistency.",
      },
      bullets: {
        fr: [
          "Style reference (--sref) : reproduire l'atmosphère d'une image de référence",
          "Character reference (--cref) : maintenir la cohérence d'un personnage",
          "ControlNet : guider la pose, la profondeur, les contours via une image de contrôle",
          "Inpainting : modifier une zone spécifique d'une image existante",
          "IP-Adapter : transférer le style ou le sujet d'une image à une autre",
        ],
        en: [
          "Style reference (--sref): reproduce the atmosphere of a reference image",
          "Character reference (--cref): maintain character consistency",
          "ControlNet: guide pose, depth, edges via a control image",
          "Inpainting: modify a specific area of an existing image",
          "IP-Adapter: transfer style or subject from one image to another",
        ],
      },
    },
    {
      id: "use-cases",
      title: {
        fr: "Cas d'usage pour designers et marques",
        en: "Use cases for designers and brands",
      },
      content: {
        fr: "Les applications concrètes de la génération d'images IA pour les professionnels du design sont nombreuses et en expansion. Le moodboarding est transformé : en 10 minutes, vous générez 50 visuels exploratoires au lieu de passer 2 heures à chercher sur des banques d'images. Le prototypage d'interfaces devient visuel : générez des illustrations placeholder qui correspondent exactement au ton de votre projet. Les packshots produits, les visuels pour les réseaux sociaux, les illustrations d'articles de blog — tout ce contenu visuel répétitif peut être produit en quelques secondes. Les agences utilisent déjà ces outils pour les premières itérations créatives, réservant le travail humain aux livrables finaux.",
        en: "The concrete applications of AI image generation for design professionals are numerous and expanding. Moodboarding is transformed: in 10 minutes, you generate 50 exploratory visuals instead of spending 2 hours searching stock image banks. Interface prototyping becomes visual: generate placeholder illustrations that exactly match your project's tone. Product packshots, social media visuals, blog post illustrations — all this repetitive visual content can be produced in seconds. Agencies already use these tools for first creative iterations, reserving human work for final deliverables.",
      },
      bullets: {
        fr: [
          "Moodboarding et exploration de directions artistiques",
          "Illustrations placeholder pour maquettes UI/UX",
          "Visuels marketing et réseaux sociaux à grande échelle",
          "Packshots produits et mises en situation",
          "Storyboards et concepts pour pitchs clients",
          "Textures et patterns pour le design graphique",
        ],
        en: [
          "Moodboarding and artistic direction exploration",
          "Placeholder illustrations for UI/UX mockups",
          "Marketing visuals and social media at scale",
          "Product packshots and contextual staging",
          "Storyboards and concepts for client pitches",
          "Textures and patterns for graphic design",
        ],
      },
    },
    {
      id: "limitations",
      title: {
        fr: "Limites et artefacts : ce que l'IA ne sait pas encore faire",
        en: "Limitations and artifacts: what AI still can't do",
      },
      content: {
        fr: "Malgré des progrès spectaculaires, la génération d'images IA conserve des limitations importantes. La cohérence spatiale reste imparfaite : les modèles peuvent confondre gauche et droite, ou produire des architectures physiquement impossibles. Le comptage d'éléments est aléatoire (demander \"5 pommes\" peut en donner 3 ou 7). Les mains et les doigts, bien que considérablement améliorés, restent un point faible dans certains cas. Le texte long dans les images est souvent mal rendu (sauf Flux et Ideogram). Et surtout, le contrôle pixel-perfect est impossible : vous guidez le modèle, mais ne contrôlez jamais exactement le résultat final. Pour un logo, une icône, ou un visuel nécessitant une précision au pixel, les outils traditionnels restent indispensables.",
        en: "Despite spectacular progress, AI image generation retains significant limitations. Spatial consistency remains imperfect: models can confuse left and right, or produce physically impossible architectures. Element counting is random (asking for \"5 apples\" may yield 3 or 7). Hands and fingers, though considerably improved, remain a weak point in some cases. Long text in images is often poorly rendered (except Flux and Ideogram). And above all, pixel-perfect control is impossible: you guide the model but never exactly control the final result. For a logo, an icon, or a visual requiring pixel precision, traditional tools remain essential.",
      },
      highlight: {
        fr: "Règle pratique : utilisez l'IA pour les visuels \"d'ambiance\" et de communication où une légère imperfection est acceptable. Gardez les outils vectoriels pour les livrables qui exigent une précision absolue (logos, icônes, UI components).",
        en: "Practical rule: use AI for \"mood\" visuals and communication where slight imperfection is acceptable. Keep vector tools for deliverables requiring absolute precision (logos, icons, UI components).",
      },
    },
    {
      id: "ethics",
      title: {
        fr: "Éthique et copyright : le cadre juridique en évolution",
        en: "Ethics and copyright: the evolving legal framework",
      },
      content: {
        fr: "La question du copyright est le sujet brûlant de la génération d'images IA. Les modèles sont entraînés sur des milliards d'images, souvent sans le consentement des artistes originaux, ce qui a déclenché des procès majeurs (Getty Images vs Stability AI, artistes vs Midjourney). En Europe, l'AI Act impose des obligations de transparence sur les données d'entraînement. En pratique, les images générées par IA ne sont pas protégeables par le droit d'auteur dans la plupart des juridictions (décision US Copyright Office 2023). La meilleure pratique est la transparence : signaler quand un visuel est généré par IA, éviter de reproduire le style spécifique d'un artiste identifiable, et privilégier les modèles entraînés sur des données licenciées (comme Adobe Firefly).",
        en: "Copyright is the burning issue in AI image generation. Models are trained on billions of images, often without original artists' consent, triggering major lawsuits (Getty Images vs Stability AI, artists vs Midjourney). In Europe, the AI Act imposes transparency obligations on training data. In practice, AI-generated images are not copyrightable in most jurisdictions (US Copyright Office decision 2023). Best practice is transparency: flag when a visual is AI-generated, avoid reproducing the specific style of an identifiable artist, and prefer models trained on licensed data (like Adobe Firefly).",
      },
      bullets: {
        fr: [
          "Toujours signaler les visuels générés par IA dans un contexte professionnel",
          "Éviter de prompter \"dans le style de [artiste vivant]\" — c'est éthiquement problématique",
          "Privilégier Adobe Firefly pour les usages commerciaux (données d'entraînement licenciées)",
          "Vérifier les conditions d'utilisation commerciale de chaque outil avant publication",
          "Conserver un historique des prompts utilisés pour la traçabilité",
        ],
        en: [
          "Always flag AI-generated visuals in a professional context",
          "Avoid prompting \"in the style of [living artist]\" — it's ethically problematic",
          "Prefer Adobe Firefly for commercial use (licensed training data)",
          "Check each tool's commercial use terms before publication",
          "Keep a history of prompts used for traceability",
        ],
      },
    },
    {
      id: "conclusion",
      title: {
        fr: "Conclusion : le designer augmenté par l'IA",
        en: "Conclusion: the AI-augmented designer",
      },
      content: {
        fr: "La génération d'images par IA n'est pas une menace pour les designers — c'est le plus puissant outil de productivité créative jamais inventé. Les designers qui maîtrisent ces outils peuvent explorer 10 fois plus de directions créatives, prototyper des concepts en minutes au lieu d'heures, et livrer des visuels de qualité à une vitesse sans précédent. La clé est de développer une double compétence : votre expertise en design (composition, couleur, typographie, storytelling visuel) reste votre valeur différenciante, et votre maîtrise du prompting et des outils IA devient votre multiplicateur de productivité. Le designer de 2026 est un directeur artistique qui orchestre des machines créatives.",
        en: "AI image generation is not a threat to designers — it's the most powerful creative productivity tool ever invented. Designers who master these tools can explore 10 times more creative directions, prototype concepts in minutes instead of hours, and deliver quality visuals at unprecedented speed. The key is developing a dual competency: your design expertise (composition, color, typography, visual storytelling) remains your differentiating value, and your mastery of prompting and AI tools becomes your productivity multiplier. The 2026 designer is an art director who orchestrates creative machines.",
      },
    },
  ],
  sources: [
    {
      id: 1,
      label: "Midjourney Documentation",
      url: "https://docs.midjourney.com/",
    },
    {
      id: 2,
      label: "OpenAI — DALL-E 3 Technical Report",
      url: "https://openai.com/dall-e-3",
    },
    {
      id: 3,
      label: "Stability AI — Stable Diffusion Documentation",
      url: "https://stability.ai/",
    },
    {
      id: 4,
      label: "Black Forest Labs — Flux Model",
      url: "https://blackforestlabs.ai/",
    },
    {
      id: 5,
      label: "ComfyUI — Node-based Stable Diffusion Interface",
      url: "https://github.com/comfyanonymous/ComfyUI",
    },
    {
      id: 6,
      label: "US Copyright Office — AI-Generated Works Policy (2023)",
      url: "https://www.copyright.gov/ai/",
    },
    {
      id: 7,
      label: "Adobe Firefly — Commercially Safe AI Generation",
      url: "https://www.adobe.com/products/firefly.html",
    },
    {
      id: 8,
      label: "EU AI Act — Transparency Requirements for Generative AI",
      url: "https://artificialintelligenceact.eu/",
    },
  ],
};
