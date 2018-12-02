import { GET_THINGS_SUCCESS } from '../actions/constants';

export default function thingReducer(state = [], action) {
  switch(action.type) {
    case GET_THINGS_SUCCESS:
      return action.things;
    default:
      return state;
  }
}
