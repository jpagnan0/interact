import fetch from 'cross-fetch';
import {
  RECEIVE_MEDICATIONS,
  SET_TERM,
} from '../constants/actionTypes';

const MEDICATION_URL = `http://localhost:3000/api/v1/search?medication_name=`;

export function setTerm(medication) {
  return{
    type: SET_TERM,
    medication
  }
}

function fetchMedications(medication) {
  return fetch(`${MEDICATION_URL}${medication}`)
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
