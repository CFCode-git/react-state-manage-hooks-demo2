const reducer = (state, action) => {
  switch (action.type) {
    case "addB":
      return { ...state, BCount: state.BCount + action.payload.num };
    case "subtractB":
      return { ...state, BCount: state.BCount - action.payload.num };
    default:
      return state;
  }
};

export default reducer;
