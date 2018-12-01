import { GET_THINGS_SUCCESS } from '../actions/constants';
import thingApi from '../api/thingApi';

export function getThingsSuccess(things) {
  return {
    type: GET_THINGS_SUCCESS,
    things,
  };
}

export function loadThings(things) {
  return function(dispatch) {
    return thingApi.getThings()
      .then(things => {
        dispatch(getThingsSuccess(things));
      });
  };
}
