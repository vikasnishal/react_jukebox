import { combineReducers } from "redux";
import results from "./results";
import query from "./query";
import videoId from "./videoId";
import playlist from "./playlist";

export default combineReducers({
  results,
  query,
  videoId,
  playlist
});
