// src/components/TodoItem.js
import React from "react";
import Button from "./Button";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex justify-between items-center p-3 mb-2 bg-white shadow-md rounded">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
      >
        {todo.text}
      </span>
      <div class name="flex space x-2">
        <Button variant="secondary" onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="danger" onClick={() => removeTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
