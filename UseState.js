import React, { useState } from "react";

function UseState() {
  const [add, setAdd] = useState(0);
  return (
    <>
      <h1>This is a UseState</h1>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Click Me</button>
    </>
  );
}

export default UseState;
