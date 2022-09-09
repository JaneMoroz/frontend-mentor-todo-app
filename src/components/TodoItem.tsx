import React from "react";

// Styled Components
import { Button } from "../styles/globalStyles";
import { ListItem } from "../styles/todoItemStyles";

// Icons
import checkedIcon from "../assets/icons/icon-check.svg";
import crossIcon from "../assets/icons/icon-cross.svg";

// Interfaces
import ITodo from "../interfaces/ITodo";

// Context
import { useGlobalContext } from "../context/context";

// DragDrop
import { Draggable } from "react-beautiful-dnd";

interface TodoItemProp {
  todo: ITodo;
  index: number;
}

const TodoItem: React.FC<TodoItemProp> = ({ todo, index }) => {
  const { dispatch } = useGlobalContext();
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          checked={todo.status === "completed"}
        >
          <Button
            circle
            circleChecked={todo.status === "completed"}
            onClick={() =>
              dispatch({ type: "TOGGLE_TODO_STATUS", id: todo.id })
            }
            type="button"
            aria-label="check"
          >
            <img src={checkedIcon} alt="check icon" />
          </Button>
          <p>{todo.text}</p>
          <Button
            icon
            onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
            type="button"
            aria-label="delete"
          >
            <img src={crossIcon} alt="cross icon" />
          </Button>
        </ListItem>
      )}
    </Draggable>
  );
};

export default TodoItem;
