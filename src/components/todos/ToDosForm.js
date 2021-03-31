import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

function ToDosForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [render, setRender] = useState(false);

  if (props.mode === "edit" && !render) {
    setNewTitle(props.todos[0].title);
    setRender(true);
  }

  const newTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const addTodoHandler = () => {
    let nTitle = newTitle;
    setNewTitle("");
    setRender(false);
    return props.addTodo(nTitle);
  };

  return (
    <div className="todosForm">
      <div className="todosForm-icon" onClick={props.uncompletedTodo}>
        <FeatherIcon icon="circle" />
      </div>

      <div className="todosForm-form">
        <input
          type="text"
          placeholder="Add New Task."
          value={newTitle}
          onChange={newTitleHandler}
        />
      </div>

      <div className="todosForm-submit">
        <button
          className="btn"
          onClick={addTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {props.mode === "edit" ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default ToDosForm;
