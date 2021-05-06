import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter To-Do Title!");
    } else if (title || desc) {
      props.addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <form onSubmit={submit} className="mx-auto addTodo">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Work To-Do*
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            placeholder="I want to get this thing done..."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Note (Optional)
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            placeholder="Anything specific..."
            id="desc"
          />
        </div>
        <button type="submit" className="btn btrd">
          Add
        </button>
      </form>
    </div>
  );
};
