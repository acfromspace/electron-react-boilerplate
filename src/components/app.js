import React, { Component } from "react";
import StateManagement from "./state-management";
import TextBoxInput from "./text-box-input";
import ToDoList from "./to-do-list";
import Pokemon from "./pokemon";
import ElectronContextMenu from "./electron-context-menu";
import TodoApp from "./to-do-list-2/to-do-app";

import ContextMenu from "react-context-menu";

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
