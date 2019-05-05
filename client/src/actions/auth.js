import { AUTHENTICATED, LOGIN } from "../constants/actionTypes";
import { push } from "connected-react-router";
import { fetch } from "./helper"
// const API = `http://localhost:3001/api/v1`;

export function setCurrentUser(currentUser) {
  const { name, username, password } = currentUser;
  return {
    user: {
      name: name,
      username: username,
      password: password
    }
  };
}

export function getCurrentUser(currentUser) {
  const { username, password } = currentUser;
  return {
    user: {
      username: username,
      password: password
    }
  };
}

export function loggedIn () {
  return dispatch => {
    return fetch('/api/v1/current_user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json())
    .then(res => dispatch(setCurrentUser(res.user)))
  }
}


export function login({ username, password }) {
  const request = new Request(`/auth`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`
    }),
    body: JSON.stringify({ user: { username: username, password: password } })
  });
  return dispatch => {
    return fetch(request)
      .then(res => res.json())
      .then(res => {
        const { user, jwt } = res;

        // if(jwt === localStorage.token)
        dispatch({ type: LOGIN, payload: user, token: jwt });
        localStorage.setItem("token", jwt);
        if (loggedIn()) {
          dispatch(push("/dashboard"));
        }
      })
      .catch(err => {
        alert(err);
      });
  };
}

export function signup(user) {
  // console.log("user in auth action: ", user)
  return dispatch => {
    return fetch(`/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(setCurrentUser(user))
    })
      .then(res => res.json())
      .then(res => {
        const { jwt, user } = res;
        dispatch({
          type: AUTHENTICATED,
          payload: {
            jwt,
            user
          }
        });
        // dispatch({
        //   type: LOGIN,
        //   payload: user,
        //   token: jwt
        // });
        localStorage.setItem("token", jwt);
        dispatch(push("/dashboard"));
      });
  };
}
