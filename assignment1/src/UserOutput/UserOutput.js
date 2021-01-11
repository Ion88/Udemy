import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>Username: {props.userName}</p>
      <p onChange={props.changed} onClick={props.click}>
        When clicking should change the text
      </p>
    </div>
  );
};

export default userOutput;
