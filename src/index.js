import './css/index.css';

import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import App from './App';
import {contactReducer} from './redux'


const rootReducer = combineReducers({
    contact: contactReducer
})
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store} >
        <App />
    </Provider>)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
