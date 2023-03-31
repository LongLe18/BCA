import { put, select } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* setCurrentPage(currentPage) {
    yield put(actions.setCurrentPage(currentPage))
}
export const selector = (state) => {
    return state.data;
}