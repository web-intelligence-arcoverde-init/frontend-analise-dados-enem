import Types from './types'

export function readSkillsRequest(data) {
  return { type: Types.READ_SKILLS_REQUEST, data }
}

export function readSkillsSuccess(data) {
  return { type: Types.READ_SKILLS_SUCCESS, data }
}
