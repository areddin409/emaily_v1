import { FETCH_SURVEYS } from '../actions/types';

export default function (state = [], { payload, type }) {
  switch (type) {
    case FETCH_SURVEYS:
      return payload;

    default:
      return state;
  }
}
