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

export function readBestSkillsRequest() {
  return { type: Types.READ_BEST_SKILLS_REQUEST }
}

export function readBestSkillsSuccess(data) {
  return { type: Types.READ_BEST_SKILLS_SUCCESS, data }
}

export function readSkillByRequest() {
  return { type: Types.READ_SKILL_BY_REQUEST }
}

export function readSkillBySuccess(data) {
  return { type: Types.READ_SKILL_BY_SUCCESS, data }
}

export function readEssayRequest() {
  return { type: Types.READ_ESSAY_REQUEST }
}

export function readEssaySuccess(data) {
  return { type: Types.READ_ESSAY_SUCCESS, data }
}
