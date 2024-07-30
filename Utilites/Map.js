import React from "react";

function Map() {
  const students = ["Anil", "Sidhu", "Sam", "Peter"];

  //   Using Map Method
  //   students.map((item) => {
  //     console.log("My Nmae is " + item);
  //   });

  //   Using For Loop
  //   for (let i = 0; i < students.length; i++) {
  //     console.log("My Name is ForLoop" + students);
  //   }
  return (
    <>
      <h1>This is a React List</h1>
      {/* Using Map Method */}
      {students.map((data) => (
        <h1>Name is :{data}</h1>
      ))}
    </>
  );
}

export default Map;
