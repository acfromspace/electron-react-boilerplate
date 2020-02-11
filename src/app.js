import React, { Component } from "react";
import StateManagement from "./components/state-management";
import TextBoxInput from "./components/text-box-input";
import ToDoList from "./components/to-do-list";
import Pokemon from "./components/pokemon";
import ElectronContextMenu from "./components/electron-context-menu";
import TodoApp from "./components/to-do-list-2/to-do-app";

// import ContextMenu from "react-context-menu";

/**
 * This function renders the application.
 * @param {none}
 * @returns {App} Returns the home page.
 * @example Show an example here.
 */
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id={"testingReact"}>Testing File</p>
          <h2>app.js</h2>
          <p>
            Edit <code>src/app.js</code> and save to reload.
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
          <TodoApp />
          <Pokemon />
          <ElectronContextMenu />
        </header>
      </div>
    );
  }
}
