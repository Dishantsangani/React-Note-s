import React from "react";

const data = [
  {
    First: "Henriette",
    Last: "Anderson",
    Email: "Henriette.Anderson@dummyapis.com",
    Age: 54,
    ContactNumber: "4918897350	",
    dob: 3 / 11 / 1970,
  },
  {
    First: "Henriette",
    Last: "Anderson",
    Email: "Henriette.Anderson@dummyapis.com",
    Age: 54,
    ContactNumber: "4918897350	",
    dob: 3 / 11 / 1970,
  },
];

function Table() {
  return (
    <>
      <h1>This is Display employee Data</h1>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Age</th>
            <th>ContactNumber</th>
            <th>Dob</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td> {item?.First}</td>
                <td> {item?.Last}</td>
                <td> {item?.Email}</td>
                <td> {item?.Age}</td>
                <td> {item?.ContactNumber}</td>
                <td> {item?.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
