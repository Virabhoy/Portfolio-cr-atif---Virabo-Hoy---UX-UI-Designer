import { Category, Drink } from "./driiink-types";

export const categories: Category[] = [
  { id: "cocktails", name: "Cocktails", emoji: "\ud83c\udf79" },
  { id: "bieres", name: "Bieres", emoji: "\ud83c\udf7a" },
  { id: "softs", name: "Softs", emoji: "\ud83e\uddc3" },
  { id: "shots", name: "Shots", emoji: "\ud83e\udd43" },
  { id: "vins", name: "Vins", emoji: "\ud83c\udf77" },
];

export const drinks: Drink[] = [
  {
    id: "mojito",
    name: "Mojito",
    price: 7.0,
    description:
      "Un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, a base de rhum, de soda, de citron vert, et de feuilles de menthe fraiche.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=500&fit=crop",
    category: "cocktails",
    ingredients: [
      { name: "Rhum", quantity: "25cl", emoji: "\ud83c\udf76" },
      { name: "Menthe", quantity: "6 feuilles", emoji: "\ud83c\udf3f" },
      { name: "Limonade", quantity: "10cl", emoji: "\ud83c\udf4b" },
      { name: "Sucre", quantity: "2 cuil.", emoji: "\ud83e\uddc2" },
    ],
    popular: true,
  },
  {
    id: "sex-on-the-beach",
    name: "Sex on the Beach",
    price: 12.0,
    description:
      "Un cocktail fruité et coloré à base de vodka, de schnaps à la pêche, du jus d'ananas et du jus de canneberge.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=500&fit=crop",
    category: "cocktails",
    ingredients: [
      { name: "Vodka", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Schnaps", quantity: "2cl", emoji: "\ud83c\udf51" },
      { name: "Jus Ananas", quantity: "6cl", emoji: "\ud83c\udf4d" },
      { name: "Canneberge", quantity: "4cl", emoji: "\ud83c\udf52" },
    ],
    popular: true,
  },
  {
    id: "red-sunrise",
    name: "Red Sunrise",
    price: 12.0,
    description:
      "Un cocktail flamboyant avec de la grenadine, un zest de citron, de la vodka et du jus d'orange frais.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=500&fit=crop",
    category: "cocktails",
    ingredients: [
      { name: "Vodka", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Grenadine", quantity: "2cl", emoji: "\ud83c\udf53" },
      { name: "Jus Orange", quantity: "8cl", emoji: "\ud83c\udf4a" },
      { name: "Citron", quantity: "1 zest", emoji: "\ud83c\udf4b" },
    ],
    popular: true,
  },
  {
    id: "pina-colada",
    name: "Pina Colada",
    price: 10.0,
    description:
      "Le cocktail tropical par excellence, mélange onctueux de rhum, crème de coco et jus d'ananas.",
    image: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=400&h=500&fit=crop",
    category: "cocktails",
    ingredients: [
      { name: "Rhum", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Coco", quantity: "3cl", emoji: "\ud83e\udd65" },
      { name: "Jus Ananas", quantity: "10cl", emoji: "\ud83c\udf4d" },
      { name: "Glace", quantity: "3 cubes", emoji: "\ud83e\uddca" },
    ],
  },
  {
    id: "margarita",
    name: "Margarita",
    price: 11.0,
    description:
      "L'incontournable mexicain : tequila, triple sec et citron vert, servi avec un bord salé.",
    image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=400&h=500&fit=crop",
    category: "cocktails",
    ingredients: [
      { name: "Tequila", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Triple Sec", quantity: "2cl", emoji: "\ud83c\udf4a" },
      { name: "Citron vert", quantity: "3cl", emoji: "\ud83c\udf4b" },
      { name: "Sel", quantity: "1 pincee", emoji: "\ud83e\uddc2" },
    ],
  },
  {
    id: "coca-cola-citron",
    name: "Coca-Cola Citron",
    price: 4.0,
    description:
      "Du coca, frais et des glacons avec une rondelle de citron. Rien de plus simple et frais !",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=500&fit=crop",
    category: "softs",
    ingredients: [
      { name: "Coca-Cola", quantity: "25cl", emoji: "\ud83e\uddc3" },
      { name: "Citron", quantity: "1 rondelle", emoji: "\ud83c\udf4b" },
      { name: "Glacons", quantity: "4", emoji: "\ud83e\uddca" },
    ],
    popular: true,
  },
  {
    id: "perrier",
    name: "Perrier Menthe",
    price: 3.5,
    description: "Eau gazeuse Perrier servie avec du sirop de menthe fraiche et des glacons.",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=500&fit=crop",
    category: "softs",
    ingredients: [
      { name: "Perrier", quantity: "33cl", emoji: "\ud83e\uddc3" },
      { name: "Menthe", quantity: "2cl", emoji: "\ud83c\udf3f" },
      { name: "Glacons", quantity: "3", emoji: "\ud83e\uddca" },
    ],
  },
  {
    id: "jager-bomb",
    name: "Jager Bomb",
    price: 8.0,
    description: "Le shot qui envoie : Jagermeister plonge dans un verre de Red Bull.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=500&fit=crop",
    category: "shots",
    ingredients: [
      { name: "Jagermeister", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Red Bull", quantity: "12cl", emoji: "\u26a1" },
    ],
  },
  {
    id: "tequila-shot",
    name: "Tequila Paf",
    price: 6.0,
    description: "Shot de tequila servi avec sel et citron vert. Le classique indémodable.",
    image: "https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=400&h=500&fit=crop",
    category: "shots",
    ingredients: [
      { name: "Tequila", quantity: "4cl", emoji: "\ud83c\udf76" },
      { name: "Sel", quantity: "1 pincee", emoji: "\ud83e\uddc2" },
      { name: "Citron vert", quantity: "1 quartier", emoji: "\ud83c\udf4b" },
    ],
  },
  {
    id: "heineken",
    name: "Heineken",
    price: 5.0,
    description: "Biere blonde pression servie bien fraiche dans un verre de 25cl.",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=500&fit=crop",
    category: "bieres",
    ingredients: [
      { name: "Heineken", quantity: "25cl", emoji: "\ud83c\udf7a" },
    ],
  },
  {
    id: "ipa",
    name: "IPA Artisanale",
    price: 7.5,
    description:
      "India Pale Ale de brasserie locale, notes d'agrumes et d'herbes avec une belle amertume.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=500&fit=crop",
    category: "bieres",
    ingredients: [
      { name: "IPA", quantity: "33cl", emoji: "\ud83c\udf7a" },
    ],
  },
  {
    id: "rouge-maison",
    name: "Rouge Maison",
    price: 6.0,
    description: "Verre de vin rouge de la maison, selection du sommelier. Fruité et equilibre.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop",
    category: "vins",
    ingredients: [
      { name: "Vin Rouge", quantity: "15cl", emoji: "\ud83c\udf77" },
    ],
  },
  {
    id: "rose-provence",
    name: "Rosé de Provence",
    price: 7.0,
    description: "Un rosé frais et délicat de Provence, parfait pour les soirées d'été.",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=400&h=500&fit=crop",
    category: "vins",
    ingredients: [
      { name: "Rosé", quantity: "15cl", emoji: "\ud83c\udf77" },
    ],
  },
];

export const promoDrink = drinks.find((d) => d.id === "pina-colada")!;

export function getDrinksByCategory(categoryId: string): Drink[] {
  return drinks.filter((d) => d.category === categoryId);
}

export function getPopularDrinks(): Drink[] {
  return drinks.filter((d) => d.popular);
}

export function getDrinkById(id: string): Drink | undefined {
  return drinks.find((d) => d.id === id);
}
