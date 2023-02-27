import { produce } from 'immer'
import Types from './types'

const INITIAL_STATE = {
  skills: [],
}

export default function Results(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_SKILLS_SUCCESS: {
      return produce(state, draft => {
        draft.skills = actions.data
      })
    }

    default:
      return state
  }
}
