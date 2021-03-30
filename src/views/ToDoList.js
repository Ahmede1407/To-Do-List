import React, { useState } from "react";
import ToDos from "../components/todos/ToDos";
import ToDosForm from "../components/todos/ToDosForm";

const ToDoList = () => {
  const initialState = [
    { id: 1, title: "wake up early", done: false },
    { id: 2, title: "go for walk", done: true },
    { id: 3, title: "take the breakfast", done: false },
    { id: 4, title: "continue the course", done: true },
  ];

  const [todos, setTodos] = useState(initialState);
  const handleCompletedTodo = (id) => {
    const currentTodos = [...todos];
    const newTodos = currentTodos.map((currentTodo) => {
      if (currentTodo.id === id) {
        currentTodo.done = !currentTodo.done;
        return currentTodo;
      }
      return currentTodo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const currentTodos = [...todos];
    const newTodos = currentTodos.filter(
      (currentTodo) => currentTodo.id !== id
    );

    setTodos(newTodos);
  };

  return (
    <main>
      <div className="container">
        <div className="todos">
          <ToDosForm />
          <ToDos
            todos={todos}
            handleCompletedTodo={handleCompletedTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default ToDoList;
