import * as types from "./types";

export function setCurrentPage(params?, callback?) {
  return {
      type: types.SET_CURRENT_PAGE,
      params,
      callback,
  };
}