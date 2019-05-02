import { GET_USER_INTERACTIONS} from '../constants/actionTypes';

export function currentUserInteractions(state={
  interactions: []
}, action) {
  switch (action.type) {
    case GET_USER_INTERACTIONS:
      return {
        ...state,
        interactions: action.payload
      }
    default:
      return state
  }
}
