import React from "react";
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import '../src/index.scss'
import { createRoot } from "react-dom/client";
import App from "./App";

import store from 'redux/store.ts';

const root = createRoot(document.getElementById('root'));
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
