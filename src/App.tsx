import React from "react";
import { Layout, NewTodo, TodoList, Header, Footer } from "./components";

function App() {
  return (
    <Layout>
      <Header />
      <NewTodo />
      <TodoList />
      <Footer />
    </Layout>
  );
}

export default App;
