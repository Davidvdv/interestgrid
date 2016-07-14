import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import interests from '../sources/interests';
import sagas from '../sagas/sagas'
import {saveState, loadState} from './localStorage';
import throttle from 'lodash.throttle';

const defaultState = loadState() ? loadState() : {interests};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension()));
export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(sagas);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

export default store;
