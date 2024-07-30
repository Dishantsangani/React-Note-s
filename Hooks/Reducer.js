import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>This is The Reducer Hooks</h1>
      <div>count {count}</div>
      {/* <p>I am {Adjective}</p> */}
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </>
  );
}

export default Reducer;
