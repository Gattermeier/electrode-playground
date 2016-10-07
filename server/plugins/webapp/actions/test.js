import * as API from '../api/';
import { actionTypes } from '../constants'

const receiveData = (type, data) => ({ type, data });

export default class Test {
  static fetch(params = {}) {
    return (dispatch) => API.Test.fetch(params)
    .then((response) => dispatch(receiveData(actionTypes.TEST, response.data)))
    .catch((err) => dispatch(receiveData(actionTypes.ERROR, err)))
  }
}
