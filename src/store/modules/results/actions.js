import Types from './types'

export function readSkillsRequest(data) {
  return { type: Types.READ_SKILLS_REQUEST, data }
}

export function readSkillsSuccess(data) {
  return { type: Types.READ_SKILLS_SUCCESS, data }
}

export function readCompetenceSkillRequest() {
  return { type: Types.READ_FEEDBACK_COMPETENCE_SKILL_REQUEST }
}

export function readCompetenceSkillSuccess(data) {
  return { type: Types.READ_FEEDBACK_COMPETENCE_SKILL_SUCCESS, data }
}
