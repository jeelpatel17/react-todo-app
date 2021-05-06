import React from "react";

export const Todo = (props) => {
  return (
    <div className="todo-container">
      <h4>
        {props.todo.no + 1}.{props.todo.title}
      </h4>
      <h6>{props.todo.desc}</h6>
      <button
        className="btn btn-danger btndel btn-sm"
        onClick={() => {
          props.onDelete(props.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
