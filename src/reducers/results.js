export default function resultsReducers(state = [], action) {
  if (action.type === "SET_RESULTS") {
    return action.payload;
  } else {
    return state;
  }
}
