import React, { useState } from "react";
function Forms() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setIntrest] = useState("");

  function getFormData(e) {
    console.warn(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <>
      <h1>Ths Is a React Forms</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>select Option</option>
          <option>Usa</option>
          <option>DC</option>
          <option>Marvel</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Forms;
