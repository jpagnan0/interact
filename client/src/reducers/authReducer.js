import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_ERROR,
  LOGIN,
} from "../constants/actionTypes";

export function authReducer(
  state = {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
  },
  action
) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload,
      };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function currentUser(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      const { token } = action;
      const { id, name, username, medications, interactions  } = action.payload;
      return {
        ...state,
        ...{ id, name, username, medications, interactions, token }
      };

    default:
      return state;
  }
}
