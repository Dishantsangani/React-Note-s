import React from "react";

function Ternory() {
  // Using If Else Statements
  let a = 10;
  if (a <= 10) {
    console.log("This is Using If Statement");
  } else {
    console.log("This is else Statement");
  }
  // Using Single line Statement
  b = a <= 10 ? "True" : "false";
  return (
    <>
      <h1>This is a Ternory Operator's</h1>
    </>
  );
}

export default Ternory;
