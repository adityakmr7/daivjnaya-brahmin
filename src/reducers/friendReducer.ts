import {
  GET_FRIEND_FRIENDS_ERROR,
  GET_FRIEND_FRIENDS_LOADING,
  GET_FRIEND_FRIENDS_SUCCESS,
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
  friendsFriend: [],
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
        friendsFriend: [],
        friendsFriendError: "",
      };
    case GET_FRIEND_FRIENDS_SUCCESS:
      return {
        ...state,
        loadingFriendFriends: false,
        friendsFriend: action.payload,
        friendsFriendError: "",
      };
    case GET_FRIEND_FRIENDS_ERROR:
      return {
        ...state,
        loadingFriendFriends: false,

        friendsFriendError: "Error loading",
      };
    default:
      return {
        ...state,
      };
  }
};
