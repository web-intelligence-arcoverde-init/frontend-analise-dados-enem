import { all } from 'redux-saga/effects'

import filters from './filter/sagas'
import results from './results/sagas'

export default function* rootSaga() {
  return yield all({ filters, results })
}
