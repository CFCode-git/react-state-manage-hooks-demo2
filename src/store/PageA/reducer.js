const reducer = (state, action) => {
  switch (action.type) {
    case "addA":
      return { ...state, ACount: state.ACount + action.payload.num };
    case "subtractA":
      return { ...state, ACount: state.ACount - action.payload.num };
    default:
      return state;
  }
};
export default reducer;
