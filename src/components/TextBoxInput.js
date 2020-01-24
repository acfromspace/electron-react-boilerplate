import React, { useState } from "react";

export default function TextBoxInput() {
  const [show, toggleShow] = useState(true);

  return (
    <div>
      <p>
        <div>{!show && <textarea>Enter information...</textarea>}</div>
        <button onClick={() => toggleShow(!show)}>Text Box Input</button>
      </p>
    </div>
  );
}
