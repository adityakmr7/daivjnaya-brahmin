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
  postList: [],
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
      const { data, postId } = action.payload;
      const { postList } = state;
      // data.postId
      // const getById = postList.findIndex((item) => {
      //   return item.postId === postId;
      // });
      const newPostList = postList.map((item) =>
        item.postId === postId ? { ...item, isLiked: true } : item
      );
      // console.log("getById", (postList[getById].isLiked = true));
      return {
        ...state,
        postLikedMessage: data.status,
        postList: [...newPostList],
      };
    case POST_LIKED_ERROR:
      return {
        ...state,
        postLikedMessage: "",
      };
    case POST_UN_LIKED_SUCCESS:
      const { value, id } = action.payload;
      const { postList: list } = state;
      const updatedPostList = list.map((item) =>
        item.postId === id ? { ...item, isLiked: false } : item
      );
      // console.log("getById", (postList[getById].isLiked = true));
      return {
        ...state,
        postUnLikedMessage: action.payload.status,
        postList: updatedPostList,
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
