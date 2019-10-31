import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store"
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./redux/StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});




serviceWorker.unregister();




