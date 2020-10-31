import { LOGIN_USER, LOGOUT_USER } from "../actions/constants/authConstant";
import { USER_AUTHORIZED } from "../actions/constants/authConstant";
import { USER_SIGN_UP } from "../actions/constants/authConstant";

export type AuthState = {
  readonly isAuthenticated: boolean;
  readonly userData: {};
  readonly errorMessage: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: {},
  errorMessage: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
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
