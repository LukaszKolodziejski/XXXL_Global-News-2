import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import articleReducer from "./store/reducers/article";
import articlesIndexReducer from "./store/reducers/articlesIndex";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { watchArticlesIndex } from "./store/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = {
  article: articleReducer,
  articlesIndex: articlesIndexReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchArticlesIndex);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
