import "./App.css";
import Todos from "./Components/Todos";
import { AddTodo } from "./Components/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.info("Delete, seriously!?", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let no;
    // console.log("I'm adding this todo", title, desc);
    if (todos.length === 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: no,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let headStyle = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="App">
      <h2 style={headStyle} className="text-center">
        To-Do List App!
      </h2>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
