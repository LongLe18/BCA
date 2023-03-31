import * as types from "../actions/types";

const initialState = {
  page: "",
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PAGE:
      return {...initialState};

    default:
      return state;
  }
};
export default common;
