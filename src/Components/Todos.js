import React from "react";
import { Todo } from "./Todo";

export default function Todos(props) {
  return (
    <div className="todo-parent mx-auto">
      <h3 className="text-center">To-do's List</h3>
      {props.todos.length === 0
        ? `Hurray! Nothing To-Do!`
        : props.todos.map((todo) => {
            return <Todo key={todo.no} todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
}
