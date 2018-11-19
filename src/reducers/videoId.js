export default function videoReducers(state = "WRkIL7aDyEE", action) {
  if (action.type === "SET_VIDEOID") {
    return action.payload;
  } else {
    return state;
  }
}
