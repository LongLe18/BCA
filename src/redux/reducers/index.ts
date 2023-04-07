import {combineReducers} from "@reduxjs/toolkit";
import commonReducer from "./common";
// import positionReducer from 'redux/'

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
