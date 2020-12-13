import restServices from "../services/restServices";
import {
  GET_ALL_FRIENDS_ERROR,
  GET_ALL_FRIENDS_LOADING,
  GET_ALL_FRIENDS_SUCCESS,
  GET_ALL_FRIENDS_REQUEST_LOADING,
  GET_ALL_FRIENDS_REQUEST_SUCCESS,
  GET_ALL_FRIENDS_REQUEST_ERROR,
  GET_FRIEND_FRIENDS_LOADING,
  GET_FRIEND_FRIENDS_SUCCESS,
  GET_FRIEND_FRIENDS_ERROR,
  POST_FRIEND_UID_REQUEST_LOADING,
  POST_FRIEND_UID_REQUEST_SUCCESS,
  POST_FRIEND_UID_REQUEST_ERROR,
  POST_FRIEND_UID_ACCEPT_REQUEST_LOADING,
  POST_FRIEND_UID_ACCEPT_REQUEST_SUCCESS,
  POST_FRIEND_UID_ACCEPT_REQUEST_ERROR,
  POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_LOADING,
  POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_SUCCESS,
  POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_ERROR,
  PUT_FRIEND_UID_UNFRIEND_ERROR,
  PUT_FRIEND_UID_UNFRIEND_SUCCESS,
  PUT_FRIEND_UID_UNFRIEND_LOADING,
  GET_ALL_FRIEND_REQUEST_LOADING,
  GET_ALL_FRIEND_REQUEST_SUCCESS,
  GET_ALL_FRIEND_REQUEST_ERROR,
} from "./constants/friendsConstant";

export const getAllFriends = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_FRIENDS_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/friend")
    .then((res) => {
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
// export const getAllFriendRequest = () => (dispatch: any) => {
//   dispatch({
//     type: GET_ALL_FRIENDS_REQUEST_LOADING,
//   });
//   const _rest = new restServices();
//   _rest
//     .get("/friend")
//     .then((res) => {
//       dispatch({
//         type: GET_ALL_FRIENDS_REQUEST_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_ALL_FRIENDS_REQUEST_ERROR,
//         error: err,
//       });
//     });
// };

export const getFriendFriends = (userId: number) => (dispatch: any) => {
  dispatch({
    type: GET_FRIEND_FRIENDS_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/friend/${userId}/friend`)
    .then((res) => {
      dispatch({
        type: GET_FRIEND_FRIENDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_FRIEND_FRIENDS_ERROR,
        error: err,
      });
    });
};

/**
 *  Add Friend
 */

export const friendUidRequest = (userId: number) => (dispatch: any) => {
  dispatch({
    type: POST_FRIEND_UID_REQUEST_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post(`/friend/${userId}/request`, {})
    .then((res) => {
      dispatch({
        type: POST_FRIEND_UID_REQUEST_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_FRIEND_UID_REQUEST_ERROR,
        error: err,
      });
    });
};
// Accept Request
export const friendUidAcceptRequest = (userId: number) => (dispatch: any) => {
  dispatch({
    type: POST_FRIEND_UID_ACCEPT_REQUEST_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post(`/friend/${userId}/request/accept`, {})
    .then((res) => {
      dispatch({
        type: POST_FRIEND_UID_ACCEPT_REQUEST_SUCCESS,
        payload: res,
      });
      dispatch(getAllFriendRequest());
    })
    .catch((err) => {
      dispatch({
        type: POST_FRIEND_UID_ACCEPT_REQUEST_ERROR,
        error: err,
      });
    });
};
// Cancel request
export const friendUidAcceptRequestCancel = (userId: number) => (
  dispatch: any
) => {
  dispatch({
    type: POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post(`/friend/${userId}/request/cancel`, {})
    .then((res) => {
      dispatch({
        type: POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_SUCCESS,
        payload: res,
      });
      dispatch(getAllFriendRequest());
    })
    .catch((err) => {
      dispatch({
        type: POST_FRIEND_UID_ACCEPT_REQUEST_CANCEL_ERROR,
        error: err,
      });
    });
};

export const friendUidUnfriend = (userId: number) => (dispatch: any) => {
  dispatch({
    type: PUT_FRIEND_UID_UNFRIEND_LOADING,
  });
  const _rest = new restServices();
  _rest
    .put(`/friend/${userId}/unfriend`, {})
    .then((res) => {
      dispatch({
        type: PUT_FRIEND_UID_UNFRIEND_SUCCESS,
        payload: res,
        userId: userId,
      });
    })
    .catch((err) => {
      dispatch({
        type: PUT_FRIEND_UID_UNFRIEND_ERROR,
        error: err,
      });
    });
};

export const getAllFriendRequest = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_FRIEND_REQUEST_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/friend/request`)
    .then((res) => {
      dispatch({
        type: GET_ALL_FRIEND_REQUEST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_FRIEND_REQUEST_ERROR,
        error: err,
      });
    });
};
