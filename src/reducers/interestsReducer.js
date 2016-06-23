import {ADD_INTEREST, DELETE_INTEREST, INCREMENT_IMPORTANCE} from '../actions/const';
import uuid from 'uuid';

function interests(state = [], action) {
  switch (action.type) {
    case ADD_INTEREST:
      return Object.assign([], state, [
          {
            id: uuid.v4(),
            text: action.text,
            relevance: 0,
            siblings: []
          },
          ...state
        ]);
    case DELETE_INTEREST:
      return state.filter((interest) => interest.id != action.id);
    case INCREMENT_IMPORTANCE:
      return state.map((interest) => {
        if (interest.id === action.id) {
          return Object.assign({}, interest, {relevance: interest.relevance + 1});
        }
        return interest
      });
    default:
      return state;
  }
}

export default interests;
