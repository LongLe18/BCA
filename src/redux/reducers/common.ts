import * as types from "../actions/types";

const initialState = {
  page: {
    loading: false,
    result: {},
    error: null,
  },
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        page: { ...state.page, loading: false, result: action.result },
    };

    default:
      return state;
  }
};
