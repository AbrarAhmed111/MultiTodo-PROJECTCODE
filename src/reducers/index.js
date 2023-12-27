// reducers/index.js
import { combineReducers } from 'redux';
import authReducers from './authReducers';

const rootReducer = combineReducers({
 authReducers,
});

export default rootReducer;
