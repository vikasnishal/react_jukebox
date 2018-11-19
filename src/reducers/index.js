import { combineReducers } from "redux";
import results from "./results";
import query from "./query";
import videoId from "./videoId";

export default combineReducers({
  results,
  query,
  videoId
});
