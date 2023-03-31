import React from "react";
import { Button, ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";

import '../src/index.scss'
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

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
