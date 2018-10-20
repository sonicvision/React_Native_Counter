import counter from "./counter";
import timer from "./timer";
import coffee from "./coffee";
import { combineReducers } from "redux";

export default combineReducers({
  counter,
  timer,
  coffee
});
