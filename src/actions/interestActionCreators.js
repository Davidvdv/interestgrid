import * as actionTypes from './const';

export function fetchInterests() {
  return {
    type: actionTypes.FETCH_INTERESTS_REQUESTED
  }
}

export function addInterest(text) {
  return {
    type: actionTypes.PUSH_INTEREST_REQUEST,
    text
  }
}

export function deleteInterest(id) {
  return {
    type: actionTypes.DELETE_INTEREST,
    id
  }
}

export function incrementRelevance(id) {
  return {
    type: actionTypes.INCREMENT_IMPORTANCE,
    id
  }
}
