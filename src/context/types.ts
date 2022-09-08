import ITodo from "../interfaces/ITodo";

// Types
export type StateType = {
  currentTheme: string;
  todos: ITodo[];
  displayed_todos: ITodo[];
  all_filters: string[];
  active_filter: string;
  hasPast: boolean;
  hasFuture: boolean;
};

export type DefaultStateType = {
  past: StateType;
  present: StateType;
  future: StateType;
};

export type ActionType =
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

export type GlobalContextType = StateType & {
  dispatch: React.Dispatch<ActionType>;
};
