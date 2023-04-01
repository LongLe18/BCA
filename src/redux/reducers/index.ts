import {combineReducers} from "redux";
import common from "./common";

// Combines all reducers to a single reducer function.
// We import combineReducers from Redux. CombineReducers is a helper function that combines our videos reducers into a
// single reducer function that we can now pass to the creatorStore function.
export default combineReducers({ 
  common,
})