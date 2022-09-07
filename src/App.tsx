import React from "react";
import { Layout, NewTodo, TodoList, Header, Footer } from "./components";
import { GlobalProvider } from "./context/context";

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Header />
        <NewTodo />
        <TodoList />
        <Footer />
      </Layout>
    </GlobalProvider>
  );
}

export default App;
