import React, {
  useContext,
  useReducer,
  createContext,
  useLayoutEffect,
} from "react";
import ITodo from "../interfaces/ITodo";

// Local Storage
import { getFromStorage, saveToStorage } from "../utils/localStorage";

// Temp Data
import { todos as todosData } from "../assets/data/data";

// Types
type StateType = {
  currentTheme: string;
  todos: ITodo[];
  displayed_todos: ITodo[];
  all_filters: string[];
  active_filter: string;
  hasPast: boolean;
  hasFuture: boolean;
};

type DefaultStateType = {
  past: StateType;
  present: StateType;
  future: StateType;
};

type Action =
  | {
      type: "TOGGLE_THEME";
      theme: string;
    }
  | {
      type: "ADD_TODO";
      todo: ITodo;
    }
  | {
      type: "DELETE_TODO" | "TOGGLE_TODO_STATUS";
      id: string;
    }
  | {
      type: "FILTER_TODOS";
      status: string;
    }
  | {
      type: "CLEAR_COMPLETED_TODOS" | "UNDO" | "REDO";
    }
  | {
      type: "UPDATE_ORDER";
      todos: ITodo[];
    };

type GlobalContextType = StateType & {
  dispatch: React.Dispatch<Action>;
};

// Initial state
const initialState = {
  currentTheme: getFromStorage("currentTheme", "dark"),
  todos: getFromStorage("todos", todosData),
  displayed_todos: getFromStorage("todos", todosData),
  all_filters: ["all", "active", "completed"],
  active_filter: "all",
  hasPast: false,
  hasFuture: false,
};

// Default State
const defaultState = {
  past: initialState,
  present: initialState,
  future: initialState,
};

// Reducer
const reducer = (state: DefaultStateType, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      saveToStorage("currentTheme", action.theme);
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          currentTheme: action.theme,
          hasPast: true,
          hasFuture: false,
        },
        future: { ...state.future },
      };
    }
    case "ADD_TODO": {
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          todos: [action.todo, ...state.present.todos],
          hasPast: true,
          hasFuture: false,
        },
        future: {
          ...state.future,
        },
      };
    }
    case "DELETE_TODO": {
      const tempTodos = state.present.todos.filter(
        (todo) => todo.id !== action.id
      );
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          todos: [...tempTodos],
          hasPast: true,
          hasFuture: false,
        },
        future: { ...state.future },
      };
    }
    case "TOGGLE_TODO_STATUS": {
      const tempTodos = state.present.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            status: todo.status === "completed" ? "active" : "completed",
          };
        }
        return todo;
      });
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          todos: [...tempTodos],
          hasPast: true,
          hasFuture: false,
        },
        future: { ...state.future },
      };
    }
    case "FILTER_TODOS": {
      if (action.status === "all") {
        return {
          past: { ...state.past },
          present: {
            ...state.present,
            active_filter: action.status,
            displayed_todos: [...state.present.todos],
          },
          future: { ...state.future },
        };
      }
      const tempTodos = state.present.todos.filter(
        (todo) => todo.status === action.status
      );
      return {
        past: { ...state.past },
        present: {
          ...state.present,
          active_filter: action.status,
          displayed_todos: [...tempTodos],
        },
        future: { ...state.future },
      };
    }
    case "CLEAR_COMPLETED_TODOS": {
      const tempTodos = state.present.todos.filter(
        (todo) => todo.status !== "completed"
      );
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          todos: [...tempTodos],
          displayed_todos: [...tempTodos],
          hasFuture: false,
          hasPast: true,
        },
        future: { ...state.future },
      };
    }
    case "UPDATE_ORDER": {
      return {
        past: { ...state.present },
        present: {
          ...state.present,
          todos: [...action.todos],
          hasFuture: false,
          hasPast: true,
        },
        future: { ...state.future },
      };
    }
    case "UNDO": {
      console.log("undo");
      const newPresent = { ...state.past };
      const newFuture = { ...state.present };
      saveToStorage("todos", newPresent.todos);
      return {
        past: { ...newPresent },
        present: {
          ...newPresent,
          hasPast: false,
          hasFuture: true,
        },
        future: { ...newFuture },
      };
    }
    case "REDO": {
      console.log("redo");
      const newPast = { ...state.present };
      const newPresent = { ...state.future };
      saveToStorage("todos", newPresent.todos);
      return {
        past: { ...newPast },
        present: {
          ...newPresent,
          hasPast: true,
          hasFuture: false,
        },
        future: { ...newPresent },
      };
    }
  }
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

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
