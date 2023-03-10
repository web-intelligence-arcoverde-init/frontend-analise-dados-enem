import { takeLatest, all, call, put } from 'redux-saga/effects'

import api from '../../../services/api'

import Types from './types'
import {
  readSkillsSuccess,
  readCompetenceSkillSuccess,
  readBestSkillsSuccess,
  readSkillBySuccess,
  readEssaySuccess,
} from './actions'

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

export function* buscarTopMelhoresHabilidadesEscola() {
  try {
    const localObject = localStorage.getItem('data')

    const { ano, tecnologia, escola } = JSON.parse(localObject)

    const response = yield call(api.post, '/melhores-habilidades-por-materia', {
      cod_inep: escola,
      materia: tecnologia,
      ano,
    })
    const res = response.data
    yield put(readBestSkillsSuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export function* buscarGabaritoPorHabilidade() {
  try {
    const localObject = localStorage.getItem('data')

    const { ano, tecnologia, escola } = JSON.parse(localObject)

    const response = yield call(api.post, '/gabarito-habilidade', {
      cod_inep: escola,
      materia: tecnologia,
      ano,
    })
    const res = response.data
    yield put(readSkillBySuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export function* buscarGabaritoPorConjuntoCompetenciaHabilidade() {
  try {
    const localObject = localStorage.getItem('data')

    const { ano, tecnologia, escola } = JSON.parse(localObject)

    const response = yield call(
      api.post,
      '/gabarito-conjunto-competencia-habilidade',
      {
        cod_inep: escola,
        materia: tecnologia,
        ano,
      },
    )

    yield put(readCompetenceSkillSuccess(response.data.questoes))
  } catch (error) {
    console.log(error)
  }
}

export function* buscarMediaRedacaoEscola() {
  try {
    const localObject = localStorage.getItem('data')

    const { ano, escola } = JSON.parse(localObject)

    const response = yield call(api.post, '/media-redacao-escola', {
      cod_inep: escola,
      ano,
    })
    const res = response.data
    yield put(readEssaySuccess(res))
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest(Types.READ_SKILLS_REQUEST, buscarGabaritoPorTecnologia),
  takeLatest(
    Types.READ_FEEDBACK_COMPETENCE_SKILL_REQUEST,
    buscarGabaritoPorConjuntoCompetenciaHabilidade,
  ),

  takeLatest(
    Types.READ_BEST_SKILLS_REQUEST,
    buscarTopMelhoresHabilidadesEscola,
  ),

  takeLatest(Types.READ_SKILL_BY_REQUEST, buscarGabaritoPorHabilidade),
  takeLatest(Types.READ_ESSAY_REQUEST, buscarMediaRedacaoEscola),
])
