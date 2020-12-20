import {
  LOGIN_USER_LOADING,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_LOADING,
  PASSWORD_RESET_SUCCESS,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
  PASSWORD_CHANGE_OTP_LOADING,
  PASSWORD_CHANGE_OTP_SUCCESS,
  PASSWORD_CHANGE_OTP_ERROR,
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
  // forgot password
  readonly forgotPasswordLoading: boolean;
  readonly forgotPasswordSuccess: string;
  readonly forgotPasswordError: string;
  // otp update
  readonly otpPasswordLoading: boolean;
  readonly otpPasswordSuccess: string;
  readonly otpPasswordError: string;
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
  //forgot password
  forgotPasswordLoading: false,
  forgotPasswordSuccess: "",
  forgotPasswordError: "",
  //otp
  otpPasswordLoading: false,
  otpPasswordSuccess: "",
  otpPasswordError: "",
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
        successMessage: action.payload.status,
        signUpError: "",
      };

    case USER_SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        successMessage: "",
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
    case PASSWORD_RESET_LOADING:
      return {
        ...state,
        forgotPasswordLoading: true,
        forgotPasswordSuccess: "",
        forgotPasswordError: "",
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: "Otp Sent to Your Email",
        forgotPasswordError: "",
      };
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        forgotPasswordLoading: false,
        forgotPasswordSuccess: "",
        forgotPasswordError: action.error,
      };
    case PASSWORD_CHANGE_OTP_LOADING:
      return {
        ...state,
        otpPasswordLoading: true,
        otpPasswordSuccess: "",
        otpPasswordError: "",
      };
    case PASSWORD_CHANGE_OTP_SUCCESS:
      return {
        ...state,
        otpPasswordLoading: false,
        otpPasswordSuccess: "Password Reset SuccessFull",
        otpPasswordError: "",
      };
    case PASSWORD_CHANGE_OTP_ERROR:
      return {
        ...state,
        otpPasswordLoading: false,
        otpPasswordSuccess: "",
        otpPasswordError: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
