import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ion", age: 32 },
      { name: "Laba", age: 28 },
      { name: "Valea", age: 31 },
    ],
  });

  const [otherState, setOtherState] = useState("some other state");

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 32 },
        { name: "Laba", age: 15 },
        { name: "Valea", age: 31 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Ion", age: 32 },
        { name: event.target.value, age: 15 },
        { name: "Valea", age: 31 },
      ],
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hi, I'm Ion</h1>
      <p>Prosta huibala obichnaya</p>
      <button style={style} onClick={() => switchNameHandler("Vaniusha")}>
        Switch button
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        changed={nameChangeHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler}
      >
        I am Vaniusha's girlfriend
      </Person>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
