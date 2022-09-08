// Types
import { DefaultStateType, ActionType } from "./types";

// Local Storage
import { saveToStorage } from "../utils/localStorage";

// Reducer
export const reducer = (state: DefaultStateType, action: ActionType) => {
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
      // if "all" just return todos as displayed_todos
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
      // if "active" or completed, get filtered todos first then return them as displayed_todos
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
      const newPresent = { ...state.past };
      saveToStorage("todos", newPresent.todos);
      saveToStorage("currentTheme", newPresent.currentTheme);
      return {
        past: { ...newPresent },
        present: {
          ...newPresent,
          hasPast: false,
          hasFuture: true,
        },
        future: { ...state.present },
      };
    }
    case "REDO": {
      const newPresent = { ...state.future };
      saveToStorage("todos", newPresent.todos);
      saveToStorage("currentTheme", newPresent.currentTheme);
      return {
        past: { ...state.present },
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
