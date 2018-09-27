import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import App from './App';
import {createStore} from 'redux';
import timer from '../src/redux';

const store = createStore(timer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
