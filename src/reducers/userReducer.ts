import {
  GET_USER_DETAIL_BY_ID_ERROR,
  GET_USER_DETAIL_BY_ID_LOADING,
  GET_USER_DETAIL_BY_ID_SUCCESS,
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_PROFILE_PICTURE_ERROR,
  USER_PROFILE_PICTURE_SUCCESS,
} from "./../actions/constants/userConstants";

const initialState = {
  loading: false,
  userProfileData: [],
  error: "",
  userDetailByIdLoading: false,
  userDetailById: "",
  userDetailByIdError: "",
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
    case USER_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        status: action.payload,
      };
    case USER_PROFILE_PICTURE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case GET_USER_DETAIL_BY_ID_LOADING:
      return {
        ...state,
        userDetailByIdLoading: true,
      };
    case GET_USER_DETAIL_BY_ID_SUCCESS:
      return {
        ...state,
        userDetailByIdLoading: false,
        userDetailById: action.payload,
      };
    case GET_USER_DETAIL_BY_ID_ERROR:
      return {
        ...state,
        userDetailById: "",
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
