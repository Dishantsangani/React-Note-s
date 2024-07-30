import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Ram");
  useEffect(() => {
    console.log("component Monted");
  }, [count]);

  function updateCount() {
    setCount(count + 1);
  }
  function updatedata() {
    setData("Shita");
  }
  return (
    <>
      <h1>This is a useEffect{count}</h1>
      <button onClick={updateCount}>Click me</button>
      <button onClick={updatedata}>Update</button>
    </>
  );
}

export default Effect;
