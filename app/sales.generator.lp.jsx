import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import middleWare from 'redux-thunk';
import reducers from './reducers';
import App from './components/SalesGeneratorLP.jsx';

const store = createStore(reducers, {}, applyMiddleware(middleWare));

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);