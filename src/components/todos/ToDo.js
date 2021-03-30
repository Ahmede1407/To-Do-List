import React from "react";
import FeatherIcon from "feather-icons-react";

const ToDo = (props) => {
  let { id, title, done } = props.todo;
  return (
    <div className={done ? "todosTodo done" : "todosTodo"}>
      <div
        className="todosTodo-icon"
        onClick={() => props.handleCompletedTodo(id)}
      >
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>

      <div className="todosTodo-text">{title}</div>

      <div className="todosTodo-CTA">
        <div className="CTA-edit">
          <FeatherIcon icon="edit" size="20" />
        </div>
        <div className="CTA-delete" onClick={() => props.deleteTodo(id)}>
          <FeatherIcon icon="trash-2" size="20" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
