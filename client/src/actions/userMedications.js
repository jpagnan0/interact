import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS,GET_USER_INTERACTIONS } from "../constants/actionTypes";
const API = `http://localhost:3001/api/v1`;
const headers = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
}

export function postUserMedication({ rxcui, name, name_alt}, id) {
  return dispatch => {
    return fetch(`${API}/user_medications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      },
      body: JSON.stringify({
        id,
        rxcui,
        name,
        name_alt
      })
    })
      .then(r => r.json())
      .then(res => dispatch({ type: GET_USER_MEDICATIONS, payload: res}))
    //  .then(() => dispatch({type: GET_USER_INTERACTIONS, pay }))
  };
}

export function getUserMedications () {
  return dispatch => {
    return fetch(`${API}/current_medications`, headers)
    .then(r => r.json())
    .then(res => {
      // debugger
      dispatch({ type: GET_USER_MEDICATIONS, payload: res})
    })
  }
};
export function updateUserMedications() {
 return dispatch => dispatch(getUserMedications())
}
