export type Screen = "home" | "detail" | "order" | "payment" | "table" | "settings";

export interface Ingredient {
  name: string;
  quantity: string;
  emoji: string;
}

export interface Drink {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients: Ingredient[];
  popular?: boolean;
  promoLabel?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export interface CartItem {
  drink: Drink;
  quantity: number;
}

export interface DriiinkState {
  screen: Screen;
  previousScreen: Screen;
  selectedDrinkId: string | null;
  cart: CartItem[];
  splitCount: number;
  paidItemIds: string[];
  alreadyPaidAmount: number;
}

export type DriiinkAction =
  | { type: "NAVIGATE"; screen: Screen }
  | { type: "SELECT_DRINK"; drinkId: string }
  | { type: "ADD_TO_CART"; drink: Drink; quantity: number }
  | { type: "REMOVE_FROM_CART"; drinkId: string }
  | { type: "INCREMENT"; drinkId: string }
  | { type: "DECREMENT"; drinkId: string }
  | { type: "SET_SPLIT"; count: number }
  | { type: "TOGGLE_PAID_ITEM"; drinkId: string }
  | { type: "CONFIRM_PAYMENT" }
  | { type: "RESET" };
