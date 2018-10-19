import counter from "./counter";
import timer from "./timer";
import { combineReducers } from "redux";

export default combineReducers({
  counter,
  timer
});
