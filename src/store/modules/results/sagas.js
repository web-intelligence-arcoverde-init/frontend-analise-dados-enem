import { takeLatest, all, call, put } from 'redux-saga/effects'

import api from '../../../services/api'

import Types from './types'
import { readSkillsSuccess } from './actions'

export function* buscarGabaritoPorTecnologia() {
  try {
    const localObject = localStorage.getItem('data')

    const { ano, tecnologia, escola } = JSON.parse(localObject)

    const response = yield call(api.post, '/gabarito-tecnologia', {
      cod_inep: escola,
      materia: tecnologia,
      ano,
    })
    const res = response.data
    yield put(readSkillsSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest(Types.READ_SKILLS_REQUEST, buscarGabaritoPorTecnologia),
])
