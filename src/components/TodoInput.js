// src/components/TodoInput.js
import React, { useState } from "react";
import Button from "./Button";

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-black-500"
      />
      <Button variant="primary">Add</Button>
    </form>
  );
};

export default TodoInput;
