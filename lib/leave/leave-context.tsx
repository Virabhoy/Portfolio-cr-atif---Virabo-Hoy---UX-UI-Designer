"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { LeaveState, LeaveAction, Screen, MessageType } from "./leave-types";

const initialState: LeaveState = {
  screen: "dashboard",
  previousScreen: "dashboard",
  selectedMessageId: null,
  selectedMessageType: null,
  createStep: 1,
};

function reducer(state: LeaveState, action: LeaveAction): LeaveState {
  switch (action.type) {
    case "NAVIGATE":
      return { ...state, previousScreen: state.screen, screen: action.screen };
    case "SELECT_MESSAGE":
      return { ...state, previousScreen: state.screen, screen: "my-messages", selectedMessageId: action.id };
    case "SET_MESSAGE_TYPE":
      return { ...state, selectedMessageType: action.messageType, previousScreen: state.screen, screen: action.messageType === "video" ? "record-video" : "create-message", createStep: 1 };
    case "SET_CREATE_STEP":
      return { ...state, createStep: action.step };
    case "GO_BACK":
      return { ...state, screen: state.previousScreen, previousScreen: state.screen };
    default:
      return state;
  }
}

interface ContextValue {
  state: LeaveState;
  dispatch: React.Dispatch<LeaveAction>;
}

const LeaveContext = createContext<ContextValue | undefined>(undefined);

export function LeaveProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <LeaveContext.Provider value={{ state, dispatch }}>{children}</LeaveContext.Provider>;
}

export function useLeave() {
  const ctx = useContext(LeaveContext);
  if (!ctx) throw new Error("useLeave must be inside LeaveProvider");
  return ctx;
}

export function useLeaveNav() {
  const { state, dispatch } = useLeave();
  return {
    screen: state.screen,
    navigate: (screen: Screen) => dispatch({ type: "NAVIGATE", screen }),
    selectMessage: (id: string) => dispatch({ type: "SELECT_MESSAGE", id }),
    setMessageType: (t: MessageType) => dispatch({ type: "SET_MESSAGE_TYPE", messageType: t }),
    setCreateStep: (step: number) => dispatch({ type: "SET_CREATE_STEP", step }),
    goBack: () => dispatch({ type: "GO_BACK" }),
  };
}
