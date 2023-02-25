/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects'

import api from '../../../services/api'

import Types from './types'
import { readEyarsSuccess, readUfSuccess, readCitySuccess } from './actions'

export function* searchYears() {
  try {
    const response = yield call(api.get, '/ano')
    const res = response.data
    yield put(readEyarsSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export function* searchUfByYear(data) {
  try {
    const response = yield call(api.post, '/estados', { ano: data.data })
    const res = response.data
    yield put(readUfSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export function* searchCity(data) {
  try {
    const response = yield call(api.post, '/cidades', data.data)
    const res = response.data
    yield put(readCitySuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest(Types.READ_YEARS_REQUEST, searchYears),
  takeLatest(Types.READ_UF_REQUEST, searchUfByYear),
  takeLatest(Types.READ_CITY_REQUEST, searchCity),
])
