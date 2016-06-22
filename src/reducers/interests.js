import {ADD_INTEREST, DELETE_INTEREST, INCREMENT_LIKES} from '../actions/const'

function interests(state = [], action) {
  switch (action) {
    case ADD_INTEREST:
      console.log(ADD_INTEREST);
      break;
    case DELETE_INTEREST:
      console.log(DELETE_INTEREST);
      break;
    case INCREMENT_LIKES:
      console.log(INCREMENT_LIKES);
      break;
    default:
      return state;
  }
}

export default interests;
