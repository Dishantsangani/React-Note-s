import React, { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log();
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>This is a UseMemo</h1>
      <h2>Count:{count}</h2>
      <h2>item:{item}</h2>
      <h1>{multiCountMemo}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>

      <button onClick={() => setItem(item * 10)}>Update item</button>
    </>
  );
}

export default Memo;
