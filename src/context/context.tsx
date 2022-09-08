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
      type: "CLEAR_COMPLETED_TODOS";
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
  displayed_todos: [],
  all_filters: ["all", "active", "completed"],
  active_filter: "all",
};

// Reducer
const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      saveToStorage("currentTheme", action.theme);
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };
    }
    case "DELETE_TODO": {
      const tempTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: [...tempTodos],
      };
    }
    case "TOGGLE_TODO_STATUS": {
      const tempTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            status: todo.status === "completed" ? "active" : "completed",
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: [...tempTodos],
      };
    }
    case "FILTER_TODOS": {
      if (action.status === "all") {
        return {
          ...state,
          active_filter: action.status,
          displayed_todos: [...state.todos],
        };
      }
      const tempTodos = state.todos.filter(
        (todo) => todo.status === action.status
      );
      return {
        ...state,
        active_filter: action.status,
        displayed_todos: [...tempTodos],
      };
    }
    case "CLEAR_COMPLETED_TODOS": {
      const tempTodos = state.todos.filter(
        (todo) => todo.status !== "completed"
      );
      return {
        ...state,
        todos: [...tempTodos],
        displayed_todos: [...tempTodos],
      };
    }
    case "UPDATE_ORDER": {
      return {
        ...state,
        todos: [...action.todos],
      };
    }
  }
};

// Context
const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    dispatch({ type: "FILTER_TODOS", status: state.active_filter });
    saveToStorage("todos", state.todos);
  }, [state.todos]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
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
