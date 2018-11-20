export default function playlistReducers(state = [], action) {
  if (action.type === "EDIT_VIDEO_PLAYLIST") {
    return action.payload;
  } else {
    return state;
  }
}
