import React from "react";
import OnClick from "./OnClick";

const Props = (props) => {
  return (
    <>
      <p>{props.title}</p>
      <h1>{props.title}</h1>
      <OnClick />
    </>
  );
};

export default Props;
