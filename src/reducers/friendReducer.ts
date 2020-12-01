import {
  GET_FRIEND_FRIENDS_ERROR,
  GET_FRIEND_FRIENDS_LOADING,
  GET_FRIEND_FRIENDS_SUCCESS,
  PUT_FRIEND_UID_UNFRIEND_LOADING,
  PUT_FRIEND_UID_UNFRIEND_SUCCESS,
} from "./../actions/constants/friendsConstant";
import {
  GET_ALL_FRIENDS_ERROR,
  GET_ALL_FRIENDS_LOADING,
  GET_ALL_FRIENDS_SUCCESS,
} from "../actions/constants/friendsConstant";

const initialState = {
  loading: false,
  allFriendList: [],
  error: "",
  loadingFriendFriends: false,
  friendsFriend: "",
  friendsFriendArray: [],
  friendsFriendError: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_FRIENDS_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        allFriendList: action.payload,
        error: "",
      };
    case GET_ALL_FRIENDS_ERROR:
      return {
        ...state,
        allFriendList: "",
        error: action.error,
      };
    case GET_FRIEND_FRIENDS_LOADING:
      return {
        ...state,
        loadingFriendFriends: true,
        friendsFriend: "",
        friendsFriendArray: [],
        friendsFriendError: "",
      };
    case GET_FRIEND_FRIENDS_SUCCESS:
      return {
        ...state,
        loadingFriendFriends: false,
        friendsFriend: action.payload._embedded.userResourceList,
        friendsFriendArray: action.payload,
        friendsFriendError: "",
      };
    case GET_FRIEND_FRIENDS_ERROR:
      return {
        ...state,
        loadingFriendFriends: false,

        friendsFriendError: "Error loading",
      };
    case PUT_FRIEND_UID_UNFRIEND_SUCCESS:
      console.log("friendfriend", state.friendsFriend);
      const updateFriendListList = state.friendsFriend.map((item) =>
        item.uId === action.userId ? { ...item, isFriend: false } : item
      );
      return {
        ...state,
        friendsFriend: updateFriendListList,
      };
    default:
      return {
        ...state,
      };
  }
};
