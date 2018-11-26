export default function userReducer(
  state = { displayName: "", email: "" },
  action
) {
  if (action.type === "SET_USER") {
    return action.payload;
  } else {
    return state;
  }
}
