import React from "react";

// Components
import { TodoItem } from "./index";

// Styled Components
import { TodoListSection, TodoListFooter } from "../styles/todoListStyles";
import { Flex, Button } from "../styles/globalStyles";

// Context
import { useGlobalContext } from "../context/context";

// DragDrop
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const TodoList = () => {
  const {
    todos,
    displayed_todos,
    all_filters,
    active_filter,
    hasPast,
    hasFuture,
    dispatch,
  } = useGlobalContext();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    // if dropped outside or esc button was clicked
    if (!result.destination) {
      return;
    }
    // check if location changed
    // 1. not changed
    if (
      destination!.droppableId === source.droppableId &&
      destination!.index === source.index
    ) {
      return;
    }
    // 2. changed
    const draggableTodo = todos.find((todo) => todo.id === draggableId);
    let updatedTodos;
    let draggableTodoIndex;

    if (active_filter === "all") {
      draggableTodoIndex = todos.findIndex((todo) => todo.id === draggableId);
      updatedTodos = [...todos]
        .slice(0, draggableTodoIndex)
        .concat([...todos].slice(draggableTodoIndex + 1));
      updatedTodos.splice(destination!.index, 0, draggableTodo!);
    } else {
      const filteredTodos = [...todos].filter(
        (todo) => todo.status === active_filter
      );
      const restTodos = [...todos].filter(
        (todo) => todo.status !== active_filter
      );
      updatedTodos = [...filteredTodos, ...restTodos];
      draggableTodoIndex = updatedTodos.findIndex(
        (todo) => todo.id === draggableId
      );
      updatedTodos = updatedTodos
        .slice(0, draggableTodoIndex)
        .concat(updatedTodos.slice(draggableTodoIndex + 1));
      updatedTodos.splice(destination!.index, 0, draggableTodo!);
    }

    dispatch({ type: "UPDATE_ORDER", todos: updatedTodos });
  };

  return (
    <TodoListSection>
      <Flex borderBottom>
        <Button
          text
          big
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={!hasPast}
          type="button"
        >
          undo
        </Button>
        <Button
          text
          big
          onClick={() => dispatch({ type: "REDO" })}
          disabled={!hasFuture}
          type="button"
        >
          redo
        </Button>
      </Flex>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {displayed_todos.map((todo, index) => {
                return <TodoItem key={todo.id} todo={todo} index={index} />;
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <TodoListFooter>
        <Flex>
          <span className="items-left">
            {displayed_todos.length} item
            {displayed_todos.length === 1 ? "" : "s"} left
          </span>
          <nav>
            {all_filters.map((filter, index) => {
              return (
                <Button
                  text
                  medium
                  active={filter === active_filter}
                  onClick={() =>
                    dispatch({ type: "FILTER_TODOS", status: filter })
                  }
                  key={index}
                  type="button"
                >
                  {filter}
                </Button>
              );
            })}
          </nav>
          <Button
            text
            onClick={() => dispatch({ type: "CLEAR_COMPLETED_TODOS" })}
            type="button"
          >
            Clear completed
          </Button>
        </Flex>
      </TodoListFooter>
    </TodoListSection>
  );
};

export default TodoList;
