import React from "react";

// Components
import { TodoItem } from "./index";

// Styled Components
import { TodoListSection, ListFooter } from "../styles/todoListStyles";
import { Flex } from "../styles/globalStyles";

const TodoList = () => {
  return (
    <TodoListSection>
      <ul>
        {/* Todos */}
        <TodoItem />
        <TodoItem />
      </ul>
      <ListFooter>
        <Flex>
          <span className="items-left">2 items left</span>
          <nav>
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
          </nav>
          <button type="button">Clear completed</button>
        </Flex>
      </ListFooter>
    </TodoListSection>
  );
};

export default TodoList;
