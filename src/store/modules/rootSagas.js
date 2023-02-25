import { all } from 'redux-saga/effects'

import filters from './filter/sagas'

export default function* rootSaga() {
  return yield all({ filters })
}
