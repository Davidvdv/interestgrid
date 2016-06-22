import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import interests from './interests'

const rootReducer = combineReducers({interests, routing: routerReducer});
export default rootReducer;
