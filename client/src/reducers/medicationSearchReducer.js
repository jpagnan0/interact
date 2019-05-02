import {
  RECEIVE_MEDICATIONS,
  SET_TERM
} from "../constants/actionTypes";

export function medicationTerm(state = '', action) {
  switch (action.type) {
    case SET_TERM:
      return {search: action.medicationTerm.join('')}
    default:
      return state;
  }
}

export function medicationsReducer(state = {
    medications: []
  } , action) {
  switch (action.type) {

    case RECEIVE_MEDICATIONS:
      return Object.assign({}, state, {
        medications: action.medications
      });
    case "TYPING":
      return Object.assign({}, state, {
        medications: action.medications
      })
    default:
      return state;
  }
}
