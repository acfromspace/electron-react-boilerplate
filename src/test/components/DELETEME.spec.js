import React from "react";
import ReactDOM from "react-dom";
import App from "../../containers/App";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("DELETE ME", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
