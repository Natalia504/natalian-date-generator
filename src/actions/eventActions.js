import { LOAD_EVENTS } from '../actions/constants';

export function loadEvents(events) {
  return {
    type: LOAD_EVENTS,
    events,
  }
}
