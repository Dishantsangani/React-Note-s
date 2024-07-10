import React from "react";

function Onchange() {
  const handleinput = () => {
    console.log("Something Happening  ");
  };
  return (
    <>
      <h1>Enter Some Value Inside</h1>
      <input type="text" onChange={(e) => handleinput()} />
      <h1>Show In Something in console</h1>
    </>
  );
}

export default Onchange;
