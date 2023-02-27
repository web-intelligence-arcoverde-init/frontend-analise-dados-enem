import { combineReducers } from 'redux'

import filters from './filter/reducer'

import results from './results/reducer'

export default combineReducers({
  filters,
  results,
})
