import axios from 'axios'

export default class Test {
  static fetch() {
    return axios.get('http://matthias-gattermeier-7480.nyhq.nytint.com:3000/api/test')
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log('API CALL ERR', err)
      })
  }
}
