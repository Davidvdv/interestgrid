import * as actionCreators from './const'

export function addInterest(text) {
  return {
    type: actionCreators.ADD_INTEREST,
    text
  }
}

export function deleteInterest(id) {
  return {
    type: actionCreators.DELETE_INTEREST,
    id
  }
}

export function incrementLikes(id) {
  return {
    type: actionCreator.INCREMENT_LIKES,
    id
  }
}
