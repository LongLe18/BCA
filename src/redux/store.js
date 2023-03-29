import { configureStore } from "@reduxjs/toolkit";
import position from './positionSlice';

const rootReducer = {
    position
}

const store = configureStore({
    reducer: rootReducer
})

export default store;