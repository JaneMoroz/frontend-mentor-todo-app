import React, { useState } from "react";
import uuid from "react-uuid";

// Styled Components
import { NewTodoForm, NewTodoInput } from "../styles/newTodoStyles";

// Context
import { useGlobalContext } from "../context/context";

const NewTodo = () => {
  const { addTodo } = useGlobalContext();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: newTodo,
      status: "active",
    };
    addTodo(todo);
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
      />
    </NewTodoForm>
  );
};

export default NewTodo;
