import {
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
  POST_LIKED_ERROR,
  POST_LIKED_SUCCESS,
  POST_POST_ERROR,
  POST_POST_SUCCESS,
  POST_UN_LIKED_ERROR,
  POST_UN_LIKED_SUCCESS,
} from "./../actions/constants/postConstant";

const initialState = {
  postLoading: false,
  postList: "",
  error: "",
  postCreationMessage: false,
  postLikedMessage: "",
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_POST_LOADING:
      return {
        ...state,
        postLoading: true,
      };
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postList: action.payload._embedded.normalPostResourceList,
      };
    case GET_ALL_POST_ERROR:
      return {
        ...state,
        postLoading: true,
        error: "Network Error",
      };
    case POST_POST_SUCCESS:
      return {
        ...state,
        postCreationMessage: action.payload,
      };
    case POST_POST_ERROR:
      return {
        ...state,
        postCreationMessage: true,
      };
    case POST_LIKED_SUCCESS:
      return {
        ...state,
        postLikedMessage: action.payload.status,
      };
    case POST_LIKED_ERROR:
      return {
        ...state,
        postLikedMessage: "",
      };
    case POST_UN_LIKED_SUCCESS:
      return {
        ...state,
        postUnLikedMessage: action.payload.status,
      };
    case POST_UN_LIKED_ERROR:
      return {
        ...state,
        postUnLikedMessage: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
