import 'core-js';
import './css/index.css';

import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import App from './App';
import {contactReducer} from './redux'

if(process.env.REACT_APP_GMAPS_KEY === undefined)
    throw new Error('You forgot to add REACT_APP_GMAPS_KEY to .env')

const rootReducer = combineReducers({
    contact: contactReducer
})
const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
