import React, { useState } from "react";
import ToDos from "../components/todos/ToDos";
import ToDosForm from "../components/todos/ToDosForm";

const ToDoList = () => {
  const initialState = [
    { id: 1, title: "wake up early", done: false },
    { id: 2, title: "go for walk", done: false },
    { id: 3, title: "take the breakfast", done: false },
    { id: 4, title: "continue the course", done: false },
  ];

  const [todos, setTodos] = useState(initialState);

  // add is the default mode, not-done for uncompleted todos, edit for editinf selected todo
  const [mode, setMode] = useState("add");

  const [activeTodo, setActiveTodo] = useState({});

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

  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];

      setTodos(newTodos);
    } else {
      const currentTodos = [...todos];
      const newTodos = currentTodos.map((currentTodo) => {
        if (currentTodo.id === activeTodo.id) {
          currentTodo.title = title;
          return currentTodo;
        }
        return currentTodo;
      });
      setTodos(newTodos);
      setActiveTodo({});
      setMode("add");
    }
  };

  const uncompletedTodo = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };
  let currentTodos = [...todos];
  if (mode === "not-done") {
    currentTodos = currentTodos.filter((todo) => !todo.done);
  }

  const editTodo = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };

  return (
    <main>
      <div className="container">
        <div className="todos">
          <ToDosForm
            addTodo={addTodo}
            uncompletedTodo={uncompletedTodo}
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            mode={mode}
          />
          <ToDos
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            handleCompletedTodo={handleCompletedTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default ToDoList;
