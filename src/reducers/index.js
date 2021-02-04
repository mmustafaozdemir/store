import { combineReducers } from "redux";
import * as basketReducer from "./basket";

export default (history) =>
  combineReducers({
    ...basketReducer,
  });
