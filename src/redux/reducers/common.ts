import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {currentPage: ""};

export const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    changeCurrentPage: (state = initialState, action: PayloadAction<any>) => {
      return {...state, currentPage: action.payload};
    },
  },
});

export const {changeCurrentPage} = commonSlice.actions;

export default commonSlice.reducer;
