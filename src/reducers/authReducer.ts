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
  readonly signUpError: string;
  readonly successMessage: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: {},
  errorMessage: false,
  loading: false,
  signUpLoading: false,
  signUpError: "",
  successMessage: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_SIGN_UP_LOADING:
      return {
        ...state,
        signUpLoading: true,
        signUpError: "",
        successMessage: "",
      };
    case USER_SIGN_UP:
      return {
        ...state,
        signUpLoading: false,
        signUpError: "",
        successMessage: action.payload.status,
      };

    case USER_SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: true,
        signUpError: action.error,
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
