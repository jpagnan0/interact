import {
  RECEIVE_MEDICATIONS,
  SET_TERM,
} from '../constants/actionTypes';
import { fetch } from "./helper"
// const MEDICATION_URL = `http://localhost:3001/api/v1`;

export function setTerm(medication) {
  return{
    type: SET_TERM,
    medication
  }
}

function fetchMedications(medication) {
  return fetch(`/search?medication_name=${medication}`)
        .then(res => res.json())
}
export function medicationTerm(searchTerm) {

  return dispatch =>
  {
    dispatch({
      type: SET_TERM,
      medicationTerm: [...searchTerm]
    })
  }
}
export function doFetchMedications(medication) {

  return (dispatch) => {

      fetchMedications(medication)
      .then(json => {
        if(json.status === 500 ) {
           dispatch({type: "TYPING", medications: []})
        }
        else {
        dispatch({
          type: RECEIVE_MEDICATIONS,
          medications: json
        })
      }
    })
  }
}
