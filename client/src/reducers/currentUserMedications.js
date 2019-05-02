import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS, GET_USER_INTERACTIONS} from '../constants/actionTypes';

export function currentUserMedications(state={
  medications: []
}, action) {
  switch (action.type) {
    case POST_USER_MEDICATIONS:
      return {
        ...state,
      }
    case GET_USER_MEDICATIONS:
      return {
        ...state,
        medications: action.payload
      }
    default:
      return state
  }
}
