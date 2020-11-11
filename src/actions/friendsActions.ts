import restServices from "../services/restServices";
import {
  GET_ALL_FRIENDS_ERROR,
  GET_ALL_FRIENDS_LOADING,
  GET_ALL_FRIENDS_SUCCESS,
  GET_ALL_FRIENDS_REQUEST_LOADING,
  GET_ALL_FRIENDS_REQUEST_SUCCESS,
  GET_ALL_FRIENDS_REQUEST_ERROR,
} from "./constants/friendsConstant";

export const getAllFriends = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_FRIENDS_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/friend")
    .then((res) => {
      console.log("friends", res);
      dispatch({
        type: GET_ALL_FRIENDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_FRIENDS_ERROR,
        error: err,
      });
    });
};
export const getAllFriendRequest = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_FRIENDS_REQUEST_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/friend")
    .then((res) => {
      console.log("friends", res);
      dispatch({
        type: GET_ALL_FRIENDS_REQUEST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_FRIENDS_REQUEST_ERROR,
        error: err,
      });
    });
};
