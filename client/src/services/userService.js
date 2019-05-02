import { authHeader, endpoints } from "../utils";

export const userService = {
  login,
  logout,
  signup,
  // getAll,
  // getById,
  update,
  remove
};
const {
  base,
  signupPath,
  loginPath,
  userPath,
  currentInteractions,
  currentMedications
} = endpoints;

function authorized () {
  return dispatch => {
    return fetch(`${base}${userPath}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json())
  }
}
function login(username, password) {
  console.log(`fn login (@username, @password):(${username},${password})`);
  const requestOpts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };
  return dispatch => {
    return fetch(`${base}${loginPath}`, requestOpts)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        if( res.jwt !== localStorage.token )
        {
          localStorage.setItem("token", res.jwt);
          return res.user;
        }
        else {
          return dispatch(authorized())
        }
      });
  };
}

function signup(user) {
  const requestOpts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${base}${signupPath}`, requestOpts).then(res => res.json());
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${base}/users/${user.id}`, requestOptions).then(res=> res.json());
}
function remove(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(`${base}/users/${id}`, requestOptions).then(res =>
    res.json()
  );
}
