import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * This function renders the application.
 * @param {none}
 * @returns {App} Returns the home page.
 * @example Show an example here.
 */
function App() {
  let initialState = 0;
  const [state, setstate] = useState(initialState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <p>
          You clicked {state} times! This is the state times 5: {state * 5}
        </p>
        <button onClick={() => setstate(state + 1)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
