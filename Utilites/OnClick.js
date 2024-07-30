import React from "react";
function OnClick() {
  // Passing Arguments
  function dev(a) {
    alert(a);
  }
  function dev2() {
    alert("Hello Everyone");
  }
  return (
    <>
      <h1>Welcome To SoftQube</h1>
      {/* Passing Arguments */}
      <button onClick={() => dev("hello")}>Click Me</button>
      <button onClick={dev2}>Click Me</button>
    </>
  );
}
export default OnClick;
