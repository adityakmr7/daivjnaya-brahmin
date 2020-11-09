import {
  GET_ALL_FRIENDS_ERROR,
  GET_ALL_FRIENDS_LOADING,
  GET_ALL_FRIENDS_SUCCESS,
} from "../actions/constants/friendsConstant";

const initialState = {
  loading: false,
  allFriendList: [],
  error: "",
};

export default (state = initialState, action: any) => {
  switch (action.payload) {
    case GET_ALL_FRIENDS_LOADING:
      return {
        ...state,
        loading: true,
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
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
