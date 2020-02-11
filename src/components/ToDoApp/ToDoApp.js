import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList2";
// Makes different IDs instead of the same ID when creating toDos.
import uuidv4 from "uuid/v4";

// Implements saving in the application.
const LOCAL_STORAGE_KEY = "toDoApp.toDos";

export default function ToDoApp() {
  // Enables state.
  const [toDos, setToDos] = useState([]);
  // Enables input to be read.
  const toDoNameRef = useRef();

  // Load the previous [toDos]...
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedToDos) setToDos(storedToDos);
  }, []);

  // Anytime the [toDos] changes...
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  // Always makes a copy of a previous toDos, toggles incomplete VS. complete.
  function toggleToDo(id) {
    const newToDos = [...toDos];
    const toDo = newToDos.find(toDo => toDo.id === id);
    toDo.complete = !toDo.complete;
    setToDos(newToDos);
  }

  // Appends a new [toDos].
  function handleAddToDo(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return;
    setToDos(prevToDos => {
      return [...prevToDos, { id: uuidv4(), name: name, complete: false }];
    });
    toDoNameRef.current.value = null;
  }

  // Sets all the `!toDo.complete` [toDos] as the `newToDos`.
  function handleClearToDos() {
    const newToDos = toDos.filter(toDo => !toDo.complete);
    setToDos(newToDos);
  }

  return (
    <>
      <h2>ToDoApp.js</h2>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} />
      {/* Whatever is in the input box, it takes as the reference to be manipulated. */}
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={handleClearToDos}>Clear Complete</button>
      {/* Finds the amount of the toDos that are !toDo.complete */}
      {toDos.filter(toDo => !toDo.complete).length} left to do.
    </>
  );
}
