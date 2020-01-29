import React from "react";

export default function ElectronContextMenu() {
  return (
    <div>
      <h2>electron-context-menu.js</h2>
      <button
        id="myButton"
        onClick={() =>
          (document.getElementById("someText").innerHTML = "I was clicked!")
        }
        onContextMenu={() =>
          (document.getElementById("someText").innerHTML =
            "I was right clicked!")
        }
      >
        Click me
      </button>
      <div id="someText">I was not clicked</div>
      {/* <ContextMenu
        contextId={"someText"}
        items={[
          {
            label: "Configure",
            onClick: this.configHandler,
            icon: "path/to/icon.svg",
          },
          {
            label: "Delete",
            onClick: this.deleteHandler,
          },
        ]}
      /> */}
    </div>
  );
}
