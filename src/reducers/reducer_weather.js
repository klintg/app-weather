//reducers are just functions
//we never want to manipulate the state of the existing data.
import {FETCH_WEATHER} from '../actions/index'

export default function (state =[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]); instead of using this we can use
      return [action.payload.data, ...state]
  }
  return state;
}
