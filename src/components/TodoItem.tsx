import React from "react";

// Styled Components
import { ListItem } from "../styles/todoItemStyles";

// Icons
import checkedIcon from "../assets/icons/icon-check.svg";
import crossIcon from "../assets/icons/icon-cross.svg";

// Interfaces
import ITODO from "../interfaces/ITodo";

// Context
import { useGlobalContext } from "../context/context";

interface TodoItemProp {
  todo: ITODO;
}

const TodoItem: React.FC<TodoItemProp> = ({ todo }) => {
  const { dispatch } = useGlobalContext();
  return (
    <ListItem checked={todo.status === "completed"}>
      <button
        onClick={() => dispatch({ type: "TOGGLE_TODO_STATUS", id: todo.id })}
        type="button"
        className="round-button"
        aria-label="check"
      >
        <img src={checkedIcon} alt="check icon" />
      </button>
      <p>{todo.text}</p>
      <button
        onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
        type="button"
        className="delete-button"
        aria-label="delete"
      >
        <img src={crossIcon} alt="cross icon" />
      </button>
    </ListItem>
  );
};

export default TodoItem;
