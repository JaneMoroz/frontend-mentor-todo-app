import React from "react";

// Components
import { TodoItem } from "./index";

// Styled Components
import { TodoListSection, ListFooter } from "../styles/todoListStyles";
import { Flex } from "../styles/globalStyles";

// Context
import { useGlobalContext } from "../context/context";

const TodoList = () => {
  const {
    displayed_todos,
    all_filters,
    active_filter,
    filterTodos,
    clearCompletedTodos,
  } = useGlobalContext();

  return (
    <TodoListSection>
      <ul>
        {displayed_todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
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
                  onClick={() => filterTodos(filter)}
                  className={filter === active_filter ? "active" : ""}
                  key={index}
                  type="button"
                >
                  {filter}
                </button>
              );
            })}
          </nav>
          <button onClick={clearCompletedTodos} type="button">
            Clear completed
          </button>
        </Flex>
      </ListFooter>
    </TodoListSection>
  );
};

export default TodoList;
