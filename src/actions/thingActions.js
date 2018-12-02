import { GET_THINGS_SUCCESS } from '../actions/constants';
import { getThings } from '../api/thingApi';

export function getThingsSuccess(things) {
  return {
    type: GET_THINGS_SUCCESS,
    things,
  };
}

export function loadThings(data) {
  return function(dispatch) {
    return getThings(data)
      .then(results => {
        console.log('results', results);
        dispatch(getThingsSuccess(results));
      });
  };
}
