import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import defaultReducer from './plugins/webapp/reducers';

export default function configureStore(initialState, history) {
  const finalCreateStore = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
    )(createStore);

  const store = finalCreateStore(defaultReducer, initialState);

  return store
}
