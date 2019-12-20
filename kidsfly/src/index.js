import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './store/reducers'
import App from './components/App';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const stores = createStore(rootReducer,/*preloadedState,*/ composeEnhancers(applyMiddleware(thunk, logger)
))

ReactDOM.render(
    <Provider store={stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

