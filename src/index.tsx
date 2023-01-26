import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
// import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

import {App} from './App';
import './index.css';
import {history} from './services';
import './fontawesome';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);

