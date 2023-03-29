import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";

import "assets/styles/_global.scss";

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
