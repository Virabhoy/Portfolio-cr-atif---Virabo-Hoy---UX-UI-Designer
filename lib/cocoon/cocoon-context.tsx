"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CocoonState, CocoonAction, Screen, DocumentType } from "./cocoon-types";

const SCREEN_ORDER: Screen[] = ["home", "search", "property-detail", "management", "documents", "messages", "conversation", "finance", "works", "profile", "notifications"];

function screenIndex(s: Screen) { return SCREEN_ORDER.indexOf(s); }

const initialState: CocoonState = {
  screen: "home",
  previousScreen: "home",
  selectedPropertyId: null,
  selectedConversationId: null,
  activeDocTab: "all",
};

function reducer(state: CocoonState, action: CocoonAction): CocoonState {
  switch (action.type) {
    case "NAVIGATE":
      return { ...state, previousScreen: state.screen, screen: action.screen };
    case "SELECT_PROPERTY":
      return { ...state, previousScreen: state.screen, screen: "property-detail", selectedPropertyId: action.id };
    case "SELECT_CONVERSATION":
      return { ...state, previousScreen: state.screen, screen: "conversation", selectedConversationId: action.id };
    case "SET_DOC_TAB":
      return { ...state, activeDocTab: action.tab };
    case "GO_BACK":
      return { ...state, screen: state.previousScreen, previousScreen: state.screen };
    default:
      return state;
  }
}

interface ContextValue {
  state: CocoonState;
  dispatch: React.Dispatch<CocoonAction>;
  direction: number;
}

const CocoonContext = createContext<ContextValue | undefined>(undefined);

export function CocoonProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const direction = screenIndex(state.screen) >= screenIndex(state.previousScreen) ? 1 : -1;
  return (
    <CocoonContext.Provider value={{ state, dispatch, direction }}>
      {children}
    </CocoonContext.Provider>
  );
}

export function useCocoon() {
  const ctx = useContext(CocoonContext);
  if (!ctx) throw new Error("useCocoon must be inside CocoonProvider");
  return ctx;
}

export function useNavigation() {
  const { state, dispatch } = useCocoon();
  return {
    screen: state.screen,
    navigate: (screen: Screen) => dispatch({ type: "NAVIGATE", screen }),
    selectProperty: (id: string) => dispatch({ type: "SELECT_PROPERTY", id }),
    selectConversation: (id: string) => dispatch({ type: "SELECT_CONVERSATION", id }),
    goBack: () => dispatch({ type: "GO_BACK" }),
    setDocTab: (tab: DocumentType | "all") => dispatch({ type: "SET_DOC_TAB", tab }),
  };
}
