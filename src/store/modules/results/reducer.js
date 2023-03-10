import { produce } from 'immer'
import Types from './types'

const INITIAL_STATE = {
  skills: [],
  example: [],
  hightSkills: {},
  skillBySelect: [],
  essayAverage: { data: [], descricaoComposicao: [] },
  loadingEssayAverage: true,
}

export default function Results(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_SKILLS_SUCCESS: {
      return produce(state, draft => {
        draft.skills = actions.data
      })
    }

    case Types.READ_FEEDBACK_COMPETENCE_SKILL_SUCCESS: {
      return produce(state, draft => {
        draft.competenceSkills = actions.data
      })
    }

    case Types.READ_BEST_SKILLS_SUCCESS: {
      return produce(state, draft => {
        draft.hightSkills = actions.data
      })
    }

    case Types.READ_SKILL_BY_SUCCESS: {
      return produce(state, draft => {
        draft.skillBySelect = actions.data
      })
    }

    case Types.READ_ESSAY_SUCCESS: {
      return produce(state, draft => {
        draft.essayAverage = actions.data
        draft.loadingEssayAverage = false
      })
    }

    default:
      return state
  }
}
