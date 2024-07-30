import React from "react";
import { Outlet } from "react-router-dom";

function Useparams() {
  return (
    <>
      <h1>This is a Useparams</h1>
      <h2>Here We have Some other Business</h2>
      <Link to="Compay">Company</Link>
      <Link to="Chanel">Chanel</Link>
      <Link to="other">Other</Link>
      <Outlet />
    </>
  );
}

export default Useparams;
