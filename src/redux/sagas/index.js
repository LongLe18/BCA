
import { takeLatest, all, takeEvery } from "redux-saga/effects";
import * as types from '../actions/types'
import { setCurrentPage } from './common'

export default function* storeAll() {
    yield all([takeLatest(types.SET_CURRENT_PAGE, setCurrentPage)]);
}