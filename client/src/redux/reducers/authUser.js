import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  //AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticatedUser: null,
  business: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticatedUser: true,
        business: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedUser: true,
        business: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticatedUser: true,
        business: payload
      };
    case ACCOUNT_DELETED:
      return {
        ...state,
        token: null,
        isAuthenticatedUser: false,
        business: null
      };
    case LOGOUT:
      return {
        ...state,
        token: localStorage.removeItem("token"),
        isAuthenticatedUser: false,
        business: null
      };
    default:
      return state;
  }
}
