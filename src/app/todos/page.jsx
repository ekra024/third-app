"use client";

import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );

      const data = await res.json();
      setTodos(data);
    }
    fetchData();
  }, []);

  console.log(todos);

  return (
    <div className="text-center">
      <h1>All Todos are here</h1>
      {todos.map((todo) => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </div>
  );
}
