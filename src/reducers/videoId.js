export default function videoReducers(state = "", action) {
  if (action.type === "SET_VIDEOID") {
    return action.payload;
  } else {
    return state;
  }
}
