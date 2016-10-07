import {
  TEST
} from '../constants';

const initialState = {
  data: { hello: 'world' }
};

export default function test(state = initialState, action) {
  console.log('test reducer called', action)
  const { data } = action

  switch (action.type) {
    case TEST:
      return Object.assign({}, action.data, { test: data })
    default:
      return Object.assign({}, state, { test:'default' })
  }
}
