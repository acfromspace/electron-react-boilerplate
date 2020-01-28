import React, { useState } from "react";

export default function TextBoxInput() {
  const [show, toggleShow] = useState(true);

  return (
    <div>
      <p>
        <div>
          {!show && <input type="text" placeholder="Enter information..." />}
        </div>
        <button onClick={() => toggleShow(!show)}>Text Box Input</button>
      </p>
    </div>
  );
}
