import React from "react";

const person = props => {
  return (
    <>
      <p>
        I'm {props.name} and i'm {props.age} year's old
      </p>{props.children}<p />
    </>
  );
};

export default person;
