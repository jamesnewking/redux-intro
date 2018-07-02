import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import clockReducer from './clock_reducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    user: userReducer
});

export default rootReducer;
