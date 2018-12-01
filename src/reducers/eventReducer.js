import { LOAD_EVENTS } from '../actions/constants';

export default function eventReducer(state = [], action) {
  switch(action.type) {
    case LOAD_EVENTS:
      return [
        ...state,
        Object.assign({}, action.events),
      ];
    default:
      return state;
  }
}
