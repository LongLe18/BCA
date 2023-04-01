
import { takeLatest, all, takeEvery } from "redux-saga/effects";
import * as types from '../actions/types'
import { setCurrentPage } from './common'

export default function* storeAll() {
    yield all([takeEvery(types.SET_CURRENT_PAGE, setCurrentPage)]);
}