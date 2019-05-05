import {GET_USER_INTERACTIONS } from "../constants/actionTypes";
// import { push } from "connected-react-router";
const API = `https://interact-io.herokuapp.com/api/v1`;

export function userInteractions() {
  return dispatch => {
    return fetch(`${API}/current_interactions`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
      .then(r => r.json())
      .then(res => dispatch({ type: GET_USER_INTERACTIONS, payload: res}))
  };
}
