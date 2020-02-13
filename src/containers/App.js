import React, { Component } from "react";
import Pokemon from "../components/Pokemon";
import StateManagement from "../components/StateManagement";
import TextBoxInput from "../components/TextBoxInput";
import ToDoApp from "../components/ToDoApp/ToDoApp";
import ToDoList from "../components/ToDoList";

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
          <h2>App.js</h2>
          <p id={"testTestcafe"}>Testcafe test!</p>
          <p>
            Edit <code>src/containers/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
          <Pokemon />
          <StateManagement />
          <TextBoxInput />
          <ToDoApp />
          <ToDoList />
        </header>
      </div>
    );
  }
}
