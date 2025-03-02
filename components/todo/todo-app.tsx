"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SetStateAction, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <Card className="w-full max-w-md p-4">
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="mr-2 flex-1"
          />
          <Button onClick={handleAddTodo}>Add</Button>
        </div>
        <ul className="list-disc pl-5">
          {todos.map((todo, index) => (
            <li key={index} className="py-1">
              {todo}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TodoApp;
