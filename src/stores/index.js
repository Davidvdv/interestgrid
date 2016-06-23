import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/index';
import interests from '../sources/interests';
import {saveState, loadState} from './localStorage';
import throttle from 'lodash.throttle';

const defaultState = loadState() ? loadState() : {interests};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());
export const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

export default store;
