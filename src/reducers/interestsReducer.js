import * as actionTypes from '../actions/const';
import uuid from 'uuid';

function interests(state = [], action) {
  switch (action.type) {

    case actionTypes.FETCH_INTERESTS_SUCCEEDED:
      console.log('FETCH_INTERESTS_SUCCEEDED', state)
      return state;

    case actionTypes.PUSH_INTEREST_SUCCEEDED:
      console.log('PUSH_INTEREST_SUCCEEDED', state)
      return state;

    case actionTypes.ADD_INTEREST:
      return [{ id: uuid.v4(), text: action.text, relevance: 0, siblings: []}, ...state];

    case actionTypes.DELETE_INTEREST:
      return state.filter((interest) => interest.id != action.id);

    case actionTypes.INCREMENT_IMPORTANCE:
      return state.map((interest) => {
        if (interest.id === action.id) {
          return Object.assign({}, interest, {relevance: interest.relevance + 1});
        }
        return interest;
      });

    default:
      return state;
  }
}

export default interests;
