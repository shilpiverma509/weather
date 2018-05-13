//reducers are pure fucntions
import { FETCH_WEATHER } from "../actions/index";

//initial state will be a list of cities. so initial state=[]

export default function(state = [], action) {
  //console.log("action by reducer", action);

  switch (action.type) {
    case FETCH_WEATHER:
      //concat ://creates a new array that merge the old data with new data

      return [action.payload.data, ...state];
  }
  return state;
}
