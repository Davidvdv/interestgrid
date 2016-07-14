import {takeEvery} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import * as actionTypes from '../actions/const';

function* fetchInterests(action) {
  try {
    const interests = yield call(() =>
      fetch('https://interestgrid.firebaseio.com/interests.json')
        .then(resp => resp.json())
    );
    yield put({type: actionTypes.FETCH_INTERESTS_SUCCEEDED, payload: interests});
  }
  catch (err) {
    yield put({type: actionTypes.FETCH_INTERESTS_FAILED, message: err.message});
  }
}

function* pushInterest(action) {
  try {
    const interest = yield call(() =>
      fetch('https://interestgrid.firebaseio.com/interests.json')
        .then(resp => resp.json())
    );
    yield put({type: actionTypes.PUSH_INTEREST_SUCCEEDED, payload: interest});
  }
  catch (err) {
    yield put({type: actionTypes.FETCH_INTERESTS_FAILED, message: err.message});
  }
}

function* saga() {
  yield* takeEvery(actionTypes.FETCH_INTERESTS_REQUESTED, fetchInterests);
  yield* takeEvery(actionTypes.PUSH_INTEREST_REQUEST, pushInterest);
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "FETCH_INTERESTS_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
// function* saga() {
//   yield* takeEvery(actionTypes.FETCH_INTERESTS_REQUESTED, fetchInterests);
// }

export default saga;
