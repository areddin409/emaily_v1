import { FETCH_USER } from '../actions/types';

export default function (state = null, { payload, type }) {
  switch (type) {
    case FETCH_USER:
      return payload || false;

    default:
      return state;
  }
}
