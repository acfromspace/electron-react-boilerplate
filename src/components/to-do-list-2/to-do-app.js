import React, { useState, useRef, useEffect } from "react";
import TodoList from "./to-do-list-2";
// Makes different IDs instead of the same ID when creating todos.
import uuidv4 from "uuid/v4";

// Implements saving in the application.
const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function TodoApp() {
  // Enables state.
  const [todos, setTodos] = useState([]);
  // Enables input to be read.
  const todoNameRef = useRef();

  // Load the previous [todos]...
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Anytime the [todos] changes...
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Always makes a copy of a previous todos, toggles incomplete VS. complete.
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  // Appends a new [todos].
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  // Sets all the `!todo.complete` [todos] as the `newTodos`.
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <h2>to-do-app.js</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* Whatever is in the input box, it takes as the reference to be manipulated. */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      {/* Finds the amount of the todos that are !todo.complete */}
      {todos.filter(todo => !todo.complete).length} left to do.
    </>
  );
}
