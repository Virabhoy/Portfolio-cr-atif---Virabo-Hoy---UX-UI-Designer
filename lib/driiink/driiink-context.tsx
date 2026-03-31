"use client";

import { createContext, useContext, useReducer, useCallback, useMemo } from "react";
import type { DriiinkState, DriiinkAction, Screen, Drink } from "./driiink-types";

const screenIndex: Record<Screen, number> = {
  home: 0,
  detail: 1,
  order: 2,
  payment: 3,
};

const initialState: DriiinkState = {
  screen: "home",
  previousScreen: "home",
  selectedDrinkId: null,
  cart: [],
  splitCount: 1,
  paidItemIds: [],
  alreadyPaidAmount: 0,
};

function reducer(state: DriiinkState, action: DriiinkAction): DriiinkState {
  switch (action.type) {
    case "NAVIGATE":
      return { ...state, previousScreen: state.screen, screen: action.screen };

    case "SELECT_DRINK":
      return {
        ...state,
        selectedDrinkId: action.drinkId,
        previousScreen: state.screen,
        screen: "detail",
      };

    case "ADD_TO_CART": {
      const existing = state.cart.find((item) => item.drink.id === action.drink.id);
      const cart = existing
        ? state.cart.map((item) =>
            item.drink.id === action.drink.id
              ? { ...item, quantity: Math.min(item.quantity + action.quantity, 10) }
              : item
          )
        : [...state.cart, { drink: action.drink, quantity: action.quantity }];
      return { ...state, cart, previousScreen: state.screen, screen: "home" };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.drink.id !== action.drinkId),
      };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.drink.id === action.drinkId
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        ),
      };

    case "DECREMENT": {
      const item = state.cart.find((i) => i.drink.id === action.drinkId);
      if (item && item.quantity <= 1) {
        return {
          ...state,
          cart: state.cart.filter((i) => i.drink.id !== action.drinkId),
        };
      }
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.drink.id === action.drinkId ? { ...i, quantity: i.quantity - 1 } : i
        ),
      };
    }

    case "SET_SPLIT":
      return { ...state, splitCount: Math.max(1, Math.min(action.count, 8)) };

    case "TOGGLE_PAID_ITEM": {
      const has = state.paidItemIds.includes(action.drinkId);
      return {
        ...state,
        paidItemIds: has
          ? state.paidItemIds.filter((id) => id !== action.drinkId)
          : [...state.paidItemIds, action.drinkId],
      };
    }

    case "CONFIRM_PAYMENT": {
      const paidTotal = state.cart
        .filter((item) => state.paidItemIds.includes(item.drink.id))
        .reduce((sum, item) => sum + item.drink.price * item.quantity, 0);
      return {
        ...state,
        alreadyPaidAmount: state.alreadyPaidAmount + paidTotal / state.splitCount,
        paidItemIds: [],
        splitCount: 1,
      };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

interface DriiinkContextValue {
  state: DriiinkState;
  dispatch: React.Dispatch<DriiinkAction>;
  direction: number;
}

const DriiinkContext = createContext<DriiinkContextValue | null>(null);

export function DriiinkProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const direction = screenIndex[state.screen] >= screenIndex[state.previousScreen] ? 1 : -1;

  const value = useMemo(() => ({ state, dispatch, direction }), [state, direction]);

  return <DriiinkContext.Provider value={value}>{children}</DriiinkContext.Provider>;
}

export function useDriiink() {
  const ctx = useContext(DriiinkContext);
  if (!ctx) throw new Error("useDriiink must be used within DriiinkProvider");
  return ctx;
}

export function useNavigation() {
  const { dispatch } = useDriiink();

  const navigate = useCallback(
    (screen: Screen) => dispatch({ type: "NAVIGATE", screen }),
    [dispatch]
  );

  const selectDrink = useCallback(
    (drinkId: string) => dispatch({ type: "SELECT_DRINK", drinkId }),
    [dispatch]
  );

  return { navigate, selectDrink };
}

export function useCart() {
  const { state, dispatch } = useDriiink();

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.drink.price * item.quantity,
    0
  );

  const addToCart = useCallback(
    (drink: Drink, quantity: number) =>
      dispatch({ type: "ADD_TO_CART", drink, quantity }),
    [dispatch]
  );

  const increment = useCallback(
    (drinkId: string) => dispatch({ type: "INCREMENT", drinkId }),
    [dispatch]
  );

  const decrement = useCallback(
    (drinkId: string) => dispatch({ type: "DECREMENT", drinkId }),
    [dispatch]
  );

  const remove = useCallback(
    (drinkId: string) => dispatch({ type: "REMOVE_FROM_CART", drinkId }),
    [dispatch]
  );

  return { cart: state.cart, totalItems, totalPrice, addToCart, increment, decrement, remove };
}
