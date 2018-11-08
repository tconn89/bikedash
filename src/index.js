import 'core-js';
import './css/index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.GMAPS_KEY === undefined)
    throw new Error('You forgot to add GMAPS_KEY to .env')

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
