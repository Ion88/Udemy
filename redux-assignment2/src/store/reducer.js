const initialState = {
  persons: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_PERSON") {
    return {
      persons: state.persons + 1,
    };
  }
  return state;
};

export default reducer;
