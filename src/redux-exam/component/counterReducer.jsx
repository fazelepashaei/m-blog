const intialState = {
  counter: 0,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
export default reducer;
