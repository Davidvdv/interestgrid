import {ADD_INTEREST, DELETE_INTEREST, INCREMENT_IMPORTANCE} from '../actions/const'

function interests(state = [], action) {
  switch (action.type) {
    case ADD_INTEREST:
      console.log(ADD_INTEREST);
      break;
    case DELETE_INTEREST:
      return state.filter((interest) => interest.id != action.id);
    case INCREMENT_IMPORTANCE:
      return state.map((interest) => {
        if (interest.id === action.id) {
          return Object.assign({}, interest, {importance: interest.importance +1});
        }
        return interest
      });
    default:
      return state;
  }
}

export default interests;
