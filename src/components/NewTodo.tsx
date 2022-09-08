import React, { useState } from "react";
import uuid from "react-uuid";

// Styled Components
import {
  NewTodoSection,
  NewTodoForm,
  NewTodoInput,
  ButtonsContainer,
  Button,
} from "../styles/newTodoStyles";

// Context
import { useGlobalContext } from "../context/context";

const NewTodo = () => {
  const { hasPast, hasFuture, dispatch } = useGlobalContext();
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
    <NewTodoSection>
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
      <ButtonsContainer>
        <Button
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={!hasPast}
          type="button"
        >
          undo
        </Button>
        <Button
          onClick={() => dispatch({ type: "REDO" })}
          disabled={!hasFuture}
          type="button"
        >
          redo
        </Button>
      </ButtonsContainer>
    </NewTodoSection>
  );
};

export default NewTodo;
