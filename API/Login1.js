import { useState } from "react";
// import "./App.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login1() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email, password });

  //   Email Hnadling
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // Password Handling
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //   API Handling
  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        // console.log(result.data);
        localStorage.setItem("userinfo", JSON.stringify(result.data));
        alert("success");
        Navigate("/");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
        Navigate("/* ");
      });
  };

  return (
    <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password :{" "}
      <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi}>Login</button>
    </div>
  );
}

export default Login1;
