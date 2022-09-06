import React from "react";

// Styled Components
import { NewTodoForm, NewTodoInput } from "../styles/newTodoStyles";

const NewTodo = () => {
  return (
    <NewTodoForm>
      <span className="circle" />
      <NewTodoInput />
    </NewTodoForm>
  );
};

export default NewTodo;
