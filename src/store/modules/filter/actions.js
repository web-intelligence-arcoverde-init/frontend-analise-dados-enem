import Types from './types'

export function readEyarsRequest() {
  return { type: Types.READ_YEARS_REQUEST }
}

export function readEyarsSuccess(data) {
  return { type: Types.READ_YEARS_SUCCESS, data }
}

export function changerValueFilterSelect(data) {
  return { type: Types.CHANGER_VALUE_FILTER_SELECT, data }
}

export function readUfRequest(data) {
  return { type: Types.READ_UF_REQUEST, data }
}

export function readUfSuccess(data) {
  return { type: Types.READ_UF_SUCCESS, data }
}

export function readCityRequest(data) {
  return { type: Types.READ_CITY_REQUEST, data }
}

export function readCitySuccess(data) {
  return { type: Types.READ_CITY_SUCCESS, data }
}
