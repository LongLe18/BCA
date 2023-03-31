import * as types from "./types";
export const setCurrentPage = currentPage => {
  return {
    type: types.SET_CURRENT_PAGE,
    data: currentPage,
  };
};
