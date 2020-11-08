import {
  LOGIN_USER_LOADING,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
} from "./../actions/constants/authConstant";
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../actions/constants/authConstant";
import { USER_AUTHORIZED } from "../actions/constants/authConstant";
import { USER_SIGN_UP } from "../actions/constants/authConstant";

export type AuthState = {
  readonly isAuthenticated: boolean;
  readonly userData: {};
  readonly errorMessage: boolean;
  readonly loading: boolean;
  readonly signUpLoading: boolean;
  readonly signUpError: boolean;
  readonly successMessage: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: {},
  errorMessage: false,
  loading: false,
  signUpLoading: false,
  signUpError: false,
  successMessage: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        signUpLoading: false,
        successMessage: action.payload,
      };
    case USER_SIGN_UP_LOADING:
      return {
        ...state,
        signUpLoading: true,
      };
    case USER_SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
        loading: false,
        errorMessage: false,
      };
    case LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: true,
      };
    case USER_AUTHORIZED:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
