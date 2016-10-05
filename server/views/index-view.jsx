import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { createStore } from "redux";
import { routes } from "../../client/routes";

let rootReducer = (s, a) => s;

function initialStoreState(path) {
  switch (path) {
    case '/': {
      return { data: "This data is obtained from Redux store" }
    }
    case '/200': {
      return { count: 200 }
    }
    default:
      return {};
  }
}

function storeInitializer(req) {
  const initialState = initialStoreState(req.path)
  const store = createStore(rootReducer, initialState);
  return store;
}

function createReduxStore(req, match) {
  const store = storeInitializer(req);
  return Promise.all([
      // DO ASYNC THUNK ACTIONS HERE : store.dispatch(boostrapApp())
      Promise.resolve({})
    ]).then(() => {
      return store;
  });
}

module.exports = (req) => {

  if (!req.server.app.routesEngine) {
    req.server.app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore });
  }

  return req.server.app.routesEngine.render(req);
};
