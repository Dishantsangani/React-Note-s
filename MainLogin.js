import React, { useState } from "react";

function MainLogin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Showng Error in Span Tag's
  const [usererror, setUsererror] = useState(false);
  const [Passworderror, setPassworderror] = useState(false);
  const [confirmPassworderror, setconfirmPassworderror] = useState(false);

  // Form  Submit Handler
  function Login(e) {
    e.preventDefault();
    if (user.length < 3 || password.length < 8 || password != confirmPassword) {
      alert("Enter Valid Details ");
    } else {
      alert("Submitted Successfully ✔ ");
    }
  }
  //   User Handler
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUsererror(true);
    } else {
      setUsererror(false);
    }
    setUser(item);
  }

  //   Password Handler
  function Passwordhandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(item);
  }

  // Confirm Password Handler
  function confirmPasswordHandler(e) {
    let item = e.target.value;
    if (item != password) {
      setconfirmPassworderror(true);
    } else {
      setconfirmPassworderror(false);
    }
    setConfirmPassword(item);
  }

  return (
    <>
      <h1>This is a Main Login form</h1>
      <form onSubmit={Login}>
        <input
          type="text"
          onChange={userHandler}
          placeholder="Enter Your User ID"
        />
        {usererror ? <span>User Not Valid </span> : ""}
        <br />
        <br />
        <input
          type="password"
          onChange={Passwordhandler}
          placeholder="Enter Your Password"
        />
        {Passworderror ? <span> Password Not Valid must Be 8 Char </span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Confirm Password"
          onChange={confirmPasswordHandler}
        />
        {confirmPassworderror ? <span>Password Are Not Same</span> : ""}
        <br />
        <br />
        <button type="Submit" onClick={Login}>
          Submit
        </button>
      </form>
    </>
  );
}

export default MainLogin;
