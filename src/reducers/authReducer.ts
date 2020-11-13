import {
  LOGIN_USER_LOADING,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
} from "./../actions/constants/authConstant";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../actions/constants/authConstant";
import { USER_AUTHORIZED } from "../actions/constants/authConstant";
import { USER_SIGN_UP } from "../actions/constants/authConstant";

export type AuthState = {
  readonly isAuthenticated: boolean;
  readonly userData: {};
  readonly loginLoading: boolean;
  readonly loginSuccess: string;
  readonly loginError: string;
  //Signup
  readonly signUpLoading: boolean;
  readonly signUpError: string;
  readonly successMessage: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: {},
  loginLoading: false,
  loginSuccess: "",
  loginError: "",
  //signup
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
    case LOGIN_USER_LOADING:
      return {
        ...state,
        loginLoading: true,
        isAuthenticated: false,
        loginError: "",
        loginSuccess: "",
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginLoading: false,
        userData: action.payload,
        loginError: "",
        loginSuccess: "User Logged In.",
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
        loginSuccess: "",
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
        loading: false,
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
