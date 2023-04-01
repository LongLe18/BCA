import { call, put, takeEvery } from "redux-saga/effects";
import { notification } from 'antd';

import * as actions from "../actions/types";

function* setCurrentPage(payload) {
    const result = 'OK'
    yield put({ type: actions.SET_CURRENT_PAGE, result: result });

    if (payload.callback) {
        payload.callback(result);
    }
}

export const selector = (state) => {
    return state.data;
}

/////////////////////////////////////////////////
//////////////////////////////////////////////
export function* loadsetCurrentPage() {
    yield takeEvery(actions.SET_CURRENT_PAGE, setCurrentPage);
}