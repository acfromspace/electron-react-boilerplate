import React, { Component } from "react";
import StateManagement from "./components/StateManagement";
import TextBoxInput from "./components/TextBoxInput";
import ToDoList from "./components/ToDoList";

/**
 * This function renders the application.
 * @param {none}
 * @returns {App} Returns the home page.
 * @example Show an example here.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          <StateManagement />
          <TextBoxInput />
          <ToDoList />
        </header>
      </div>
    );
  }
}

export default App;
