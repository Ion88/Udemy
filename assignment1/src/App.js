import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

const app = (props) => {
  const [userState, setUserState] = useState({
    username: "Valea",
  });

  const nameChangeHandler = () => {
    setUserState({
      username: "Ion",
    });
  };

  const inputChangeHandler = (event) => {
    setUserState({ username: "Ion" }, { username: event.target.value });
  };

  return (
    <div className="App">
      <UserInput userName={userState.username} changed={inputChangeHandler} />
      <UserOutput userName={userState.username} click={nameChangeHandler} />
      <UserOutput userName={userState.username} />
      <UserOutput userName={userState.username} />
    </div>
  );
};

export default app;
