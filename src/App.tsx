import React from "react";
import { Layout, NewTodo, TodoList } from "./components";

function App() {
  return (
    <Layout>
      <NewTodo />
      <TodoList />
    </Layout>
  );
}

export default App;
