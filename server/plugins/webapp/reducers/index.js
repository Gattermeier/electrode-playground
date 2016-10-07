
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import test from './test'

const defaultReducer = combineReducers({
  test,
  routing: routerReducer
})

export default defaultReducer;
