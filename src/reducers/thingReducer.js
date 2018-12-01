import { GET_THINGS_SUCCESS } from '../actions/constants';

export default function thingReducer(state = [], action) {
  switch(action.type) {
    case GET_THINGS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.things),
      ];
    default:
      return state;
  }
}
