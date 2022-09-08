import React from "react";

// Components
import { TodoItem } from "./index";

// Styled Components
import { TodoListSection, ListFooter } from "../styles/todoListStyles";
import { Flex } from "../styles/globalStyles";

// Context
import { useGlobalContext } from "../context/context";

// DragDrop
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const TodoList = () => {
  const { todos, displayed_todos, all_filters, active_filter, dispatch } =
    useGlobalContext();

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
      <ListFooter>
        <Flex>
          <span className="items-left">
            {displayed_todos.length} item
            {displayed_todos.length === 1 ? "" : "s"} left
          </span>
          <nav>
            {all_filters.map((filter, index) => {
              return (
                <button
                  onClick={() =>
                    dispatch({ type: "FILTER_TODOS", status: filter })
                  }
                  className={filter === active_filter ? "active" : ""}
                  key={index}
                  type="button"
                >
                  {filter}
                </button>
              );
            })}
          </nav>
          <button
            onClick={() => dispatch({ type: "CLEAR_COMPLETED_TODOS" })}
            type="button"
          >
            Clear completed
          </button>
        </Flex>
      </ListFooter>
    </TodoListSection>
  );
};

export default TodoList;
