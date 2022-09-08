import React, {
  useContext,
  useReducer,
  createContext,
  useLayoutEffect,
} from "react";

// Local Storage
import { getFromStorage, saveToStorage } from "../utils/localStorage";

// Temp Data
import { todos as todosData } from "../assets/data/data";

// Reducer
import { reducer } from "./reducer";

// Types
import { StateType, GlobalContextType } from "./types";

// Initial state
const initialState = {
  currentTheme: getFromStorage("currentTheme", "dark"),
  todos: getFromStorage("todos", todosData),
  displayed_todos: [],
  all_filters: ["all", "active", "completed"],
  active_filter: "all",
  hasPast: false,
  hasFuture: false,
};

// Default State
const defaultState = {
  past: {} as StateType,
  present: initialState,
  future: {} as StateType,
};

// Context
const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useLayoutEffect(() => {
    dispatch({ type: "FILTER_TODOS", status: state.present.active_filter });
    saveToStorage("todos", state.present.todos);
  }, [state.present.todos]);

  return (
    <GlobalContext.Provider
      value={{
        ...state.present,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Context hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
