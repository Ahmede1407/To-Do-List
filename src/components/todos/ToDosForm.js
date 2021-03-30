import React from "react";
import FeatherIcon from "feather-icons-react";

function ToDosForm() {
  return (
    <div className="todosForm">
      <div className="todosForm-icon">
        <FeatherIcon icon="circle" />
      </div>

      <div className="todosForm-form">
        <input type="text" placeholder="Add New Task." />
      </div>

      <div className="todosForm-submit">
        <button className="btn">Add</button>
      </div>
    </div>
  );
}

export default ToDosForm;
