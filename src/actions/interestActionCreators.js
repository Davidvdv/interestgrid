import * as actionTypes from './const'

export function addInterest(text) {
  return {
    type: actionTypes.ADD_INTEREST,
    text
  }
}

export function deleteInterest(id) {
  return {
    type: actionTypes.DELETE_INTEREST,
    id
  }
}

export function incrementImportance(id) {
  return {
    type: actionTypes.INCREMENT_IMPORTANCE,
    id
  }
}
