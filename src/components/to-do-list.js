import React, { Component } from "react";

export default class ToDoList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       newItem: "",
  //       list: [],
  //     };
  //   }

  state = { newItem: "", list: [] };

  addItem() {
    // newItem has unique ID.
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // Copy current list of items.
    const list = [...this.state.list];
    // Add new item to list.
    list.push(newItem);
    // Update state with new list and reset newItem.
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    // Filter out item being deleted.
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(key, value) {
    // Update React state.
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter information..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>
                  Delete!
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
