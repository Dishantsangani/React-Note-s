import React, { useContext } from "react";
import { data, data1 } from "../App";
function Contextappi() {
  const { appname, getday } = useContext(data);
  const { appgender } = useContext(data1);

  // Sending the Child To Parent Component's
  const day = "Sunday";

  return (
    <>
      <h1 style={{ color: appname }}>
        This is A Child Component To Context API
      </h1>
      <h1 style={{ color: appgender }}>
        This is A Child Component To Context API
      </h1>
      <button onClick={() => getday(day)}>Click</button>
    </>
  );
}

export default Contextappi;
