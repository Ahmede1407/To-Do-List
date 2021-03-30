import React from "react";
import ToDo from "./ToDo";

const ToDos = (props) => {
  return (
    <div className="todosList">
      {props.todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            handleCompletedTodo={props.handleCompletedTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
      {props.todos.length === 0 ? (
        <h3 className="no-todos">Congratulations! it's break time now. 🥳</h3>
      ) : null}
    </div>
  );
};

export default ToDos;
