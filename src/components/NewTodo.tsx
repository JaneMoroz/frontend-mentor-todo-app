import React, { useState } from "react";
import uuid from "react-uuid";

// Styled Components
import { NewTodoForm, NewTodoInput } from "../styles/newTodoStyles";

// Context
import { useGlobalContext } from "../context/context";

const NewTodo = () => {
  const { dispatch } = useGlobalContext();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: newTodo,
      status: "active",
    };
    dispatch({ type: "ADD_TODO", todo });
    setNewTodo("");
  };
  return (
    <NewTodoForm onSubmit={(e) => handleSubmit(e)}>
      <span className="circle" />
      <NewTodoInput
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        id="todo-text"
        value={newTodo}
        required
      />
    </NewTodoForm>
  );
};

export default NewTodo;
