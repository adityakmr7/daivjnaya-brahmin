import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
} from "./../actions/constants/userConstants";

const initialState = {
  loading: false,
  userProfileData: [],
  error: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfileData: action.payload,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        loading: true,
        error: "Network Error",
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
