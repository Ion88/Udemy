const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_PERSON") {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40),
    };
    return {
      ...state,
      persons: state.persons.concat(newPerson),
    };

    if (action.type === "REMOVE_PERSON") {
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== personId),
      };
    }
  }
  return state;
};

export default reducer;
