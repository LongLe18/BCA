import React from "react";
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers";
import storeAll from "./redux/sagas";
import '../src/index.scss'
import { createRoot } from "react-dom/client";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const container = document.getElementById("root");
sagaMiddleware.run(storeAll);
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#C83B3C',
                    },
                }}
            >
                <App />
            </ConfigProvider>

        </BrowserRouter>
    </Provider>
);
