import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
const initialState = {job: ""};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeState: (state, action) => {
      job: state;
    },
  },
});
const {actions, reducer} = todoSlice;
export const {changeState} = actions;
export const job = (state: RootState) => state.todos.job;
export default reducer;
