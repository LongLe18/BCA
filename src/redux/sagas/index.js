
import { all } from "redux-saga/effects";
import { loadsetCurrentPage } from './common'

export default function* rootSaga() {
    yield all([
        loadsetCurrentPage(),
    ])
}