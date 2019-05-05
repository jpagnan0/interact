import {GET_USER_INTERACTIONS } from "../constants/actionTypes";
// import { push } from "connected-react-router";
// const API = `http://localhost:3001/api/v1`;
import { fetch } from "./helper"
export function userInteractions() {
  return dispatch => {
    return fetch(`/current_interactions`,
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
