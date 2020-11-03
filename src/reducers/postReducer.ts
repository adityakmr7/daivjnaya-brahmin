import {
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
} from "./../actions/constants/postConstant";

const initialState = {
  loading: false,
  postList: [],
  error: "",
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        postList: action.payload,
      };
    case GET_ALL_POST_ERROR:
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

export default postReducer;
