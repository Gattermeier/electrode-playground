import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { createStore } from 'redux';
import { routes } from "../../client/routes";
import configureStore from '../store';
import { createMemoryHistory } from 'react-router';
// let rootReducer = (s, a) => s;



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

function storeInitializer(req, match) {
  // const memoryHistory = createMemoryHistory(req.path)
  const initialState = initialStoreState(req.path)
  const store = configureStore(initialState, match.history)
  // const store = createStore(rootReducer, initialState);
  return store;
}

// component specific initial action dispatch for SSR
function fetchComponentData(store, renderProps, headers) {
  const needs = renderProps.components.reduce((prev, current) => {
    return current ? (current.needs || []).concat(prev) : prev;
  }, []);
  const promises = needs.map((need) => store.dispatch(need(renderProps.params, headers)));
  return Promise.resolve(Promise.all(promises));
}

function createReduxStore(req, match) {


  console.log('match,' , match)
  // get Initial Store, incl inital state for requested path (syncronous, plain object)
  const store = storeInitializer(req, match);

  // async thunk actions
  return Promise.all([
      // DO ASYNC THUNK ACTIONS HERE : store.dispatch(boostrapApp())
      Promise.resolve({}),
      // async actions of components as in static needs array: static needs = [action1, actoin2]
      fetchComponentData(store, match.renderProps, req.headers)
    ]).then(() => store);
}

module.exports = (req) => {

  if (!req.server.app.routesEngine) {
    req.server.app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore });
  }

  return req.server.app.routesEngine.render(req);
};
