import types from '../actions/types';

const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString(),
    header: 'The time is...'
};

function clockReducer(state=DEFAULT_STATE,action){
    switch(action.type){
        case types.UPDATE_TIME:
                return {...state, time: action.currentTime };//...state will be deconstructed;don't need break since return will get out of the function
        default:
                return state;
    }

}

export default clockReducer;