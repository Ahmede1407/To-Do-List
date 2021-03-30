import React from "react";
import ToDoList from "./views/ToDoList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
