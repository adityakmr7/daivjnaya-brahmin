import {
  GET_ALL_COMMENT_BY_POST_ID_ERROR,
  GET_ALL_COMMENT_BY_POST_ID_LOADING,
  GET_ALL_COMMENT_BY_POST_ID_SUCCESS,
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
  GET_USER_POST_BY_ID_ERROR,
  GET_USER_POST_BY_ID_LOADING,
  GET_USER_POST_BY_ID_SUCCESS,
  POST_LIKED_ERROR,
  POST_LIKED_SUCCESS,
  POST_POST_ERROR,
  POST_POST_SUCCESS,
  POST_POST_SUCCESS_LOADING,
  POST_UN_LIKED_ERROR,
  POST_UN_LIKED_SUCCESS,
} from "./../actions/constants/postConstant";

const initialState = {
  postLoading: false,
  postList: [],
  error: "",
  creatingPost: false,
  postCreationMessage: false,
  postLikedMessage: "",

  //
  postUserLoading: false,
  postUserPostId: "",
  postUserError: "",
  //Comment
  allCommentLoading: false,
  allComment: "",
  allCommentError: "",
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
    case POST_POST_SUCCESS_LOADING:
      return {
        ...state,
        creatingPost: true,
      };
    case POST_POST_SUCCESS:
      return {
        ...state,
        creatingPost: false,
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
      const newPostList = postList.map((item) =>
        item.postId === postId ? { ...item, isLiked: true } : item
      );

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
    // post user post id
    case GET_USER_POST_BY_ID_LOADING:
      return {
        ...state,
        postUserLoading: true,
      };
    case GET_USER_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postUserLoading: false,
        postUserPostId: action.payload._embedded.normalPostResourceList,
      };
    case GET_USER_POST_BY_ID_ERROR:
      return {
        ...state,
        postUserLoading: false,
        postUserPostId: "",
        postUserError: action.error,
      };
    //Comment
    case GET_ALL_COMMENT_BY_POST_ID_LOADING:
      return {
        ...state,
        allCommentLoading: true,
        allComment: "",
        allCommentError: "",
      };
    case GET_ALL_COMMENT_BY_POST_ID_SUCCESS:
      return {
        ...state,
        allCommentLoading: false,
        allComment: action.payload._embedded.commentResourceList,
        allCommentError: "",
      };
    case GET_ALL_COMMENT_BY_POST_ID_ERROR:
      return {
        allCommentLoading: false,
        allComment: "",
        allCommentError: "Something Went Wrong",
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
