import React, { useState } from "react";

export default function StateManagement() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h2>StateManagement.js</h2>
      <p>
        You clicked {state} times! This is the state times 5: {state * 5}
      </p>
      <button onClick={() => setState(state + 1)}>Click me!</button>
    </div>
  );
}
