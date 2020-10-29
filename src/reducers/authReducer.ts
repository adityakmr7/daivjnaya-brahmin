import { USER_SIGN_UP } from "../constants/authConstant";

export type AuthState = {
  readonly isAuthenticated: boolean;
  readonly access_token: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  access_token: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
