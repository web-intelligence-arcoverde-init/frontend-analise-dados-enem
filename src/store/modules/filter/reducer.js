import { produce } from 'immer'
import Types from './types'

const INITIAL_STATE = {
  years: [],
  uf: [],
  city: [],
  school: [],

  filterSelect: {
    ano: '',
    estado: '',
    cidade: '',
    escola: '',
    tecnologia: '',
  },
}

function Filters(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_YEARS_SUCCESS: {
      return produce(state, draft => {
        draft.years = actions.data
      })
    }

    case Types.READ_UF_SUCCESS: {
      return produce(state, draft => {
        draft.uf = actions.data
      })
    }

    case Types.READ_CITY_SUCCESS: {
      return produce(state, draft => {
        draft.city = actions.data
      })
    }

    case Types.READ_SCHOOL_SUCCESS: {
      return produce(state, draft => {
        draft.school = actions.data
      })
    }

    case Types.CHANGER_VALUE_FILTER_SELECT: {
      return produce(state, draft => {
        draft.filterSelect[actions.data.name] = actions.data.value
      })
    }

    default:
      return state
  }
}
export default Filters
