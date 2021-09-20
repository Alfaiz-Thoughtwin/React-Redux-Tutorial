import changeNumber from './upDown';
import mulDivNumber from './mulDiv'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeNumber,
    mulDivNumber
});

export default rootReducer; 