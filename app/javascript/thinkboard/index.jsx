
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
// import '../assets/stylesheets/application.scss';

// State and reducers
import postitsReducer from './reducers/postits_reducer';

const initialState = {
  postits: [],
  // currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

const reducers = combineReducers({
  postits: postitsReducer,
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);