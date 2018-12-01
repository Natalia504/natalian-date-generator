import { combineReducers } from 'redux';
import things from './thingReducer';

const rootReducer = combineReducers({
  things,
});

export default rootReducer;
